//! useScroll only work inside the <Scroll/> child element
// * will be zero until 1/3 of the y-distance is reached, range also has margins as 3rd arguement
//*@ console.log(scroll.range(0, 1 / 3));
// * from 1/3 to next 1/3 which is 2/3 -> 0 to 1, margin(extended ) has huge impact try to set very low value
//*@ console.log(scroll.range( 1 / 3, 1 / 3, 0.1));

// * curve is sinusoidal value which goes to 0-1-0 between the specified range same as scroll.range(0,1/3) , it is good when we want to show model from hide to visible and then back to hide it also has margin
//@ console.log(scroll.curve(0, 1 / 3));

// * visible give true and false if the model is in specified range
//@ console.log(scroll.visible(0, 1 / 3));

// * offset gives the total distance covered
//@ console.log(scroll.offset)

//* delta is delta but here delta is based on the scroll speed , it can be used when we scroll to fast , or we want user to scroll fast to make the particalar model visible
//@ console.log(scroll.delta);

// ! Suspense boundary over model cause big problem for gsap tween , make sure to remove Suspense or animate inside the model itself

//! // if (y)
//   y.onChange((latest: any) => {
//     console.log(latest);
//   }) as any;
// if (home) {
//   home.scene.traverse((obj) => {
//     obj.children.forEach((childObj) => {
//       console.log(childObj);
//     });
// * im here where im searching for CLASS which is having glass property to which i want to assign shineness ,metalness and cutom color with alpha value minized for transparent
//       if (
//         (childObj.material?.[0] && childObj.material?.[1])?.name.includes(
//           "CLASS"
//         )
//       ) {
//         childObj.material.forEach((val: THREE.MeshPhongMaterial) => {
//           if (val.name === "CLASS" || val.name === "CLASS.001") {
//             //@ opacity and alphaTest are in co-relation  , if opacity is less than alphaTest only then it works else not
//             val.emissive = new THREE.Color(0xc7e3e1);
//             val.emissiveIntensity = 10;
//             val.combine = 1;
//             val.opacity = 0.1;
//           }
//         });
//       }
//       if (childObj.material?.name === "lambert29") {
//         childObj.material.color = new THREE.Color(0x0bff00);
//         childObj.material.emissiveIntensity = -1;
//         childObj.material.shininess = 10;
//       }
//       if (childObj.material?.name === "lambert13") {
//         childObj.material.emissiveIntensity = 0.7;
//         childObj.material.shininess = 100;
//       }
//       if (childObj.material?.name === "lambert1") {
//         childObj.material.color = new THREE.Color("yellow");
//         childObj.material.emissiveIntensity = 0;
//         childObj.material.shininess = 0;
//       }
//       childObj.castShadow = true;
//       childObj.receiveShadow = true;
//     });
// if (obj.name.includes("Light")) {
//   home.scene.remove(obj);
// }
// if (obj.name.includes("Point")) {
//   obj.intensity = 3;
// }
// model.lookAt(new THREE.Vector3(0, 0, 0));
// const clips = animation.clips[0];
// const actions = animation.actions["mixamo.com"];
// console.log(actions?.loop);
//   });
// }
