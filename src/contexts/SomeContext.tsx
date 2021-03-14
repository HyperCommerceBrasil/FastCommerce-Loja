import React, { createContext, useState } from 'react';

type ValueInsertedData = {
  value: string;
  handleChangeValue(value: string): void;
};

export const ValueInsertedContext = createContext<ValueInsertedData>(
  {} as ValueInsertedData,
);

export const ValueInsertedProvider: React.FC = ({ children }) => {
  const [value, setValue] = useState<string>('');

  const handleChangeValue = (value: string) => setValue(value);

  return (
    <ValueInsertedContext.Provider value={{ value, handleChangeValue }}>
      {children}
    </ValueInsertedContext.Provider>
  );
};
