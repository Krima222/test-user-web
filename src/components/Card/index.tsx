import classes from './index.module.scss';

import { getFormatDate } from '../../untils/getFormatData';
import garbage from './garbage.svg';

import type { User } from '../../types/users';

type IProps = {
  user: User;
  style?: React.CSSProperties;
  onDelete: () => void;
};

export function Card({ user, onDelete, style }: IProps) {
  const { picture, name, email, phone, dob, location } = user;

  const address = `${location.city}, ${location.state}, ${location.country}`;

  return (
    <div className={classes.wrapper} style={style}>
      <div className={classes.container}>
        <div className={classes.icon} onClick={onDelete}>
          <img src={garbage} alt="garbage" />
        </div>
        <div className={classes.section}>
          <img className={classes.img} src={picture.thumbnail} alt="user" />
          <div className={classes.info}>
            <div className={classes.header}>
              {name.first} {name.last}
            </div>
            <div>{email}</div>
          </div>
        </div>
        <div className={classes.block}>
          <div className={classes.category}>
            <div>Phone No</div>
            <div>Birthay</div>
            <div>Address</div>
          </div>
          <div className={classes.info}>
            <div>{phone}</div>
            <div>{getFormatDate(dob.date)}</div>
            <div className={classes.address}>{address}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
