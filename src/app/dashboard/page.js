"use client";
import Box from "@mui/material/Box";
import { Typography, Grid, Button, Chip } from "@mui/material";
import React, { useEffect, useState } from "react";
import SidebarComponent from "../component/sidebar";
import LabelBottomNavigation from "../component/bottomNavigation";
import { config } from "../constant";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import CssBaseline from "@mui/material/CssBaseline";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabPanel from "@mui/lab/TabPanel";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import { useMediaQuery } from "@mui/material";
import { TabList } from "@mui/lab";
import { useRouter } from "next/navigation";
import Header2 from "../component/header2";


export default function Rollup() {
  const [data, setData] = useState([]);
  const isMobile = useMediaQuery("(max-width:600px)");
  const router = useRouter();

  const navigateToRollupPage = () => {
    router.push("/rollup", { shallow: true });
  };
  const [enviroments, setEnviroments] = useState(["All"]);
  const [filteredData, setFilteredData] = useState([]);

  const fetchData = async () => {
    const email = window.localStorage.getItem("email");
    const response = await fetch(`/api/rollup/${email}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    response.json().then((res) => {
      if (res.status) {
        setData(res.data);
        setEnviroments(["All", ...config.rollup.enviroment]);
        setFilteredData(res.data);
      }
    });
  };

  useEffect(() => {
    fetchData();
  }, []);
  const ref = React.useRef(null);
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    let filteredData = [];
    if (newValue === 0) {
      filteredData = data;
    } else {
      const selectedEnvironment = enviroments[newValue];
      filteredData = data.filter(
        (item) => item.enviroment === selectedEnvironment
      );
    }

    setFilteredData(filteredData);
  };
  return (
    <>
      <Header2 />
      {isMobile ? (
        <Box sx={{ pb: 7 }} ref={ref}>
          <CssBaseline />
          <div>
            <Box
              component="section"
              sx={{ p: 1, mx: "auto", pb: 7, mt: 15, display: "flex" }}
              width={{ xs: "100%", md: "80%" }}
              ref={ref}
            >
              <Box width={{ xs: "100%", md: "85%" }}>
                <Box sx={{ mb: 5 }}>
                  <Grid container>
                    <Grid item xs={8} md={10}>
                      <Typography variant="h5">Deployments</Typography>
                    </Grid>
                    <Grid item xs={2} md={2}>
                      <Button
                        variant="contained"
                        onClick={navigateToRollupPage}
                      >
                        <AddCircleIcon />
                        Deploy
                      </Button>
                    </Grid>
                  </Grid>
                </Box>
                <Box
                  component="section"
                  sx={{
                    p: 1,
                    ml: 1,
                    borderRadius: 5,
                    background: "#16171c",
                  }}
                >
                  <Box
                    sx={{ width: "100%", overflowX: "auto", height: "100%" }}
                  >
                    <TabContext value={value}>
                      <Box
                        sx={{
                          borderBottom: "1px solid white",
                          borderColor: "divider",
                          overflowX: "auto",
                          whiteSpace: "nowrap",
                          "&.Mui-selected": {
                            color: "white",
                          },
                        }}
                      >
                        <Tabs
                          onChange={handleChange}
                          sx={{
                            display: "flex",
                            flexWrap: "nowrap",
                            "&.Mui-selected": {
                              color: "white",
                            },
                          }}
                          variant="scrollable"
                          scrollButtons={false}
                        >
                          {enviroments.map((item, index) => (
                            <Tab
                              label={item}
                              value={index}
                              key={index}
                              sx={{
                                color: "grey", // Default color
                                "&.Mui-selected": {
                                  color: "white", // Color when selected
                                },
                              }}
                            />
                          ))}
                        </Tabs>
                      </Box>
                      {enviroments.map((env, index) => (
                        <TabPanel value={index} key={index}>
                          <Box
                            sx={{
                              display: "flex",
                              flexDirection: "row",
                              flexWrap: "wrap",
                              gap: "10px",
                            }}
                          >
                            {filteredData
                              .filter(
                                (item) =>
                                  item.enviroment === env || env === "All"
                              )
                              .map((item, i) => (
                                <Card
                                  key={i}
                                  sx={{
                                    maxWidth: 300,
                                    background: "#22242a",
                                    border: "1px solid grey",
                                  }}
                                >
                                  <div
                                    style={{
                                      display: "flex",
                                      gap: "20px",
                                      padding: "3px",
                                    }}
                                  >
                                    <Typography
                                      gutterBottom
                                      variant="h7"
                                      component="div"
                                    >
                                      {item.enviroment}
                                    </Typography>
                                    <Chip label="Requested" color="warning" />
                                  </div>

                                  <CardContent>
                                    <Typography
                                      variant="body2"
                                      color="white"
                                      height={70}
                                    >
                                      {item.rollupName}
                                    </Typography>
                                  </CardContent>
                                  <CardActions>
                                    <Button
                                      sx={{
                                        width: "100%",
                                        color: "white",
                                        backgroundColor: "#550505",
                                        "&:hover": {
                                          backgroundColor: "red",
                                        },
                                      }}
                                      varient="outlined"
                                    >
                                      Cancel request
                                    </Button>
                                  </CardActions>
                                </Card>
                              ))}
                          </Box>
                        </TabPanel>
                      ))}
                    </TabContext>
                  </Box>
                </Box>
              </Box>
            </Box>
          </div>
          <LabelBottomNavigation />
        </Box>
      ) : (
        <Box
          component="section"
          sx={{ p: 2, mx: "auto", pb: 7, mt: 15, display: "flex" }}
          width={{ xs: "100%", md: "80%" }}
          ref={ref}
        >
          <Box
            width={{ xs: "20%", md: "15%" }}
            sx={{ display: "flex", flexDirection: "column", gap: "15px" }}
          >
            <SidebarComponent />
          </Box>
          <Box width={{ xs: "100%", md: "85%" }}>
            <Box sx={{ mb: 5 }}>
              <Grid container>
                <Grid item xs={8} md={10}>
                  <Typography variant="h5">Deployments</Typography>
                </Grid>
                <Grid item xs={2} md={2}>
                  <Button variant="contained" onClick={navigateToRollupPage}>
                    <AddCircleIcon />
                    Deploy
                  </Button>
                </Grid>
              </Grid>
            </Box>
            <Box
              component="section"
              sx={{
                p: 3,
                ml: 1,
                borderRadius: 5,
                background: "#16171c",
              }}
            >
              <Box sx={{ width: "100%" }}>
                <TabContext value={value}>
                  <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                    <TabList
                      onChange={handleChange}
                      aria-label="lab API tabs example"
                    >
                      {enviroments.map((item, index) => (
                        <Tab
                          label={item}
                          value={index}
                          key={index}
                          sx={{
                            color: "grey",
                            "&.Mui-selected": {
                              color: "white",
                            },
                          }}
                        />
                      ))}
                    </TabList>
                  </Box>
                  {enviroments.map((env, index) => (
                    <TabPanel value={index} key={index}>
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "row",
                          flexWrap: "wrap",
                          gap: "10px",
                        }}
                      >
                        {filteredData
                          .filter(
                            (item) => item.enviroment === env || env === "All"
                          )
                          .map((item, i) => (
                            <Card
                              key={i}
                              sx={{
                                maxWidth: 300,
                                background: "#22242a",
                                border: "1px solid #22242a",
                                p: 1.5,
                              }}
                            >
                              <div
                                style={{
                                  display: "flex",
                                  gap: "20px",
                                  padding: "3px",
                                }}
                              >
                                <Typography
                                  gutterBottom
                                  variant="h7"
                                  component="div"
                                  sx={{ color: "grey" }}
                                >
                                  {item.enviroment}
                                </Typography>
                                <Chip
                                  label="Requested"
                                  sx={{
                                    background: "#ffff0033",
                                    color: "yellow",
                                  }}
                                />
                              </div>

                              <CardContent>
                                <Typography
                                  variant="body2"
                                  color="white"
                                  height={70}
                                >
                                  {item.rollupName}
                                </Typography>
                              </CardContent>
                              <div
                                style={{
                                  background: "#9fa0ab",
                                  width: "100%",
                                  height: "1px",
                                }}
                              ></div>
                              <CardActions>
                                <Button
                                  sx={{
                                    width: "100%",
                                    color: "white",
                                    textTransform: "none", // Display text in normal case
                                    border: "1px solid grey", // Default background color
                                    "&:hover": {
                                      backgroundColor: "red", // Background color on hover
                                    },
                                  }}
                                  varient="outlined"
                                >
                                  Cancel request
                                </Button>
                              </CardActions>
                            </Card>
                          ))}
                      </Box>
                    </TabPanel>
                  ))}
                </TabContext>
              </Box>
            </Box>
          </Box>
        </Box>
      )}
    </>
  );
}
