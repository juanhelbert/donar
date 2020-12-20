import { donation } from '../../assets/illustrations'
import styles from './Introduction.module.scss'

export const Introduction = ({ data }) => {
  const { title, subtitle } = data || {}
  return <section className={styles.introduction}>
    <div>
      <h1 className='cocogoose bold'>{title}</h1>
      <p className='cocogoose gray'>{subtitle}</p>
    </div>
    <div>
      {donation}
    </div>
  </section>
}