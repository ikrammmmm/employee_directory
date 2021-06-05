import React,{Component}  from 'react';
import {EmployeeRow} from './employeeRow';

export class EmployeesRows extends Component {
    render()
    {
        var key=1 ;
        return (
          <tbody>
            {this.props.employees.map( (employee,index) =>{
                return <EmployeeRow key={index} employee={employee}/>
            })}
          </tbody>
        )
    }
}