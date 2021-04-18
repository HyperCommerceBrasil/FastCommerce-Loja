const useQuery = () => {
  const getURLQueryParam = (paramName: string): string | null => {
    const urlSearchParams = new URLSearchParams(window.location.search);

    return urlSearchParams.get(paramName);
  };

  return { getURLQueryParam };
};

export default useQuery;
