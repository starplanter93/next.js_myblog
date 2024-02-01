export interface Post {
  title: string;
  description: string;
  date: Date;
  category: string;
  path: string;
  featured: boolean;
}

export interface PostData extends Post {
  content: string;
  next: Post | null;
  prev: Post | null;
}

export interface Form {
  from: string;
  subject: string;
  message: string;
}

export interface BannerData {
  message: string;
  state: 'success' | 'error';
}
