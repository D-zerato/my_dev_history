import { User } from '../model/User';
import { atom } from 'jotai';

export const userAtom = atom<User | undefined>(undefined);
