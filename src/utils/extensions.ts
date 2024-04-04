export {};

declare global {
  interface Array<T> {
    swap(x: number, y: number): Array<T>;
    insert(index: number, item: T): void;
    replaceNull(replace?: string): T[];
  }

  interface String {
    replaceAll(search: string | RegExp, replacement: string): string;
  }
}

Array.prototype.swap = function <T>(this: T[], x: number, y: number): T[] {
  if (x < 0 || x >= this.length || y < 0 || y >= this.length) {
    throw new Error("Index out of bounds");
  }
  const temp = this[x];
  this[x] = this[y];
  this[y] = temp;
  return this;
};

Array.prototype.insert = function <T>(this: T[], index: number, item: T) {
  this.splice(index, 0, item);
};

Array.prototype.replaceNull = function <T>(
  this: T[],
  replace: string = '""',
): T[] {
  return JSON.parse(JSON.stringify(this).replace(/null/g, replace)) as T[];
};

String.prototype.replaceAll = function (
  this: string,
  search: string | RegExp,
  replacement: string,
): string {
  return this.replace(new RegExp(search, "g"), replacement);
};
