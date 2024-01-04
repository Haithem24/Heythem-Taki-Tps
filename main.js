import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

//////////////////TP1//////////////////
function GLTFLoader_TP01_Loader(gltf_folder,gltf_file,container){
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.outputColorSpace = THREE.SRGBColorSpace;
/********************************************************/
container.appendChild(renderer.domElement);
const my_Width = container.offsetWidth;
const my_Height = container.offsetHeight;
/********************************************************/

renderer.setSize(my_Width, my_Height);
renderer.setClearColor(0x000000);
renderer.setPixelRatio(window.devicePixelRatio);

renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;


const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(45, my_Width / my_Height, 1, 1000);
camera.position.set(4, 5, 11);

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.enablePan = false;
controls.minDistance = 5;
controls.maxDistance = 20;
controls.minPolarAngle = 0.5;
controls.maxPolarAngle = 1.5;
controls.autoRotate = false;
controls.target = new THREE.Vector3(0, 1, 0);
controls.update();

const groundGeometry = new THREE.PlaneGeometry(20, 20, 32, 32);
groundGeometry.rotateX(-Math.PI / 2);
const groundMaterial = new THREE.MeshStandardMaterial({
  color: 0x555555,
  side: THREE.DoubleSide
});
// const groundMesh = new THREE.Mesh(groundGeometry, groundMaterial);
// groundMesh.castShadow = false;
// groundMesh.receiveShadow = true;
// scene.add(groundMesh);

const spotLight = new THREE.SpotLight(0xffffff,  100, 100, 0.22, 1);
spotLight.position.set(0, 80, 40);
spotLight.castShadow = true;
spotLight.shadow.bias = -0.0001;
scene.add(spotLight);


const loader = new GLTFLoader().setPath(gltf_folder);
loader.load(gltf_file, (gltf) => {
  const mesh = gltf.scene;

  mesh.traverse((child) => {
    if (child.isMesh) {
      child.castShadow = true;
      child.receiveShadow = true;
    }
  });

  // mesh.position.set(0, 1.05, -1);
  mesh.position.set(0, 0, 8);
  scene.add(mesh);

  //document.getElementById('progress-container').style.display = 'none';
}/*, ( xhr ) => {
  document.getElementById('progress').innerHTML = `LOADING ${Math.max(xhr.loaded / xhr.total, 1) * 100}/100`;
},*/);

window.addEventListener('resize', () => {
  camera.aspect =my_Width / my_Height;
  camera.updateProjectionMatrix();
  renderer.setSize(my_Width, my_Height);
});

function animate() {
  requestAnimationFrame(animate);
  controls.update();
  renderer.render(scene, camera);
}

animate();
}
const gltf_folder='3D Objects/Table/';
const gltf_file='untitled.gltf';
const my_contianer= document.getElementById('table_dev');
GLTFLoader_TP01_Loader(gltf_folder,gltf_file,my_contianer);


//////////////////TP2//////////////////
function GLTFLoader_TP02_Loader(gltf_folder,gltf_file,container){
  const renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  /********************************************************/
  container.appendChild(renderer.domElement);
  const my_Width = container.offsetWidth;
  const my_Height = container.offsetHeight;
  /********************************************************/
  
  renderer.setSize(my_Width, my_Height);
  renderer.setClearColor(0x000000);
  renderer.setPixelRatio(window.devicePixelRatio);
  
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  
  
  const scene = new THREE.Scene();
  
  const camera = new THREE.PerspectiveCamera(45, my_Width / my_Height, 1, 1000);
  camera.position.set(400, 50, 400);
  
  const controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.enablePan = false;
  // controls.minDistance = 5;
  // controls.maxDistance = 20;
  controls.minPolarAngle = 0.5;
  controls.maxPolarAngle = 1.5;
  controls.autoRotate = false;
  controls.target = new THREE.Vector3(0, 1, 0);
  controls.update();
  
  const groundGeometry = new THREE.PlaneGeometry(20, 20, 32, 32);
  groundGeometry.rotateX(-Math.PI / 2);
  const groundMaterial = new THREE.MeshStandardMaterial({
    color: 0x555555,
    side: THREE.DoubleSide
  });
  // const groundMesh = new THREE.Mesh(groundGeometry, groundMaterial);
  // groundMesh.castShadow = false;
  // groundMesh.receiveShadow = true;
  // scene.add(groundMesh);
  
  const spotLight = new THREE.SpotLight(0xffffff,  100, 2000, 0.22, 1);
  spotLight.position.set(0, 80, 1500);
  spotLight.castShadow = true;
  spotLight.shadow.bias = -0.0001;
  scene.add(spotLight);
  
  
  const loader = new GLTFLoader().setPath(gltf_folder);
  loader.load(gltf_file, (gltf) => {
    const mesh = gltf.scene;
  
    mesh.traverse((child) => {
      if (child.isMesh) {
        child.castShadow = true;
        child.receiveShadow = true;
      }
    });
  
    // mesh.position.set(0, 1.05, -1);
    mesh.position.set(0, 0, 8);
    scene.add(mesh);
  
    //document.getElementById('progress-container').style.display = 'none';
  }/*, ( xhr ) => {
    document.getElementById('progress').innerHTML = `LOADING ${Math.max(xhr.loaded / xhr.total, 1) * 100}/100`;
  },*/);
  
  window.addEventListener('resize', () => {
    camera.aspect =my_Width / my_Height;
    camera.updateProjectionMatrix();
    renderer.setSize(my_Width, my_Height);
  });
  
  function animate() {
    requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene, camera);
  }
  
  animate();
  }


