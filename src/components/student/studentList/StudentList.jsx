import React from 'react'
import StudentItem from '../studentItem/StudentItem'

const StudentList =  ({changeCheckbox, data}) => {
    console.log(data);

  return (
    <ul>
        {data.map((item, id) => {
            console.log(item);
        return (
          <StudentItem
            key={id}
            student={item}
            changeCheckbox={changeCheckbox}
            
          />
        );
      })}
    </ul>
  )
}

export default StudentList