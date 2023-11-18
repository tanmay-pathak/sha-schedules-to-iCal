const ics = require("ics");
const fs = require("fs");

const schedules = [{
  "start_timestamp": "2023-11-14T13:30:00+00:00",
  "display_str": "RN 2023-11-14 07:30:00-19:47:00 956R215",
  "shift_class": "Day",
  "shift_icon": "DX",
  "payroll_code": 66,
  "department": 4166,
  "employee": 6195234,
  "date": "2023-11-14",
  "duration_hours": 11.78,
  "end_timestamp": "2023-11-15T01:47:00+00:00",
  "id": 1428702234,
  "occupation": 398
}]

const events = schedules.map(schedule => {
  const startDate = new Date(schedule.start_timestamp);
  const endDate = new Date(schedule.end_timestamp);
  const shiftTitle = schedule.shift_class;
    return {
      startInputType: "utc",
      start: [
        startDate.getUTCFullYear(),
        startDate.getUTCMonth() + 1,
        startDate.getUTCDate(),
        startDate.getUTCHours(),
        startDate.getUTCMinutes(),
      ],
      title: shiftTitle,
      endInputType: "utc",
      end: [
        endDate.getUTCFullYear(),
        endDate.getUTCMonth() + 1,
        endDate.getUTCDate(),
        endDate.getUTCHours(),
        endDate.getUTCMinutes(),
      ],
    }
})

const {error, value} = ics.createEvents(events)

fs.writeFile("event.ics", value, (err) => {
        if (err) {
          console.log("Error writing file:", err);
        } else {
          console.log("File written successfully");
        }
      });
