const { schedules } = require("./schedules");
const ics = require("ics");
const fs = require("fs");

const events = schedules().map((schedule) => {
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
    location: "RUH",
    geo: { lat: 52.13118, lon: -106.640457 },
    url: "https://sask.staffscheduling.ca/api/v1/schedule-calendar/me",
  };
});

const { error, value } = ics.createEvents(events);

fs.writeFile("event.ics", value, (err) => {
  if (err) {
    console.log("Error writing file:", err);
  } else {
    console.log("File written successfully");
  }
});
