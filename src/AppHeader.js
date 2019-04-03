import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Appheader extends Component {
    render(){
        return(
            <header>
                <img src="../img/ScubaLiving_logo_small.svg" alt="scubaliving logo"/>
                <nav>
                    <ul>
                        <li><Link to="/">HOME</Link></li>
                        <li><Link to="/shop">DYKKERUDSTYR</Link></li>
                        <li><Link to="/travels">DYKKERREJSER</Link></li>
                        <li><Link to="/courses">DYKKERKURSER</Link></li>
                        <li><Link to="/contact">KONTAKT</Link></li>
                        <li><Link to="/about">OM OS</Link></li>
                    </ul>
                </nav>
                <form action="#">
                    <input type="text" className="search"/>
                    <input type="button" value="SØG" className="button"/>
                </form>
                <div className="login">
                    <img src="../img/lock-icon-300x300.png" alt="login"/>
                    <p>LOGIN</p>
                </div>
            </header>
        )
    }
} 

export default Appheader