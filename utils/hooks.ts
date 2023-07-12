import { useEffect, useState } from 'react';
import { IApiResponse } from './types';
import { fetchSearchAnime, fetchSeasonalAnime, fetchTopAnime } from './loaders';

const useGeneralFetch = (
  loader: (page?: string) => Promise<IApiResponse>,
  page?: string
) => {
  const [data, setData] = useState<IApiResponse>();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const animeData = await loader(page);
      setData(animeData);
      setLoading(false);
    };

    fetchData();
  }, [page]);

  return { data, loading };
};

export const useFetchTopAnime = (page?: string) => {
  const { data, loading } = useGeneralFetch(fetchTopAnime, page);
  return { data, loading };
};

export const useFetchSeasonalAnime = (page?: string) => {
  const { data, loading } = useGeneralFetch(fetchSeasonalAnime, page);
  return { data, loading };
};

export const useFetchSearchAnime = (query?: string, page?: string) => {
  const [data, setData] = useState<IApiResponse>();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const animeData = await fetchSearchAnime(query, page);
      setData(animeData);
      setLoading(false);
    };

    fetchData();
  }, [query, page]);

  return { data, loading };
};
