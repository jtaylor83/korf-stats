import type { Player, PlayerId } from '../model';
import './PlayerSelector.css';

interface PlayerSelectorProps {
  players: Player[];
  selectedPlayerId: PlayerId | undefined;
  onSelect: (playerId: PlayerId) => void;
}

export function PlayerSelector({
  players,
  selectedPlayerId,
  onSelect,
}: Readonly<PlayerSelectorProps>) {
  return (
    <section id="player-selector">
      <h2>Select player</h2>

      <div className="player-grid">
        {players.map(player => {
          const isSelected =
            player.id === selectedPlayerId;

          return (
            <button
              key={player.id}
              type="button"
              onClick={() => onSelect(player.id)}
              aria-pressed={isSelected}
              className={
                isSelected
                ? 'player-card player-card--selected'
                : 'player-card'
              }
            >
            <span className="player-card__number">
                #{player.number}
            </span>
            <span className="player-card__name">{player.name}</span>
            {isSelected && ' ✓'}
            </button>
          );
        })}
      </div>
    </section>
  );
}