import {MySelect} from "../../shared/ui/mySelect";
import {statusInfo} from "../../features/statusInfo";
import {MyOption} from "../../entites/myOption";
import React from "react";
import {MyButton} from "../../shared/ui/myButton";
import {useAppDispatch} from "../../features/hooks";
import {deleteTask} from "../../app/store/slices/tasksSlice";
import {useParams} from "react-router-dom";

export const ChangeTaskForm = () => {
    const dispatch = useAppDispatch()
    const { id } = useParams()
    const deleteCurrentTask = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        dispatch(deleteTask(id))
    }

    return (
        <div className='overlay-change'>
            <div className="container">
                <form className="form__change-task">
                    <div className="change__task-content">
                        <MySelect className='form__select' onChange={() => {
                        }}>
                            <option className='form__option' disabled selected>Статус</option>
                            {statusInfo && statusInfo.map((status) => {
                                return <MyOption
                                    optionName={status.status}
                                    value={status.status}
                                    className='form__option option-status'
                                    key={status.status}
                                />
                            })}
                        </MySelect>
                        <MyButton
                            buttonName='Изменить'
                            className='form__change-submit'
                            onClick={() => {}}
                        />
                        <MyButton
                            buttonName='Удалить'
                            className='form__change-delete'
                            onClick={ deleteCurrentTask }
                        />
                    </div>
                </form>
            </div>
        </div>
    )
}