// Modal.tsx
import React from 'react';
import Button from '../components/Button';

export const Modal = ({ onClose, children, buttons }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
      <div className="bg-white w-[50%] p-8 rounded-lg items-center justify-center border-solid border-2 flex flex-col border-green-800">
        {children}
        <div className='flex justify-around w-[90%]'>
        {buttons &&
          buttons.map((button, index) => (
            <Button
              key={index}
              title={button.label}
              bg={button.bg}
              text={button.text}
              onClick={button.onClick}
            />
          ))}
        <Button title="Close" bg="#040E1E" text="white" onClick={onClose} />
        </div>
      </div>
    </div>
  );
};

export default Modal;
