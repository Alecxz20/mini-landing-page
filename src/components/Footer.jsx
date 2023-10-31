import facebook from '../assets/fb.svg'
import instagram from '../assets/instagram.svg'
import twitter from '../assets/twitter.svg'

export default function Footer() {
  return (
    <footer className="bg-blue-50 py-20 text-center">
      <div className="wrapper grid gap-6 grid-cols-2">
        <h2 className="md:place-self-start text-3xl font-bold">Landing.</h2>
        <p className="md:place-self-end text-slate-600">myemail@email.com</p>
        <hr className="md:col-span-2 border border-slate-200" />
        <ul className="md:place-self-start flex justify-center gap-8">
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
        <div className="md:place-self-end flex justify-center gap-8">
          <img src={facebook} alt="facebook icon" />
          <img src={instagram} alt="instagram icon" />
          <img src={twitter} alt="twitter icon" />
        </div>
      </div>
    </footer>
  )
}
