import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

// Proptypes check the type of props received and validates if it is correct or not.
// Default props - if let say value of the written prop is not passed then it will write that default value there instead of showing error
// you can check this by commenting props passed in app.js

function Navbar(props) {
    return (
        // for light navbar
        // <nav className="navbar navbar-expand-lg navbar-light bg-light">
        // {/* For dark navbar use class below  */}
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">{props.title}</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">{props.aboutText}</Link>
                        </li>
                    </ul>

                    <div className="d-flex mx-2">
                        <div className="bg-primary rounded mx-2" style={{ height: '30px', width: '30px', cursor: 'pointer' }} onClick={() => props.toggleMode('primary')}>
                        </div>
                        <div className="bg-success rounded mx-2" style={{ height: '30px', width: '30px', cursor: 'pointer' }} onClick={() => props.toggleMode('success')}>
                        </div>
                        <div className="bg-danger rounded mx-2" style={{ height: '30px', width: '30px', cursor: 'pointer' }} onClick={() => props.toggleMode('danger')}>
                        </div>
                        <div className="bg-warning rounded mx-2" style={{ height: '30px', width: '30px', cursor: 'pointer' }} onClick={() => props.toggleMode('warning')}>
                        </div>
                        <div className="bg-light rounded mx-2" style={{ height: '30px', width: '30px', cursor: 'pointer', border: '1px solid' }} onClick={() => props.toggleMode('light')}>
                        </div>
                        <div className="bg-dark rounded mx-2" style={{ height: '30px', width: '30px', cursor: 'pointer', border: '1px solid white' }} onClick={() => props.toggleMode('dark')}>
                        </div>
                    </div>

                    <form className="d-flex">
                        <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
                            <input className="form-check-input" onClick={() => props.toggleMode(null)} type="checkbox" id="flexSwitchCheckDefault" />
                            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Toggle mode</label>
                        </div>
                        {/* <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-danger" type="submit">Search</button> */}
                    </form>
                </div>
            </div>
        </nav>
    )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    aboutText: PropTypes.string
}
// if default props not set and we have kept any prop as isRequired and if it is not passed then we will get error

Navbar.defaultProps = {
    title: 'Set title here',
    aboutText: 'Set about text here'
}

export default Navbar