const gltf_path2='3D Objects/Scene Room/';
const gltf_file2='scene.gltf';
const my_contianer2= document.getElementById('table_dev2');
GLTFLoader_TP02_Loader(gltf_path2,gltf_file2,my_contianer2);
/////////////////////////////TP3////////////////////////////////
function GLTFLoader_TP03_Loader(gltf_folder,gltf_file,container){
  const renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  /********************************************************/
  container.appendChild(renderer.domElement);
  const my_Width = container.offsetWidth;
  const my_Height = container.offsetHeight;
  /********************************************************/
  
  renderer.setSize(my_Width, my_Height);
  renderer.setClearColor(0x000000);
  renderer.setPixelRatio(window.devicePixelRatio);
  
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  
  
  const scene = new THREE.Scene();
  
  const camera = new THREE.PerspectiveCamera(45, my_Width / my_Height, 1, 1000);
  camera.position.set(40, 10, 80);
  
  const controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.enablePan = false;
  // controls.minDistance = 5;
  // controls.maxDistance = 20;
  controls.minPolarAngle = 0.5;
  controls.maxPolarAngle = 1.5;
  controls.autoRotate = false;
  controls.target = new THREE.Vector3(0, 1, 0);
  controls.update();
  
  const groundGeometry = new THREE.PlaneGeometry(20, 20, 32, 32);
  groundGeometry.rotateX(-Math.PI / 2);
  const groundMaterial = new THREE.MeshStandardMaterial({
    color: 0x555555,
    side: THREE.DoubleSide
  });
  // const groundMesh = new THREE.Mesh(groundGeometry, groundMaterial);
  // groundMesh.castShadow = false;
  // groundMesh.receiveShadow = true;
  // scene.add(groundMesh);
  
  const spotLight = new THREE.SpotLight(0xffffff,  20,120, 5, 10);
  spotLight.position.set(60, 40, 100);
  spotLight.castShadow = true;
  spotLight.shadow.bias = -0.0001;
  scene.add(spotLight);
  
  
  const loader = new GLTFLoader().setPath(gltf_folder);
  loader.load(gltf_file, (gltf) => {
    const mesh = gltf.scene;
  
    mesh.traverse((child) => {
      if (child.isMesh) {
        child.castShadow = true;
        child.receiveShadow = true;
      }
    });
  
    // mesh.position.set(0, 1.05, -1);
    mesh.position.set(0, 0, 8);
    scene.add(mesh);
  
    //document.getElementById('progress-container').style.display = 'none';
  }/*, ( xhr ) => {
    document.getElementById('progress').innerHTML = `LOADING ${Math.max(xhr.loaded / xhr.total, 1) * 100}/100`;
  },*/);
  
  window.addEventListener('resize', () => {
    camera.aspect =my_Width / my_Height;
    camera.updateProjectionMatrix();
    renderer.setSize(my_Width, my_Height);
  });
  
  function animate() {
    requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene, camera);
  }
  
  animate();
  }

const gltf_path3='3D Objects/minicraft/';
const gltf_file3='Project.gltf';
const my_contianer3= document.getElementById('table_dev3');
GLTFLoader_TP03_Loader(gltf_path3,gltf_file3,my_contianer3);
