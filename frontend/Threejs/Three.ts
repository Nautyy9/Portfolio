import React, {useEffect, useRef} from 'react'
import * as  THREE from 'three'
import {  AnimationMixer, DoubleSide } from 'three'
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls'
import {FBXLoader} from 'three/examples/jsm/loaders/FBXLoader'
import {GLTFLoader, GLTFLoaderPlugin} from 'three/examples/jsm/loaders/GLTFLoader'
import {TWEEN} from 'three/examples/jsm/libs/tween.module.min'
import { GUI} from 'dat.gui'
import {gsap} from 'gsap'
import { render } from 'react-dom'
// import {RectAreaLightUniformsLib} from 'three/examples/jsm/lights/RectAreaLightUniformsLib'
// import {RectAreaLightHelper} from 'three/examples/jsm/helpers/RectAreaLightHelper'
// import Stats from 'three/examples/jsm/libs/stats.module'

type API = {
  state : string,
  [key : string]: any
}

type ActionType ={
  [key: string] : any
}

// type SIZE ={
//   width : number,
//   height: number,
//   pixels: number
// }


// ?      URLs
// const dance = new URL('../moves/Dance/Breakdance Freezes.fbx', import.meta.url)
// const ball = new URL('../moves/soccerball.glb', import.meta.url)
// const typer = new URL('../moves/TYPERR.glb', import.meta.url)
// const disco = new URL('../moves/disco.glb', import.meta.url)



// ?      SIZES & PIXEL

const sizes  = {
  width : window.innerWidth/2, 
  height : window.innerHeight/2,
  pixels : window.devicePixelRatio
}

// ?        GUI
// ?      STATES FOR ANIMATIONS

const states = ['dance','t-pose','typing','idle']
const oneTime = ['greeting','kick']




// ?    Lets 

let mixer : THREE.AnimationMixer, clock : THREE.Clock,  actions : ActionType, activeAction : THREE.AnimationAction, previousAction : THREE.AnimationAction, deskModel : THREE.Group, ballModel : THREE.Group, humanModel : THREE.Group,  desktopMixer : THREE.AnimationMixer, desktopAction :  THREE.AnimationAction, bowMixer : THREE.AnimationMixer, ballmixer : THREE.AnimationMixer, bowAction : THREE.AnimationAction, ballAction : THREE.AnimationAction, currentAnimation : string, discoModel : THREE.Group

const api : API = { state: 'idle'};



// ?      SCENE, CAMERA & RENDERER



  const scene  = new THREE.Scene()
  const camera = new THREE.PerspectiveCamera(45, sizes.width/sizes.height, 0.1, 1000)
  camera.position.set(0,3,10)
  const canvas = document.getElementById('canvas')!
  const renderer = new THREE.WebGLRenderer({canvas, antialias : true})
document.body.appendChild(renderer.domElement)
renderer.setSize(sizes.width , sizes.height)
renderer.setPixelRatio(window.devicePixelRatio);
renderer.outputEncoding =  THREE.sRGBEncoding;
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;




// ?      FLOOR MESH

const floorGeo = new THREE.PlaneGeometry(10,10, 10, 10)
const floorMat = new THREE.MeshStandardMaterial({color: 0x000000, side : DoubleSide})
const planeMesh  = new THREE.Mesh(floorGeo, floorMat)
planeMesh.receiveShadow = true;
planeMesh.rotateX(Math.PI / 2)
scene.add(planeMesh)

// ?      ORBIT CONTROLS

const controls = new OrbitControls(camera, renderer.domElement)
controls.enableDamping = true;
controls.enablePan = false;
controls.minDistance = 15
console.log('first')


// ?      LIGHTS


const directionalLight = new THREE.DirectionalLight(0xffffff , 1)
directionalLight.castShadow = true
const ambientLight = new THREE.AmbientLight(0xffffff , 0.5)
const spotLight1 = createSpotlight(0x800040)
const spotLight2 = createSpotlight(0x808000)
const spotLight3 = createSpotlight(0x1c87c9)
spotLight1.position.set(5,7,5)
spotLight2.position.set(-5,8,5)
spotLight3.position.set(-5,8,5)
const  discoLight1 = createDiscoLight(0x800080)
const  discoLight2 = createDiscoLight(0x800080)
const  discoLight3 = createDiscoLight(0xffff00)
const  discoLight4 = createDiscoLight(0xffff00)
const  discoLight5 = createDiscoLight(0xff1493)
const  discoLight6 = createDiscoLight(0xff1493)
const  discoLight7 = createDiscoLight(0x00ff00)
const  discoLight8 = createDiscoLight(0x00ff00)
const  discoLight9 = createDiscoLight(0xff4500)
const  discoLight10 = createDiscoLight(0xff4500)
const  discoLight11 = createDiscoLight(0x00ffff)
const  discoLight12 = createDiscoLight(0x00ffff)

