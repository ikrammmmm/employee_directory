import React,{Component}  from 'react';

export class EmployeeRow extends Component {
    render()
    {
        var employee = this.props.employee;
        return (
          <tr> 
              <td><img src={employee.picture.thumbnail} alt={employee.name.first}></img></td>
              <td>{employee.name.title} {employee.name.first} {employee.name.last}</td>
              <td>{employee.id.name}</td>
              <td>{employee.phone}</td>
              <td>{employee.email}</td>
              <td>{employee.gender}</td>
              <td>{employee.location.city}</td>
        </tr>
        )
    }
}