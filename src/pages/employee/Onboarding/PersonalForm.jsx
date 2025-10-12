import Col from "react-bootstrap/Col";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { useForm, Controller } from "react-hook-form";

const PersonalForm = ({ onValid }) => {
  const { control, handleSubmit, formState: { errors } } = useForm({
    defaultValues: { fname: "", mname: "", lname: "" },
  });

  const onSubmit = (data) => {
    console.log("Personal Data:", data);
    if (onValid) onValid(true); // notify parent stepper that this step is valid
  };

  return (
    <Form onBlur={handleSubmit(onSubmit)}>
      <Row className="mb-3">
        <Col md={4}>
          <FloatingLabel controlId="fname" label="First Name">
            <Controller
              name="fname"
              control={control}
              render={({ field }) => (
                <Form.Control {...field} type="text" placeholder="First Name" />
              )}
            />
          </FloatingLabel>
        </Col>

        <Col md={4}>
          <FloatingLabel controlId="mname" label="Middle Name">
            <Controller
              name="mname"
              control={control}
              render={({ field }) => (
                <Form.Control {...field} type="text" placeholder="Middle Name" />
              )}
            />
          </FloatingLabel>
        </Col>

        <Col md={4}>
          <FloatingLabel controlId="lname" label="Last Name">
            <Controller
              name="lname"
              control={control}
              render={({ field }) => (
                <Form.Control {...field} type="text" placeholder="Last Name" />
              )}
            />
          </FloatingLabel>
        </Col>
      </Row>

      <Row className="mb-3">
        <Col md={4}>
          <FloatingLabel controlId="email" label="Email Id">
            <Controller
              name="email"
              control={control}
              render={({ field }) => (
                <Form.Control {...field} type="email" placeholder="Email Id" />
              )}
            />
          </FloatingLabel>
        </Col>

        <Col md={4}>
          <FloatingLabel controlId="gender" label="Gender">
            <Form.Select aria-label="State Gender" defaultValue="">
              <option value="">Choose...</option>
              <option value="NY">Male</option>
              <option value="CA">Female</option>
              <option value="TX">Other</option>
            </Form.Select>
          </FloatingLabel>
        </Col>

        <Col md={4}>
          <FloatingLabel controlId="bloodGroup" label="Blood Group">
            <Form.Select aria-label="State Gender" defaultValue="">
              <option value="">Choose...</option>
              <option value="NY">O+</option>
              <option value="CA">O-</option>
              <option value="TX">A+</option>
              <option value="TX">A-</option>
              <option value="TX">B+</option>
              <option value="TX">B-</option>
              <option value="TX">AB+</option>
              <option value="TX">AB-</option>
            </Form.Select>
          </FloatingLabel>
        </Col>
      </Row>


      <Row className="mb-3">
        <Col md={4}>
          <FloatingLabel controlId="dob" label="Date Of Birth">
            <Controller
              name="dob"
              control={control}
              render={({ field }) => (
                <Form.Control {...field} type="date" placeholder="Email Id" />
              )}
            />
          </FloatingLabel>
        </Col>

        <Col md={4}>
          <FloatingLabel controlId="gender" label="Gender">
            <Form.Select aria-label="State Gender" defaultValue="">
              <option value="">Choose...</option>
              <option value="NY">Male</option>
              <option value="CA">Female</option>
              <option value="TX">Other</option>
            </Form.Select>
          </FloatingLabel>
        </Col>

        <Col md={4}>
          <FloatingLabel controlId="bloodGroup" label="Blood Group">
            <Form.Select aria-label="State Gender" defaultValue="">
              <option value="">Choose...</option>
              <option value="NY">O+</option>
              <option value="CA">O-</option>
              <option value="TX">A+</option>
              <option value="TX">A-</option>
              <option value="TX">B+</option>
              <option value="TX">B-</option>
              <option value="TX">AB+</option>
              <option value="TX">AB-</option>
            </Form.Select>
          </FloatingLabel>
        </Col>
      </Row>
{/* Current Address */}
      <Row>
        <FloatingLabel
          controlId="floatingTextarea"
          label="Current Address"
          className="mb-3"
        >
          <Form.Control as="textarea" placeholder="Leave a comment here" style={{ height: '100px' }} />
        </FloatingLabel>
      </Row>

      <Row className="mb-3">
        <Col md={4}>
          <FloatingLabel controlId="country" label="Country">
            <Controller
              name="country"
              control={control}
              render={({ field }) => (
                <Form.Control {...field} type="text" placeholder="Country" />
              )}
            />
          </FloatingLabel>
        </Col>

        <Col md={4}>
          <FloatingLabel controlId="state" label="State ">
            <Controller
              name="state"
              control={control}
              render={({ field }) => (
                <Form.Control {...field} type="text" placeholder="State " />
              )}
            />
          </FloatingLabel>
        </Col>

        <Col md={4}>
          <FloatingLabel controlId="city" label="City ">
            <Controller
              name="city"
              control={control}
              render={({ field }) => (
                <Form.Control {...field} type="text" placeholder="City" />
              )}
            />
          </FloatingLabel>
        </Col>
      </Row>

      <Row className="mb-3">
        <Col md={4}>
          <FloatingLabel controlId="pincode" label="Pincode">
            <Controller
              name="pincode"
              control={control}
              render={({ field }) => (
                <Form.Control {...field} type="number" placeholder="Pincode" />
              )}
            />
          </FloatingLabel>
        </Col>

        <Col md={4}>
          <FloatingLabel controlId="contact" label="Contact No">
            <Controller
              name="contact"
              control={control}
              render={({ field }) => (
                <Form.Control {...field} type="number" placeholder="Contact No" />
              )}
            />
          </FloatingLabel>
        </Col>
      </Row>
      
      {/* permanent Address */}
      <Row>
        <FloatingLabel
          controlId="floatingTextarea"
          label="Permanent Address"
          className="mb-3"
        >
          <Form.Control as="textarea" placeholder="Leave a comment here" style={{ height: '100px' }} />
        </FloatingLabel>
      </Row>

      <Row className="mb-3">
        <Col md={4}>
          <FloatingLabel controlId="country" label="Country">
            <Controller
              name="country"
              control={control}
              render={({ field }) => (
                <Form.Control {...field} type="text" placeholder="Country" />
              )}
            />
          </FloatingLabel>
        </Col>

        <Col md={4}>
          <FloatingLabel controlId="state" label="State ">
            <Controller
              name="state"
              control={control}
              render={({ field }) => (
                <Form.Control {...field} type="text" placeholder="State " />
              )}
            />
          </FloatingLabel>
        </Col>

        <Col md={4}>
          <FloatingLabel controlId="city" label="City ">
            <Controller
              name="city"
              control={control}
              render={({ field }) => (
                <Form.Control {...field} type="text" placeholder="City" />
              )}
            />
          </FloatingLabel>
        </Col>
      </Row>

      <Row className="mb-3">
        <Col md={4}>
          <FloatingLabel controlId="pincode" label="Pincode">
            <Controller
              name="pincode"
              control={control}
              render={({ field }) => (
                <Form.Control {...field} type="number" placeholder="Pincode" />
              )}
            />
          </FloatingLabel>
        </Col>

        <Col md={4}>
          <FloatingLabel controlId="contact" label="Contact No">
            <Controller
              name="contact"
              control={control}
              render={({ field }) => (
                <Form.Control {...field} type="number" placeholder="Contact No" />
              )}
            />
          </FloatingLabel>
        </Col>
      </Row>

      {/* BCP address */}


      <Row>
        <FloatingLabel
          controlId="floatingTextarea"
          label="BCP Address"
          className="mb-3"
        >
          <Form.Control as="textarea" placeholder="Leave a comment here" style={{ height: '100px' }} />
        </FloatingLabel>
      </Row>

      <Row className="mb-3">
        <Col md={4}>
          <FloatingLabel controlId="country" label="Country">
            <Controller
              name="country"
              control={control}
              render={({ field }) => (
                <Form.Control {...field} type="text" placeholder="Country" />
              )}
            />
          </FloatingLabel>
        </Col>

        <Col md={4}>
          <FloatingLabel controlId="state" label="State ">
            <Controller
              name="state"
              control={control}
              render={({ field }) => (
                <Form.Control {...field} type="text" placeholder="State " />
              )}
            />
          </FloatingLabel>
        </Col>

        <Col md={4}>
          <FloatingLabel controlId="city" label="City ">
            <Controller
              name="city"
              control={control}
              render={({ field }) => (
                <Form.Control {...field} type="text" placeholder="City" />
              )}
            />
          </FloatingLabel>
        </Col>
      </Row>

      <Row className="mb-3">
        <Col md={4}>
          <FloatingLabel controlId="pincode" label="Pincode">
            <Controller
              name="pincode"
              control={control}
              render={({ field }) => (
                <Form.Control {...field} type="number" placeholder="Pincode" />
              )}
            />
          </FloatingLabel>
        </Col>
      </Row>
      {/* Emergency Contact */}
      <Row>
        <FloatingLabel
          controlId="floatingTextarea"
          label="Emergency Contact Name & Address"
          className="mb-3"
        >
          <Form.Control as="textarea" placeholder="Leave a comment here" style={{ height: '100px' }} />
        </FloatingLabel>
      </Row>

      <Row className="mb-3">
        <Col md={4}>
          <FloatingLabel controlId="Emergency Contact No" label="Emergency Contact No">
            <Controller
              name="Emergency Contact Number"
              control={control}
              render={({ field }) => (
                <Form.Control {...field} type="number" placeholder="Emergency Contact No" />
              )}
            />
          </FloatingLabel>
        </Col>

        <Col md={4}>
          <FloatingLabel controlId="Relationship with Employee" label="Relationship with Employee ">
            <Controller
              name="Relationship with Employee"
              control={control}
              render={({ field }) => (
                <Form.Control {...field} type="text" placeholder="Relationship with Employee " />
              )}
            />
          </FloatingLabel>
        </Col>

        <Col md={4}>
          <FloatingLabel controlId="city" label="City ">
            <Controller
              name="city"
              control={control}
              render={({ field }) => (
                <Form.Control {...field} type="text" placeholder="City" />
              )}
            />
          </FloatingLabel>
        </Col>
      </Row>

      <Row className="mb-3">
        <Col md={4}>
          <FloatingLabel controlId="pincode" label="Pincode">
            <Controller
              name="pincode"
              control={control}
              render={({ field }) => (
                <Form.Control {...field} type="number" placeholder="Pincode" />
              )}
            />
          </FloatingLabel>
        </Col>

        <Col md={4}>
          <FloatingLabel controlId="contact" label="Contact No">
            <Controller
              name="contact"
              control={control}
              render={({ field }) => (
                <Form.Control {...field} type="number" placeholder="Contact No" />
              )}
            />
          </FloatingLabel>
        </Col>
      </Row>
    </Form>
  );
};

export default PersonalForm;
