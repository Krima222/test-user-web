import classes from './index.module.scss';

import type { StatisticData } from '../../types/statistic';

type IProps = {
  statistics: StatisticData | null;
};

export function Statistics({ statistics }: IProps) {
  return (
    <div className={classes.container}>
      <div className={classes.header}>{statistics?.totalUsers} Users</div>
      <div className={classes.separator}></div>
      <div>
        <p className={classes.title}>Age Groups</p>
        <div className={classes.block}>
          <div className={classes.subsection}>
            <p>10 to 20</p>
            <p>21 to 30</p>
            <p>31 to 40</p>
            <p>41 to 50</p>
            <p>51+</p>
          </div>
          <div className={classes.data}>
            <p>{statistics?.ageGroups['10-20']} users</p>
            <p>{statistics?.ageGroups['21-30']} users</p>
            <p>{statistics?.ageGroups['31-40']} users</p>
            <p>{statistics?.ageGroups['41-50']} users</p>
            <p>{statistics?.ageGroups['51+']} users</p>
          </div>
        </div>
      </div>
      <div className={classes.separator}></div>
      <div>
        <p className={classes.title}>Gender Groups</p>
        <div className={classes.block}>
          <div className={classes.subsection}>
            <div>Male</div>
            <div>Female</div>
          </div>
          <div className={classes.data}>
            <div>{statistics?.genderGroups['male']} users</div>
            <div>{statistics?.genderGroups['female']} users</div>
          </div>
        </div>
      </div>
    </div>
  );
}
