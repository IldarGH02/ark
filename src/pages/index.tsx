import {Route, Routes} from 'react-router-dom'
import { routes } from "../app/router/routes";
import { Layout } from "./Layout";
export const Routing = () => {
    return (
        <Routes>
            <Route path='/' element={<Layout/>}>
                {
                    routes.map(({path, component: Component }) => {
                        return <Route path={path} element={<Component/>} key={path}/>})
                }
            </Route>
        </Routes>
    )
}