import LeadForm from "./Components/Leadform";
export default function Home() {
  return (
    <>
      {/* <nav>I am nav</nav> */}
      <main className="mx w-screen h-screen flex flex-col justify-center items-center bg-blue-200">
        <LeadForm />
      </main>
      {/* <footer>I am footer</footer> */}
    </>
  );
}
