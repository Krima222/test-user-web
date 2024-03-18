export type StatisticData = {
  totalUsers: number;
  ageGroups: {
    [group: string]: number;
  };
  genderGroups: {
    [gender: string]: number;
  };
};
