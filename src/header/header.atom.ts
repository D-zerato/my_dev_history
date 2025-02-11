import { atom } from 'jotai/index';
import { User } from '../model/User';

export const UserAtom = atom<User | undefined>(undefined);
