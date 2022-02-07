import React from 'react'
import { useNavigate, withRouter } from 'react-router-dom'

export default function Header () {
    const navigate = useNavigate()

    return (
        <div style={{ background: 'red' }}>
            一般组件 —— 头部组件
            <button onClick={() => navigate(1)}>前进</button>
            <button onClick={() => navigate(-1)}>后退</button>
        </div>
    )
}
