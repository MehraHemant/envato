"use client";
import { BiMenuAltLeft } from "react-icons/bi";
import {
  AppBar,
  Box,
  Button,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/navigation";
import styled from "styled-components";
import { useEffect, useState } from "react";

export default function Header() {
  const [isPageScrolled, setIsPageScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const checkScroll = () => {
      setIsPageScrolled(window.scrollY > 120);
    };
    window.addEventListener("scroll", checkScroll);
  }, [isPageScrolled]);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <AppBar
        sx={{
          bgcolor: isPageScrolled ? "#0F101E" : "transparent",
          transition: "all 0.5s linear",
          px: { xs: 2, md: 4, lg: 10 },
        }}
        elevation={0}
      >
        <Toolbar
          sx={{ height: 100, display: "flex", justifyContent: "space-between" }}
        >
          <Box
            component={"img"}
            src={"/assets/img/logo/logo.png"}
            height={"80%"}
          />
          <Stack direction={"row"} gap={6} display={{ xs: "none", md: "flex" }}>
            <Typography variant="h6" component={Link} href="/">
              Home
            </Typography>
            <Typography variant="h6" component={Link} href="/blockchain">
              Blockchain
            </Typography>
            <Typography variant="h6" component={Link} href="/">
              Feature
            </Typography>
            <Typography variant="h6" component={Link} href="/">
              Blog
            </Typography>
            <Typography variant="h6" component={Link} href="/">
              Contact
            </Typography>
          </Stack>
          <Box display={{ xs: "block", md: "none" }}>
            <IconButton onClick={() => setOpen(true)}>
              <BiMenuAltLeft color="white" />
            </IconButton>
          </Box>
          <Box display={{ xs: "none", md: "block" }}>
            <Button
              variant="contained"
              disableRipple
              sx={{
                "&:hover": {
                  background:
                    "linear-gradient(82.3deg, #E275FF 10.8%, #5729D6 94.3%)",
                  color: "white",
                },
                background: "white",
                transition: "all 0.5s linear",
                color: "black",
                borderRadius: 10,
                fontWeight: 700,
                px: 5,
                py: 1.8,
              }}
              onClick={() => router.push("/login")}
            >
              LOGIN
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer
        anchor="top"
        open={open}
        onClose={() => setOpen(prev=>!prev)}
        disableScrollLock
        sx={{
          "& .MuiDrawer-paper": { mt: "100px" },
          "& .MuiBackdrop-root": { top: "100px" },
        }}
      >
        <List sx={{bgcolor: "#0F101E"}}>
          <ListItem sx={{color:'white'}} component={Link} href="/" onClick={handleClose}>
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem sx={{color:'white'}} component={Link} href="/blockchain" onClick={handleClose}>
            <ListItemText primary="Blockchain" />
          </ListItem>
          <ListItem sx={{color:'white'}} component={Link} href="/"onClick={handleClose}>
            <ListItemText primary="Feature" />
          </ListItem>
          <ListItem sx={{color:'white'}} component={Link} href="/"onClick={handleClose}>
            <ListItemText primary="Blog" />
          </ListItem>
          <ListItem sx={{color:'white'}} component={Link} href="/"onClick={handleClose}>
            <ListItemText primary="Contact" />
          </ListItem>
          <ListItem>
          <Button variant="contained" sx={{background:'white', color:'black'}} onClick={()=>{handleClose(); router.push("/login", { shallow: true })}}>Login</Button>
          </ListItem>
        </List>
      </Drawer>
    </>
  );
}
