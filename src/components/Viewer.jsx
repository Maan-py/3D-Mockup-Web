import { Suspense, useEffect, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF, PerspectiveCamera } from "@react-three/drei";

const DoubleWindowModel = ({ color }) => {
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

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y -= 0.01;
    }
  });

  return (
    <>
      <PerspectiveCamera makeDefault position={[200, 50, 500]} fov={50} />
      <primitive ref={ref} object={scene} position={[0, -90, 0]} />
    </>
  );
};

const PictureWindowModel = ({ color }) => {
  const { scene } = useGLTF("/assets/picture_window/scene.gltf");
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

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y -= 0.01;
    }
  });

  return (
    <>
      <PerspectiveCamera makeDefault position={[1, 4, 190]} fov={60} />
      <primitive ref={ref} object={scene} position={[0, -30, 0]} />
    </>
  );
};

const WindowModel = ({ color }) => {
  const { scene } = useGLTF("/assets/window/scene.gltf");
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

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y -= 0.01;
    }
  });

  return (
    <>
      <PerspectiveCamera makeDefault position={[1, 0, 6]} fov={60} />
      <primitive ref={ref} object={scene} position={[0, -2, 0]} />
    </>
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

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y -= 0.01;
    }
  });

  return (
    <>
      <PerspectiveCamera makeDefault position={[200, 50, 300]} fov={60} />
      <primitive ref={ref} object={scene} />
    </>
  );
};

const Viewer = ({ color, model }) => {
  return (
    <div className="w-full h-full basis-1/2 p-5 border-b border-white bg-slate-500">
      <Canvas key={model}>
        {" "}
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} />
        <Suspense fallback={null}>
          {(() => {
            if (model === "door") {
              return <DoorModel key={model} color={color} />;
            } else if (model === "window") {
              return <DoubleWindowModel key={model} color={color} />;
            } else if (model === "window2") {
              return <WindowModel key={model} color={color} />;
            } else if (model === "picture window") {
              return <PictureWindowModel key={model} color={color} />;
            } else {
              return null;
            }
          })()}
        </Suspense>
        <OrbitControls />
      </Canvas>
    </div>
  );
};

export default Viewer;
