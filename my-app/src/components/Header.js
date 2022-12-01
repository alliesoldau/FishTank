import React from 'react';

function Header() {
    return(
    <div className="Header">
        <div className="headerLeft">
            <div className="headerText">
                <h3>Left Header</h3>
                <p>more info</p>
            </div>
        </div>
        <div className="headerRight">
            <div className="headerText">
                <h3>Right Side</h3>
                <p>more info</p>
            </div>
        </div>
    </div>
    )
}

export default Header