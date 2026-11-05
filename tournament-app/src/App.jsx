import { TournamentCard } from "./components/TournamentCard";

const mockTournaments = [
  { id: 1, title: "Te4 Valorant Masters", date: "2026-11-20", logo: "🎮", status: "Öppen" },
  { id: 2, title: "Skolmästerskap i Schack", date: "2026-12-05", logo: "♟️", status: "Kommande" },
  { id: 3, title: "Fifa/EA FC Turnering", date: "2026-11-15", logo: "⚽", status: "Stängd" }
];

export default function App() {
  return (
    <main style={{ maxWidth: "800px", margin: "0 auto", padding: "20px" }}>
      <h1>Turneringsplattformen</h1>
      <h2>Aktuella Turneringar</h2>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "15px" }}>
        {mockTournaments.map((tournament) => (
          <TournamentCard 
            key={tournament.id}
            title={tournament.title}
            date={tournament.date}
            logo={tournament.logo}
            status={tournament.status}
          />
        ))}
      </div>
    </main>
  );
}