export const dateFormatter = date => {
  const dateToBeFormatted = new Date(date)
  const day = dateToBeFormatted.getUTCDate()
  const month = dateToBeFormatted.getMonth()
  const year = dateToBeFormatted.getFullYear()
  const dateFormatted = `${day}/${month}/${year}`
  return dateFormatted
}
