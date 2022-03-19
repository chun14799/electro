import "./MyAccount.scss";
import TopBar from "./../TopBar/TopBar";
import Header from "../Header/Header";
import Navbar from "./../Header/Navbar/Navbar";
import { Breadcrumb } from "antd";
import { Form, Input, Button, Checkbox } from "antd";
import {CheckOutlined} from '@ant-design/icons'
import BranCarousel from "../../BrandCarousel/BrandCarousel";
const MyAccount = () => {
  const onFinish = (values) => {
    console.log("Success:", values);
  };
  return (
    <div className="MyAccount">
      <TopBar></TopBar>
      <Header></Header>
      <Navbar></Navbar>
      <div className="site-content">
        <div className="container">
          <Breadcrumb className="breadcrumb" separator="">
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <span className="icon">
              <ion-icon name="chevron-forward-outline"></ion-icon>
            </span>
            <Breadcrumb.Item>My Account</Breadcrumb.Item>
          </Breadcrumb>
          <div className="site-content-inner">
            <div className="content-area">
              <div className="login-form">
                <span className="or-text">or</span>
                <div className="customer-login row">
                  {/* Start Login form */}
                  <div className="col-6">
                    <h2>Login</h2>
                    <p className="before-login">
                      Welcome back! Sign in to your account
                    </p>
                    <Form
                      name="login-form"
                      className="login-form"
                      initialValues={{
                        remember: true,
                      }}
                      onFinish={onFinish}
                      autoComplete="off"
                    >
                      <Form.Item
                        label="Username or email address *"
                        name="username"
                        rules={[
                          {
                            required: true,
                            message: "Please input your username!",
                          },
                        ]}
                      >
                        <Input />
                      </Form.Item>

                      <Form.Item
                        label="Password *"
                        name="password"
                        rules={[
                          {
                            required: true,
                            message: "Please input your password!",
                          },
                        ]}
                      >
                        <Input.Password />
                      </Form.Item>

                      <Form.Item
                        name="remember"
                        valuePropName="checked"
                        className="checkbox"
                      >
                        <Checkbox>Remember me</Checkbox>
                      </Form.Item>

                      <Form.Item className="login-btn">
                        <Button type="primary" htmlType="submit">
                          <span>Login</span>
                        </Button>
                      </Form.Item>
                    </Form>
                  </div>
                  {/* End Login form */}
                  {/* Start Sign up form */}
                  <div className="col-6 register-form">
                    <h2>Register</h2>
                    <p className="before-login">
                      Create new account today to reap the benefits of a
                      personalized shopping experience.{" "}
                    </p>
                    <Form
                      name="login-form"
                      className="login-form"
                      initialValues={{
                        remember: true,
                      }}
                      onFinish={onFinish}
                      autoComplete="off"
                    >
                      <Form.Item
                        label="Username *"
                        name="username"
                        rules={[
                          {
                            required: true,
                            message: "Please input your username!",
                          },
                        ]}
                      >
                        <Input />
                      </Form.Item>
                      <Form.Item
                        label="Email address *"
                        name="email"
                        rules={[
                          {
                            required: true,
                            message: "Please input your email!",
                          },
                        ]}
                      >
                        <Input />
                      </Form.Item>
                      <Form.Item
                        label="Password *"
                        name="password"
                        rules={[
                          {
                            required: true,
                            message: "Please input your password!",
                          },
                        ]}
                      >
                        <Input.Password />
                      </Form.Item>
                        <p className="policy">Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our <b>Pricavy Policy</b></p>
                        <Form.Item className="Register-btn">
                            <Button type="primary" htmlType="submit">
                                <span>Register</span>
                            </Button>
                      </Form.Item>
                      <div className="register-benefit">
                          <h3>Sign up today and you will be able to :</h3>
                          <ul>
                              <li><CheckOutlined style={{color: '#198754'}}/> Speed your way through checkout</li>
                              <li><CheckOutlined style={{color: '#198754'}}/> Track your orders easily</li>
                              <li><CheckOutlined style={{color: '#198754'}}/> Keep a record of all your purchases</li>
                          </ul>
                      </div>
                    </Form>
                  </div>
                  {/* End Sign up form */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <BranCarousel></BranCarousel>
    </div>
  );
};

export default MyAccount;
