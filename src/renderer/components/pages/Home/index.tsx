import { useState } from 'react';
import ModalCustom from 'renderer/components/atoms/Modal';
const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleOnClick = () => {};
  return (
    // <a href="https://github.com/abdimuy" target="_blank">
    //   Inicio
    // </a>
    <>
      <div onClick={() => setIsOpen(true)}>Inicio</div>
      <ModalCustom isOpen={isOpen}>
        <div onClick={() => setIsOpen(false)}>Hola mundo</div>
      </ModalCustom>
    </>
  );
};

export default Home;
