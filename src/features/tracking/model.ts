import type { PlayerId } from '../players/model';

export type EventType = 'goal' | 'miss' | 'attacking rebound' | 'defensive rebound' | 'turnover' | 'foul' | 'yellow card' | 'red card';

export type GoalType = 'runner' | 'penalty' | 'free pass' | 'long shot' | 'other';

export type MatchEvent =
{
   id: string;
   type: EventType;
   playerId: PlayerId;
   timestamp: number;
   goalType?: GoalType;
}

export type PlayerStats = {
   playerId: PlayerId;
   goals: number;
   misses: number;
   attackingRebounds: number;
   defensiveRebounds: number;
   turnovers: number;
   fouls: number;
   yellowCards: number;
   redCards: number;
   shotPercentage: number;
}
