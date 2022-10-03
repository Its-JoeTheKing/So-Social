import 'react';
import React, { Component } from 'react'
import './Post.css'
import { Card, CardBody, CardFooter, CardHeader, CardImg, Row,Col } from 'reactstrap'
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
            <CardBody style={{height: '60%',width: '100%'}}>
              <CardImg style={{width: '100%',height: '100%'}} src={Img}/>
            </CardBody>
            <CardFooter style={{height: '30%'}}>
              <Row style={{width: '100%',height: '30%',display: 'flex',borderBottom: '2px solid black'}}>
                <Col className='btn fa-regular fa-heart'></Col>
                <Col className='btn fa-regular fa-comment'></Col>
                <Col className='btn fa-regular fa-paper-plane'></Col>
                <Col style={{marginLeft: '5%',display: 'inline-block',width: "60%",height: '100%'}}></Col>
              </Row>
              <Row style={{width: '100%',height: '40%'}}></Row>
              <Row style={{width: '100%',height: '30%'}}></Row>
            </CardFooter>
        </Card>
        </div>      
    )
  }
}
