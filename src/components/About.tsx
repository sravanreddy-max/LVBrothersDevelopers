import { useI18n } from '../i18n'
import { company } from '../data/company'

export default function About() {
  const { t } = useI18n()
  const body = t('about.body', { company: company.name })
  const paragraphs = body.split('\n\n')
  return (
    <section id="about" className="section">
      <h2 className="section-title">{t('about.title')}</h2>
      <div className="card">
        {paragraphs.map((text, idx) => (
          <p key={idx} className={`card-desc${idx > 0 ? ' mt-3' : ''}`}>{text}</p>
        ))}
      </div>
    </section>
  )
}

 