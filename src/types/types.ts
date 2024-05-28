export type PostProps = {
  id: number;
  title: string;
  body: string;
};

export type UserType = {
  sessionId: number;
  name: string;
};

export type StateType = {
  theme: string;
  fontSize: 16;
};

export type ActionType = {
  type: "CHANGE_THEME" | "CHANGE_FONTSIZE";
  payload: number;
};
