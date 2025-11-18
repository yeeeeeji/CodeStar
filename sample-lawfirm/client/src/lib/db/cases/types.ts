import { Timestamp } from "firebase/firestore";

export interface Cases {
  category: string;
  title: string;
  content: string;
  createdAt: Timestamp;
}
