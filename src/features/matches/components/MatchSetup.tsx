import {useState} from 'react';
import type { Match } from '../model';
import { Tracker } from '../../tracking/components/Tracker';
import { players_dundee_1, players_dundee_2 } from '../../players/data/Players';
import { useStopwatch } from 'react-timer-hook';
import './MatchSetup.css';
import type { MatchEvent } from '../../tracking/model';
import { Results } from '../../tracking/components/Results';

export function MatchSetup() {
    const [match, setMatch] = useState<Match | null>(null);
    const [team, setTeam] = useState<string>('Dundee 1');
    const [opponent, setOpponent] = useState<string>('');
    const [date, setDate] = useState<Date>();
    const [results, setResults] = useState<MatchEvent[]>([]);

    const handleStartMatch = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        if (!opponent) {
            alert('Please enter an opponent name.');
            return;
        }
        console.log(e)
        const players = team === 'Dundee 1' ? players_dundee_1 : players_dundee_2
        // Implementation for starting the match
        const newMatch: Match = {
            id: '1',
            opponent: opponent,
            date: date || new Date(),
            playerIds: players.map(player => player.id),
            team: team,
        };
        setResults([]);
        setMatch(newMatch);
        start();
    };

    const handleEndMatch = (results: MatchEvent[]) => {
        // Implementation for ending the match
        setResults(results);
        setMatch(null);
        reset();
    };

    const { seconds, minutes, isRunning, start, pause, reset } = useStopwatch({ autoStart: false });

    return (<>
        <div className="match-setup" hidden={!!match}>
            <h2>Match Setup</h2>
            <form className="form-field" hidden={!!match}>
                <input required type="text" placeholder="Opponent" onChange={(e) => setOpponent(e.target.value)} />
                <label htmlFor="team-select">Select Team:</label>
                <select value={team} onChange={(e) => setTeam(e.target.value)} id="team-select">
                    <option value="Dundee 1">Dundee 1</option>
                    <option value="Dundee 2">Dundee 2</option>
                </select>
                <input type="date" onChange={(e) => setDate(new Date(e.target.value))} />
                <button type="button" onClick={handleStartMatch}>
                    start match
                </button>
            </form>
        </div>
        {match && (<>
            <span>{minutes}</span>:<span>{(seconds).toString().padStart(2, '0')}</span>
            {isRunning && (<button onClick={pause}>Pause</button>)}
            {!isRunning && (<button onClick={start}>Resume</button>)}
         <Tracker match={match} minutes={minutes} seconds={seconds} team={team} handleEndMatch={(results) => handleEndMatch(results)} />
         </>)}
         {results.length > 0 && (<Results results={results} players={team === 'Dundee 1' ? players_dundee_1 : players_dundee_2} />)}
    </>    
    );
}