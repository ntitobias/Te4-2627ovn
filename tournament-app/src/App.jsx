import "./App.css";
import { TournamentCard } from "./components/TournamentCard";

// Mock-data som simulerar svar från en framtida PHP-backend
const mockTournaments = [
  
  { id: 1, title: "Programmeringsolympiaden", date: "2026-11-20", logo: "</>;", status: "Öppen" },
  { id: 2, title: "Skolmästerskap i Schack", date: "2026-12-05", logo: "♟️", status: "Kommande" },
  { id: 3, title: "Fifa/EA FC Turnering", date: "2026-11-15", logo: "⚽", status: "Stängd" },
  { id: 4, title: "Te4 Valorant Masters", date: "2026-11-20", logo: "🎮", status: "Öppen" }

];

export default function App() {
  return (
    <main className="container">
      <h1>Turneringsplattformen</h1>
      <h2>Aktuella Turneringar</h2>
      
      <div className="tournament-grid">
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
