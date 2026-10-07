import type { Player } from "../../players/model";
import type { MatchEvent } from "../model";

export function DisplayEvents({ events, players }: Readonly<{ events: MatchEvent[]; players: Player[] }>) {
  return (
    <section>
      <h2>Match events</h2>
      <ul>
        {events.map(event => {
          const player = players.find(p => p.id === event.playerId);
          return (
            <li key={event.id}>
              {player ? (
                <>
                    <strong>{player.name}</strong> {event.type}{event.goalType && ` (${event.goalType})`} at{' '}
                    {Math.floor(event.timestamp / 60)}:{String(event.timestamp % 60).padStart(2, '0')}
                </>
              ) : (
                <em>Unknown player</em>
                )} 
            </li> 
            );
        })}
      </ul>
    </section>
  );
}