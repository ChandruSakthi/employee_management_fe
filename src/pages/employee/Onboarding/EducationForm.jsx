import React, { useState } from "react";
import { Form, Button, Row, Col, Card } from "react-bootstrap";

const EducationForm = () => {
  const [educations, setEducations] = useState([
    {
      qualification: "",
      course: "",
      university: "",
      yearOfPassing: "",
      cgpa: "",
    },
  ]);

  // ✅ handle change for each education row
  const handleChange = (index, e) => {
    const { name, value } = e.target;
    const updated = [...educations];
    updated[index][name] = value;
    setEducations(updated);
  };

  // ✅ add new education row
  const addEducation = () => {
    setEducations([
      ...educations,
      { qualification: "", course: "", university: "", yearOfPassing: "", cgpa: "" },
    ]);
  };

  // ✅ remove education row
  const removeEducation = (index) => {
    const updated = [...educations];
    updated.splice(index, 1);
    setEducations(updated);
  };

  // ✅ submit form data
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Education Details Submitted:", educations);
  };

  return (
    <Form onSubmit={handleSubmit}>
      {educations.map((edu, index) => (
        <Card className="mb-3" key={index}>
          <Card.Body>
            <Row>
              <Col md={4}>
                <Form.Group>
                  <Form.Label>Qualification</Form.Label>
                  <Form.Select
                    name="qualification"
                    value={edu.qualification}
                    onChange={(e) => handleChange(index, e)}
                  >
                    <option value="">Select</option>
                    <option>10th</option>
                    <option>12th</option>
                    <option>Diploma</option>
                    <option>Bachelor's</option>
                    <option>Master's</option>
                    <option>PhD</option>
                  </Form.Select>
                </Form.Group>
              </Col>

              <Col md={4}>
                <Form.Group>
                  <Form.Label>Course / Degree</Form.Label>
                  <Form.Control
                    type="text"
                    name="course"
                    value={edu.course}
                    placeholder="e.g. B.Tech in CSE"
                    onChange={(e) => handleChange(index, e)}
                  />
                </Form.Group>
              </Col>

              <Col md={4}>
                <Form.Group>
                  <Form.Label>University / Board</Form.Label>
                  <Form.Control
                    type="text"
                    name="university"
                    value={edu.university}
                    placeholder="e.g. Anna University"
                    onChange={(e) => handleChange(index, e)}
                  />
                </Form.Group>
              </Col>
            </Row>

            <Row className="mt-2">
              <Col md={4}>
                <Form.Group>
                  <Form.Label>Year of Passing</Form.Label>
                  <Form.Control
                    type="number"
                    name="yearOfPassing"
                    value={edu.yearOfPassing}
                    placeholder="e.g. 2022"
                    onChange={(e) => handleChange(index, e)}
                  />
                </Form.Group>
              </Col>

              <Col md={4}>
                <Form.Group>
                  <Form.Label>Percentage / CGPA</Form.Label>
                  <Form.Control
                    type="text"
                    name="cgpa"
                    value={edu.cgpa}
                    placeholder="e.g. 8.5 CGPA"
                    onChange={(e) => handleChange(index, e)}
                  />
                </Form.Group>
              </Col>

              <Col md={4} className="d-flex align-items-end">
                {educations.length > 1 && (
                  <Button
                    variant="danger"
                    onClick={() => removeEducation(index)}
                    className="me-2"
                  >
                    Remove
                  </Button>
                )}
                {index === educations.length - 1 && (
                  <Button variant="success" onClick={addEducation}>
                    + Add More
                  </Button>
                )}
              </Col>
            </Row>
          </Card.Body>
        </Card>
      ))}

      <Button variant="primary" type="submit">
        Save Education
      </Button>
    </Form>
  );
};

export default EducationForm;
