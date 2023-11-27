import './App.css';
import React, { Component } from 'react'
import Form from './components/form/Form';
import StudentList from './components/student/studentList/StudentList';
import Info from './components/info/Info';

export default class App extends Component {
  state = {
    students: [{name: "Sofia",
    group: "C",
    checkbox: true}, {name: "Nik",
    group: "A",
    checkbox: false}, {name: "Oleg",
    group: "B",
    checkbox: false}],
  };

    changeCheckbox = (e) => {
      const{checked} = e.target
      this.setState((prev) => ({
        
      })
      )
      console.log(checked);
    }
  addStudent = (newStudents) => {
    this.setState((prev) => ({
      students: [...prev.students, newStudents]
    }))
  };

  render() {
    console.log(this.state.students);
    return (
      <div>
        <Info students={this.state.students}/>
        <Form addStudent={this.addStudent}/>
        <StudentList changeCheckbox={this.changeCheckbox} data={this.state.students}/>
      </div>
    )
  }
};

