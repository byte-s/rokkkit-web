import { ReactNode } from 'react'
import ServiceIcon from '@/components/service-icons'
import styles from '@/components/styles.module.css'
import CallBlock from '@/components/CallBlock'

interface Props {
  children: ReactNode
}

export default function AuthorLayout({}: Props) {

  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            О нас
          </h1>
        </div>
        <div className="items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
          <div className="flex flex-col items-start space-x-2 pt-8">
            <h3 className={styles.head+` text-xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14`}>
              Кто мы?
            </h3>
            <div className={styles.prose+ ` prose max-w-none pb-2 pt-2 dark:prose-invert xl:col-span-2`}>
              Мы команда разработчиков, специализирующихся на web-решениях, направленных помочь нашим клиентам добиться успеха.
            </div>
            <div className={styles.prose+ ` prose max-w-none pb-2 pt-2 dark:prose-invert xl:col-span-2`}>
              Наша миссия - помочь своим клиентам зарабатывать больше с помощью digital-решений. 
            </div>
          </div>
          <div className="prose max-w-none pb-8 pt-8 dark:prose-invert xl:col-span-2">
            <h3 className={styles.head+` text-xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14`}>
              Цель и ценности
            </h3>
            <div className={styles.prose+ ` prose max-w-none pb-2 pt-2 dark:prose-invert xl:col-span-2`}>
              Компания Rokkit существует для того, чтобы предоставлять нашим клиентам исключительный сервис и работу, дающую впечатляющие результаты. Наши ценности, приведенные ниже, поддерживают нашу цель.
            </div>
            <div className={styles.cardsWrapper+` bg-gray-900 dark:bg-gray-100 p-4 space-y-2 lg:grid lg:grid-cols-2 gap-y-4 gap-x-4`}>
              <div className={styles.card+` animate-jump-in animate-once animate-duration-[1000ms] bg-gray-100 dark:bg-gray-900`}>
                <h4 className={styles.cardHead+` text-gray-900 dark:text-gray-100 `}>
                  Вся обратная связь - полезная информация
                </h4>
                <div className={styles.cardProse+ ` text-gray-800 dark:text-gray-300 max-w-none pb-2 pt-2 xl:col-span-2`}>
                  Мы рассматриваем обратную связь как ценную информацию и активно собираем её. Это помогает нам учиться, расти и улучшать нашу работу.
                </div>
              </div>
              <div className={styles.card+` animate-jump-in animate-once animate-duration-[1000ms] animate-delay-[500ms] bg-gray-100 dark:bg-gray-900`}>
                <h4 className={styles.cardHead+` text-gray-900 dark:text-gray-100`}>
                  Превратите неудачи в возможности роста
                </h4>
                <div className={styles.cardProse+ ` text-gray-800 dark:text-gray-300 max-w-none pb-2 pt-2 xl:col-span-2`}>
                Ошибки, потери и упущенные возможности — это шансы на улучшение. Мы используем полученные уроки, чтобы в следующий раз добиться лучшего результата.
                </div>
              </div>
              <div className={styles.card+` animate-jump-in animate-once animate-duration-[1000ms] animate-delay-[1000ms] bg-gray-100 dark:bg-gray-900`}>
                <h4 className={styles.cardHead+` text-gray-900 dark:text-gray-100`}>
                  Работать на долгосрочную перспективу
                </h4>
                <div className={styles.cardProse+ ` text-gray-800 dark:text-gray-300 max-w-none pb-2 pt-2 xl:col-span-2`}>
                  Мы терпеливо работаем для достижения достойных результатов. Мы не ищем коротких путей и всегда будем уделять особое внимание нашей честности и отношениям с клиентами и поставщиками.
                </div>
              </div>
              <div className={styles.card+` animate-jump-in animate-once animate-duration-[1000ms] animate-delay-[1500ms] bg-gray-100 dark:bg-gray-900`}>
                <h4 className={styles.cardHead+` text-gray-900 dark:text-gray-100`}>
                  Быть инициативным
                </h4>
                <div className={styles.cardProse+ ` text-gray-800 dark:text-gray-300 max-w-none pb-2 pt-2 xl:col-span-2`}>
                  Мы сконцентрированы на том, на что можем повлиять, и действуем безотлагательно. Мы берем на себя ответственность и не спешим обвинять других.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="items-start space-y-2 ">
          <div className="flex flex-col items-start pt-8">
            <h3 className={styles.head+` pb-6 text-xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14`}>
              Наши основные услуги
            </h3>
            <div className={styles.cardsWrapper+` space-y-2 xl:grid xl:grid-cols-3 gap-y-4 gap-x-8`}>
              <div className={styles.card+` animate-jump-in animate-once animate-duration-[1000ms] animate-delay-[2000ms] bg-gray-900 dark:bg-gray-100`}>
                <div className={styles.cardHead+` text-gray-100 dark:text-gray-900`}>
                  <ServiceIcon kind="web" size={4} />
                  <h4 className='ml-2'>Сайты и веб-приложения</h4>
                </div>
                <div className={styles.cardProse+ ` text-gray-300 dark:text-gray-800 max-w-none pb-2 pt-2 xl:col-span-2`}>
                  Измените дизайн существующего веб-сайта, создайте его с нуля или перенесите свой интернет-магазин на другую платформу.
                </div>
              </div>
              <div className={styles.card+` animate-jump-in animate-once animate-duration-[1000ms] animate-delay-[2500ms] bg-gray-900 dark:bg-gray-100`}>
                <div className={styles.cardHead+` text-gray-100 dark:text-gray-900`}>
                  <ServiceIcon kind="crm" size={4} />
                  <h4 className='ml-2'>Внедрение CRM</h4>
                </div>
                <div className={styles.cardProse+ ` text-gray-300 dark:text-gray-800 max-w-none pb-2 pt-2 xl:col-span-2`}>
                  Улучшите показатели продаж, получайте аналитику, и оптимизируйте бизнес-процессы отделов с помощью современной системы.
                </div>
              </div>
              <div className={styles.card+` animate-jump-in animate-once animate-duration-[1000ms] animate-delay-[3000ms] bg-gray-900 dark:bg-gray-100`}>
                <div className={styles.cardHead+` text-gray-100 dark:text-gray-900`}>
                  <ServiceIcon kind="design" size={4} />
                  <h4 className='ml-2'>Графический дизайн</h4>
                </div>
                <div className={styles.cardProse+ ` text-gray-300 dark:text-gray-800 max-w-none pb-2 pt-2 xl:col-span-2`}>
                  Есть идея? Воплотим вашу идею в дизайн-макете вашего нового сайта, веб и мобильного приложения.
                </div>
              </div>
              <div className={styles.card+` animate-jump-in animate-once animate-duration-[1000ms] animate-delay-[3500ms] bg-gray-900 dark:bg-gray-100`}>
                <div className={styles.cardHead+` text-gray-100 dark:text-gray-900`}>
                  <ServiceIcon kind="bot" size={4} />
                  <h4 className='ml-2'>Telegram-боты и веб-боты</h4>
                </div>
                <div className={styles.cardProse+ ` text-gray-300 dark:text-gray-800 max-w-none pb-2 pt-2 xl:col-span-2`}>
                  Автоматизируйте процессы и решайте большинство задач с помощью Telegram. Для Ecommerce и сферы услуг - мини-приложения прямо внутри вашего бота.
                </div>
              </div>
              <div className={styles.card+` animate-jump-in animate-once animate-duration-[1000ms] animate-delay-[4000ms] bg-gray-900 dark:bg-gray-100`}>
                <div className={styles.cardHead+` text-gray-100 dark:text-gray-900`}>
                  <ServiceIcon kind="ad" size={4} />
                  <h4 className='ml-2'>Маркировка рекламы</h4>
                </div>
                <div className={styles.cardProse+ ` text-gray-300 dark:text-gray-800 max-w-none pb-2 pt-2 xl:col-span-2`}>
                  Получите квалифицированную помощь в маркировке интернет-рекламы и уверенность в овладении методами маркировки, которые позволят вам избежать штрафов и стресса
                </div>
              </div>
            </div>
          </div>
          
        </div>
        <div className="items-start space-y-2 ">
          <div className="flex flex-col items-start pt-8 pb-8">
            <h3 className={styles.head+` pb-6 text-xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14`}>
              Как мы работаем
            </h3>
            <div className={styles.cardsWrapper+`space-y-2 grid grid-cols-2 xl:grid xl:grid-cols-4 gap-y-4 gap-x-8`}>
              <div className={styles.workCard}>
                <img src="/static/images/work-1.png" alt="Аналитика и аудит" />
                <h4>
                  01 — Аналитика и аудит
                </h4>
                <p className='prose max-w-none pb-2 pt-2 dark:prose-invert xl:col-span-2'>
                  Мы начинаем с изучения вашего бренда, рынка и аудитории. Мы проверяем ваш существующий цифровой опыт и разрабатываем четкую дорожную карту для достижения ваших целей.
                </p>
              </div>
              <div className={styles.workCard}>
                <img src="/static/images/work-2.png" alt="Проектирование и модель" />
                <h4>
                  02 — Проектирование и модель
                </h4>
                <p className='prose max-w-none pb-2 pt-2 dark:prose-invert xl:col-span-2'>
                  Мы уделяем особое внимание дизайну вашего сайта и пользовательскому опыту, изучая запоминающиеся способы продемонстрировать ваш бренд и продукты, при этом делая большую ставку на удобстве использования.
                </p>
              </div>
              <div className={styles.workCard}>
                <img src="/static/images/work-3.png" alt="Разработка и внедрение" />
                <h4>
                  03 — Разработка и внедрение
                </h4>
                <p className='prose max-w-none pb-2 pt-2 dark:prose-invert xl:col-span-2'>
                  Мы превращаем проекты в код и реализуем функции и интеграции для достижения необходимой функциональности. Мы тщательно тестируем, чтобы гарантировать качество.
                </p>
              </div>
              <div className={styles.workCard}>
                <img src="/static/images/work-4.png" alt="Развертывание и оптимизация" />
                <h4>
                  04 — Развертывание и оптимизация
                </h4>
                <p className='prose max-w-none pb-2 pt-2 dark:prose-invert xl:col-span-2'>
                  Мы составляем наш контрольный список перед запуском, который включает в себя соображения по доступности, SEO и отслеживанию аналитики. Затем мы предлагаем поддержку после запуска.
                </p>
              </div>
            </div>
          </div>
        </div>
        <CallBlock/>
      </div>
    </>
  )
}
