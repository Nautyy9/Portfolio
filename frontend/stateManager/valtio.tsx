import { proxy, useSnapshot } from "valtio";
import { useProxy } from "valtio/utils";

export const store = proxy<{ activeAnim: string; prevAnim: string }>({
  activeAnim: "BALL",
  prevAnim: "null",
});
export const useStore = () => useProxy(store);
