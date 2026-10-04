// @path: src/components/ui/Modal.tsx

interface IModalPropsType {
  isValid: boolean;
  onClose: () => void;
  className?: Record<string, string>;
  children?: React.ReactNode;
}

const Modal = ({ isValid, onClose, className, children }: IModalPropsType) => {
  if (!isValid) return null;
  else {
    return (
      <div
        onClick={onClose}
        className={`fixed inset-0 flex bg-background/90 backdrop-blur-sm ${className?.mainDivClass}`}
      >
        <button
          className={`top-3 right-3 ${className?.buttonClass}`}
          onClick={onClose}
        >
          X
        </button>
        <div className={`${className?.childrenClass}`}>{children}</div>
      </div>
    );
  }
};

export default Modal;
