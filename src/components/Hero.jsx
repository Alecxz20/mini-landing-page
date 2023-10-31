import hero from '../assets/hero_illustration.svg'

export default function Hero() {
  return (
    <section className='md:flex md:items-center bg-blue-500 text-white min-h-[calc(100vh-150px)] py-14'> 
      <div className='md:flex-row flex flex-col gap-12 items-center wrapper'>
        <img className='md:w-2/5 max-w-lg w-full' src={hero} alt="hero image" />
        <div className='md:text-left md:w-3/5 space-y-6 text-center'>
          <h1 className='md:text-4xl font-bold text-3xl'>My name is Alexis Perez, it will be a pleasure to help you!</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem
            esse amet aliquam expedita praesentium corporis hic, nihil officia.
            Harum, nam.
          </p>
          <a className='inline-block bg-slate-700 px-8 py-4 rounded-xl font-bold' href="#">Contact Me Now</a>
        </div>
      </div>
    </section>
  )
}
