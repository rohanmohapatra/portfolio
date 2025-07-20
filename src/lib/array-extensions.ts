'use client';

declare global {
  interface Array<T> {
    unique(): T[];
    split(index: number): T[][];
  }
}

if (!Array.prototype.unique) {
  Array.prototype.unique = function () {
    return [...new Set(this)];
  };
}

if (!Array.prototype.split) {
  Array.prototype.split = function <T>(this: Array<T>, index: number) {
    const result = [this.slice(0, index), this.slice(index)];
    // return the new array
    return result;
  };
}

export {};
