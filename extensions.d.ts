declare global {
  interface Array<T> {
    unique(): T[];
    split(index: number): T[][];
  }
}

export default global;
