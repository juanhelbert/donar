import React from 'react'
import styles from './HowItWorks.module.scss'

const Feature = ({ item, isReverse }) => {
  const { title, description, image } = item || {}
  const { fields: imgFields } = image || {}
  const { file: { url } } = imgFields || {}

  return <article class={isReverse ? styles.reverse : ''}>
    <figure>
      <img src={url} alt={title} />
    </figure>
    <div>
      <h3 className='cocogoose bold dark-red'>{title}</h3>
      <p className='cocogoose gray'>{description}</p>
    </div>
  </article>
}

export const HowItWorks = ({ data }) => {
  const sortedProjects = (data || []).sort((a, b) => (a.fields.order > b.fields.order) ? 1 : ((b.fields.order > a.fields.order) ? -1 : 0))

  return <section className={styles.HowItWorks}>
    <h2 id='como-funciona' className='smt cocogoose bold title'>Como funciona</h2>
    {sortedProjects.map(({ fields, sys }, idx) =>
      <Feature
        item={fields}
        key={sys?.id}
        isReverse={idx % 2 !== 0}
      />)}
  </section>
}