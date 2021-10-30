import { Count } from "./count";
import { Image } from "./image";
import { User } from "./user";

export interface Post {
  id: number;
  title: string;
  content: string;
  createdAt: string;
  updatedAt: any;
  userId: number;
  images: Image[];
  likes: any[];
  user: User;
  _count: Count;
}
