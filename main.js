import * as THREE from './node_modules/three/build/three.module.js'; 

const scene = new THREE.Scene(); 

const camera = new THREE.PerspectiveCamera(
    75, window.innerWidth / window.innerHeight, 0.1, 1000
  );
  camera.position.set(0, 10, 20);
  camera.lookAt(0, 0, 0);

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
directionalLight.position.set(10, 20, 10);
scene.add(directionalLight);

function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}
animate();