import { useCallback, useState } from 'react';

export const getData = async (id, options) => {
  const response = await fetch(
    import.meta.env.VITE_BASE_URL + `/api/v1/vaccinees/${id}`,
    options
  );
  const data = await response.json();

  return data;
};

export const useGetVaccinee = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  const getVaccinee = async (options = {}) => {
    try {
      setIsLoading(true);
      const data = await getData(options);
      setData(data?.data);
      return data;
    } catch (e) {
      setError(e);
      setIsLoading(false);
    }
  };

  return {
    isLoading,
    error,
    data,
    getVaccinee: useCallback(getVaccinee, []), // to avoid infinite calls when inside a `useEffect`
  };
};
