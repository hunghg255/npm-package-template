// export function fibonacci(n: number): number {
//   if (n <= 1) {
//     return n;
//   }
//   return fibonacci(n - 1) + fibonacci(n - 2);
// }

//@ts-ignore
export const fibonacci1 =  (n: number) => {
  if (n <= 1) {
    return n;
  }
  return ( fibonacci1(n - 1)) + ( fibonacci1(n - 2));
};
