import { Code, Code2 } from "lucide-react";

function App() {
  return (
    <>
      <div className="w-screen h-screen flex justify-center items-center">
        <div className="text-7xl font-bold underline flex gap-8 items-center mx-8">
          <Code size={100} />
          <h1 className="text-5xl text-center">Hello from Tailwind and Lucide Icons</h1>
          <Code2 size={100} />
        </div>
      </div>
    </>
  );
}

export default App;
