import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
// import Alert from '@material-ui/lab/Alert';
import { CircularProgress, Snackbar } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import { ERROR_BLANK } from "../../constants/actionTypes";
const useStyles = makeStyles(() => ({
    loader: {
        position: "fixed",
        height: "100vh",
        width: "100%",
        top: "0px",
        zIndex: "99999",
        textAlign: "center",
        display: 'flex',
        backgroundColor: "rgba(255,255,255,.7)",
    },
    innerLoader: {
        margin: "auto",
    }
}));
const UiLoader = (props) => {
    const dispatch = useDispatch();
    
    const { error, time, alert, success, loading } = useSelector((state) => state.common);
    
    const [alertStatus, setAlertStatus] = useState({ status: false, msg: '', type: '' })
    
    useEffect(() => {
        error === true && setAlertStatus({ status: true, msg: alert, type: 'warning' });
        error === true && dispatch({ type: ERROR_BLANK, action: "" });
    }, [time, error, alert, dispatch]);
    
    useEffect(() => {
        success === true && setAlertStatus({ status: true, msg: alert, type: 'success' });
        success === true && dispatch({ type: ERROR_BLANK, action: "" });
    }, [success, alert, dispatch]);
    
    const closeManul = () => {
        setAlertStatus({ status: false, msg: '', type: '' })
    }
    
    const classes = useStyles();

    return (
        <React.Fragment>
            {loading &&
                <div className={classes.loader}>
                    <div className={classes.innerLoader}>
                        <CircularProgress />
                    </div>
                </div>
            }
            {alertStatus.status &&
                <Snackbar
                    anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                    open={alertStatus.status} onClose={closeManul} autoHideDuration={4000} >
                    {/* <Alert severity={alertStatus.type}>
                        {alertStatus.msg}
                    </Alert> */}
                </Snackbar>
            }
        </React.Fragment>
    );
}

export default UiLoader;