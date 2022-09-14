const today = new Date().toISOString().split("T")[0];
const tomorrow = new Date(today);
tomorrow.setDate(tomorrow.getDate() + 1);

start_date.value = today;
end_date.value = tomorrow.toISOString().split("T")[0];

start_date.min = today;
end_date.min = tomorrow.toISOString().split("T")[0];

totalPerNight.textContent = nightPrice.textContent;

function priceCalculator() {
  let start = new Date(start_date.value).getTime();
  let end = new Date(end_date.value).getTime();
  const timeMilliSeconds = end - start;
  const timeDay = timeMilliSeconds / (1000 * 60 * 60 * 24);
  totalPerNight.textContent = nightPrice.textContent * timeDay;
}

start_date.addEventListener("change", () => {
  let start = new Date(start_date.value);
  let end = new Date(start_date.value);

  if (end_date.value <= start_date.value) {
    end.setDate(start.getDate() + 1);
    end_date.value = end.toISOString().split("T")[0];
  }
  priceCalculator();
});

end_date.addEventListener("change", () => {
  let start = new Date(end_date.value);
  let end = new Date(end_date.value);

  if (end_date.value <= start_date.value) {
    start.setDate(end.getDate() - 1);
    start_date.value = start.toISOString().split("T")[0];
  }
  priceCalculator();
});
