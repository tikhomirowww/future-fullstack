export type RegisterValues = {
  email: string;
  password: string;
  password_confirm: string;
};

export type LoginValues = Omit<RegisterValues, "password_confirm">;

export interface ProfileType {
  id: number;
  email: string;
}

export type CategoryType = {
  title: string;
  id: number;
};

export type ProductType = {
  id: number;
  title: string;
  description: string;
  price: string;
  image: string;
  category: CategoryType;
  author: string;
  reviews: any[];
  likes: number;
  is_author: boolean;
  liked_by_user: boolean;
  favorite_by_user: boolean;
};
