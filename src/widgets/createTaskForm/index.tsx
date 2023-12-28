import React, {useState} from "react";
import { MyInput } from "../../shared/ui/myInput";
import { MyButton } from "../../shared/ui/myButton";
import {useAppDispatch } from "../../features/hooks";
import { showCreateForm } from "../../app/store/slices/showFormSlice";
import { createTask } from "../../app/store/slices/tasksSlice";
import { MySelect } from "../../shared/ui/mySelect";
import { filterTask } from "../../features/filterTask/filterTask";
import { MyOption } from "../../entites/myOption";
import {statusInfo} from "../../features/statusInfo";

export const CreateTaskForm = () => {
    const [value, setValue] = useState<string>('Юристы')
    const [title, setTitle] = useState<string>('')
    const [text, setText] = useState<string>('')
    const [responsible, setResponsible] = useState<string>('')
    const [status, setStatus] = useState<string>('')

    const dispatch = useAppDispatch()

    const closeModal = (e: React.MouseEvent<HTMLDivElement>) => {
        const target = e.target
        const overlay = document.querySelector('.overlay')
        if(target === overlay) {
            dispatch(showCreateForm(false))
        }
    }

    const trackingInputTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value
        setTitle(value)
    }

    const trackingInputText = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value
        setText(value)
    }

    const trackingResponsibleChangesInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value
        setResponsible(value)
    }

    const trackingSelectDirectionChanges = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const value = e.target.value
        setValue(value)
    }

    const trackingSelectStatusChanges = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const value = e.target.value
        setStatus(value)
    }

    const pushTask = (e: React.MouseEvent<HTMLButtonElement>) => {
        dispatch(createTask({
            title: title,
            text: text,
            status: status,
            id: Date.now(),
            direction: value,
            responsible: responsible,
            date: new Date().toLocaleString()
        }))
        dispatch(showCreateForm(false))
    }

    return (
        <div className='overlay' onClick={(e) => closeModal(e)}>
            <div className="container">
                <form className="form">
                    <MyInput
                        className='form__input'
                        placeholder='Название задачи'
                        value={ title }
                        onChange={ trackingInputTitle }
                        type='text'
                    />
                    <MyInput
                        className='form__input'
                        placeholder='Описание задачи'
                        value={ text }
                        onChange={ trackingInputText }
                        type='text'
                    />
                    <MyInput
                        className='form__input'
                        placeholder='Исполнитель'
                        value={ responsible }
                        onChange={ trackingResponsibleChangesInput }
                        type='text'
                    />
                    <MySelect className='form__select' onChange={ trackingSelectDirectionChanges }>
                        <option className='form__option' disabled selected>Направление</option>
                        {filterTask && filterTask.map((name) => {
                            return <MyOption
                                optionName={name.filterName}
                                value={name.filterName}
                                className='form__option option-direction'
                                key={name.filterName}
                            />
                        })}
                    </MySelect>
                    <MySelect className='form__select' onChange={ trackingSelectStatusChanges }>
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
                        buttonName='Добавить'
                        className='form__submit'
                        onClick={pushTask}
                    />
                </form>
            </div>
        </div>
    )
}