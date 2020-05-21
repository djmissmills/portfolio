import React, { Component } from 'react';
import Navbar from './Navbar';


class App extends Component {
  render() {

    let links = [
      {label: 'Home', link: '#home', active: true},
      {label: 'About', link: '#about'},
      {label: 'Skills', link: '#skills'},
      {label: 'Portfolio', link: '#portfolio'},
      {label: 'Contact', link: '#contacts'},
    ];



    return (
      <div className="container center">
        <Navbar links={links}/>
      </div>
    );
  }
}

export default App;








