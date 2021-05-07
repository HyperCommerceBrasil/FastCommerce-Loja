type UseLocalStorageFunctions = {
  saveValue<T>(key: string, value: T): void;
  fetchValue(key: string): string | null;
  deleteValue(key: string): void;
  clearStorage(): void;
};

const useLocalStorage = (): UseLocalStorageFunctions => {
  const saveValue = <T>(key: string, value: T) => {
    if (typeof value === 'object')
      localStorage.setItem(key, JSON.stringify(value));
    localStorage.setItem(key, String(value));
  };

  const fetchValue = (key: string): string | null => localStorage.getItem(key);

  const deleteValue = (key: string): void => localStorage.removeItem(key);

  const clearStorage = () => localStorage.clear();

  return {
    saveValue,
    fetchValue,
    deleteValue,
    clearStorage,
  };
};

export default useLocalStorage;
