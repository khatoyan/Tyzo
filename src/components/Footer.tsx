import React from 'react'
import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="bg-white" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">Footer</h2>
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-bold text-primary-600">Tyzo</span>
            </Link>
            <p className="text-sm leading-6 text-gray-600">
              Бесплатное создание сайтов с ежемесячной подпиской, которая включает хостинг, техническую поддержку и обновления.
            </p>
            <div className="flex space-x-6">
              <a href="https://t.me/tyzosite" className="text-gray-400 hover:text-gray-500">
                <span className="sr-only">Telegram</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.96 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                </svg>
              </a>
            </div>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-gray-900">Услуги</h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li>
                    <Link href="/services/landing" className="text-sm leading-6 text-gray-600 hover:text-gray-900">
                      Лендинги
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/corporate" className="text-sm leading-6 text-gray-600 hover:text-gray-900">
                      Корпоративные сайты
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/ecommerce" className="text-sm leading-6 text-gray-600 hover:text-gray-900">
                      Интернет-магазины
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/development" className="text-sm leading-6 text-gray-600 hover:text-gray-900">
                      Разработка
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-gray-900">Компания</h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li>
                    <Link href="/about" className="text-sm leading-6 text-gray-600 hover:text-gray-900">
                      О нас
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog" className="text-sm leading-6 text-gray-600 hover:text-gray-900">
                      Блог
                    </Link>
                  </li>
                  <li>
                    <Link href="/portfolio" className="text-sm leading-6 text-gray-600 hover:text-gray-900">
                      Портфолио
                    </Link>
                  </li>
                  <li>
                    <Link href="/prices" className="text-sm leading-6 text-gray-600 hover:text-gray-900">
                      Тарифы
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-gray-900">Контакты</h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li className="text-sm leading-6 text-gray-600">
                    <span className="font-semibold">Телефон:</span> <a href="tel:89954377300" className="hover:text-gray-900">8 995 437-73-00</a>
                  </li>
                  <li className="text-sm leading-6 text-gray-600">
                    <span className="font-semibold">Email:</span> <a href="mailto:tyzo.site.company@gmail.com" className="hover:text-gray-900">tyzo.site.company@gmail.com</a>
                  </li>
                  <li>
                    <Link href="/contact" className="text-sm leading-6 text-primary-600 font-semibold hover:text-primary-500">
                      Связаться с нами →
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-gray-900">Документы</h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li>
                    <a href="#" className="text-sm leading-6 text-gray-600 hover:text-gray-900">
                      Политика конфиденциальности
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-sm leading-6 text-gray-600 hover:text-gray-900">
                      Публичная оферта
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-sm leading-6 text-gray-600 hover:text-gray-900">
                      Правила использования
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-sm leading-6 text-gray-600 hover:text-gray-900">
                      Согласие на обработку данных
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-gray-900/10 pt-8 sm:mt-20 lg:mt-24">
          <p className="text-xs leading-5 text-gray-500">
            &copy; {currentYear} Tyzo. Все права защищены. ИНН: 12345678 | ОГРН: 1234567890
          </p>
        </div>
      </div>
    </footer>
  )
} 