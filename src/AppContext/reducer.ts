export interface User {
  email: string;
  password: string;
}

export interface AppState {
  loading: boolean;
  status: boolean;
  user: User | null;
}

export type AppAction =
  | { type: "SET_LOADING"; payload: boolean }
  | { type: "SET_STATUS"; payload: boolean }
  | { type: "SET_USER"; payload: User | null };

export const initialState: AppState = {
  loading: true,
  status: false,
  user: null,
};

console.log(initialState,"initial")
export const appReducer = (state: AppState, action: AppAction): AppState => {
  switch (action.type) {
    case "SET_LOADING":
      return { ...state, loading: action.payload };
    case "SET_STATUS":
      return { ...state, status: action.payload };
    case "SET_USER":
      return { ...state, user: action.payload };
    default:
      return state;
  }
};
