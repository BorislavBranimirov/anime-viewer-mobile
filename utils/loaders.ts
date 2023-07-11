import { IApiAnime, IApiResponse } from './types';

export const fetchTopAnime = async (page?: string) => {
  const url = new URL('https://api.jikan.moe/v4/top/anime');
  url.searchParams.append('limit', '20');
  if (page) {
    url.searchParams.append('page', page);
  }
  const res = await fetch(url.href);
  const animeData: IApiResponse = await res.json();
  return animeData;
};

export const fetchSeasonalAnime = async (page?: string) => {
  const url = new URL('https://api.jikan.moe/v4/seasons/now');
  url.searchParams.append('limit', '20');
  url.searchParams.append('sfw', 'true');
  if (page) {
    url.searchParams.append('page', page);
  }
  const res = await fetch(url.href);
  const animeData: IApiResponse = await res.json();
  return animeData;
};

export const fetchSearchAnime = async (
  query?: string,
  page?: string
) => {
  const url = new URL('https://api.jikan.moe/v4/anime');
  url.searchParams.append('limit', '20');
  url.searchParams.append('sfw', 'true');
  url.searchParams.append('order_by', 'mal_id');
  url.searchParams.append('sort', 'asc');
  if (query) {
    url.searchParams.append('q', `"${query}"`);
  }
  if (page) {
    url.searchParams.append('page', page);
  }
  const res = await fetch(url.href);
  const animeData: IApiResponse = await res.json();
  return animeData;
};

export const fetchAnime = async (id: string) => {
  const res = await fetch(`https://api.jikan.moe/v4/anime/${id}`);
  const animeData: { data: IApiAnime } = await res.json();
  return animeData.data;
};
