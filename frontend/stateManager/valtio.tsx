import {
  OrbitControls,
  OrbitControlsChangeEvent,
  OrbitControlsProps,
} from "@react-three/drei";
import { Ref, RefObject, useRef } from "react";
import { proxy, useSnapshot } from "valtio";
import { useProxy } from "valtio/utils";

export const store = proxy<{
  activeAnim: string;
  prevAnim: string;
  controls: Ref<any> | undefined;
}>({
  activeAnim: "BALL",
  prevAnim: "null",
  controls: undefined,
});

export const useStore = () => useProxy(store);
