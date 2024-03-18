import { useState } from 'react';

import { Grid } from 'react-virtualized/dist/commonjs/Grid';

import { useUsersData } from '../hooks/useData';

import { getfilteredUsers } from '../untils/getFilterUsers';

import { Card } from './Card';
import { Statistics } from './Statistics';
import { Search } from './Search';
import { Button } from './Button';

import classes from './App.module.scss';

export function App() {
  const { users, statistics, deleteUser, refreshUsers } = useUsersData(500);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
  };

  const handleUserDelete = (userId: string) => {
    deleteUser(userId);
  };

  const filteredUsers = getfilteredUsers(users, searchQuery);

  const setUsers = () => {
    refreshUsers();
  };

  return (
    <div className={classes.layout}>
      <div className={classes.header}>
        <Search onSearchChange={handleSearchChange} />
        <Button text="Refresh Users" onClick={setUsers} />
      </div>
      <div className={classes.wrapper}>
        <ul className={classes.main}>
          {filteredUsers && (
            <Grid
              cellRenderer={({ columnIndex, key, rowIndex, style }) => {
                return (
                  <Card
                    key={key}
                    style={style}
                    user={filteredUsers[rowIndex * 3 + columnIndex]}
                    onDelete={() =>
                      handleUserDelete(
                        filteredUsers[rowIndex * 3 + columnIndex].id.value,
                      )
                    }
                  />
                );
              }}
              columnCount={3}
              columnWidth={342}
              rowHeight={206}
              rowCount={Math.ceil(filteredUsers.length / 3)}
              height={window.innerHeight}
              width={window.innerWidth - 430}
            />
          )}
        </ul>
        <div className={classes.statistics}>
          <Statistics statistics={statistics} />
        </div>
      </div>
    </div>
  );
}
