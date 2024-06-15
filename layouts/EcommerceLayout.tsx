'use client'
import { ReactNode } from 'react'
import { CoreContent } from 'pliny/utils/contentlayer'
import type { Blog, Authors } from '.contentlayer/generated'
import Link from '@/components/Link'
import PageTitle from '@/components/PageTitle'
import SectionContainer from '@/components/SectionContainer'
import Image from '@/components/Image'
import siteMetadata from '@/data/siteMetadata'
import ScrollTopAndComment from '@/components/ScrollTopAndComment'
import { CheckIcon } from '@heroicons/react/20/solid'
import Slider from 'react-slick'
import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "@/components/slider.css"
import CallBlock from '@/components/CallBlock'
import ShortForm from '@/components/shortForm'
import { IoCheckbox } from "react-icons/io5";
import { List } from 'flowbite-react'
import Tabs from '@mui/joy/Tabs';
import TabList from '@mui/joy/TabList';
import Tab from '@mui/joy/Tab';
import TabPanel from '@mui/joy/TabPanel';
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import ShortFormInvert from '@/components/shortFormInvert'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

import { IoRemove } from "react-icons/io5";

const editUrl = (path) => `${siteMetadata.siteRepo}/blob/main/data/${path}`
const discussUrl = (path) =>
  `https://mobile.twitter.com/search?q=${encodeURIComponent(`${siteMetadata.siteUrl}/${path}`)}`

const postDateTemplate: Intl.DateTimeFormatOptions = {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
}

interface LayoutProps {
  content: CoreContent<Blog>
  authorDetails: CoreContent<Authors>[]
  next?: { path: string; title: string }
  prev?: { path: string; title: string }
  children: ReactNode
}

