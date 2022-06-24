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


const renderer = new THREE.WebGLRenderer({ alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.append(renderer.domElement)

const cursor = { x: 0, y: 0 }
window.addEventListener('mousemove', (e) => {
    cursor.x = e.clientX / window.innerWidth - 0.5
    cursor.y = e.clientY / window.innerHeight - 0.5
    console.log(cursor.x, cursor.y)
})

const tick = () => {
    window.requestAnimationFrame(tick)
    mesh.rotation.y += 0.005
    const cameraX = -cursor.x - 1
    const cameraY = cursor.y
    // camera.position.x = cameraX;
    // camera.position.y = cameraY;
    camera.position.x += (cameraX - camera.position.x) / 25
    camera.position.y += (cameraY - camera.position.y) / 25



    renderer.render(scene, camera)
}
tick()

// window.setTimeout(() => {
//     renderer.render(scene, camera)
// }, 50)