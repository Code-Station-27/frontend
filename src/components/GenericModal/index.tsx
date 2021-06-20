import Modal from "react-modal";
import { useTheme } from "styled-components";

interface GenericModalProps {
  children: React.ReactNode;
  isOpen: boolean;
  onRequestClose?: boolean;
}

export const GenericModal = ({
  children,
  isOpen,
  onRequestClose,
}: GenericModalProps) => {
  const { colors } = useTheme();

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      backgroundColor: `${colors.shape}`,
    },
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.8)",
    },
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={customStyles}
      contentLabel="Example Modal"
    >
      {children}
    </Modal>
  );
};
