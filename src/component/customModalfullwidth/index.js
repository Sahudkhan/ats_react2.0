import React from "react";
import Typography from "@material-ui/core/Typography";
import { Box } from "@material-ui/core";
import Modal from "@material-ui/core/Modal";
import Clear from "@material-ui/icons/Clear";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import "./modalfullwidth.css"

const CustomModalfullwidth = (props) => {


  return (
    <Modal open={props.open} className="flex-center">
      <Box
        style={{ border: 0 }}
        className="wh-vw-vh flex-center"
      >
        <Box className="custom-modal-fullwidth flex-column start-flex pb-0 " style={props.width ? { width: props.width } : {}}>
          <Box
            sx={{ height: "calc(110% - 19px)" }}
            className="flex-column start-flex w-100"
          >
            <Box
              className="w-100 flex-between-center"
            >
              <div style={{ display: "flex", justifyContent: "space-between",padding:"17px 30px", borderBottom:"1px solid #EBECF0", width: "100%", alignItems: "flex-start" }}>
                <Typography variant="h2" style={{ flex: "1", fontSize:'16px', marginTop:7 }}>{props.name || " "}</Typography>
                <IconButton
                  onClick={() => {
                    props.cancelClicked()
                  }}
                  size="small"
                  color="primary"
                >
                  <Clear />
                </IconButton>
              </div>
            </Box>
            <Box className="w-100" style={{ marginBottom: props.warn?"30px":"20px", minHeight: "75vh" }}>
              {props.warn ? <Typography variant="h6" >{props.warn}</Typography> : null}
              <div style={{ marginTop: 20 }}>
                {props.children}
              </div>
            </Box>
            {!props.hideButtons ?
              <Box
                className="w-100"
                style={{
                  paddingTop: "20px",
                  borderTop: "1px solid lightgrey",
                  justifyContent: "flex-end",
                  display: "flex",
                }}
              >
                <Button
                  variant="contained"
                  onClick={() => {
                    props.cancelClicked()
                  }}
                  className="button-custom-modal"
                >
                  {props.cancelText || "Cancel"}
                </Button>
                &nbsp; &nbsp; &nbsp;
                <Button
                  variant="contained"
                  color="primary"
                  // style={{ backgroundColor: "#335AFF", color: "#fff" }}
                  onClick={() => {
                    props.confirmClicked();
                  }}
                  className="button-custom-modal button-confirm"
                >
                  {props.confirmText || "Confirm"}
                </Button>
              </Box> : null}
          </Box>
        </Box>
      </Box>
    </Modal>
  );
};

export default CustomModalfullwidth;
