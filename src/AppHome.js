import React, {Component} from 'react';
import Homesecone from './HomeComponents/HomeSecOne'
import Homesectwo from './HomeComponents/HomeSecTwo';
import Homesecthree from './HomeComponents/HomeSecThree';
import Homesecfour from './HomeComponents/HomeSecFour';


class Apphome extends Component{
    render(){
        return(
            <div className="home">
                <Homesecone />
                <Homesectwo />
                <Homesecthree />
                <Homesecfour />
            </div>
        )
    }
}   

export default Apphome