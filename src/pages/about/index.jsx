import React, { Component } from 'react'

export default class About extends Component {
    render(){
        console.log('About组件的props', this.props)
        return (
            <div>
                路由组件 —— about
            </div>
        )
    }
}