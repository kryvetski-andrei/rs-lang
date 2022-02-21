import { renderMarkup } from '../../utilities/renderMarkup';
import { booksBgMarkup } from './markup';
import { Scene, Vector2, Mesh, BoxBufferGeometry, MeshPhongMaterial, Color, PerspectiveCamera, WebGLRenderer, AmbientLight, DirectionalLight, PointLight } from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';


export const mountBooksBGDOMElement = (parentDOMElement: HTMLElement) => {
  renderMarkup(parentDOMElement, booksBgMarkup);

  const booksWrapperDOMElement = document.body.querySelector(`.books__wrapper`) as HTMLElement;
  
  init(booksWrapperDOMElement);
};


function initBooksModel(parentDOMElement: HTMLElement) {
  const scene = new Scene();
  scene.background = new Color(0xdddddd);
  const camera = new PerspectiveCamera(40,window.innerWidth/window.innerHeight,1,5000);
  camera.rotation.y = 45/180*Math.PI;
  camera.position.x = 800;
  camera.position.y = 100;
  camera.position.z = 1000;

  const hlight = new AmbientLight (0x404040,100);
  scene.add(hlight);
  const directionalLight = new DirectionalLight(0xffffff,100);
  directionalLight.position.set(0,1,0);
  directionalLight.castShadow = true;
  scene.add(directionalLight);
  const light = new PointLight(0xc4c4c4,10);
  light.position.set(0,300,500);
  scene.add(light);
  const light2 = new PointLight(0xc4c4c4,10);
  light2.position.set(500,100,0);
  scene.add(light2);
  const light3 = new PointLight(0xc4c4c4,10);
  light3.position.set(0,100,-500);
  scene.add(light3);
  const light4 = new PointLight(0xc4c4c4,10);
  light4.position.set(-500,300,500);
  scene.add(light4);


 

  function animate() {
    renderer.render(scene,camera);
    requestAnimationFrame(animate);
  }

  const renderer = new WebGLRenderer({antialias:true});
  renderer.setSize(window.innerWidth,window.innerHeight);
  parentDOMElement.appendChild(renderer.domElement);

  let controls = new OrbitControls(camera);
  controls.addEventListener('change', render);

  const loader = new GLTFLoader();

  loader.load('../../assets/models/stack_of_books/scene.gltf', function(gltf: any){
    const books = gltf.scene.children[0];
    books.scale.set(30,30,30);
    scene.add(gltf.scene);
    animate();
  })
  function render() {
    renderer.render(scene, camera);
  }
}

function init(parentDOMElement: HTMLElement) {
  let scene = new Scene();
  scene.background = new Color(0xdddddd);

  let camera = new PerspectiveCamera(40, window.innerWidth / window.innerHeight, 0.1, 5000);
  camera.position.x = 8;
  camera.position.y = 10;
  camera.position.z = 10;
    
    let renderer = new WebGLRenderer({
    antialias: true
  });
  renderer.setSize(window.innerWidth, window.innerHeight);
  parentDOMElement.appendChild(renderer.domElement);

  const controls = new OrbitControls(camera, renderer.domElement);
  // controls.addEventListener('change', render);
  controls.autoRotate = true;
  controls.enableRotate = false;
  controls.enablePan = false;
  controls.enableZoom = false;

  // const hlight = new AmbientLight(0x404040, 100);
  // scene.add(hlight);

  const directionalLight = new DirectionalLight(0xffffff, 1);
  directionalLight.position.set(0, 1, 0);
  directionalLight.castShadow = true;
  scene.add(directionalLight);

  // const light = new PointLight(0xc4c4c4,10);
  // light.position.set(0,-300,-500);
  // scene.add(light);
  // const light2 = new PointLight(0xc4c4c4,10);
  // light2.position.set(-500,-100,0);
  // scene.add(light2);
  // const light3 = new PointLight(0xc4c4c4,10);
  // light3.position.set(0,100,-500);
  // scene.add(light3);
  // const light4 = new PointLight(0xc4c4c4,10);
  // light4.position.set(-500,-300,-500);
  // scene.add(light4);
  
  const light = new PointLight(0xc4c4c4, 1);
  light.position.set(0, 30, 50);
  scene.add(light);
  const light2 = new PointLight(0xc4c4c4, 1);
  light2.position.set(50, 10, 0);
  scene.add(light2);
  const light3 = new PointLight(0xc4c4c4, 1);
  light3.position.set(0, 10, -50);
  scene.add(light3);
  const light4 = new PointLight(0xc4c4c4, 1);
  light4.position.set(-50, 30, 50);
  scene.add(light4);
  
  // const geometry = new BoxBufferGeometry();
  // const material = new MeshPhongMaterial();
  // const mesh = new Mesh( geometry, material )
  // scene.add( mesh );

  function render() {
    renderer.render(scene, camera);
  }
  const mouse = new Vector2();
  const target = new Vector2();
  const windowHalf = new Vector2( window.innerWidth / 2, window.innerHeight / 2 );

  const loader = new GLTFLoader();

  loader.load('../../assets/models/stack_of_books/scene.gltf', function(gltf: any){
    const books = gltf.scene.children[0];
    books.scale.set(0.7,0.7,0.7);
    scene.add(gltf.scene);
    animate();
  })

  function animate() {
    renderer.render(scene,camera);
    controls.update();
    requestAnimationFrame(animate);
  }
}

