const toggleBtn = document.getElementById('toggleTheme');

function setThemeByTime() {
  const hour = new Date().getHours();
  if (hour >= 18 || hour < 6) {
    document.body.classList.add('dark');
  } else {
    document.body.classList.remove('dark');
  }
}

toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark');
});

setThemeByTime();

const currentWeather = document.querySelector('.current-weather');

currentWeather.addEventListener('click', () => {
  currentWeather.classList.toggle('active');
});

document.getElementById('feels-like').textContent = `${feelsLike}°C`;
document.getElementById('humidity').textContent = `${humidity}%`;
document.getElementById('condition').textContent = conditionDescription;
