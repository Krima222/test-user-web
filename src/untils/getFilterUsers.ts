import type { User } from '../types/users';

export const getfilteredUsers = (users: User[] | null, searchQuery: string) => {
  if (!users) {
    return null;
  }

  if (searchQuery) {
    return users?.filter((user) => {
      const fullName =
        `${user.name.first} ${user.name.last}`.toLocaleLowerCase();
      const fullAdress = `${user.location.city} ${user.location.state} ${user.location.country}`;
      return (
        fullName.includes(searchQuery.toLocaleLowerCase()) ||
        user.email.includes(searchQuery.toLocaleLowerCase()) ||
        user.phone.includes(searchQuery) ||
        fullAdress.toLocaleLowerCase().includes(searchQuery.toLocaleLowerCase())
      );
    });
  }
  return users;
};
