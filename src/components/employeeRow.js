import React,{Component}  from 'react';

export class EmployeeRow extends Component {

   
    render()
    {
        var employee = this.props.employee;
        return (
          <tr> 
              <td>{employee.name.first}</td>
              <td>{employee.name.title} {employee.name.first} {employee.name.last}</td>
              <td>{employee.phone}</td>
              <td>{employee.email}</td>
        </tr>
        )
    }
}