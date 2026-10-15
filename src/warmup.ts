export const username: string = 'Alex';
export const age: number = 20;
export const isStudent: boolean = true;
export const scores: number[] = [8, 9, 10];

export function printScore(score: number): string {
  return `Балл: ${score}`;
}

export function getDisplayName(name: string | null): string {
  return name ?? 'Guest';
}
