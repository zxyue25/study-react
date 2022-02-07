import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class AppNavLink extends Component {
    render () {
        return (
            <div>
                <NavLink
                    className={({ isActive }) => `link ${isActive ? 'nav-active' : ''}`}
                    {...this.props}
                >
                    {this.props.children}
                </NavLink>
            </div>
        )
    }
}
