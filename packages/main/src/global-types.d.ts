declare global {
  interface Array<T> {
    // eslint-disable-next-line no-unused-vars
    split(index: number): T[][]; // adds a split() function to the array
    unique(): Array<T>;
  }
}

export {};
