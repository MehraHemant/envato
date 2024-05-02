"use client"

import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import {
  FormControl,
  FormLabel,
  OutlinedInput,
  FormHelperText,
} from "@mui/material";
import { useFormik } from "formik";
import CustomizedSnackbars from "../component/snackbar";
// import { loginValidationSchema } from "../utils/schema";

const Login = () => {
  const [snackbar, setSnackbar] = useState({
    message: "",
    severity: "success",
    open: false,
  });

  const defaultCreds = { email: "", password: "" };


  const formik = useFormik({
    initialValues: defaultCreds,
    // validationSchema: loginValidationSchema,
    // onSubmit: async (values) => await login({ ...values, userType: "admin" }),
  });
  return (
    <div className="loginPage wrap" style={{ background: "black" }}>
      <CustomizedSnackbars msgData={snackbar} setMsgData={setSnackbar} />
      <Container fluid className="" style={{height: "100vh"}}>
        <Row className="flex-xxl-row flex-xl-row flex-lg-row flex-md-row flex-sm-column-reverse flex-column-reverse" style={{height: "100%", gap:"50px"}}>
          <Col className="p-0" xxl={6} xl={6} lg={6} md={6} sm={12} xs={12}>
            <div
              style={{
                position: "relative",
                borderRadius: "8px",
                backgroundColor: "#16181c",
                height: "calc(100% - 50px)",
                width: "100%",
                margin: "25px 50px",
              }}
            >
              <div style={{ position: "absolute", bottom: "0", width: "100%" }}>
                <img
                  src="/assets/img/images/login_1.jpeg"
                  style={{ width: "100%", mixBlendMode: "hard-light" }}
                />
              </div>
              <div
                style={{ width: "100%", position: "absolute", color: "white" }}
              >
                <div style={{ maxWidth: "350px", margin: "10px auto" }}>
                  <h1 >Sign in</h1>
                  <p style={{ fontSize: "16px" }}>
                    Deploy production-grade & fully-managed OP Stack, Arbitrum
                    or Polygon CDK Rollups including all the web3 infra services
                    you need
                  </p>
                  <div style={{ marginTop: "20px" }}>
                    <div style={{ display: "flex", gap: "10px" }}>
                    <img src="/assets/img/images/login_2.jpeg" style={{borderRadius: "12px"}} />
                      <img src="/assets/img/images/login_3.jpeg" style={{borderRadius: "12px"}} />
                      <img src="/assets/img/images/login_4.jpeg" style={{borderRadius: "12px"}} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col className="p-0" style={{height: "100%"}}>
            <div className="formSide d-flex align-items-center justify-content-center" style={{height: "100%"}}>
              <div className="fromContainer mx-auto">
                <form className="frmp pt-3" onSubmit={formik.handleSubmit}>
                  <FormControl fullWidth sx={{ marginBottom: 2 }}>
                    <FormLabel
                      htmlFor="email"
                      sx={{ "&.MuiFormLabel-root": { color: "white" } }}
                    >
                      Email address
                    </FormLabel>
                    <OutlinedInput
                      id="email"
                      type="email"
                      name="email"
                      placeholder="Enter your email address"
                      value={formik.values.email}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      error={
                        formik.touched.email && Boolean(formik.errors.email)
                      }
                      helperText={formik.touched.email && formik.errors.email}
                    />
                    {formik.touched.email && (
                      <FormHelperText variant="standard" error>
                        {formik.errors.email}
                      </FormHelperText>
                    )}
                  </FormControl>
                  <FormControl fullWidth sx={{ marginBottom: 2 }}>
                    <FormLabel
                      htmlFor="password"
                      sx={{ "&.MuiFormLabel-root": { color: "white" } }}
                    >
                      Password
                    </FormLabel>
                    <OutlinedInput
                      type="password"
                      name="password"
                      placeholder="Enter your password"
                      value={formik.values.password}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      error={
                        formik.touched.password &&
                        Boolean(formik.errors.password)
                      }
                    />
                    {formik.touched.password && (
                      <FormHelperText variant="standard" error>
                        {formik.errors.password}
                      </FormHelperText>
                    )}
                  </FormControl>
                  <Button variant="primary w-100 mt-2" type="submit">
                    Login
                  </Button>
                </form>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login;