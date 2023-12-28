import { ITask } from "../../../app/types/types";
import { MyButton } from "../../../shared/ui/myButton";
import { useAppDispatch } from "../../../features/hooks";
import { deleteTask } from "../../../app/store/slices/tasksSlice";
import { AiOutlineDelete } from "react-icons/ai"
import { MdDriveFileRenameOutline } from "react-icons/md"
import * as React from "react";

interface ITaskItem {
    task: ITask
    onClick: React.MouseEventHandler<HTMLButtonElement>
}
export const TaskItem: React.FC<ITaskItem> = ({task, onClick}) => {
    const dispatch = useAppDispatch()
    const deleteCurrentTask = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        dispatch(deleteTask(task.id))
    }

    return (
        <li className='task__item'>
            <div className={`task__cart ${task.status === 'В работе' ? 'process' : '' || task.status === 'Выполнено' ? 'ready' : ''}`}>
                <div className="task__content">
                    <h3 className="task__title">
                        {task.title}
                    </h3>
                    <p className="task__text">
                        {task.text}
                    </p>
                    <p className='task__responsible'>Направление,
                        исполнитель: <span>{task.direction}, {task.responsible}</span></p>
                    <p
                        className="task__status"
                    >
                        Статус:
                        <span>
                            {task.status}
                        </span>
                    </p>
                    <p className="task__date-update">
                        Дата добавления: <span>{task.date}</span>
                    </p>
                </div>
                <div className="task__actions">
                <MyButton
                        buttonName={ <MdDriveFileRenameOutline/> }
                        className='task__change'
                        onClick={ onClick }
                    />
                    <MyButton
                        buttonName={<AiOutlineDelete/>}
                        className='task__delete'
                        onClick={ deleteCurrentTask }
                    />
                </div>
            </div>
        </li>
    )
}