import { Box, Tab } from "@mui/material";
import { TabContext, TabList } from "@mui/lab";
import { useState } from "react";

function ProfileTabs({ titleOne, titleTwo, children }) {
  const [value, setValue] = useState("1");

  const handleChange = (e, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: 1 }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList onChange={handleChange} aria-label="Profile tabs" >
            <Tab label={titleOne} value="1" />
            <Tab label={titleTwo} value="2"/>
          </TabList>
        </Box>
        {children}
      </TabContext>
    </Box>
  );
}

export default ProfileTabs;
