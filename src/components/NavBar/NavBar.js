import React, { Component } from 'react';
import { MdSupportAgent, MdMenu, MdMenuOpen  } from 'react-icons/md'
import {Link} from 'react-router-dom'
import {Button} from '../Button/Button'
import { MenuItems } from './MenuItems';
import './NavBar.css'

class NavBar extends Component {
    state = {clicked: false}

    handleClick = () => {
        this.setState({clicked: !this.state.clicked})
    }

    render() {
        return(
            <nav className='NavbarItems'>
                <Link to='/' className='navbar-logo'>
                    <h1>Class Wiki<MdSupportAgent className='logo'/></h1>
                </Link>
                <div className='menu-icon' onClick={this.handleClick}>
                    {this.state.clicked ? <MdMenuOpen className='hamburger-menu'/> : <MdMenu className='hamburger-menu'/>}
                </div>
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    {MenuItems.map((item, index) => {
                        return (
                            <li key={index}><Link onClick={this.handleClick} className={item.cName} to={item.url}>{item.title}</Link></li>
                        )
                    })}
                </ul>
                <Link to='/contact'>
                    <Button>Contact</Button>
                </Link>
            </nav>
        );
    }
}

export default NavBar