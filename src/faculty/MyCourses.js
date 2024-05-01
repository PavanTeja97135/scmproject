import React, { useState, useEffect } from 'react';


const MyCourses = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fakeAPICall = () => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          const courseData = [
            { courseCode: '22SDCS01A', courseTitle: 'MERN STACK', sectionNumber: '32' },
            { courseCode: '22MT2004', courseTitle: 'PYTHON', sectionNumber: '14' },
            
          ];
          resolve(courseData);
        }, 1000); // Simulating delay of 1 second
      });
    };

    fakeAPICall()
      .then(data => {
        setCourses(data);
      })
      .catch(error => {
        console.error('Error fetching course data:', error);
      });
  }, []);

  return (
    <div style={{ textAlign: 'center' }}>
      <h2>My Courses</h2>
      <div style={{ border: '1px solid #ccc', padding: '20px', borderRadius: '5px', display: 'inline-block' }}>
        <table style={{ margin: 'auto', textAlign: 'left' }}>
          <thead>
            <tr>
              <th style={{ borderBottom: '1px solid #000' }}>Course Code</th>
              <th style={{ borderBottom: '1px solid #000' }}>Course Title</th>
              <th style={{ borderBottom: '1px solid #000' }}>Section Number</th>
            </tr>
          </thead>
          <tbody>
            {courses.map(course => (
              <tr key={course.courseCode}>
                <td>{course.courseCode}</td>
                <td>{course.courseTitle}</td>
                <td>{course.sectionNumber}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyCourses;
