
import { useState } from "react";
import { players_dundee_1, players_dundee_2 } from "../../players/data/Players";
import type { Match } from "../../matches/model";
import type { EventType, MatchEvent } from "../model";
import { DisplayEvents } from "./DisplayEvents";
import { EventSelector } from "./EventSelector";
import { events } from "../data/events";
import { TrackEvent } from "./TrackEvent";
import type { Player } from "../../players/model";

export function Tracker({ match, minutes, seconds, team, handleEndMatch }: Readonly<{ match: Match; minutes: number; seconds: number; team: string; handleEndMatch: (results: MatchEvent[]) => void }>) {
    const [selectedEventId, setSelectedEventId] = useState<EventType | null>(null);
    const [eventsList, setEventsList] = useState<MatchEvent[]>([]);
    const players: Player[] = team === 'Dundee 1' ? players_dundee_1 : players_dundee_2;

    const handleSelectEvent = (eventId: any) => {
        setSelectedEventId(eventId);
    };

    const selectedEvent: EventType | undefined = events.find(
        event => event === selectedEventId
    );
    return (
        <div>
        <h2>{match.team} VS {match.opponent}</h2>
        <h3>Date: {match.date.toDateString()}</h3>
        <EventSelector events={events}  onSelect={handleSelectEvent} />
            {selectedEvent ? (
            <p>
            Selected: <strong>{selectedEvent}</strong>
            <TrackEvent players={players} eventType={selectedEvent} setEventsList={setEventsList} unselectPlayer={() => setSelectedEventId(null)} minutes={minutes} seconds={seconds} />
            </p>
            ) : (
            <p>Select an event to record.</p>
            )}
        <DisplayEvents events={eventsList} players={players} />
        <button onClick={() => handleEndMatch(eventsList)}>End Match</button>
        </div>
    );
}