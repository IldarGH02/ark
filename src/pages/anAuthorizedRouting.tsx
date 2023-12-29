import {Route, Routes} from 'react-router-dom'
import { authRoutes } from "../app/router/routes";
export const AnAuthorizedRouting = () => {
    return (
        <Routes>
            {
                authRoutes.map(({path, component: Component }) => {
                    return <Route path={path} element={<Component/>} key={path}/>})
            }
        </Routes>
    )
}