import React from 'react'
import { Link } from 'react-router-dom'
import "./header.css"
import logo from "../image/logo.jpg"

const Header = () => {
    return (
        <div>
        
            <header className="head">
                <input type="checkbox" id="check" />
                <label for="check" className="checkbtn">
                    <i className="fas fa-bars"></i>
                </label>
                <div className="heading">
                    <img src={logo} alt="Image description" />
                </div>
                <nav>
                    <ul className="list">
                        <li><Link to="/">Home</Link></li>
                        <li className="ab"><Link to="/about" >About</Link></li>
                        <li><Link to="/blog">Blogs</Link></li>
                        <li><Link to="/services" >Services</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                        <div className="box">
                            <Link href="downlode/HSN Code List in PDF.pdf" target="_blank" style={{fontWeight: "bold"}}>HSN Code List</Link>
                        </div>
                    </ul>
                </nav>
            </header>
        </div>
    )
}

export default Header
