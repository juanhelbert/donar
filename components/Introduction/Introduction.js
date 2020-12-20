export const Introduction = ({ data }) => {
  const { title, subtitle } = data || {}
  return <section>
    <h1 className='cocogoose bold'>{title}</h1>
    <p>{subtitle}</p>
  </section>
}