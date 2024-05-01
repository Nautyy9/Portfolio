import React, { MutableRefObject, useEffect } from "react";

type refArray = {
  modalRef: React.MutableRefObject<HTMLDialogElement | null>;
  activeImg: React.MutableRefObject<HTMLImageElement | null>;
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
          modalRef?.current?.close();
        }
      }}
    >
      <img
        className=" absolute inset-0 m-auto w-full h-full xs:h-4/5 xs:w-5/6 object-cover"
        ref={activeImg}
        autoFocus={false}
        src={activeImg?.current?.src}
        alt="modal_image"
      ></img>
      <button
        autoFocus={false}
        className="absolute top-2  right-3 bg-[#f5e4bc] text-[#292823]  focus:outline-none rounded-full border-4 border-y-[#292823] border-x-white  font-medium  py-.5 px-2 xs:py-2 xs:px-4"
        onClick={() => modalRef?.current?.close()}
      >
        <span className=" font-bold text-center text-xl  ">X</span>
      </button>
    </dialog>
  );
}

export default DialogComponent;
