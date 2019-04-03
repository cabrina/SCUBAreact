import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class Homesectwo extends Component{
    render(){
        return(
            <div className="content-two">
                <h1>MEST POPULÆRE DYKKERUDSTYR</h1>
                <div className="sec-box"></div>
                <figure className="f1">
                    <img src="img/reg.jpg" alt="regulator"/>
                    <figcaption>REGULATOR MED RESIST <span>KR. 899.-</span></figcaption>
                </figure>
                <figure className="f2">
                    <img src="img/fine.jpg" alt="finne"/>
                    <figcaption>REJSEFINNE <span>KR. 999.-</span></figcaption>
                </figure>
                <figure className="f3">
                    <img src="img/fine.jpg" alt="finne"/>
                    <figcaption>REJSEFINNE <span>KR. 999.-</span></figcaption>
                </figure>
                <figure className="f4">
                    <img src="img/hanske.jpg" alt="handske"/>
                    <figcaption>COLDWATER GLOVES <span>KR. 1499.-</span></figcaption>
                </figure>
                <Link to="/shop">
                    <h2>SE MERE LÆKKERT UDSTYR HER!</h2>
                </Link>
            </div>
        )
    }
}

export default Homesectwo