discoLight1.position.set(9.9, 4.92 , 2.85)
discoLight2.position.set(9.9, 4.92 , -2.85)
discoLight3.position.set(5.08, 4.92 , 2.85)
discoLight4.position.set(5.08, 4.92 , -2.85)
discoLight5.position.set(0.2, 4.92 , 2.85)
discoLight6.position.set(0.2, 4.92 , -2.85)
discoLight7.position.set(-5.4, 4.92 , 2.85)
discoLight8.position.set(-5.4, 4.92 , -2.85)
discoLight9.position.set(-10.4, 4.92 , 2.85)
discoLight10.position.set(-10.4, 4.92 , -2.85)
discoLight11.position.set(-15.4, 4.92 , 2.85)
discoLight12.position.set(-15.4, 4.92 , -2.85)


function createDiscoLight (color : number) {
  const light  = new THREE.SpotLight(color , 5 , 10 , 10 , 1 , 1)
  return light
}
function createSpotlight( color : number ) {
  const newObj = new THREE.SpotLight( color, 2 );
  newObj.castShadow = true;
  newObj.shadow.mapSize.width = 1024;
  newObj.shadow.mapSize.height = 1024;
  newObj.angle = 5;
  newObj.penumbra = 0.2;
  newObj.decay = 0.5;
  newObj.distance = 9;
  return newObj;
}






// ?    Loading animation for models
const progressBarContainer =  document.querySelector('.progress-bar-container');
const progressBar = document.getElementById('progress-bar');
const loadingPercentage =  document.createElement('p')
loadingPercentage.style.color = 'white';
progressBarContainer?.appendChild(loadingPercentage)
const loadingManager = new THREE.LoadingManager();

// loadingManager.onProgress= function(url, loaded, total){
//   loadingPercentage.innerText  = Math.round((loaded/total)*100) + '%'
//   progressBar!.value= (loaded/total)*100
// }


// loadingManager.onLoad = function (){
//   progressBarContainer!.style.display="none"
// }

function createGLTFLoader() {
  const gltf = new GLTFLoader(loadingManager)
  return gltf
}
function createFBXLoader () {
  const fbx = new FBXLoader(loadingManager)
  return fbx
}



// ?  DISCO MODEL

const discoloader = createGLTFLoader()
discoloader.load('../moves/disco.glb', (gltf) =>{

  discoModel =  gltf.scene
  discoModel.position.x = -20
  // console.log(discoModel.getObjectByName('lmpTech_lamparas_techo_0'))
  // scene.add(discomodel)
})

// ? FOOTBALL LOADER

const football = createGLTFLoader()
football.load('../moves/soccerball.glb', (gltf) =>{
    ballModel = gltf.scene
    ballModel.position.y = 0.01
    const addd =ballModel.children[0]
    addd.position.z = 1
    addd.position.y = 0.15
    ballmixer = new THREE.AnimationMixer(addd)
    const animations = gltf.animations
    const clips =  THREE.AnimationClip.findByName(animations, 'football')
    ballAction = ballmixer.clipAction(clips)
    // ballModel.scale.set(2.5,2.5,2.5)
    // scene.add(addd)
} ,undefined, (err) =>{
  console.log(err)
})

// const lampLight = new THREE.SpotLight(0xffffff, 2, 4,1, 2, 2)
// lampLight.rotateZ(30)
// scene.add(lampLight)
// const pointHelper = new THREE.SpotLightHelper(lampLight, undefined, 0xffffff)
// pointHelper.position.x = 3.1
// pointHelper.position.y = 2.3
// pointHelper.position.z= 1.9
// scene.add(pointHelper)
//?   DESKTOP LOADER

