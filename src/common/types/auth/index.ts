import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

export interface UserData {
  firstName: string;
  email: string;
  password: string;
  confirmPassword: string;
  userName: string;
}

export interface IPropsLogin<
  TFieldValues extends FieldValues = FieldValues,
  TContext = any
> {
  navigate: (to: string) => void;
  register: UseFormRegister<TFieldValues>;
  errors: FieldErrors<TFieldValues>;
  loading: boolean;
}

export interface IPropsRegister<
  TFieldValues extends FieldValues = FieldValues,
  TContext = any
> {
  navigate: (to: string) => void;
  register: UseFormRegister<TFieldValues>;
  errors: FieldErrors<TFieldValues>;
  loading: boolean;
}

export interface IAuthState {
  user: {
    user: IPublicUser;
    token: string;
  };
  isLogged: boolean;
  isLoading: boolean;
}

export interface IPublicUser {
  id: number | null;
  firstName: string;
  userName: string;
  email: string;
  createdAt: string;
  updatedAt: string;
  watchlist: [IWatchlist];
}

interface IWatchlist {
  id: number | null;
  name: string;
  assetId: string;
  createdAt: string;
  updatedAt: string;
  user: number | null;
}

export interface ILoginData {
  email: string;
  password: string;
}

export interface IRegisterData {
  email: string;
  password: string;
  firstName: string;
  userName: string;
}
