import React, {Component} from 'react';
import {Link} from 'react-router-dom'

class Homesecthree extends Component{
    render(){
        return(
            <div className="content-three">
            <h1>DYK UD I VERDEN</h1>
            <div className="sec-box"> </div>
            <div className="img-box-l"></div>
            <div className="img-box-r"></div>
            <div className="text-box-l">
                <h2>MALTA</h2>
                <p>Oplev skønne Malta og det helt fantastiske dyreliv og sammenhold. Vi arrangere dykkerejser hele året rundt</p>
            </div>
            <div className="text-box-r">
                <h2>NORGE</h2>
                <p>Nordeuropas bedste dykkerspots ligger i Norge. Vi har 25 års erfaringmed dyk i Norge. Oplev det klareste vand i verden!</p>  
            </div>
            <Link to="/travels"><h2>SE FLERE DESTINATIONER OG MULIGHEDER HER!</h2></Link>
            </div>
        )
    }
}

export default Homesecthree