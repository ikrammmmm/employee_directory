import React,{Component}  from 'react';

import './employees.css'; 
import {EmployeesRows} from './employeesRows';
import {getEmployees,changeGender} from '../services/EmployeeService.js';

export class EmployeesTable extends Component {   
    constructor(props)
    {
        super(props);
        this.state= {
            employeesCore : [],
            employees : [],
            isLoaded : false,
            sort : false ,
            sortDirection : "&#9660;"
        }
    }

    componentDidMount() {
       getEmployees().then(result => result.json())
        .then(data => {
            this.setState({
                employeesCore : data.results,
               isLoaded : true,
                employees : data.results,
            })
        })

    }
    handleSort = (event) => {
        if(this.state.sort){
            this.state.employees.sort(function (cur, next) {
                var person1 = cur.name.first.toLowerCase()
                var person2 = next.name.first.toLowerCase()
                if (person2 < person1) 
                    return -1
                else if (person2 > person1)
                    return 1
                else return 0 
            })
            this.setState({ sort: false})
        }
        else if (!this.state.sort) 
        {
            this.setState({ sort: true })
            if (!this.state.sort) {
                this.state.employees.sort(function (cur, next) {
                    var person1 = cur.name.first.toLowerCase()
                    var person2 = next.name.first.toLowerCase()
                    if (person1 < person2) 
                        return -1
                    else if (person1 > person2)
                        return 1
                    else return 0 
                })
            }
            }
    }

    changeGender = (event) =>
    {
        employees = [];
        if(event.target.value)
        {
            var employees = this.state.employeesCore.filter(function(employee){
                if(employee.gender == event.target.value) return true;
              });
        }
        else
        {
            employees = this.state.employeesCore;
        }
        this.setState({
            employees : employees
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
          <table className="table table-responsive table-bordered"  >
              <thead>
              <tr>
                <th colSpan="7">
                <div className="col-12 form-group ">
                <label >Select Gender :</label>
                    <div className="col-md-6">
                      
                        <select className="form-control select-form col-sm-6" id="gender" name="gender" onChange={e => this.changeGender(e)}> 
                            <option value="">All Employees</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </select>
                    </div>
                </div>
                </th>
              </tr>
              <tr>
                <th className="headers">Photo</th>
                <th className="headers" onClick={e => this.handleSort(e)}>Name <span className ="caret-up">&#9660;</span></th>
                <th className="headers">ID  <span className="caret-down"></span></th>
                <th className="headers">Phone </th>
                <th className="headers">Email</th>
                <th className="headers">Gender</th>
                <th className="headers"> Address</th>
              </tr>
              </thead>
              <EmployeesRows employees={employees}/>
          </table>
        )
    }
}