import React, { Component } from "react";
import { connect } from "react-redux";
import { addPerson } from "../../store/actions/person";

class PersonUI extends Component {
  addPerson = () => {
    this.props.addPerson({
      name: this.name.value,
      age: this.age.value,
      id: +new Date(),
    });
  };
  render() {
    console.log(this.props)
    const { persons } = this.props;
    return (
      <div>
        <h1>person组件</h1>
        name: <input ref={(c) => (this.name = c)} />
        age: <input ref={(c) => (this.age = c)} />
        <button onClick={this.addPerson}>添加</button>
        {persons &&
          persons?.map((person) => (
            <li key={person.id}>
              name: {person.name} &nbsp; age: {person.age}
            </li>
          ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  persons: state.persons,
});

export default connect(mapStateToProps, (dispatch) => ({
  addPerson: (personObj) => dispatch(addPerson(personObj)),
}))(PersonUI);
