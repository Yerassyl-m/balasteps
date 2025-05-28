import React, { useState, useEffect } from 'react'
import './Discussion.css'
import Headerside from '../../components/headerside/Headerside'
import Footer from '../../components/footer/Footer';
import SearchButton from '../../assets/search_button_header.png'; 

const Discussion = () => {
    const [menuOpen, setMenuOpen] = useState(false);
const isMenuOpen = menuOpen;

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
            <div className={`discussion_inside ${menuOpen ? "shifted" : ""}`}>

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
                            <button className="discussion_button">+ Create</button>
                        </div>
                    </div>

                </div>

                <div className="discussion_body">

                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Discussion
