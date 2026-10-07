import './EventSelector.css';
import type { EventType, GoalType } from '../../tracking/model';
import { useState } from 'react';

interface EventSelectorProps {
  events: EventType[] | GoalType[];
  onSelect: (eventId: any) => void;
  highlightOnSelect?: boolean;
}

export function EventSelector({
  events,
  onSelect,
  highlightOnSelect = false,
}: Readonly<EventSelectorProps>) {
  const [selectedEventId, setSelectedEventId] = useState<any>(null);

  return (
    <section id="player-selector">
      <h2>Select event</h2>
      <div className="player-grid">
        {events.map(event => {

          return (
            <button
              key={event}
              type="button"
              onClick={() => {
                onSelect(event);
                setSelectedEventId(event);
              }}
              className={
                selectedEventId === event && highlightOnSelect
                  ? 'player-card player-card--selected'
                  : 'player-card'
              }
            >
            <span className="player-card__number">
                {event}
            </span>
            </button>
          );
        })}
      </div>
    </section>
  );
}