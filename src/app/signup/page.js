"use client";
import { AiFillCaretRight } from "react-icons/ai";
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  FormControl,
  FormLabel,
  OutlinedInput,
  FormHelperText,
  Box,
  Grid,
  Button,
  Stack,
  Typography,
} from "@mui/material";
import { useFormik } from "formik";
import CustomizedSnackbars from "../component/snackbar";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Signup = () => {
  const router = useRouter();
  const [snackbar, setSnackbar] = useState({
    message: "",
    severity: "success",
    open: false,
  });

  const defaultCreds = { email: "", password: "" };

  const formik = useFormik({
    initialValues: defaultCreds,
    // validationSchema: loginValidationSchema,
    onSubmit: async (values) => await handleSubmit(values),
  });

  async function handleSubmit(values) {
    const response = await fetch("/api/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });
    response.json().then((res) => {
      if (!res.status) {
        setSnackbar({
          message: res.message,
          severity: "error",
          open: true,
        });
      } else {
        setSnackbar({
          message: res.message,
          severity: "success",
          open: true,
        });
        setTimeout(() => {
          router.push("/dashboard");
        }, 1500);
      }
    });
  }

  return (
    <div className="loginPage wrap" style={{ background: "black" }}>
      <CustomizedSnackbars msgData={snackbar} setMsgData={setSnackbar} />
      <Box className="" style={{ height: "100vh" }}>
        <Grid container sx={{ height: "100vh", spacing: "50px" }}>
          <Grid item md={6} display={{ xs: "none", md: "block" }}>
            <Box
              sx={{
                position: "relative",
                borderRadius: "8px",
                backgroundColor: "#16181c",
                height: "calc(100vh - 50px)",
                width: "100%",
                margin: "25px 50px",
              }}
            >
              <Box sx={{ position: "absolute", bottom: "0", width: "100%" }}>
                <img
                  src="/assets/img/images/login_1.svg"
                  style={{ width: "100%", mixBlendMode: "hard-light" }}
                />
              </Box>
              <Box sx={{ width: "100%", position: "absolute", color: "white" }}>
                <Box sx={{ maxWidth: "350px", mx: "auto", mt: 25 }}>
                  <h1>Sign in</h1>
                  <p style={{ fontSize: "16px" }}>
                    Deploy production-grade & fully-managed OP Stack, Arbitrum
                    or Polygon CDK Rollups including all the web3 infra services
                    you need
                  </p>
                  <div style={{ marginTop: "20px" }}>
                    <div style={{ display: "flex", gap: "10px" }}>
                      <img
                        src="/assets/img/images/login_2.jpeg"
                        style={{ borderRadius: "12px" }}
                      />
                      <img
                        src="/assets/img/images/login_3.jpeg"
                        style={{ borderRadius: "12px" }}
                      />
                      <img
                        src="/assets/img/images/login_4.jpeg"
                        style={{ borderRadius: "12px" }}
                      />
                    </div>
                  </div>
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={6} style={{ height: "100%" }}>
            <div
              className="formSide d-flex align-items-center justify-content-center"
              style={{ height: "100%" }}
            >
              <Box sx={{ maxWidth: 350, width: "90%" }}>
                <Stack
                  display={{ xs: "flex", md: "none" }}
                  gap={6}
                  direction={"column"}
                  alignItems={"center"}
                  justifyContent={"center"}
                >
                  <Stack alignItems={"center"}>
                    <Box
                      component={"img"}
                      src={"/assets/img/logo/logo.png"}
                      height={"100px"}
                    />
                    <Typography variant="h4" color="white">
                      Sign up
                    </Typography>
                  </Stack>

                  <Typography
                    variant="body1"
                    color={"white"}
                    textAlign={"center"}
                    mb={5}
                  >
                    Deploy production-grade & fully-managed OP Stack, Arbitrum
                    or Polygon CDK Rollups including all the web3 infra services
                    you need
                  </Typography>
                </Stack>
                <form className="frmp pt-3" onSubmit={formik.handleSubmit}>
                  <FormControl fullWidth sx={{ marginBottom: 2, gap: 0.7 }}>
                    <FormLabel
                      htmlFor="email"
                      sx={{ "&.MuiFormLabel-root": { color: "white" } }}
                    >
                      Email address
                    </FormLabel>
                    <OutlinedInput
                      id="email"
                      type="email"
                      size="small"
                      name="email"
                      placeholder="Enter your email address"
                      sx={{
                        color: "white",
                        border: "1px solid #505050",
                        p: 0.3,
                      }}
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
                  <FormControl fullWidth sx={{ marginBottom: 2, gap: 0.7 }}>
                    <FormLabel
                      htmlFor="password"
                      sx={{ "&.MuiFormLabel-root": { color: "white" } }}
                    >
                      Password
                    </FormLabel>
                    <OutlinedInput
                      type="password"
                      name="password"
                      size="small"
                      placeholder="Enter your password"
                      sx={{
                        color: "white",
                        border: "1px solid #505050",
                        p: 0.3,
                      }}
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
                  <Stack direction="row" justifyContent={"center"}>
                    <p>
                      Already have an account? <Link href="/login">Login</Link>
                    </p>

                    <Button
                      sx={{
                        bgcolor: "#DE135E",
                        color: "white",
                        fontWeight: "800",
                        px: 3,
                        "&:hover": { bgcolor: "#DE135E" },
                      }}
                      endIcon={<AiFillCaretRight />}
                      type="submit"
                    >
                      Signup
                    </Button>
                  </Stack>
                </form>
              </Box>
            </div>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default Signup;
