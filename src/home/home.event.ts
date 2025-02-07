import { useQuery } from 'react-query';
import { findUser } from '../api/user';
import { ProjectQdo } from '../model/ProjectQdo';
import { findProjects } from '../api/project';

export function useFindEvent(id: string) {
  //
  return useQuery(['findUser', id], () => findUser(id));
}

export function useFindProjects(qdo: ProjectQdo) {
  //
  return useQuery(['findProjects', qdo], () => findProjects(qdo), { enabled: qdo.userId !== '' });
}
