import React from "react";
import { Form, Input, Button, DatePicker, Select, Upload, Card } from "antd";
import { PlusOutlined, MinusCircleOutlined, UploadOutlined } from "@ant-design/icons";

const { Option } = Select;

const KYCForm = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log("KYC Data:", values);
  };

  return (
    <Card title="KYC Details" bordered={false}>
      <Form
        form={form}
        name="kyc_form"
        layout="vertical"
        onFinish={onFinish}
        autoComplete="off"
      >
        {/* Dynamic KYC Document List */}
        <Form.List name="kycDocuments">
          {(fields, { add, remove }) => (
            <>
              {fields.map(({ key, name, ...restField }) => (
                <Card
                  key={key}
                  type="inner"
                  title={`Document ${name + 1}`}
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
                    label="Document Type"
                    name={[name, "documentType"]}
                    rules={[{ required: true, message: "Please select document type" }]}
                  >
                    <Select placeholder="Select document type">
                      <Option value="Aadhar Card">Aadhar Card</Option>
                      <Option value="PAN Card">PAN Card</Option>
                      <Option value="Passport">Passport</Option>
                      <Option value="Voter ID">Voter ID</Option>
                      <Option value="Driving License">Driving License</Option>
                      <Option value="Other">Other</Option>
                    </Select>
                  </Form.Item>

                  <Form.Item
                    {...restField}
                    label="Document Number"
                    name={[name, "documentNumber"]}
                    rules={[{ required: true, message: "Please enter document number" }]}
                  >
                    <Input placeholder="Enter document number" />
                  </Form.Item>

                  <Form.Item
                    {...restField}
                    label="Issue Date"
                    name={[name, "issueDate"]}
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
                    label="Upload Document"
                    name={[name, "upload"]}
                    valuePropName="fileList"
                    getValueFromEvent={(e) => (Array.isArray(e) ? e : e?.fileList)}
                    rules={[{ required: true, message: "Please upload document" }]}
                  >
                    <Upload beforeUpload={() => false} listType="text">
                      <Button icon={<UploadOutlined />}>Click to Upload</Button>
                    </Upload>
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
                  Add Document
                </Button>
              </Form.Item>
            </>
          )}
        </Form.List>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Save KYC
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
};

export default KYCForm;
