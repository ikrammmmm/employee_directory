import React,{Component}  from 'react';

import {Header} from './header.js';
import {EmployeesTable} from './employeesTable';

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