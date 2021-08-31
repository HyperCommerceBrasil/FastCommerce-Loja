type UseScrollToMethods = {
  scrollToDiv(divId: string, options?: ScrollIntoViewOptions): void;
};

const useScrollTo = (): UseScrollToMethods => {
  /**
   * Use it to scroll into especified div.
   * @param divId
   * @param options
   */
  const scrollToDiv = (divId: string, options?: ScrollIntoViewOptions) => {
    document.getElementById(divId)?.scrollIntoView(options);
  };

  return { scrollToDiv };
};

export default useScrollTo;
