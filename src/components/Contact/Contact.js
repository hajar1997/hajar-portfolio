import React, { useEffect } from "react";
import { Form, Input, Button, notification } from "antd";
import Aos from "aos";
import { useForm } from "antd/es/form/Form";

const Contact = () => {
  const [form] = useForm();
  const onFinish = async (values) => {
    const formData = new FormData();
    formData.append("access_key", process.env.REACT_APP_WEB3FORM_PUBLIC_KEY);
    formData.append("name", values.name);
    formData.append("email", values.email);
    formData.append("comment", values.comment);

    await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Form submission response:", data);
        notification.open({
          type: "success",
          message: "Your message has successfully sent!",
        });
        form.resetFields();
      })
      .catch((error) => {
        console.error("Error submitting form:", error);
      });
  };

  useEffect(() => {
    Aos.init({
      duration: 600,
    });
  }, []);
  return (
    <div id="contact" className="offset container mt-5 mb-5">
      <div className="d-flex justify-center align-items-center flex-column">
        <div className="post-heading text-center">
          <h3 className="display-4 font-weight-bold">Contact</h3>
          <hr className="w-50 mx-auto pb-5" />
        </div>
        <Form
          form={form}
          action="https://api.web3forms.com/submit"
          hideRequiredMark={true}
          style={{
            maxWidth: 800,
            width: "100%",
            marginTop: "20px",
          }}
          onFinish={onFinish}
          layout="vertical"
          method="POST"
        >
          <input type="hidden" name="access_key" value="af24730a-3dcb-48e8-ae0b-f19cd81fb028" />
          <div className="form_flex">
            <div style={{ flex: "1 1 50%" }}>
              <Form.Item
                name="name"
                label="Full name"
                rules={[
                  {
                    required: true,
                    message: "Enter your full name!",
                  },
                ]}
              >
                <Input placeholder="Enter your name.." size="large" />
              </Form.Item>
            </div>
            <div style={{ flex: "1 1 50%" }}>
              <Form.Item
                name="email"
                label="Email"
                rules={[
                  {
                    required: true,
                    type: "email",
                    message: "Enter your email!",
                  },
                ]}
              >
                <Input placeholder="Enter your email.." size="large" />
              </Form.Item>
            </div>
          </div>
          <Form.Item name="comment" label="Your message" className="mt-2">
            <Input.TextArea
              style={{
                resize: "none",
              }}
              placeholder="Enter your message.."
              cols={5}
              rows={5}
              size="large"
            />
          </Form.Item>
          <input type="hidden" name="redirect" value="https://web3forms.com/success" />
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              style={{
                width: "174px",
                height: "44px",
              }}
            >
              Send
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Contact;
