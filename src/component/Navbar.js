import React, { useState } from 'react'
import llogo from './llogo.png'
import './navstyle.css'
import { Link } from 'react-router-dom'

function Navbar() {
    const handleChange = (event) => {
        setText(event.target.value);
    }
    const [text, setText] = useState("");
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid cop">
                    <img className="sii" src={llogo} />
                    <button className="navbar-toggler maicolor" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/Movie">Movies</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/Tvshow">TV shows</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Watch Via
                                </a>
                                <ul className="dropdown-menu coco" aria-labelledby="navbarDropdown">
                                    <li><a className="dropdown-item colo" href="https://www.netflix.com/" target="_blank">Netflix</a></li>
                                    <li><a className="dropdown-item colo" href="https://www.primevideo.com/" target="_blank">Amazon Prime</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item colo" href="/" target="_blank">Rate The Site</a></li>
                                </ul>
                            </li>
                        </ul>
                        <form className="d-flex">
                            <input className="form-control me-2 se" value={text} onChange={handleChange} type="search" placeholder="Search" aria-label="Search" />
                            <Link className="btn btn-outline-primary" to={`/Search/${text}`}>Search</Link>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    )

}

export default Navbar
/*


 */