const type = createGLTFLoader()
type.load( '../moves/TYPERR.glb' , (glb) =>{
    deskModel  = glb.scene
    // lampLight.position.x = 3.1
    // lampLight.position.y = 2.3
    // lampLight.position.z= 1.9
// scene.add(pointHelper)

    // deskModel.getObjectByName('LP_Chunk_00003').material.color.setHex(0xffff00)
    deskModel.position.set(1.54, -0.2, 0.7)
    deskModel.scale.set(2,2,2)
    deskModel.rotateY(-Math.PI/2)
    desktopMixer= new THREE.AnimationMixer(deskModel)
    const animations  = glb.animations
    const clip = THREE.AnimationClip.findByName(animations, 'MouseMove')
    desktopAction =  desktopMixer?.clipAction(clip)
})



// const desktopLoad = new GLTFLoader()
// desktopLoad.load( desktop.href , (gltf) =>{
//   deskModel = gltf.scene
//     deskModel.scale.set(0.28, 0.28,0.28)
//     
//     deskModel.children[0].children[0].children[0].children[88].position.setX(150)
//     deskModel.children[0].children[0].children[0].children[88].position.setZ(150)
//     deskModel.children[0].children[0].children[0].children[88].scale.set(3)
//     const elemArray = []
    
//     for(let i=95; i<=130 ; i++){
      
//       if(i>=95 && i<=125){
//         if(i>=97 && i<=107){
//           elemArray.push(i)
//           deskModel.children[0].children[0].children[0].children[i].position.setX(150)
//           deskModel.children[0].children[0].children[0].children[i].position.setZ(150)
//         }
//         //  if(( i>107 && i<=118)){
//         //   deskModel.children[0].children[0].children[0].children[i].position.setX(-150)
//         //   deskModel.children[0].children[0].children[0].children[ i].position.setZ(-150)
//         //   }
//         // if(( i>121 && i<=126)){
//         //   deskModel.children[0].children[0].children[0].children[i].position.setX(-150)
//         //   deskModel.children[0].children[0].children[0].children[i].position.setZ(-150)
//         //   }
//           else if( ( i>=119 && i<=121))
//           {
//             elemArray.push(i)
//             deskModel.children[0].children[0].children[0].children[i].position.setX(150)
//             deskModel.children[0].children[0].children[0].children[i].position.setZ(150)
//           }
//       }
//       else if(i === 126 ) {
//         elemArray.push(i)
//         deskModel.children[0].children[0].children[0].children[i].position.setX(150)
//         deskModel.children[0].children[0].children[0].children[i].position.setZ(160)
//       }
//       else if( i === 127 ){
//         elemArray.push(i)
//         deskModel.children[0].children[0].children[0].children[i].position.setX(70)
//         deskModel.children[0].children[0].children[0].children[i].position.setZ(160)
//       }
//       // else {
//       //   deskModel.children[0].children[0].children[0].children[i].position.setX(150)
//       //   deskModel.children[0].children[0].children[0].children[i].position.setZ(190)
//       // }
//     }
    
    
//     
    
// },(prog) =>{}, (err) =>{
//   console.log(err)
// })


//?   CHAIR LOADER


// const chairLoader = new GLTFLoader()
// chairLoader.load( chair.href , (gltf) =>{
//     chairModel = gltf.scene
//     chairModel.position.y=0.2
//     chairModel.scale.set(2,2,2)
//     chairModel.position.setX(2)
//     chairModel.rotateY(Math.PI /2)
//     // console.log(model)
// },undefined, (err) =>{
//   console.log(err)
// })


//?   HUMAN LOADER

