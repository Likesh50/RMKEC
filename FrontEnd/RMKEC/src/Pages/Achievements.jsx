import React,{useState} from 'react'
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import './Achievements.css'

const BatchSelector = ({ onBatchSelect }) => {
  const [selectedBatch, setSelectedBatch] = useState('');

  const handleBatchChange = (event) => {
    const batch = event.target.value;
    setSelectedBatch(batch);
    onBatchSelect(batch);
  };

  return (
    <div>
      <select id="batchSelect" className='status-yr' value={selectedBatch} onChange={handleBatchChange}>
        <option value="2022-2026">2022-2026</option>
        <option value="2023-2027">2023-2027</option>
        <option value="2024-2028">2024-2028</option>
        <option value="2025-2029">2025-2029</option>
      </select>
    </div>
  );
};
const Achievements = () => {
  const [selectedYearGroup, setSelectedYearGroup] = useState('');

  const handleYearGroupSelect = (yearGroup) => {
    setSelectedYearGroup(yearGroup);
  };
  return (
    <div className='hon'>
      <div className='conte'>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={['DatePicker']}>
              <DatePicker label="Basic date picker" />
            </DemoContainer>
          </LocalizationProvider>
          <BatchSelector setSelectedYearGroup={handleYearGroupSelect} />
          <input type='submit' value="Fetch" className='btm'/>
      </div>
    </div>
  )
}

export default Achievements