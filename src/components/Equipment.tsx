import { useEffect, useMemo, useRef, useState } from 'react'
import { useI18n } from '../i18n'

export default function Equipment() {
  const { t } = useI18n()
  const images = useMemo(() => {
    const modules = import.meta.glob('../assets/*.{png,PNG,jpg,JPG,jpeg,JPEG,webp,WEBP,svg,SVG}', { eager: true, import: 'default' }) as Record<string, string>
    const urls = Object.entries(modules)
      .filter(([path]) => !/logo\.png$/i.test(path))
      // Exclude real estate hero extras: pla.* and gst-on-work-contract.*
      .filter(([path]) => !/(?:^|\\|\/)pla\./i.test(path))
      .filter(([path]) => !/gst-on-work-contract|work/i.test(path))
      .map(([, url]) => url)
      .filter(Boolean)
    return urls
  }, [])
  const [index, setIndex] = useState(0)
  const timerRef = useRef<number | null>(null)

  useEffect(() => {
    if (images.length === 0) return
    if (timerRef.current) window.clearInterval(timerRef.current)
    timerRef.current = window.setInterval(() => {
      setIndex(prev => (prev + 1) % images.length)
    }, 4500)
    return () => {
      if (timerRef.current) window.clearInterval(timerRef.current)
    }
  }, [images.length])

  return (
    <section id="equipment" className="section">
      <h2 className="section-title">{t('equipment.title')}</h2>
      <div className="card">
        <div className="flex items-start gap-4">
          <div className="h-12 w-12 flex items-center justify-center rounded-lg bg-yellow-400/20 text-yellow-300 border border-yellow-300/30 font-bold">🏗️</div>
          <div className="flex-1">
            <h3 className="card-title">{t('equipment.combinedTitle')}</h3>
            <p className="card-desc">{t('equipment.combinedBody')}</p>
          </div>
        </div>
        <div className="mt-5 justify-center flex">
          <div className="relative w-full max-w-4xl h-64 md:h-[28rem] rounded-xl overflow-hidden bg-black border border-white/10">
            {images.map((src, i) => (
              <div
                key={src}
                className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${i === index ? 'opacity-100' : 'opacity-0'}`}
              >
                <img src={src} alt="equipment" className={`w-full h-full object-contain object-center transition-transform duration-[4500ms] ease-out will-change-transform ${i === index ? 'translate-x-1' : '-translate-x-1'}`} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}


