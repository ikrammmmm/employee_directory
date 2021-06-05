import React,{Component}  from 'react';

import {EmployeesRows} from './employeesRows';

export class EmployeesTable extends Component {   
    render()
    {
        
        return (
          <table className="table table-responsive">
              <th>
                    Photo
              </th>
              <th>
                    Name
              </th>
              <th>
                    Phone
              </th>
              <th>
                    Email
              </th>
              <EmployeesRows/>
          </table>
        )
    }
}