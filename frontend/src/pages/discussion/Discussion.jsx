import React, { useState, useEffect } from 'react'
import './Discussion.css'
import Headerside from '../../components/headerside/Headerside'
import Footer from '../../components/footer/Footer';
import SearchButton from '../../assets/search_button_header.png';
import Modal from './Modal';

const Discussion = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const isMenuOpen = menuOpen;
    const [isModalOpen, setIsModalOpen] = useState(false);


    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [isMenuOpen]);


    return (
        <div className="discussion_all">
            <Headerside isOpen={menuOpen} setIsOpen={setMenuOpen} />
            <div className={`symptom_inside ${menuOpen ? "shifted" : ""}`}>
                <div className="discussion_header">
                    <div className="discussion_title_header">
                        <h1>Discussion Forum</h1>
                    </div>

                    <div className="discussion_right">
                        <div className="discussion_search_header" >
                            <input className='searchinput' type="text" placeholder="Search for topics, keywords" />
                            <button className="discussion_search"><img src={SearchButton} alt="" /></button>
                        </div>
                        <div className="discussion_button_header">
                            <button className="discussion_button" onClick={() => setIsModalOpen(true)}>+ Create</button>
                            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
                        </div>
                    </div>
                </div>

                <div className="line-horizontal" />

                <div className="discussion_body">
                    <div className="discussion_body_table">

                    </div>
                </div>



            </div>



            <Footer />
        </div>
    )
}

export default Discussion
