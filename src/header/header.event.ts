import { useQuery } from 'react-query';
import { findUser } from '../api/user';

export function useFindUser(id: string) {
  //
  return useQuery(['findUser', id], () => findUser(id), { enabled: id !== '' });
}
