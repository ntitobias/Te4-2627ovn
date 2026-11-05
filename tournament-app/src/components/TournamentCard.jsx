export function TournamentCard({ title, date, logo, status }) {
  return (
    <div style={{ border: "1px solid #ccc", borderRadius: "8px", padding: "16px", margin: "10px" }}>
      <div style={{ fontSize: "2rem" }}>{logo}</div>
      <h3>{title}</h3>
      <p>Sista anmälan: {date}</p>
      <span style={{ background: "#e0e0e0", padding: "4px 8px", borderRadius: "4px" }}>
        {status}
      </span>
    </div>
  );
}