import { useQuery } from 'react-query';
import { findUser } from '../api/user';
import { ProjectQdo } from '../model/ProjectQdo';
import { findProject, findProjects } from '../api/project';

export function useFindEvent(id: string) {
  //
  return useQuery(['findUser', id], () => findUser(id), { enabled: id !== '' });
}

export function useFindProjects(qdo: ProjectQdo) {
  //
  return useQuery(['findProjects', qdo], () => findProjects(qdo), { enabled: qdo.userId !== '' });
}

export function useFindProject(id: string) {
  //
  return useQuery(['findProject', id], () => findProject(id), { enabled: id !== '' });
}
