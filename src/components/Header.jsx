export default function Header() {
  return (
    <header className="bg-blue-500 text-white min-h-[150px]" id="home">
      <nav className="md:flex md:justify-between md:align-middle py-6 grid justify-items-center items-center gap-6 wrapper">
        <a href="#">
          <h2 className="text-3xl font-bold">Landing.</h2>
        </a>
        <ul className="flex gap-4">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
        </ul>
      </nav>
    </header>
  )
}
