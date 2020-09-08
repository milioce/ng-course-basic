export interface User {
  name: string;
  id: number | string;
  email?: string;
  sayHello(): void;
}
