import { useEffect, useMemo, useRef, useState } from 'react'
import { useI18n } from '../i18n'
import { company } from '../data/company'

export default function Hero() {
  const { t } = useI18n()

  // Load ALL images from the real estate folder (any extension)
  const slides = useMemo(() => {
    const estateModules = import.meta.glob('../assets/real estate/*.{png,PNG,jpg,JPG,jpeg,JPEG,webp,WEBP,avif,AVIF}', {
      eager: true,
      import: 'default',
    }) as Record<string, string>

    // Explicitly include two more images from the top-level assets folder: "pla" and "work"
    const extraModules = import.meta.glob('../assets/*.{png,PNG,jpg,JPG,jpeg,JPEG,webp,WEBP,avif,AVIF}', {
      eager: true,
      import: 'default',
    }) as Record<string, string>

    const estateUrls = Object.entries(estateModules)
      .sort(([a], [b]) => a.localeCompare(b))
      .map(([, url]) => url)

    const extraUrls = Object.entries(extraModules)
      .filter(([path]) => /(?:^|\\|\/)pla\./i.test(path) || /gst-on-work-contract|work/i.test(path))
      .sort(([a], [b]) => a.localeCompare(b))
      .map(([, url]) => url)

    const unique = Array.from(new Set([...estateUrls, ...extraUrls]))
    return unique
  }, [])

  const [index, setIndex] = useState(0)
  const timerRef = useRef<number | null>(null)

  useEffect(() => {
    if (slides.length === 0) return
    if (timerRef.current) window.clearInterval(timerRef.current)
    timerRef.current = window.setInterval(() => {
      setIndex(prev => (prev + 1) % slides.length)
    }, 4500)
    return () => {
      if (timerRef.current) window.clearInterval(timerRef.current)
    }
  }, [slides.length])

  return (
    <section className="relative overflow-hidden">
      {/* Foreground content (text first) */}
      <div className="relative max-w-7xl mx-auto px-4 py-20 md:py-28 text-center flex flex-col items-center justify-center">
        <h1 className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-xl">{t('hero.title')}</h1>
        <p className="mt-4 text-lg md:text-xl text-gray-200 max-w-3xl mx-auto">
          {(() => {
            const v = t('company.description', { company: company.name })
            return v === 'company.description' ? company.description : v
          })()}
        </p>
        <div className="mt-8 flex items-center justify-center gap-4">
          <a href="#contact" className="btn-primary">{t('hero.ctaQuote')}</a>
          <a href="#services" className="btn-primary">{t('hero.ctaServices')}</a>
        </div>
      </div>

      {/* Slideshow moved below the hero text */}
      <div className="max-w-7xl mx-auto px-4 pb-16">
        <div className="relative w-full h-64 md:h-[28rem] overflow-hidden rounded-xl bg-black">
          {slides.map((src, i) => (
            <div
              key={src}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${i === index ? 'opacity-100' : 'opacity-0'}`}
            >
              <img
                src={src}
                alt="real estate"
                className={`w-full h-full object-contain transition-transform duration-[4500ms] ease-out will-change-transform ${i === index ? 'scale-105' : 'scale-100'}`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

 