import React from "react";

function TodoList(props) {
  const { todo, handleFinishedTodo } = props;

  return (
    <div className="flex flex-row w-full h-8 md:h-10 lg:h-10 xl:h-10 2xl:h-10">
      <p className="flex-grow h-full w-11/12 bg-white p-2 font-normal tracking-wide whitespace-normal break-all rounded-l-md text-sm md:text-md lg:text-lg xl:text-lg 2xl:text-lg ">
        {todo}
      </p>
      <button className="flex-initial h-full bg-red-500 p-2 focus:outline-none rounded-r-md" onClick={() => handleFinishedTodo(todo)}>
        <svg className="h-full text-white fill" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
        </svg>
      </button>
    </div>
  )
}

export default TodoList;
