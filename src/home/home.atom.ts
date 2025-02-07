import { User } from '../model/User';
import { atom } from 'jotai';
import { ProjectQdo } from '../model/ProjectQdo';
import { ProjectDetail } from '../model/ProjectDetail';
import { ProjectSimpleModel } from '../model/ProjectSimpleModel';

export const userAtom = atom<User | undefined>(undefined);

export const projectQdoAtom = atom<ProjectQdo>({
  userId: '',
  page: 0,
  size: 20,
});

export const projectsAtom = atom<ProjectSimpleModel[] | []>([]);
