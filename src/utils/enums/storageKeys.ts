/**
 * Use these keys when you need some value to be stored in local storage.
 * If there isn't any key for your data, create your key here :)
 */
export enum STORAGE_KEYS {
  /**
   * Cart products (temporarily)
   */
  CART_PRODUCTS = 'CART_PRODUCTS',
  /**
   * User object containing token login and useId
   */
  USER = 'USER',
  /**
   * Token of reset password challenge api
   */
  RESET_PASSWORD_CHALLENGE = 'RESET_PASSWORD_CHALLENGE',
}
