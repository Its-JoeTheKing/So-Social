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
            <CardBody style={{height: '70%',width: '100%'}}>
              <CardImg style={{width: '100%',height: '100%'}} src={Img}/>
            </CardBody>
            <CardFooter style={{height: '30%'}}>
              <Row style={{width: '100%',height: '25%',display: 'flex'}}>
                <Col className='btn fa-regular fa-heart'></Col>
                <Col className='btn fa-regular fa-comment'></Col>
                <Col className='btn fa-regular fa-paper-plane'></Col>
                <Col className='btna fa-regular fa-bookmark'></Col>
              </Row>
              <Row style={{width: '100%',height: '15%'}}>
                <h2 style={{marginLeft: '20px',fontFamily: 'josefin sans',fontWeight: 'lighter',fontSize: '18px',textAlign: 'left'}}>Hello World</h2>
              </Row>
              <Row style={{width: '100%',height: '20%',display: 'flex',borderTop: '1px solid grey'}}>
                <Col className='fa-regular fa-comment-dots' style={{marginTop: '8px',marginLeft: '10px',width: '10%',fontSize: '30px'}}></Col>
                <Col className='comm'><textarea className='comm' placeholder='Add Comment ...' /></Col>
                <Col className='butt'><button className='butt'>send</button></Col>
              </Row>
            </CardFooter>
        </Card>
        </div>      
    )
  }
}
