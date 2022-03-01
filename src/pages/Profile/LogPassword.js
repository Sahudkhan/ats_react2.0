import React, { useState, useEffect } from "react";
import { Grid, TextField, Box, Checkbox, FormControl, FormLabel, RadioGroup, Radio, InputLabel, Select, Input, Chip, MenuItem, ListItemText, Divider, ListItemAvatar, Avatar, CardMedia, Typography, Button, IconButton, Popover, List, ListItem } from "@material-ui/core"; 
import FormBuilder, { MyTable } from "../../component/formBuilder";



function JobWidget() {
 const handleChange = (e) => {
        console.log("target", e.target)
      }

 return (
       <>
       <div className="css-1yqw6cw">
       <div container>
      <div className="flex-between-center mb-30 " >
          <Typography variant="subtitle1" sx={{ fontSize: 20 }} >
         Login Password
          </Typography>
        
      
      </div>


     
    </div>
       </div>
       </>
    )
}

export default JobWidget
