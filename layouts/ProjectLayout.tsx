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
import {TabGroup, TabList, TabPanels, TabPanel, Tab} from "@headlessui/react";
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
import ShortFormInvert from '@/components/shortFormInvert'

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

export default function ProjectLayout({ content, authorDetails, next, prev, children }: LayoutProps) {
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
                        <div className="prose max-w-none pb-8 pt-10 dark:prose-invert">{children}</div>
                    </div>
                    <div className="xl:col-span-3 grid gap-4 xl:grid-cols-4 text-2xl font-bold xl:row-span-2 pb-4 xl:pb-0">
                        <div className='p-8 hover:bg-gray-900 hover:text-gray-100 dark:hover:text-gray-100 dark:hover:bg-gray-700 dark:text-gray-900 bg-gray-200 rounded-md'>
                            <div className='text-base font-normal mb-4'>
                                Импортозамещение существующего решения (SAP, SharePoint, IBM, Oracle Portal) на Битрикс24
                            </div>
                            <IoCheckbox/>
                        </div>
                        <div className='p-8 hover:bg-gray-900 hover:text-gray-100 dark:hover:text-gray-100 dark:hover:bg-gray-700 dark:text-gray-900 bg-gray-200 rounded-md'>
                            <div className='text-base font-normal mb-4'>
                                Комплексный проектный подход с большим объемом доработок Битрикс24
                            </div>
                            <IoCheckbox/>
                        </div>
                        <div className='p-8 hover:bg-gray-900 hover:text-gray-100 dark:hover:text-gray-100 dark:hover:bg-gray-700 dark:text-gray-900 bg-gray-200 rounded-md'>
                            <div className='text-base font-normal mb-4'>
                                Уникальный функционал, которого нет в базовой версии Битрикс24
                            </div>
                            <IoCheckbox/>
                        </div>
                        <div className='p-8 hover:bg-gray-900 hover:text-gray-100 dark:hover:text-gray-100 dark:hover:bg-gray-700 dark:text-gray-900 bg-gray-200 rounded-md'>
                            <div className='text-base font-normal mb-4'>
                                Объемные интеграции с другими учетными или информационными системами
                            </div>
                            <IoCheckbox/>
                        </div>
                    </div>
                    <div className='xl:col-span-3 mt-8 text-2xl font-bold xl:row-span-2 pb-4 xl:pb-0'>
                        <div className='text-2xl mb-4'>
                            Из чего состоит внедрение
                        </div>
                        <div className='font-medium text-lg my-4'>
                            Подход предполагает первичное предпроектное обследование, в результате которого составляется подробное техническое задание, содержащее комплексное описание требований к будущей системе.
                        </div>
                        <div className='font-medium text-lg'>
                            После этого осуществляется разработка и последующая настройка продукта. Завершающий этап – обучение сотрудников, подготовка сопроводительной документации (регламенты, инструкции) и дальнейшее сопровождение портала. При проектном внедрении мы последовательно проходим все этапы.
                        </div>
                        <div className='grid grid-cols-2 gap-4 mt-4 xl:grid-cols-4'>
                            <div className='border border-gray-400 dark:hover:bg-gray-100 dark:hover:text-gray-900 hover:bg-gray-900 hover:text-gray-100 rounded-md p-4'>
                                <div className='text-3xl font-bold mb-2'>
                                    01.
                                </div>
                                <div className='text-base font-normal mb-4'>
                                    Встречи и сбор требований
                                </div>   
                            </div>
                            <div className='border border-gray-400 dark:hover:bg-gray-100 dark:hover:text-gray-900 hover:bg-gray-900 hover:text-gray-100 rounded-md p-4'>
                                <div className='text-3xl font-bold mb-2'>
                                    02.
                                </div>
                                <div className='text-base font-normal mb-4'>
                                    Проектирование систем и написание технического задания
                                </div>   
                            </div>
                            <div className='border border-gray-400 dark:hover:bg-gray-100 dark:hover:text-gray-900 hover:bg-gray-900 hover:text-gray-100 rounded-md p-4'>
                                <div className='text-3xl font-bold mb-2'>
                                    03.
                                </div>
                                <div className='text-base font-normal mb-4'>
                                    Установка Битрикс24 и программная разработка
                                </div>   
                            </div>
                            <div className='border border-gray-400 dark:hover:bg-gray-100 dark:hover:text-gray-900 hover:bg-gray-900 hover:text-gray-100 rounded-md p-4'>
                                <div className='text-3xl font-bold mb-2'>
                                    04.
                                </div>
                                <div className='text-base font-normal mb-4'>
                                    Интеграция Битрикс24 со сторонними системами и сервисами (1С, SAP, телефония)
                                </div>   
                            </div>
                            <div className='border border-gray-400 dark:hover:bg-gray-100 dark:hover:text-gray-900 hover:bg-gray-900 hover:text-gray-100 rounded-md p-4'>
                                <div className='text-3xl font-bold mb-2'>
                                    05.
                                </div>
                                <div className='text-base font-normal mb-4'>
                                    Тестирование и запуск Битрикс24 на боевых серверах
                                </div>   
                            </div>
                            <div className='border border-gray-400 dark:hover:bg-gray-100 dark:hover:text-gray-900 hover:bg-gray-900 hover:text-gray-100 rounded-md p-4'>
                                <div className='text-3xl font-bold mb-2'>
                                    06.
                                </div>
                                <div className='text-base font-normal mb-4'>
                                    Написание документации и инструкций
                                </div>   
                            </div>
                            <div className='border border-gray-400 dark:hover:bg-gray-100 dark:hover:text-gray-900 hover:bg-gray-900 hover:text-gray-100 rounded-md p-4'>
                                <div className='text-3xl font-bold mb-2'>
                                    07.
                                </div>
                                <div className='text-base font-normal mb-4'>
                                    Обучение пользователей работе с Битрикс24 по ролям
                                </div>   
                            </div>
                            <div className='border border-gray-400 dark:hover:bg-gray-100 dark:hover:text-gray-900 hover:bg-gray-900 hover:text-gray-100 rounded-md p-4'>
                                <div className='text-3xl font-bold mb-2'>
                                    08.
                                </div>
                                <div className='text-base font-normal mb-4'>
                                    Поддержка и контроль эффективности работы в Битрикс24
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
