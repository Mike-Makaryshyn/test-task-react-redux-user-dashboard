export interface AdditionInterface {
  profileViews: number;
  books: number;
  id: string;
}

export interface CategoriesInterface {
  id: number;
  text: string;
  completed: number;
  total: number;
  Icon: any;
}

export interface UserDashboardState {
  user: string;
  currentLevel: number;
  totalCompleted: number;
  additions: AdditionInterface[];
  categories: CategoriesInterface[];
  loading: "idle" | "pending";
}
