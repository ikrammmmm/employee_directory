import React,{Component}  from 'react';


import {EmployeeRow} from './employeeRow';

export class EmployeesRows extends Component {

    constructor(props)
    {
        super(props);
        this.state= {
            employees : [],
            isLoaded : false,
        }
    }
    componentDidMount() {
        fetch("https://randomuser.me/api/?results=10")
            .then(result => result.json())
            .then(data => {
                this.setState({
                   isLoaded : true,
                    employees : data.results,
                })
            })
    }
    render()
    {
        var  {isLoaded,employees} = this.state;
        if(!isLoaded)
        {
            return <div>Loading...</div>;
        }
        return (
          <tbody>
            {employees.map(employee =>{
                return <EmployeeRow employee={employee}/>
            })}
          </tbody>
        )
    }
}