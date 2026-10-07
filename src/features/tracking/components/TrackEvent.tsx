import { useState } from "react";
import type { EventType, GoalType, MatchEvent } from "../model";
import type { Player, PlayerId } from "../../players/model";
import './TrackEvent.css';
import { PlayerSelector } from "../../players/components/PlayerSelector";
import { EventSelector } from "./EventSelector";
import { goalTypes } from "../data/events";

export function TrackEvent({players, eventType, setEventsList, unselectPlayer, minutes, seconds}: Readonly<{players: Player[]; eventType: EventType; setEventsList: React.Dispatch<React.SetStateAction<MatchEvent[]>>; unselectPlayer: () => void; minutes: number; seconds: number}>) {

    const [playerId, setPlayerId] = useState<PlayerId>();
    const [goalType, setGoalType] = useState<GoalType>();

    const handleEventSubmit = () => {
        if (!playerId || (eventType === 'goal' && !goalType)) {
            alert('Please select a player and goal type.');
            return;
        }

        const newEvent = {
            id: '1',
            type: eventType,
            playerId: playerId,
            goalType: goalType,
            timestamp: minutes * 60 + seconds,
        }
        setEventsList(prevEvents => [...prevEvents, newEvent]);
        unselectPlayer();
    };
    return (
        <div className="track-event-backdrop">
            <div className="track-event-modal">
                <header className="track-event-modal__header">
                <div className="track-event-modal__player">
                    <span className="track-event-modal__name">
                    {eventType}
                    </span>

                    <span className="track-event-modal__hint">
                        Record event
                    </span>
                </div>

                <button
                    className="modal-close"
                    type="button"
                    aria-label="Close"
                    onClick={() => {
                        unselectPlayer();
                    }}
                >
                    ×
                </button>
                </header>

                <div className="event-grid">
                <PlayerSelector players={players} selectedPlayerId={playerId} onSelect={(id) =>setPlayerId(id)} />

                {eventType === 'goal' && (
                    <EventSelector events={goalTypes} onSelect={(eventId) => setGoalType(eventId)} highlightOnSelect={true} />
                )}
                
                </div>
                <button onClick={() => handleEventSubmit()} className="event-grid__button" type="button">
                        Submit
                </button>
            </div>
        </div>
    );
}