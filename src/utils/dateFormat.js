export const dateFormat = (date) => {
  //   format date to 10/11/2019
  return new Date(date).toLocaleDateString("id-ID", {
    year: "numeric",
    month: "short",
    day: "2-digit",
  })
}
