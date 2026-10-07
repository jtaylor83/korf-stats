import type { EventType, GoalType } from "../model";

export const events: EventType[] = [
  'goal',
  'miss',
  'attacking rebound',
  'defensive rebound',
  'turnover',
  'foul',
  'yellow card',
  'red card',
];

export const goalTypes: GoalType[] = [
    'runner',
    'penalty',
    'free pass',
    'long shot',
    'other',
];