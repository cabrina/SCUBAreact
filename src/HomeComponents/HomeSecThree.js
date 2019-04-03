import React, {Component} from 'React';
import {Link} from 'react-router-dom'

class Homesecthree extends Component{
    render(){
        return(
            <div className="content-three">
            <h1>DYK UD I VERDEN</h1>
            <div class="sec-box"> </div>
            <div class="img-box-l">
                <img src="img/malta.jpg" alt="malta scubadiving"/>
            </div>
            <div class="img-box-r">
                <img src="img/norge.JPG" alt="norge scubadiving"/>
            </div>
            <div class="text-box-l">
                <h2>MALTA</h2>
                <p>Oplev skønne Malta og det helt fantastiske dyreliv og sammenhold. Vi arrangere dykkerejser hele året rundt</p>
            </div>
            <div class="text-box-r">
                <h2>NORGE</h2>
                <p>Nordeuropas bedste dykkerspots ligger i Norge. Vi har 25 års erfaringmed dyk i Norge. Oplev det klareste vand i verden!</p>  
            </div>
            <Link to="/travels"><h2>SE FLERE DESTINATIONER OG MULIGHEDER HER!</h2></Link>
            </div>
        )
    }
}

export default Homesecthree