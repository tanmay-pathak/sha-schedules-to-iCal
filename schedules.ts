interface Schedule {
  start_timestamp: string;
  display_str: string;
  shift_class: string;
  shift_icon: string;
  payroll_code: number;
  department: number;
  employee: number;
  date: string;
  duration_hours: number;
  end_timestamp: string;
  id: number;
  occupation: number;
}

export const schedules: Schedule[] = [];