const loader = createFBXLoader();
loader.load('../moves/Dance/Breakdance Freezes.fbx', (fbx) =>{
  humanModel = fbx
  // console.log(humanModel)
  fbx.castShadow = true;
  fbx.receiveShadow = true
  fbx.scale.setScalar(0.01)
  fbx.getObjectByName('Hair')?.material.color.setHex (0x000000)
  mixer = new AnimationMixer(fbx)
  scene.add(humanModel)
  // const suii = new GLTFLoader().load('./moves/RobotExpressive.glb' ,(model) =>{
    // console.log(fbx.animations)
  // })
  // const dui=  fbx.animations.map((val, id) => val.updatedName = ""
  // )
  // console.log(dui)
  
  const loader1 = createFBXLoader()
  loader1.load('./moves/Typing.fbx', (next) =>{
    fbx.animations.push(next.animations[0])
    // console.log(next.animations)
  
    const loader2 = createFBXLoader()
      loader2.load('./moves/Quick Formal Bow.fbx', (next) =>{
        bowMixer = new THREE.AnimationMixer(fbx)
        const animation = next.animations
        const clips = THREE.AnimationClip.findByName(animation, 'mixamo.com')
        bowAction = bowMixer.clipAction(clips)
        
        fbx.animations.push(next.animations[0])
        const loader3 = createGLTFLoader()
        loader3.load('./moves/soccerball.glb' , (next) =>{
          // console.log(next)
          // mixer = new AnimationMixer(fbx)
          fbx.animations.push(next.animations[1])
            const loader4 = createFBXLoader()
            loader4.load('./moves/Breathing Idle.fbx' , (next) =>{
              fbx.animations.push(next.animations[0])
              fbx.animations.map((val, id) => val.updateName = states[id])
              fbx.animations[3].updateName = 'greeting'
              fbx.animations[4].updateName = 'kick'
              fbx.animations[5].updateName = 'idle'
              animationToggle(fbx.animations, fbx)
            })
        })
  })
  })
 
  // if(loader1 && loader2 && loader3){
  //   console.log(fbx.animations)

  // }
} ,undefined, (err) =>{
  console.log(err)
})


// !          WAIT

let lastAnimation 
function checkModels(human : THREE.Group, fadeToAction : (name : string , duration : number) => void ,name? : string) {
  scene.remove(discoModel)
  scene.add(ambientLight, directionalLight)

  scene.remove(discoLight1, discoLight2, discoLight3, discoLight4, discoLight5,  discoLight6, discoLight7, discoLight8, discoLight9, discoLight10, discoLight11, discoLight12)

  lastAnimation = currentAnimation
  human.position.set(0, 0, 0)
  human.rotation.set(0,0,0)
  if(api.state ) {
    if(name === undefined){
      currentAnimation = api.state
      toggleAnimation(lastAnimation , currentAnimation)
    }
    else {
    currentAnimation = name
    toggleAnimation(lastAnimation , currentAnimation)
    }
  }
  if(name === 'greeting'  || name === 'kick'){
    if(name === 'kick')
    {
      scene.remove(deskModel,spotLight1,spotLight2,spotLight3)
      human.rotation.set(-30,0,0)
      ballAction.reset()
      .setEffectiveTimeScale(1)
      .setEffectiveWeight( 1 )
      .fadeIn(0.3)
      .play()
      scene.add(ballModel)
    }
    else {
      scene.remove(deskModel,spotLight1,spotLight2,spotLight3,ballModel)
    }
  }
  else if(api.state === 'typing' && name === undefined){
    scene.remove(ballModel)

    // console.log('typing')
    scene.add(deskModel)
    human.position.x = 2
    human.rotateY(Math.PI/2)
    fadeToAction?.(api.state , 0.3)
    desktopAction?.reset()
    .setEffectiveTimeScale( 1.003 )
    .setEffectiveWeight( 1 )
    .fadeIn(0.3)
    .play();
  }
  else if(api.state === 'dance'  && name === undefined) {
    // console.log('dance ')
    scene.remove(ambientLight, directionalLight)
    scene.remove(ballModel)
    scene.add(discoModel)
    scene.add(discoLight1, discoLight2, discoLight3, discoLight4, discoLight5,  discoLight6, discoLight7, discoLight8, discoLight9, discoLight10, discoLight11, discoLight12)
    directionalLight.intensity = 0.7
    scene.add(spotLight1, spotLight2 , spotLight3 ,)
    fadeToAction?.(api.state , 0.3)
  }
  else {
    human.position.set(0, 0, 0)
    human.rotation.set(0,0,0)
    scene.remove(discoLight1, discoLight2, discoLight3, discoLight4, discoLight5,  discoLight6, discoLight7, discoLight8, discoLight9, discoLight10, discoLight11, discoLight12)
    scene.remove(spotLight1 , spotLight2,spotLight3,  ballModel)
  fadeToAction?.( api.state, 0.3 );
  }
}

const gui = new GUI()


// ?      CHANGING ANIMATION 

