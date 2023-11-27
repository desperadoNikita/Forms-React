import React, { Component } from 'react'

export default class Form extends Component {
    state = {
        name: "",
        group: "",
        checkbox: false,
    };


    changeValue = (e) => {
        const {name, value, checked, type} = e.target;
        console.log(value);
        this.setState({ [name]: type === 'checkbox' ? checked : value });
    }

    submit = (e) => {
        e.preventDefault();
        const {name, group, checkbox} = this.state;
        const newStudents = {name, group, checkbox}
        this.props.addStudent(newStudents);
        this.setState ( {name: "",
        group: "",
        checkbox: false} )
    }

    render() {
        return (
            <>
        <form onSubmit={this.submit}>
            <label>
                Name
                <input
                id="1"
                type='text'
                 value={this.state.name}
                 onChange={this.changeValue}
                 name="name">
                </input>
            </label>
            <label>
                Group
                <input
                id="2"
                type='text'
                 value={this.state.group}
                 onChange={this.changeValue}
                 name="group"
                 >
                </input>
            </label>
            <label>
                Presence
                <input
                id="3"
                type='checkbox'
                checked={this.state.checkbox}
                 value={this.state.checkbox}
                 onChange={this.changeValue}
                 name='checkbox'
                 >
                </input>
            </label>
            <button disabled={!this.state.checkbox} stype='submit'>Submit</button>
        </form>
        </>
    )
  }
}
