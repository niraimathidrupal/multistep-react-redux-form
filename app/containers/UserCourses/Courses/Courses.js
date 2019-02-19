import React, { Component } from 'react';

class Courses extends Component {
    constructor(props) {
        super(props);        

        this.state = {
        title: '',
        content: '',
        author: 'Max',
        id: '',
        isCourse: []
    }
    
};

    componentDidMount () {
        console.log(this.props);
    }

    courseClick(index) {
        
            let isCourse = this.state.isCourse.slice(0);
            isCourse[index] = !isCourse[index];
            this.setState({isCourse});
      
    }    
    
    render () {
        return (
            <div className="courses">
                <ul>
                    
                    <li> <a onClick= {this.courseClick.bind(this, 0)}>
                        udemy course1 </a>
                        {(this.state.isCourse[0]) ? 
                        <Course id="1"
                        title="React guide"/> : ""}  
                    </li>
                    <li>
                    <a onClick= {this.courseClick.bind(this,1)}>udemy course2</a>
                        {(this.state.isCourse[1]) ? 
                        <Course id="2"
                        title="Redux guide" /> : ""}  
                    </li>
                    <li>
                    <a onClick= {this.courseClick.bind(this,2)}> udemy course3</a>
                        {(this.state.isCourse[2]) ? 
                        <Course id="3"
                        title="Context guide" /> : ""}  
                    </li>
                </ul>        
            </div>
        );
    }
}


const Course =(props) => {
    return (<div id={props.id}>{props.title}</div>);
}



export default Courses;