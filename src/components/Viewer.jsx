import { Suspense, useEffect, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

const WindowModel = ({ color }) => {
  const { scene } = useGLTF("/assets/double_door_window_small_panes/window.gltf");
  const ref = useRef();

  useEffect(() => {
    if (scene) {
      scene.traverse((object) => {
        if (object.isMesh && object.material) {
          object.material.color.set(color);
        }
      });
    }
  }, [color, scene]);

  // Rotasi animasi
  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y -= 0.01; // Rotasi objek pada sumbu Y
    }
  });

  if (!scene) {
    return null;
  }

  return (
    <primitive
      ref={ref}
      object={scene}
      position={[0, -2, 0]} // Pindahkan window ke bawah (ubah nilai Y)
    />
  );
};

const DoorModel = ({ color }) => {
  const { scene } = useGLTF("/assets/door/door.gltf");
  const ref = useRef();

  useEffect(() => {
    if (scene) {
      scene.traverse((object) => {
        if (object.isMesh && object.material) {
          object.material.color.set(color);
        }
      });
    }
  }, [color, scene]);

  // Rotasi animasi
  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y -= 0.01; // Rotasi objek pada sumbu Y
    }
  });

  if (!scene) {
    return null;
  }

  return <primitive ref={ref} object={scene} />;
};

const Viewer = ({ color, model }) => {
  return (
    <div className="w-full h-full basis-1/2 p-5 border-b border-white bg-slate-500">
      <Canvas
        key={model} // Add key here to force full re-mount when model changes
        camera={{
          position: [200, 50, 500],
          fov: 50,
        }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} />
        <Suspense fallback={null}>{model === "door" ? <DoorModel color={color} /> : <WindowModel color={color} />}</Suspense>
        <OrbitControls />
      </Canvas>
    </div>
  );
};

export default Viewer;
