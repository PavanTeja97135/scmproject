import React, { useState } from 'react';
import axios from 'axios';
import config from '../config'


export default function AddCourse() 
{
  //formData state variable
  const [formData, setFormData] = useState({
    coursetitle:'',
    coursecode: '',
    department: '',
    academicyear: '',
    semester: ''
  });

  //message state variable
  const [message, setMessage] = useState('');
  //error state variable
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { id, value } = e.target;
    const newValue = id === 'coursetitle' ? value.toUpperCase() : value;
    setFormData({ ...formData, [id]: newValue });
  };
  

  const handleSubmit = async (e) => 
  {
    e.preventDefault();
    try 
    {
      const response = await axios.post(`${config.url}/addcourse`, formData);
      if (response.status === 200) 
      {
        setFormData({
            coursetitle:'',
            coursecode: '',
            department: '',
            academicyear: '',
            semester: ''
        });
      }
      setMessage(response.data);
      setError('');
    } 
    catch(error) 
    {
      setError(error.response.data);
      setMessage('');
    }
  };
  
  return (
    <div>
      <h3 align="center"><u>Add Course</u></h3>
      {
        message ? <h4 align="center">{message}</h4> : <h4 align="center" style={{color:"red"}}>{error}</h4>
      }
      <form onSubmit={handleSubmit}>
        <div>
          <label className="white-label">Course Code</label>
          <input type="string" id="coursecode" value={formData.coursecode} onChange={handleChange}  required />
        </div>
        <div>
          <label className="white-label">Course Title</label>
          <input type="text" id="coursetitle" value={formData.coursetitle} onChange={handleChange} onKeyUp={handleChange} required />
        </div>
        <div>
          <label className="white-label">Department</label>
          <select  id="department" value={formData.department} onChange={handleChange} required >
           <option value="">---Select Department---</option>
            <option value="CSE-HONORS">CSE-H</option>
            <option value="CSE-Reg">CSE-R</option>
            <option value="CSIT">CS&IT</option>
            <option value="AIDS">AI&DS</option>
            <option value="ECE">ECE</option>
            <option value="other">Other</option>
            </select>
        </div>
        <div>
          <label className="white-label">Academic Year</label>
          <select id="academicyear" value={formData.academicyear} onChange={handleChange} required>
            <option value="">---Select Program---</option>
            <option value="2023-24">2023-24</option>
            <option value="2024-25">2024-25</option>
            <option value="2025-26">2025-26</option>
          </select>
        </div>
        <div>
          <label className="white-label">Semester</label>
          <select id="semester" value={formData.semester} onChange={handleChange} required>
            <option value="">--Select Semester--</option>
            <option value="ODD">ODD SEM</option>
            <option value="EVEN">EVEN SEM</option>
          </select>
        </div>
        
        <button type="submit">Add</button>
      </form>
    </div>
  );
}
