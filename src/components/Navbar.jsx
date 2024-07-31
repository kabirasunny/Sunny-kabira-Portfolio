import React, { useEffect, useState } from 'react'
import './Navbar.css'
import { NavLink } from 'react-router-dom'

const Navbar = () => {

  const [css, setCss] = useState();


  function openHandle() {
    setCss({ display: 'flex', top: '0' });
  }

  function closeHandle() {
    setCss({ top: '-100vh' });
  }

  const [openSlide, setOpenSlide] = useState();
  const [closeCross, setCloseCross] = useState();
  const [menu, setMenu] = useState();
  const [navlink, setNavLink] = useState();

  function openMenu() {
    setOpenSlide({ width: '200px', transition: 'width 1s ease' });
    setCloseCross({ left: '160px', transition: 'left 1s ease' })
    setMenu({ left: '-56px', transition: 'left 2s ease' })
    setNavLink({ display: 'flex', transition: 'display 2s ease' })
  }

  function closeMenu() {
    setOpenSlide({ width: '0', transition: 'width 1s ease' });
    setCloseCross({ left: '-25px', transition: 'left 1s ease' });
    setMenu({ left: '10px', transition: 'left 2s ease' })
    setNavLink({ display: 'none' })
  }

  return (
    <>
      {/* <header>
        <nav >
          <div className="left">Sunny's Portfolio</div>
          <div className="right">
            <div onClick={openHandle} className="openMenu"><i className="fa-solid fa-bars"></i></div>
            <ul className="mainMenu" style={css}>
              <li onClick={closeHandle}><NavLink className={(e) => { return e.isActive ? "red" : "" }} to="/">Home</NavLink></li>
              <li onClick={closeHandle} ><NavLink to="/about" >About</NavLink></li>
              <li onClick={closeHandle}><NavLink to="/project" >Projects</NavLink></li>
              <li onClick={closeHandle}><NavLink to="/contact" >Contact Me</NavLink></li>
              <div onClick={closeHandle} className="closeMenu"><i className="fa-solid fa-xmark"></i></div>
            </ul>
          </div>
        </nav>
      </header> */}
      <header className="menu" style={menu}>
        <div className="open" onClick={openMenu}><i className="fa-solid fa-bars"></i></div>
      </header>

      <div className="slide" style={openSlide}>
        <i onClick={closeMenu} style={closeCross} className="fa-solid fa-xmark"></i>
        <div className="navLink" style={navlink}>
          <h3 className="logo">Sunny kabira Portfolio</h3>
          <ul>
            <li><a href='#home' onClick={closeMenu}><i className=" nav-icon fa-solid fa-house"></i> Home</a></li>
            <li><a href='#skill' onClick={closeMenu}><i className=" nav-icon fa-solid fa-address-card"> </i>Skill</a></li>
            <li><a href='#education' onClick={closeMenu}><i className=" nav-icon fa-solid fa-user-graduate"></i> Education</a></li>
            <li><a href='#project' onClick={closeMenu}> <i className=" nav-icon fa-solid fa-suitcase"></i> Project</a></li>
            <li><a href='#interest' onClick={closeMenu}><i className=" nav-icon fa-solid fa-heart"></i> Interest</a></li>
            <li><a href='#contact' onClick={closeMenu}><i className=" nav-icon fa-solid fa-envelope"></i> Contact</a></li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Navbar
