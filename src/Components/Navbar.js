import React from 'react'

export default function Navbar() {
    return (
        <div>
            <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark translucent">
                <img src="" alt="" className="logo" />
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item"><a className="nav-link" to="/">Home</a></li>
                            <li className="nav-item"><a className="nav-link" to="/business">Explore</a></li>
                            <li className="nav-item"><a className="nav-link" to="/entertainment"></a></li>
                            
                        </ul>
                    </div>
                </div>
            </nav>

        </div>
    )
}
