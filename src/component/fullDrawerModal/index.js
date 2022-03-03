import React from "react";
import Drawer from "@material-ui/core/Drawer";
import Box from "@material-ui/core/Box";
import Close from "@material-ui/icons/Close";
import Clear from "@material-ui/icons/Clear";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import "./confirm2.css"
const FullDrawerModal = (props) => {
  const { openDrawer = false, setOpenDrawer = () => {} } = props;
  return (
    <Drawer
      open={openDrawer}
      onClose={setOpenDrawer}
      anchor={"bottom"}
      className="wh-vw-vh"
      PaperProps={{
        style: {
          width: "100vw",
          height: "100vh",
          background: "transparent",
        },
      }}
    >
      <Box className="wh-vw-vh flex-between-start flex-column overflow-hidden">
        {/* <Box style={{ height: "10vh" }} className="flex-end-center w-100">
          <Box
            style={{
              width: 26,
              height: 26,
              borderRadius: 13,
              marginRight: 10,
              backgroundColor: "#ffff",
            }}
            onClick={setOpenDrawer}
            className="flex-center cursor-pointer"
          >
            <Close />
          </Box>
        </Box> */}
        
        <Box className="drawer-open border-top-radius-10">{props.children}</Box>
      </Box>
    </Drawer>
  );
};

export default FullDrawerModal;
