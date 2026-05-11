export interface User {
  id: string;
  email: string;
  name: string;
}

export interface Data {
  id: string;
  email: string;
  name: string;
}

export interface Comment {
  id: string;
  content: string;
  user: User;
}

export interface Blog {
  id: string;
  title: string;
  content: string;
  published: boolean;
  createdAt: string;

  author: {
    name: string;
    email: string;
  };

  comments: {
    id: string;
    content: string;
  }[];

  likes: any[];

  _count: {
    comments: number;
    likes: number;
  };
}
