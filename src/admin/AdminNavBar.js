import React from 'react';
import { Route, Routes, Link, useNavigate } from 'react-router-dom';
import './admin.css';


import AdminHome from './AdminHome';
import AddStudent from './AddStudent';
import ViewStudents from './ViewStudents';
import ChangeAdminPwd from './ChangeAdminPWD';
import ViewFaculty from './ViewFaculty';
import AddFaculty from './AddFaculty';
import AddCourse from './AddCourse';
import ViewCourses from './ViewCourses';
import AllocateCourse from './AllocateCourse';
import ViewAllocateCourse from './ViewAllocateCourse';


const homeIcon = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCf4lREb3S2e81IIHpMPU7Wk1R4HDvWhbIqld2TT8_Gg&s';
const changePasswordIcon = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-oled1sdKzsXy12YUSkimgtvM4KsfPnc3DdDm_8gcHQ&s';
const studentIcon = 'https://static.vecteezy.com/system/resources/previews/022/578/594/original/class-student-sit-school-pictogram-icon-vector.jpg';
const courseIcon = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJnaXw2h5iP_1Yf1jMwbmdpGamuaKgpkjMqVQkxaXj3LHzJpYCDiV5oesbHDpTqPj0qG0&usqp=CAU';
const facultyIcon = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN6y231BKqoIDh_aKXkSPthzg5ZVchXM_1om98e_tRUA&s';

export default function AdminNavBar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('isAdminLoggedIn');
    localStorage.removeItem('admin');
    navigate('/adminlogin');
    window.location.reload()
  };

  return (
    <div style={{backgroundColor: 'black', backgroundImage: `url('https://i.pinimg.com/originals/95/fc/9d/95fc9d6faecd2ecc13b1179ae07b3755.jpg')`, backgroundSize: 'cover', minHeight: '100vh' }}>
      <nav>
        <ul>
          <li>
            <Link to="/adminhome">
              <img src={homeIcon} alt="Home" style={{ width: '30px', height: '30px' }} />
            </Link>
          </li>
          <li>
            <Link to="/changeadminpwd">
              <img src={changePasswordIcon} alt="Change Password" style={{ width: '30px', height: '30px' }} />
            </Link>
          </li>
          <li className="dropdown">
            <Link to="/viewfaculty">
              <img src={facultyIcon} alt="Faculty" style={{ width: '30px', height: '30px' }} />
            </Link>
            <div className="dropdown-content">
              <Link to="/addfaculty">Add Faculty</Link>
              <Link to="/viewfaculty">View Faculty</Link> 
            </div>
          </li>
          <li className="dropdown">
            <Link to="/viewstudents">
              <img src={studentIcon} alt="Student" style={{ width: '30px', height: '30px' }} />
            </Link>
            <div className="dropdown-content">
              <Link to="/addstudent">Add Student</Link>
              <Link to="/viewstudents">View Students</Link>
            </div>
          </li>
          <li className="dropdown">
            <Link to="/viewcourses">
              <img src={courseIcon} alt="Course" style={{ width: '30px', height: '30px' }} />
            </Link>
            <div className="dropdown-content">
              <Link to="/addcourse">Add Course</Link>
              <Link to="/viewcourses">View Courses</Link>
              <Link to="/allocatecourse">Allocate Course</Link>
              <Link to="/viewcoursefacultyallocation">View Allocated Courses</Link>
            </div>
          </li>
          <li>
            <button className="logoutButton" onClick={handleLogout}>Logout</button>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/adminhome" element={<AdminHome />} exact />
        <Route path="/viewfaculty" element={<ViewFaculty />} exact />
        <Route path="/addstudent" element={<AddStudent />} exact />
        <Route path="/viewstudents" element={<ViewStudents/>} exact />
        <Route path="/changeadminpwd" element={<ChangeAdminPwd/>} exact />
        <Route path="/viewcourses" element={<ViewCourses/>} exact />
        <Route path="/addfaculty" element={<AddFaculty/>} exact />
        <Route path="/addcourse" element={<AddCourse/>} exact />
        <Route path="/allocatecourse" element={<AllocateCourse/>} exact/>
        <Route path="/viewcoursefacultyallocation" element={<ViewAllocateCourse/>} exact/>
      </Routes>
    </div>
  );
}
