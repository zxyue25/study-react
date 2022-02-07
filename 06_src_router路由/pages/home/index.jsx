import React, { Component } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import AppNavLink from '../../components/app-nav-link'
import HomeMessage from './message'
import HomeNews from './news'

export default class Home extends Component {
    
    render () {
        return (
            <div>
                路由组件 —— home
                <div style={{ display: 'flex' }}>
                    <AppNavLink to='message' children="message" />
                    <AppNavLink to='news' children="news" />
                </div>

                <Routes>
                    <Route path="message/*" element={<HomeMessage />} />
                    <Route path="news/*" element={<HomeNews />} />
                    <Route path="*" element={<Navigate to="message" />} />
                </Routes>
            </div>
        )
    }
}
