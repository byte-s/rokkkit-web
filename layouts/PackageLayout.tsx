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

export default function PackageLayout({ content, authorDetails, next, prev, children }: LayoutProps) {
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
                    <div className="xl:col-span-3 text-2xl font-bold xl:row-span-2 pb-4 xl:pb-0">
                        <ul className='flex flex-col gap-y-4'>
                            <li className='bg-gray-200 dark:text-gray-900 p-8 dark:bg-gray-100 w-full rounded-md'>
                                <div>
                                    <div className='text-2xl font-bold'>
                                        CRM Lite
                                    </div>
                                    <div className='mt-4 text-lg font-medium'>
                                        После внедрения Битрикс24 у вашей компании появится комплексный инструмент для работы с клиентами с возможностью проектного управления. С помощью CRM удастся оптимизировать внутренние процессы предприятия и увеличить эффективность вашего бизнеса.
                                    </div>
                                </div>
                                <div>
                                    <List className='mt-2 grid gap-x-4 grid-cols-1 lg:grid-cols-2'>
                                        <List.Item className='text-base font-normal text-gray-900 items-start flex-row flex'>
                                            <div className='size-5 mr-2'>
                                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="32" width="32" xmlns="http://www.w3.org/2000/svg" className="size-5 mr-2">
                                                    <path d="M400 48H112a64.07 64.07 0 0 0-64 64v288a64.07 64.07 0 0 0 64 64h288a64.07 64.07 0 0 0 64-64V112a64.07 64.07 0 0 0-64-64zm-35.75 138.29-134.4 160a16 16 0 0 1-12 5.71h-.27a16 16 0 0 1-11.89-5.3l-57.6-64a16 16 0 1 1 23.78-21.4l45.29 50.32 122.59-145.91a16 16 0 0 1 24.5 20.58z">
                                                    </path>
                                                </svg>
                                            </div>
                                            
                                            Заведение сотрудников до 10 человек, настройка 1 воронки (карточки, лиды), заведение до 10 полей в карточке, подключение почтовых ящиков сотрудников;
                                        </List.Item>
                                        <List.Item className='text-base font-normal text-gray-900 items-start flex-row flex'>
                                            <div className='size-5 mr-2'>
                                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="32" width="32" xmlns="http://www.w3.org/2000/svg" className="size-5 mr-2">
                                                    <path d="M400 48H112a64.07 64.07 0 0 0-64 64v288a64.07 64.07 0 0 0 64 64h288a64.07 64.07 0 0 0 64-64V112a64.07 64.07 0 0 0-64-64zm-35.75 138.29-134.4 160a16 16 0 0 1-12 5.71h-.27a16 16 0 0 1-11.89-5.3l-57.6-64a16 16 0 1 1 23.78-21.4l45.29 50.32 122.59-145.91a16 16 0 0 1 24.5 20.58z">
                                                    </path>
                                                </svg>
                                            </div>
                                            Настройка организационной структуры и прав доступа пользователей;
                                        </List.Item>
                                        <List.Item className='text-base font-normal text-gray-900 items-start flex-row flex'>
                                            <div className='size-5 mr-2'>
                                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="32" width="32" xmlns="http://www.w3.org/2000/svg" className="size-5 mr-2">
                                                    <path d="M400 48H112a64.07 64.07 0 0 0-64 64v288a64.07 64.07 0 0 0 64 64h288a64.07 64.07 0 0 0 64-64V112a64.07 64.07 0 0 0-64-64zm-35.75 138.29-134.4 160a16 16 0 0 1-12 5.71h-.27a16 16 0 0 1-11.89-5.3l-57.6-64a16 16 0 1 1 23.78-21.4l45.29 50.32 122.59-145.91a16 16 0 0 1 24.5 20.58z">
                                                    </path>
                                                </svg>
                                            </div>
                                            Заявки будут автоматически попадать в Битрикс24 CRM;
                                        </List.Item>
                                        <List.Item className='text-base font-normal text-gray-900 items-start flex-row flex'>
                                            <div className='size-5 mr-2'>
                                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="32" width="32" xmlns="http://www.w3.org/2000/svg" className="size-5 mr-2">
                                                    <path d="M400 48H112a64.07 64.07 0 0 0-64 64v288a64.07 64.07 0 0 0 64 64h288a64.07 64.07 0 0 0 64-64V112a64.07 64.07 0 0 0-64-64zm-35.75 138.29-134.4 160a16 16 0 0 1-12 5.71h-.27a16 16 0 0 1-11.89-5.3l-57.6-64a16 16 0 1 1 23.78-21.4l45.29 50.32 122.59-145.91a16 16 0 0 1 24.5 20.58z">
                                                    </path>
                                                </svg>
                                            </div>
                                            Настройка трех отчетов CRM по мониторингу основных показателей;
                                        </List.Item>
                                        <List.Item className='text-base font-normal text-gray-900 items-start flex-row flex'>
                                            <div className='size-5 mr-2'>
                                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="32" width="32" xmlns="http://www.w3.org/2000/svg" className="size-5 mr-2">
                                                    <path d="M400 48H112a64.07 64.07 0 0 0-64 64v288a64.07 64.07 0 0 0 64 64h288a64.07 64.07 0 0 0 64-64V112a64.07 64.07 0 0 0-64-64zm-35.75 138.29-134.4 160a16 16 0 0 1-12 5.71h-.27a16 16 0 0 1-11.89-5.3l-57.6-64a16 16 0 1 1 23.78-21.4l45.29 50.32 122.59-145.91a16 16 0 0 1 24.5 20.58z">
                                                    </path>
                                                </svg>
                                            </div>
                                            Подключение сервиса обратного звонка, чата и формы обратной связи с помощью виджета Битрикс24 на один сайт компании;
                                        </List.Item>
                                        <List.Item className='text-base font-normal text-gray-900 items-start flex-row flex'>
                                            <div className='size-5 mr-2'>
                                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="32" width="32" xmlns="http://www.w3.org/2000/svg" className="size-5 mr-2">
                                                    <path d="M400 48H112a64.07 64.07 0 0 0-64 64v288a64.07 64.07 0 0 0 64 64h288a64.07 64.07 0 0 0 64-64V112a64.07 64.07 0 0 0-64-64zm-35.75 138.29-134.4 160a16 16 0 0 1-12 5.71h-.27a16 16 0 0 1-11.89-5.3l-57.6-64a16 16 0 1 1 23.78-21.4l45.29 50.32 122.59-145.91a16 16 0 0 1 24.5 20.58z">
                                                    </path>
                                                </svg>
                                            </div>
                                            Один час группового обучения менеджеров по продажам работе с Битрикс24 CRM от консультанта;
                                        </List.Item>
                                        <List.Item className='text-base font-normal text-gray-900 items-start flex-row flex'>
                                            <div className='size-5 mr-2'>
                                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="32" width="32" xmlns="http://www.w3.org/2000/svg" className="size-5 mr-2">
                                                    <path d="M400 48H112a64.07 64.07 0 0 0-64 64v288a64.07 64.07 0 0 0 64 64h288a64.07 64.07 0 0 0 64-64V112a64.07 64.07 0 0 0-64-64zm-35.75 138.29-134.4 160a16 16 0 0 1-12 5.71h-.27a16 16 0 0 1-11.89-5.3l-57.6-64a16 16 0 1 1 23.78-21.4l45.29 50.32 122.59-145.91a16 16 0 0 1 24.5 20.58z">
                                                    </path>
                                                </svg>
                                            </div>
                                            Оптимизация карточки лида, контакта, сделки (список полей предоставляет заказчик);
                                        </List.Item>
                                    </List>
                                </div>
                                <div className=''>
                                    <div className='mt-4 mb-2'>
                                        <div className='font-normal text-sm text-gray-500'>Стоимость</div>
                                        <div className='font-bold text-3xl'>39 000 ₽</div>
                                    </div>
                                    <ShortFormInvert/>
                                </div>
                            </li>
                            <li className='bg-gray-200 dark:text-gray-900 p-8 dark:bg-gray-100 w-full rounded-md'>
                                <div>
                                    <div className='text-2xl font-bold'>
                                        CRM Pro
                                    </div>
                                    <div className='mt-4 text-lg font-medium'>
                                        После внедрения Битрикс24 у вашей компании появится комплексный инструмент для работы с клиентами с возможностью проектного управления. С помощью CRM удастся оптимизировать внутренние процессы предприятия и увеличить эффективность вашего бизнеса.
                                    </div>
                                </div>
                                <div>
                                    <List className='mt-2 grid gap-x-4 grid-cols-1 lg:grid-cols-2'>
                                        <List.Item className='text-base font-normal text-gray-900 items-start flex-row flex'>
                                            <div className='size-5 mr-2'>
                                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="32" width="32" xmlns="http://www.w3.org/2000/svg" className="size-5 mr-2">
                                                    <path d="M400 48H112a64.07 64.07 0 0 0-64 64v288a64.07 64.07 0 0 0 64 64h288a64.07 64.07 0 0 0 64-64V112a64.07 64.07 0 0 0-64-64zm-35.75 138.29-134.4 160a16 16 0 0 1-12 5.71h-.27a16 16 0 0 1-11.89-5.3l-57.6-64a16 16 0 1 1 23.78-21.4l45.29 50.32 122.59-145.91a16 16 0 0 1 24.5 20.58z">
                                                    </path>
                                                </svg>
                                            </div>
                                            
                                            Настройка воронки продаж (2 направления): этапы сделок, карточки сделок, автоматизация воронок (до 10 роботов), триггеров смены стадий, шаблонов уведомлений;
                                        </List.Item>
                                        <List.Item className='text-base font-normal text-gray-900 items-start flex-row flex'>
                                            <div className='size-5 mr-2'>
                                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="32" width="32" xmlns="http://www.w3.org/2000/svg" className="size-5 mr-2">
                                                    <path d="M400 48H112a64.07 64.07 0 0 0-64 64v288a64.07 64.07 0 0 0 64 64h288a64.07 64.07 0 0 0 64-64V112a64.07 64.07 0 0 0-64-64zm-35.75 138.29-134.4 160a16 16 0 0 1-12 5.71h-.27a16 16 0 0 1-11.89-5.3l-57.6-64a16 16 0 1 1 23.78-21.4l45.29 50.32 122.59-145.91a16 16 0 0 1 24.5 20.58z">
                                                    </path>
                                                </svg>
                                            </div>
                                            Интервью с ключевыми сотрудниками предприятия на любой стадии ведения проекта — пять интервью;
                                        </List.Item>
                                        <List.Item className='text-base font-normal text-gray-900 items-start flex-row flex'>
                                            <div className='size-5 mr-2'>
                                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="32" width="32" xmlns="http://www.w3.org/2000/svg" className="size-5 mr-2">
                                                    <path d="M400 48H112a64.07 64.07 0 0 0-64 64v288a64.07 64.07 0 0 0 64 64h288a64.07 64.07 0 0 0 64-64V112a64.07 64.07 0 0 0-64-64zm-35.75 138.29-134.4 160a16 16 0 0 1-12 5.71h-.27a16 16 0 0 1-11.89-5.3l-57.6-64a16 16 0 1 1 23.78-21.4l45.29 50.32 122.59-145.91a16 16 0 0 1 24.5 20.58z">
                                                    </path>
                                                </svg>
                                            </div>
                                            Один час группового обучения менеджеров по продажам работе с Битрикс24 CRM от консультанта;
                                        </List.Item>
                                        <List.Item className='text-base font-normal text-gray-900 items-start flex-row flex'>
                                            <div className='size-5 mr-2'>
                                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="32" width="32" xmlns="http://www.w3.org/2000/svg" className="size-5 mr-2">
                                                    <path d="M400 48H112a64.07 64.07 0 0 0-64 64v288a64.07 64.07 0 0 0 64 64h288a64.07 64.07 0 0 0 64-64V112a64.07 64.07 0 0 0-64-64zm-35.75 138.29-134.4 160a16 16 0 0 1-12 5.71h-.27a16 16 0 0 1-11.89-5.3l-57.6-64a16 16 0 1 1 23.78-21.4l45.29 50.32 122.59-145.91a16 16 0 0 1 24.5 20.58z">
                                                    </path>
                                                </svg>
                                            </div>
                                            Настройка воронки лидов: этапы, карточка, автоматизация воронок (до 10 роботов), шаблонов уведомлений;
                                        </List.Item>
                                        <List.Item className='text-base font-normal text-gray-900 items-start flex-row flex'>
                                            <div className='size-5 mr-2'>
                                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="32" width="32" xmlns="http://www.w3.org/2000/svg" className="size-5 mr-2">
                                                    <path d="M400 48H112a64.07 64.07 0 0 0-64 64v288a64.07 64.07 0 0 0 64 64h288a64.07 64.07 0 0 0 64-64V112a64.07 64.07 0 0 0-64-64zm-35.75 138.29-134.4 160a16 16 0 0 1-12 5.71h-.27a16 16 0 0 1-11.89-5.3l-57.6-64a16 16 0 1 1 23.78-21.4l45.29 50.32 122.59-145.91a16 16 0 0 1 24.5 20.58z">
                                                    </path>
                                                </svg>
                                            </div>
                                            Глубокая настройка прав доступа к Битрикс24 CRM (до 4-х ролей);
                                        </List.Item>
                                        <List.Item className='text-base font-normal text-gray-900 items-start flex-row flex'>
                                            <div className='size-5 mr-2'>
                                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="32" width="32" xmlns="http://www.w3.org/2000/svg" className="size-5 mr-2">
                                                    <path d="M400 48H112a64.07 64.07 0 0 0-64 64v288a64.07 64.07 0 0 0 64 64h288a64.07 64.07 0 0 0 64-64V112a64.07 64.07 0 0 0-64-64zm-35.75 138.29-134.4 160a16 16 0 0 1-12 5.71h-.27a16 16 0 0 1-11.89-5.3l-57.6-64a16 16 0 1 1 23.78-21.4l45.29 50.32 122.59-145.91a16 16 0 0 1 24.5 20.58z">
                                                    </path>
                                                </svg>
                                            </div>
                                            Настройка трех отчетов CRM по мониторингу основных показателей;
                                        </List.Item>
                                        <List.Item className='text-base font-normal text-gray-900 items-start flex-row flex'>
                                            <div className='size-5 mr-2'>
                                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="32" width="32" xmlns="http://www.w3.org/2000/svg" className="size-5 mr-2">
                                                    <path d="M400 48H112a64.07 64.07 0 0 0-64 64v288a64.07 64.07 0 0 0 64 64h288a64.07 64.07 0 0 0 64-64V112a64.07 64.07 0 0 0-64-64zm-35.75 138.29-134.4 160a16 16 0 0 1-12 5.71h-.27a16 16 0 0 1-11.89-5.3l-57.6-64a16 16 0 1 1 23.78-21.4l45.29 50.32 122.59-145.91a16 16 0 0 1 24.5 20.58z">
                                                    </path>
                                                </svg>
                                            </div>
                                            Подключение каналов связи с клиентами: телефония, мессенджеры, электронная почта (до 3-х ящиков);
                                        </List.Item>
                                        <List.Item className='text-base font-normal text-gray-900 items-start flex-row flex'>
                                            <div className='size-5 mr-2'>
                                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="32" width="32" xmlns="http://www.w3.org/2000/svg" className="size-5 mr-2">
                                                    <path d="M400 48H112a64.07 64.07 0 0 0-64 64v288a64.07 64.07 0 0 0 64 64h288a64.07 64.07 0 0 0 64-64V112a64.07 64.07 0 0 0-64-64zm-35.75 138.29-134.4 160a16 16 0 0 1-12 5.71h-.27a16 16 0 0 1-11.89-5.3l-57.6-64a16 16 0 1 1 23.78-21.4l45.29 50.32 122.59-145.91a16 16 0 0 1 24.5 20.58z">
                                                    </path>
                                                </svg>
                                            </div>
                                            Один час обучения РОПа.
                                        </List.Item>
                                    </List>
                                </div>
                                <div className=''>
                                    <div className='mt-4 mb-2'>
                                        <div className='font-normal text-sm text-gray-500'>Стоимость</div>
                                        <div className='font-bold text-3xl'>149 000 ₽</div>
                                    </div>
                                    <ShortFormInvert/>
                                </div>
                            </li>
                            <li className='bg-gray-200 dark:text-gray-900 p-8 dark:bg-gray-100 w-full rounded-md'>
                                <div>
                                    <div className='text-2xl font-bold'>
                                        CRM «Под ключ»
                                    </div>
                                    <div className='mt-4 text-lg font-medium'>
                                    При внедрении «под ключ», мы используем проектный подход к внедрению. Такой подход ориентирован на крупные организации.
                                    После внедрения Битрикс24 у вашей компании появится комплексный инструмент для работы с клиентами с возможностью проектного управления. С помощью CRM удастся оптимизировать внутренние процессы предприятия и увеличить эффективность вашего бизнеса.
                                    </div>
                                </div>
                                <List className='mt-2 grid gap-x-4 grid-cols-1 lg:grid-cols-2'>
                                    <List.Item className='text-base font-normal text-gray-900 items-start flex-row flex'>
                                        <div className='size-5 mr-2'>
                                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="32" width="32" xmlns="http://www.w3.org/2000/svg" className="size-5 mr-2">
                                                <path d="M400 48H112a64.07 64.07 0 0 0-64 64v288a64.07 64.07 0 0 0 64 64h288a64.07 64.07 0 0 0 64-64V112a64.07 64.07 0 0 0-64-64zm-35.75 138.29-134.4 160a16 16 0 0 1-12 5.71h-.27a16 16 0 0 1-11.89-5.3l-57.6-64a16 16 0 1 1 23.78-21.4l45.29 50.32 122.59-145.91a16 16 0 0 1 24.5 20.58z">
                                                </path>
                                            </svg>
                                        </div>
                                        Потенциальный большой объем доработок;
                                    </List.Item>
                                    <List.Item className='text-base font-normal text-gray-900 items-start flex-row flex'>
                                        <div className='size-5 mr-2'>
                                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="32" width="32" xmlns="http://www.w3.org/2000/svg" className="size-5 mr-2">
                                                <path d="M400 48H112a64.07 64.07 0 0 0-64 64v288a64.07 64.07 0 0 0 64 64h288a64.07 64.07 0 0 0 64-64V112a64.07 64.07 0 0 0-64-64zm-35.75 138.29-134.4 160a16 16 0 0 1-12 5.71h-.27a16 16 0 0 1-11.89-5.3l-57.6-64a16 16 0 1 1 23.78-21.4l45.29 50.32 122.59-145.91a16 16 0 0 1 24.5 20.58z">
                                                </path>
                                            </svg>
                                        </div>
                                        Переход с самописной или сильно доработанной системы;
                                    </List.Item>
                                    <List.Item className='text-base font-normal text-gray-900 items-start flex-row flex'>
                                        <div className='size-5 mr-2'>
                                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="32" width="32" xmlns="http://www.w3.org/2000/svg" className="size-5 mr-2">
                                                <path d="M400 48H112a64.07 64.07 0 0 0-64 64v288a64.07 64.07 0 0 0 64 64h288a64.07 64.07 0 0 0 64-64V112a64.07 64.07 0 0 0-64-64zm-35.75 138.29-134.4 160a16 16 0 0 1-12 5.71h-.27a16 16 0 0 1-11.89-5.3l-57.6-64a16 16 0 1 1 23.78-21.4l45.29 50.32 122.59-145.91a16 16 0 0 1 24.5 20.58z">
                                                </path>
                                            </svg>
                                        </div>
                                        Объемные интеграции с другими системами и сервисами.
                                    </List.Item>
                                </List>
                                <div className='font-bold text-lg my-4'>
                                    Этапы внедрения
                                </div>
                                <List ordered nested className='mt-2 grid gap-x-4 grid-cols-1 lg:grid-cols-2'>
                                    <List.Item className='text-base font-normal text-gray-900 items-start flex-row flex'>
                                        <div className='font-medium mr-2'>
                                            01.
                                        </div>
                                        Встречи и сбор требований
                                    </List.Item>
                                    <List.Item className='text-base font-normal text-gray-900 items-start flex-row flex'>
                                        <div className='font-medium mr-2'>
                                            02.
                                        </div>
                                        Проектирование системы и написание технического задания
                                    </List.Item>
                                    <List.Item className='text-base font-normal text-gray-900 items-start flex-row flex'>
                                        <div className='font-medium mr-2'>
                                            03.
                                        </div>
                                        Установка Битрикс24 и программная разработка
                                    </List.Item>
                                    <List.Item className='text-base font-normal text-gray-900 items-start flex-row flex'>
                                        <div className='font-medium mr-2'>
                                            04.
                                        </div>
                                        Написание документации и инструкций
                                    </List.Item>
                                    <List.Item className='text-base font-normal text-gray-900 items-start flex-row flex'>
                                        <div className='font-medium mr-2'>
                                            05.
                                        </div>
                                        Тестирование и запуск Битрикс24 на боевых серверах
                                    </List.Item>
                                    <List.Item className='text-base font-normal text-gray-900 items-start flex-row flex'>
                                        <div className='font-medium mr-2'>
                                            06.
                                        </div>
                                        Интеграция Битрикс24 со сторонними системами и сервисами (ERP, телефония, мессенджеры и др.)
                                    </List.Item>
                                    <List.Item className='text-base font-normal text-gray-900 items-start flex-row flex'>
                                        <div className='font-medium mr-2'>
                                            07.
                                        </div>
                                        Обучение пользователей работе с Битрикс24 по ролям
                                    </List.Item>
                                    <List.Item className='text-base font-normal text-gray-900 items-start flex-row flex'>
                                        <div className='font-medium mr-2'>
                                            08.
                                        </div>
                                        Поддержка и контроль эффективности работы в Битрикс24
                                    </List.Item>
                                </List>
                                <div className=''>
                                    <div className='mt-4 mb-2'>
                                        <div className='font-normal text-sm text-gray-500'>Стоимость</div>
                                        <div className='font-bold text-3xl'>от 200 000 ₽</div>
                                    </div>
                                    <ShortFormInvert/>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <CallBlock/>
                </div>
            </article>
        </SectionContainer>
        
    </>
    
  )
}
