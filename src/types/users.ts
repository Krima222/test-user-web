export type User = {
  id: {
    value: string;
  };
  name: {
    title: string;
    first: string;
    last: string;
  };
  email: string;
  phone: string;
  dob: {
    age: string;
    date: string;
  };
  location: {
    city: string;
    state: string;
    country: string;
  };
  gender: string;
  picture: {
    large: string;
    medium: string;
    thumbnail: string;
  };
};
