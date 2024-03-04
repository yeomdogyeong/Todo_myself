export interface TodoType {
  id: number;
  text: string;
  completed: boolean;
}

export interface ButtonTypeVoid {
  onDo: () => void;
}
