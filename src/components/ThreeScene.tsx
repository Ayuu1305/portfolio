import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  useGLTF,
  Environment,
  useAnimations,
} from "@react-three/drei";
import { Suspense, useEffect } from "react";

function Model() {
  const { scene, animations } = useGLTF("/robot.glb", true);
  const { actions } = useAnimations(animations, scene);

  useEffect(() => {
    // Play all animations to find the waving one
    Object.values(actions).forEach((action) => {
      if (action) {
        action.reset().play();
        action.setLoop(2201, Infinity); // Set to loop infinitely
      }
    });
  }, [actions]);

  return (
    <primitive
      object={scene}
      scale={2}
      position={[0, -2, 0]} // Centered position
      rotation={[0, 0, 0]} // Face forward
    />
  );
}

const ThreeScene = () => {
  // Check if dark mode is enabled
  const isDarkMode = document.documentElement.classList.contains('dark');

  return (
    <div className="absolute inset-0 z-10 right-0 w-full lg:w-[600px]">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 50 }}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
        }}
        dpr={[1, 2]}
        style={{ position: "absolute", right: 0 }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={isDarkMode ? 0.6 : 0.8} />
          <directionalLight 
            position={[5, 5, 5]} 
            intensity={isDarkMode ? 1 : 1.2} 
            castShadow 
          />
          <pointLight 
            position={[-5, 5, -5]} 
            intensity={isDarkMode ? 0.8 : 0.6} 
            color={isDarkMode ? "#4a90e2" : "#60a5fa"} 
          />

          <Model />

          <Environment 
            preset={isDarkMode ? "night" : "city"} 
            blur={0.8}
          />

          <OrbitControls
            enableZoom={false}
            enablePan={false}
            enableRotate={false}
            autoRotate={false}
          />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default ThreeScene;

// Preload the 3D model
useGLTF.preload("/robot.glb");
