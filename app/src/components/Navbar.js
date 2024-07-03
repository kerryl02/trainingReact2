import React, {useState} from 'react';
import {Link} from 'react-router-dom';

export function Navbar() {
    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo">
                        TRVL
                    </Link>

                </div>
                
            </nav>
        </>
    )
}