import React, { Component } from "react";
import {Route, Routes, Navigate } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";
import AppNavLink from "./components/app-nav-link";
import Home from "./pages/home";
import About from "./pages/about";

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        {/* 导航区 */}
        {[
          { to: "home/*", children: "home" },
          { to: "about/*", children: "about" },
        ].map((nav) => (
          <AppNavLink key={nav.to} {...nav} />
        ))}

        {/* 展示区 */}
        <Routes className="route">
          <Route path="home/*" element={<Home />} />
          <Route path="about/*" element={<About />} />
          <Route path="*" element={<Navigate to="home" />} />
        </Routes>
        <Footer />
        
        {/* <h3>路由的基本使用</h3>
        <Link className="link" to="/home/">
          home
        </Link>
        <Link className="link" to="/about">
          about
        </Link> */}

        <hr />

        {/* <h3>NavLink使用，支持高亮颜色，高亮class名默认为active，直接自定义</h3>
        <NavLink
          className={({ isActive }) => `link ${isActive ? "nav-active" : ""}`}
          to="/home"
        >
          home
        </NavLink>
        <NavLink
          className={({ isActive }) => `link ${isActive ? "nav-active" : ""}`}
          to="/about"
        >
          about
        </NavLink> */}

        {/* <hr />
        <h3>封装NavLink</h3>
        {[
          { to: "/home", children: "home" },
          { to: "/about", children: "about" },
        ].map((nav) => (
          <AppNavLink key={nav.to} {...nav} />
        ))} */}
      </div>
    );
  }
}
