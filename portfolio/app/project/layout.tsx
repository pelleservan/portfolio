import styles from './styles.module.css'

export default function ProjectLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return <section className={styles.project}>{children}</section>
  }