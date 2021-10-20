function getDayName(date, miliseconds) {
  let weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thrusday",
    "Friday",
    "Saturday",
  ];

  const email_date = new Date(date.toLocaleDateString());
  const today_date = new Date(new Date().toLocaleDateString());
  const difference = today_date - email_date;
  if (difference === 0) return "Today";
  if (difference === 86400000) return "Yesterday";
  return weekday[date.getDay()];
}

export const getDayTime = (timestamp) => {
  // console.log(timestamp);
  // if (timestamp === null) return;
  let total_miliseconds =
    (timestamp.seconds + timestamp.nanoseconds * 0.00000001) * 1000;
  let date = new Date(total_miliseconds);
  let diff = Math.abs(new Date() - date);
  return {
    day: getDayName(date, diff),
    time: date.toLocaleTimeString(),
    date: date.toLocaleDateString(),
  };
};
