const today = new Date().toISOString().split("T")[0];
const tomorrow = new Date(today);
tomorrow.setDate(tomorrow.getDate() + 1);

start_date.value = today;
end_date.value = tomorrow.toISOString().split("T")[0];
