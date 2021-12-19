import React from 'react';
import './Modal.scss';

const Modal = ({ handleAccept, show, children }) => {
  console.log("Modal show->", show);
  const showHideClassName = show ? "modal__background display-block" : "modal__background display-none";

  return (
    <div className={showHideClassName}>
      <section className="modal__section animate-opacity">
        <span class="modal__close" onClick={handleAccept}>&times;</span>
        {children}
      </section>
    </div>
  );
};

export default Modal;