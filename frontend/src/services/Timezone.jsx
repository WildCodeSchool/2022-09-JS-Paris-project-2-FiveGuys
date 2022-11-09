function Timezone(timezone) {
  const current = new Date();
  const currentHour = current.getHours() + timezone;
  return currentHour > 24
    ? `${(currentHour - 24).toString().padStart(2, "0")}h${current
        .getMinutes()
        .toString()
        .padStart(2, "0")}`
    : `${currentHour}H${current.getMinutes().toString().padStart(2, "0")}`;
}
export default Timezone;
