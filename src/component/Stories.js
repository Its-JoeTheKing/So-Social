import 'react';
import React, { Component } from 'react'
import './Stories.css';
import Img from '../assets/imgs/Urahara.jpg'
export default class Stories extends Component {
  render() {
    return (
      <div className='nav2'>
        <div className='story'>
            <img className='str' src={Img}></img><p>JoeSan</p>
        </div>
        <div className='story'>
            <img className='str' src={Img}></img><p>JoeSan</p>
        </div>
        <div className='story'>
            <img className='str' src={Img}></img><p>JoeSan</p>
        </div>
        <div className='story'>
            <img className='str' src={Img}></img><p>JoeSan</p>
        </div>
        <div className='story'>
            <img className='str' src={Img}></img><p>JoeSan</p>
        </div>
        <div className='story'>
            <img className='str' src={Img}></img><p>JoeSan</p>
        </div>
      </div>
    )
  }
}
