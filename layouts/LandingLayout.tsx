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

export default function LandingLayout({ content, authorDetails, next, prev, children }: LayoutProps) {
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
                    <div className="xl:col-span-3 mt-5 text-2xl font-bold xl:row-span-2 pb-4 xl:pb-0">
                        <div className="w-full">
                            <div className='slider-container'>
                            <Slider {...settings} className="">
                                <div className='flex'>
                                    <div className='h-full lg:h-72 flex-col flex justify-center items-top dark:text-gray-900 bg-gray-200 p-8 dark:bg-gray-100 rounded-md'>
                                        <div className='mb-2 text-xl font-bold'>
                                            Индивидуальный дизайн
                                        </div>
                                        <div className='text-base font-light'>
                                            Проработанный UX-прототип и UI-дизайн лендинга обеспечивает простоту взаимодействия клиента с сайтом и ненавязчиво подводит к конверсионным формам для совершения целевого действия.
                                        </div>
                                    </div>
                                </div>
                                
                                <div className='flex'>
                                    <div className='h-full lg:h-72 flex-col flex justify-center items-top dark:text-gray-900 bg-gray-200 p-8 dark:bg-gray-100 rounded-md'>
                                        <div className='mb-2 text-xl font-bold'>
                                            Продающие качества
                                        </div>
                                        <div className='text-base font-light'>
                                            С целью дальнейшего коммерческого успеха вашего сайта, наши специалисты разрабатывают внешний вид лендинга, с учетом современных стандартов веб-дизайна и пользовательского опыта (UX), чтобы увеличить продажи и конверсию.
                                        </div>
                                    </div>
                                </div>

                                <div className='flex'>
                                    <div className='h-full lg:h-72 flex-col flex justify-center items-top dark:text-gray-900 bg-gray-200 p-8 dark:bg-gray-100 rounded-md'>
                                        <div className='mb-2 text-xl font-bold'>
                                            Адаптивность
                                        </div>
                                        <div className='text-base font-light'>
                                            Наши лендинги, разработанные под ключ, прекрасно выглядят на всех устройствах и адаптированы под все современные разрешения, от Full HD мониторов до экранов мобильных телефонов.
                                        </div>
                                    </div>
                                </div>

                                <div className='flex'>
                                    <div className='h-full lg:h-72 flex-col flex justify-center items-top dark:text-gray-900 bg-gray-200 p-8 dark:bg-gray-100 rounded-md'>
                                        <div className='mb-2 text-xl font-bold'>
                                            Качественный контент
                                        </div>
                                        <div className='text-base font-light'>
                                            От превосходства контента зависит уровень интереса клиента к продукту. Наши авторы создадут грамотный, глубоко продуманный текст о вашем товаре или услуге, подчеркивающий конкурентные преимущества и уникальное предложение.
                                        </div>
                                    </div>
                                </div>

                                <div className='flex'>
                                    <div className='h-full lg:h-72 flex-col flex justify-center items-top dark:text-gray-900 bg-gray-200 p-8 dark:bg-gray-100 rounded-md'>
                                        <div className='mb-2 text-xl font-bold break-words'>
                                            Многофункциональность
                                        </div>
                                        <div className='text-base font-light'>
                                            Мультилендинг, Геотаргетинг. Создание лендинга включает функционал для автоматического изменения контента лендинга в соответствии с запросами пользователя из поисковых систем и его геолокацией. Запуск А/Б тестирования поможет выявить более конверсионный вариант дизайна лендинга.
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
                                    Ваш будущий сайт прорабатывается в несколько этапов. Ниже определим основные:
                                </div>
                                <div className='grid grid-cols-1 gap-4 mt-4 xl:grid-cols-3'>
                                    <div className='border border-gray-400 dark:hover:bg-gray-100 dark:hover:text-gray-900 hover:bg-gray-900 hover:text-gray-100 rounded-md p-4'>
                                        <div className='text-3xl font-bold mb-2'>
                                            01.
                                        </div>
                                        <div className='text-base font-bold mb-1'>
                                            Аналитика и проектирование
                                        </div>
                                        <div className='text-base font-normal mb-4'>
                                            Мы проведем детальную экспертизу вашего бизнеса, исследуем рыночные возможности и конкурентные преимущества вашего продукта. Анализ рынка и целевых аудиторий поможет обнаружить основные проблемы и потребности вашего потенциального клиента.
                                        </div>   
                                    </div>
                                    <div className='border border-gray-400 dark:hover:bg-gray-100 dark:hover:text-gray-900 hover:bg-gray-900 hover:text-gray-100 rounded-md p-4'>
                                        <div className='text-3xl font-bold mb-2'>
                                            02.
                                        </div>
                                        <div className='text-base font-bold mb-1'>
                                            Создание UX-прототипа и копирайтинг
                                        </div>
                                        <div className='text-base font-normal mb-4'>
                                            Мы определим структуру целевой страницы, интерфейс и распределение блоков, опираясь на опыт пользователей вашей целевой аудитории.
                                        </div>   
                                    </div>
                                    <div className='border border-gray-400 dark:hover:bg-gray-100 dark:hover:text-gray-900 hover:bg-gray-900 hover:text-gray-100 rounded-md p-4'>
                                        <div className='text-3xl font-bold mb-2'>
                                            03.
                                        </div>
                                        <div className='text-base font-bold mb-1'>
                                            UI-Дизайн
                                        </div>
                                        <div className='text-base font-normal mb-4'>
                                            Мы займемся разработкой дизайна сайта и визуальной составляющей лендинга. Продуманное графическое оформление улучшает восприятие информации и привлекает внимание клиента.
                                        </div>   
                                    </div>
                                    <div className='border border-gray-400 dark:hover:bg-gray-100 dark:hover:text-gray-900 hover:bg-gray-900 hover:text-gray-100 rounded-md p-4'>
                                        <div className='text-3xl font-bold mb-2'>
                                            04.
                                        </div>
                                        <div className='text-base font-bold mb-1'>
                                            Верстка, программирование и тестирование
                                        </div>
                                        <div className='text-base font-normal mb-4'>
                                            Верстка и разработка функционала лендинга будет выполнена под ключ. Перед запуском мы проведем тестирование, выявим и устраним возможные ошибки.
                                        </div>   
                                    </div>
                                    <div className='border border-gray-400 dark:hover:bg-gray-100 dark:hover:text-gray-900 hover:bg-gray-900 hover:text-gray-100 rounded-md p-4'>
                                        <div className='text-3xl font-bold mb-2'>
                                            05.
                                        </div>
                                        <div className='text-base font-bold mb-1'>
                                            Настройка и ведение контекстной рекламы
                                        </div>
                                        <div className='text-base font-normal mb-4'>
                                            Мы соберем все необходимые ключевые запросы и запустим рекламную кампанию в Яндекс и Google. Именно контекстная реклама станет основным драйвером трафика для вашей целевой страницы.
                                        </div>   
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="xl:col-span-3 mt-8 text-2xl font-bold xl:row-span-2 pb-4 xl:pb-0 border-l-2 border-gray-900 dark:border-gray-100 pl-8">
                        <p className='text-base font-normal mb-2'>
                            Если вам требуется действенный инструмент для увеличения продаж ваших товаров или услуг, а также поддержка в привлечении клиентов и создании нового канала интернет-продаж, который со временем станет главным — обратитесь к нам, в Rokkit. 
                        </p>
                        <p className='text-base font-normal'>
                            Мы поможем увеличить продажи с помощью современного и эффективного лендинга, предоставив полный спектр услуг от формирования концепции до веб-разработки и запуска рекламы.
                        </p>
                    </div>
                    <CallBlock/>
                </div>
            </article>
        </SectionContainer>
        
    </>
    
  )
}
