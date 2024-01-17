import React, { MutableRefObject, useEffect } from "react";

type refArray = {
  modalRef: React.MutableRefObject<HTMLDialogElement>;
  activeImg: React.MutableRefObject<HTMLImageElement>;
};

function DialogComponent({ modalRef, activeImg }: refArray) {
  return (
    <dialog
      autoFocus={false}
      className="bg-transparent m-auto w-3/4 md:w-3/4 h-3/4"
      ref={modalRef}
      onClick={(e) => {
        const dialogDim = modalRef.current!.getBoundingClientRect();
        if (
          e.clientX < dialogDim.left ||
          e.clientX > dialogDim.right ||
          e.clientY < dialogDim.top ||
          e.clientY > dialogDim.bottom
        ) {
          modalRef.current!.close();
        }
      }}
    >
      <img
        className=" absolute inset-0 m-auto h-4/5 w-5/6 object-cover"
        ref={activeImg}
        autoFocus={false}
        src={activeImg.current?.src}
        alt="modal_image"
      ></img>
      <button
        autoFocus={false}
        className="absolute top-2 right-3  rounded-full text-black border-4 border-y-black border-x-[#f5e4bc]  font-medium  py-2 px-4"
        onClick={() => modalRef.current.close()}
      >
        <span className=" font-bold text-center text-xl  ">X</span>
      </button>
    </dialog>
  );
}

export default React.forwardRef(DialogComponent);
