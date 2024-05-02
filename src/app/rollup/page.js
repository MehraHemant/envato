"use client";
import Footer from "../component/footer";
import Header from "../component/header";
import Box from "@mui/material/Box";
import Button from "react-bootstrap/Button";
import {
  FormControl,
  Typography,
  Stack,
  FormLabel,
  OutlinedInput,
  FormHelperText,
  Checkbox,
  FormControlLabel,
  RadioGroup,
  Radio,
  Grid,
} from "@mui/material";
import { useState } from "react";
export default function Rollup() {
  const [enviornment, setEnviornment] = useState("");
  console.log(enviornment);
  return (
    <>
      <Header />
      <Box
        component="section"
        sx={{ p: 2, mx: "auto", mt: 15 }}
        width={{ xs: "90%", md: "60%" }}
      >
        <Box
          component="section"
          sx={{
            p: 3,
            m: 5,
            borderRadius: 5,
            background: "#16171c",
          }}
        >
          <Stack direction="row" justifyContent="space-between">
            <Stack>
              <Typography variant="h6">Details</Typography>
              <p>Add your rollup details</p>
            </Stack>
            <Stack width={500}>
              <FormControl sx={{ marginBottom: 2 }}>
                <OutlinedInput
                  id="name"
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  size="small"
                  sx={{
                    background: "#222329",
                    borderRadius: 2,
                    p: 0.2,
                    border: 1,
                    color: "white",
                    borderColor: "#505050",
                  }}
                />
              </FormControl>
              <FormControl sx={{ marginBottom: 2 }}>
                <OutlinedInput
                  type="text"
                  name="text"
                  placeholder="Chain ID"
                  size="small"
                  sx={{
                    background: "#222329",
                    borderRadius: 2,
                    p: 0.2,
                    border: 1,
                    color: "white",
                    borderColor: "#505050",
                  }}
                />
              </FormControl>
            </Stack>
          </Stack>
        </Box>
        <Box
          component="section"
          sx={{
            p: 3,
            m: 5,
            // border: "1px solid grey",
            borderRadius: 5,
            background: "#16171c",
          }}
        >
          <Grid container direction="row" justifyContent="space-between">
            <Grid item xs={6}>
              <Typography variant="h6">Framework</Typography>
            </Grid>
            <Grid item xs={6}>
              <RadioGroup
                row
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="female"
                name="radio-buttons-group"
              >
                <FormControlLabel
                  value="op"
                  control={<Radio sx={{ color: "white" }} />}
                  // sx={{bgcolor:'#222329', border: '1px solid #686868', p: 1, borderRadius: 2}}

                  label={
                    <img
                      style={{ borderRadius: "12px" }}
                      src="assets/img/images/login_3.jpeg"
                    />
                  }
                />
                <FormControlLabel
                  value="polygon"
                  control={<Radio sx={{ color: "white" }} />}
                  // sx={{bgcolor:'#222329', border: '1px solid #686868', p: 1, borderRadius: 2}}

                  label={
                    <img
                      style={{ borderRadius: "12px" }}
                      src="assets/img/images/login_4.jpeg"
                    />
                  }
                />
              </RadioGroup>
            </Grid>
          </Grid>
        </Box>
        <Box
          component="section"
          sx={{
            p: 3,
            m: 5,
            borderRadius: 5,
            background: "#16171c",
          }}
        >
          <Grid container direction="row" justifyContent="space-between">
            <Grid item xs={6}>
              <Typography variant="h6">Enviornment</Typography>
            </Grid>
            <Grid item xs={6}>
              <Stack direction={"row"} gap={2}>
                <Box
                  sx={{
                    cursor: "pointer",
                    borderRadius: 6,
                    py: 1,
                    px: 2,
                    border: "1px solid #505050",
                    background: enviornment == "mainnet" && "#505050",
                    color: enviornment == "mainnet" && "white",
                  }}
                  onClick={() => setEnviornment("mainnet")}
                >
                  Mainnet
                </Box>
                <Box
                  sx={{
                    cursor: "pointer",
                    borderRadius: 6,
                    py: 1,
                    px: 2,
                    border: "1px solid #505050",
                    background:
                      enviornment == "testnet" ? "#505050" : "transparent",
                    color: enviornment == "testnet" && "white",
                  }}
                  onClick={() => setEnviornment("testnet")}
                >
                  Testnet
                </Box>
              </Stack>
            </Grid>
          </Grid>
        </Box>
        <Stack direction={'row'} justifyContent={'right'} mr={5}>
        <Button variant="primary" type="submit">
          submit
        </Button>
        </Stack>
      </Box>

      <Footer />
    </>
  );
}
