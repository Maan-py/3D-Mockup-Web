import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

const WindowModel = ({ color }) => {
  const { scene } = useGLTF("/assets/double_door_window_small_panes/window.gltf");
  const ref = useRef();

  // Perbarui warna material
  scene.traverse((object) => {
    if (object.isMesh && object.material) {
      object.material.color.set(color);
    }
  });

  // Tambahkan rotasi
  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y -= 0.01;
    }
  });

  return <primitive ref={ref} object={scene} />;
};

const Viewer = ({ color }) => {
  return (
    <div className="w-full h-full basis-1/2 p-5 border-b border-white bg-slate-500">
      <Canvas
        camera={{
          position: [200, 50, 500],
          fov: 50,
        }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} />
        <Suspense fallback={null}>
          <WindowModel color={color} />
        </Suspense>
        <OrbitControls />
      </Canvas>
    </div>
  );
};

export default Viewer;
