export default function convertDateToString(date: string): string {
  let event = new Date(date)
  let dateToString = event.toString();
  let returnDate = dateToString.split(" ").slice(1, 4);
  return returnDate.join(" ");
}
