import React, { Component } from 'react'

export default class App extends Component {
  constructor (props) {
    super(props)
    this.handleClick1 = this.handleClick1.bind(this)
  }

  handleSubmit (e) {
    console.log(e)
    // e.preventDefault();
    console.log('You clicked submit.')
  }

  handleClick () {
    // undefined
    console.log(this)
  }

  handleClick1 () {
    console.log(this)
  }

  handleClick2 = (e, a) => {
    console.log(e)
    console.log(a)
    console.log(this)
  }

  handleClick3 = (a) => {
    console.log(a)
    return (e) => {
      console.log(e)
      console.log(this)
    }
  }

  render () {
    return <div>
      <form onSubmit={ this.handleSubmit }>
        <button type="submit">显示阻止默认行为</button>
      </form>
      
      <h1>this指向undefined</h1>
      <button onClick={ this.handleClick }>this指向</button><br />
      <h2>不传参</h2>
      <button onClick={ this.handleClick1 }>this指向解方1</button>bind不方便，写法不优雅<br /> 
      <button onClick={ this.handleClick2 }>this指向解法2</button>不传参优先这么写<br /> 
      <button onClick={ () => this.handleClick() }>this指向解法3</button><br />

      <h2>传参</h2>
      <button onClick={ (e) => this.handleClick2(e, '111') }>this指向解法4</button>传参优先这么写<br /> 
      <button onClick={ this.handleClick3('1111') }>this指向解法5</button>传参<br /> 

    </div>
  }
}
