import styles from '@/components/styles.module.css'
import ServiceIcon from "@/components/service-icons";
import CallBlock from "@/components/CallBlock";
import Link from "next/link";

const MAX_DISPLAY = 5

export default function Home() {
  return (
      <>
          <div className="space-y-5 mb-12 py-20 md:space-y-5 grid grid-cols-1 md:grid-cols-5 gap-8">
              <div className="md:col-span-3">
                  <h1 className="font-black tracking-tight text-gray-900 dark:text-gray-100 leading-8 sm:leading-10 text-4xl sm:text-5xl md:text-6xl md:leading-14">
                      Улучшаем бизнес с помощью
                      <span
                          className="text-warning type-services"> </span>
                      <span className="hidden">
                             уникального плана роста, современной разработки, включая внедрение CRM систем&
                        </span>
                  </h1>
                  <a href='/contacts'
                     className={styles.mainLink + ` hover:animate-shake text-lg leading-9 text-gray-500 dark:text-gray-400`}>
                      Свяжитесь с нами
                      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 42 42"
                           fill="currentColor" className="h-7 w-7 text-gray-500 dark:text-gray-400">
                          <path clipRule="evenodd"
                                d="M2.625 21C2.625 20.6519 2.76328 20.3181 3.00942 20.0719C3.25556 19.8258 3.5894 19.6875 3.9375 19.6875H34.8941L26.6332 11.4292C26.3868 11.1828 26.2483 10.8485 26.2483 10.5C26.2483 10.1515 26.3868 9.8172 26.6332 9.57074C26.8797 9.32429 27.214 9.18584 27.5625 9.18584C27.911 9.18584 28.2453 9.32429 28.4918 9.57074L38.9918 20.0707C39.114 20.1927 39.211 20.3375 39.2771 20.497C39.3433 20.6564 39.3773 20.8274 39.3773 21C39.3773 21.1726 39.3433 21.3436 39.2771 21.503C39.211 21.6625 39.114 21.8073 38.9918 21.9292L28.4918 32.4292C28.2453 32.6757 27.911 32.8142 27.5625 32.8142C27.214 32.8142 26.8797 32.6757 26.6332 32.4292C26.3868 32.1828 26.2483 31.8485 26.2483 31.5C26.2483 31.1515 26.3868 30.8172 26.6332 30.5707L34.8941 22.3125H3.9375C3.5894 22.3125 3.25556 22.1742 3.00942 21.9281C2.76328 21.6819 2.625 21.3481 2.625 21Z"/>
                      </svg>
                  </a>
              </div>
              <div className="md:col-span-2 !mt-0">
                  <div className="mockup-code bg-gray-900">
                      <pre data-prefix="1"><code><b className="text-gray-100">We develop and implement</b></code></pre>
                      <pre data-prefix=" "><code><b className="text-gray-100">software products:</b></code></pre>
                      <pre data-prefix="2" className="text-error"><code>web</code></pre>
                      <pre data-prefix="3" className="text-error"><code>e-commerce</code></pre>
                      <pre data-prefix="4" className="text-error"><code>ui/ux</code></pre>
                      <pre data-prefix="5" className="text-warning"><code>mobile</code></pre>
                      <pre data-prefix="6" className="text-success"><code>crm</code></pre>
                      <pre data-prefix="7" className="text-success"><code>1c-bitrix</code></pre>
                      <pre data-prefix="8" className="text-success"><code>bitrix-24</code></pre>
                      <pre data-prefix="9" className="text-error"><code>telegram-bots</code></pre>
                  </div>
              </div>
          </div>

          <div className="space-y-2 py-20 md:space-y-5 ">
              <div
                  className="sm:text-5xl text-4xl font-black hyphens-manual leading-8 sm:leading-10 tracking-tight text-gray-900 dark:text-gray-100 md:text-6xl md:leading-14">
                  Мы команда разработчи&shy;ков, специализи&shy;ру&shy;ющихся на <span
                  className="text-red-500">web-решениях,</span> направлен&shy;ных помочь нашим клиентам добиться успеха.
              </div>
          </div>

          <div className="space-y-2 py-20 md:space-y-5">
              <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
                  <div>
                      <h2 className="text-3xl md:text-4xl font-black leading-9 tracking-tight text-gray-900 dark:text-gray-100 mb-4">
                          Возьмем ваш проект в работу
                      </h2>
                      <p className="text-gray-600 text-xl dark:text-gray-300">
                          Максимально погрузимся в Вашу задачу и реализуем лучшим образом
                      </p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div
                          className={styles.card + ` hover:scale-105 transition duration-300 flex flex-col justify-between bg-gray-100 dark:bg-gray-900 !p-8`}>
                          <div>
                              <svg className="size-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"
                                   color="currentColor" fill="none">
                                  <path
                                      d="M14 2H10C6.72077 2 5.08116 2 3.91891 2.81382C3.48891 3.1149 3.1149 3.48891 2.81382 3.91891C2 5.08116 2 6.72077 2 10C2 13.2792 2 14.9188 2.81382 16.0811C3.1149 16.5111 3.48891 16.8851 3.91891 17.1862C5.08116 18 6.72077 18 10 18H14C17.2792 18 18.9188 18 20.0811 17.1862C20.5111 16.8851 20.8851 16.5111 21.1862 16.0811C22 14.9188 22 13.2792 22 10C22 6.72077 22 5.08116 21.1862 3.91891C20.8851 3.48891 20.5111 3.1149 20.0811 2.81382C18.9188 2 17.2792 2 14 2Z"
                                      stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
                                  <path
                                      d="M16 8L17.2265 9.05719C17.7422 9.50163 18 9.72386 18 10C18 10.2761 17.7422 10.4984 17.2265 10.9428L16 12"
                                      stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                                      stroke-linejoin="round"/>
                                  <path
                                      d="M8 8L6.77346 9.05719C6.25782 9.50163 6 9.72386 6 10C6 10.2761 6.25782 10.4984 6.77346 10.9428L8 12"
                                      stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                                      stroke-linejoin="round"/>
                                  <path d="M13 7L11 13" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                                        stroke-linejoin="round"/>
                                  <path d="M14.6557 22L14.2369 21.5811C13.2926 20.6369 13.0585 19.1944 13.6557 18"
                                        stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
                                  <path d="M9.00051 22L9.41937 21.5811C10.3636 20.6369 10.5977 19.1944 10.0005 18"
                                        stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
                                  <path d="M7 22H17" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
                              </svg>
                              <h4 className='font-bold text-xl pt-6 pb-2'>Сайты и веб-приложения</h4>
                              <div
                                  className={styles.cardProse + ` text-gray-800 dark:text-gray-300 pb-2 max-w-none xl:col-span-2`}>
                                  Измените дизайн существующего веб-сайта, создайте его с нуля или перенесите свой
                                  интернет-магазин на другую платформу.
                              </div>
                          </div>
                          <Link href='/development' className="inline-flex font-medium items-center">
                              Заказать
                              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 42 42"
                                   fill="currentColor" className="ml-1 h-5 w-5">
                                  <path clipRule="evenodd"
                                        d="M2.625 21C2.625 20.6519 2.76328 20.3181 3.00942 20.0719C3.25556 19.8258 3.5894 19.6875 3.9375 19.6875H34.8941L26.6332 11.4292C26.3868 11.1828 26.2483 10.8485 26.2483 10.5C26.2483 10.1515 26.3868 9.8172 26.6332 9.57074C26.8797 9.32429 27.214 9.18584 27.5625 9.18584C27.911 9.18584 28.2453 9.32429 28.4918 9.57074L38.9918 20.0707C39.114 20.1927 39.211 20.3375 39.2771 20.497C39.3433 20.6564 39.3773 20.8274 39.3773 21C39.3773 21.1726 39.3433 21.3436 39.2771 21.503C39.211 21.6625 39.114 21.8073 38.9918 21.9292L28.4918 32.4292C28.2453 32.6757 27.911 32.8142 27.5625 32.8142C27.214 32.8142 26.8797 32.6757 26.6332 32.4292C26.3868 32.1828 26.2483 31.8485 26.2483 31.5C26.2483 31.1515 26.3868 30.8172 26.6332 30.5707L34.8941 22.3125H3.9375C3.5894 22.3125 3.25556 22.1742 3.00942 21.9281C2.76328 21.6819 2.625 21.3481 2.625 21Z"/>
                              </svg>
                          </Link>
                      </div>
                      <div
                          className={styles.card + ` hover:scale-105 flex flex-col justify-between transition duration-300 bg-gray-100 dark:bg-gray-900 !p-8`}>
                          <div>
                              <svg className="size-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"
                                   color="currentColor" fill="none">
                                  <circle cx="8.5" cy="10.5" r="1.5" stroke="currentColor" stroke-width="1.5"/>
                                  <circle cx="14.5" cy="15.5" r="1.5" stroke="currentColor" stroke-width="1.5"/>
                                  <circle cx="18.5" cy="7.5" r="1.5" stroke="currentColor" stroke-width="1.5"/>
                                  <path d="M15.4341 14.2963L18 9M9.58251 11.5684L13.2038 14.2963M3 19L7.58957 11.8792"
                                        stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                                        stroke-linejoin="round"/>
                                  <path d="M20 21H9C5.70017 21 4.05025 21 3.02513 19.9749C2 18.9497 2 17.2998 2 14V3"
                                        stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
                              </svg>
                              <h4 className='font-bold text-xl pt-6 pb-2'>Корпоративные порталы и CRM</h4>
                              <div
                                  className={styles.cardProse + ` text-gray-800 dark:text-gray-300 pb-2 max-w-none xl:col-span-2`}>
                                  Улучшите показатели продаж, получайте аналитику, и оптимизируйте бизнес-процессы
                                  отделов с
                                  помощью современной системы.
                              </div>
                          </div>
                          <Link href='/implementation' className="inline-flex font-medium items-center">
                              Заказать
                              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 42 42"
                                   fill="currentColor" className="ml-1 h-5 w-5">
                                  <path clipRule="evenodd"
                                        d="M2.625 21C2.625 20.6519 2.76328 20.3181 3.00942 20.0719C3.25556 19.8258 3.5894 19.6875 3.9375 19.6875H34.8941L26.6332 11.4292C26.3868 11.1828 26.2483 10.8485 26.2483 10.5C26.2483 10.1515 26.3868 9.8172 26.6332 9.57074C26.8797 9.32429 27.214 9.18584 27.5625 9.18584C27.911 9.18584 28.2453 9.32429 28.4918 9.57074L38.9918 20.0707C39.114 20.1927 39.211 20.3375 39.2771 20.497C39.3433 20.6564 39.3773 20.8274 39.3773 21C39.3773 21.1726 39.3433 21.3436 39.2771 21.503C39.211 21.6625 39.114 21.8073 38.9918 21.9292L28.4918 32.4292C28.2453 32.6757 27.911 32.8142 27.5625 32.8142C27.214 32.8142 26.8797 32.6757 26.6332 32.4292C26.3868 32.1828 26.2483 31.8485 26.2483 31.5C26.2483 31.1515 26.3868 30.8172 26.6332 30.5707L34.8941 22.3125H3.9375C3.5894 22.3125 3.25556 22.1742 3.00942 21.9281C2.76328 21.6819 2.625 21.3481 2.625 21Z"/>
                              </svg>
                          </Link>
                      </div>
                  </div>
              </div>
          </div>

          <div className="space-y-2 py-20 md:space-y-5 ">
              <div
                  className="text-4xl sm:text-5xl font-black leading-8 sm:leading-10 tracking-tight text-gray-900 dark:text-gray-100 md:text-6xl md:leading-14">
                  <span className="text-blue-500">Наша миссия</span> - помочь своим клиентам зарабаты&shy;вать больше с
                  помощью <span className="text-violet-700">digital-решений.</span>
              </div>
          </div>

          <div className="space-y-2 py-20 md:space-y-5">
              <h2 className="text-3xl md:text-4xl font-black leading-9 tracking-tight text-gray-900 dark:text-gray-100">
                  Как мы работаем
              </h2>
              <ul className="timeline pt-4 timeline-snap-icon max-md:timeline-compact timeline-vertical ">
                  <li>
                      <div className="hover:scale-105 transition duration-300 timeline-start timeline-box bg-gray-100 dark:bg-gray-900 border-0">
                          <div className={styles.workCard + ' items-center sm:max-w-md max-w-xl p-4 '}>
                              <h4 className="font-black">
                                  01 — Аналитика и аудит
                              </h4>
                              <p className='max-w-none pb-2 pt-2 text-sm dark:prose-invert xl:col-span-2'>
                                  Мы начинаем с изучения вашего бренда, рынка и аудитории. Мы проверяем ваш
                                  существующий
                                  цифровой опыт и разрабатываем четкую дорожную карту для достижения ваших целей.
                              </p>
                          </div>
                      </div>
                      <div className="timeline-middle">
                          <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              className="text-primary h-5 w-5">
                              <path
                                  fillRule="evenodd"
                                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                  clipRule="evenodd"/>
                          </svg>
                      </div>
                      <hr/>
                  </li>
                  <li>
                      <hr/>
                      <div className="hover:scale-105 transition duration-300 timeline-end timeline-box bg-gray-100 dark:bg-gray-900 border-0">
                          <div className={styles.workCard + ' items-center sm:max-w-md max-w-xl p-4'}>
                              <h4 className="font-black">
                                  02 — Проектирование и модель
                              </h4>
                              <p className='max-w-none pb-2 pt-2 text-sm dark:prose-invert xl:col-span-2'>
                                  Мы уделяем особое внимание дизайну вашего сайта и пользовательскому опыту, изучая
                                  запоминающиеся способы продемонстрировать ваш бренд и продукты, при этом делая
                                  большую
                                  ставку на удобстве использования.
                              </p>
                          </div>
                      </div>
                      <div className="timeline-middle">
                          <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              className="text-primary h-5 w-5">
                              <path
                                  fillRule="evenodd"
                                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                  clipRule="evenodd"/>
                          </svg>
                      </div>
                      <hr/>
                  </li>
                  <li>
                      <hr/>
                      <div className="hover:scale-105 transition duration-300 timeline-start timeline-box bg-gray-100 dark:bg-gray-900 border-0">
                          <div className={styles.workCard + ' items-center sm:max-w-md max-w-xl p-4'}>
                              <h4 className="font-black">
                                  03 — Разработка и внедрение
                              </h4>
                              <p className='max-w-none pb-2 pt-2 text-sm dark:prose-invert xl:col-span-2'>
                                  Мы превращаем проекты в код и реализуем функции и интеграции для достижения
                                  необходимой
                                  функциональности. Мы тщательно тестируем, чтобы гарантировать качество.
                              </p>
                          </div>
                      </div>
                      <div className="timeline-middle">
                          <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              className="text-primary h-5 w-5">
                              <path
                                  fillRule="evenodd"
                                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                  clipRule="evenodd"/>
                          </svg>
                      </div>
                      <hr/>
                  </li>
                  <li>
                      <hr/>
                      <div className="hover:scale-105 transition duration-300 timeline-end timeline-box bg-gray-100 dark:bg-gray-900 border-0">
                          <div className={styles.workCard + ' items-center sm:max-w-md max-w-xl p-4'}>
                              <h4 className="font-black">
                                  04 — Развертывание и оптимизация
                              </h4>
                              <p className='max-w-none pb-2 pt-2 text-sm dark:prose-invert xl:col-span-2'>
                                  Мы составляем наш контрольный список перед запуском, который включает в себя
                                  соображения по
                                  доступности, SEO и отслеживанию аналитики. Затем мы предлагаем поддержку после
                                  запуска.
                              </p>
                          </div>
                      </div>
                      <div className="timeline-middle">
                          <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              className="text-primary h-5 w-5">
                              <path
                                  fillRule="evenodd"
                                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                  clipRule="evenodd"/>
                          </svg>
                      </div>
                      <hr/>
                  </li>
              </ul>

          </div>
          <div className="space-y-5 mb-12 py-20 md:space-y-5 grid">
              <CallBlock/>
          </div>
      </>
  )
}
