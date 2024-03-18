import { useState } from 'react';
import { useQuery } from 'react-query';
import { useMemo } from 'react';
import type { User } from '../types/users';

export function useUsersData(count: number) {
  const [users, setUsers] = useState<User[] | null>(null);

  const { refetch } = useQuery<User[] | null>(
    ['users', count],
    async () => {
      const response = await fetch(
        `https://randomuser.me/api/?results=${count}`,
      );
      const data = await response.json();
      return data.results;
    },
    {
      refetchOnWindowFocus: false,
      onSuccess: setUsers,
    },
  );

  const statistics = useMemo(() => {
    if (!users || users.length === 0) return null;

    const totalUsers = users.length;
    const ageGroups = {
      '10-20': 0,
      '21-30': 0,
      '31-40': 0,
      '41-50': 0,
      '51+': 0,
    };

    const genderGroups = {
      male: 0,
      female: 0,
    };

    users.forEach((user) => {
      const age = parseInt(user.dob.age);
      if (age >= 10 && age <= 20) ageGroups['10-20']++;
      else if (age >= 21 && age <= 30) ageGroups['21-30']++;
      else if (age >= 31 && age <= 40) ageGroups['31-40']++;
      else if (age >= 41 && age <= 50) ageGroups['41-50']++;
      else ageGroups['51+']++;

      if (user.gender === 'male') genderGroups['male']++;
      else genderGroups['female']++;
    });

    return { totalUsers, ageGroups, genderGroups };
  }, [users]);

  const deleteUser = (userId: string) => {
    if (!users) {
      return;
    }

    const updatedUsers = users.filter((user) => user.id.value !== userId);
    setUsers(updatedUsers);
  };

  const refreshUsers = () => {
    refetch();
  };

  return {
    users,
    statistics,
    deleteUser,
    refreshUsers,
  };
}
