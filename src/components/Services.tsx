import { useI18n } from '../i18n'
import { company } from '../data/company'

export default function Services() {
  const { t } = useI18n()
  return (
    <section id="services" className="section">
      <h2 className="section-title">{t('services.title')}</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {company.services.map((service, idx) => {
          const nameKey = `company.services.${idx}`
          const descKey = `company.services.${idx}.desc`
          const name = (() => {
            const v = t(nameKey)
            return v === nameKey ? service.name : v
          })()
          const desc = (() => {
            const v = t(descKey)
            return v === descKey ? service.description : v
          })()
          return (
            <div key={service.name} className="card">
              <h3 className="card-title">{name}</h3>
              <p className="card-desc">{desc}</p>
            </div>
          )
        })}
      </div>
    </section>
  )
}


