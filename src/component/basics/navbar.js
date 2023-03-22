import React from 'react';

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-sm fixed-top bg-light">
                <div className="container my-2">
                    <a href="#" className="navbar-brand text-dark font-weight-bold">Sanatan Rastogi</a>
                    <button className="navbar-toggler" data-toggle="collapse" data-target="#collapseNav">
                        <span className="fas fa-bars text-dark"></span>
                    </button>
                    <div className="collapse navbar-collapse flex-grow-0" id="collapseNav">
                        <div className="navbar-nav">
                            <a href="#" className="nav-item nav-link text-dark h6 mx-3 my-auto">Home</a>
                            <a href="#skills" className="nav-item nav-link text-dark h6 mx-3 my-auto">Skills</a>
                            <a href="#about" className="nav-item nav-link text-dark h6 mx-3 my-auto">About</a>
                            <a href="#work" className="nav-item nav-link text-dark h6 mx-3 my-auto">Work</a>
                            <a href="#contact" className="nav-item nav-link text-dark h6 mx-3 my-auto">Contact</a>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;