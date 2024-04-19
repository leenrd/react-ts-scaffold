import { ModeToggle } from "./components/themeToggle";

function App() {
  return (
    <main className="w-screen h-screen flex flex-col items-center justify-center">
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
