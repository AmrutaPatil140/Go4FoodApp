import React, { Component } from 'react';
import {Container,Row,Col,Image} from 'react-bootstrap';
import {img1} from './Images/img1.jpg';
import {img2} from './Images/img2.jpg';
import {img3} from './Images/img3.jpg';
import {img4} from './Images/img4.jpg';
class Show extends Component {
    render() {
        return (
            <img src={img1}/>
        );
    }
}

export default Show;