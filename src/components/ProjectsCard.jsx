export default function ProjectsCard({ project }) {
  const { Img, title, text } = project
  return (
    <article className="w-4/5 mx-auto space-y-4">
      <img
        className="aspect-square object-cover rounded-2xl w-96 max-w-full mx-0 inline-block"
        src={Img}
        alt={`${title} image`}
      />
      <h3 className="text-2xl font-medium">{title}</h3>
      <p className="text-slate-600 font-light">{text}</p>
    </article>
  )
}
