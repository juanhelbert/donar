export const Introduction = ({ data }) => {
  const { title, subtitle } = data || {}
  return <section>
    <h1>{title}</h1>
    <p>{subtitle}</p>
  </section>
}