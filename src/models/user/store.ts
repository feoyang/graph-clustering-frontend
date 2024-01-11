import { atom } from 'jotai';
import { User } from '../../data/entities';

const userAtom = atom<User | undefined>(undefined)

export { userAtom };
