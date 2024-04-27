import React, { useState,useRef  } from "react";
import axios from "axios";
import config from '../config'
 


export default function PostAssignments() {
  const [formData, setFormData] = useState({
    name: "",
    coursetitle:"",
    coursecode:"",
    deadline: "",
    file: null
  });

  const fileInputRef = useRef(null); // Ref for the file input element

  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };
  const handleFileChange = (e) => {
    setFormData({ ...formData, file: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formDataToSend = new FormData();
      formDataToSend.append('name', formData.name);
      formDataToSend.append('coursetitle', formData.coursetitle);
      formDataToSend.append('coursecode', formData.coursecode);
      formDataToSend.append('deadline', formData.deadline);
      formDataToSend.append('file', formData.file); // Append the file object

      const response = await axios.post(`${config.url}/postassignment`, formDataToSend, {
        headers: {
          'Content-Type': 'multipart/form-data' // Set content type for FormData
        }
      });
      if (response.status === 200) {
        setFormData({
          name: "",
          coursetitle:"",
          coursecode:"",
          deadline: "",
          file:""
        });
        fileInputRef.current.value = '';
      }
      
      setMessage(response.data);
      setError(""); // set error to ""
    } catch (error) {
      setError(error.response.data);
      setMessage(""); //set message to ""
    }
  };

  return (
    <div className="registration-container">
      <h2 align="center">Post Assignment</h2>
      {message ? <h4>{message}</h4> : <h4>{error}</h4>}
      <div className="inner-container">
        <form onSubmit={handleSubmit}>
          <div className="two-details-item">
            <div className="personal-details">
              <label htmlFor="name" className="white-label">Assignment Name</label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="personal-details ">
              <label htmlFor="coursetitle" className="white-label">Course Title</label>
              <input
                type="text"
                id="coursetitle"
                value={formData.coursetitle}
                onChange={handleChange}
                required
              />
            </div>
            <div className="personal-details ">
              <label htmlFor="coursecode" className="white-label">Course Code</label>
              <input
                type="text"
                id="coursecode"
                value={formData.coursecode}
                onChange={handleChange}
                required
              />
            </div>
          
          

            <div className="personal-details ">
              <label htmlFor="deadline" className="white-label">DeadLine</label>
              <input
                type="date"
                id="deadline"
                value={formData.deadline}
                onChange={handleChange}
                required
              />
            </div>
          
          
            <div className="personal-details">
          <label htmlFor="assignemt" className="white-label">Assignment</label>
          <input type="file" id="file" ref={fileInputRef} onChange={handleFileChange} required />
        </div>
          </div>
          <button type="submit" className="submit-btn">
            Post
          </button>
        </form>
      </div>
    </div>
  );
}