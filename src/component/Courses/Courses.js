import React from 'react';
import './Courses.css';





const Courses = (props) => {
    
    console.log(props);
    const {title, price, image} = props.course;
    const addCourseHandler = props.addCourseHandler;
    const selectedCourse = props.courseDetails;
    
    


    return (
        <div className = "course" >
            <div>
                <div className = "course-title">
                    <h4>{title}</h4>
                    <h5>{price}</h5>
                    <button onClick= { () => addCourseHandler(selectedCourse)} className = "btn btn-primary  main-btn">Enrol Now</button>
                </div>
            
                
                <div className = "img-container">
                    <img className = "img-fluid" src= {image}/>
                </div>
                

            </div>
            
            
        </div>
    );
};

export default Courses;