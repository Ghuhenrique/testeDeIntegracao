
const API_URL = "https://calendarific.com/api/v2/holidays?country=br";
const API_KEY = "NBR7HojZkHGhxeBvgBjzxfmeLjmy1iF9";


function getApiData(year){
  return fetch(API_URL + "&year=" + year + "&api_key=" + API_KEY);
}

function findHoliday(date, holidays) {
  const dateStr = date.toISOString().split('T')[0]; // Formata a data como "YYYY-MM-DD"
  return holidays.some(holiday => holiday.date.iso === dateStr);
}

async function isHoliday(date) {
  try {
    const year = date.getUTCFullYear();
    const response = await getApiData(year);
    const data = await response.json();
    const holidays = data?.response?.holidays;
    return findHoliday(date, holidays);
  } catch (error) {
    console.error("Erro ao obter dados da API:", error);
    return false;
  }
}

module.exports = isHoliday;