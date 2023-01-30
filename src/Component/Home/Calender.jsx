import React from 'react'
import dayjs from 'dayjs';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import { Button } from '@mui/material';

const isWeekend = (date) => {
  const day = date.day();

  return day === 0 || day === 6;
};
const Calender = ({handleClose}) => {
    const [value, setValue] = React.useState(dayjs('2022-04-07'));
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
    <StaticDatePicker
      orientation="horizontal"
      openTo="day"
      componentsProps={{
        actionBar: {
          actions: [""],
        },
      }}
      value={value}
      shouldDisableDate={isWeekend}
      onChange={(newValue) => {
        setValue(newValue);
      }}
      renderInput={(params) => <TextField {...params} />}
    />
    <Button onClick={handleClose}>ok</Button>
  </LocalizationProvider>
  )
}

export default Calender