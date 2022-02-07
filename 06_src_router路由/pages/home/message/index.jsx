import React, { Component } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import HomeMessageDetail from './detail'

export default class HomeMessage extends Component {
    state = {
        messageArr: [
            { id: '001', title: '消息1' },
            { id: '002', title: '消息2' },
            { id: '003', title: '消息3' },
        ]
    }
    render () {
        const { messageArr } = this.state
        return (
            <div>
                {
                    messageArr.map(msg =>
                        <li key={msg.id}>
                            {/* V5 */}
                            {/* 向组件传递params参数 */}
                            {/* <Link to={`detail/${msg.id}/${msg.title}`}>{msg.title}</Link> */}

                            {/* V5 */}
                            {/* 向组件传递search参数 */}
                            <Link replace to={`detail?id=${msg.id}&title=${msg.title}`}>{msg.title}</Link>

                            {/* V5 */}
                            {/* 向组件传递state参数 */}
                            {/* <Link to={{pathname: 'detail', state: {...msg}}}>{msg.title}</Link> */}

                            {/* v6使用useloaction获取search，然后用qs解析 */}
                            {/* <Link to={{pathname: 'detail', state: {...msg}}}>{msg.title}</Link> */}
                        </li>
                    )
                }
                <Routes>
                    {/* V5 */}
                    {/* 声明接收params参数 */}
                    {/* <Route path="detail/:id/:title" element={<HomeMessageDetail />} /> */}

                    {/* V5 */}
                    {/* 声明接收search参数(无需声明，正常注册即可) */}
                    {/* <Route path="detail" element={<HomeMessageDetail />} /> */}

                    {/* V5 */}
                    {/* 声明接收state参数(无需声明，正常注册即可) */}
                    {/* <Route path="detail" element={<HomeMessageDetail />} /> */}

                    <Route path="detail" element={<HomeMessageDetail />} />
                </Routes>
            </div>
        )
    }
}
