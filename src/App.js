import React, { Component } from "react";
import { NavLink, Link, Route, Routes } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";
import AppNavLink from "./components/app-nav-link";
import Home from "./pages/home";
import About from "./pages/about";

export default class App extends Component {
  render () {
    return (
      <div>
        <h3>路由的基本使用</h3>
        <Header />
        <Link className="link" to="/home">home</Link>
        <Link className="link" to="/about">about</Link>
        <Routes className="route">
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
        <hr />
        <h3>NavLink使用，支持高亮颜色，高亮class名默认为active，直接自定义</h3>
        <NavLink className={({ isActive }) => `link ${isActive ? 'nav-active' : ''}`} to="/home">
          home
        </NavLink>
        <NavLink className={({ isActive }) => `link ${isActive ? 'nav-active' : ''}`} to="/about">
          about
        </NavLink>

        <hr />
        <h3>封装NavLink</h3>
        {
          [{ to: '/home/1', children: 'home' }, { to: '/about', children: 'about' }].map(nav =>
            <AppNavLink key={nav.to} {...nav} />
          )
        }
      </div>
    );
  }
}
