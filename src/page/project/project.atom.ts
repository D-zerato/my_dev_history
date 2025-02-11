import { atom } from 'jotai';
import { ProjectQdo } from '../../model/ProjectQdo';
import { ProjectSimpleModel } from '../../model/ProjectSimpleModel';

export const ProjectQdoAtom = atom<ProjectQdo>({
  userId: '',
  page: 0,
  size: 20,
});

export const ProjectsAtom = atom<ProjectSimpleModel[] | []>([]);
