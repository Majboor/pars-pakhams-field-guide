import { Center, Environment, Float, useGLTF } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import React, { Suspense, useEffect, useMemo, useRef } from "react";
import * as THREE from "three";

export const YAGI_MODEL_URL = "/models/yagi-antenna.glb";

// Mutable transform state driven by the GSAP scroll timeline in App.jsx.
// The model is the "host" of the story, so these values are scrubbed as the
// viewer scrolls through each chapter.
export const radioMotion = {
  x: 0.55,
  y: -0.02,
  z: 0,
  rotX: 0.38,
  rotY: 1.5,
  rotZ: 0,
  scale: 1.5,
  glow: 0.32
};

function SignalWaves() {
  const groupRef = useRef();
  const materials = useMemo(
    () =>
      [0, 1, 2, 3].map(
        () =>
          new THREE.MeshBasicMaterial({
            color: "#f4d35e",
            transparent: true,
            opacity: 0.2,
            side: THREE.DoubleSide
          })
      ),
    []
  );

  useFrame(({ clock }) => {
    const g = groupRef.current;
    if (!g) return;
    const t = clock.elapsedTime;
    g.rotation.z = Math.sin(t * 0.6) * 0.05;
    g.children.forEach((child, index) => {
      const pulse = (t * 0.45 + index * 0.32) % 1;
      child.scale.setScalar(0.6 + pulse * 1.5);
      child.material.opacity = radioMotion.glow * (1 - pulse) * 0.9;
    });
  });

  return (
    <group ref={groupRef} position={[0.05, 0.1, -0.6]} rotation={[Math.PI / 2.05, 0, 0.18]}>
      {[1.2, 1.2, 1.2, 1.2].map((radius, index) => (
        <mesh key={index} material={materials[index]}>
          <torusGeometry args={[radius, 0.01, 12, 110, Math.PI * 1.35]} />
        </mesh>
      ))}
    </group>
  );
}

function AntennaFallback() {
  const groupRef = useRef();

  useFrame(({ clock }) => {
    const g = groupRef.current;
    if (!g) return;
    g.position.set(radioMotion.x, radioMotion.y + Math.sin(clock.elapsedTime * 0.7) * 0.04, radioMotion.z);
    g.rotation.set(radioMotion.rotX, radioMotion.rotY + Math.sin(clock.elapsedTime * 0.4) * 0.04, radioMotion.rotZ);
    g.scale.setScalar(radioMotion.scale);
  });

  return (
    <group ref={groupRef}>
      <mesh position={[0, 0.15, 0]}>
        <cylinderGeometry args={[0.03, 0.03, 2.6, 18]} />
        <meshStandardMaterial color="#0b5f35" metalness={0.55} roughness={0.24} />
      </mesh>
      {[-0.7, -0.32, 0.05, 0.45, 0.84].map((y, index) => (
        <mesh key={y} position={[0, y, 0]} rotation={[0, 0, Math.PI / 2]}>
          <cylinderGeometry args={[0.014, 0.014, 1.25 + index * 0.16, 14]} />
          <meshStandardMaterial color={index % 2 ? "#f4d35e" : "#f7f0d5"} metalness={0.35} roughness={0.32} />
        </mesh>
      ))}
      <mesh position={[0, -1.2, 0]}>
        <boxGeometry args={[0.85, 0.26, 0.5]} />
        <meshStandardMaterial color="#27241e" metalness={0.18} roughness={0.55} />
      </mesh>
      <SignalWaves />
    </group>
  );
}

class ModelLoadBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error) {
    this.props.onError?.(error);
  }

  render() {
    if (this.state.hasError) {
      return (
        <>
          <SceneLights includeEnvironment={false} />
          <AntennaFallback />
        </>
      );
    }

    return this.props.children;
  }
}

function DownloadedModel({ onReady }) {
  const rigRef = useRef();
  const { scene } = useGLTF(YAGI_MODEL_URL);
  const clonedScene = useMemo(() => scene.clone(true), [scene]);

  useEffect(() => {
    onReady?.();
  }, [onReady]);

  useFrame(({ clock }, delta) => {
    const rig = rigRef.current;
    if (!rig) return;
    // Smoothly follow the scroll-driven target with a gentle idle bob/sway so
    // the object always feels alive, like the wasp reference.
    const t = clock.elapsedTime;
    const bob = Math.sin(t * 0.65) * 0.045;
    const sway = Math.sin(t * 0.4) * 0.03;
    const damp = 1 - Math.pow(0.0009, delta);
    rig.position.x += (radioMotion.x - rig.position.x) * damp;
    rig.position.y += (radioMotion.y + bob - rig.position.y) * damp;
    rig.position.z += (radioMotion.z - rig.position.z) * damp;
    rig.rotation.x += (radioMotion.rotX - rig.rotation.x) * damp;
    rig.rotation.y += (radioMotion.rotY + sway - rig.rotation.y) * damp;
    rig.rotation.z += (radioMotion.rotZ - rig.rotation.z) * damp;
    const s = rig.scale.x + (radioMotion.scale - rig.scale.x) * damp;
    rig.scale.setScalar(s);
  });

  return (
    <group ref={rigRef}>
      <Center>
        <primitive object={clonedScene} scale={2.7} />
      </Center>
      <SignalWaves />
    </group>
  );
}

function SceneLights({ includeEnvironment = true }) {
  return (
    <>
      <ambientLight intensity={0.85} />
      <hemisphereLight args={["#fff4d0", "#06251a", 0.9]} />
      <directionalLight position={[4, 5.5, 5]} intensity={2.6} color="#fff6df" castShadow={false} />
      <spotLight position={[-5, 2, 4]} angle={0.5} penumbra={0.8} intensity={1.3} color="#d5af45" />
      <pointLight position={[-3, -2, 3]} intensity={0.8} color="#b72e35" />
      {includeEnvironment && <Environment preset="warehouse" />}
    </>
  );
}

export default function RadioModel({ onReady, onError }) {
  return (
    <Canvas
      camera={{ position: [0, 0, 6.2], fov: 40 }}
      dpr={[1, 1.8]}
      gl={{ alpha: true, antialias: true, preserveDrawingBuffer: true }}
    >
      <ModelLoadBoundary onError={onError}>
        <Suspense fallback={<AntennaFallback />}>
          <SceneLights />
          <Float speed={1.05} rotationIntensity={0.05} floatIntensity={0.14}>
            <DownloadedModel onReady={onReady} />
          </Float>
        </Suspense>
      </ModelLoadBoundary>
    </Canvas>
  );
}

useGLTF.preload(YAGI_MODEL_URL);
