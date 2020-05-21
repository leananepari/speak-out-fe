import React, { useState } from 'react';
import { Form, Input, Typography, Row, Col, Layout } from 'antd';

const StudentAddress = props => {
  const { handleChange } = props;
  const [form] = Form.useForm();
  const [secondAddress, setSecondAddress] = useState(false);
  function onChange(e) {
    setSecondAddress(!secondAddress);
  }
  const { Title } = Typography;
  const { Content } = Layout;
  return (
    <Content style={{ margin: '1.8rem 0' }}>
      <Form layout={'vertical'} form={form}>
        <Row justify={'center'}>
          <Col>
            <Title level={3}>Student Address</Title>
          </Col>
        </Row>

        <Row justify={'center'}>
          <Col>
            <Form.Item
              name={'address'}
              label="Current Address"
              rules={[
                {
                  required: true,
                  message: "Please enter student's address",
                },
              ]}
            >
              <Input autoFocus={true} />
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </Content>
  );
};

export default StudentAddress;