function animationToggle (animations : THREE.AnimationClip[], human : THREE.Group) {
  actions = {}
  
  for (let i = 0; i < animations.length; i++) {
    const clip : THREE.AnimationClip  = animations[i] 
    const action = mixer.clipAction(clip);
    // console.log(action)
    actions[clip?.updateName] = action;
    // console.log(actions, animations.updateName)
    
    if ( oneTime.indexOf( clip?.updateName ) >= 0) {
      action.clampWhenFinished = true;
      action.loop = THREE.LoopOnce;
    }
    // createEmoteCallback( states[ i ] );
    // actions[clip.name] = action
  
}
  const folder =  gui.addFolder("Hobbies")
  const clipCntrl =  folder.add( api, 'state' ).options(states);
  clipCntrl?.onChange(() =>{
    directionalLight.intensity = 1
    // scene.remove(spotLight4)
    scene.remove(spotLight1)
    scene.remove(spotLight2)
    scene.remove(spotLight3)
    scene.remove( deskModel)
    checkModels(humanModel, fadeToAction)
  })

  folder.open();
  const oneTimeFolder = gui.addFolder( 'OneTime' );
  
  function createEmoteCallback( name  : string) {
    
    api[name ] = function () {
      checkModels(humanModel, fadeToAction, name, actions['idle'])
      fadeToAction( name, 0.3 );
      mixer.addEventListener( 'finished', restoreState );
    };
    oneTimeFolder.add(api , name)
  }

  function restoreState() {
    human.position.set(0, 0, 0)
    human.rotation.set(0,0,0)
    checkModels(human, fadeToAction)
    mixer.removeEventListener( 'finished', restoreState);
    fadeToAction( api.state, 0.3 );
    
  }

  for ( let i = 0; i < oneTime.length; i ++ ) {
    createEmoteCallback( oneTime[ i ] );
  }

  oneTimeFolder.open();
  activeAction = actions['idle'];
  activeAction.play();

  function fadeToAction( name : string, duration : number ) {

    previousAction = activeAction;
    activeAction = actions[ name ];

    if ( previousAction !== activeAction ) {
      previousAction.fadeOut( duration );
    }
    activeAction
      .reset()
      .setEffectiveTimeScale( 1 ) 
      .setEffectiveWeight( 1 )
      .fadeIn( duration )
      .play();
  }
}


// ? TWEEN FOR LIGHT

function tween( light  : THREE.SpotLight ) {

  new TWEEN.Tween( light ).to( {
    angle: ( Math.random() * 0.4 ) + 0.3,
    penumbra: Math.random() + 1

  }, Math.random() * 3000 + 2000 )
    .easing( TWEEN.Easing.Quadratic.Out ).start();

  new TWEEN.Tween( light.position ).to( {
    x: ( Math.random() * 5 ) - 3,
    y: ( Math.random() * 10 ) + 3,
    z: ( Math.random() * 5 ) - 3
  }, Math.random() * 3000 + 2000 )
    .easing( TWEEN.Easing.Quadratic.Out ).start();

}


// ?    TWEENING LIGHTS
function lights() {

  tween( spotLight1 );
  tween( spotLight2 );
  tween( spotLight3 );
  setTimeout( lights, 3000 );

}


  scene.add(directionalLight)
  scene.add(ambientLight)
  lights()





// RectAreaLightUniformsLib.init() p
// const rectLight = new THREE.RectAreaLight(0xffffff,1,10, 10)
// rectLight.position.set(0,5,0)
// rectLight.lookAt(0, 0 , 0)
// scene.add(rectLight)


// const rectLightHelper = new RectAreaLightHelper( rectLight );
// rectLight.add( rectLightHelper );
// const boxGeometry = new THREE.BoxGeometry(10, 10,10)
// const boxMaterial = new THREE.MeshBasicMaterial({color : 0xffffff})
// const boxMesh = new THREE.Mesh(boxGeometry, boxMaterial)
// scene.add(boxMesh)

// RectArea


// scene.add(new THREE.AxesHelper(5))








// ?      camera--GSAP


const app = document.getElementById("app");
// app!.style.visibility = 'hidden';

