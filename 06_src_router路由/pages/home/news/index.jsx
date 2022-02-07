import React from 'react'
import { Link, Route, Routes, useNavigate } from 'react-router-dom'
import HomeNewsDetail from './detail'
export default function HomeNews () {
    const navigate = useNavigate()
    const newArr = [
        { id: '001', title: '新闻1' },
        { id: '002', title: '新闻2' },
        { id: '003', title: '新闻3' },
    ]

    return (
        <div>
            {
                newArr.map(news =>
                    <li key={news.id}>
                        <Link to={`detail/${news.id}/${news.title}`}>{news.title}</Link>
                        <button onClick={() => navigate(`detail/${news.id}/${news.title}`)}>push</button>
                        <button onClick={() => navigate(`detail/${news.id}/${news.title}`, {replace: true})}>replace</button>
                        <button onClick={() => navigate(1)}>前进</button>
                        <button onClick={() => navigate(-1)}>后退</button>
                    </li>)
            }

            <Routes>
                <Route path='detail:id:title' element={<HomeNewsDetail />}></Route>
            </Routes>
        </div>
    )
}
