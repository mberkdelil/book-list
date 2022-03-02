import React from 'react'
import { Modal, Button } from "react-bootstrap";

const BookDetail = ({ open, closeModal, book }) => {
    return (
        <>
            {
                open ? (
                    <Modal show={open} onHide={closeModal}>
                        <Modal.Header closeButton>
                            <Modal.Title>{book.name}</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>{book.topic}</Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={closeModal}>
                                Close
                            </Button>
                        </Modal.Footer>
                    </Modal>
                ) : null
            }
        </>
    )
}

export default BookDetail