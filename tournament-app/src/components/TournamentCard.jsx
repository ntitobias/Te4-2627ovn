// src/components/TournamentCard.jsx

export function TournamentCard({ title, date, logo, status }) {
  // Gör om statusen till små bokstäver för att matcha CSS-klassen (t.ex. "Öppen" -> "oppen")
  const statusClass = status.toLowerCase().replace("ö", "o");

  return (
    <div className="tournament-card">
      <div>
        <div className="tournament-logo">{logo}</div>
        <h3 className="tournament-title">{title}</h3>
        <p className="tournament-date">Sista anmälan: {date}</p>
      </div>
      <span className={`status-badge ${statusClass}`}>
        {status}
      </span>
    </div>
  );
}
