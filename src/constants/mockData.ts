import { v4 as uuidv4 } from "uuid";

import coursesIcon from "../assets/icons/category_courses_icon.svg";
import foldersIcon from "../assets/icons/category_folder_icon.svg";
import booksIcon from "../assets/icons/category_books_icon.svg";

export const additions = [
  { id: uuidv4(), profileViews: 2830, books: 13 },
  { id: uuidv4(), profileViews: 2130, books: 7 },
  { id: uuidv4(), profileViews: 1830, books: 5 },
];

export const categories = [
  {
    id: 1,
    text: "Courses completed",
    completed: 11,
    total: 15,
    Icon: coursesIcon,
  },
  {
    id: 2,
    text: "Folders add",
    completed: 6,
    total: 10,
    Icon: foldersIcon,
  },
  {
    id: 3,
    text: "Books read",
    completed: 7,
    total: 19,
    Icon: booksIcon,
  },
];
