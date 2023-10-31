import ProjectsCard from './ProjectsCard'
import workData from '../utils/workData'

export default function Projects() {
  return (
    <section className="bg-slate-50 py-20" id="projects">
      <div className="wrapper text-center space-y-6">
        <h2 className="md:text-4xl text-3xl font-bold ">Our Work! 💪🏼</h2>
        <p className="md:w-2/3 font-light text-xl text-slate-600 max-w-screen-md mx-auto">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit a sit
          aliquid libero suscipit excepturi vero animi tenetur obcaecati in.
        </p>
        <div className="md:grid-cols-3 grid gap-12">
          {workData.map((project, index) => (
            <ProjectsCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
