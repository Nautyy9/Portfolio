import React from "react";
import { ImageElem } from "./SkillUtils";

const frontMap = [
  <ImageElem
    index={0}
    className="object-cover"
    src="https://utfs.io/f/ff41f5e0-c0b8-4c2c-9a1f-9d17852cdfe7-1wvcb.png"
    content="HTML"
  />,

  <ImageElem
    index={1}
    className="object-contain"
    src="https://utfs.io/f/c8bebf6d-9266-4e1f-9665-59e46932f8be-248z.png"
    content="CSS"
  />,

  <ImageElem
    index={2}
    className="object-cover"
    src="https://utfs.io/f/aab05137-d7d3-4f13-9c48-151880248491-2mh.png"
    content="JAVA SCRIPT"
  />,

  <ImageElem
    index={3}
    className="object-contain"
    src="https://utfs.io/f/2d88e177-f17f-4bf6-90f3-9f0c5e4e98df-1sj3pb.png"
    content="REACTJS"
  />,

  <ImageElem
    index={4}
    className="object-contain"
    src="https://utfs.io/f/038cec89-1b11-4d1b-b804-9f2cc4671a92-m4kjo9.png"
    content="THREE.JS"
  />,

  <ImageElem
    index={5}
    className="object-cover"
    src="https://utfs.io/f/c83c8e1d-6f7d-4b65-a14d-bafcbd01ba84-hcfblw.png"
    content="NEXT.JS"
  />,
];
const backMap = [
  <ImageElem
    index={0}
    className="object-contain"
    src="assets/trpc.svg"
    content="tRPC"
  />,

  <ImageElem
    index={1}
    className="object-contain"
    src="https://utfs.io/f/70038ef7-edf4-446a-9252-ea23035c4eac-lnbyxc.png"
    content="EXPRESS.JS"
  />,

  <ImageElem
    index={2}
    className="object-contain"
    src="https://utfs.io/f/ec0564db-c885-4498-a330-8cf3b673b531-20lc2.png"
    content="NODEJS"
  />,
];
const utilityMap = [
  <ImageElem
    index={0}
    className="object-cover"
    src="https://utfs.io/f/01aa90f6-8b92-473a-8dee-d895683b02c2-2v3.png"
    content="TYPESCRIPT"
  />,

  <ImageElem
    index={1}
    className="object-contain"
    src="https://utfs.io/f/f54654bd-05f1-46fd-84c7-6d6ff76d5ccc-k93pax.png"
    content="SOCKET.IO"
  />,

  <ImageElem
    index={2}
    className="object-contain"
    src="https://utfs.io/f/18001b39-d45f-4749-8a60-2fff262e6768-nes9ve.png"
    content="REACT QUERY"
  />,
];
const dbMap = [
  <ImageElem
    index={0}
    className="object-contain"
    src="https://utfs.io/f/45ede622-fc15-4d43-b7df-cb538b8a51e9-g7gclc.jpeg"
    content="PRISMA"
  />,

  <ImageElem
    index={1}
    className="object-contain"
    src="https://utfs.io/f/54e5235a-cf53-4198-a6c3-3697cec87bff-1pysc4.png"
    content="MONGODB"
  />,

  <ImageElem
    index={2}
    className="object-contain"
    src="https://utfs.io/f/ce28b8a3-5002-46c8-bd95-b9394d0ab61c-f1kzsi.webp"
    content="SANITY"
  />,

  <ImageElem
    index={3}
    className="object-contain"
    src="https://utfs.io/f/66f4919f-9308-4d21-985a-fd8165ec51bc-9bekft.png"
    content="FIREBASE"
  />,
];
export default null;

export { frontMap, backMap, dbMap, utilityMap };
