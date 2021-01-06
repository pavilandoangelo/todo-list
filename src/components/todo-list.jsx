import React from "react";

function TodoList(props) {
  const { todo, handleFinishedTodo } = props;

  return (
    <div className="w-full h-8 2xl:h-10 flex flex-row">
      <p className="flex-grow h-full w-11/12 bg-white p-2 text-sm 2xl:text-lg font-normal tracking-wide whitespace-normal break-all rounded-l-md">
        {todo}
      </p>
      <button className="flex-initial h-full bg-blue-500 p-2 focus:outline-none rounded-r-md" onClick={() => handleFinishedTodo(todo)}>
        <svg className="h-full fill text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      </button>
    </div>
  )
}

export default TodoList;
