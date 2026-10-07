import type { PlayerId } from '../players/model';

export type MatchId = string;

export interface Match {
  id: MatchId;
  team: string;
  opponent: string;
  date: Date;
  playerIds: PlayerId[];
}