function toggleAnimation (lastAnimation : string , firstAnimation : string) {
  scene.remove(planeMesh)

  if(firstAnimation === 'dance') {
    controls.minDistance = 5
    controls.maxDistance = 30;
    gsap.to(camera.position, {z: 4.5 ,x : -13, y: 2  , duration : 2, ease: 'power4.inOut' , onComplete: () => {
      // controls.minAzimuthAngle = 3;
      // controls.maxAzimuthAngle= -2;
      controls.minPolarAngle = Math.PI/4;
      controls.maxPolarAngle = Math.PI/2;    
    }})
    
  }
  else if(firstAnimation === 'typing') {
    controls.maxDistance = 20;
    gsap.to(controls.target, {x: 2, y:2, z: -1, duration : 2, ease : 'power4.inOut'})
    gsap.to(camera.position, {z: -14  ,x : -3, y:12  , duration : 3, ease: 'power4.inOut',  onComplete: () => {
    controls.minAzimuthAngle = 3;
    controls.maxAzimuthAngle= -2;
    controls.minPolarAngle = Math.PI/4;
    controls.maxPolarAngle = Math.PI/2;    
  }})

  }
  else if(firstAnimation === 'idle'  || firstAnimation === 't-pose' || firstAnimation === 'greeting') {
    scene.add(planeMesh)
    
    controls.maxDistance = 20;
    controls.enableRotate = false;
    gsap.to(camera.position, {z: 12  ,x : -2, y:4  , duration : 1, ease: 'power4.inOut'})
  }
  else if(firstAnimation === 'kick') {
    
    controls.maxDistance = 40;
    controls.enableRotate = false;
    gsap.to(camera.position, {z: 30  ,x : 4, y:15  , duration : 2, ease: 'power4.inOut'})
  }
  if(lastAnimation === firstAnimation) {
    // app!.style.visibility = 'hidden';
  }
  else if(lastAnimation !== firstAnimation) {
    
    setTimeout(() =>{
      console.log('visible')
      // app!.style.visibility = 'hidden';
    }, 400)
  }
    controls.maxAzimuthAngle= Infinity;
    controls.maxPolarAngle = Math.PI;
    // controls.enableRotate = true;
    controls.minDistance = 15
    // app!.style.visibility = 'visible';
}




// ?    Greeting 
setTimeout(() =>{
    bowAction.clampWhenFinished = true;
    bowAction.loop = THREE.LoopOnce;
    bowAction?.reset().play();

}, 8500)

window.addEventListener('resize', ()=>{
  sizes.width = sizes.width
  sizes.height = sizes.height
  camera.aspect = sizes.width / sizes.height;
  camera.updateProjectionMatrix();
  renderer.setSize(  sizes.width, sizes.height );
} );

clock =new THREE.Clock()

// console.log(currentAnimation)

const animate = () =>{
    controls.update()
const dt = clock.getDelta();

TWEEN.update();

// if ( spotLightHelper1 ) spotLightHelper1.update();
// if ( spotLightHelper2 ) spotLightHelper2.update();
// if ( spotLightHelper3 ) spotLightHelper3.update();
mixer?.update(dt);
desktopMixer?.update(dt);
bowMixer?.update(dt)
ballmixer?.update(dt)

    // mixer.update(clock.getDelta())
    requestAnimationFrame(animate)
    renderer.render(scene, camera)
}
animate()
























































































// import * as THREE from 'three';

// import Stats from 'three/addons/libs/stats.module.js';
// import { GUI } from 'three/addons/libs/lil-gui.module.min.js';

// import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

// let container, stats, clock, gui, mixer, actions, activeAction, previousAction;
// let camera, scene, renderer, model, face;

// const api = { state: 'Walking' };

// init();
// animate();

// function init() {

//   container = document.createElement( 'div' );
//   document.body.appendChild( container );

//   camera = new THREE.PerspectiveCamera( 45, sizes.width / sizes.height, 0.25, 100 );
//   camera.position.set( - 5, 3, 10 );
//   camera.lookAt( 0, 2, 0 );

//   scene = new THREE.Scene();
//   scene.background = new THREE.Color( 0xe0e0e0 );
//   scene.fog = new THREE.Fog( 0xe0e0e0, 20, 100 );

//   clock = new THREE.Clock();

//   // lights

//   const hemiLight = new THREE.HemisphereLight( 0xffffff, 0x444444 );
//   hemiLight.position.set( 0, 20, 0 );
//   scene.add( hemiLight );

