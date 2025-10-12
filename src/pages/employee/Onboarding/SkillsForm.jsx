import React from "react";
import { Form, Input, Button, Select, Space, InputNumber, Card } from "antd";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";

const { Option } = Select;

const SkillsForm = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log("Skills Data:", values);
  };

  return (
    <Card title="Skills Information" bordered={false}>
      <Form
        form={form}
        name="skills_form"
        onFinish={onFinish}
        layout="vertical"
        autoComplete="off"
      >
        {/* Dynamic Form List for Multiple Skills */}
        <Form.List name="skills">
          {(fields, { add, remove }) => (
            <>
              {fields.map(({ key, name, ...restField }) => (
                <Card
                  key={key}
                  type="inner"
                  title={`Skill ${name + 1}`}
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
                    label="Skill Name"
                    name={[name, "skillName"]}
                    rules={[{ required: true, message: "Please enter skill name" }]}
                  >
                    <Input placeholder="Enter skill name (e.g., React, Java)" />
                  </Form.Item>

                  <Form.Item
                    {...restField}
                    label="Category / Type"
                    name={[name, "category"]}
                  >
                    <Select placeholder="Select category">
                      <Option value="Frontend">Frontend</Option>
                      <Option value="Backend">Backend</Option>
                      <Option value="Database">Database</Option>
                      <Option value="DevOps">DevOps</Option>
                      <Option value="Other">Other</Option>
                    </Select>
                  </Form.Item>

                  <Form.Item
                    {...restField}
                    label="Proficiency Level"
                    name={[name, "level"]}
                    rules={[{ required: true, message: "Please select proficiency level" }]}
                  >
                    <Select placeholder="Select level">
                      <Option value="Beginner">Beginner</Option>
                      <Option value="Intermediate">Intermediate</Option>
                      <Option value="Advanced">Advanced</Option>
                      <Option value="Expert">Expert</Option>
                    </Select>
                  </Form.Item>

                  <Form.Item
                    {...restField}
                    label="Years of Experience"
                    name={[name, "years"]}
                  >
                    <InputNumber
                      min={0}
                      max={50}
                      style={{ width: "100%" }}
                      placeholder="Enter years of experience"
                    />
                  </Form.Item>

                  <Form.Item
                    {...restField}
                    label="Last Used / Practiced Year"
                    name={[name, "lastUsed"]}
                  >
                    <Input placeholder="e.g., 2025" />
                  </Form.Item>

                  <Form.Item
                    {...restField}
                    label="Certification (if any)"
                    name={[name, "certification"]}
                  >
                    <Input placeholder="Enter certification name" />
                  </Form.Item>

                  <Form.Item
                    {...restField}
                    label="Description / Notes"
                    name={[name, "description"]}
                  >
                    <Input.TextArea placeholder="Briefly describe how you used this skill" />
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
                  Add Skill
                </Button>
              </Form.Item>
            </>
          )}
        </Form.List>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Save Skills
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
};

export default SkillsForm;
