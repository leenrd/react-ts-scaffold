import { ModeToggle } from "./components/theme-toggle";

function App() {
  return (
    <main className="w-screen h-screen flex flex-col items-center justify-center">
      <div className="absolute top-0 z-[-2] h-screen w-screen bg-background bg-[radial-gradient(100%_50%_at_50%_0%,rgba(0,163,255,0.13)_0,rgba(0,163,255,0)_50%,rgba(0,163,255,0)_100%)]"></div>
      <h1 className="text-8xl font-geist font-bold tracking-tight">
        🔥UI Scaffold🔥
      </h1>
      <p className="leading-7 [&:not(:first-child)]:mt-6 mb-10">
        Made with latest and production grade technologies
      </p>
      <ModeToggle />
    </main>
  );
}

export default App;
