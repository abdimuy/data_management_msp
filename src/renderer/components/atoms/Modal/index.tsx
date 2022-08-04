import Modal from 'react-modal';
import { ModalProps } from './types';
import { ERROR_COLOR, PRIMARY_BACKGROUND_COLOR } from 'contants';

const ModalCustom = ({ children, isOpen = false, closeModal }: ModalProps) => {
  return (
    <Modal
      isOpen={isOpen}
      style={{
        content: {
          position: 'absolute',
          backgroundColor: PRIMARY_BACKGROUND_COLOR,
          borderRadius: 8,
        },
      }}
      // shouldCloseOnEsc={false}
      // shouldCloseOnOverlayClick
    >
      <div
        style={{
          padding: 5,
          backgroundColor: ERROR_COLOR,
          width: 25,
          height: 25,
          display: 'flex',
          justifyContent: 'center',
          textAlign: 'center',
          borderRadius: 5,
          color: 'white ',
          fontSize: 20,
          cursor: 'pointer',
          position: 'fixed',
          right: 60,
          top: 50,
        }}
        onClick={closeModal}
      >
        x
      </div>
      {children}
    </Modal>
  );
};

export default ModalCustom;
