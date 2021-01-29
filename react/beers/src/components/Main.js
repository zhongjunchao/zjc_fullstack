import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import Header from'./Header';
import Item from'./Item';
import List from'./List';
import Loader from'./Loader';

export default class Main extends Component {
    constructor(){
        super()
        this.state ={
            isloading:true
        }
    }
    render() {
        return(
            <div>
                <Header siteName="Beer me!" />
                <Item />
                <List />
                <Loader />
            </div>
        )
    }

}