import React from "react";
import { Form, Input, Button, DatePicker, Select, Space, Card } from "antd";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";

const { Option } = Select;

const CertificationForm = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log("Certification Data:", values);
  };

  return (
    <Card title="Certifications" bordered={false}>
      <Form
        form={form}
        name="certifications_form"
        onFinish={onFinish}
        layout="vertical"
        autoComplete="off"
      >
        {/* Dynamic Form List for Multiple Certifications */}
        <Form.List name="certifications">
          {(fields, { add, remove }) => (
            <>
              {fields.map(({ key, name, ...restField }) => (
                <Card
                  key={key}
                  type="inner"
                  title={`Certification ${name + 1}`}
                  style={{ marginBottom: 16 }}
                  extra={
                    <MinusCircleOutlined
                      onClick={() => remove(name)}
                      style={{ color: "red", fontSize: 18 }}
                    />
                  }
                >
                  <Form.Item
                    {...restField}
                    label="Certification Name"
                    name={[name, "certificationName"]}
                    rules={[{ required: true, message: "Please enter certification name" }]}
                  >
                    <Input placeholder="Enter certification title (e.g., AWS Certified Developer)" />
                  </Form.Item>

                  <Form.Item
                    {...restField}
                    label="Issuing Organization"
                    name={[name, "organization"]}
                    rules={[{ required: true, message: "Please enter organization name" }]}
                  >
                    <Input placeholder="Enter organization name (e.g., Microsoft, Oracle, Udemy)" />
                  </Form.Item>

                  <Form.Item
                    {...restField}
                    label="Certification Type"
                    name={[name, "type"]}
                  >
                    <Select placeholder="Select type">
                      <Option value="Technical">Technical</Option>
                      <Option value="Management">Management</Option>
                      <Option value="Soft Skill">Soft Skill</Option>
                      <Option value="Other">Other</Option>
                    </Select>
                  </Form.Item>

                  <Form.Item
                    {...restField}
                    label="Issue Date"
                    name={[name, "issueDate"]}
                    rules={[{ required: true, message: "Please select issue date" }]}
                  >
                    <DatePicker style={{ width: "100%" }} />
                  </Form.Item>

                  <Form.Item
                    {...restField}
                    label="Expiry Date"
                    name={[name, "expiryDate"]}
                  >
                    <DatePicker style={{ width: "100%" }} placeholder="Optional" />
                  </Form.Item>

                  <Form.Item
                    {...restField}
                    label="Credential ID"
                    name={[name, "credentialId"]}
                  >
                    <Input placeholder="Enter credential ID (if available)" />
                  </Form.Item>

                  <Form.Item
                    {...restField}
                    label="Credential URL"
                    name={[name, "credentialUrl"]}
                  >
                    <Input placeholder="Paste credential verification link" />
                  </Form.Item>

                  <Form.Item
                    {...restField}
                    label="Description"
                    name={[name, "description"]}
                  >
                    <Input.TextArea placeholder="Brief description of what this certification covers" />
                  </Form.Item>
                </Card>
              ))}

              <Form.Item>
                <Button
                  type="dashed"
                  onClick={() => add()}
                  block
                  icon={<PlusOutlined />}
                >
                  Add Certification
                </Button>
              </Form.Item>
            </>
          )}
        </Form.List>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Save Certifications
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
};

export default CertificationForm;
