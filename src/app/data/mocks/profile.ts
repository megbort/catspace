export interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  imageUrl: string;
  handle: string;
}

export const PROFILE: User = {
  id: 1,
  firstName: 'Milo',
  lastName: 'Pouncester',
  email: 'milopounce55@catmain.com',
  imageUrl:
    'https://images.pexels.com/photos/1543793/pexels-photo-1543793.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  handle: '@milotheleaper',
};
