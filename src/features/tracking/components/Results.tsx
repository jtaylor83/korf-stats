import type { Player } from "../../players/model";
import type { MatchEvent, PlayerStats } from "../model";
import './Results.css';

export const Results = ({results, players}: {results: MatchEvent[]; players: Player[]}) => {
    const playerResults: PlayerStats[] = players.map(player => {
        const playerEvents = results.filter(event => event.playerId === player.id);
        const goals = playerEvents.filter(event => event.type === 'goal').length;
        const misses = playerEvents.filter(event => event.type === 'miss').length;
        const attackingRebounds = playerEvents.filter(event => event.type === 'attacking rebound').length;
        const defensiveRebounds = playerEvents.filter(event => event.type === 'defensive rebound').length;
        const turnovers = playerEvents.filter(event => event.type === 'turnover').length;
        const fouls = playerEvents.filter(event => event.type === 'foul').length;
        const yellowCards = playerEvents.filter(event => event.type === 'yellow card').length;
        const redCards = playerEvents.filter(event => event.type === 'red card').length;
        const shotPercentage = goals + misses > 0 ? (goals / (goals + misses)) * 100 : 0;

        return {
            playerId: player.id,
            goals,
            misses,
            attackingRebounds,
            defensiveRebounds,
            turnovers,
            fouls,
            yellowCards,
            redCards,
            shotPercentage,
        };
    });

    return (
        <div className="results">
            <h2>Match Results</h2>
            <p>Here you can view the stats and result of the match.</p>
            <p>table:</p>
            <table>
                <thead>
                    <tr>
                        <th>Player</th>
                        <th>Goals</th>
                        <th>Misses</th>
                        <th>Attacking Rebounds</th>
                        <th>Defensive Rebounds</th>
                        <th>Turnovers</th>
                        <th>Fouls</th>
                        <th>Yellow Cards</th>
                        <th>Red Cards</th>
                        <th>Shot Percentage</th>
                    </tr>
                </thead>
                <tbody>
                    {playerResults.map((result) => (
                        <tr key={result.playerId}>
                            <td>{players.find(p => p.id === result.playerId)?.name}</td>
                            <td>{result.goals}</td>
                            <td>{result.misses}</td>
                            <td>{result.attackingRebounds}</td>
                            <td>{result.defensiveRebounds}</td>
                            <td>{result.turnovers}</td>
                            <td>{result.fouls}</td>
                            <td>{result.yellowCards}</td>
                            <td>{result.redCards}</td>
                            <td>{result.shotPercentage.toFixed(2)}%</td>
                        </tr>
                    ))}
                </tbody>
            </table>            
        </div>
    );
}