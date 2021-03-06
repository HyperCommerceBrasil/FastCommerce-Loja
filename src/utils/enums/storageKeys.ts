/**
 * Use these keys when you need some value to be stored in local storage.
 * If there isn't any key for your data, create your key here :)
 */
export enum LOCAL_STORAGE_KEYS {
  /**
   * Cart products (temporarily)
   */
  CART_PRODUCTS = '@FASTCOMMERCE_STORE_CART_PRODUCTS',
}

/**
 * Use these keys when you need some value to be stored in session storage.
 * If there isn't any key for your data, create your key here :)
 */
export enum SESSION_STORAGE_KEYS {
  /**
   * User object containing token login and useId
   */
  USER_TOKEN = '@FASTCOMMERCE_STORE_USER_TOKEN',
}
