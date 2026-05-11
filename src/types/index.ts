export interface Comment {
  id: number;
  username: string;
  text: string;
}

export interface Blog {
  id: number;
  title: string;
  content: string;
  image: string;
  likes: number;
  published: boolean;
  comments: Comment[];
}
