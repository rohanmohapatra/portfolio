declare global {
  interface Array<T> {
    split(index: number): T[][]; // adds a split() function to the array
    unique(): Array<T>;
  }
}

export {};
