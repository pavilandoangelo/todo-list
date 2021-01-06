import React, { useState } from "react";
import TodoList from "./components/todo-list";

function App() {
  const [state, setState] = useState({
    todoList: [],
    todo: ""
  });

  const handleAddTodo = () => {
    if (state.todo.trim()) {
      return setState({
        ...state,
        todoList: [...state.todoList, state.todo],
        todo: ""
      });
    }
  }

  const handleOnChangeInput = (e) => {
    return setState({ ...state, todo: e.target.value });
  }

  const handleFinishedTodo = (todo) => {
    const filteredTodoList = state.todoList.filter(data => data !== todo);
    return setState({
      ...state,
      todoList: filteredTodoList
    });
  }

  const handleClearAllTodo = () => {
    return setState({
      ...state,
      todoList: [],
      todo: ""
    });
  }

  return (
    <div className="container h-screen mx-auto px-4 bg-yellow-200 font-sans subpixel-antialiased">
      <div className="flex flex-row h-full w-full justify-center items-center">
        <div className="flex flex-col h-2/3 w-screen 2xl:w-1/3 bg-gray-200 text-center content-center p-10 rounded-lg space-y-3">
          <div className="flex flex-row w-full mb-1">
            <span className="text-2xl 2xl:text-3xl font-semibold tracking-wide text-gray-700">Todo App</span>
          </div>
          <div className="flex flex-row h-8 2xl:h-10 w-full space-x-2">
            <input type="text" className="flex-grow h-full w-11/12 focus:outline-none focus:ring focus:ring-blue-200 text-xl px-2 rounded-md" value={state.todo} onChange={handleOnChangeInput} />
            <button className="flex-initial h-full p-2 bg-green-500 focus:outline-none focus:ring focus:ring-blue-200 rounded-md" onClick={handleAddTodo}>
              <svg className="h-full fill text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </button>
          </div>
          <div className="w-full h-4/5 flex flex-col justify-start space-y-2 overflow-y-auto">
            {state.todoList && state.todoList.map(todo => {
              return (
                <TodoList key={todo} todo={todo} handleFinishedTodo={handleFinishedTodo} />
              );
            })}
          </div>
          <div className="w-full flex flex-col 2xl:flex-row 2xl:space-x-2 space-y-2 p-2 2xl:h-14 items-baseline">
            <p className="w-full h-full text-center text-md font-normal 2xl:flex-grow 2xl:w-9/12 2xl:text-left 2xl:text-lg">
              You have {state.todoList.length} pending tasks
            </p>
            <button className="w-full h-full bg-green-500 text-white text-md font-normal rounded-md focus:outline-none focus:ring focus:ring-blue-200 2xl:flex-initial 2xl:w-3/12" onClick={handleClearAllTodo}>
              <span>Clear All</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
