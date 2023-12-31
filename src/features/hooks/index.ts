import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import type { RootState, AppDispatch } from "../../app/store";
export function useAuth() {
    const {
        email,
        token,
        id} = useAppSelector(state => state.user)

    return {
        isAuth: !!email,
        email,
        token,
        id
    }
}
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector