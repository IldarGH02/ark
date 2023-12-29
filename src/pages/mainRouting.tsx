import { AuthorizedRouting } from "../pages/authorizedRouting";
import { AnAuthorizedRouting } from "../pages/anAuthorizedRouting";
import {useAppSelector} from "../features/hooks";

export const MainRouting = () => {
    const { isAuth } = useAppSelector(state => state.user)

    return (
        <>
            {isAuth ? <AuthorizedRouting/> : <AnAuthorizedRouting/>}
        </>
    )
}