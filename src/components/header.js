import React,{Component}  from 'react';
export class Header extends Component {
    componentDidMount() {
        document.title = 'Employee directory';
      }
    render()
    {
        return (
            <nav className="navbar navbar-dark bg-dark">
                <span className="navbar-brand mb-0 pl-2 h1">Employee Directory</span>
            </nav>
        )
    }
}