import React, { useState } from "react";
import {
  Grid,
  TextField,
  FormControlLabel,
  Checkbox,
  FormControl,
  FormLabel,
  RadioGroup,
  Radio,
  InputLabel,
  Select,
  Input,
  MenuItem,
  ListItemText,
  
  Switch,
  CardMedia,
  Typography,
  InputAdornment,
} from "@material-ui/core";
import {
  MuiPickersUtilsProvider,
  DatePicker,
  TimePicker,
  DateTimePicker,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import { Autocomplete } from "@material-ui/lab";
import DateFnsUtils from "@date-io/date-fns";
import { format, addMonths, addDays } from "date-fns";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  Box,
} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import "./formBuilder.css";
import { Search } from "@material-ui/icons";

const empty_table = process.env.PUBLIC_URL + "/static/img/empty_table.svg";
const CustomSwitch = withStyles({
  switchBase: {
    color: "#172B4D",
    "&$checked": {
      color: "#335AFF",
    },
    "&$checked + $track": {
      backgroundColor: "rgba(51, 90, 255, 0.38)",
    },
  },
  checked: {},
  track: {},
})(Switch);
const FormBuilder = (props) => {
  let { fields, values, inputHandler, size, children, align, style } = props;
  if (!size) {
    size = "lg";
  }
  const [autoVal, setAutoVal] = useState({});

  const handleCheckboxChange = (e) => {
    if (e.target.checked) {
      e.target.value = 1;
    } else {
      e.target.value = 0;
    }
    inputHandler(e);
  };
  const handleDateChange = (date, name) => {
    inputHandler({ target: { name: name, value: date } });
  };
  const handleInputDateChange = (date, name) => {
    if (date && date.getMonth()) {
      inputHandler({
        target: { name: name, value: format(date, "yyyy-MM-dd") },
      });
    }
  };
  const validateInput = (e, type, old_val) => {
    switch (type) {
      case "A":
        e.target.value = e.target.value.replace(/[^A-Za-z]/g, "");
        break;
      case "AS":
        e.target.value = e.target.value.replace(/[^A-Z a-z]/g, "");
        break;
      case "AN":
        e.target.value = e.target.value.replace(/\W/g, "");
        break;
      case "ASN":
        e.target.value = e.target.value.replace(/[^A-Z a-z0-9]/g, "");
        break;
      case "ANS":
        e.target.value = e.target.value.replace(
          /[^A-Za-z 0-9_\-!@%&*?=+,.]/g,
          ""
        );
        break;
      case "N":
        e.target.value = e.target.value.replace(/\D/g, "");
        break;
      case "F":
        e.target.value = e.target.value
          .replace(/[^0-9.]/g, "")
          .replace(/\.\./g, "")
          .replace(/(\..*)\./g, "$1");
        break;
      case "MNO":
        e.target.value = e.target.value.replace(/\D/g, "").substring(0, 10);
        break;
      case "PIN":
        e.target.value = e.target.value.replace(/\D/g, "").substring(0, 6);
        break;
      case "EMAIL":
        e.target.value = e.target.value.replace(/[^A-Za-z0-9_\-@.]/g, "");
        break;
      default:
        break;
    }
    return e.target.value !== old_val;
  };

  const FormLabeler = (options) => {
    return (
      <FormLabel component="legend">
        {options.label}
        {options.required ? (
          <span
            aria-hidden="true"
            className="MuiFormLabel-asterisk MuiInputLabel-asterisk"
          >
             *
          </span>
        ) : (
          ""
        )}
      </FormLabel>
    );
  };
  const InputLabeler = (options) => {
    return (
      <InputLabel htmlFor={options.name}>
        {options.label}
        {options.required ? (
          <span
            aria-hidden="true"
            className="MuiFormLabel-asterisk MuiInputLabel-asterisk"
          >
             *
          </span>
        ) : (
          ""
        )}
      </InputLabel>
    );
  };

  const getAutoDefaultValue = (options, value, name) => {
    let filterData = options.filter(function (v) {
      return v.id == value;
    });
    if (filterData.length > 0) {
      console.log({ [name]: filterData[0]?.name }, name);
      setAutoVal({ [name]: filterData[0]?.name } || {});
    }
  };
  console.log(autoVal);
  if (
    !fields ||
    !inputHandler ||
    !values ||
    typeof fields !== "object" ||
    typeof inputHandler !== "function"
  ) {
    return (
      <ol>
        <li>fields : required and should be type of Array object.</li>
        <li>values : required and should be type of object.</li>
        <li>inputHandler : required and should be type of function.</li>
      </ol>
    );
  } else {
    return (
      <Grid container alignItems={align ? align : "center"} spacing={2} style={style}>
        {Object.values(fields || []).map((options, i) => {
          let materail_element = "";
          let dt = new Date();
          dt.setHours(0);
          dt.setMinutes(0);
          dt.setSeconds(0);
          dt.setMilliseconds(0);
          switch (options.type) {
            case "input":
              materail_element = (
                <TextField
                  variant="outlined"
                  size={options.size || "small"}
                  fullWidth
                  onChange={(e) => {
                    if (
                      validateInput(
                        e,
                        options.validate || "ANY",
                        values[options.name] || ""
                      )
                    ) {
                      inputHandler(e);
                    }
                  }}
                  InputProps={
                    options.search
                      ? {
                          startAdornment: (
                            <InputAdornment position="start">
                              <Search />
                            </InputAdornment>
                          ),
                        }
                      : {}
                  }
                  required={options.required || false}
                  disabled={options.readonly || options.disabled || false}
                  id={options.name || "inp_id_" + i}
                  label={options.label}
                  name={options.name}
                  value={values[options.name] || ""}
                />
              );
              break;
            case "password":
              materail_element = (
                <TextField
                  variant="outlined"
                  size={options.size || "small"}
                  type={options.type}
                  fullWidth
                  onChange={(e) => {
                    if (
                      validateInput(
                        e,
                        options.validate || "ANY",
                        values[options.name] || ""
                      )
                    ) {
                      inputHandler(e);
                    }
                  }}
                  required={options.required || false}
                  id={options.name || "inp_id_" + i}
                  label={options.label}
                  name={options.name}
                  value={values[options.name] || ""}
                />
              );
              break;
            case "hidden":
              materail_element = (
                <Input
                  key={"inp_id_" + i}
                  type={options.type}
                  required={options.required || false}
                  id={options.name || "inp_id_" + i}
                  label={""}
                  name={options.name}
                  value={values[options.name] || ""}
                />
              );
              break;
            case "checkbox":
              materail_element = (
                <FormControlLabel
                  control={
                    <Checkbox
                      color="primary"
                      name={options.name}
                      checked={
                        values[options.name] === 1 ||
                        values[options.name] === "1"
                          ? true
                          : false
                      }
                      disabled={options.readonly || options.disabled || false}
                      onChange={handleCheckboxChange}
                    />
                  }
                  labelPlacement="end"
                  label={options.label}
                />
              );
              break;
            case "select":
              materail_element = (
                <FormControl
                  variant="outlined"
                  size={options.size || "small"}
                  fullWidth
                >
                  {InputLabeler(options)}
                  <Select
                    native
                    value={values[options.name] || ""}
                    onChange={inputHandler}
                    required={options.required || false}
                    disabled={options.readonly || options.disabled || false}
                    label={`${options.label}${options.required ? " * " : ""}`}
                    inputProps={{
                      name: options.name,
                      id: options.name,
                    }}
                  >
                    <option aria-label="None" value="" />
                    {options?.options?.map((opt, i) => {
                      if (typeof opt === "string") {
                        opt = { key: opt, value: opt };
                      }
                      return (
                        <option key={`${options.name}_${i}`} value={opt.id}>
                          {opt.name}
                        </option>
                      );
                    })}
                  </Select>
                </FormControl>
              );
              break;
            case "groupselect":
              materail_element = (
                <FormControl
                  variant="outlined"
                  size={options.size || "small"}
                  fullWidth
                >
                  {InputLabeler(options)}
                  <Select
                    native
                    value={values[options.name] || ""}
                    onChange={inputHandler}
                    required={options.required || false}
                    disabled={options.readonly || options.disabled || false}
                    label={`${options.label}${options.required ? " * " : ""}`}
                    inputProps={{
                      name: options.name,
                      id: options.name,
                    }}
                  >
                    <option aria-label="None" value="" />
                    {options?.options?.map((opg, i) => {
                      return (
                        <optgroup key={`${options.name}_${i}`} label={opg.key}>
                          {opg?.value?.map((opt, i) => {
                            if (typeof opt === "string") {
                              opt = { key: opt, value: opt };
                            }
                            return (
                              <option key={`${opg.key}_${i}`} value={opt.id}>
                                {opt.name}
                              </option>
                            );
                          })}
                        </optgroup>
                      );
                    })}
                  </Select>
                </FormControl>
              );
              break;
            case "multiselect":
              materail_element = (
                <FormControl
                  variant="outlined"
                  size={options.size || "small"}
                  fullWidth
                >
                  {InputLabeler(options)}
                  <Select
                    label={`${options.label}${options.required ? " * " : ""}`}
                    multiple={true}
                    value={values[options.name] || []}
                    onChange={inputHandler}
                    required={options.required || false}
                    disabled={options.readonly || options.disabled || false}
                    name={options.name}
                    input={<Input />}
                    renderValue={(selected) => selected.join(", ")}
                  >
                    {options?.options?.map((opt, i) => {
                      if (typeof opt === "string") {
                        opt = { key: opt, value: opt };
                      }
                      return (
                        <MenuItem key={`${options.name}_${i}`} value={opt.id}>
                          <Checkbox
                            color="primary"
                            checked={
                              (values[options.name] || []).indexOf(opt.id) > -1
                            }
                          />
                          <ListItemText primary={opt.name} />
                        </MenuItem>
                      );
                    })}
                  </Select>
                </FormControl>
              );
              break;
            case "radio":
              materail_element = (
                <FormControl component="fieldset">
                  {FormLabeler(options)}
                  <RadioGroup
                    row
                    aria-label={options.label}
                    name={options.name}
                    value={values[options.name] || ""}
                    onChange={inputHandler}
                    required={options.required || false}
                    disabled={options.readonly || options.disabled || false}
                  >
                    {options?.options?.map((rad, i) => {
                      if (typeof rad === "string") {
                        rad = { key: rad, value: rad };
                      }
                      return (
                        <FormControlLabel
                          key={`${options.name}_${i}`}
                          value={rad.id}
                          control={
                            <Radio
                              size={options.size || "small"}
                              color="primary"
                            />
                          }
                          label={rad.name}
                        />
                      );
                    })}
                  </RadioGroup>
                </FormControl>
              );
              break;
            case "date":
              materail_element = (
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <DatePicker
                    clearable
                    autoOk
                    inputVariant="outlined"
                    size={options.size || "small"}
                    views={["year", "month", "date"]}
                    fullWidth
                    value={
                      values[options.name]
                        ? new Date(values[options.name])
                        : null
                    }
                    label={options.label}
                    placeholder={format(dt, "dd-MMM-yyyy")}
                    onChange={(date) => {
                      handleDateChange(
                        date ? format(date, "yyyy-MM-dd") : null,
                        options.name
                      );
                    }}
                    required={options.required || false}
                    disabled={options.readonly || options.disabled || false}
                    minDate={addDays(
                      dt,
                      -1 *
                        (Number(options.min) ||
                          (Number(options.min) === 0 ? 0 : 90))
                    )}
                    maxDate={addDays(
                      dt,
                      Number(options.max) ||
                        (Number(options.max) === 0 ? 0 : 60)
                    )}
                    format="dd-MMM-yyyy"
                    openTo="year"
                  />
                </MuiPickersUtilsProvider>
              );
              break;
            case "inputdate":
              materail_element = (
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <KeyboardDatePicker
                    clearable
                    autoOk
                    inputVariant="outlined"
                    size={options.size || "small"}
                    views={["year", "month", "date"]}
                    fullWidth
                    value={
                      values[options.name]
                        ? new Date(values[options.name])
                        : null
                    }
                    label={options.label}
                    placeholder={format(dt, "dd-MM-yyyy")}
                    onChange={(date) => {
                      handleInputDateChange(date, options.name);
                    }}
                    required={options.required || false}
                    disabled={options.readonly || options.disabled || false}
                    minDate={addDays(
                      dt,
                      -1 *
                        (Number(options.min) ||
                          (Number(options.min) === 0 ? 0 : 90))
                    )}
                    maxDate={addDays(
                      dt,
                      Number(options.max) ||
                        (Number(options.max) === 0 ? 0 : 60)
                    )}
                    format="dd-MM-yyyy"
                    openTo="year"
                  />
                </MuiPickersUtilsProvider>
              );
              break;
            case "time":
              dt.setDate(1);
              materail_element = (
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <TimePicker
                    clearable
                    autoOk
                    inputVariant="outlined"
                    size={options.size || "small"}
                    views={["hours", "minutes"]}
                    fullWidth
                    value={
                      values[options.name]
                        ? new Date("2021-04-01 " + values[options.name])
                        : null
                    }
                    label={options.label}
                    placeholder={format(dt, "hh:mm a")}
                    onChange={(date) => {
                      handleDateChange(
                        date ? format(date, "HH:mm:00") : null,
                        options.name
                      );
                    }}
                    required={options.required || false}
                    disabled={options.readonly || options.disabled || false}
                    openTo="hours"
                  />
                </MuiPickersUtilsProvider>
              );
              break;
            case "datetime":
              materail_element = (
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <DateTimePicker
                    clearable
                    autoOk
                    inputVariant="outlined"
                    size={options.size || "small"}
                    fullWidth
                    value={
                      values[options.name]
                        ? new Date(values[options.name])
                        : null
                    }
                    label={options.label}
                    placeholder={format(new Date(), "dd-MMM-yyyy hh:mm a")}
                    onChange={(date) => {
                      handleDateChange(
                        date ? format(date, "yyyy-MM-dd HH:mm:ss") : null,
                        options.name
                      );
                    }}
                    required={options.required || false}
                    disabled={options.readonly || options.disabled || false}
                    minDate={addDays(
                      new Date(),
                      -1 *
                        (Number(options.min) ||
                          (Number(options.min) === 0 ? 0 : 90))
                    )}
                    maxDate={addDays(
                      new Date(),
                      Number(options.max) ||
                        (Number(options.max) === 0 ? 0 : 60)
                    )}
                    format="dd-MMM-yyyy hh:mm a"
                  />
                </MuiPickersUtilsProvider>
              );
              break;
            case "month":
              dt.setDate(1);
              materail_element = (
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <DatePicker
                    clearable
                    autoOk
                    inputVariant="outlined"
                    size={options.size || "small"}
                    views={["year", "month"]}
                    fullWidth
                    value={
                      values[options.name]
                        ? new Date(values[options.name])
                        : null
                    }
                    label={options.label}
                    placeholder={format(dt, "MMM yyyy")}
                    onChange={(date) => {
                      handleDateChange(
                        date ? format(date, "yyyy-MM-01") : null,
                        options.name
                      );
                    }}
                    required={options.required || false}
                    disabled={options.readonly || options.disabled || false}
                    minDate={addMonths(
                      dt,
                      -1 *
                        (Number(options.min) ||
                          (Number(options.min) === 0 ? 0 : 18))
                    )}
                    maxDate={addMonths(
                      dt,
                      Number(options.max) || (Number(options.max) === 0 ? 0 : 3)
                    )}
                    format="MMM yyyy"
                  />
                </MuiPickersUtilsProvider>
              );
              break;
            case "year":
              materail_element = (
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <DatePicker
                    clearable
                    autoOk
                    inputVariant="outlined"
                    size={options.size || "small"}
                    views={["year"]}
                    fullWidth
                    value={
                      values[options.name]
                        ? new Date(`${values[options.name]}-01-01`)
                        : null
                    }
                    label={options.label}
                    placeholder={`${new Date().getFullYear()}`}
                    onChange={(date) => {
                      handleDateChange(
                        date ? new Date(date).getFullYear() : null,
                        options.name
                      );
                    }}
                    required={options.required || false}
                    disabled={options.readonly || options.disabled || false}
                    minDate={
                      new Date().getFullYear() -
                      (Number(options.min) ||
                        (Number(options.min) === 0 ? 0 : 3)) +
                      "-01-01"
                    }
                    maxDate={
                      new Date().getFullYear() +
                      (Number(options.max) ||
                        (Number(options.max) === 0 ? 0 : 1)) +
                      "-12-31"
                    }
                    format="yyyy"
                  />
                </MuiPickersUtilsProvider>
              );
              break;
            case "switch":
              materail_element = (
                <FormControlLabel
                  control={
                    <Switch
                      color="primary"
                      name={options.name}
                      checked={
                        values[options.name] === 1 ||
                        values[options.name] === "1"
                          ? true
                          : false
                      }
                      onChange={handleCheckboxChange}
                      disabled={options.readonly || options.disabled || false}
                    />
                  }
                  labelPlacement="end"
                  label={options.label}
                />
              );
              break;
            case "switch2":
              materail_element = (
                <div>
                  <FormControlLabel
                    className="switch2"
                    control={
                      <CustomSwitch
                        color="primary"
                        name={options.name}
                        checked={
                          values[options.name] === 1 ||
                          values[options.name] === "1"
                            ? true
                            : false
                        }
                        onChange={handleCheckboxChange}
                        disabled={options.readonly || options.disabled || false}
                      />
                    }
                    labelPlacement="start"
                    label={options.label}
                  />
                  {(values[options.name] === 1 ||
                    values[options.name] === "1") &&
                  options.info ? (
                    <div className="switch2Info">{options.info}</div>
                  ) : null}
                </div>
              );
              break;
            case "textarea":
              materail_element = (
                <TextField
                  variant="outlined"
                  size={options.size || "small"}
                  fullWidth
                  onChange={(e) => {
                    if (
                      validateInput(
                        e,
                        options.validate || "ANY",
                        values[options.name] || ""
                      )
                    ) {
                      inputHandler(e);
                    }
                  }}
                  required={options.required || false}
                  disabled={options.readonly || options.disabled || false}
                  id={options.name || "inp_id_" + i}
                  label={options.label}
                  name={options.name}
                  value={values[options.name] || ""}
                  multiline
                  rowsMax={3}
                />
              );
              break;
            case "captcha":
              materail_element = (
                <CardMedia
                  style={{ height: "40px", backgroundSize: "auto" }}
                  image={`data:image/png;base64,${values[options.name] || ""}`}
                  title="Captcha"
                />
              );
              break;
            case "autocomplete":
              // getAutoDefaultValue(options.options,options.autoVal[options.name],options.name)
              materail_element = (
                <Autocomplete
                  options={options?.options}
                  onChange={(e, newValue) => {
                    if (!newValue || typeof newValue === "string") {
                      newValue = { id: newValue, name: newValue };
                    }
                    setAutoVal({ ...autoVal, [options.name]: newValue.name });
                    inputHandler({
                      target: { name: options.name, value: newValue.id },
                    });
                  }}
                  disabled={options.readonly || options.disabled || false}
                  value={autoVal[options.name] || ""}
                  getOptionLabel={(option) => {
                    return typeof option === "string" ? option : option.name;
                  }}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label={options.label}
                      required={options.required || false}
                      variant="outlined"
                      size={options.size || "small"}
                      fullWidth
                    />
                  )}
                />
              );
              break;
            case "multiAutocomplete":
              materail_element = (
                <Autocomplete
                  multiple
                  limitTags={5}
                  disabled={options.readonly || options.disabled || false}
                  onChange={(e, newValue) => {
                    let vals = [];
                    newValue.forEach((item) => {
                      vals.push(Number(item.id));
                    });
                    inputHandler({
                      target: { name: options.name, value: vals },
                    });
                  }}
                  id="multiple-limit-tags"
                  options={options?.options}
                  getOptionLabel={(option) => {
                    return typeof option === "string" ? option : option.name;
                  }}
                  defaultValue={() =>
                    options?.options?.filter((item) => {
                      return values[options.name]?.includes(item.id);
                    })
                  }
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      variant="outlined"
                      required={options.required || false}
                      label={options.label}
                    />
                  )}
                />
              );
              break;
            default:
              break;
          }
          let size_chart = [12, 6, 4, 3];
          if (options.size || options.SIZE) {
            size = options.size || options.SIZE;
          }
          if (["xs", "sm"].indexOf(size) !== -1) {
            size_chart = [12, 12, 12, 12];
          } else if (size === "md") {
            size_chart = [12, 12, 6, 6];
          } else if (size === "lg") {
            size_chart = [12, 6, 4, 4];
          } else if (size === "xlg") {
            size_chart = [12, 6, 4, 3];
          }
          return options.type === "hidden" ? (
            materail_element
          ) : (
            <Grid
              item
              xs={size_chart[0]}
              sm={size_chart[1]}
              md={size_chart[2]}
              lg={size_chart[3]}
              key={`input_${i}`}
            >
              {materail_element}
            </Grid>
          );
        })}
        {children}
      </Grid>
    );
  }
};
export default FormBuilder;

