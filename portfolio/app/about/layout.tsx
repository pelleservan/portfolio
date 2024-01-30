import styles from './styles.module.css'

export default function AboutLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return <section className={styles.about}>{children}</section>
  }