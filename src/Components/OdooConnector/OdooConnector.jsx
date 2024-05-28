import React, { useState } from 'react';
import WrappedButton from '../GlobalComponents/WrappedButton';
import axios from 'axios';

const OdooConnector = () => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const onClickSubmit = async () => {
    try {
      const response = await axios.post('http://192.168.1.35:8069/api/so/llama_odoobot', {
        data: inputValue
      });
      const { quote_url } = response.data;
      window.open(quote_url, '_blank');
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const onClickCancel = () => {
    setInputValue('');
  };

  return (
    <>
      <div className="d-flex gap-2 flex-column justify-content-center align-items-center vh-100">
        <div>
          <input
            className="form-control form-control-lg"
            type="input"
            value={inputValue}
            onChange={handleInputChange}
          />
        </div>
        <div className='d-flex gap-2'>
          <WrappedButton
            className="btn btn-outline-secondary"
            onClick={onClickSubmit}
            hotkey={"d"}
          >
            Submit
          </WrappedButton>
          <WrappedButton
            className="btn btn-outline-secondary"
            onClick={onClickCancel}
            hotkey={"c"}
          >
            Cancel
          </WrappedButton>
        </div>
      </div>
    </>
  );
}

export default OdooConnector;
