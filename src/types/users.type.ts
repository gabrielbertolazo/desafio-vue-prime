export type UserType = {
  id: string;
  name: string;
  username: string;
  email: string;
  Address: AddressType;
};

type AddressType = {
  street: string;
  suite: string;
  city: string;
  zipcode: number;
  geo: {
    lat: string;
    lng: string;
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
};
