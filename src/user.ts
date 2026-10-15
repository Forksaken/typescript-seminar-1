export type User = {
  name: string;
  age?: number;
  hobbies: string[];
  contact: { email: string } | { phone: string };
};

export function describeUser(user: User): string {
  const age = user.age === undefined ? 'Age not specified' : `Age: ${user.age}`;
  const hobbies = user.hobbies.length === 0
    ? 'Hobbies not specified'
    : `Hobbies: ${user.hobbies.join(', ')}`;
  const contact = 'email' in user.contact
    ? `Email: ${user.contact.email}`
    : `Phone: ${user.contact.phone}`;

  return `${user.name}. ${age}. ${hobbies}. ${contact}`;
}
