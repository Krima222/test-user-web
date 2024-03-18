import { useState } from 'react';

import classes from './index.module.scss';

type IProps = {
  onSearchChange: (query: string) => void;
};

export function Search({ onSearchChange }: IProps) {
  const [searchQuery, setSearchQuery] = useState('');

  const handleInputChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    onSearchChange(query);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search"
        value={searchQuery}
        onChange={handleInputChange}
        className={classes.container}
      />
    </div>
  );
}
