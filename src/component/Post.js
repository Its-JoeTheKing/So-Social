import 'react';
import React, { Component } from 'react'
import './Post.css'
import { Card, CardBody, CardFooter, CardHeader, CardImg, Row } from 'reactstrap'
import Img from '../assets/imgs/Urahara.jpg'

export default class Post extends Component {
  render() {
    return (
        <div>
        <Card className='post-card'>
            <CardHeader className='head-card'>
              <img className='profa' src={Img}/>
              <p className='user'>joesan_king</p>
            </CardHeader>
            <CardBody style={{height: '80%',width: '100%'}}>
              <CardImg style={{width: '100%',height: '80%'}} src={Img}/>
            </CardBody>
            <CardFooter>
              <Row style={{width: '100%',height: '30%',background: 'green'}}></Row>
              <Row style={{width: '100%',height: '40%',background: 'red'}}></Row>
              <Row style={{width: '100%',height: '30%',background: 'grey'}}></Row>
            </CardFooter>
        </Card>
        </div>      
    )
  }
}
