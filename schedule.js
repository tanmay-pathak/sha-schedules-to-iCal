const ics = require("ics");
const fs = require("fs");
const dates = [
  {
    startDate: "2023-11-25T13:30:00+00:00",
    endDate: "2023-11-26T01:47:00+00:00",
  },
];

const startDate = new Date(dates[0].startDate);
const endDate = new Date(dates[0].endDate);

ics.createEvent(
  {
    start: [
      startDate.getUTCFullYear(),
      startDate.getUTCMonth() + 1,
      startDate.getUTCDate(),
      startDate.getUTCHours(),
      startDate.getUTCMinutes(),
    ],
    title: "Shift",
    end: [
      endDate.getUTCFullYear(),
      endDate.getUTCMonth() + 1,
      endDate.getUTCDate(),
      endDate.getUTCHours(),
      endDate.getUTCMinutes(),
    ],
  },
  (error, value) => {
    if (error) {
      console.log(error);
    }

    fs.writeFile("event.ics", value, (err) => {
      if (err) {
        console.log("Error writing file:", err);
      } else {
        console.log("File written successfully");
      }
    });
    console.log(value);
  }
);
