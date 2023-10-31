export default function Contact() {
  return (
    <section className="py-20 wrapper grid gap-8 text md:grid-cols-2">
      <div>
        <h3 className="text-3xl font-bold">
          Give me your email and I will contact you soon.
        </h3>
        <p className="text-lg text-slate-600 font-light">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
          pariatur dicta repudiandae beatae autem quidem dolorem saepe. Incidunt
          odio aliquam quas culpa neque, laudantium nulla.
        </p>
      </div>
      <form className="grid gap-6">
        <input
          className="border border-slate-900 p-4 rounded-lg"
          type="email"
          placeholder="user@email.com"
        />
        <input
          className="bg-orange-500 text-white p-4 rounded-lg"
          type="submit"
          value={'Contact Me'}
        />
      </form>
    </section>
  )
}
