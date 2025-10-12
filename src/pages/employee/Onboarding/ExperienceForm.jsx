import React from "react";
import { Form, Input, Button, DatePicker, Select, Card } from "antd";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";

const { RangePicker } = DatePicker;
const { Option } = Select;

const ExperienceForm = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log("Experience Data:", values);
  };

  return (
    <Card title="Experience Details" bordered={false}>
      <Form
        form={form}
        name="experience_form"
        onFinish={onFinish}
        layout="vertical"
        autoComplete="off"
      >
        {/* Dynamic Form List for Multiple Experiences */}
        <Form.List name="experiences">
          {(fields, { add, remove }) => (
            <>
              {fields.map(({ key, name, ...restField }) => (
                <Card
                  key={key}
                  type="inner"
                  title={`Experience ${name + 1}`}
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
                    label="Company Name"
                    name={[name, "companyName"]}
                    rules={[{ required: true, message: "Please enter company name" }]}
                  >
                    <Input placeholder="Enter company name" />
                  </Form.Item>

                  <Form.Item
                    {...restField}
                    label="Job Title / Role"
                    name={[name, "role"]}
                    rules={[{ required: true, message: "Please enter role or title" }]}
                  >
                    <Input placeholder="Enter your role (e.g., Software Developer)" />
                  </Form.Item>

                  <Form.Item
                    {...restField}
                    label="Employment Type"
                    name={[name, "employmentType"]}
                  >
                    <Select placeholder="Select employment type">
                      <Option value="Full-time">Full-time</Option>
                      <Option value="Part-time">Part-time</Option>
                      <Option value="Internship">Internship</Option>
                      <Option value="Contract">Contract</Option>
                      <Option value="Freelance">Freelance</Option>
                    </Select>
                  </Form.Item>

                  <Form.Item
                    {...restField}
                    label="Duration"
                    name={[name, "duration"]}
                    rules={[{ required: true, message: "Please select start and end dates" }]}
                  >
                    <RangePicker style={{ width: "100%" }} />
                  </Form.Item>

                  <Form.Item
                    {...restField}
                    label="Technologies Used"
                    name={[name, "technologies"]}
                  >
                    <Select mode="tags" placeholder="Add technologies (e.g., React, Java, SQL)">
                    </Select>
                  </Form.Item>

                  <Form.Item
                    {...restField}
                    label="Responsibilities / Description"
                    name={[name, "description"]}
                  >
                    <Input.TextArea
                      placeholder="Describe your responsibilities or achievements"
                      rows={3}
                    />
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
                  Add Experience
                </Button>
              </Form.Item>
            </>
          )}
        </Form.List>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Save Experience
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
};

export default ExperienceForm;
