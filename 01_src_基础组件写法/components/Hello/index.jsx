import React, {Component} from 'react'
import styles from './index.module.css'

export default class Hello extends Component {
    render() {
        return <h1 className={styles.title}>hello</h1>
    }
}