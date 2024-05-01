import React from 'react'
import { Route, Routes, Link, useNavigate } from 'react-router-dom';
import './student.css'
import StudentHome from './StudentHome';
import StudentProfile from './StudentProfile';
import ViewCourses from './ViewCourses';
import ViewAttendance from './ViewAttendance';
import ViewAssignments from './ViewAssignments';
import ChangeStudentPwd from './ChangeStudentPWD';
import CourseRegister from './CourseRegister';

const homeIcon = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCf4lREb3S2e81IIHpMPU7Wk1R4HDvWhbIqld2TT8_Gg&s';
const changePasswordIcon = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-oled1sdKzsXy12YUSkimgtvM4KsfPnc3DdDm_8gcHQ&s';
const studentIcon = 'https://static.vecteezy.com/system/resources/previews/022/578/594/original/class-student-sit-school-pictogram-icon-vector.jpg';
const courseIcon = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJnaXw2h5iP_1Yf1jMwbmdpGamuaKgpkjMqVQkxaXj3LHzJpYCDiV5oesbHDpTqPj0qG0&usqp=CAU';


export default function StudentNavBar() {

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('isStudentLoggedIn');
    localStorage.removeItem('student');

    navigate('/studentlogin');
    window.location.reload()
  };

  return (
    <div>

    <nav>
     <ul>

     <Link to="/studenthome"><img src={homeIcon} alt="Home" style={{ width: '30px', height: '30px' }} /></Link>
     
     <Link to="/studentprofile"> <img src={studentIcon} alt="Student" style={{ width: '30px', height: '30px' }} /></Link>
    
     <Link to="/changestudentpwd"> <img src={changePasswordIcon} alt="Change Password" style={{ width: '30px', height: '30px' }} /></Link>
    
     <li className="dropdown">
            <Link><img src={courseIcon} alt="Course" style={{ width: '30px', height: '30px' }} /></Link>
            

            <div className="dropdown-content">
            <Link to="/viewcourses">View Assigned Courses</Link>
            
            <Link to="/viewattendance">Attendance</Link>
            <Link to="/viewassignments">Assignments</Link>
            <Link to="/courseregister">CourseRegistration</Link>
            
            
            </div>

           
    </li>
    
     <li><button className="logoutButton" onClick={handleLogout}>Logout</button></li>
     </ul>
     </nav>

         <Routes>
          
         <Route path="/studenthome" element={<StudentHome/>} exact/>
         <Route path="/studentprofile" element={<StudentProfile/>} exact/>
         <Route path="/viewcourses" element={<ViewCourses/>} exact/>
        
         <Route path="/viewattendance" element={<ViewAttendance/>} exact/>
         <Route path="/viewassignments" element={<ViewAssignments/>} exact/>
         <Route path="/changestudentpwd" element={<ChangeStudentPwd/>}exact/>
         <Route path="/courseregister" element={<CourseRegister/>}exact/>
         
        </Routes>

    </div>
  )
}