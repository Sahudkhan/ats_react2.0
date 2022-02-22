import {
  AppBar,
  Box,
  Grid,
  makeStyles,
  Tab,
  Tabs,
  Typography,
  withStyles,
} from "@material-ui/core";
import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import "./nestedTab.scss";

const TabMenu = (props) => {
  const history = useHistory();

  const [selected, setSelected] = useState(
    props.selected ? props.selected : ""
  );

  useEffect(() => {
    if (selected === "") {
      setSelected(history.location.pathname.split("/").splice(-1)[0]);
    }
  }, [history]);

  function a11yProps(index) {
    return {
      id: `${props.name}-${index}`,
      "aria-controls": `simple-tabpanel-${props.name}-${index}`,
    };
  }

  return (
    <Box className="wh-100 start-flex flex-column">
      <Grid className="flex-start-center border-bottom-tab w-100 cal-page-containe">
        <Grid
          item
          sm={3}
          lg={2}
          className="flex-start-center h-100"
          style={{ zIndex: 0, position: "fixed" }}
        >
          <Box
            sx={{ pl: { sm: 3, md: 5, lg: 6 } }}
            className="w-100 start-flex"
          >
            <Typography variant="h2" sx={{ fontSize: "1.125rem" }}>
              {props.name}
            </Typography>
          </Box>
        </Grid>

        <Grid item sm={12} className="flex-center-end h-100">
          <Tabs
            className={"flex-center wh-100"}
            indicatorColor="secondary"
            value={selected}
            onChange={(e, index) => {
              e.preventDefault();
              setSelected(index);
              props.handleChange(index);
            }}
            TabIndicatorProps={{
              style: {
                borderTopLeftRadius: 100,
                borderTopRightRadius: 100,
              },
            }}
            centered={true}
          >
            {props.tabs?.map((item, index) => {
              return (
                <Tab
                  value={item.path}
                  // sx={{
                  //   opacity: "1 !important",
                  //   minWidth: "60px !important",
                  //   mx: { lg: 1.5, md: 1, sm: 0.3 },
                  //   p: 0,
                  // }}
                  style={{opacity:"1",minWidth:"60px",maxWidth:"auto"}}
                  key={index}
                  {...a11yProps(index)}
                  label={
                    <Typography
                      className="w-100"
                      variant="h3"
                      color={selected === item.path ? "secondary" : "primary"}
                    >
                      {item.name}
                    </Typography>
                  }
                />
              );
            })}
          </Tabs>
        </Grid>
      </Grid>
    </Box>
  );
};

export default TabMenu;
