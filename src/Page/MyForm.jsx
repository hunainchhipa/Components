import React, { useState } from 'react';
import Jint from '../Fields/Jint';
import Jtext from '../Fields/Jtext';
import Jboolean from '../Fields/Jboolean';
import Jdate from '../Fields/Jdate';
import Jtime from '../Fields/Jtime';
import Jmonetary from '../Fields/Jmonetary';
import WrappedButton from '../Components/GlobalComponents/WrappedButton';
import { Container, Row, Col } from 'react-bootstrap';
import Group from '../Fields/Group';
import JselectCreatable from '../Fields/JselectCreatable';
import Jselect from '../Fields/Jselect';
import Jmultiselect from '../Fields/Jmultiselect';
import Jfile from '../Fields/Jfile';
import { useNavigate } from "react-router-dom";

const MyForm = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
      age: 0,
      name: '',
      isActive: false,
      birthDate: '',
      appointmentTime: '',
      salary: 0.0,
      multiSelectField: [],
      newDepartment: '',
      departmentId: '',
      file: null,
    });

    const multiSelectOptions = [
      { value: 'apple', label: 'Apple' },
      { value: 'banana', label: 'Banana' },
      { value: 'cherry', label: 'Cherry' },
      { value: 'date', label: 'Date' },
      { value: 'elderberry', label: 'Elderberry' }
    ]; 

    const departmentOptions = [
        { value: 'HR', label: 'HR' },
        { value: 'Engineering', label: 'Engineering' },
        { value: 'Marketing', label: 'Marketing' },
      ];
  
    const handleChange = (name, value) => {
      setFormData({
        ...formData,
        [name]: value,
      });
    };  
  
    const handleSubmit = () => {
      console.log('Form Data:', formData);
    };
  
    return (
      <div className="container my-5">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h1 className="text-secondary fw-bold mb-0">Data Table!</h1>
        <WrappedButton
            className="btn btn-outline-secondary"
            onClick={() => navigate("/")}
            hotkey="b"
          >
            Back
          </WrappedButton>
      </div>
      <Container>
            <Group>
                <Jint label="Age" name="age" value={formData.age} onChange={handleChange} />
                <Jtext label="Name" name="name" value={formData.name} onChange={handleChange} maxLength={100} />
            </Group>
            <Group>
                <Jboolean label="Is Active" name="isActive" value={formData.isActive} onChange={handleChange} />
                <Jdate label="Birth Date" name="birthDate" value={formData.birthDate} onChange={handleChange} />
            </Group>
            <Group>
                <Jtime label="Appointment Time" name="appointmentTime" value={formData.appointmentTime} onChange={handleChange} />
                <Jmonetary label="Salary" name="salary" value={formData.salary} onChange={handleChange} />
            </Group>
            <Group>
                <Jselect label="Department" name="departmentId" value={formData.departmentId} onChange={handleChange} options={departmentOptions} />
                <JselectCreatable label="New Department" name="newDepartment" value={formData.newDepartment} onChange={handleChange} options={departmentOptions} />
            </Group>
            <Group>
                <Jmultiselect label="Select Multiple Options" name="multiSelectField" value={formData.multiSelectField} onChange={handleChange} options={multiSelectOptions} />
            </Group>
            <Group>
              <Jfile label="Upload Image" name="image" value={formData.image} onChange={handleChange} />
            </Group>
            <WrappedButton hotkey="s" className="btn btn-primary mt-3" onClick={handleSubmit}>
                Submit
            </WrappedButton>
        </Container>
    </div>
    );
  };
  
  export default MyForm;
  