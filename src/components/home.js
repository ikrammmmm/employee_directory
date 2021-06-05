import React,{Component}  from 'react';

import {Header} from './header.js';
import {EmployeesTable} from './employeesTable';

import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
export class Home extends Component {

    render()
    {
        return (
                    <div>
                        <Header/>
                        <div className="container" >
                        <EmployeesTable/>
                        </div>
                    </div>
                    
        )
    }
}