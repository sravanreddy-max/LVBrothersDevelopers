import { useState } from 'react'
import { useI18n } from '../i18n'
import { company } from '../data/company'

export default function Contact() {
  const { t } = useI18n()
  const mapsUrl = `https://www.google.com/maps/place/SM+Residency/@17.733668,83.3394862,20.96z/data=!4m14!1m7!3m6!1s0x3a3945352e6e3645:0xd16ab47311ad349!2sTIRUMALA+EM+HIGH+SCHOOl!8m2!3d17.73378!4d83.3394655!16s%2Fg%2F11j7hmyfgf!3m5!1s0x3a394523e2214c93:0x37599d2480f1b153!8m2!3d17.7336516!4d83.3397485!16s%2Fg%2F11q8zjlqbg!5m1!1e1?entry=ttu&g_ep=EgoyMDI1MDkwOS4wIKXMDSoASAFQAw%3D%3D?api=1&query=${encodeURIComponent(company.googleMapsQuery)}`
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [details, setDetails] = useState('')

  const handleSubmit = () => {
    const trimmedName = name.trim()
    const digitsOnlyPhone = phone.replace(/\D/g, '')

    if (!digitsOnlyPhone || digitsOnlyPhone.length < 10) {
      alert('Please enter a valid phone number')
      return
    }

    const targetWhatsAppNumber = '917207944303'
    const messageLines = [
      'New callback request',
      `Name: ${trimmedName || '-'}`,
      `Phone: ${digitsOnlyPhone}`,
      ...(email.trim() ? [`Email: ${email.trim()}`] : []),
      `Details: ${details.trim() || '-'}`,
    ]
    const text = encodeURIComponent(messageLines.join('\n'))
    const waUrl = `https://wa.me/${targetWhatsAppNumber}?text=${text}`

    const newWindow = window.open(waUrl, '_blank')
    if (!newWindow) {
      window.location.href = waUrl
    }
  }
  return (
    <section id="contact" className="section">
      <h2 className="section-title">{t('contact.title')}</h2>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="card text-left">
          <h3 className="text-white font-semibold text-lg">{t('reach.title')}</h3>
          <div className="mt-2 text-gray-200 space-y-1">
            <div><span className="font-medium">{t('reach.phone')}:</span> {company.phone}</div>
            <div><span className="font-medium">{t('reach.email')}:</span> {company.email}</div>
            <div className="pt-2 font-medium text-white">{t('reach.address')}</div>
            <div>{company.addressLine1}</div>
            {company.addressLine2 && <div>{company.addressLine2}</div>}
            <div>{company.city}, {company.state} {company.pincode}</div>
            <div>{company.country}</div>
            <div className="pt-2"><span className="font-medium">{t('reach.hours')}:</span> {company.hours}</div>
          </div>
          <a href={mapsUrl} target="_blank" className="btn-secondary mt-4 inline-block">{t('reach.maps')}</a>
        </div>
        <div className="card">
          <form className="grid gap-3 text-left" onSubmit={(e) => e.preventDefault()}>
            <input
              className="input"
              placeholder={t('form.name')}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              className="input"
              placeholder={t('form.phone')}
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <input
              className="input"
              placeholder={t('form.email')}
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <textarea
              className="input min-h-32"
              placeholder={t('form.details')}
              value={details}
              onChange={(e) => setDetails(e.target.value)}
            ></textarea>
            <button type="button" className="btn-primary w-full" onClick={handleSubmit}>
              {t('form.submit')}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}


