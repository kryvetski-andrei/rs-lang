export const getDaysInMonth = () => {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const daysInMonth = (new Date(year, month, 0).getDate());

  return {
    year,
    month,
    daysInMonth,
  }
}

export const generateChartDaysPoints = () => {
  const {year, month, daysInMonth} = getDaysInMonth();
  return Array.from(Array(daysInMonth).keys()).map(day => (day + 1).toString().padStart(2, '0'))
}

