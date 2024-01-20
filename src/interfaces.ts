export interface Movie {
  episode_id: number;
  title: string;
  director: string;
  producer: string;
  release_date: string;
  opening_crawl: string;
}

export interface SelectedMovie {
  isSelected: boolean;
  movie?: Movie;
}