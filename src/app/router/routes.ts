import { HomePage } from "../../pages/Home/HomePage";
import {TasksPage} from "../../pages/Tasks/TasksPage";
import React from "react";
import {RealizedObjects} from "../../pages/RealizedObjects";
import {Login} from "../../pages/Login";
import {Register} from "../../pages/Register";

interface IPath {
    path: string,
    component: () => React.ReactElement
}
export const routes: IPath[] = [
    {
        path: '/home',
        component: HomePage
    },
    {
        path: '/tasks',
        component: TasksPage
    },
    {
        path: '/realized',
        component: RealizedObjects
    }
]

export const authRoutes: IPath[] = [
    {
        path: '/login',
        component: Login
    },
    {
        path: '/register',
        component: Register
    }
]