import * as THREE from 'three';
import circle from './img/circle.jpg'

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight);
camera.position.set(-1, 0, 3)
scene.add(camera);

const textureLoader = new THREE.TextureLoader();
const texture = textureLoader.load(circle)

const geometry = new THREE.TorusKnotGeometry(0.5, 0.2, 100, 22);
const material = new THREE.MeshMatcapMaterial({ matcap: texture });
const mesh = new THREE.Mesh(geometry, material);
// mesh.rotation.set(0, Math.PI / 4, 0)
scene.add(mesh);


const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.append(renderer.domElement)

window.setTimeout(() => {
    renderer.render(scene, camera)
}, 50)