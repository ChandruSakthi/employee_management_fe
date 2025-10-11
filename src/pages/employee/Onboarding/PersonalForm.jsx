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
    </Form>
  );
};

export default PersonalForm;
