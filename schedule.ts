import { schedules } from "./schedules";
import { createEvents } from "ics";
import type { EventAttributes } from "ics";
import { writeFile } from "fs";

const events = schedules.map((schedule) => {
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
  } satisfies EventAttributes;
});

const { value } = createEvents(events);

writeFile("event.ics", value as string, (err) => {
  if (err != null) {
    console.error("Error writing file:", err);
  } else {
    console.log("File written successfully");
  }
});
