import React, { Component } from 'react'
import qs from 'query-string'
export default class HomeMessageDetail extends Component {

    render () {
        // 接收params参数
        // const { id, title } = this.props.match.params

        // 接收search参数
        // const {search} = this.props.location
        // const {id, title} = qs.parse(search)

        // 接收state参数
        // const {id, title} = this.props?.location?.state || {}
        // v6全部需要用钩子实现，这个用useLocation（），需要包裹一层函数组建

        const {id, title} = qs.parse(window.location.search) || {}

        return (
            <div>
                <hr />
                ID：{id}
                Title： {title}
                <hr />
            </div>
        )
    }
}
