import axios from 'axios';
import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './EditForm.css'
const EditForm = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { table, attributenames, item } = location.state;
  const [data, setdata] = useState(item);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put("http://localhost:3000/tables/updaterecord", {
        id: data.id,
        data: { ...data }, 
        table
      });
      console.log(response.data);
      navigate("/dashboard/create-form");
    } catch (error) {
      window.alert("Error updating record");
      console.error('Error updating record:', error);
    }
  };

  return (
    <div className="cnt">
      <h2>Edit Form</h2>
      {attributenames && attributenames.length > 0 ? (
        <form className='edt' onSubmit={handleSubmit}>
          {attributenames.map((attribute, index) => (
            attribute !== "id" && (
              <div className="frm" key={index}>
                <label htmlFor={attribute} className="lbl">{attribute}:</label>
                <input
                  type="text"
                  className="cntr"
                  id={attribute}
                  onChange={(e) => setdata({ ...data, [attribute]: e.target.value })}
                  value={data[attribute] || ''}
                />
              </div>
            )
          ))}
          <div className="holder">
            <input type='submit' value="Submit" className='btt'/>
          </div>
          
        </form>
      ) : (
        <p>Loading...</p>
      )} 
      
      
    </div>
  );
};

export default EditForm;