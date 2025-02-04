import axios from 'axios';

const url = 'https://14.4.119.31:8081/api/users';

export async function findUser(id: string) {
  //
  return await axios
    .get(`${url}/${id}`)
    .then((response) => response.data)
    .catch(console.error);
}
