import React, {Component} from 'react';
import Homesecone from './HomeComponents/HomeSecOne'
import Homesectwo from './HomeComponents/HomeSecTwo';
import Homesecthree from './HomeComponents/HomeSecThree';


class Apphome extends Component{
    render(){
        return(
            <div className="home">
                <Homesecone />
                <Homesectwo />
                <Homesecthree />
            </div>
        )
    }
}   

export default Apphome