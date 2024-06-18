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
import ShortFormInvert from '@/components/shortFormInvert'
import ShortForm from '@/components/shortForm'

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

export default function BitrixLayout({ content, authorDetails, next, prev, children }: LayoutProps) {
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
                        <div>
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
                    <div className="xl:col-span-3 xl:row-span-2 xl:pb-0">
                        <div className='grid grid-cols-1 xl:grid-cols-5 gap-2'>
                            <div className="flex justify-between flex-col p-8 bg-gray-200 dark:text-gray-900 rounded-md">
                                <div className='text-2xl font-bold mb-4'>
                                    Старт
                                </div>
                                <div className="text-md">
                                    Для быстрого старта
                                с минимальными вложениями
                                </div>  
                                <div>
                                    <div className='text-2xl font-bold my-4'>
                                        5 270 ₽
                                    </div>
                                    <ShortFormInvert></ShortFormInvert>
                                </div>
                            </div>
                            <div className="flex justify-between flex-col p-8 bg-gray-200 dark:text-gray-900 rounded-md">
                                <div className='text-2xl font-bold mb-4'>
                                    Стандарт
                                </div>
                                <div className="text-md">
                                    Сайт для работы с клиентами с простым управлением контентом
                                </div>
                                <div>
                                    <div className='text-2xl font-bold my-4'>
                                        15 215 ₽
                                    </div>
                                    <ShortFormInvert></ShortFormInvert>
                                </div>
                            </div>
                            <div className="flex justify-between flex-col p-8 bg-gray-200 dark:text-gray-900 rounded-md">
                                <div className='text-2xl font-bold mb-4'>
                                    Малый бизнес
                                </div>
                                <div className="text-md">
                                        Всё необходимое для начала торговли: каталог, склад, валюты, маркетинг, защита
                                    </div>
                                <div>
                                    <div className='text-2xl font-bold my-4'>
                                        34 765 ₽
                                    </div>
                                    <ShortFormInvert></ShortFormInvert>
                                </div>
                            </div>
                            <div className="flex justify-between flex-col p-8 bg-gray-200 dark:text-gray-900 rounded-md">
                                <div className='text-2xl font-bold mb-4'>
                                    Бизнес
                                </div>
                                <div className="text-md">
                                        Мощная система для управления
                                    большим интернет-магазином
                                </div>
                                <div>
                                    <div className='text-2xl font-bold my-4'>
                                        71 315 ₽
                                    </div>
                                    <ShortFormInvert></ShortFormInvert>
                                </div>
                            </div>
                            <div className="flex justify-between flex-col p-8 bg-gray-200 dark:text-gray-900 rounded-md">
                                <div className='text-2xl font-bold mb-4'>
                                    Энтерпрайз
                                </div>
                                <div className="text-md">
                                    Максимальные возможности для крупных предприятий
                                </div>
                                <div>
                                    <div className='text-2xl font-bold my-4'>
                                        1 699 000 ₽
                                    </div>
                                    <ShortFormInvert></ShortFormInvert>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="xl:col-span-3 mt-5 text-2xl font-bold xl:row-span-2 pb-4 xl:pb-0">
                        <h2 className='my-8'>Стоимость разработки</h2>
                        <ul className='flex flex-col gap-y-4'>
                            <li className='hover:animate-jump hover:animate-once hover:animate-ease-out w-full'>
                                <a href="/development/corporate" className='flex justify-between items-start lg:items-center bg-gray-200 dark:text-gray-900 flex-col lg:flex-row p-8 w-full dark:bg-gray-100 rounded-md'>
                                    <div>
                                        <div className='text-lg font-bold'>
                                            Корпоративный сайт
                                        </div>
                                        <div className='text-base font-normal'>
                                            Мы предлагаем услуги по созданию многостраничного веб-сайта вашей компании с индивидуальным программным обеспечением, предназначенным для привлечения интернет-трафика и клиентов. Это достигается с помощью наших стратегий SEO и контекстной рекламы.
                                        </div>
                                    </div>
                                    <div className='flex mt-4 xl:mt-0 flex-row items-center justify-between'>
                                        <div className='w-full flex flex-row items-top mr-4 flex-nowrap'>
                                            <span className='text-xs font-semibold text-gray-600 mr-1 leading-5'>
                                                от
                                            </span>
                                            <div className='w-full min-w-28 text-2xl font-semibold'>
                                                100 000 ₽
                                            </div>
                                        </div>
                                        <div>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 42 42" fill="currentColor" className="size-7 text-gray-600 dark:text-gray-900">
                                                <path clipRule="evenodd" d="M2.625 21C2.625 20.6519 2.76328 20.3181 3.00942 20.0719C3.25556 19.8258 3.5894 19.6875 3.9375 19.6875H34.8941L26.6332 11.4292C26.3868 11.1828 26.2483 10.8485 26.2483 10.5C26.2483 10.1515 26.3868 9.8172 26.6332 9.57074C26.8797 9.32429 27.214 9.18584 27.5625 9.18584C27.911 9.18584 28.2453 9.32429 28.4918 9.57074L38.9918 20.0707C39.114 20.1927 39.211 20.3375 39.2771 20.497C39.3433 20.6564 39.3773 20.8274 39.3773 21C39.3773 21.1726 39.3433 21.3436 39.2771 21.503C39.211 21.6625 39.114 21.8073 38.9918 21.9292L28.4918 32.4292C28.2453 32.6757 27.911 32.8142 27.5625 32.8142C27.214 32.8142 26.8797 32.6757 26.6332 32.4292C26.3868 32.1828 26.2483 31.8485 26.2483 31.5C26.2483 31.1515 26.3868 30.8172 26.6332 30.5707L34.8941 22.3125H3.9375C3.5894 22.3125 3.25556 22.1742 3.00942 21.9281C2.76328 21.6819 2.625 21.3481 2.625 21Z"/>
                                            </svg>
                                        </div>
                                    </div>
                                </a>
                            </li>
                            <li className='hover:animate-jump hover:animate-once hover:animate-ease-out w-full'>
                                <a href="/development/ecommerce" className='flex justify-between flex-col items-start lg:items-center bg-gray-200 dark:text-gray-900 lg:flex-row p-8 w-full dark:bg-gray-100 rounded-md'>
                                    <div>
                                        <div className='text-lg font-bold'>
                                            Интернет-магазин
                                        </div>
                                        <div className='text-base font-normal'>
                                            Наша команда разработает для вас интернет-магазин с современным дизайном, который удобен для ваших пользователей. Мы также предлагаем поддержку в настройке сложных интеграций для улучшения функциональности вашего магазина.
                                        </div>
                                    </div>
                                    <div className='flex mt-4 xl:mt-0 flex-row items-center justify-between'>
                                        <div className='w-full flex flex-row items-top mr-4 flex-nowrap'>
                                            <span className='text-xs font-semibold text-gray-600 mr-1 leading-5'>
                                                от
                                            </span>
                                            <div className='w-full min-w-28 text-2xl font-semibold'>
                                                110 000 ₽
                                            </div>
                                        </div>
                                        <div>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 42 42" fill="currentColor" className="size-7 text-gray-600 dark:text-gray-900">
                                                <path clipRule="evenodd" d="M2.625 21C2.625 20.6519 2.76328 20.3181 3.00942 20.0719C3.25556 19.8258 3.5894 19.6875 3.9375 19.6875H34.8941L26.6332 11.4292C26.3868 11.1828 26.2483 10.8485 26.2483 10.5C26.2483 10.1515 26.3868 9.8172 26.6332 9.57074C26.8797 9.32429 27.214 9.18584 27.5625 9.18584C27.911 9.18584 28.2453 9.32429 28.4918 9.57074L38.9918 20.0707C39.114 20.1927 39.211 20.3375 39.2771 20.497C39.3433 20.6564 39.3773 20.8274 39.3773 21C39.3773 21.1726 39.3433 21.3436 39.2771 21.503C39.211 21.6625 39.114 21.8073 38.9918 21.9292L28.4918 32.4292C28.2453 32.6757 27.911 32.8142 27.5625 32.8142C27.214 32.8142 26.8797 32.6757 26.6332 32.4292C26.3868 32.1828 26.2483 31.8485 26.2483 31.5C26.2483 31.1515 26.3868 30.8172 26.6332 30.5707L34.8941 22.3125H3.9375C3.5894 22.3125 3.25556 22.1742 3.00942 21.9281C2.76328 21.6819 2.625 21.3481 2.625 21Z"/>
                                            </svg>
                                        </div>
                                    </div>
                                </a>
                            </li>
                            <li className='hover:animate-jump hover:animate-once hover:animate-ease-out w-full'>
                                <a href="/development/landing" className='flex justify-between flex-col items-start lg:items-center bg-gray-200 dark:text-gray-900 lg:flex-row p-8 w-full dark:bg-gray-100 rounded-md'>
                                    <div>
                                        <div className='text-lg font-bold'>
                                            Лендинг под ключ
                                        </div>
                                        <div className='text-base font-normal'>
                                            Мы предлагаем услуги по созданию полностью функционального одностраничного проекта на платформе 1C-Битрикс. Этот проект будет иметь высокую конверсию и содержать экспертный, убедительный контент.
                                        </div>
                                    </div>
                                    <div className='flex mt-4 xl:mt-0 flex-row items-center justify-between'>
                                        <div className='w-full flex flex-row items-top mr-4 flex-nowrap'>
                                            <span className='text-xs font-semibold text-gray-600 mr-1 leading-5'>
                                                от
                                            </span>
                                            <div className='w-full min-w-28 text-2xl font-semibold'>
                                                40 000 ₽
                                            </div>
                                        </div>
                                        <div>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 42 42" fill="currentColor" className="size-7 text-gray-600 dark:text-gray-900">
                                                <path clipRule="evenodd" d="M2.625 21C2.625 20.6519 2.76328 20.3181 3.00942 20.0719C3.25556 19.8258 3.5894 19.6875 3.9375 19.6875H34.8941L26.6332 11.4292C26.3868 11.1828 26.2483 10.8485 26.2483 10.5C26.2483 10.1515 26.3868 9.8172 26.6332 9.57074C26.8797 9.32429 27.214 9.18584 27.5625 9.18584C27.911 9.18584 28.2453 9.32429 28.4918 9.57074L38.9918 20.0707C39.114 20.1927 39.211 20.3375 39.2771 20.497C39.3433 20.6564 39.3773 20.8274 39.3773 21C39.3773 21.1726 39.3433 21.3436 39.2771 21.503C39.211 21.6625 39.114 21.8073 38.9918 21.9292L28.4918 32.4292C28.2453 32.6757 27.911 32.8142 27.5625 32.8142C27.214 32.8142 26.8797 32.6757 26.6332 32.4292C26.3868 32.1828 26.2483 31.8485 26.2483 31.5C26.2483 31.1515 26.3868 30.8172 26.6332 30.5707L34.8941 22.3125H3.9375C3.5894 22.3125 3.25556 22.1742 3.00942 21.9281C2.76328 21.6819 2.625 21.3481 2.625 21Z"/>
                                            </svg>
                                        </div>
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="xl:col-span-3 mt-5 text-2xl font-bold xl:row-span-2 pb-4 xl:pb-0">
                        <h2 className='my-8'>Преимущества сайтов на 1С-Битрикс</h2>
                        <div className="w-full">
                            <div className='slider-container'>
                            <Slider {...settings} className="">
                                <div className='flex'>
                                    <div className='h-full lg:h-48 flex-col flex justify-start items-top dark:text-gray-900 bg-gray-200 p-4 dark:bg-gray-100 rounded-md'>
                                        <span className='slide-number text-3xl font-bold flex justify-end'>
                                            01.
                                        </span>
                                        <div>
                                            <div className='text-base font-medium'>
                                                1C-Битрикс подходит для любого типа веб-сайтов, от маленьких блогов до крупных интернет-магазинов с более чем 1000 страниц, порталов и агрегаторов. У вас есть возможность выбрать из пяти различных лицензий, в зависимости от ваших требований к функциональности.
                                            </div>
                                        </div>
                                        
                                    </div>
                                </div>
                                <div className='flex'>
                                    <div className='h-full lg:h-48 flex-col flex justify-start items-top dark:text-gray-900 bg-gray-200 p-4 dark:bg-gray-100 rounded-md'>
                                        <span className='slide-number text-3xl font-bold flex justify-end'>
                                            02.
                                        </span>
                                        <div>
                                            <div className='text-base font-medium'>
                                                Безопасность ваших данных гарантирована, система надежно защищена от взлома и других злонамеренных действий в сети Интернет.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex'>
                                    <div className='h-full lg:h-48 flex-col flex justify-start items-top dark:text-gray-900 bg-gray-200 p-4 dark:bg-gray-100 rounded-md'>
                                        <span className='slide-number text-3xl font-bold flex justify-end'>
                                            03.
                                        </span>
                                        <div>
                                            <div className='text-base font-medium'>
                                                Система управления сайтом 1C-Битрикс легко интегрируется с CRM, аналитическими инструментами, программами учета, базами данных и другими внешними системами и приложениями.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex'>
                                    <div className='h-full lg:h-48 flex-col flex justify-start items-top dark:text-gray-900 bg-gray-200 p-4 dark:bg-gray-100 rounded-md'>
                                        <span className='slide-number text-3xl font-bold flex justify-end'>
                                            04.
                                        </span>
                                        <div>
                                            <div className='text-base font-medium'>
                                                В Маркетплейсе, который является магазином устанавливаемого ПО, вы найдете множество готовых решений, которые расширяют базовый функционал продукта. Есть как платные, так и бесплатные варианты.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex'>
                                    <div className='h-full lg:h-48 flex-col flex justify-start items-top dark:text-gray-900 bg-gray-200 p-4 dark:bg-gray-100 rounded-md'>
                                        <span className='slide-number text-3xl font-bold flex justify-end'>
                                            05.
                                        </span>
                                        <div>
                                            <div className='text-base font-medium'>
                                                Работа с административной панелью не требует специальных навыков и осваивается всего за 1-2 недели практики.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex'>
                                    <div className='h-full lg:h-48 flex-col flex justify-start items-top dark:text-gray-900 bg-gray-200 p-4 dark:bg-gray-100 rounded-md'>
                                        <span className='slide-number text-3xl font-bold flex justify-end'>
                                            06.
                                        </span>
                                        <div>
                                            <div className='text-base font-medium'>
                                                Производитель регулярно предоставляет обновления и модернизации продукта.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex'>
                                    <div className='h-full lg:h-48 flex-col flex justify-start items-top dark:text-gray-900 bg-gray-200 p-4 dark:bg-gray-100 rounded-md'>
                                        <span className='slide-number text-3xl font-bold flex justify-end'>
                                            07.
                                        </span>
                                        <div>
                                            <div className='text-base font-medium'>
                                                Благодаря широким возможностям доработок, сайты на платформе 1C-Битрикс могут быть полностью адаптированы под ваши индивидуальные потребности.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Slider>
                            </div>
                        </div>
                    </div>
                    <div className='xl:col-span-3 mt-5 text-2xl font-bold xl:row-span-2 pb-4 xl:pb-0'></div>
                    <CallBlock/>
                </div>
            </article>
        </SectionContainer>
        
    </>
    
  )
}
