import skillsData from '../utils/skillsData'
import SkillCard from './SkillCard'

export default function Skills() {
  return (
    <section className='wrapper py-20 text-center space-y-8' id='skills'>
      <h2 className='md:text-4xl text-3xl font-bold'>Our Skills! 👇🏼</h2>
      <div className='md:max-w-none md:grid-cols-3 grid gap-8 max-w-md mx-auto'>
        {skillsData.map((data, index) => (
          <SkillCard key={index} data={data} />
        ))}
      </div>
    </section>
  )
}
