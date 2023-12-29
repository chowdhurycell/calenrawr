// script.js
document.addEventListener('DOMContentLoaded', function () {
  const calendar = document.getElementById('calendar');
  const months = ['SEPTEMBER', 'OCTOBER', 'NOVEMBER', 'DECEMBER']; // Add more months as needed

  months.forEach(month => {
    const monthContainer = document.createElement('div');
    monthContainer.classList.add('month');

    // Create the dates-grid container and add it to the month container
    const datesGrid = document.createElement('div');
    datesGrid.classList.add('dates-grid');
    monthContainer.appendChild(datesGrid);

    const totalDays = 31; // Change this based on the month

    for (let day = 1; day <= totalDays; day++) {
      const dateElement = document.createElement('div');
      dateElement.classList.add('date');

      // Check if an image should be displayed on this date (modify the condition as needed)
      const shouldDisplayImage = day === 2 || day === 15 || day === 5|| day === 21|| day === 25|| day === 20;

      if (shouldDisplayImage) {
        const image = document.createElement('img');
        // Assuming images are named in the format "month_day.jpg" (e.g., January_1.jpg)
        image.src = `images/${month}_${day}.jpg`;
        image.alt = `${month} ${day}`;
        dateElement.appendChild(image);
      }

      dateElement.addEventListener('click', function () {
        alert(`Clicked on ${month} ${day}`);
        // Add logic to display pictures or perform actions on date click
      });

      // Add the dateElement to the dates-grid container
      datesGrid.appendChild(dateElement);
    }

    // Add the monthContainer to the calendar
    calendar.appendChild(monthContainer);
  });
});
