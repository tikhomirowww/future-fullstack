export type RegisterValues = {
  email: string;
  password: string;
  password_confirm: string;
};

export type LoginValues = Omit<RegisterValues, "password_confirm">;

export interface ProfileType extends RegisterValues {
  name: string;
  lastName: string;
  city: string;
  avatar: string;
}
