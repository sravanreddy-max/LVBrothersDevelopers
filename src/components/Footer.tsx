import logo from '../assets/logo.png'
import { useI18n } from '../i18n'
import { company } from '../data/company'

export default function Footer() {
  const { t } = useI18n()
  return (
    <footer className="w-full flex">
      <div className="bg-white justify-center w-full text-sm  text-gray-400 flex flex-col md:flex-row items-center gap-4">
        <div className="flex items-center gap-2">
          <img src={logo} alt="LV Brothers" className="h-20 w-35 rounded-full" />
          <span>
            © {new Date().getFullYear()} {company.name}. {t('footer.rights')}
          </span>
        </div>
      </div>
    </footer>
  )
}


