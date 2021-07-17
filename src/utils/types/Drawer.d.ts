declare type DrawerState = {
  id: string;
  value: DrawerOptions;
  label: string;
  isActive: boolean;
  icon?: string | JSX.Element;
};

declare type DrawerOptions = 'ORDERS' | 'ADRESSES' | 'ACCOUNT_INFORMATION';
