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
                                        Превратите ваш бизнес в производительную силу, используя наше предложение по внедрению CRM Lite от Битрикс24. Этот комплексный инструмент позволит вам эффективно взаимодействовать с клиентами и управлять проектами, а также оптимизировать внутренние процессы вашего предприятия.
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
                                            Мы проведем регистрацию до 10 сотрудников, настроим одну воронку (карточки, лиды) и заведем до 10 полей в карточке, а также подключим почтовые ящики сотрудников.
                                        </List.Item>
                                        <List.Item className='text-base font-normal text-gray-900 items-start flex-row flex'>
                                            <div className='size-5 mr-2'>
                                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="32" width="32" xmlns="http://www.w3.org/2000/svg" className="size-5 mr-2">
                                                    <path d="M400 48H112a64.07 64.07 0 0 0-64 64v288a64.07 64.07 0 0 0 64 64h288a64.07 64.07 0 0 0 64-64V112a64.07 64.07 0 0 0-64-64zm-35.75 138.29-134.4 160a16 16 0 0 1-12 5.71h-.27a16 16 0 0 1-11.89-5.3l-57.6-64a16 16 0 1 1 23.78-21.4l45.29 50.32 122.59-145.91a16 16 0 0 1 24.5 20.58z">
                                                    </path>
                                                </svg>
                                            </div>
                                            Мы настроим организационную структуру и права доступа пользователей.
                                        </List.Item>
                                        <List.Item className='text-base font-normal text-gray-900 items-start flex-row flex'>
                                            <div className='size-5 mr-2'>
                                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="32" width="32" xmlns="http://www.w3.org/2000/svg" className="size-5 mr-2">
                                                    <path d="M400 48H112a64.07 64.07 0 0 0-64 64v288a64.07 64.07 0 0 0 64 64h288a64.07 64.07 0 0 0 64-64V112a64.07 64.07 0 0 0-64-64zm-35.75 138.29-134.4 160a16 16 0 0 1-12 5.71h-.27a16 16 0 0 1-11.89-5.3l-57.6-64a16 16 0 1 1 23.78-21.4l45.29 50.32 122.59-145.91a16 16 0 0 1 24.5 20.58z">
                                                    </path>
                                                </svg>
                                            </div>
                                            Все заявки будут автоматически отправляться в CRM Битрикс24.
                                        </List.Item>
                                        <List.Item className='text-base font-normal text-gray-900 items-start flex-row flex'>
                                            <div className='size-5 mr-2'>
                                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="32" width="32" xmlns="http://www.w3.org/2000/svg" className="size-5 mr-2">
                                                    <path d="M400 48H112a64.07 64.07 0 0 0-64 64v288a64.07 64.07 0 0 0 64 64h288a64.07 64.07 0 0 0 64-64V112a64.07 64.07 0 0 0-64-64zm-35.75 138.29-134.4 160a16 16 0 0 1-12 5.71h-.27a16 16 0 0 1-11.89-5.3l-57.6-64a16 16 0 1 1 23.78-21.4l45.29 50.32 122.59-145.91a16 16 0 0 1 24.5 20.58z">
                                                    </path>
                                                </svg>
                                            </div>
                                            Мы настроим три отчета CRM для мониторинга ключевых показателей.
                                        </List.Item>
                                        <List.Item className='text-base font-normal text-gray-900 items-start flex-row flex'>
                                            <div className='size-5 mr-2'>
                                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="32" width="32" xmlns="http://www.w3.org/2000/svg" className="size-5 mr-2">
                                                    <path d="M400 48H112a64.07 64.07 0 0 0-64 64v288a64.07 64.07 0 0 0 64 64h288a64.07 64.07 0 0 0 64-64V112a64.07 64.07 0 0 0-64-64zm-35.75 138.29-134.4 160a16 16 0 0 1-12 5.71h-.27a16 16 0 0 1-11.89-5.3l-57.6-64a16 16 0 1 1 23.78-21.4l45.29 50.32 122.59-145.91a16 16 0 0 1 24.5 20.58z">
                                                    </path>
                                                </svg>
                                            </div>
                                            Мы подключим сервис обратного звонка, чат и форму обратной связи с помощью виджета Битрикс24 на одном сайте вашей компании.
                                        </List.Item>
                                        <List.Item className='text-base font-normal text-gray-900 items-start flex-row flex'>
                                            <div className='size-5 mr-2'>
                                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="32" width="32" xmlns="http://www.w3.org/2000/svg" className="size-5 mr-2">
                                                    <path d="M400 48H112a64.07 64.07 0 0 0-64 64v288a64.07 64.07 0 0 0 64 64h288a64.07 64.07 0 0 0 64-64V112a64.07 64.07 0 0 0-64-64zm-35.75 138.29-134.4 160a16 16 0 0 1-12 5.71h-.27a16 16 0 0 1-11.89-5.3l-57.6-64a16 16 0 1 1 23.78-21.4l45.29 50.32 122.59-145.91a16 16 0 0 1 24.5 20.58z">
                                                    </path>
                                                </svg>
                                            </div>
                                            Мы проведем одночасовое групповое обучение менеджеров по продажам работе с CRM Битрикс24 под руководством нашего консультанта.
                                        </List.Item>
                                        <List.Item className='text-base font-normal text-gray-900 items-start flex-row flex'>
                                            <div className='size-5 mr-2'>
                                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="32" width="32" xmlns="http://www.w3.org/2000/svg" className="size-5 mr-2">
                                                    <path d="M400 48H112a64.07 64.07 0 0 0-64 64v288a64.07 64.07 0 0 0 64 64h288a64.07 64.07 0 0 0 64-64V112a64.07 64.07 0 0 0-64-64zm-35.75 138.29-134.4 160a16 16 0 0 1-12 5.71h-.27a16 16 0 0 1-11.89-5.3l-57.6-64a16 16 0 1 1 23.78-21.4l45.29 50.32 122.59-145.91a16 16 0 0 1 24.5 20.58z">
                                                    </path>
                                                </svg>
                                            </div>
                                            Мы оптимизируем карточку лида, контакта, сделки (список полей предоставляет заказчик).
                                        </List.Item>
                                    </List>
                                </div>
                                <div className=''>
                                    <div className='mt-4 mb-2'>
                                        <div className='font-normal text-sm text-gray-500'>Стоимость</div>
                                        <div className='font-bold text-3xl'>29 000 ₽</div>
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
                                        Благодаря внедрению Битрикс24, ваш бизнес получит универсальный инструмент для взаимодействия с клиентами и управления проектами, что позволит оптимизировать внутренние процессы и увеличить производительность.
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
                                            Установка продажного воронки (2 направления): конфигурация этапов сделки, карточки сделки, автоматизация воронок (до 10 роботов), триггеры для изменения стадий, шаблоны уведомлений;
                                        </List.Item>
                                        <List.Item className='text-base font-normal text-gray-900 items-start flex-row flex'>
                                            <div className='size-5 mr-2'>
                                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="32" width="32" xmlns="http://www.w3.org/2000/svg" className="size-5 mr-2">
                                                    <path d="M400 48H112a64.07 64.07 0 0 0-64 64v288a64.07 64.07 0 0 0 64 64h288a64.07 64.07 0 0 0 64-64V112a64.07 64.07 0 0 0-64-64zm-35.75 138.29-134.4 160a16 16 0 0 1-12 5.71h-.27a16 16 0 0 1-11.89-5.3l-57.6-64a16 16 0 1 1 23.78-21.4l45.29 50.32 122.59-145.91a16 16 0 0 1 24.5 20.58z">
                                                    </path>
                                                </svg>
                                            </div>
                                            Проведение пяти интервью с ключевыми сотрудниками организации на любом этапе реализации проекта;
                                        </List.Item>
                                        <List.Item className='text-base font-normal text-gray-900 items-start flex-row flex'>
                                            <div className='size-5 mr-2'>
                                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="32" width="32" xmlns="http://www.w3.org/2000/svg" className="size-5 mr-2">
                                                    <path d="M400 48H112a64.07 64.07 0 0 0-64 64v288a64.07 64.07 0 0 0 64 64h288a64.07 64.07 0 0 0 64-64V112a64.07 64.07 0 0 0-64-64zm-35.75 138.29-134.4 160a16 16 0 0 1-12 5.71h-.27a16 16 0 0 1-11.89-5.3l-57.6-64a16 16 0 1 1 23.78-21.4l45.29 50.32 122.59-145.91a16 16 0 0 1 24.5 20.58z">
                                                    </path>
                                                </svg>
                                            </div>
                                            Организация одного часа группового обучения менеджеров по продажам работы с CRM Битрикс24 под руководством нашего специалиста;
                                        </List.Item>
                                        <List.Item className='text-base font-normal text-gray-900 items-start flex-row flex'>
                                            <div className='size-5 mr-2'>
                                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="32" width="32" xmlns="http://www.w3.org/2000/svg" className="size-5 mr-2">
                                                    <path d="M400 48H112a64.07 64.07 0 0 0-64 64v288a64.07 64.07 0 0 0 64 64h288a64.07 64.07 0 0 0 64-64V112a64.07 64.07 0 0 0-64-64zm-35.75 138.29-134.4 160a16 16 0 0 1-12 5.71h-.27a16 16 0 0 1-11.89-5.3l-57.6-64a16 16 0 1 1 23.78-21.4l45.29 50.32 122.59-145.91a16 16 0 0 1 24.5 20.58z">
                                                    </path>
                                                </svg>
                                            </div>
                                            Настройка воронки лидов: этапы, карточки, автоматизация воронок (до 10 роботов), шаблоны уведомлений;
                                        </List.Item>
                                        <List.Item className='text-base font-normal text-gray-900 items-start flex-row flex'>
                                            <div className='size-5 mr-2'>
                                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="32" width="32" xmlns="http://www.w3.org/2000/svg" className="size-5 mr-2">
                                                    <path d="M400 48H112a64.07 64.07 0 0 0-64 64v288a64.07 64.07 0 0 0 64 64h288a64.07 64.07 0 0 0 64-64V112a64.07 64.07 0 0 0-64-64zm-35.75 138.29-134.4 160a16 16 0 0 1-12 5.71h-.27a16 16 0 0 1-11.89-5.3l-57.6-64a16 16 0 1 1 23.78-21.4l45.29 50.32 122.59-145.91a16 16 0 0 1 24.5 20.58z">
                                                    </path>
                                                </svg>
                                            </div>
                                            Глубокая конфигурация прав доступа к CRM Битрикс24 (до 4 ролей);
                                        </List.Item>
                                        <List.Item className='text-base font-normal text-gray-900 items-start flex-row flex'>
                                            <div className='size-5 mr-2'>
                                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="32" width="32" xmlns="http://www.w3.org/2000/svg" className="size-5 mr-2">
                                                    <path d="M400 48H112a64.07 64.07 0 0 0-64 64v288a64.07 64.07 0 0 0 64 64h288a64.07 64.07 0 0 0 64-64V112a64.07 64.07 0 0 0-64-64zm-35.75 138.29-134.4 160a16 16 0 0 1-12 5.71h-.27a16 16 0 0 1-11.89-5.3l-57.6-64a16 16 0 1 1 23.78-21.4l45.29 50.32 122.59-145.91a16 16 0 0 1 24.5 20.58z">
                                                    </path>
                                                </svg>
                                            </div>
                                            Создание трех отчетов CRM для контроля ключевых показателей;
                                        </List.Item>
                                        <List.Item className='text-base font-normal text-gray-900 items-start flex-row flex'>
                                            <div className='size-5 mr-2'>
                                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="32" width="32" xmlns="http://www.w3.org/2000/svg" className="size-5 mr-2">
                                                    <path d="M400 48H112a64.07 64.07 0 0 0-64 64v288a64.07 64.07 0 0 0 64 64h288a64.07 64.07 0 0 0 64-64V112a64.07 64.07 0 0 0-64-64zm-35.75 138.29-134.4 160a16 16 0 0 1-12 5.71h-.27a16 16 0 0 1-11.89-5.3l-57.6-64a16 16 0 1 1 23.78-21.4l45.29 50.32 122.59-145.91a16 16 0 0 1 24.5 20.58z">
                                                    </path>
                                                </svg>
                                            </div>
                                            Интеграция каналов коммуникации с клиентами: телефония, мессенджеры, электронная почта (до 3 почтовых ящиков);
                                        </List.Item>
                                        <List.Item className='text-base font-normal text-gray-900 items-start flex-row flex'>
                                            <div className='size-5 mr-2'>
                                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="32" width="32" xmlns="http://www.w3.org/2000/svg" className="size-5 mr-2">
                                                    <path d="M400 48H112a64.07 64.07 0 0 0-64 64v288a64.07 64.07 0 0 0 64 64h288a64.07 64.07 0 0 0 64-64V112a64.07 64.07 0 0 0-64-64zm-35.75 138.29-134.4 160a16 16 0 0 1-12 5.71h-.27a16 16 0 0 1-11.89-5.3l-57.6-64a16 16 0 1 1 23.78-21.4l45.29 50.32 122.59-145.91a16 16 0 0 1 24.5 20.58z">
                                                    </path>
                                                </svg>
                                            </div>
                                            Организация одного часа обучения для руководителя проекта.
                                        </List.Item>
                                    </List>
                                </div>
                                <div className=''>
                                    <div className='mt-4 mb-2'>
                                        <div className='font-normal text-sm text-gray-500'>Стоимость</div>
                                        <div className='font-bold text-3xl'>109 000 ₽</div>
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
                                        Внедрение «Под ключ» подразумевает проектный подход в процессе внедрения. Этот метод идеально подходит для крупных компаний. После внедрения Битрикс24, вашей компании будет доступен универсальный инструмент для взаимодействия с клиентами и управления проектами. С помощью CRM вы сможете оптимизировать внутренние процессы и улучшить эффективность вашего бизнеса.
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
                                        Возможность большого объема кастомизации;
                                    </List.Item>
                                    <List.Item className='text-base font-normal text-gray-900 items-start flex-row flex'>
                                        <div className='size-5 mr-2'>
                                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="32" width="32" xmlns="http://www.w3.org/2000/svg" className="size-5 mr-2">
                                                <path d="M400 48H112a64.07 64.07 0 0 0-64 64v288a64.07 64.07 0 0 0 64 64h288a64.07 64.07 0 0 0 64-64V112a64.07 64.07 0 0 0-64-64zm-35.75 138.29-134.4 160a16 16 0 0 1-12 5.71h-.27a16 16 0 0 1-11.89-5.3l-57.6-64a16 16 0 1 1 23.78-21.4l45.29 50.32 122.59-145.91a16 16 0 0 1 24.5 20.58z">
                                                </path>
                                            </svg>
                                        </div>
                                        Миграция с самописной или сильно модифицированной системы;
                                    </List.Item>
                                    <List.Item className='text-base font-normal text-gray-900 items-start flex-row flex'>
                                        <div className='size-5 mr-2'>
                                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="32" width="32" xmlns="http://www.w3.org/2000/svg" className="size-5 mr-2">
                                                <path d="M400 48H112a64.07 64.07 0 0 0-64 64v288a64.07 64.07 0 0 0 64 64h288a64.07 64.07 0 0 0 64-64V112a64.07 64.07 0 0 0-64-64zm-35.75 138.29-134.4 160a16 16 0 0 1-12 5.71h-.27a16 16 0 0 1-11.89-5.3l-57.6-64a16 16 0 1 1 23.78-21.4l45.29 50.32 122.59-145.91a16 16 0 0 1 24.5 20.58z">
                                                </path>
                                            </svg>
                                        </div>
                                        Масштабные интеграции с другими системами и сервисами.
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
                                        <div className='font-bold text-3xl'>от 190 000 ₽</div>
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
