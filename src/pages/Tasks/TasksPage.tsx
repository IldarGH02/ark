import React, {useState} from "react";
import { Title } from "../../widgets/title";
import { MyButton } from "../../shared/ui/myButton";
import { CreateTaskForm } from "../../widgets/createTaskForm";
import { useAppDispatch, useAppSelector } from "../../features/hooks";
import { showChangeForm, showCreateForm } from "../../app/store/slices/showFormSlice";
import { TasksList } from "../../widgets/tasksList";
import { MySelect } from "../../shared/ui/mySelect";
import { filterTask } from "../../features/filterTask/filterTask";
import { MyOption } from "../../entites/myOption";
import {filterTasks, searchTasks} from "../../app/store/slices/tasksSlice";
import {MyInput} from "../../shared/ui/myInput";
import {ChangeTaskForm} from "../../widgets/changeTaskForm";


export const TasksPage = () => {
    const [search, setSearch] = useState<string>('')
    const { createForm, changeForm } = useAppSelector(state => state.show)
    const {
        tasks,
        filteredTasks,
        filter,
        searchValue
    } = useAppSelector(state => state.tasks)
    const dispatch = useAppDispatch()

    const showModalCreateForm = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        dispatch(showCreateForm(true))
    }

    const showModalChangeForm = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        dispatch(showChangeForm(true))
    }

    const trackingSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value
        setSearch(value)
        dispatch(searchTasks(value))
    }

    const trackingSelectChanges = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const value = e.target.value
        dispatch(filterTasks(value))
    }

    return (
        <section className='tasksPage'>
            {createForm ?
                <CreateTaskForm/> : <></>
            }
            {
                changeForm ?
                    <ChangeTaskForm/> : <></>
            }
            <div className="container">
                <div className="tasksPage__top">
                    <Title
                        className='tasksPage__title'
                        titleName='Задачи'
                    />
                    <div className="tasksPage__actions">
                        <MyInput
                            className='tasksPage__search'
                            value={search}
                            type='search'
                            placeholder='Поиск'
                            onChange={trackingSearchInput}
                        />
                        <MySelect
                            defaultValue={'Категория'}
                            name='select'
                            className='tasksPage__select'
                            onChange={trackingSelectChanges}
                        >
                            <option className='form__option'>Категории</option>
                            {filterTask.map((name) => {
                                return <MyOption
                                    optionName={name.filterName}
                                    value={name.filterName}
                                    className='tasksPage__option'
                                    key={name.filterName}
                                />
                            })}
                        </MySelect>
                        <MyButton
                            buttonName='Добавить задачу'
                            className='tasksPage__create-task'
                            onClick={showModalCreateForm}
                        />
                    </div>
                </div>
                <div className="tasksPage__content">
                    {
                        filter ||
                        searchValue ?
                            <TasksList
                                list={filteredTasks}
                                onClick={showModalCreateForm}
                            /> :
                            <TasksList
                                list={tasks}
                                onClick={showModalChangeForm}
                            />
                    }
                </div>
            </div>
        </section>
    )
}