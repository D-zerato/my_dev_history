import axios from 'axios';
import { SimpleUser } from '../model/SimpleUser';
import { User } from '../model/User';

// const url = 'https://14.4.119.31:8081/api/users';
const url = 'https://my-dev-history.com/api/users';

export async function findUser(id: string): Promise<SimpleUser> {
  //
  return await axios
    .get(`${url}/${id}`)
    .then((response) => response.data)
    .catch(console.error);
}

export async function findUserDetail(id: string): Promise<User> {
  //
  return await axios
    .get(`${url}/${id}/detail`)
    .then((response) => response.data)
    .catch(console.error);
}
