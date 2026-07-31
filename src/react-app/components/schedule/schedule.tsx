import "./schedule.css";

function Schedule() {
  const openingHours = [
    { day: "Mandag", hours: "LUKKET" },
    { day: "Tirsdag", hours: "17.30-19.00" },
    { day: "Onsdag", hours: "LUKKET" },
    { day: "Torsdag", hours: "17.30-19.00" },
    { day: "Fredag", hours: "LUKKET" },
    { day: "Lørdag", hours: "10.00-12.00" },
    { day: "Søndag", hours: "LUKKET" },
  ];

  return (
    <div className="schedule-container">
      <h2 className="schedule-title">Åbningstider</h2>
      <ul className="schedule-list">
        {openingHours.map((item) => (
          <li key={item.day} className="schedule-item">
            <span>{item.day}</span>
            <span>{item.hours}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Schedule;
