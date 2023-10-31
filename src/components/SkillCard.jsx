export default function SkillCard({ data }) {
  const { Image, title, description, color } = data
  return (
    <div>
      {<Image style={{ color: color }} className="w-20 h-20 mx-auto" />}
      <h3 className="text-slate-900 text-xl font-bold">{title}</h3>
      <p className="w-2/3 mx-auto text-slate-600">{description}</p>
    </div>
  )
}
