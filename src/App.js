function App() {
  return (
    <div className="container h-screen mx-auto px-4 bg-yellow-200 font-sans subpixel-antialiased">
      <div className="flex flex-row h-full w-full justify-center items-center">
        <div className="flex flex-col h-2/3 w-1/3 bg-gray-200 text-center content-center p-10 rounded-lg space-y-5">
          <div className="flex flex-row h-12 w-full space-x-4">
            <input className="flex-grow h-full w-11/12 focus:outline-none focus:ring focus:ring-blue-200 text-xl px-2" />
            <button className="flex-initial h-full bg-green-500 rounded-full focus:outline-none focus:ring focus:ring-blue-200 ">
              <svg className="h-full fill text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </button>
          </div>
          <div className="h-3/4 w-full grid grid-cols-1">
            <div>1</div>
            <div>2</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
