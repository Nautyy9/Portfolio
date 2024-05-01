/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 static/Animations/MODEL.glb -o /gltf_jsx/Mage.tsx -t -r public
*/

import * as THREE from "three";
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { useGLTF, useAnimations, useFBX, useScroll } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { useFrame } from "@react-three/fiber";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

type innerType = {
  [x: string]: THREE.AnimationAction | null;
};

type animationsType = Record<string, innerType[] | THREE.AnimationClip[][]>;

type animationsFuncType = Record<string, animationsType>;

type GLTFResult = GLTF & {
  nodes: {
    Object_10: THREE.SkinnedMesh;
    Object_11: THREE.SkinnedMesh;
    Object_12: THREE.SkinnedMesh;
    Object_13: THREE.SkinnedMesh;
    Object_14: THREE.SkinnedMesh;
    Object_15: THREE.SkinnedMesh;
    Object_16: THREE.SkinnedMesh;
    Object_17: THREE.SkinnedMesh;
    Object_18: THREE.SkinnedMesh;
    Object_19: THREE.SkinnedMesh;
    Object_2: THREE.SkinnedMesh;
    Object_20: THREE.SkinnedMesh;
    Object_21: THREE.SkinnedMesh;
    Object_22: THREE.SkinnedMesh;
    Object_23: THREE.SkinnedMesh;
    Object_24: THREE.SkinnedMesh;
    Object_25: THREE.SkinnedMesh;
    Object_26: THREE.SkinnedMesh;
    Object_27: THREE.SkinnedMesh;
    Object_28: THREE.SkinnedMesh;
    Object_29: THREE.SkinnedMesh;
    Object_3: THREE.SkinnedMesh;
    Object_30: THREE.SkinnedMesh;
    Object_31: THREE.SkinnedMesh;
    Object_32: THREE.SkinnedMesh;
    Object_33: THREE.SkinnedMesh;
    Object_34: THREE.SkinnedMesh;
    Object_35: THREE.SkinnedMesh;
    Object_36: THREE.SkinnedMesh;
    Object_37: THREE.SkinnedMesh;
    Object_38: THREE.SkinnedMesh;
    Object_39: THREE.SkinnedMesh;
    Object_4: THREE.SkinnedMesh;
    Object_40: THREE.SkinnedMesh;
    Object_41: THREE.SkinnedMesh;
    Object_42: THREE.SkinnedMesh;
    Object_43: THREE.SkinnedMesh;
    Object_44: THREE.SkinnedMesh;
    Object_45: THREE.SkinnedMesh;
    Object_46: THREE.SkinnedMesh;
    Object_47: THREE.SkinnedMesh;
    Object_48: THREE.SkinnedMesh;
    Object_49: THREE.SkinnedMesh;
    Object_5: THREE.SkinnedMesh;
    Object_50: THREE.SkinnedMesh;
    Object_51: THREE.SkinnedMesh;
    Object_52: THREE.SkinnedMesh;
    Object_53: THREE.SkinnedMesh;
    Object_54: THREE.SkinnedMesh;
    Object_55: THREE.SkinnedMesh;
    Object_56: THREE.SkinnedMesh;
    Object_57: THREE.SkinnedMesh;
    Object_58: THREE.SkinnedMesh;
    Object_59: THREE.SkinnedMesh;
    Object_6: THREE.SkinnedMesh;
    Object_60: THREE.SkinnedMesh;
    Object_61: THREE.SkinnedMesh;
    Object_62: THREE.SkinnedMesh;
    Object_63: THREE.SkinnedMesh;
    Object_64: THREE.SkinnedMesh;
    Object_65: THREE.SkinnedMesh;
    Object_66: THREE.SkinnedMesh;
    Object_67: THREE.SkinnedMesh;
    Object_68: THREE.SkinnedMesh;
    Object_69: THREE.SkinnedMesh;
    Object_7: THREE.SkinnedMesh;
    Object_70: THREE.SkinnedMesh;
    Object_71: THREE.SkinnedMesh;
    Object_72: THREE.SkinnedMesh;
    Object_73: THREE.SkinnedMesh;
    Object_74: THREE.SkinnedMesh;
    Object_75: THREE.SkinnedMesh;
    Object_76: THREE.SkinnedMesh;
    Object_77: THREE.SkinnedMesh;
    Object_78: THREE.SkinnedMesh;
    Object_79: THREE.SkinnedMesh;
    Object_8: THREE.SkinnedMesh;
    Object_80: THREE.SkinnedMesh;
    Object_81: THREE.SkinnedMesh;
    Object_82: THREE.SkinnedMesh;
    Object_9: THREE.SkinnedMesh;
    mixamorigHips: THREE.Bone;
  };
  materials: {
    material_0: THREE.MeshStandardMaterial;
  };
};

