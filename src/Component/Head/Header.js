import React from 'react'
import logo from '../../img/Mlleruplogo200x200transp1_srcset-large.png'

const Header = () => {
    return (

        <div className="container">
            <div className="row">
                <figure>

                    <img className="col-12 pt-5 center center-block" src={logo} alt="" />

                </figure>
            </div>
        </div>
    )
}

export default Header
