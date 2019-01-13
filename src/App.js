import React, { Component } from 'react';
import CourseForm from './components/CourseForm'
import CourseList from './components/CourseList'

class App extends Component {
  state = {
    courses : [
      {name : "HTML"},
      {name : "CSS"},
      {name : "JavaScript"}
    ] ,
    current : ''
  }
  

  // UPDATE COURSE
  updateCourse = (e) => {
    this.setState({
      current : e.target.value
    })
  }

  // ADD COURSE
  addCourse = (e) => {
    e.preventDefault(); // To stop reload the page
    let current = this.state.current
    let courses = this.state.courses;
    courses.push({name : current})
    // Update the list
    this.setState({
      courses,
      current: '' // this line to make form empty after click on butten "add course"
    })
  }

  // DELETE COURSE 
  deleteCourse = (index) => {
    let courses = this.state.courses; // All courses
    courses.splice(index, 1);
    this.setState({
      courses
    })
  }  
editCourse = (index, value) => {
  let courses = this.state.courses;
  let course = courses[index];
  course['name'] = value
  this.setState({
    courses
  })

}
  // EDIT COURSE

  render() {
    const {courses} = this.state;
    const courseList = courses.map((course,index) => {
      return <CourseList 
      details={course} 
      key={index}
      update={this.handleChange}
      deleteCourse={this.deleteCourse}
      editCourse={this.editCourse}
      index={index}/>
    })
    return (
      <section className="App">
        <h2>Add Course</h2>
        <CourseForm 
        current={this.state.current} 
        updateCourse={this.updateCourse} 
        addCourse={this.addCourse}
        />
        <ul>{courseList}</ul>
      </section>
    );
  }
}

export default App;