type ActionName = "Armature|mixamo.com|Layer0";
// type GLTFActions = Record<ActionName, THREE.AnimationAction>;
type MageType = JSX.IntrinsicElements["group"];

// const animationsName = [
//   "jump",
//   "contact",
//   "skill",
//   "ball",
//   "work",
//   "spell",
//   "flying",
// ];

const faceMat = new THREE.MeshStandardMaterial({ color: 0xe8beac });
const eyesMesh = new THREE.MeshStandardMaterial({
  color: 0x000000,
  roughness: 10,
  metalness: 10,
});

function Mage({ ...props }: MageType) {
  const {
    nodes,
    materials,
    animations: workAnimation,
  } = useGLTF("/static/Animations/MODEL.glb") as GLTFResult;
  const mageRef = useRef<THREE.Group | null>(null);
  const scroll = useScroll();
  const actionName_2 = "mixamo.com";
  const { animations: idleAnimation } = useFBX(
    "/static/Animations/Standing Idle.fbx"
  );
  const tl = useRef<GSAPTimeline | null>(null);
  const postl = useRef<GSAPTimeline | null>(null);
  useGSAP(
    () => {
      postl.current = gsap.timeline();
      tl.current = gsap.timeline();
      if (tl.current && mageRef.current) {
        gsap.from(mageRef.current.position, {
          x: -70,
          y: -10,
          duration: 5,
          ease: "power4.out",
          overwrite: "auto",
        });
        postl.current.to(
          mageRef.current.position,
          {
            y: -13,
            duration: 2,
            overwrite: "auto",
            ease: "power1.in",
          },
          "+=5"
        );
        tl.current.to(
          mageRef.current.scale,
          {
            duration: 10,
            x: 3,
            y: 3,
            z: 3,
            // ease: "sine.inOut",
          },
          "+=2"
        );
        tl.current.to(
          mageRef.current.position,
          {
            duration: 10,
            ease: "power1.out",
            x: Math.PI / 2,
            overwrite: "auto",
          },
          6
        );
        tl.current
          .to(
            mageRef.current.position,
            {
              duration: 20,
              y: -50,
              overwrite: "auto",
            },
            2
          )
          .to(
            mageRef.current.scale,
            {
              duration: 6,
              x: 8,
              y: 8,
              z: 8,
              ease: "sine.inOut",
            },
            "-=14"
          )
          .to(
            mageRef.current.position,
            {
              duration: 10,
              y: -70,
            },
            "<"
          );
        tl.current.to(
          mageRef.current.position,
          {
            duration: 8,
            y: -60,
            overwrite: "auto",
          },
          "+=8"
        );
      }
    },
    { scope: mageRef }
  );
  const [activeAnim, setActiveAnim] = useState<string>("");

  useFrame((state, delta) => {
    // console.log(activeAnim);
    // console.log(mageRef.current?.position);
    // console.log(mageRef.current?.scale);
    // console.log(tl.current?.duration());
    if (tl.current && postl.current) {
      // console.log(scroll.offset);
      tl.current.seek(scroll.offset * tl.current.duration() * 0.7);
      // console.log(scroll.offset * postl.current.duration() * 25);
      postl.current.seek(scroll.offset * postl.current.duration() * 30);
    }

    // console.log(scroll.offset);
    if (scroll.offset === 0) {
      // console.log("home");
    }
    setActiveAnim("ball");
    if (scroll.offset > 0 && scroll.offset < 0.1) {
      // console.log("jump");
      setActiveAnim("jump");
    }
    if (scroll.offset > 0.1 && scroll.offset <= 5.0) {
      // console.log("flying");
      setActiveAnim("flying");
    }
    if (scroll.offset === 1) {
      // console.log("idle");
      setActiveAnim("idle");
    }
  });

  const { actions: idleAction } = useAnimations<THREE.AnimationClip>(
    idleAnimation,
    mageRef
  );

  // useFrame((state, delta) => {
  //   group.current?.children.forEach((child) => {
  //     console.log(child.getObjectByName("Object_70")?.position);
  //   });
  // });
  // if (faceRef.current) {
  //   console.log(faceRef.current.);
  // }
  const actionName_1 = "Armature|mixamo.com|Layer0";

  // idleAction[actionName_2]?.getClip().tracks.forEach((val) => {
  // console.log(val);

  // if (val.name === "mixamorigRightHand.quaternion") {
  // val.times.forEach((pos) => {
  //   sparkleRef.current!.position.x = pos - 28;
  // });
  // });
  // })

  const actions = Animations({ workAnimation, mageRef });
  const action = actions.animations.action as innerType[];
  const animations = actions.animations.animation as THREE.AnimationClip[][];

  useLayoutEffect(() => {
    if (actions) {
      // idleAction["mixamo.com"]?.reset().fadeIn(0.5).play();
      // idleAction["mixamo.com"]?.fadeOut(0.5).stop();
      action.forEach((action_val) => {
        // idleAction["mixamo.com"]?.reset().setDuration(3).fadeIn(0.5).play();
        const updatedTrack = action_val[activeAnim] as THREE.AnimationAction;
        const onLoadTrack = action_val["mixamo.com"] as THREE.AnimationAction;
        console.log(updatedTrack, onLoadTrack);
        if (onLoadTrack) {
          if (onLoadTrack.getClip().name === activeAnim) {
            switchAnimations({ mageRef, track: onLoadTrack, activeAnim });
          }
        } else if (updatedTrack) {
          switchAnimations({ mageRef, track: updatedTrack, activeAnim });
        }
      });

      return () => {
        // console.log("return");
        action.forEach((action_val) => {
          action_val[activeAnim]?.fadeOut(0.5).stop();
        });
      };
    } else {
      console.log("inside else");
      // idleAction["mixamo.com"]?.reset().setDuration(10).play();
    }
    // workAction[actionName]?.reset().fadeIn(0.5).play();
    // idleAnimation.forEach((val) => console.log(val.duration));
    // action.reset().fadeIn(0.5).play();
    // action.reset().fadeIn(0.5).play();

    // action.fadeOut(0.5);
  }, [nodes, action, activeAnim]);
  return (
    <group ref={mageRef} {...props} dispose={null}>
      <group name="Scene">
        <group name="Armature" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <primitive object={nodes.mixamorigHips} />
          <skinnedMesh
            name="Object_10"
            geometry={nodes.Object_10.geometry}
            material={materials.material_0}
            skeleton={nodes.Object_10.skeleton}
          />
          <skinnedMesh
            name="Object_11"
            geometry={nodes.Object_11.geometry}
            material={materials.material_0}
            skeleton={nodes.Object_11.skeleton}
          />
          <skinnedMesh
            name="Object_12"
            geometry={nodes.Object_12.geometry}
            material={materials.material_0}
            skeleton={nodes.Object_12.skeleton}
          />
          <skinnedMesh
            name="Object_13"
            geometry={nodes.Object_13.geometry}
            material={materials.material_0}
            skeleton={nodes.Object_13.skeleton}
          />
          <skinnedMesh
            name="Object_14"
            geometry={nodes.Object_14.geometry}
            material={materials.material_0}
            skeleton={nodes.Object_14.skeleton}
          />
          <skinnedMesh
            name="Object_15"
            geometry={nodes.Object_15.geometry}
            material={materials.material_0}
            skeleton={nodes.Object_15.skeleton}
          />
          <skinnedMesh
            name="Object_16"
            geometry={nodes.Object_16.geometry}
            material={materials.material_0}
            skeleton={nodes.Object_16.skeleton}
          />
          <skinnedMesh
            name="Object_17"
            geometry={nodes.Object_17.geometry}
            material={materials.material_0}
            skeleton={nodes.Object_17.skeleton}
          />
          <skinnedMesh
            name="Object_18"
            geometry={nodes.Object_18.geometry}
            material={materials.material_0}
            skeleton={nodes.Object_18.skeleton}
          />
          <skinnedMesh
            name="Object_19"
            geometry={nodes.Object_19.geometry}
            material={materials.material_0}
            skeleton={nodes.Object_19.skeleton}
          />
          <skinnedMesh
            name="Object_2"
            geometry={nodes.Object_2.geometry}
            material={materials.material_0}
            skeleton={nodes.Object_2.skeleton}
          />
          <skinnedMesh
            name="Object_20"
            geometry={nodes.Object_20.geometry}
            material={materials.material_0}
            skeleton={nodes.Object_20.skeleton}
          />
          <skinnedMesh
            name="Object_21"
            geometry={nodes.Object_21.geometry}
            material={materials.material_0}
            skeleton={nodes.Object_21.skeleton}
          />
          <skinnedMesh
            name="Object_22"
            geometry={nodes.Object_22.geometry}
            material={materials.material_0}
            skeleton={nodes.Object_22.skeleton}
          />
          <skinnedMesh
            name="Object_23"
            geometry={nodes.Object_23.geometry}
            material={materials.material_0}
            skeleton={nodes.Object_23.skeleton}
          />
          <skinnedMesh
            name="Object_24"
            geometry={nodes.Object_24.geometry}
            material={materials.material_0}
            skeleton={nodes.Object_24.skeleton}
          />
          <skinnedMesh
            name="Object_25"
            geometry={nodes.Object_25.geometry}
            material={materials.material_0}
            skeleton={nodes.Object_25.skeleton}
          />
          <skinnedMesh
            name="Object_26"
            geometry={nodes.Object_26.geometry}
            material={materials.material_0}
            skeleton={nodes.Object_26.skeleton}
          />
          <skinnedMesh
            name="Object_27"
            geometry={nodes.Object_27.geometry}
            material={materials.material_0}
            skeleton={nodes.Object_27.skeleton}
          />
          <skinnedMesh
            name="Object_28"
            geometry={nodes.Object_28.geometry}
            material={materials.material_0}
            skeleton={nodes.Object_28.skeleton}
          />
          <skinnedMesh
            name="Object_29"
            geometry={nodes.Object_29.geometry}
            material={materials.material_0}
            skeleton={nodes.Object_29.skeleton}
          />
          <skinnedMesh
            name="Object_3"
            geometry={nodes.Object_3.geometry}
            material={materials.material_0}
            skeleton={nodes.Object_3.skeleton}
          />
          <skinnedMesh
            name="Object_30"
            geometry={nodes.Object_30.geometry}
            material={materials.material_0}
            skeleton={nodes.Object_30.skeleton}
          />
          <skinnedMesh
            name="Object_31"
            geometry={nodes.Object_31.geometry}
            material={materials.material_0}
            skeleton={nodes.Object_31.skeleton}
          />
          <skinnedMesh
            name="Object_32"
            geometry={nodes.Object_32.geometry}
            material={materials.material_0}
            skeleton={nodes.Object_32.skeleton}
          />
          <skinnedMesh
            name="Object_33"
            geometry={nodes.Object_33.geometry}
            material={materials.material_0}
            skeleton={nodes.Object_33.skeleton}
          />
          <skinnedMesh
            name="Object_34"
            geometry={nodes.Object_34.geometry}
            material={materials.material_0}
            skeleton={nodes.Object_34.skeleton}
          />
          <skinnedMesh
            name="Object_35"
            geometry={nodes.Object_35.geometry}
            material={materials.material_0}
            skeleton={nodes.Object_35.skeleton}
          />
          <skinnedMesh
            name="Object_36"
            geometry={nodes.Object_36.geometry}
            material={materials.material_0}
            skeleton={nodes.Object_36.skeleton}
          />
          <skinnedMesh
            name="Object_37"
            geometry={nodes.Object_37.geometry}
            material={materials.material_0}
            skeleton={nodes.Object_37.skeleton}
          />
          <skinnedMesh
            name="Object_38"
            geometry={nodes.Object_38.geometry}
            material={materials.material_0}
            skeleton={nodes.Object_38.skeleton}
          />
          <skinnedMesh
            name="Object_39"
            geometry={nodes.Object_39.geometry}
            material={materials.material_0}
            skeleton={nodes.Object_39.skeleton}
          />
          <skinnedMesh
            name="Object_4"
            geometry={nodes.Object_4.geometry}
            material={materials.material_0}
            skeleton={nodes.Object_4.skeleton}
          />
          <skinnedMesh
            name="Object_40"
            geometry={nodes.Object_40.geometry}
            material={materials.material_0}
            skeleton={nodes.Object_40.skeleton}
          />
          <skinnedMesh
            name="Object_41"
            geometry={nodes.Object_41.geometry}
            material={materials.material_0}
            skeleton={nodes.Object_41.skeleton}
          />
          <skinnedMesh
            name="Object_42"
            geometry={nodes.Object_42.geometry}
            material={materials.material_0}
            skeleton={nodes.Object_42.skeleton}
          />
          <skinnedMesh
            name="Object_43"
            geometry={nodes.Object_43.geometry}
            material={materials.material_0}
            skeleton={nodes.Object_43.skeleton}
          />
          <skinnedMesh
            name="Object_44"
            geometry={nodes.Object_44.geometry}
            material={materials.material_0}
            skeleton={nodes.Object_44.skeleton}
          />
          <skinnedMesh
            name="Object_45"
            geometry={nodes.Object_45.geometry}
            material={materials.material_0}
            skeleton={nodes.Object_45.skeleton}
          />
          <skinnedMesh
            name="Object_46"
            geometry={nodes.Object_46.geometry}
            material={materials.material_0}
            skeleton={nodes.Object_46.skeleton}
          />
          <skinnedMesh
            name="Object_47"
            geometry={nodes.Object_47.geometry}
            material={materials.material_0}
            skeleton={nodes.Object_47.skeleton}
          />
          <skinnedMesh
            name="Object_48"
            geometry={nodes.Object_48.geometry}
            material={materials.material_0}
            skeleton={nodes.Object_48.skeleton}
          />
          <skinnedMesh
            name="Object_49"
            geometry={nodes.Object_49.geometry}
            material={eyesMesh}
            skeleton={nodes.Object_49.skeleton}
          />
          <skinnedMesh
            name="Object_5"
            geometry={nodes.Object_5.geometry}
            material={materials.material_0}
            skeleton={nodes.Object_5.skeleton}
          />
          <skinnedMesh
            name="Object_50"
            geometry={nodes.Object_50.geometry}
            material={materials.material_0}
            skeleton={nodes.Object_50.skeleton}
          />
          <skinnedMesh
            name="Object_51"
            geometry={nodes.Object_51.geometry}
            material={materials.material_0}
            skeleton={nodes.Object_51.skeleton}
          />
          <skinnedMesh
            name="Object_52"
            geometry={nodes.Object_52.geometry}
            material={materials.material_0}
            skeleton={nodes.Object_52.skeleton}
          />
          <skinnedMesh
            name="Object_53"
            geometry={nodes.Object_53.geometry}
            material={materials.material_0}
            skeleton={nodes.Object_53.skeleton}
          />
          <skinnedMesh
            name="Object_54"
            geometry={nodes.Object_54.geometry}
            material={materials.material_0}
            skeleton={nodes.Object_54.skeleton}
          />
          <skinnedMesh
            name="Object_55"
            geometry={nodes.Object_55.geometry}
            material={materials.material_0}
            skeleton={nodes.Object_55.skeleton}
          />
          <skinnedMesh
            name="Object_56"
            geometry={nodes.Object_56.geometry}
            material={materials.material_0}
            skeleton={nodes.Object_56.skeleton}
          />
          <skinnedMesh
            name="Object_57"
            geometry={nodes.Object_57.geometry}
            material={materials.material_0}
            skeleton={nodes.Object_57.skeleton}
          />
          <skinnedMesh
            name="Object_58"
            geometry={nodes.Object_58.geometry}
            material={materials.material_0}
            skeleton={nodes.Object_58.skeleton}
          />
          <skinnedMesh
            name="Object_59"
            geometry={nodes.Object_59.geometry}
            material={materials.material_0}
            skeleton={nodes.Object_59.skeleton}
          />
          <skinnedMesh
            name="Object_6"
            geometry={nodes.Object_6.geometry}
            material={materials.material_0}
            skeleton={nodes.Object_6.skeleton}
          />
          <skinnedMesh
            name="Object_60"
            geometry={nodes.Object_60.geometry}
            material={materials.material_0}
            skeleton={nodes.Object_60.skeleton}
          />
          <skinnedMesh
            name="Object_61"
            geometry={nodes.Object_61.geometry}
            material={materials.material_0}
            skeleton={nodes.Object_61.skeleton}
          />
          <skinnedMesh
            name="Object_62"
            geometry={nodes.Object_62.geometry}
            material={materials.material_0}
            skeleton={nodes.Object_62.skeleton}
          />
          <skinnedMesh
            name="Object_63"
            geometry={nodes.Object_63.geometry}
            material={materials.material_0}
            skeleton={nodes.Object_63.skeleton}
          />
          <skinnedMesh
            name="Object_64"
            geometry={nodes.Object_64.geometry}
            material={materials.material_0}
            skeleton={nodes.Object_64.skeleton}
          />
          <skinnedMesh
            name="Object_65"
            geometry={nodes.Object_65.geometry}
            material={materials.material_0}
            skeleton={nodes.Object_65.skeleton}
          />
          <skinnedMesh
            name="Object_66"
            geometry={nodes.Object_66.geometry}
            material={materials.material_0}
            skeleton={nodes.Object_66.skeleton}
          />
          <skinnedMesh
            name="Object_67"
            geometry={nodes.Object_67.geometry}
            material={materials.material_0}
            skeleton={nodes.Object_67.skeleton}
          />
          <skinnedMesh
            name="Object_68"
            geometry={nodes.Object_68.geometry}
            material={materials.material_0}
            skeleton={nodes.Object_68.skeleton}
          />
          <skinnedMesh
            name="Object_69"
            geometry={nodes.Object_69.geometry}
            material={materials.material_0}
            skeleton={nodes.Object_69.skeleton}
          />
          <skinnedMesh
            name="Object_7"
            geometry={nodes.Object_7.geometry}
            material={materials.material_0}
            skeleton={nodes.Object_7.skeleton}
          />
          <skinnedMesh
            name="Object_70"
            // ref={palmRef}
            geometry={nodes.Object_70.geometry}
            material={materials.material_0}
            skeleton={nodes.Object_70.skeleton}
          />
          <skinnedMesh
            name="Object_71"
            geometry={nodes.Object_71.geometry}
            material={materials.material_0}
            skeleton={nodes.Object_71.skeleton}
          />
          <skinnedMesh
            name="Object_72"
            geometry={nodes.Object_72.geometry}
            material={materials.material_0}
            skeleton={nodes.Object_72.skeleton}
          />
          <skinnedMesh
            name="Object_73"
            geometry={nodes.Object_73.geometry}
            material={materials.material_0}
            skeleton={nodes.Object_73.skeleton}
          />
          <skinnedMesh
            name="Object_74"
            geometry={nodes.Object_74.geometry}
            material={materials.material_0}
            skeleton={nodes.Object_74.skeleton}
          />
          <skinnedMesh
            name="Object_75"
            // ref={handRef}
            geometry={nodes.Object_75.geometry}
            material={materials.material_0}
            skeleton={nodes.Object_75.skeleton}
          />
          <skinnedMesh
            // ref={faceRef}
            name="Object_76"
            geometry={nodes.Object_76.geometry}
            material={faceMat}
            skeleton={nodes.Object_76.skeleton}
          ></skinnedMesh>
          <skinnedMesh
            name="Object_77"
            geometry={nodes.Object_77.geometry}
            material={materials.material_0}
            skeleton={nodes.Object_77.skeleton}
          />
          <skinnedMesh
            name="Object_78"
            geometry={nodes.Object_78.geometry}
            material={materials.material_0}
            skeleton={nodes.Object_78.skeleton}
          />
          <skinnedMesh
            name="Object_79"
            geometry={nodes.Object_79.geometry}
            material={materials.material_0}
            skeleton={nodes.Object_79.skeleton}
          />
          <skinnedMesh
            name="Object_8"
            geometry={nodes.Object_8.geometry}
            material={materials.material_0}
            skeleton={nodes.Object_8.skeleton}
          />
          <skinnedMesh
            name="Object_80"
            geometry={nodes.Object_80.geometry}
            material={materials.material_0}
            skeleton={nodes.Object_80.skeleton}
          />
          <skinnedMesh
            name="Object_81"
            geometry={nodes.Object_81.geometry}
            material={materials.material_0}
            skeleton={nodes.Object_81.skeleton}
          />
          <skinnedMesh
            name="Object_82"
            geometry={nodes.Object_82.geometry}
            material={materials.material_0}
            skeleton={nodes.Object_82.skeleton}
          />
          <skinnedMesh
            name="Object_9"
            geometry={nodes.Object_9.geometry}
            material={materials.material_0}
            skeleton={nodes.Object_9.skeleton}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/static/Animations/MODEL.glb");

export default Mage;

function Animations({
  workAnimation,
  mageRef: group,
}: {
  workAnimation: THREE.AnimationClip[];
  mageRef: React.MutableRefObject<THREE.Group | null>;
}): animationsFuncType {
  const handRef = useRef<THREE.Object3D<THREE.Event> | null>();

  // useFrame((state, delta) => {
  //   // console.log(handRef.current?.position);
  // });

  const { actions: workAction } = useAnimations<THREE.AnimationClip>(
    workAnimation,
    group
  );

  const { animations: contactAnimation } = useFBX(
    "/static/Animations/Bashful.fbx"
  );
  const { actions: contactAction } = useAnimations<THREE.AnimationClip>(
    contactAnimation,
    group
  );
  const { animations: flyingAnimation } = useFBX(
    "/static/Animations/Falling Idle.fbx"
  );
  const { actions: flyingAction } = useAnimations<THREE.AnimationClip>(
    flyingAnimation,
    group
  );
  const { animations: skillAnimation } = useFBX(
    "/static/Animations/Hiding Grab.fbx"
  );
  const { actions: skillAction } = useAnimations<THREE.AnimationClip>(
    skillAnimation,
    group
  );
  const { animations: spellAnimation } = useFBX(
    "/static/Animations/Standing 2H Cast Spell 01.fbx"
  );

  const { actions: spellAction } = useAnimations<THREE.AnimationClip>(
    spellAnimation,
    group
  );

  const { animations: ballAnimation } = useFBX(
    "/static/Animations/Standing Idle 04.fbx"
  );
  const { actions: ballAction } = useAnimations<THREE.AnimationClip>(
    ballAnimation,
    group
  );
  const YOHO = useFBX("/static/Animations/Standing Jump.fbx");
  YOHO.up = new THREE.Vector3(0, 0, 0);
  console.log(YOHO);
  const { animations: jumpAnimation } = YOHO;
  const { actions: jumpAction } = useAnimations<THREE.AnimationClip>(
    jumpAnimation,
    group
  );
  const { animations: attackAnimation } = useFBX(
    "/static/Animations/Standing 2H Magic Attack 03.fbx"
  );
  const { actions: attackAction } = useAnimations<THREE.AnimationClip>(
    attackAnimation,
    group
  );
  const { animations: lookbackAnimation } = useFBX(
    "/static/Animations/Standing Idle 02.fbx"
  );
  const { actions: lookbackAction } = useAnimations<THREE.AnimationClip>(
    lookbackAnimation,
    group
  );
  const { animations: idleAnimation } = useFBX(
    "/static/Animations/Standing Idle.fbx"
  );
  const { actions: idleAction } = useAnimations<THREE.AnimationClip>(
    idleAnimation,
    group
  );
  const animations_array = [
    jumpAnimation,
    ballAnimation,
    spellAnimation,
    skillAnimation,
    flyingAnimation,
    contactAnimation,
    workAnimation,
    attackAnimation,
    lookbackAnimation,
    idleAnimation,
  ] as THREE.AnimationClip[][];

  const actions_array = [
    jumpAction,
    ballAction,
    spellAction,
    skillAction,
    flyingAction,
    contactAction,
    workAction,
    attackAction,
    lookbackAction,
    idleAction,
  ] as innerType[];
  animations_array.forEach((name, i) =>
    name.forEach((val) => {
      switch (i) {
        case 0:
          val.name = "jump";
          break;
        case 1:
          val.name = "ball";
          break;
        case 2:
          val.name = "spell";
          break;
        case 3:
          val.name = "skill";
          break;
        case 4:
          val.name = "flying";
          break;
        case 5:
          val.name = "contact";
          break;
        case 6:
          val.name = "work";
          break;
        case 7:
          val.name = "attack";
          break;
        case 8:
          val.name = "lookback";
          break;
        case 9:
          val.name = "idle";
          break;
        default:
          return;
      }
    })
  );
  // console.log(animations_array);
  return { animations: { action: actions_array, animation: animations_array } };
}

function switchAnimations({
  mageRef,
  track,

  activeAnim,
}: {
  mageRef: React.MutableRefObject<THREE.Group | null>;
  track: THREE.AnimationAction;
  activeAnim: string;
}) {
  switch (activeAnim) {
    case "jump":
      console.log("i");
      track.repetitions = 1;
      track.reset().fadeOut(0.5).setDuration(3).fadeIn(0.5).play();
      break;
    case "skill":
      console.log("i");
      break;
    case "flying":
      console.log("flying");
      track.repetitions = Infinity;

      console.log(track.getClip());
      track.reset().fadeOut(0.5).setDuration(2).fadeIn(0.5).play();
      break;
    case "ball":
      console.log("f");
      track.setDuration(10).fadeIn(0.5).play();
      track.repetitions = Infinity;
      break;
    case "spell":
      console.log("i");

      track.reset().setDuration(5).fadeIn(0.5).play();
      break;
    case "work":
      console.log("i");

      break;
    case "contact":
      console.log("n");
      break;
    case "attack":
      console.log("h");
      break;
    case "idle":
      track.repetitions = Infinity;
      track.reset().setDuration(5).fadeIn(0.5).play();
      break;
    case "lookback":
      track.repetitions = Infinity;
      track.reset().setDuration(5).fadeIn(0.5).play();
      break;

    default:
      console.log("e");
      track.fadeOut(0.5).stop();
  }
}
