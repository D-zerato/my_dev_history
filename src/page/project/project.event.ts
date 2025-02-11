import { ProjectQdo } from '../../model/ProjectQdo';
import { useQuery } from 'react-query';
import { findProject, findProjects } from '../../api/project';

export function useFindProjects(qdo: ProjectQdo) {
  //
  return useQuery(['findProjects', qdo], () => findProjects(qdo), { enabled: qdo.userId !== '' });
}

export function useFindProject(id: string) {
  //
  return useQuery(['findProject', id], () => findProject(id), { enabled: id !== '' });
}
