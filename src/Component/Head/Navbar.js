import React from 'react'

const Navbar = () => {
    return (
        <div className="container">
            <nav>
                <ul>
                    <li className="headerli">
                        <a href="">Velkommen</a>
                    </li>
                    <li className="headerli">
                        <a href="">Verdensballetten</a>
                    </li>
                    <li className="headerli">
                        <a href="">Nyheder</a>
                    </li>
                    <li className="headerli">
                        <a href="">Events og mødefacititeter</a>
                    </li>
                    <li className="headerli" >
                        <a href="">Hvad siger vores gæster</a>
                    </li>
                    <li className="headerli">
                        <a href="">Om Møllerup Gods</a>
                    </li>
                    <li className="headerli">
                        <a href="">Kontakt os</a>
                    </li>
                    <li className="headerli">
                        <a href="">Webshop</a>
                    </li>
                </ul>
            </nav>

        </div>
    )
}

export default Navbar;
