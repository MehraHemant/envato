"use client";
import { BsCheckCircleFill, BsCircle } from "react-icons/bs";
import Footer from "../component/footer";
import Header from "../component/header";
import Box from "@mui/material/Box";
import Button from "react-bootstrap/Button";
import {
  FormControl,
  Typography,
  Stack,
  OutlinedInput,
  Grid,
  IconButton,
  Switch,
} from "@mui/material";
import { useState } from "react";
import CustomizedSnackbars from "../component/snackbar";
import { config } from "../constant";
import Link from "next/link";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useRouter } from "next/navigation";

export default function Rollup() {
  const [formData, setFormData] = useState({
    enviroment: "",
    framework: "",
    rollupName: "",
    chainId: "",
  });
  const [snackbar, setSnackbar] = useState({
    message: "",
    severity: "success",
    open: false,
  });
  const router = useRouter();

  const handleGoBack = () => {
    router.back();
  };
  const [integrations, setIntegrations] = useState([]);
  const handleSubmit = async () => {
    const email = window.localStorage.getItem("email");
    const response = await fetch("/api/rollup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ integrations, ...formData, email }),
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
          window.location.reload();
        }, 1500);
      }
    });
  };
  return (
    <>
      <CustomizedSnackbars msgData={snackbar} setMsgData={setSnackbar} />
      <Box
        component="section"
        sx={{ p: 2, mx: "auto", mt: 15 }}
        width={{ xs: "90%", md: "70%" }}
      >
        <Link href="" onClick={handleGoBack}>
          <ArrowBackIosIcon /> Back
        </Link>
        <Box
          component="section"
          sx={{
            p: 3,
            m: 5,
            borderRadius: 5,
            background: "#16171c",
          }}
        >
          <Grid container>
            <Grid item xs={5}>
              <Typography variant="h6">Details</Typography>
              <p>Add your rollup details</p>
            </Grid>
            <Grid item xs={7}>
              <Stack maxWidth={400}>
                <FormControl sx={{ marginBottom: 2 }}>
                  <OutlinedInput
                    id="name"
                    type="text"
                    name="name"
                    placeholder="Enter Deployment Name"
                    size="small"
                    onChange={(e) =>
                      setFormData({ ...formData, rollupName: e.target.value })
                    }
                    value={formData.rollupName}
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
                    placeholder="Preferred Chain ID"
                    size="small"
                    value={formData.chainId}
                    onChange={(e) =>
                      setFormData({ ...formData, chainId: e.target.value })
                    }
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
            <Grid item xs={5}>
              <Typography variant="h6">Framework</Typography>
            </Grid>
            <Grid item xs={7}>
              <Stack flexDirection={"row"} gap={3} flexWrap={"wrap"}>
                {config.rollup.framework.map((item) => (
                  <Stack
                    sx={{
                      mixBlendMode:
                        formData.framework != item.name && "difference",
                    }}
                    gap={2}
                    border={"1px solid #686868"}
                    p={2}
                    width={"90%"}
                    maxWidth={260}
                    borderRadius={3}
                    onClick={() =>
                      setFormData({ ...formData, framework: item.name })
                    }
                  >
                    <Stack
                      direction="row"
                      justifyContent={"space-between"}
                      alignItems={"center"}
                    >
                      {formData.framework == item.name ? (
                        <IconButton
                          sx={{
                            color: "#2272ff",
                            padding: "0px",
                          }}
                          disableRipple
                        >
                          <BsCheckCircleFill fontSize={20} />
                        </IconButton>
                      ) : (
                        <IconButton
                          sx={{
                            background: "#1c1f24",
                            color: "#686868",
                            padding: "0px",
                          }}
                          disableRipple
                        >
                          <BsCircle fontSize={20} />
                        </IconButton>
                      )}
                      <Box component={"img"} width={32} src={item.logo} />
                    </Stack>
                    <Typography
                      color={"white"}
                      variant="body1"
                      fontSize={16}
                      fontWeight={"semibold"}
                    >
                      {item.name}
                    </Typography>
                    <Typography variant="body2" color={"white"} fontSize={14}>
                      {item.desc}
                    </Typography>
                  </Stack>
                ))}
              </Stack>
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
          <Grid container>
            <Grid item xs={5}>
              <Typography variant="h6">Environnment</Typography>
            </Grid>
            <Grid item xs={7}>
              <Stack direction={"row"} gap={2}>
                {config.rollup.enviroment.map((item, index) => (
                  <Box
                    key={index}
                    sx={{
                      cursor: "pointer",
                      borderRadius: 6,
                      py: 1,
                      px: 2,
                      border: "1px solid #505050",
                      background: formData.enviroment == item && "#505050",
                      color: formData.enviroment == item && "white",
                    }}
                    onClick={() =>
                      setFormData({ ...formData, enviroment: item })
                    }
                  >
                    {item}
                  </Box>
                ))}
              </Stack>
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
          <Stack gap={4}>
            <Box>
              <Typography variant="h6">Integrations to include</Typography>
              <Typography variant="body2">
                Infrastructure and middleware services to include with your
                rollup
              </Typography>
            </Box>
            <Stack direction={"row"} flexWrap={"wrap"}>
              <Stack
                direction={"row"}
                justifyContent={"space-between"}
                border={"1px solid #686868"}
                borderRadius={3}
                p={2}
                width={250}
                alignItems={"center"}
              >
                {config.rollup.integrations.map((item) => (
                  <>
                    <Stack gap={2} direction={"row"} alignItems={"center"}>
                      <img src={item.icon} />
                      <Typography variant="subtitle1">{item.name}</Typography>
                    </Stack>
                    <Switch
                      checked={integrations.includes(item.name)}
                      onChange={() =>
                        integrations.includes(item.name)
                          ? setIntegrations(
                              integrations.filter(
                                (items) => items !== item.name
                              )
                            )
                          : setIntegrations([...integrations, item.name])
                      }
                      name="loading"
                      color="primary"
                    />
                  </>
                ))}
              </Stack>
            </Stack>
          </Stack>
        </Box>
        <Stack direction={"row"} justifyContent={"right"} mr={5}>
          <Button variant="primary" type="submit" onClick={handleSubmit}>
            Submit
          </Button>
        </Stack>
      </Box>

      <Footer />
    </>
  );
}
