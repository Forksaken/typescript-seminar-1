export type Payment =
  | { kind: 'card'; last4: string }
  | { kind: 'cash'; amount: number }
  | { kind: 'transfer'; iban: string };

export function describePayment(payment: Payment): string {
  switch (payment.kind) {
    case 'card':
      return `Card **** ${payment.last4}`;
    case 'cash':
      return `Cash: ${payment.amount}`;
    case 'transfer':
      return `Transfer: ${payment.iban}`;
    default: {
      const unreachable: never = payment;
      return unreachable;
    }
  }
}

export function total(payments: Payment[]): number {
  return payments.reduce((sum, payment) => {
    return payment.kind === 'cash' ? sum + payment.amount : sum;
  }, 0);
}
