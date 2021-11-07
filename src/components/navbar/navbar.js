import React from "react";
import { MenuItems } from "./menuItems"
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Cardano from "../ada";
import Bitcoin from "../btc";
import Ethereum from "../eth";


class Navbar extends React.Component{
    state = { clicked: false }

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }
    
    render(){
        return(
            <BrowserRouter>
            <nav className="NavbarItems">
                <h1 className="navbar-logo">bitPrice</h1>
                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className={ this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    {MenuItems.map((item, index) => {
                        return (
                            <li key={index}>
                                <Link to={item.url} className={item.cName}>
                                    {item.title}
                                </Link>
                                </li>
                        )
                    })}
                </ul>
            </nav>
            <Routes>
                <Route exact path="/ada" element={<Cardano />}/>
                <Route exact path="/eth" element={<Ethereum />}/>
                <Route exact path="/" element={<Bitcoin />}/>
            </Routes>
            </BrowserRouter>
        )
    }
}

export default Navbar;