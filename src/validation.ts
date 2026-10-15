export interface IFormData {
  username: string;
  email: string;
  age: number;
}

export type FormErrors = { [K in keyof IFormData]?: string };

type Rules = {
  [K in keyof IFormData]: (value: IFormData[K]) => boolean;
};

export const rules: Rules = {
  username: value => value.trim().length >= 3,
  email: value => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value),
  age: value => Number.isInteger(value) && value >= 18
};

export function validateForm(data: IFormData): FormErrors {
  const errors: FormErrors = {};

  if (!rules.username(data.username)) {
    errors.username = `Wrong username: ${data.username}`;
  }
  if (!rules.email(data.email)) {
    errors.email = `Wrong email: ${data.email}`;
  }
  if (!rules.age(data.age)) {
    errors.age = `Invalid age: ${data.age}`;
  }

  return errors;
}
