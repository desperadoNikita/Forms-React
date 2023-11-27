import React from 'react'

const StudentItem = ({student, changeCheckbox}) => {
  return (
    <li>
        <p>Name: {student.name}</p>
        <p>Group: {student.group}</p>
        <input onChange={changeCheckbox} type='checkbox' checked={student.checkbox}/>
    </li>
  )
}

export default StudentItem