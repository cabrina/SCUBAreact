import React, {Component} from 'react';
import {Link} from 'react-router-dom'

class Homesecfour extends Component{
    render(){
        return(
            <div className="content-four">
                <h1>PADI - DYKKERCERTIFIKAT</h1>
                <div className="sec-box"></div>
                <div className="sec-4-box">
                    <div className="text">
                        <h2>TAG ET INTERNATIONALT ANERKENDT DYKKERCERTIFIKAT</h2>
                        <p>Her finder du et stort udvalg af dykkerkurser lige fra begynder til proffesionel. Vi er et af Danmarks førende dykkercentre, som uddanner fra PADI organisationen. Når du vælger at tage et dykkercertifikat hos os, får du ikke kun et internationalt anerkendt dykkercertifikat til markedets bedste priser, du får også et dykkerkursus, hvor kvaliteten er i top.</p>
                        <p>Vi har kompetente instruktører på vores dykkerkuser. Erfaring, tilid og sikkerhed er vigtigt, når du dykker med os, derfor står vi klar med et stort hold af kompetente instruktører.</p>
                    </div>
                    <div className="img-box">
                        <img src="/img/padilogo.svg" alt="PADI"/>
                    </div>
                   </div>
                <Link to="/courses">
                    <h2>SE ALLE KURSER OG CERTIFIKATER!</h2>
                </Link>
            </div>
        )
    }
}

export default Homesecfour