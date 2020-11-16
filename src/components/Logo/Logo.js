import { logDOM } from '@testing-library/react';
import React from 'react';
import burgerLogo from './logo.png.png';
import classes from './Logo.css';


const logo = (props) => (
    <div className={"Logo"} style={{height: props.height}}>
        <img src={burgerLogo} alt="MyBurger"/>
    </div>
);

export default logo;