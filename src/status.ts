export type Status = 'idle' | 'loading' | 'success' | 'error';

export function assertNever(value: never): never {
  throw new Error(`Unknown status: ${value}`);
}

export function statusMessage(status: Status): string {
  switch (status) {
    case 'idle':
      return 'Waiting';
    case 'loading':
      return 'Loading';
    case 'success':
      return 'Done';
    case 'error':
      return 'Error';
    default:
      return assertNever(status);
  }
}
