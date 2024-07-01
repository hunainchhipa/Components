// TODO update style for this compoent 
import React, { useState } from 'react';
import { Form, Row, Col } from 'react-bootstrap';

const Jfile = ({ label, name, onChange }) => {
  const [fileObject, setFileObject] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    onChange(name, file);
    setFileObject(file);
  };

  const renderFilePreview = () => {
    if (!fileObject) return null;

    const fileType = fileObject.type.split('/')[0];

    switch (fileType) {
      case 'image':
        return (
          <div className="file-preview">
            <img src={URL.createObjectURL(fileObject)} alt="Uploaded File" className="file-preview-image" />
          </div>
        );
      case 'video':
        return (
          <div className="file-preview">
            <video controls className="file-preview-video">
              <source src={URL.createObjectURL(fileObject)} type={fileObject.type} />
              Your browser does not support the video tag.
            </video>
          </div>
        );
      case 'application': // Check for PDF file type
        if (fileObject.type === 'application/pdf') {
          return (
            <div className="file-preview">
              <embed
                src={URL.createObjectURL(fileObject)}
                type="application/pdf"
                className="file-preview-pdf"
              />
            </div>
          );
        }
        // Handle other application types if needed
        break;
      default:
        return (
          <div className="file-preview">
            <div className="file-preview-generic">
              {`${fileObject.name} (${fileObject.type})`}
            </div>
          </div>
        );
    }
  };

  return (
    <Form.Group as={Row} className="align-items-center mb-3">
      <Form.Label column md={4}>{label}</Form.Label>
      <Col md={8}>
        <div className="file-upload">
          <Form.Control
            type="file"
            onChange={handleFileChange}
            className="file-upload-input"
          />
        </div>
      </Col>
      <Col md={{ span: 8, offset: 4 }}>
        <div className="file-preview-container">
          {renderFilePreview()}
        </div>
      </Col>
    </Form.Group>
  );
};

export default Jfile;
