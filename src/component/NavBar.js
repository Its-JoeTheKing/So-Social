import 'react';
import '../component/NavBar.css';
import React, { Component } from 'react';
import {Navbar,NavbarBrand,NavbarText,NavLink} from 'reactstrap';
import img from '../assets/imgs/Urahara.jpg';

export default class NavBars extends Component {
  render() {
    return (
      <div>
        <Navbar className='navbar'>
            <NavbarBrand className='brand'>So Social</NavbarBrand>
            <input className='searchbar' placeholder='search'></input>
            <ul>
                <li className='links'><NavLink href='#' className='fas fa-home'></NavLink></li>
                <li className='links'><NavLink href='#' className='fas fa-tv'></NavLink></li>
                <li className='links'><NavLink href='#' className='fas fa-paper-plane'></NavLink></li>
                <li className='links'><NavLink href='#' className='prof'><img className='prof' src={img} /></NavLink></li>
            </ul>
        </Navbar>
      </div>
    )
  }
}
