import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import './HeroCanvas.css';

export default function HeroCanvas() {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const W = mount.clientWidth;
    const H = mount.clientHeight;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(W, H);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    mount.appendChild(renderer.domElement);

    // Scene & Camera
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, W / H, 0.1, 100);
    camera.position.z = 5;

    // Materials Helper
    const wireMat = (color, opacity = 0.55) =>
      new THREE.MeshBasicMaterial({
        color,
        wireframe: true,
        transparent: true,
        opacity,
      });

    const solidMat = (color, opacity = 0.12) =>
      new THREE.MeshBasicMaterial({
        color,
        transparent: true,
        opacity,
        side: THREE.DoubleSide,
      });

    // Add Geometries
    const shapes = [];

    const addShape = (geo, mat, solidGeo, solidMatInst, x, y, z, rx, ry, rz, sx = 1, sy = 1, sz = 1) => {
      const group = new THREE.Group();

      const solid = new THREE.Mesh(solidGeo, solidMatInst);
      const wire  = new THREE.Mesh(geo, mat);
      group.add(solid);
      group.add(wire);
      group.position.set(x, y, z);
      group.rotation.set(rx, ry, rz);
      group.scale.set(sx, sy, sz);
      scene.add(group);
      shapes.push({ group, speed: Math.random() * 0.006 + 0.002, floatSpeed: Math.random() * 0.8 + 0.4, floatAmp: Math.random() * 0.25 + 0.1 });
      return group;
    };

    // Icosahedron (top right)
    addShape(
      new THREE.IcosahedronGeometry(1, 0),
      wireMat(0x6C4FF6, 0.5),
      new THREE.IcosahedronGeometry(1, 0),
      solidMat(0x6C4FF6, 0.07),
      2.8, 1.2, 0,
      0.3, 0.2, 0,
    );

    // Torus (center-left)
    addShape(
      new THREE.TorusGeometry(0.7, 0.12, 10, 40),
      wireMat(0x4CAF82, 0.45),
      new THREE.TorusGeometry(0.7, 0.12, 10, 40),
      solidMat(0x4CAF82, 0.06),
      -3.2, 0, -0.5,
      0.5, 0.2, 0.3,
    );

    // Octahedron (bottom right)
    addShape(
      new THREE.OctahedronGeometry(0.75, 0),
      wireMat(0xFF6B6B, 0.4),
      new THREE.OctahedronGeometry(0.75, 0),
      solidMat(0xFF6B6B, 0.06),
      3, -1.8, -0.5,
      0.1, 0.5, 0.2,
    );

    // Dodecahedron (top left)
    addShape(
      new THREE.DodecahedronGeometry(0.65),
      wireMat(0xF59E0B, 0.4),
      new THREE.DodecahedronGeometry(0.65),
      solidMat(0xF59E0B, 0.06),
      -2.5, 1.8, -1,
      0.2, 0.3, 0.1,
    );

    // TorusKnot (center, large, subtle)
    addShape(
      new THREE.TorusKnotGeometry(0.55, 0.08, 80, 10),
      wireMat(0x6C4FF6, 0.25),
      new THREE.TorusKnotGeometry(0.55, 0.08, 80, 10),
      solidMat(0x6C4FF6, 0.03),
      0.5, -0.5, -1.5,
      0, 0, 0,
    );

    // Small icosahedrons scattered
    [[`-1.5`, `2.2`, `-0.3`], [`2.2`, `-0.8`, `-1`], [`-3.5`, `-1.5`, `-0.5`]].forEach(([x, y, z], i) => {
      addShape(
        new THREE.IcosahedronGeometry(0.28, 0),
        wireMat(0x8B6FF8, 0.5),
        new THREE.IcosahedronGeometry(0.28, 0),
        solidMat(0x8B6FF8, 0.08),
        parseFloat(x), parseFloat(y), parseFloat(z),
        i * 0.5, i * 0.3, 0,
      );
    });

    // Particle Field
    const particleCount = 120;
    const positions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      positions[i * 3 + 0] = (Math.random() - 0.5) * 14;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 6 - 2;
    }
    const pGeo = new THREE.BufferGeometry();
    pGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const particles = new THREE.Points(
      pGeo,
      new THREE.PointsMaterial({ color: 0x6C4FF6, size: 0.04, transparent: true, opacity: 0.5 }),
    );
    scene.add(particles);

    // Mouse Parallax
    let mouseX = 0, mouseY = 0;
    const onMouseMove = (e) => {
      mouseX = (e.clientX / window.innerWidth  - 0.5) * 1.5;
      mouseY = (e.clientY / window.innerHeight - 0.5) * 1.0;
    };
    window.addEventListener('mousemove', onMouseMove);

    // Resize Handler
    const onResize = () => {
      const w = mount.clientWidth;
      const h = mount.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', onResize);

    // Animation Loop
    let frame;
    const clock = new THREE.Clock();

    const animate = () => {
      frame = requestAnimationFrame(animate);
      const t = clock.getElapsedTime();

      shapes.forEach(({ group, speed, floatSpeed, floatAmp }, i) => {
        group.rotation.x += speed * 0.7;
        group.rotation.y += speed;
        group.position.y += Math.sin(t * floatSpeed + i) * floatAmp * 0.008;
      });

      // Gentle mouse parallax on entire scene
      scene.rotation.y += (mouseX * 0.12 - scene.rotation.y) * 0.05;
      scene.rotation.x += (-mouseY * 0.08 - scene.rotation.x) * 0.05;

      // Rotate particles slowly
      particles.rotation.y = t * 0.025;

      renderer.render(scene, camera);
    };
    animate();

    // Cleanup
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', onResize);
      renderer.dispose();
      if (mount.contains(renderer.domElement)) {
        mount.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div className="hero-canvas" ref={mountRef} aria-hidden="true" />;
}
