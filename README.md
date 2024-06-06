# My Todo App

A simple To-Do application built with React and Redux.

## Setup Instructions

1. Clone the repository:
    ```bash
    git clone https://github.com/vinod0031/my-todo-app.git
    cd my-todo-app
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Start the development server:
    ```bash
    npm start
    ```

4. Open your browser and go to `http://localhost:3000`.

## Application Structure

- **src/index.js**: Entry point of the application.
- **src/App.js**: Main application component.
- **src/components/TaskInput.js**: Component for adding new tasks.
- **src/components/TaskList.js**: Component for displaying and managing the list of tasks.
- **src/redux/**: Contains Redux actions, reducers, and store configuration.
- **public/index.html**: HTML template.

## Comments and Logic

- The code is well-commented to explain the logic and approach in each file.
- Redux is used for state management, handling the addition, deletion, and editing of tasks.
- The application is styled using basic CSS.

## Features

- Add Task: Users can input a task and add it to the list.
- View Tasks: Displays all added tasks in a list.
- Edit Task: Allows editing of existing tasks.
- Delete Task: Removes a task from the list.
