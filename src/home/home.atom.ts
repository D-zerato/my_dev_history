import { User } from '../model/User';
import { atom } from 'jotai';
import { ProjectQdo } from '../model/ProjectQdo';

export const userAtom = atom<User | undefined>(undefined);

export const projectQdoAtom = atom<ProjectQdo>({
  userId: '',
  page: 0,
  size: 20,
});
