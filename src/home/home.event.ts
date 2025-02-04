import { useQuery } from 'react-query';
import { findUser } from '../api/user';

export function useFindEvent(id: string) {
  //
  return useQuery(['findUser', id], () => findUser(id));
}
