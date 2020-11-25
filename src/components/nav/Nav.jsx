import React from 'react'
import styles from './Nav.module.scss';

import { Link } from "@reach/router";
import logoImage from '../../assets/img/4210422.jpg'
const Nav = () => {
    return (
        <div className={styles.navBar}>
            <img src={logoImage} alt="logo"/>
            <h1>MentHealth</h1>
            <div className={styles.links}>
                <Link to="/">Home</Link> 
                <Link to="chart">Chart</Link>
            </div>

        </div>
    )
}

export default Nav
