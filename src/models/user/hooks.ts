import { useAtomValue, useSetAtom } from 'jotai';
import { userAtom } from './store.ts';

const useSetUser = () => {
    return useSetAtom(userAtom);
}
const useUser = () => {
    return useAtomValue(userAtom);
}

export { useSetUser, useUser};
