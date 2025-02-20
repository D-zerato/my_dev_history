import { useQuery } from 'react-query';
import { findUser, findUserDetail } from '../api/user';

export function useFindUser(id: string) {
  //
  return useQuery(['findUser', id], () => findUser(id), { enabled: id !== '' });
}

export function useFindUserDetail(id: string) {
  //
  return useQuery(['findUserDetail', id], () => findUserDetail(id), { enabled: id !== '' });
}
