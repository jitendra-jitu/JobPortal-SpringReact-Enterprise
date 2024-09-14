




import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Box, Grid, Typography, Button, TextField } from "@mui/material";

const Navbar = ({ setSearchKeyword }) => {
  const [searchTerm, setSearchTerm] = useState('');

  // Trigger search effect when searchTerm changes
  useEffect(() => {
    setSearchKeyword(searchTerm);
  }, [searchTerm, setSearchKeyword]);

  return (
    <div>
      <Grid container spacing={2} sx={{ margin: "2%" }}>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static" style={{ background: '#ADD8E6' }}>
            <Toolbar variant="dense">
              <Typography variant="h4" align='Left' component="div" sx={{ flexGrow: 1, fontFamily:"revert", fontSize:"500", color:"black" }}>
                Project - Job Portal
              </Typography>
              <TextField
                label="Search"
                variant="outlined"
                size="small"
                sx={{ marginRight: '20px' }}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)} // Update the search term when typing
              />
              <Box sx={{ m: 0.5, mx: 'auto', width: 80 }}>
                <Button variant="outlined" href='http://localhost:3000'>Home</Button>
              </Box>
              <Box sx={{ m: 0.5, mx: 'auto', width: 100 }}>
                <Button variant="outlined" href='http://localhost:3000/create'>Add Job</Button>
              </Box>
              <Box sx={{ m: 0.5, mx: 'auto', width: 180 }}>
                <Button variant="outlined" href='https://github.com/jitendra-jitu'>Contact Us</Button>
              </Box>
            </Toolbar>
          </AppBar>
        </Box>
      </Grid>
    </div>
  );
};

export default Navbar;
