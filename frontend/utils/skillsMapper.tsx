import React from "react";
import { ImageElem } from "./SkillUtils";

const frontMap = [
  <ImageElem className="object-cover" src="assets/html.png" content="HTML" />,

  <ImageElem className="object-contain" src="assets/css.png" content="CSS" />,

  <ImageElem
    className="object-cover"
    src="assets/js.png"
    content="JAVA SCRIPT"
  />,

  <ImageElem
    className="object-contain"
    src="assets/react.png"
    content="REACTJS"
  />,

  <ImageElem
    className="object-contain"
    src="assets/threejs.png"
    content="THREE.JS"
  />,

  <ImageElem
    className="object-cover"
    src="assets/nextjs.png"
    content="NEXT.JS"
  />,
];
const backMap = [
  <ImageElem className="object-contain" src="assets/trpc.svg" content="tRPC" />,

  <ImageElem
    className="object-contain"
    src="assets/express.png"
    content="EXPRESS.JS"
  />,

  <ImageElem
    className="object-contain"
    src="assets/node.png"
    content="NODEJS"
  />,
];
const utilityMap = [
  <ImageElem
    className="object-cover"
    src="assets/ts.png"
    content="TYPESCRIPT"
  />,

  <ImageElem
    className="object-contain"
    src="assets/socketio.png"
    content="SOCKET.IO"
  />,

  <ImageElem
    className="object-contain"
    src="assets/react-query.png"
    content="REACT QUERY"
  />,
];
const dbMap = [
  <ImageElem
    className="object-contain"
    src="assets/prisma.jpeg"
    content="PRISMA"
  />,

  <ImageElem
    className="object-contain"
    src="assets/mongo.png"
    content="MONGODB"
  />,

  <ImageElem
    className="object-contain"
    src="assets/sanity.webp"
    content="SANITY"
  />,

  <ImageElem
    className="object-contain"
    src="assets/firebase.png"
    content="FIREBASE"
  />,
];
export default null;

export { frontMap, backMap, dbMap, utilityMap };
