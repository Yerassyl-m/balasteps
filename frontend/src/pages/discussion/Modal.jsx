import React from "react";
import "./Modal.css";

const Modal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>

            <div className="modal" onClick={(e) => e.stopPropagation()}>
                <h2>Create Own Thread</h2>

                <div className="middle_section">
                    <label>Title:</label>
                    <select style={{ width: "100px" }}>
                        <option>Actions</option>
                        <option>Feedback</option>
                    </select>
                </div>

                <label>Content:</label>
                <textarea placeholder="Type your message..." rows={5}></textarea>

                <div className="modal-buttons">
                    <button onClick={onClose}>Done</button>
                </div>
            </div>
            
        </div>
    );
};

export default Modal;
