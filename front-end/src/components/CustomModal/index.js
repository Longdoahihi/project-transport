import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

function CustomModal({isOpen = false,component = <></>,toggle = ()=>{} }) {
  return (
      <Modal isOpen={isOpen} toggle={toggle} size='xl' centered={true} >
        {component}
      </Modal>
  );
}

export default CustomModal;