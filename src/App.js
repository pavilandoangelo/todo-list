function App() {
  return (
    <div className="container h-screen mx-auto px-4 bg-yellow-200">
      <div className="flex flex-row h-full w-full justify-center items-center">
        <div className="flex flex-col h-2/3 w-1/3 bg-gray-200 text-center content-center p-10 rounded-lg">
          <div className="flex flex-row h-12 space-x-2">
            <input className="flex-grow h-full" />
            <span className="flex-shrink h-full">Button</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
