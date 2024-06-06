import React from 'react';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';

const App = () => {
    return (
        <div className="App">
            <h1>React To-Do Application</h1>
            <TaskInput />
            <TaskList />
        </div>
    );
};

export default App;
