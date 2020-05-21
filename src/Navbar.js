import React, { Component } from 'react';
// import millslogo from './millslogo.png';
// import searchIcon from './search-icon.png';


class Navbar extends Component {

    render() {
        
        let linksMarkup = this.props.links.map((link, index) => {
            let linkMarkup = link.active ? (
                <a className="menu__link menu__link--active" href={link.link}>{link.label}</a>
            ) : (
                <a className="menu__link" href={link.link}>{link.label}</a>
            );

            return (
                <li key={index} className="menu__list-item">
                    {linkMarkup}
                </li>
            );
        });

        return (
            <nav className="menu">
                <div className="menu__right">
                    <ul className="menu__list">
                        {linksMarkup}
                    </ul>
                </div>
            </nav>
        );
    }
}



export default Navbar;