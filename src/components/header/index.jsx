import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        console.log('头部组件的props', this.props)
        return (
            <div>
                一般组件 —— 头部组件
            </div>
        )
    }
}
