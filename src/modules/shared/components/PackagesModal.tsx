import React, { useEffect, useRef } from "react";
import { useModalStore } from "../../../store/useModalStore";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const setShowHeader = useModalStore((state) => state.setShowHeader);

  useEffect(() => {
    const element = scrollRef.current;
    if (!isOpen || !element) return;

    const onScroll = () => {
      console.log("Scroll position:", element.scrollTop);
      if (element.scrollTop > 900) {
        setShowHeader(true);
      } else {
        setShowHeader(false);
      }
    };

    element.addEventListener("scroll", onScroll);
    return () => element.removeEventListener("scroll", onScroll);
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-transparent"
      onClick={onClose}
    >
      {/* Aquí ponemos el ref */}
      <div
        ref={scrollRef}
        className="relative rounded-2xl p-6 max-h-[80vh] w-full shadow-xl overflow-y-auto custom-scrollbar"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Botón de cerrar */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 rounded-full p-1 shadow-md"
          aria-label="Cerrar modal"
        >
          ✕
        </button>

        {/* Contenido */}
        {React.isValidElement(children)
          ? React.cloneElement(children as React.ReactElement<any>, {})
          : children}
      </div>
    </div>
  );
};
export default Modal;
