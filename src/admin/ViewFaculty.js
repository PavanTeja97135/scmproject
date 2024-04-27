import React, { useState, useEffect } from 'react';
import axios from 'axios';
import config from '../config'

export default function ViewFaculty() {
  const [faculty, setFaculty] = useState([]);

  const fetchFaculty = async () => {
    try {
      const response = await axios.get(`${config.url}/viewfaculty`);
      setFaculty(response.data);
    } catch (error) {
      console.error(error.message);
    }
  }

  useEffect(() => {
    fetchFaculty();
  }, []);

  const deleteFaculty = async (facultyid) => {
   
    if(window.confirm("Are you sure want to delete this faculty?"))
    {
      try {
        await axios.delete(`${config.url}/deletefaculty/${facultyid}`);
        fetchFaculty();
      } catch (error) {
        console.error(error.message);
      }
    }
    else
    {
      fetchFaculty();
    }

   
  }

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Faculty</h1>
      
      <table border={1} align="center" style={{ width: 'auto', height: 'auto' }}>
          <thead>
            <tr>
              <th>Faculty ID</th>
              <th>Faculty Name</th>
              <th>Gender</th>
              <th>Department</th>
              <th>Designation</th>
              <th>Email</th>
              <th>Contact</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
  {Array.isArray(faculty) && faculty.length > 0 ? (
    faculty.map((faculty, index) => (
      <tr key={index}>
        <td>{faculty.facultyid}</td>
        <td>{faculty.facultyname}</td>
        <td>{faculty.gender}</td>
        <td>{faculty.department}</td>
        <td>{faculty.designation}</td>
        <td>{faculty.email}</td>
        <td>{faculty.contact}</td>
        
        <td>
          <button onClick={() => deleteFaculty(faculty.facultyid)} className='button'>Delete</button>
        </td>
      </tr>
    ))
  ) : (
    <tr>
      <td colSpan="11" align='center'>Data Not Found</td>
    </tr>
  )}
</tbody>
        </table>
    </div>
  );
}
