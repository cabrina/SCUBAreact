import React, {Component} from 'react';
import {Link} from 'react-router-dom'

class Appfooter extends Component {
    render(){
        return(
            <footer>
                <div className="info-one">
                    <h2>PRAKTISKE OPLYSNINGER</h2>
                    <nav>
                        <ul>
                            <li>
                                <Link to="/about">Om Scuba Living</Link>
                                <Link to="/contact">Kontakt</Link>
                                <Link to="/">Handelsbetingelser</Link>
                                <Link to="/">Persondatapolitik</Link>
                                <Link to="/">Åbningstider</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className="info-two">
                    <h2>PRAKTISKE OPLYSNINGER</h2>
                    <nav>
                        <ul>
                            <li>
                                <Link to="/">Hovedkategorier</Link>
                                <Link to="/shop">Dykkerudstyr</Link>
                                <Link to="/travels">Dykkerrejser</Link>
                                <Link to="/courses">Dykkerkurser</Link>
                                <Link to="/">Service</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className="some">
                    <h2>SOCIALE MEDIER - FØLG OS HER:</h2>
                    <ul>
                        <li>
                            <Link to="/">LinkdIn</Link>
                            <Link to="/">Facebook</Link>
                            <Link to="/">Instagram</Link>
                        </li>
                    </ul>
                </div>
            </footer>
        )
    }
}

export default Appfooter