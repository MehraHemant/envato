import DashboardIcon from "@mui/icons-material/Dashboard";
import SettingsIcon from "@mui/icons-material/Settings";
import { Typography } from "@mui/material";

export default function SidebarComponent() {
  return (
    <>
      <Typography
        variant="h6"
        sx={{
          fontFamily: "Inter,Arial,sans-serif",
          fontWeight: "500",
          fontSize: "1rem",
        }}
      >
        <DashboardIcon /> Dashboard
      </Typography>
      <Typography
        variant="h6"
        sx={{
          fontFamily: "Inter,Arial,sans-serif",
          fontWeight: "500",
          fontSize: "1rem",
        }}
      >
        <SettingsIcon /> Setting
      </Typography>
    </>
  );
}
