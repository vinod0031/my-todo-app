import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTask, editTask } from '../redux/actions';

const TaskList = () => {
    const tasks = useSelector(state => state.tasks);
    const dispatch = useDispatch();
    const [editingTask, setEditingTask] = useState(null);
    const [newTaskText, setNewTaskText] = useState('');

    const handleDeleteTask = (taskId) => {
        dispatch(deleteTask(taskId));
    };

    const handleEditTask = (task) => {
        setEditingTask(task.id);
        setNewTaskText(task.text);
    };

    const handleSaveEdit = () => {
        dispatch(editTask({ id: editingTask, text: newTaskText }));
        setEditingTask(null);
        setNewTaskText('');
    };

    return (
        <div>
            <ul>
                {tasks.map(task => (
                    <li key={task.id}>
                        {editingTask === task.id ? (
                            <>
                                <input 
                                    type="text"
                                    value={newTaskText}
                                    onChange={(e) => setNewTaskText(e.target.value)}
                                />
                                <button onClick={handleSaveEdit}>Save</button>
                            </>
                        ) : (
                            <>
                                {task.text}
                                <button onClick={() => handleEditTask(task)}>Edit</button>
                                <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
                            </>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TaskList;
