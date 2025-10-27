import { useState } from 'react'
import { useI18n, supportedLanguages } from '../i18n'

export default function LanguageSwitcher() {
  const { language, setLanguage, t } = useI18n()
  const [open, setOpen] = useState(false)
  const current = supportedLanguages.find(l => l.code === language)
  return (
    <div className="dropdown">
      <button className="dropdown-btn btn-secondary" onClick={() => setOpen(v => !v)} aria-haspopup="listbox" aria-expanded={open}>
        {t('lang.label')}: {current?.label ?? language.toUpperCase()}
      </button>
      {open && (
        <ul className="dropdown-menu" role="listbox">
          {supportedLanguages.map(({ code, label }) => (
            <li key={code}>
              <button
                className={`dropdown-item bg-black${code === language ? ' active' : ''}`}
                role="option"
                aria-selected={code === language}
                onClick={() => {
                  setLanguage(code)
                  setOpen(false)
                }}
              >
                {label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}


