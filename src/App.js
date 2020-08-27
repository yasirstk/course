import React, { useState } from 'react';
import Header from './component/Header/Header';
import Courses from './component/Courses/Courses';
import courseInfo from './component/Courses/courseInfo';
import Cart from './component/Cart/Cart';






function App() {
   const [cart, setCart] = useState([]);
  const addCourseHandler = (course) => {
      const addedCourse = [...cart, course]
      setCart (addedCourse) ;
   

  }

  

  return (
    <div className="App">
       <Header></Header>
       <div className="row">
         <div className="col-8">
          {courseInfo.map(course=> <Courses courseDetails = {course} addCourseHandler =  {addCourseHandler}  course = {course}> </Courses> )}
         </div>
         <div className="col-4 ">
         <Cart cart = {cart}></Cart>
         </div>
       </div>
      
     
    </div>
  );
}

export default App;
