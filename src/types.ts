export type RegisterValues = {
  email: string;
  password: string;
  password_confirm: string;
};

export type LoginValues = Omit<RegisterValues, "password_confirm">;
