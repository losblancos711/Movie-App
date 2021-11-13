import '/Users/karthikrao/Desktop/movies-app/src/common/header/Header-styles.css';
import React from 'react';
// import {Component} from 'react';

class Header extends React.Component {
    render() { 
        return <div className="header-nav">
               <img src="/Users/karthikrao/Desktop/movies-app/src/assets/images/logo.svg" alt="logo" />
        </div>;
    }
}
 
export default Header;