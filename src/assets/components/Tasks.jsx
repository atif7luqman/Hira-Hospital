import { useState } from 'react';
import { Radio } from 'antd';

export default function Tasks() {
  const [status, setStatus] = useState('all'); // Default to 'all' status

  const containerStyle = {
    textAlign: 'center',
    margin: 'auto',
    justifyContent: 'center',
  };

  const buttonStyle = (buttonStatus) => ({
    width: '100px', // Set a common width for all buttons
    height: '40px', // Set a common height for all buttons
    margin: '8px', // Add some margin between buttons
    borderRadius: '8px', // Make corners rounded
    backgroundColor: status === buttonStatus ? 'blue' : 'transparent', // Check if the button is selected
    color: status === buttonStatus ? 'white' : 'black', // Check if the button is selected
    alignItems: 'center',
    justifyContent: 'center',
  });

  return (
    <div style={containerStyle}>
      <h2>Today's Tasks</h2>

      <Radio.Group value={status} onChange={(e) => setStatus(e.target.value)}>
        <Radio.Button value='all' style={buttonStyle('all')}>
          All
        </Radio.Button>
        <Radio.Button value='pending' style={buttonStyle('pending')}>
          Pending
        </Radio.Button>
        <Radio.Button value='inprogress' style={buttonStyle('inprogress')}>
          In Progress
        </Radio.Button>
        <Radio.Button value='completed' style={buttonStyle('completed')}>
          Completed
        </Radio.Button>
      </Radio.Group>
    </div>
  );
}
