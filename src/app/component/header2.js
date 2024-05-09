import { BiChevronDown, BiChevronUp } from "react-icons/bi";
import {
  AppBar,
  Avatar,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";
import Link from "next/link";

const Header2 = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    anchorEl ? setAnchorEl(undefined) : setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <AppBar
        sx={{
          background: "#16171cef",
          width: {lg:"64%", md:"84%", xs:"98%"},
          top: "3%",
          height: 80,
          left: {lg:"18%", md:"8%", xs:"1%"},
          borderRadius: 5,
        }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box
            component={"img"}
            src={"/assets/img/logo/logo.png"}
            height={"80%"}
          />
          <Stack
            direction="row"
            gap={2}
            alignItems={"center"}
            onClick={handleClick}
          >
            <Avatar>H</Avatar>
            <Typography variant="body1" color={"white"}>
              Guest
            </Typography>
            <BiChevronDown fontSize={24} />
            <Menu
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              sx={{
                "& .MuiPaper-root": {
                  borderRadius: 4,
                  marginTop: 2,
                  minWidth: 150,
                  bgcolor: "#16171cef",
                  color: "white",
                },
              }}
              disableScrollLock
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
            >
              <MenuItem>Profile</MenuItem>
              <MenuItem><Link href={'/login'}> Logout</Link></MenuItem>
            </Menu>
          </Stack>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header2;
