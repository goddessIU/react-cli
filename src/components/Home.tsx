import React from 'react'
// import style from './index.css'
import styles from './index.module.css'
import Ima from '../assets/logo.jpeg'

import { Footer } from './Footer'
const _ = require('lodash')
export const Home = () => {
    // const imge = new Image()
    // imge.src = Ima
    _.chunk(['a', 'b', 'c', 'd'], 2);
    return (
    <>
        <div className={styles['header']}>hello world</div>
        <img src={Ima}></img>
        <Footer />
    </>)
}