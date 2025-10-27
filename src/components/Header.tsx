import logo from '../assets/logo.png'
import { company } from '../data/company'
import { useI18n } from '../i18n'
// import LanguageSwitcher from './LanguageSwitcher'

export default function Header() {
  const { t } = useI18n()
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-black/30 border-b border-white/10">
      <div className="max-w-auto mx-auto px-4 py-3 flex items-center justify-between bg-white">
        <div className="flex items-center gap-3">
          <img src={logo} alt="LV Brothers Developers" className="h-20 w-35 rounded-full ring-2 ring-red-500" />
          <div className="leading-tight">
            <div className="text-red-500 font-extrabold tracking-wider">{company.name}</div>
            <div className="text-xs text-blue-500">{t('header.slogan')}</div>
          </div>
        </div>
        <nav className="hidden md:flex gap-6 text-sm">
          <a href="#services" className="nav-link mt-3">{t('nav.services')}</a>
          <a href="#equipment" className="nav-link mt-3">{t('nav.equipment')}</a>
          <a href="#about" className="nav-link mt-3">{t('nav.about')}</a>
          <a href="#contact" className="btn-primary">{t('nav.contact')}</a>
          {/* <LanguageSwitcher /> */}
        </nav>
      </div>
    </header>
  )
}


