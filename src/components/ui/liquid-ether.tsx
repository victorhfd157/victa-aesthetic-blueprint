import { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface LiquidEtherProps {
  className?: string;
  colors?: string[];
  speed?: number;
  opacity?: number;
}

export const LiquidEther = ({ 
  className = '',
  colors = ['#38bdf8', '#818cf8', '#c084fc'],
  speed = 0.5,
  opacity = 0.3
}: LiquidEtherProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const animationFrameRef = useRef<number>();

  useEffect(() => {
    if (!containerRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 5;
    cameraRef.current = camera;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ 
      alpha: true, 
      antialias: true 
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    containerRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Shader material for liquid effect
    const vertexShader = `
      uniform float time;
      varying vec2 vUv;
      varying vec3 vPosition;
      
      void main() {
        vUv = uv;
        vPosition = position;
        
        vec3 pos = position;
        pos.z += sin(pos.x * 2.0 + time) * 0.3;
        pos.z += cos(pos.y * 2.0 + time * 0.8) * 0.3;
        
        gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
      }
    `;

    const fragmentShader = `
      uniform float time;
      uniform vec3 color1;
      uniform vec3 color2;
      uniform vec3 color3;
      uniform float opacity;
      varying vec2 vUv;
      varying vec3 vPosition;
      
      void main() {
        vec2 uv = vUv;
        
        float wave1 = sin(uv.x * 3.0 + time) * 0.5 + 0.5;
        float wave2 = cos(uv.y * 3.0 + time * 0.7) * 0.5 + 0.5;
        float wave3 = sin((uv.x + uv.y) * 2.0 + time * 1.3) * 0.5 + 0.5;
        
        vec3 color = mix(color1, color2, wave1);
        color = mix(color, color3, wave2 * wave3);
        
        float alpha = opacity * (0.5 + 0.5 * wave3);
        
        gl_FragColor = vec4(color, alpha);
      }
    `;

    // Convert hex colors to RGB
    const hexToRgb = (hex: string) => {
      const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
      return result ? {
        r: parseInt(result[1], 16) / 255,
        g: parseInt(result[2], 16) / 255,
        b: parseInt(result[3], 16) / 255
      } : { r: 1, g: 1, b: 1 };
    };

    const color1 = hexToRgb(colors[0]);
    const color2 = hexToRgb(colors[1]);
    const color3 = hexToRgb(colors[2]);

    // Create geometry and material
    const geometry = new THREE.PlaneGeometry(20, 20, 32, 32);
    const material = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms: {
        time: { value: 0 },
        color1: { value: new THREE.Vector3(color1.r, color1.g, color1.b) },
        color2: { value: new THREE.Vector3(color2.r, color2.g, color2.b) },
        color3: { value: new THREE.Vector3(color3.r, color3.g, color3.b) },
        opacity: { value: opacity }
      },
      transparent: true,
      side: THREE.DoubleSide
    });

    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    // Animation
    let time = 0;
    const animate = () => {
      time += 0.01 * speed;
      material.uniforms.time.value = time;
      
      mesh.rotation.x = Math.sin(time * 0.1) * 0.1;
      mesh.rotation.y = Math.cos(time * 0.15) * 0.1;
      
      renderer.render(scene, camera);
      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      if (!camera || !renderer) return;
      
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      
      if (containerRef.current && renderer.domElement) {
        containerRef.current.removeChild(renderer.domElement);
      }
      
      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, [colors, speed, opacity]);

  return (
    <div 
      ref={containerRef} 
      className={`fixed inset-0 -z-10 ${className}`}
      style={{ pointerEvents: 'none' }}
    />
  );
};
