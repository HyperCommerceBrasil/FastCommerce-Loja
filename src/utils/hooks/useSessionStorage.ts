type UseSessionStorageFunctions = {
  saveValue<T>(key: string, value: T): void;
  fetchValue(key: string): string | null;
  deleteValue(key: string): void;
  clearStorage(): void;
};

const useSessionStorage = (): UseSessionStorageFunctions => {
  const saveValue = <T>(key: string, value: T) => {
    if (typeof value === 'object') {
      sessionStorage.setItem(key, JSON.stringify(value));
      return;
    }
    sessionStorage.setItem(key, String(value));
  };

  const fetchValue = (key: string): string | null =>
    sessionStorage.getItem(key);

  const deleteValue = (key: string): void => sessionStorage.removeItem(key);

  const clearStorage = () => sessionStorage.clear();

  return {
    saveValue,
    fetchValue,
    deleteValue,
    clearStorage,
  };
};

export default useSessionStorage;