//   const dirLight = new THREE.DirectionalLight( 0xffffff );
//   dirLight.position.set( 0, 20, 10 );
//   scene.add( dirLight );

//   // ground

//   const mesh = new THREE.Mesh( new THREE.PlaneGeometry( 2000, 2000 ), new THREE.MeshPhongMaterial( { color: 0x999999, depthWrite: false } ) );
//   mesh.rotation.x = - Math.PI / 2;
//   scene.add( mesh );

//   const grid = new THREE.GridHelper( 200, 40, 0x000000, 0x000000 );
//   grid.material.opacity = 0.2;
//   grid.material.transparent = true;
//   scene.add( grid );

//   // model

//   const loader = new GLTFLoader();
//   loader.load( './assets/RobotExpressive.glb', function ( gltf ) {

//     model = gltf.scene;
//     scene.add( model );
//     console.log(gltf.animations)
//     createGUI( model, gltf.animations );

//   }, undefined, function ( e ) {

//     console.error( e );

//   } );

//   renderer = new THREE.WebGLRenderer( { antialias: true } );
//   renderer.setPixelRatio( window.devicePixelRatio );
//   renderer.setSize( sizes.width, sizes.height );
//   renderer.outputEncoding = THREE.sRGBEncoding;
//   container.appendChild( renderer.domElement );
//   window.addEventListener( 'resize', onWindowResize );

//   stats
//   stats = new Stats();
//   container.appendChild( stats.dom );

// }

// function createGUI( model, animations ) {

//   const states = [ 'Idle', 'Walking', 'Running', 'Dance', 'Death', 'Sitting', 'Standing' ];
//   const emotes = [ 'Jump', 'Yes', 'No', 'Wave', 'Punch', 'ThumbsUp' ];

//   gui = new GUI();

//   mixer = new THREE.AnimationMixer( model );

//   actions = {};

//   for ( let i = 0; i < animations.length; i ++ ) {

//     const clip = animations[ i ];
//     const action = mixer.clipAction( clip );
//     actions[ clip.name ] = action;

    

//   }

//   // states

//   const statesFolder = gui.addFolder( 'States' );

//   const clipCtrl = statesFolder.add( api, 'state' ).options( states );

//   clipCtrl.onChange( function () {

//     fadeToAction( api.state, 0.5 );

//   } );

//   statesFolder.open();

//   // emotes

//   const emoteFolder = gui.addFolder( 'Emotes' );

//   function createEmoteCallback( name ) {

//     api[ name ] = function () {

//       fadeToAction( name, 0.2 );

//       mixer.addEventListener( 'finished', restoreState );

//     };

//     emoteFolder.add( api, name );

//   }

//   function restoreState() {

//     mixer.removeEventListener( 'finished', restoreState );

//     fadeToAction( api.state, 0.2 );

//   }

//   for ( let i = 0; i < emotes.length; i ++ ) {

//     createEmoteCallback( emotes[ i ] );

//   }

//   emoteFolder.open();

//   // expressions

//   face = model.getObjectByName( 'Head_4' );

//   const expressions = Object.keys( face.morphTargetDictionary );
//   const expressionFolder = gui.addFolder( 'Expressions' );

//   for ( let i = 0; i < expressions.length; i ++ ) {

//     expressionFolder.add( face.morphTargetInfluences, i, 0, 1, 0.01 ).name( expressions[ i ] );

//   }

//   activeAction = actions[ 'Walking' ];
//   activeAction.play();

//   expressionFolder.open();

// }

// function fadeToAction( name, duration ) {

//   previousAction = activeAction;
//   activeAction = actions[ name ];

//   if ( previousAction !== activeAction ) {

//     previousAction.fadeOut( duration );

//   }

//   activeAction
//     .reset()
//     .setEffectiveTimeScale( 1 )
//     .setEffectiveWeight( 1 )
//     .fadeIn( duration )
//     .play();

// }

// function onWindowResize() {

//   camera.aspect = sizes.width / sizes.height;
//   camera.updateProjectionMatrix();

//   renderer.setSize( sizes.width, sizes.height );

// }

// //

// function animate() {

//   const dt = clock.getDelta();

//   if ( mixer ) mixer.update( dt );

//   requestAnimationFrame( animate );

//   renderer.render( scene, camera );

//   stats.update();

// }