export default function EcommerceLayout({ content, authorDetails, next, prev, children }: LayoutProps) {
  const { filePath, path, slug, date, title, tags, summary, headerimage} = content
  const basePath = path.split('/')[0]

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
        {
          breakpoint: 1280,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        }
    ]
  };

  return (
    <>
        <SectionContainer>
            <ScrollTopAndComment />
            <article>
                <div>
                    <header className='grid lg:grid-cols-2 lg:grid-rows-1 items-center justify-between my-8'>
                        <div className='row-start-1 lg:row-start-auto'>
                            <h1 className='text-5xl mb-4 font-bold'>
                            {title}
                            </h1>
                            <h2 className='text-xl mb-4'>
                                {summary}
                            </h2>
                            <ShortForm></ShortForm>
                        </div>
                        <div className='grid lg:row-end-auto row-end-1 lg:justify-end lg:justify-items-end justify-start justify-items-start'>
                            <img className="mb-4 w-full max-h-80"src={headerimage}></img>
                        </div>
                    </header>
                    <div className="divide-y divide-gray-200 dark:divide-gray-700 xl:col-span-3 xl:row-span-2 xl:pb-0">
                    <div className="prose max-w-none pb-4 pt-10 dark:prose-invert">{children}</div>
                    </div>
                    <div className="xl:col-span-3 mt-4 text-2xl font-bold xl:row-span-2 pb-4 xl:pb-0">
                        <div className="w-full">
                            <div className='slider-container'>
                            <Slider {...settings} className="">
                                <div className='flex'>
                                    <div className='h-72 flex-col flex justify-center items-top dark:text-gray-900 bg-gray-200 p-8 dark:bg-gray-100 rounded-md'>
                                        <div className='mb-2 text-xl font-bold'>
                                            Удобным для пользователя
                                        </div>
                                        <div className='text-base font-light'>
                                            Создание современного интернет‑магазина предполагает проработку UI/UX дизайна. При подобном подходе внедряются конверсионные пути и разрабатывается пользовательский интерфейс. Для этого создается понятная иерархия структуры, удобная система навигации, учитывается расположение конверсионных форм на страницах товаров и категорий.
                                        </div>
                                    </div>
                                </div>
                                
                                <div className='flex'>
                                    <div className='h-72 flex-col flex justify-center items-top dark:text-gray-900 bg-gray-200 p-8 dark:bg-gray-100 rounded-md'>
                                        <div className='mb-2 text-xl font-bold'>
                                            Современный
                                        </div>
                                        <div className='text-base font-light'>
                                            Внешний вид формирует первое впечатление пользователя о сайте и во многом влияет на решение о покупке. Современный дизайн должен иметь цельную, завершенную концепцию, а также отражать фирменный стиль бренда и особенности продвигаемого продукта. В зависимости от заложенного бюджета, мы используем готовое решение или создаем уникальное с нуля.
                                        </div>
                                    </div>
                                </div>

                                <div className='flex'>
                                    <div className='h-72 flex-col flex justify-center items-top dark:text-gray-900 bg-gray-200 p-8 dark:bg-gray-100 rounded-md'>
                                        <div className='mb-2 text-xl font-bold'>
                                            Адаптивный
                                        </div>
                                        <div className='text-base font-light'>
                                            Для комфортного взаимодействия пользователя с сайтом требуется корректное отображение ресурса на всех устройствах, разрешениях, операционных системах, во всех браузерах. Плюсом адаптивности является сохранение функциональности и юзабилити сайта при работе на любом гаджете.
                                        </div>
                                    </div>
                                </div>

                                <div className='flex'>
                                    <div className='h-72 flex-col flex justify-center items-top dark:text-gray-900 bg-gray-200 p-8 dark:bg-gray-100 rounded-md'>
                                        <div className='mb-2 text-xl font-bold'>
                                            Оптимизированный под поиск
                                        </div>
                                        <div className='text-base font-light'>
                                            Каждый этап разработки проводится согласно рекомендациям SEO-специалиста, что обеспечивает органичное продвижение сайта в поисковых системах сразу после релиза. Для этого проводится базовая оптимизация страниц, функциональное и юзабилити-тестирование, настройка индексации.
                                        </div>
                                    </div>
                                </div>

                                <div className='flex'>
                                    <div className='h-72 flex-col flex justify-center items-top dark:text-gray-900 bg-gray-200 p-8 dark:bg-gray-100 rounded-md'>
                                        <div className='mb-2 text-xl font-bold'>
                                            Продающий
                                        </div>
                                        <div className='text-base font-light'>
                                            В услугу включена разработка UX-дизайна, пользовательского интерфейса (UI), детально прорабатываются карточки товаров. На основе проведенного аудита составляются конверсионные маршруты — предполагаемый путь пользователей по сайту до этапа оформления заказа. Проработка каждой мелочи и работа с юзабилити позволяют создать сайт, который решает цель визита пользователей и стимулирует продажи.
                                        </div>
                                    </div>
                                </div>

                                <div className='flex'>
                                    <div className='h-72 flex-col flex justify-center items-top dark:text-gray-900 bg-gray-200 p-8 dark:bg-gray-100 rounded-md'>
                                        <div className='mb-2 text-xl font-bold'>
                                            Быстрый
                                        </div>
                                        <div className='text-base font-light'>
                                            Готовый ресурс полностью оптимизирован и быстро загружается как в desktop-версии, так и с мобильных гаджетов. Это достигается за счет расчета нагрузки и подбора подходящего по мощности хостинга, написания чистого валидного кода, а также проведения технической оптимизации.
                                        </div>
                                    </div>
                                </div>

                                <div className='flex'>
                                    <div className='h-72 flex-col flex justify-center items-top dark:text-gray-900 bg-gray-200 p-8 dark:bg-gray-100 rounded-md'>
                                        <div className='mb-2 text-xl font-bold'>
                                            Удобный в управлении
                                        </div>
                                        <div className='text-base font-light'>
                                            Проводим интеграцию с CMS, что значительно упрощает администрирование сайта после релиза. CMS позволяет самостоятельно наполнять сайт контентом, работать со структурой, редактировать 1000+ товаров одним кликом, настраивать плагины и установленные модули без необходимости в привлечении специалистов. Это удобно, быстро, а главное, безопасно.
                                        </div>
                                    </div>
                                </div>
                            </Slider>
                            </div>
                        </div>
                    </div>
                    <div className="xl:col-span-3 mt-5 text-2xl font-bold xl:row-span-2 pb-4 xl:pb-0">
                        <div className="xl:col-span-3 mt-5 text-2xl font-bold xl:row-span-2 pb-4 xl:pb-0">
                            <h2 className='py-4'>Этапы работ</h2>
                            <div className="w-full">
                                <div className='font-normal text-base'>
                                    Услуга разработки под ключ строго регламентирована и реализовывается поэтапно.
                                </div>
                                <div className='grid grid-cols-2 gap-4 mt-4 xl:grid-cols-3'>
                                    <div className='border border-gray-400 dark:hover:bg-gray-100 dark:hover:text-gray-900 hover:bg-gray-900 hover:text-gray-100 rounded-md p-4'>
                                        <div className='text-3xl font-bold mb-2'>
                                            01.
                                        </div>
                                        <div className='text-base font-bold mb-1'>
                                            Обсуждение
                                        </div>
                                        <div className='text-base font-normal mb-4'>
                                            Определяем цели и задачи, общую концепцию проекта с клиентом. Предоставляем бриф, проводим анализ бизнеса, целевой аудитории. Консультируем и отвечаем на все вопросы. 
                                        </div>   
                                    </div>
                                    <div className='border border-gray-400 dark:hover:bg-gray-100 dark:hover:text-gray-900 hover:bg-gray-900 hover:text-gray-100 rounded-md p-4'>
                                        <div className='text-3xl font-bold mb-2'>
                                            02.
                                        </div>
                                        <div className='text-base font-bold mb-1'>
                                            Проектирование магазина
                                        </div>
                                        <div className='text-base font-normal mb-4'>
                                            Готовим ТЗ и разрабатываем проектную документацию для создания интернет-магазина. Определяемся с функциональностью ресурса, алгоритмами работы, техническими особенностями с учетом специфики бизнеса, количества товаров в листинге и пожеланий клиента.
                                        </div>   
                                    </div>
                                    <div className='border border-gray-400 dark:hover:bg-gray-100 dark:hover:text-gray-900 hover:bg-gray-900 hover:text-gray-100 rounded-md p-4'>
                                        <div className='text-3xl font-bold mb-2'>
                                            03.
                                        </div>
                                        <div className='text-base font-bold mb-1'>
                                            Разработка прототипа
                                        </div>
                                        <div className='text-base font-normal mb-4'>
                                            Создаем прототип будущего сайта — эскизы страниц и карточек товаров. На этапе прототипирования отрисовываем все блоки, интерактивные элементов и продумываем функционал. В обязательном порядке согласовываем прототип с клиентом. 
                                        </div>   
                                    </div>
                                    <div className='border border-gray-400 dark:hover:bg-gray-100 dark:hover:text-gray-900 hover:bg-gray-900 hover:text-gray-100 rounded-md p-4'>
                                        <div className='text-3xl font-bold mb-2'>
                                            04.
                                        </div>
                                        <div className='text-base font-bold mb-1'>
                                            Разработка дизайна
                                        </div>
                                        <div className='text-base font-normal mb-4'>
                                            Создаем уникальный дизайн в соответствии с согласованным прототипом, используем корпоративные цвета и фирменный стиль компании. Доводим визуальную часть сайта до совершенства, с учетом всего заложенного функционала.
                                        </div>   
                                    </div>
                                    <div className='border border-gray-400 dark:hover:bg-gray-100 dark:hover:text-gray-900 hover:bg-gray-900 hover:text-gray-100 rounded-md p-4'>
                                        <div className='text-3xl font-bold mb-2'>
                                            05.
                                        </div>
                                        <div className='text-base font-bold mb-1'>
                                            Верстка
                                        </div>
                                        <div className='text-base font-normal mb-4'>
                                            Наши верстальщики и программисты приступают к верстке страниц и разработке Frontend — клиентской части интерфейса, позволяющей пользователю использовать заложенный в сайт функционал. На данном этапе готовый дизайн преобразуется в HTML-код, и завершается работа с визуальной частью страниц.
                                        </div>   
                                    </div>
                                    <div className='border border-gray-400 dark:hover:bg-gray-100 dark:hover:text-gray-900 hover:bg-gray-900 hover:text-gray-100 rounded-md p-4'>
                                        <div className='text-3xl font-bold mb-2'>
                                            06.
                                        </div>
                                        <div className='text-base font-bold mb-1'>
                                            Программирование и внедрение
                                        </div>
                                        <div className='text-base font-normal mb-4'>
                                            Включает в себя написание кода для корректного функционирования всех элементов. Также на данном этапе проводится внедрение системы управления (CMS), а также сторонних IT-продуктов и сложных интеграций: например, подключение CRM, онлайн-кассы и платежных систем, программ бухгалтерского и складского учета. 
                                        </div>   
                                    </div>
                                    <div className='border border-gray-400 dark:hover:bg-gray-100 dark:hover:text-gray-900 hover:bg-gray-900 hover:text-gray-100 rounded-md p-4'>
                                        <div className='text-3xl font-bold mb-2'>
                                            07.
                                        </div>
                                        <div className='text-base font-bold mb-1'>
                                            Запуск сайта
                                        </div>
                                        <div className='text-base font-normal mb-4'>
                                            Проводим пусконаладочные работы и готовим проект к релизу. После запуска сайт полностью готов к продвижению и открыт к индексированию поисковыми системами.
                                        </div>   
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="xl:col-span-3 mt-5 text-2xl font-bold xl:row-span-2 pb-4 xl:pb-0">
                        <div className="xl:col-span-3 mt-5 text-2xl font-bold xl:row-span-2 pb-4 xl:pb-0">
                            <h2 className='py-4'>Разрабатываем интернет‑магазин любого уровня сложности и решаем нетривиальные задачи</h2>
                            <div className="w-full">
                                <div className='text-base font-normal'>
                                    Например, подключаем самописные API, CMS или БД, создаем многоуровневую логику. Для каждого проекта разрабатывается уникальный дизайн и функционал любой сложности, с учетом специфики конкурентной среды и требований клиента. Также предоставляем полный спектр услуг по дальнейшему развитию и сопровождению e-commerce проектов:
                                </div>
                                <List className='mt-2 text-gray-900 dark:text-gray-100'>
                                    <List.Item className='text-base py-2 font-medium justify-start items-center flex-row flex'>
                                        <div className='size-5 mr-4 '>
                                            <IoRemove className="size-5 mr-2"/>
                                        </div>
                                        SEO-продвижение;
                                    </List.Item>
                                    <List.Item className='text-base py-2 font-medium justify-start items-center flex-row flex'>
                                        <div className='size-5 mr-4 '>
                                            <IoRemove className="size-5 mr-2"/>
                                        </div>
                                        настройка рекламных кампаний;
                                    </List.Item>
                                    <List.Item className='text-base py-2 font-medium justify-start items-center flex-row flex'>
                                        <div className='size-5 mr-4 '>
                                            <IoRemove className="size-5 mr-2"/>
                                        </div>
                                        доработки сайта.
                                    </List.Item>
                                </List>
                                <div className='text-base mt-2 font-normal'>
                                    При необходимости также обучаем сотрудников компании или берем на себя администрирование вашего интернет-магазина. Если вам необходима консультация или помощь в разработке, оставьте заявку через форму обратной связи. Мы ответим на все вопросы и поможем подобрать оптимальное решение для ваших задач.
                                </div>
                                <div className='mt-4 grid grid-cols-2 bg-gray-200 dark:text-gray-900 lg:flex-row py-8 px-12 w-full dark:bg-gray-100 rounded-md'>
                                    <div>
                                        <div className='mb-2'>
                                            Стоимость услуги
                                        </div>
                                        <div className='text-base font-normal'>
                                            Создадим онлайн-магазин, ориентированный вашу целевую аудиторию. Наша цель — высокая конверсия посетителей и продажи для вашего бизнеса. Оставьте заявку для более точного расчета стоимости разработки.
                                        </div>
                                    </div>
                                    <div className='flex flex-col items-end justify-center'>
                                        <div className='mb-2'>
                                            от 194 000 ₽
                                        </div>
                                        <ShortFormInvert/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <CallBlock/>
                </div>
            </article>
        </SectionContainer>
        
    </>
    
  )
}
