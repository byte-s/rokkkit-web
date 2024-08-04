import styles from '@/components/styles.module.css';
import CallBlock from "@/components/CallBlock";
import Link from "next/link";
import '@/components/slider.css'
import Image from 'next/image'
import webimg from '../public/static/images/04.png'
import crm from '../public/static/images/11.png'
import commerce from '../public/static/images/32.png'
import gov from '../public/static/images/103.png'
import enterprise from '../public/static/images/125.png'

export default function Home() {
  return (
      <>
          <div className="space-y-5 mb-12 py-20 md:space-y-5 justify-center sm:justify-between items-center grid grid-cols-1 sm:grid-cols-5 gap-y-8 sm:gap-4">
              <div className="col-span-3">
                  <div
                      className="mb-2 font-black tracking-tight text-gray-900 dark:text-gray-100 leading-8 sm:leading-10 text-4xl sm:text-5xl md:text-6xl md:leading-14">
                      Улучшаем бизнес с помощью
                    <span
                      className="ml-1 inline-flex flex-col h-8 sm:h-12 md:h-14 overflow-hidden">
                        <ul className="rounded-lg block animate-text-slide text-left [&_li]:block">
                            <li className={'text-[#FB3BA9]'}>WEB</li>
                            <li className={'text-[#F9EB65]'}>CRM</li>
                            <li className={'text-[#9E63FF]'}>AI</li>
                            <li className={'text-[#00EC18]'}>UX</li>
                            <li className={'text-[#00EC18]'}>UI</li>
                            <li className={'text-[#FB3BA9]'} aria-hidden="true">WEB</li>
                        </ul>
                    </span>
                  </div>
                  <span className="mt-4 md:text-2xl text-xl">Создаем цифровые решения для бизнеса, e-commerce и корпораций</span>
              </div>
              <div className="col-span-2 !mt-0 grid !justify-center">
                  <div className="square twitter md:size-[250px] size-[150px]">
                      <span></span>
                      <span></span>
                      <span></span>
                      <div className="md:text-xl text-lg content text-black dark:text-white dark:hover:text-black hover:text-white">
                          <a className='border-white px-4 py-2 md:px-6 md:py-3 border-2 dark:border-gray-950' href="/contacts">Свяжитесь с нами</a>
                      </div>
                  </div>
              </div>
          </div>

          <div className="space-y-2 py-20 md:space-y-5 ">
              <div
                  className="sm:text-5xl text-4xl font-black hyphens-manual leading-8 sm:leading-10 tracking-tight text-gray-900 dark:text-gray-100 md:text-6xl md:leading-14">
                  Мы команда разработчи&shy;ков, специализи&shy;ру&shy;ющихся на <span
                  className="text-[#FB3BA9]">web-решениях,</span> направлен&shy;ных помочь нашим клиентам добиться успеха.
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
                              <Image className={'size-32'} src={webimg} alt={'Web'}/>
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
                              <Image className={'size-32'} src={crm} alt={'Crm'}/>
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
                  <span className="text-[#9E63FF]">Наша миссия</span> - помочь своим клиентам зарабаты&shy;вать больше с
                  помощью <span className="text-[#FB3BA9]">digital-решений.</span>
              </div>
          </div>

          <div className="space-y-2 py-20 md:space-y-5">
              <h2 className="text-3xl md:text-4xl font-black leading-9 tracking-tight text-gray-900 dark:text-gray-100">
                  С кем мы работаем
              </h2>
              <div className="grid md:grid-cols-3 gap-4">
                  <div
                      className={styles.card + ` [&_span]:hover:bg-[#00EC18] [&_span]:hover:!border-black [&_span]:hover:!text-white hover:scale-105 flex flex-col justify-between transition duration-300 bg-gray-100 dark:bg-gray-900 !p-8`}>
                      <div>

                          <h4 className='font-bold text-2xl pt-2 pb-2'>Коммерческий сектор</h4>
                          <div
                              className={` text-lg leading-5 text-gray-800 dark:text-gray-300 pb-2 max-w-none xl:col-span-2`}>
                              Различные задачи от разработки лендинга до сложной автоматизации системы управления
                              продажами.
                          </div>
                          <div className="grid grid-cols-2 md:grid-cols-1 lg:grid-cols-2 justify-items-center items-center">
                              <span className="text-lg draw-border !border-gray-500 leading-4">
                                  Есть большой опыт работы с этим
                              </span>
                              <Image className={'size-24'} src={commerce} alt={'Commerce'}/>
                          </div>
                      </div>
                  </div>
                  <div
                      className={styles.card + ` [&_span]:hover:bg-[#9E63FF] [&_span]:hover:!border-black [&_span]:hover:!text-white hover:scale-105 flex flex-col justify-between transition duration-300 bg-gray-100 dark:bg-gray-900 !p-8`}>
                      <div>

                          <h4 className='font-bold text-2xl pt-2 pb-2'>Государственный сектор</h4>
                          <div
                              className={` text-lg leading-5 text-gray-800 dark:text-gray-300 pb-2 max-w-none xl:col-span-2`}>
                              Мы имеем опыт работы с нормативно-правовыми документами, определяющих примене IT в гос.
                              учреждениях.
                          </div>
                          <div className="grid grid-cols-2 md:grid-cols-1 lg:grid-cols-2 justify-items-center items-center">
                              <span className="text-lg draw-border !border-gray-500 leading-4">
                                  Участвуем в закупках по 44 и 223-ФЗ
                              </span>
                              <Image className={'size-24'} src={gov} alt={'Government'}/>
                          </div>
                      </div>
                  </div>
                  <div
                      className={styles.card + ` [&_span]:hover:bg-[#FB3BA9] [&_span]:hover:!border-black [&_span]:hover:!text-white hover:scale-105 flex flex-col justify-between transition duration-300 bg-gray-100 dark:bg-gray-900 !p-8`}>
                      <div>

                          <h4 className='font-bold text-2xl pt-2 pb-2'>Корпоративный сектор</h4>
                          <div
                              className={` text-lg leading-5 text-gray-800 dark:text-gray-300 pb-2 max-w-none xl:col-span-2`}>
                              CRM-системы, корпоративные порталы, LMS и инструменты для аналитики больших объемов. Умеем работать согласно стилю компании.
                          </div>
                          <div className="grid grid-cols-2 md:grid-cols-1 lg:grid-cols-2 justify-items-center items-center">
                              <span className="text-lg draw-border !border-gray-500 leading-4">
                                  Работем без лишних вопросов
                              </span>
                              <Image className={'size-24'} src={enterprise} alt={'Enterprise'}/>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          <div className="space-y-5 mb-12 py-20 md:space-y-5 grid">
              <CallBlock/>
          </div>
      </>
  )
}