export const Section = ({
  label,
  title,
  children,
  style,
  variant,
  ...rest
}) => {
  return (
    <React.Fragment>
      {title && (
        <Typography variant={variant || "h6"} style={{ marginBottom: "20px" }}>
          {title}
        </Typography>
      )}
      <FormControl
        component="fieldset"
        style={{
          border: "1px solid #c4c4c4",
          padding: "20px",
          borderRadius: "5px",
          width: "calc(100% - 50px)",
          margin: "0px",
          ...style,
        }}
        {...rest}
      >
        {label && (
          <FormLabel component="legend" style={{ padding: "0px 10px" }}>
            {label}
          </FormLabel>
        )}
        {children}
      </FormControl>
    </React.Fragment>
  );
};

export const MyTable = ({
  tableName,
  columns,
  rows,
  pagination,
  showEmptyImage,
  showCreateLine,
  onRowClick,
  ...rest
}) => {
  console.log(onRowClick)
  const [page, setPage] = React.useState(0);
 
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  if (
    !columns ||
    !rows ||
    typeof columns !== "object" ||
    typeof rows !== "object"
  ) {
    return (
      <ol>
        <li>columns : required and should be type of object.</li>
        <li>rows : required and should be type of Array of object.</li>
      </ol>
    );
  } else {
    return rows.length === 0 && showEmptyImage ? (
      <Box
        className="wh-100 flex-column flex-center"
        style={{ width: "100%", height: "100%" }}
      >
        <img src={empty_table} alt="empty_table" />
        <Typography
          variant="h6"
          sx={{ mt: 4, letterSpacing: 0 }}
          className="mt-30"
        >
          No {tableName || "Record"} Found.
        </Typography>
        {showCreateLine ? (
          <Typography variant="caption" className="mt-10">
            Create a new {tableName || "Record"} from the button on top.
          </Typography>
        ) : null}
      </Box>
    ) : (
      <Box className="fixed-table flex-column flex-start-end" style={{ width: "100%", height: "100%" }}>
        <TableContainer {...rest} className="table-container-default table-container" style={{ height: "calc(100% - 60px)" }}>
          <Table stickyHeader aria-label="table" size="small">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    className="tablehead-14-roboto border-bottom-tab"
                    key={column.id}
                   
                    align={column.align}
                    style={{ minWidth: column.minWidth, width: column.width }}
                  >
                    {column.format
                      ? column.format("label", column, true)
                      : column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {(pagination
                ? rows.slice(
                    page * rowsPerPage,
                    page * rowsPerPage + rowsPerPage
                  )
                : rows
              ).map((row, i) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code} onClick={ onRowClick ? (()=>{ onRowClick(row)}) : (()=>{})}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell
                          key={column.id}
                          align={column.align}
                          className="tablehead-14-roboto border-bottom-tab"
                        >
                          {column.id === "#"
                            ? i + 1
                            : column.format
                            ? column.format(column.id, row)
                            : value === undefined || value === ""
                            ? "--"
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
        {pagination && (
          <TablePagination
            rowsPerPageOptions={[5, 10, 20, 25, 50]}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onChangePage={handleChangePage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
          />
        )}
      </Box>
    );
  }
};
