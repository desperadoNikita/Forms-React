import React from 'react'

const Info = ({students}) => {
const activeStudents = students.filter(student => student.checkbox === true);
 const changeStudents = activeStudents.length
  return (
    <>
    <p>всього студентів {students.length};</p>
    <p>присутніх студентів {changeStudents};</p>
    </>
    
  )
}


export default Info