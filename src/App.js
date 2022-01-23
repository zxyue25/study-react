import React, { Component } from "react";
import { NavLink, Link, Route, Routes } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";
import Home from "./pages/home";
import About from "./pages/about";
import "./app.css";

export default class App extends Component {
  render() {
    return (
      <div>
        路由的基本使用
        <Header />
        <Link className="link" to="/home">home</Link>
        <Link className="link" to="/about">about</Link>
        <Header />

        NavLink使用，支持高亮颜色，高亮class名默认为active，直接自定义
        <NavLink className={({isActive}) => `link ${isActive ? 'nav-active' : ''}`} to="/home">
          home
        </NavLink>
        <NavLink className="link" to="/about">
          about
        </NavLink>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </div>
    );
  }
}
