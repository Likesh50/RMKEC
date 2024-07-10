import React, { useState } from 'react';
import './Hall_Request.css';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TextField } from '@mui/material';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';

const LeaveTypeDropdown = ({ onLeaveTypeSelect }) => {
    const handleLeaveTypeChange = (event) => {
      const leaveType = event.target.value;
      onLeaveTypeSelect(leaveType);
    };
  
    return (
      <div>
        <select id="leaveTypeSelect" className='status' onChange={handleLeaveTypeChange} required>
          <option value="CS Hall" default>CS Hall</option>
          <option value="IT Hall">IT Hall</option>
          <option value="ADS Hall">ADS Hall</option>
          <option value="CSBS Hall">CSBS Hall</option>
          <option value="CSD Hall">CSD Hall</option>
          <option value="MECH Hall">MECH Hall</option>
          <option value="S&H Hall">S&H Hall</option>
        </select>
      </div>
    );
  };
const Hall_Request = () => {
  const [value, setValue] = useState(); 
  const [selectedLeaveType, setSelectedLeaveType] = useState('');
  const [selectedUserGroup, setSelectedUserGroup] = useState('');

  return (
    <div className="email-notification">
      <h5>Name Of the Event</h5>
      <input type='text' />
      <h5>Speaker</h5>
      <input type='text' />
      <h5>Description of the Speaker</h5>
      <textarea name="" id=""></textarea>
      <h5>Date</h5>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer  components={['DatePicker']}>
          <DatePicker
            label="Date"
            renderInput={(params) => <TextField {...params} className="custom-date-picker" />}
          />
        </DemoContainer>
      </LocalizationProvider>
      <h5>Time</h5>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer components={['TimePicker', 'TimePicker']}>
          <TimePicker
            label="From"
            value={value}
            onChange={(newValue) => setValue(newValue)}
          />
          <TimePicker
            label="To"
            value={value}
            onChange={(newValue) => setValue(newValue)}
          />
        </DemoContainer>
      </LocalizationProvider>
      <h5>Hall Name</h5>
      <LeaveTypeDropdown onLeaveTypeSelect={setSelectedLeaveType} />
      <h5>Participants</h5>
      <input type='text' />
      <h5>Name Of the Event</h5>
      <input type='text' />
      
      <div className="send-button-container">
        <button>Send Email</button>
      </div>
    </div>
  );
};

export default Hall_Request;
