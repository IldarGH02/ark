import { ITask } from "../../app/types/types";
import {TaskItem} from "./taskItem";
import * as React from "react";

interface ITaskList {
    list: ITask[]
    onClick: React.MouseEventHandler<HTMLButtonElement>
}
export const TasksList: React.FC<ITaskList> = ({list, onClick}) => {

    return (
        <ul className="tasks__list">
            {list && list.map((task) => {
                return <TaskItem key={task.id} task={task} onClick={onClick}/>
            })}
        </ul>
    )
}