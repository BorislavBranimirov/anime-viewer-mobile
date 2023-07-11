export interface IApiAnime {
  mal_id: number;
  url: string;
  images: {
    jpg: {
      image_url: string;
      small_image_url: string;
      large_image_url: string;
    };
    webp: {
      image_url: string;
      small_image_url: string;
      large_image_url: string;
    };
  };
  title: string;
  episodes?: number;
  airing: boolean;
  score?: number;
  rank: number;
  favorites: number;
  synopsis?: string;
  year?: number;
  studios: { mal_id: number; type: string; name: string; url: string }[];
  genres: { mal_id: number; type: string; name: string; url: string }[];
}

export interface IApiPagination {
  current_page: number;
  last_visible_page: number;
  has_next_page: boolean;
  items: {
    count: number;
    total: number;
    per_page: number;
  };
}

export interface IApiResponse {
  data: IApiAnime[];
  pagination: IApiPagination;
}
