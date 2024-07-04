import React, { useState } from 'react';
import axios from 'axios';

function CreateForm() {
  const [table, setTable] = useState('');
  const [dept, setDept] = useState('');
  const [data, setData] = useState(null);
  const [error, setError] = useState('');
  const [attributenames, setAttributenames] = useState(null);

  const handleEdit = (item) => {

    console.log('Editing item:', item);

  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this record?");
    if (confirmDelete) {
      try {
        await axios.delete(`http://localhost:3000/tables/deleterecord`);
        setData(data.filter((item) => item.id !== id)); 
      } catch (error) {
        console.error('Error deleting item:', error);
        setError('Error deleting item');
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/tables/gettable', { table, dept });
      setData(response.data);
      setAttributenames(Object.keys(response.data[0]));
      setError('');
    } catch (err) {
      if (err.response && err.response.data) {
        setError(err.response.data);
      } else {
        setError('Something went wrong');
      }
      setData(null);
      setAttributenames(null);
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="row mb-3">
          <div className="col">
            <input
              type="text"
              className="form-control"
              placeholder="Enter table name"
              value={table}
              onChange={(e) => setTable(e.target.value)}
            />
          </div>
          <div className="col">
            <input
              type="text"
              className="form-control"
              placeholder="Enter department"
              value={dept}
              onChange={(e) => setDept(e.target.value)}
            />
          </div>
          <div className="col">
            <button type="submit" className="btn btn-primary">Fetch Data</button>
          </div>
        </div>
      </form>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      {data && (
        <div>
          <h2>Results:</h2>
          <div className="table-responsive">
            <table className="table table-bordered table-hover">
              <thead className="thead-dark">
                <tr>
                  {attributenames && attributenames.map((name, index) => (
                    <th key={index}>{name}</th>
                  ))}
                  <th className="fixed-column">Action</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item, index) => (
                  <tr key={index}>
                    {attributenames.map((name, idx) => (
                      <td key={idx}>{item[name]}</td>
                    ))}
                    <td className="fixed-column">
                      <button className="btn btn-warning btn-sm mr-2" onClick={() => handleEdit(item)}>Edit</button>
                      <button className="btn btn-danger btn-sm" onClick={() => handleDelete(item.id)}>Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}

export default CreateForm;
