import {BrowserRouter, Route, Routes} from 'react-router-dom'
import { routes } from "../app/router/routes";
export const Routing = () => {
    return (
        <Routes>
            {
                routes.map(({path, component: Component }) => {
                    return <Route path={path} element={<Component/>} key={path}/>
                })
            }
        </Routes>
    )
}