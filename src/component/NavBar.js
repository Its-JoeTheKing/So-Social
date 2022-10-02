import 'react';
import '../component/NavBar.css';
import React, { Component } from 'react';
import {Navbar,NavbarBrand,NavbarText,NavLink} from 'reactstrap';
import img from '../assets/imgs/Urahara.jpg';

export default class NavBars extends Component {
  render() {
    return (
      <div>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='true'/>
        <link href="https://fonts.googleapis.com/css2?family=Acme&family=Bangers&family=Bree+Serif&family=Josefin+Sans&family=Montserrat:wght@500&family=Poppins:wght@500&family=Roboto:wght@500&family=Secular+One&family=Signika+Negative&family=Staatliches&family=Teko&display=swap" rel="stylesheet"/>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css" integrity="sha512-xh6O/CkQoPOWDdYTDqeRdPCVd1SpvCA9XXcUnZS2FmJNp1coAFzvtCN9BmamE+4aHK8yyUHUSCcJHgXloTyT2A==" crossorigin="anonymous" referrerpolicy="no-referrer" />
        <Navbar className='navbar'>
            <NavbarBrand className='brand'>So Social</NavbarBrand>
            <ul>
                <li className='links'><NavLink href='#' className='fas fa-home'></NavLink></li>
                <li className='links'><NavLink href='#' className='fas fa-video'></NavLink></li>
                <li className='links'><NavLink href='#' className='fas fa-paper-plane'></NavLink></li>
                <li className='links'><NavLink href='#' className='prof'><img className='prof' src={img} /></NavLink></li>
            </ul>
        </Navbar>
      </div>
    )
  }
}
