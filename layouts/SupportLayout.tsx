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

export default function SupportLayout({ content, authorDetails, next, prev, children }: LayoutProps) {
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
                                        Бесплатное базовое сопровождение при покупке лицензии или любой услуги:
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
                                            Связь с нашими специалистами каждый рабочий день с 09:00 до 18:00 в чате, почте, задачах, по телефону;
                                        </List.Item>
                                        <List.Item className='text-base font-normal text-gray-900 items-start flex-row flex'>
                                            <div className='size-5 mr-2'>
                                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="32" width="32" xmlns="http://www.w3.org/2000/svg" className="size-5 mr-2">
                                                    <path d="M400 48H112a64.07 64.07 0 0 0-64 64v288a64.07 64.07 0 0 0 64 64h288a64.07 64.07 0 0 0 64-64V112a64.07 64.07 0 0 0-64-64zm-35.75 138.29-134.4 160a16 16 0 0 1-12 5.71h-.27a16 16 0 0 1-11.89-5.3l-57.6-64a16 16 0 1 1 23.78-21.4l45.29 50.32 122.59-145.91a16 16 0 0 1 24.5 20.58z">
                                                    </path>
                                                </svg>
                                            </div>
                                            Консультации по работе штатного функционала: «Как работает CRM-форма? Куда нажать, чтобы выполнить задачу?» — и другие;
                                        </List.Item>
                                        <List.Item className='text-base font-normal text-gray-900 items-start flex-row flex'>
                                            <div className='size-5 mr-2'>
                                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="32" width="32" xmlns="http://www.w3.org/2000/svg" className="size-5 mr-2">
                                                    <path d="M400 48H112a64.07 64.07 0 0 0-64 64v288a64.07 64.07 0 0 0 64 64h288a64.07 64.07 0 0 0 64-64V112a64.07 64.07 0 0 0-64-64zm-35.75 138.29-134.4 160a16 16 0 0 1-12 5.71h-.27a16 16 0 0 1-11.89-5.3l-57.6-64a16 16 0 1 1 23.78-21.4l45.29 50.32 122.59-145.91a16 16 0 0 1 24.5 20.58z">
                                                    </path>
                                                </svg>
                                            </div>
                                            Отвечаем на 95% вопросов в течение рабочего дня;
                                        </List.Item>
                                        <List.Item className='text-base font-normal text-gray-900 items-start flex-row flex'>
                                            <div className='size-5 mr-2'>
                                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="32" width="32" xmlns="http://www.w3.org/2000/svg" className="size-5 mr-2">
                                                    <path d="M400 48H112a64.07 64.07 0 0 0-64 64v288a64.07 64.07 0 0 0 64 64h288a64.07 64.07 0 0 0 64-64V112a64.07 64.07 0 0 0-64-64zm-35.75 138.29-134.4 160a16 16 0 0 1-12 5.71h-.27a16 16 0 0 1-11.89-5.3l-57.6-64a16 16 0 1 1 23.78-21.4l45.29 50.32 122.59-145.91a16 16 0 0 1 24.5 20.58z">
                                                    </path>
                                                </svg>
                                            </div>
                                            Консультируем только администраторов портала;
                                        </List.Item>
                                        <List.Item className='text-base font-normal text-gray-900 items-start flex-row flex'>
                                            <div className='size-5 mr-2'>
                                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="32" width="32" xmlns="http://www.w3.org/2000/svg" className="size-5 mr-2">
                                                    <path d="M400 48H112a64.07 64.07 0 0 0-64 64v288a64.07 64.07 0 0 0 64 64h288a64.07 64.07 0 0 0 64-64V112a64.07 64.07 0 0 0-64-64zm-35.75 138.29-134.4 160a16 16 0 0 1-12 5.71h-.27a16 16 0 0 1-11.89-5.3l-57.6-64a16 16 0 1 1 23.78-21.4l45.29 50.32 122.59-145.91a16 16 0 0 1 24.5 20.58z">
                                                    </path>
                                                </svg>
                                            </div>
                                            Не более 10 обращений в месяц.
                                        </List.Item>
                                    </List>
                                </div>
                                <div className=''>
                                    <div className='mt-4 mb-2'>
                                        <div className='font-normal text-sm text-gray-500'>Стоимость</div>
                                        <div className='font-bold text-3xl'>Бесплатно</div>
                                    </div>
                                    <ShortFormInvert/>
                                </div>
                            </li>
                            <div className='text-2xl my-4'>
                                Сопровождение облачного портала
                            </div>
                            <li className='bg-gray-200 dark:text-gray-900 p-8 dark:bg-gray-100 w-full rounded-md'>
                                <div>
                                    <div className='text-2xl font-bold'>
                                        Тариф Lite
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
                                            Связь с нашими специалистами каждый рабочий день с 09:00 до 18:00 в чате, почте, задачах, по телефону;
                                        </List.Item>
                                        <List.Item className='text-base font-normal text-gray-900 items-start flex-row flex'>
                                            <div className='size-5 mr-2'>
                                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="32" width="32" xmlns="http://www.w3.org/2000/svg" className="size-5 mr-2">
                                                    <path d="M400 48H112a64.07 64.07 0 0 0-64 64v288a64.07 64.07 0 0 0 64 64h288a64.07 64.07 0 0 0 64-64V112a64.07 64.07 0 0 0-64-64zm-35.75 138.29-134.4 160a16 16 0 0 1-12 5.71h-.27a16 16 0 0 1-11.89-5.3l-57.6-64a16 16 0 1 1 23.78-21.4l45.29 50.32 122.59-145.91a16 16 0 0 1 24.5 20.58z">
                                                    </path>
                                                </svg>
                                            </div>
                                            Консультации по работе штатного функционала: «Как работает CRM-форма? Куда нажать, чтобы выполнить задачу?» — и другие;
                                        </List.Item>
                                        <List.Item className='text-base font-normal text-gray-900 items-start flex-row flex'>
                                            <div className='size-5 mr-2'>
                                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="32" width="32" xmlns="http://www.w3.org/2000/svg" className="size-5 mr-2">
                                                    <path d="M400 48H112a64.07 64.07 0 0 0-64 64v288a64.07 64.07 0 0 0 64 64h288a64.07 64.07 0 0 0 64-64V112a64.07 64.07 0 0 0-64-64zm-35.75 138.29-134.4 160a16 16 0 0 1-12 5.71h-.27a16 16 0 0 1-11.89-5.3l-57.6-64a16 16 0 1 1 23.78-21.4l45.29 50.32 122.59-145.91a16 16 0 0 1 24.5 20.58z">
                                                    </path>
                                                </svg>
                                            </div>
                                            Отвечаем на 95% вопросов в течение рабочего дня;
                                        </List.Item>
                                        <List.Item className='text-base font-normal text-gray-900 items-start flex-row flex'>
                                            <div className='size-5 mr-2'>
                                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="32" width="32" xmlns="http://www.w3.org/2000/svg" className="size-5 mr-2">
                                                    <path d="M400 48H112a64.07 64.07 0 0 0-64 64v288a64.07 64.07 0 0 0 64 64h288a64.07 64.07 0 0 0 64-64V112a64.07 64.07 0 0 0-64-64zm-35.75 138.29-134.4 160a16 16 0 0 1-12 5.71h-.27a16 16 0 0 1-11.89-5.3l-57.6-64a16 16 0 1 1 23.78-21.4l45.29 50.32 122.59-145.91a16 16 0 0 1 24.5 20.58z">
                                                    </path>
                                                </svg>
                                            </div>
                                            Консультируем только администраторов портала;
                                        </List.Item>
                                        <List.Item className='text-base font-normal text-gray-900 items-start flex-row flex'>
                                            <div className='size-5 mr-2'>
                                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="32" width="32" xmlns="http://www.w3.org/2000/svg" className="size-5 mr-2">
                                                    <path d="M400 48H112a64.07 64.07 0 0 0-64 64v288a64.07 64.07 0 0 0 64 64h288a64.07 64.07 0 0 0 64-64V112a64.07 64.07 0 0 0-64-64zm-35.75 138.29-134.4 160a16 16 0 0 1-12 5.71h-.27a16 16 0 0 1-11.89-5.3l-57.6-64a16 16 0 1 1 23.78-21.4l45.29 50.32 122.59-145.91a16 16 0 0 1 24.5 20.58z">
                                                    </path>
                                                </svg>
                                            </div>
                                            3 часа в месяц на настройку/обучение (сгорают каждый месяц);
                                        </List.Item>
                                        <List.Item className='text-base font-normal text-gray-900 items-start flex-row flex'>
                                            <div className='size-5 mr-2'>
                                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="32" width="32" xmlns="http://www.w3.org/2000/svg" className="size-5 mr-2">
                                                    <path d="M400 48H112a64.07 64.07 0 0 0-64 64v288a64.07 64.07 0 0 0 64 64h288a64.07 64.07 0 0 0 64-64V112a64.07 64.07 0 0 0-64-64zm-35.75 138.29-134.4 160a16 16 0 0 1-12 5.71h-.27a16 16 0 0 1-11.89-5.3l-57.6-64a16 16 0 1 1 23.78-21.4l45.29 50.32 122.59-145.91a16 16 0 0 1 24.5 20.58z">
                                                    </path>
                                                </svg>
                                            </div>
                                            Настройки + доработки за доп. часы;
                                        </List.Item>
                                        <List.Item className='text-base font-normal text-gray-900 items-start flex-row flex'>
                                            <div className='size-5 mr-2'>
                                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="32" width="32" xmlns="http://www.w3.org/2000/svg" className="size-5 mr-2">
                                                    <path d="M400 48H112a64.07 64.07 0 0 0-64 64v288a64.07 64.07 0 0 0 64 64h288a64.07 64.07 0 0 0 64-64V112a64.07 64.07 0 0 0-64-64zm-35.75 138.29-134.4 160a16 16 0 0 1-12 5.71h-.27a16 16 0 0 1-11.89-5.3l-57.6-64a16 16 0 1 1 23.78-21.4l45.29 50.32 122.59-145.91a16 16 0 0 1 24.5 20.58z">
                                                    </path>
                                                </svg>
                                            </div>
                                            Скидка на ставку часа 5%.
                                        </List.Item>
                                    </List>
                                </div>
                                <div className=''>
                                    <div className='flex flex-row '>
                                        <div className='mt-4 mb-2 mr-8'>
                                            <div className='font-normal text-sm text-gray-500'>Срок обучения</div>
                                            <div className='font-bold text-3xl'>1 мес.</div>
                                        </div>
                                        <div className='mt-4 mb-2'>
                                            <div className='font-normal text-sm text-gray-500'>Стоимость</div>
                                            <div className='font-bold text-3xl'>149 000 ₽</div>
                                        </div>
                                    </div>
                                    
                                    <ShortFormInvert/>
                                </div>
                            </li>
                            <li className='bg-gray-200 dark:text-gray-900 p-8 dark:bg-gray-100 w-full rounded-md'>
                                <div>
                                    <div className='text-2xl font-bold'>
                                        Тариф PRO
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
                                        Связь с нашими специалистами каждый рабочий день с 09:00 до 18:00 в чате, почте, задачах, по телефону;
                                    </List.Item>
                                    <List.Item className='text-base font-normal text-gray-900 items-start flex-row flex'>
                                        <div className='size-5 mr-2'>
                                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="32" width="32" xmlns="http://www.w3.org/2000/svg" className="size-5 mr-2">
                                                <path d="M400 48H112a64.07 64.07 0 0 0-64 64v288a64.07 64.07 0 0 0 64 64h288a64.07 64.07 0 0 0 64-64V112a64.07 64.07 0 0 0-64-64zm-35.75 138.29-134.4 160a16 16 0 0 1-12 5.71h-.27a16 16 0 0 1-11.89-5.3l-57.6-64a16 16 0 1 1 23.78-21.4l45.29 50.32 122.59-145.91a16 16 0 0 1 24.5 20.58z">
                                                </path>
                                            </svg>
                                        </div>
                                        Консультации по работе штатного функционала: «Как работает CRM-форма? Куда нажать, чтобы выполнить задачу?» — и другие;
                                    </List.Item>
                                    <List.Item className='text-base font-normal text-gray-900 items-start flex-row flex'>
                                        <div className='size-5 mr-2'>
                                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="32" width="32" xmlns="http://www.w3.org/2000/svg" className="size-5 mr-2">
                                                <path d="M400 48H112a64.07 64.07 0 0 0-64 64v288a64.07 64.07 0 0 0 64 64h288a64.07 64.07 0 0 0 64-64V112a64.07 64.07 0 0 0-64-64zm-35.75 138.29-134.4 160a16 16 0 0 1-12 5.71h-.27a16 16 0 0 1-11.89-5.3l-57.6-64a16 16 0 1 1 23.78-21.4l45.29 50.32 122.59-145.91a16 16 0 0 1 24.5 20.58z">
                                                </path>
                                            </svg>
                                        </div>
                                        Отвечаем в течение 2 рабочих часов;
                                    </List.Item>
                                    <List.Item className='text-base font-normal text-gray-900 items-start flex-row flex'>
                                        <div className='size-5 mr-2'>
                                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="32" width="32" xmlns="http://www.w3.org/2000/svg" className="size-5 mr-2">
                                                <path d="M400 48H112a64.07 64.07 0 0 0-64 64v288a64.07 64.07 0 0 0 64 64h288a64.07 64.07 0 0 0 64-64V112a64.07 64.07 0 0 0-64-64zm-35.75 138.29-134.4 160a16 16 0 0 1-12 5.71h-.27a16 16 0 0 1-11.89-5.3l-57.6-64a16 16 0 1 1 23.78-21.4l45.29 50.32 122.59-145.91a16 16 0 0 1 24.5 20.58z">
                                                </path>
                                            </svg>
                                        </div>
                                        Консультируем только администраторов портала;
                                    </List.Item>
                                    <List.Item className='text-base font-normal text-gray-900 items-start flex-row flex'>
                                        <div className='size-5 mr-2'>
                                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="32" width="32" xmlns="http://www.w3.org/2000/svg" className="size-5 mr-2">
                                                <path d="M400 48H112a64.07 64.07 0 0 0-64 64v288a64.07 64.07 0 0 0 64 64h288a64.07 64.07 0 0 0 64-64V112a64.07 64.07 0 0 0-64-64zm-35.75 138.29-134.4 160a16 16 0 0 1-12 5.71h-.27a16 16 0 0 1-11.89-5.3l-57.6-64a16 16 0 1 1 23.78-21.4l45.29 50.32 122.59-145.91a16 16 0 0 1 24.5 20.58z">
                                                </path>
                                            </svg>
                                        </div>
                                        5 часов в месяц на настройку/обучение (сгорают каждый месяц);
                                    </List.Item>
                                    <List.Item className='text-base font-normal text-gray-900 items-start flex-row flex'>
                                        <div className='size-5 mr-2'>
                                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="32" width="32" xmlns="http://www.w3.org/2000/svg" className="size-5 mr-2">
                                                <path d="M400 48H112a64.07 64.07 0 0 0-64 64v288a64.07 64.07 0 0 0 64 64h288a64.07 64.07 0 0 0 64-64V112a64.07 64.07 0 0 0-64-64zm-35.75 138.29-134.4 160a16 16 0 0 1-12 5.71h-.27a16 16 0 0 1-11.89-5.3l-57.6-64a16 16 0 1 1 23.78-21.4l45.29 50.32 122.59-145.91a16 16 0 0 1 24.5 20.58z">
                                                </path>
                                            </svg>
                                        </div>
                                        Контроль и редактирование прав доступа пользователей;
                                    </List.Item>
                                    <List.Item className='text-base font-normal text-gray-900 items-start flex-row flex'>
                                        <div className='size-5 mr-2'>
                                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="32" width="32" xmlns="http://www.w3.org/2000/svg" className="size-5 mr-2">
                                                <path d="M400 48H112a64.07 64.07 0 0 0-64 64v288a64.07 64.07 0 0 0 64 64h288a64.07 64.07 0 0 0 64-64V112a64.07 64.07 0 0 0-64-64zm-35.75 138.29-134.4 160a16 16 0 0 1-12 5.71h-.27a16 16 0 0 1-11.89-5.3l-57.6-64a16 16 0 1 1 23.78-21.4l45.29 50.32 122.59-145.91a16 16 0 0 1 24.5 20.58z">
                                                </path>
                                            </svg>
                                        </div>     
                                        Отчет об уровне эффективности работы менеджеров в конце месяца;
                                    </List.Item>
                                    <List.Item className='text-base font-normal text-gray-900 items-start flex-row flex'>
                                        <div className='size-5 mr-2'>
                                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="32" width="32" xmlns="http://www.w3.org/2000/svg" className="size-5 mr-2">
                                                <path d="M400 48H112a64.07 64.07 0 0 0-64 64v288a64.07 64.07 0 0 0 64 64h288a64.07 64.07 0 0 0 64-64V112a64.07 64.07 0 0 0-64-64zm-35.75 138.29-134.4 160a16 16 0 0 1-12 5.71h-.27a16 16 0 0 1-11.89-5.3l-57.6-64a16 16 0 1 1 23.78-21.4l45.29 50.32 122.59-145.91a16 16 0 0 1 24.5 20.58z">
                                                </path>
                                            </svg>
                                        </div>     
                                        Аудит CRM раз в квартал;
                                    </List.Item>
                                    <List.Item className='text-base font-normal text-gray-900 items-start flex-row flex'>
                                        <div className='size-5 mr-2'>
                                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="32" width="32" xmlns="http://www.w3.org/2000/svg" className="size-5 mr-2">
                                                <path d="M400 48H112a64.07 64.07 0 0 0-64 64v288a64.07 64.07 0 0 0 64 64h288a64.07 64.07 0 0 0 64-64V112a64.07 64.07 0 0 0-64-64zm-35.75 138.29-134.4 160a16 16 0 0 1-12 5.71h-.27a16 16 0 0 1-11.89-5.3l-57.6-64a16 16 0 1 1 23.78-21.4l45.29 50.32 122.59-145.91a16 16 0 0 1 24.5 20.58z">
                                                </path>
                                            </svg>
                                        </div>     
                                        Настройки + доработки за доп. часы;
                                    </List.Item>
                                    <List.Item className='text-base font-normal text-gray-900 items-start flex-row flex'>
                                        <div className='size-5 mr-2'>
                                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="32" width="32" xmlns="http://www.w3.org/2000/svg" className="size-5 mr-2">
                                                <path d="M400 48H112a64.07 64.07 0 0 0-64 64v288a64.07 64.07 0 0 0 64 64h288a64.07 64.07 0 0 0 64-64V112a64.07 64.07 0 0 0-64-64zm-35.75 138.29-134.4 160a16 16 0 0 1-12 5.71h-.27a16 16 0 0 1-11.89-5.3l-57.6-64a16 16 0 1 1 23.78-21.4l45.29 50.32 122.59-145.91a16 16 0 0 1 24.5 20.58z">
                                                </path>
                                            </svg>
                                        </div>     
                                        Скидка на ставку часа 10%.
                                    </List.Item>
                                </List>
                                <div className=''>
                                    <div className='mt-4 mb-2'>
                                        <div className='font-normal text-sm text-gray-500'>Стоимость</div>
                                        <div className='font-bold text-3xl'>30 000 ₽/мес.</div>
                                    </div>
                                    <ShortFormInvert/>
                                </div>
                            </li>
                            <div className='text-2xl my-4'>
                                Сопровождение коробочного портала
                            </div>
                            <li className='bg-gray-200 dark:text-gray-900 p-8 dark:bg-gray-100 w-full rounded-md'>
                                <div>
                                    <div className='text-2xl font-bold'>
                                        Тариф Box Lite
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
                                        Связь с нашими специалистами каждый рабочий день с 09:00 до 18:00 в чате, почте, задачах, по телефону;
                                    </List.Item>
                                    <List.Item className='text-base font-normal text-gray-900 items-start flex-row flex'>
                                        <div className='size-5 mr-2'>
                                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="32" width="32" xmlns="http://www.w3.org/2000/svg" className="size-5 mr-2">
                                                <path d="M400 48H112a64.07 64.07 0 0 0-64 64v288a64.07 64.07 0 0 0 64 64h288a64.07 64.07 0 0 0 64-64V112a64.07 64.07 0 0 0-64-64zm-35.75 138.29-134.4 160a16 16 0 0 1-12 5.71h-.27a16 16 0 0 1-11.89-5.3l-57.6-64a16 16 0 1 1 23.78-21.4l45.29 50.32 122.59-145.91a16 16 0 0 1 24.5 20.58z">
                                                </path>
                                            </svg>
                                        </div>
                                        Консультации по работе штатного функционала: «Как работает CRM-форма? Куда нажать, чтобы выполнить задачу?» — и другие;
                                    </List.Item>
                                    <List.Item className='text-base font-normal text-gray-900 items-start flex-row flex'>
                                        <div className='size-5 mr-2'>
                                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="32" width="32" xmlns="http://www.w3.org/2000/svg" className="size-5 mr-2">
                                                <path d="M400 48H112a64.07 64.07 0 0 0-64 64v288a64.07 64.07 0 0 0 64 64h288a64.07 64.07 0 0 0 64-64V112a64.07 64.07 0 0 0-64-64zm-35.75 138.29-134.4 160a16 16 0 0 1-12 5.71h-.27a16 16 0 0 1-11.89-5.3l-57.6-64a16 16 0 1 1 23.78-21.4l45.29 50.32 122.59-145.91a16 16 0 0 1 24.5 20.58z">
                                                </path>
                                            </svg>
                                        </div>
                                        Отвечаем на 95% вопросов в течение рабочего дня;
                                    </List.Item>
                                    <List.Item className='text-base font-normal text-gray-900 items-start flex-row flex'>
                                        <div className='size-5 mr-2'>
                                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="32" width="32" xmlns="http://www.w3.org/2000/svg" className="size-5 mr-2">
                                                <path d="M400 48H112a64.07 64.07 0 0 0-64 64v288a64.07 64.07 0 0 0 64 64h288a64.07 64.07 0 0 0 64-64V112a64.07 64.07 0 0 0-64-64zm-35.75 138.29-134.4 160a16 16 0 0 1-12 5.71h-.27a16 16 0 0 1-11.89-5.3l-57.6-64a16 16 0 1 1 23.78-21.4l45.29 50.32 122.59-145.91a16 16 0 0 1 24.5 20.58z">
                                                </path>
                                            </svg>
                                        </div>
                                        Мониторинг ошибок и сбоев 24/7;
                                    </List.Item>
                                    <List.Item className='text-base font-normal text-gray-900 items-start flex-row flex'>
                                        <div className='size-5 mr-2'>
                                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="32" width="32" xmlns="http://www.w3.org/2000/svg" className="size-5 mr-2">
                                                <path d="M400 48H112a64.07 64.07 0 0 0-64 64v288a64.07 64.07 0 0 0 64 64h288a64.07 64.07 0 0 0 64-64V112a64.07 64.07 0 0 0-64-64zm-35.75 138.29-134.4 160a16 16 0 0 1-12 5.71h-.27a16 16 0 0 1-11.89-5.3l-57.6-64a16 16 0 1 1 23.78-21.4l45.29 50.32 122.59-145.91a16 16 0 0 1 24.5 20.58z">
                                                </path>
                                            </svg>
                                        </div>
                                        Консультируем только администраторов портала;
                                    </List.Item>
                                    <List.Item className='text-base font-normal text-gray-900 items-start flex-row flex'>
                                        <div className='size-5 mr-2'>
                                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="32" width="32" xmlns="http://www.w3.org/2000/svg" className="size-5 mr-2">
                                                <path d="M400 48H112a64.07 64.07 0 0 0-64 64v288a64.07 64.07 0 0 0 64 64h288a64.07 64.07 0 0 0 64-64V112a64.07 64.07 0 0 0-64-64zm-35.75 138.29-134.4 160a16 16 0 0 1-12 5.71h-.27a16 16 0 0 1-11.89-5.3l-57.6-64a16 16 0 1 1 23.78-21.4l45.29 50.32 122.59-145.91a16 16 0 0 1 24.5 20.58z">
                                                </path>
                                            </svg>
                                        </div>
                                        Настройки + доработки за доп. часы;
                                    </List.Item>
                                    <List.Item className='text-base font-normal text-gray-900 items-start flex-row flex'>
                                        <div className='size-5 mr-2'>
                                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="32" width="32" xmlns="http://www.w3.org/2000/svg" className="size-5 mr-2">
                                                <path d="M400 48H112a64.07 64.07 0 0 0-64 64v288a64.07 64.07 0 0 0 64 64h288a64.07 64.07 0 0 0 64-64V112a64.07 64.07 0 0 0-64-64zm-35.75 138.29-134.4 160a16 16 0 0 1-12 5.71h-.27a16 16 0 0 1-11.89-5.3l-57.6-64a16 16 0 1 1 23.78-21.4l45.29 50.32 122.59-145.91a16 16 0 0 1 24.5 20.58z">
                                                </path>
                                            </svg>
                                        </div>     
                                        Контролируем сроки регистрации домена и сертификата SSL;
                                    </List.Item>
                                    <List.Item className='text-base font-normal text-gray-900 items-start flex-row flex'>
                                        <div className='size-5 mr-2'>
                                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="32" width="32" xmlns="http://www.w3.org/2000/svg" className="size-5 mr-2">
                                                <path d="M400 48H112a64.07 64.07 0 0 0-64 64v288a64.07 64.07 0 0 0 64 64h288a64.07 64.07 0 0 0 64-64V112a64.07 64.07 0 0 0-64-64zm-35.75 138.29-134.4 160a16 16 0 0 1-12 5.71h-.27a16 16 0 0 1-11.89-5.3l-57.6-64a16 16 0 1 1 23.78-21.4l45.29 50.32 122.59-145.91a16 16 0 0 1 24.5 20.58z">
                                                </path>
                                            </svg>
                                        </div>     
                                        Скидка на ставку часа 10%.
                                    </List.Item>
                                </List>
                                <div className=''>
                                    <div className='mt-4 mb-2'>
                                        <div className='font-normal text-sm text-gray-500'>Стоимость</div>
                                        <div className='font-bold text-3xl'>12 000 ₽/мес.</div>
                                    </div>
                                    <ShortFormInvert/>
                                </div>
                            </li>
                            <li className='bg-gray-200 dark:text-gray-900 p-8 dark:bg-gray-100 w-full rounded-md'>
                                <div>
                                    <div className='text-2xl font-bold'>
                                        Тариф Box PRO
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
                                        Связь с нашими специалистами каждый рабочий день с 09:00 до 18:00 в чате, почте, задачах, по телефону;
                                    </List.Item>
                                    <List.Item className='text-base font-normal text-gray-900 items-start flex-row flex'>
                                        <div className='size-5 mr-2'>
                                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="32" width="32" xmlns="http://www.w3.org/2000/svg" className="size-5 mr-2">
                                                <path d="M400 48H112a64.07 64.07 0 0 0-64 64v288a64.07 64.07 0 0 0 64 64h288a64.07 64.07 0 0 0 64-64V112a64.07 64.07 0 0 0-64-64zm-35.75 138.29-134.4 160a16 16 0 0 1-12 5.71h-.27a16 16 0 0 1-11.89-5.3l-57.6-64a16 16 0 1 1 23.78-21.4l45.29 50.32 122.59-145.91a16 16 0 0 1 24.5 20.58z">
                                                </path>
                                            </svg>
                                        </div>
                                        Консультации по работе штатного функционала: «Как работает CRM-форма? Куда нажать, чтобы выполнить задачу?» — и другие;
                                    </List.Item>
                                    <List.Item className='text-base font-normal text-gray-900 items-start flex-row flex'>
                                        <div className='size-5 mr-2'>
                                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="32" width="32" xmlns="http://www.w3.org/2000/svg" className="size-5 mr-2">
                                                <path d="M400 48H112a64.07 64.07 0 0 0-64 64v288a64.07 64.07 0 0 0 64 64h288a64.07 64.07 0 0 0 64-64V112a64.07 64.07 0 0 0-64-64zm-35.75 138.29-134.4 160a16 16 0 0 1-12 5.71h-.27a16 16 0 0 1-11.89-5.3l-57.6-64a16 16 0 1 1 23.78-21.4l45.29 50.32 122.59-145.91a16 16 0 0 1 24.5 20.58z">
                                                </path>
                                            </svg>
                                        </div>
                                        Отвечаем на 95% вопросов в течение рабочего дня;
                                    </List.Item>
                                    <List.Item className='text-base font-normal text-gray-900 items-start flex-row flex'>
                                        <div className='size-5 mr-2'>
                                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="32" width="32" xmlns="http://www.w3.org/2000/svg" className="size-5 mr-2">
                                                <path d="M400 48H112a64.07 64.07 0 0 0-64 64v288a64.07 64.07 0 0 0 64 64h288a64.07 64.07 0 0 0 64-64V112a64.07 64.07 0 0 0-64-64zm-35.75 138.29-134.4 160a16 16 0 0 1-12 5.71h-.27a16 16 0 0 1-11.89-5.3l-57.6-64a16 16 0 1 1 23.78-21.4l45.29 50.32 122.59-145.91a16 16 0 0 1 24.5 20.58z">
                                                </path>
                                            </svg>
                                        </div>
                                        Мониторинг работы всех служб портала (почтовая служба, служба резервного копирования, сервер очередей для чата, уведомлений и диска и др.);
                                    </List.Item>
                                    <List.Item className='text-base font-normal text-gray-900 items-start flex-row flex'>
                                        <div className='size-5 mr-2'>
                                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="32" width="32" xmlns="http://www.w3.org/2000/svg" className="size-5 mr-2">
                                                <path d="M400 48H112a64.07 64.07 0 0 0-64 64v288a64.07 64.07 0 0 0 64 64h288a64.07 64.07 0 0 0 64-64V112a64.07 64.07 0 0 0-64-64zm-35.75 138.29-134.4 160a16 16 0 0 1-12 5.71h-.27a16 16 0 0 1-11.89-5.3l-57.6-64a16 16 0 1 1 23.78-21.4l45.29 50.32 122.59-145.91a16 16 0 0 1 24.5 20.58z">
                                                </path>
                                            </svg>
                                        </div>
                                        Контроль и редактирование прав доступа пользователей;
                                    </List.Item>
                                    <List.Item className='text-base font-normal text-gray-900 items-start flex-row flex'>
                                        <div className='size-5 mr-2'>
                                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="32" width="32" xmlns="http://www.w3.org/2000/svg" className="size-5 mr-2">
                                                <path d="M400 48H112a64.07 64.07 0 0 0-64 64v288a64.07 64.07 0 0 0 64 64h288a64.07 64.07 0 0 0 64-64V112a64.07 64.07 0 0 0-64-64zm-35.75 138.29-134.4 160a16 16 0 0 1-12 5.71h-.27a16 16 0 0 1-11.89-5.3l-57.6-64a16 16 0 1 1 23.78-21.4l45.29 50.32 122.59-145.91a16 16 0 0 1 24.5 20.58z">
                                                </path>
                                            </svg>
                                        </div>
                                        Мониторинг ошибок и сбоев 24/7;
                                    </List.Item>
                                    <List.Item className='text-base font-normal text-gray-900 items-start flex-row flex'>
                                        <div className='size-5 mr-2'>
                                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="32" width="32" xmlns="http://www.w3.org/2000/svg" className="size-5 mr-2">
                                                <path d="M400 48H112a64.07 64.07 0 0 0-64 64v288a64.07 64.07 0 0 0 64 64h288a64.07 64.07 0 0 0 64-64V112a64.07 64.07 0 0 0-64-64zm-35.75 138.29-134.4 160a16 16 0 0 1-12 5.71h-.27a16 16 0 0 1-11.89-5.3l-57.6-64a16 16 0 1 1 23.78-21.4l45.29 50.32 122.59-145.91a16 16 0 0 1 24.5 20.58z">
                                                </path>
                                            </svg>
                                        </div>     
                                        Ручная проверка резервного копирования (1 раз в неделю)
                                    </List.Item>
                                    <List.Item className='text-base font-normal text-gray-900 items-start flex-row flex'>
                                        <div className='size-5 mr-2'>
                                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="32" width="32" xmlns="http://www.w3.org/2000/svg" className="size-5 mr-2">
                                                <path d="M400 48H112a64.07 64.07 0 0 0-64 64v288a64.07 64.07 0 0 0 64 64h288a64.07 64.07 0 0 0 64-64V112a64.07 64.07 0 0 0-64-64zm-35.75 138.29-134.4 160a16 16 0 0 1-12 5.71h-.27a16 16 0 0 1-11.89-5.3l-57.6-64a16 16 0 1 1 23.78-21.4l45.29 50.32 122.59-145.91a16 16 0 0 1 24.5 20.58z">
                                                </path>
                                            </svg>
                                        </div>     
                                        Настройки + доработки за доп. часы;
                                    </List.Item>
                                    <List.Item className='text-base font-normal text-gray-900 items-start flex-row flex'>
                                        <div className='size-5 mr-2'>
                                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="32" width="32" xmlns="http://www.w3.org/2000/svg" className="size-5 mr-2">
                                                <path d="M400 48H112a64.07 64.07 0 0 0-64 64v288a64.07 64.07 0 0 0 64 64h288a64.07 64.07 0 0 0 64-64V112a64.07 64.07 0 0 0-64-64zm-35.75 138.29-134.4 160a16 16 0 0 1-12 5.71h-.27a16 16 0 0 1-11.89-5.3l-57.6-64a16 16 0 1 1 23.78-21.4l45.29 50.32 122.59-145.91a16 16 0 0 1 24.5 20.58z">
                                                </path>
                                            </svg>
                                        </div>     
                                        Контролируем сроки регистрации домена и сертификата SSL;
                                    </List.Item>
                                    <List.Item className='text-base font-normal text-gray-900 items-start flex-row flex'>
                                        <div className='size-5 mr-2'>
                                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="32" width="32" xmlns="http://www.w3.org/2000/svg" className="size-5 mr-2">
                                                <path d="M400 48H112a64.07 64.07 0 0 0-64 64v288a64.07 64.07 0 0 0 64 64h288a64.07 64.07 0 0 0 64-64V112a64.07 64.07 0 0 0-64-64zm-35.75 138.29-134.4 160a16 16 0 0 1-12 5.71h-.27a16 16 0 0 1-11.89-5.3l-57.6-64a16 16 0 1 1 23.78-21.4l45.29 50.32 122.59-145.91a16 16 0 0 1 24.5 20.58z">
                                                </path>
                                            </svg>
                                        </div>     
                                        Скидка на ставку часа 10%.
                                    </List.Item>
                                </List>
                                <div className=''>
                                    <div className='mt-4 mb-2'>
                                        <div className='font-normal text-sm text-gray-500'>Стоимость</div>
                                        <div className='font-bold text-3xl'>30 000 ₽/мес.</div>
                                    </div>
                                    <ShortFormInvert/>
                                </div>
                            </li>
                            <li className='bg-gray-200 dark:text-gray-900 p-8 dark:bg-gray-100 w-full rounded-md'>
                                <div>
                                    <div className='text-2xl font-bold'>
                                        Тариф Box Maximum
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
                                        Оперативное реагирование на проблемы в Битрикс24, влияющие на работоспособность компании (поддержка осуществляется в будние дни с 09:00 до 18:00 МСК);
                                    </List.Item>
                                    <List.Item className='text-base font-normal text-gray-900 items-start flex-row flex'>
                                        <div className='size-5 mr-2'>
                                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="32" width="32" xmlns="http://www.w3.org/2000/svg" className="size-5 mr-2">
                                                <path d="M400 48H112a64.07 64.07 0 0 0-64 64v288a64.07 64.07 0 0 0 64 64h288a64.07 64.07 0 0 0 64-64V112a64.07 64.07 0 0 0-64-64zm-35.75 138.29-134.4 160a16 16 0 0 1-12 5.71h-.27a16 16 0 0 1-11.89-5.3l-57.6-64a16 16 0 1 1 23.78-21.4l45.29 50.32 122.59-145.91a16 16 0 0 1 24.5 20.58z">
                                                </path>
                                            </svg>
                                        </div>
                                        Мониторинг функционирования базы (проверка физической и логической целостности, чистка кеша, анализ ошибок в памяти программы и действия для предотвращения их появления в будущем, прогноз возможных осложнений и рекомендации о возможностях их решения);
                                    </List.Item>
                                    <List.Item className='text-base font-normal text-gray-900 items-start flex-row flex'>
                                        <div className='size-5 mr-2'>
                                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="32" width="32" xmlns="http://www.w3.org/2000/svg" className="size-5 mr-2">
                                                <path d="M400 48H112a64.07 64.07 0 0 0-64 64v288a64.07 64.07 0 0 0 64 64h288a64.07 64.07 0 0 0 64-64V112a64.07 64.07 0 0 0-64-64zm-35.75 138.29-134.4 160a16 16 0 0 1-12 5.71h-.27a16 16 0 0 1-11.89-5.3l-57.6-64a16 16 0 1 1 23.78-21.4l45.29 50.32 122.59-145.91a16 16 0 0 1 24.5 20.58z">
                                                </path>
                                            </svg>
                                        </div>
                                        Отслеживание и установка любых обновлений с адаптацией под конфигурацию заказчика;
                                    </List.Item>
                                    <List.Item className='text-base font-normal text-gray-900 items-start flex-row flex'>
                                        <div className='size-5 mr-2'>
                                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="32" width="32" xmlns="http://www.w3.org/2000/svg" className="size-5 mr-2">
                                                <path d="M400 48H112a64.07 64.07 0 0 0-64 64v288a64.07 64.07 0 0 0 64 64h288a64.07 64.07 0 0 0 64-64V112a64.07 64.07 0 0 0-64-64zm-35.75 138.29-134.4 160a16 16 0 0 1-12 5.71h-.27a16 16 0 0 1-11.89-5.3l-57.6-64a16 16 0 1 1 23.78-21.4l45.29 50.32 122.59-145.91a16 16 0 0 1 24.5 20.58z">
                                                </path>
                                            </svg>
                                        </div>
                                        Поддержка пользователей;
                                    </List.Item>
                                    <List.Item className='text-base font-normal text-gray-900 items-start flex-row flex'>
                                        <div className='size-5 mr-2'>
                                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="32" width="32" xmlns="http://www.w3.org/2000/svg" className="size-5 mr-2">
                                                <path d="M400 48H112a64.07 64.07 0 0 0-64 64v288a64.07 64.07 0 0 0 64 64h288a64.07 64.07 0 0 0 64-64V112a64.07 64.07 0 0 0-64-64zm-35.75 138.29-134.4 160a16 16 0 0 1-12 5.71h-.27a16 16 0 0 1-11.89-5.3l-57.6-64a16 16 0 1 1 23.78-21.4l45.29 50.32 122.59-145.91a16 16 0 0 1 24.5 20.58z">
                                                </path>
                                            </svg>
                                        </div>
                                        Мониторинг срока действия лицензий, домена, хостинга, SSL-сертификата;
                                    </List.Item>
                                    <List.Item className='text-base font-normal text-gray-900 items-start flex-row flex'>
                                        <div className='size-5 mr-2'>
                                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="32" width="32" xmlns="http://www.w3.org/2000/svg" className="size-5 mr-2">
                                                <path d="M400 48H112a64.07 64.07 0 0 0-64 64v288a64.07 64.07 0 0 0 64 64h288a64.07 64.07 0 0 0 64-64V112a64.07 64.07 0 0 0-64-64zm-35.75 138.29-134.4 160a16 16 0 0 1-12 5.71h-.27a16 16 0 0 1-11.89-5.3l-57.6-64a16 16 0 1 1 23.78-21.4l45.29 50.32 122.59-145.91a16 16 0 0 1 24.5 20.58z">
                                                </path>
                                            </svg>
                                        </div>
                                        Мониторинг места на сервере;
                                    </List.Item>
                                    <List.Item className='text-base font-normal text-gray-900 items-start flex-row flex'>
                                        <div className='size-5 mr-2'>
                                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="32" width="32" xmlns="http://www.w3.org/2000/svg" className="size-5 mr-2">
                                                <path d="M400 48H112a64.07 64.07 0 0 0-64 64v288a64.07 64.07 0 0 0 64 64h288a64.07 64.07 0 0 0 64-64V112a64.07 64.07 0 0 0-64-64zm-35.75 138.29-134.4 160a16 16 0 0 1-12 5.71h-.27a16 16 0 0 1-11.89-5.3l-57.6-64a16 16 0 1 1 23.78-21.4l45.29 50.32 122.59-145.91a16 16 0 0 1 24.5 20.58z">
                                                </path>
                                            </svg>
                                        </div>     
                                        Ведение документации по системе Битрикс24, с отражением ключевых моментов функционирования, а также всех внесенных доработок и изменений конфигурации;
                                    </List.Item>
                                    <List.Item className='text-base font-normal text-gray-900 items-start flex-row flex'>
                                        <div className='size-5 mr-2'>
                                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="32" width="32" xmlns="http://www.w3.org/2000/svg" className="size-5 mr-2">
                                                <path d="M400 48H112a64.07 64.07 0 0 0-64 64v288a64.07 64.07 0 0 0 64 64h288a64.07 64.07 0 0 0 64-64V112a64.07 64.07 0 0 0-64-64zm-35.75 138.29-134.4 160a16 16 0 0 1-12 5.71h-.27a16 16 0 0 1-11.89-5.3l-57.6-64a16 16 0 1 1 23.78-21.4l45.29 50.32 122.59-145.91a16 16 0 0 1 24.5 20.58z">
                                                </path>
                                            </svg>
                                        </div>     
                                        Поддержка функционирования дополнительных программируемых модулей и отчетов;
                                    </List.Item>
                                    <List.Item className='text-base font-normal text-gray-900 items-start flex-row flex'>
                                        <div className='size-5 mr-2'>
                                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="32" width="32" xmlns="http://www.w3.org/2000/svg" className="size-5 mr-2">
                                                <path d="M400 48H112a64.07 64.07 0 0 0-64 64v288a64.07 64.07 0 0 0 64 64h288a64.07 64.07 0 0 0 64-64V112a64.07 64.07 0 0 0-64-64zm-35.75 138.29-134.4 160a16 16 0 0 1-12 5.71h-.27a16 16 0 0 1-11.89-5.3l-57.6-64a16 16 0 1 1 23.78-21.4l45.29 50.32 122.59-145.91a16 16 0 0 1 24.5 20.58z">
                                                </path>
                                            </svg>
                                        </div>     
                                        Настройка профилей пользователей, включая уровни доступа;
                                    </List.Item>
                                    <List.Item className='text-base font-normal text-gray-900 items-start flex-row flex'>
                                        <div className='size-5 mr-2'>
                                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="32" width="32" xmlns="http://www.w3.org/2000/svg" className="size-5 mr-2">
                                                <path d="M400 48H112a64.07 64.07 0 0 0-64 64v288a64.07 64.07 0 0 0 64 64h288a64.07 64.07 0 0 0 64-64V112a64.07 64.07 0 0 0-64-64zm-35.75 138.29-134.4 160a16 16 0 0 1-12 5.71h-.27a16 16 0 0 1-11.89-5.3l-57.6-64a16 16 0 1 1 23.78-21.4l45.29 50.32 122.59-145.91a16 16 0 0 1 24.5 20.58z">
                                                </path>
                                            </svg>
                                        </div>     
                                        Консультации по реализации типовых и нетиповых пользовательских задач среде Битрикс24;
                                    </List.Item>
                                    <List.Item className='text-base font-normal text-gray-900 items-start flex-row flex'>
                                        <div className='size-5 mr-2'>
                                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="32" width="32" xmlns="http://www.w3.org/2000/svg" className="size-5 mr-2">
                                                <path d="M400 48H112a64.07 64.07 0 0 0-64 64v288a64.07 64.07 0 0 0 64 64h288a64.07 64.07 0 0 0 64-64V112a64.07 64.07 0 0 0-64-64zm-35.75 138.29-134.4 160a16 16 0 0 1-12 5.71h-.27a16 16 0 0 1-11.89-5.3l-57.6-64a16 16 0 1 1 23.78-21.4l45.29 50.32 122.59-145.91a16 16 0 0 1 24.5 20.58z">
                                                </path>
                                            </svg>
                                        </div>     
                                        Организация резервного копирования, управление архивными копиями баз данных;
                                    </List.Item>
                                    <List.Item className='text-base font-normal text-gray-900 items-start flex-row flex'>
                                        <div className='size-5 mr-2'>
                                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="32" width="32" xmlns="http://www.w3.org/2000/svg" className="size-5 mr-2">
                                                <path d="M400 48H112a64.07 64.07 0 0 0-64 64v288a64.07 64.07 0 0 0 64 64h288a64.07 64.07 0 0 0 64-64V112a64.07 64.07 0 0 0-64-64zm-35.75 138.29-134.4 160a16 16 0 0 1-12 5.71h-.27a16 16 0 0 1-11.89-5.3l-57.6-64a16 16 0 1 1 23.78-21.4l45.29 50.32 122.59-145.91a16 16 0 0 1 24.5 20.58z">
                                                </path>
                                            </svg>
                                        </div>     
                                        Разработка и поддержка функционирования дополнительных программируемых модулей и отчетов.
                                    </List.Item>
                                </List>
                                <div className=''>
                                    <div className='mt-4 mb-2'>
                                        <div className='font-normal text-sm text-gray-500'>Стоимость</div>
                                        <div className='font-bold text-3xl'>Индивидуально</div>
                                    </div>
                                    <ShortFormInvert/>
                                </div>
                            </li>
                            <div className='text-2xl my-4'>
                                Стоимость почасовой технической поддержки
                            </div>
                            <li className='bg-gray-200 dark:text-gray-900 p-8 dark:bg-gray-100 w-full rounded-md'>
                                <div>
                                    <div className='text-base font-normal'>
                                        Стандартная ставка часа технической поддержки<b> – от 3 300 ₽/час.</b>
                                    </div>
                                    <div className='text-base font-normal'>
                                        Минимальный пакет — <b>5 часов.</b>
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
                                        5 часов – от 16 500 ₽ (ставка 3300 р/час)
                                    </List.Item>
                                    <List.Item className='text-base font-normal text-gray-900 items-start flex-row flex'>
                                        <div className='size-5 mr-2'>
                                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="32" width="32" xmlns="http://www.w3.org/2000/svg" className="size-5 mr-2">
                                                <path d="M400 48H112a64.07 64.07 0 0 0-64 64v288a64.07 64.07 0 0 0 64 64h288a64.07 64.07 0 0 0 64-64V112a64.07 64.07 0 0 0-64-64zm-35.75 138.29-134.4 160a16 16 0 0 1-12 5.71h-.27a16 16 0 0 1-11.89-5.3l-57.6-64a16 16 0 1 1 23.78-21.4l45.29 50.32 122.59-145.91a16 16 0 0 1 24.5 20.58z">
                                                </path>
                                            </svg>
                                        </div>
                                        10 часов – от 31 000 ₽ (ставка 3100 р/час)
                                    </List.Item>
                                    <List.Item className='text-base font-normal text-gray-900 items-start flex-row flex'>
                                        <div className='size-5 mr-2'>
                                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="32" width="32" xmlns="http://www.w3.org/2000/svg" className="size-5 mr-2">
                                                <path d="M400 48H112a64.07 64.07 0 0 0-64 64v288a64.07 64.07 0 0 0 64 64h288a64.07 64.07 0 0 0 64-64V112a64.07 64.07 0 0 0-64-64zm-35.75 138.29-134.4 160a16 16 0 0 1-12 5.71h-.27a16 16 0 0 1-11.89-5.3l-57.6-64a16 16 0 1 1 23.78-21.4l45.29 50.32 122.59-145.91a16 16 0 0 1 24.5 20.58z">
                                                </path>
                                            </svg>
                                        </div>
                                        30 часов – от 84 000 ₽ (ставка 2800 р/час)
                                    </List.Item>
                                    <List.Item className='text-base font-normal text-gray-900 items-start flex-row flex'>
                                        <div className='size-5 mr-2'>
                                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="32" width="32" xmlns="http://www.w3.org/2000/svg" className="size-5 mr-2">
                                                <path d="M400 48H112a64.07 64.07 0 0 0-64 64v288a64.07 64.07 0 0 0 64 64h288a64.07 64.07 0 0 0 64-64V112a64.07 64.07 0 0 0-64-64zm-35.75 138.29-134.4 160a16 16 0 0 1-12 5.71h-.27a16 16 0 0 1-11.89-5.3l-57.6-64a16 16 0 1 1 23.78-21.4l45.29 50.32 122.59-145.91a16 16 0 0 1 24.5 20.58z">
                                                </path>
                                            </svg>
                                        </div>
                                        от 50 часов и более – от 130 000 ₽ (ставка 2600 р/час)
                                    </List.Item>
                                </List>
                                <div className='text-base font-normal my-4'>
                                    Пакет действителен в течение 30 рабочих дней. Чем больше часов в пакете, тем ниже почасовая ставка. В течение 2-х часов подключимся к вашему порталу.
                                </div>
                                <div className='text-base font-bold my-4'>
                                Часы техподдержки могут быть использованы на любые задачи, связанные с Битрикс24:
                                </div>
                                <List className='mt-2 mb-4 grid gap-x-4 grid-cols-1 lg:grid-cols-2'>
                                    <List.Item className='text-base font-normal text-gray-900 items-start flex-row flex'>
                                        <div className='size-5 mr-2'>
                                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="32" width="32" xmlns="http://www.w3.org/2000/svg" className="size-5 mr-2">
                                                <path d="M400 48H112a64.07 64.07 0 0 0-64 64v288a64.07 64.07 0 0 0 64 64h288a64.07 64.07 0 0 0 64-64V112a64.07 64.07 0 0 0-64-64zm-35.75 138.29-134.4 160a16 16 0 0 1-12 5.71h-.27a16 16 0 0 1-11.89-5.3l-57.6-64a16 16 0 1 1 23.78-21.4l45.29 50.32 122.59-145.91a16 16 0 0 1 24.5 20.58z">
                                                </path>
                                            </svg>
                                        </div>
                                        Восстановление Битрикс24, создание или развертывание бэкапа;
                                    </List.Item>
                                    <List.Item className='text-base font-normal text-gray-900 items-start flex-row flex'>
                                        <div className='size-5 mr-2'>
                                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="32" width="32" xmlns="http://www.w3.org/2000/svg" className="size-5 mr-2">
                                                <path d="M400 48H112a64.07 64.07 0 0 0-64 64v288a64.07 64.07 0 0 0 64 64h288a64.07 64.07 0 0 0 64-64V112a64.07 64.07 0 0 0-64-64zm-35.75 138.29-134.4 160a16 16 0 0 1-12 5.71h-.27a16 16 0 0 1-11.89-5.3l-57.6-64a16 16 0 1 1 23.78-21.4l45.29 50.32 122.59-145.91a16 16 0 0 1 24.5 20.58z">
                                                </path>
                                            </svg>
                                        </div>
                                        Внедрение и интеграция Битрикс24 с продуктами 1С, почтой или телефонией, мессенджерами;
                                    </List.Item>
                                    <List.Item className='text-base font-normal text-gray-900 items-start flex-row flex'>
                                        <div className='size-5 mr-2'>
                                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="32" width="32" xmlns="http://www.w3.org/2000/svg" className="size-5 mr-2">
                                                <path d="M400 48H112a64.07 64.07 0 0 0-64 64v288a64.07 64.07 0 0 0 64 64h288a64.07 64.07 0 0 0 64-64V112a64.07 64.07 0 0 0-64-64zm-35.75 138.29-134.4 160a16 16 0 0 1-12 5.71h-.27a16 16 0 0 1-11.89-5.3l-57.6-64a16 16 0 1 1 23.78-21.4l45.29 50.32 122.59-145.91a16 16 0 0 1 24.5 20.58z">
                                                </path>
                                            </svg>
                                        </div>
                                        Обновление продукта, переход на новый тариф;
                                    </List.Item>
                                    <List.Item className='text-base font-normal text-gray-900 items-start flex-row flex'>
                                        <div className='size-5 mr-2'>
                                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="32" width="32" xmlns="http://www.w3.org/2000/svg" className="size-5 mr-2">
                                                <path d="M400 48H112a64.07 64.07 0 0 0-64 64v288a64.07 64.07 0 0 0 64 64h288a64.07 64.07 0 0 0 64-64V112a64.07 64.07 0 0 0-64-64zm-35.75 138.29-134.4 160a16 16 0 0 1-12 5.71h-.27a16 16 0 0 1-11.89-5.3l-57.6-64a16 16 0 1 1 23.78-21.4l45.29 50.32 122.59-145.91a16 16 0 0 1 24.5 20.58z">
                                                </path>
                                            </svg>
                                        </div>
                                        Переезд на коробочную версию продукта.;
                                    </List.Item>
                                    <List.Item className='text-base font-normal text-gray-900 items-start flex-row flex'>
                                        <div className='size-5 mr-2'>
                                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="32" width="32" xmlns="http://www.w3.org/2000/svg" className="size-5 mr-2">
                                                <path d="M400 48H112a64.07 64.07 0 0 0-64 64v288a64.07 64.07 0 0 0 64 64h288a64.07 64.07 0 0 0 64-64V112a64.07 64.07 0 0 0-64-64zm-35.75 138.29-134.4 160a16 16 0 0 1-12 5.71h-.27a16 16 0 0 1-11.89-5.3l-57.6-64a16 16 0 1 1 23.78-21.4l45.29 50.32 122.59-145.91a16 16 0 0 1 24.5 20.58z">
                                                </path>
                                            </svg>
                                        </div>
                                        Переезд на коробочную версию продукта.;
                                    </List.Item>
                                    <List.Item className='text-base font-normal text-gray-900 items-start flex-row flex'>
                                        <div className='size-5 mr-2'>
                                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="32" width="32" xmlns="http://www.w3.org/2000/svg" className="size-5 mr-2">
                                                <path d="M400 48H112a64.07 64.07 0 0 0-64 64v288a64.07 64.07 0 0 0 64 64h288a64.07 64.07 0 0 0 64-64V112a64.07 64.07 0 0 0-64-64zm-35.75 138.29-134.4 160a16 16 0 0 1-12 5.71h-.27a16 16 0 0 1-11.89-5.3l-57.6-64a16 16 0 1 1 23.78-21.4l45.29 50.32 122.59-145.91a16 16 0 0 1 24.5 20.58z">
                                                </path>
                                            </svg>
                                        </div>
                                        Настройка стандартных модулей продукта;
                                    </List.Item>
                                    <List.Item className='text-base font-normal text-gray-900 items-start flex-row flex'>
                                        <div className='size-5 mr-2'>
                                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="32" width="32" xmlns="http://www.w3.org/2000/svg" className="size-5 mr-2">
                                                <path d="M400 48H112a64.07 64.07 0 0 0-64 64v288a64.07 64.07 0 0 0 64 64h288a64.07 64.07 0 0 0 64-64V112a64.07 64.07 0 0 0-64-64zm-35.75 138.29-134.4 160a16 16 0 0 1-12 5.71h-.27a16 16 0 0 1-11.89-5.3l-57.6-64a16 16 0 1 1 23.78-21.4l45.29 50.32 122.59-145.91a16 16 0 0 1 24.5 20.58z">
                                                </path>
                                            </svg>
                                        </div>
                                        Запуск и настройка новых функций портала;
                                    </List.Item>
                                    <List.Item className='text-base font-normal text-gray-900 items-start flex-row flex'>
                                        <div className='size-5 mr-2'>
                                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="32" width="32" xmlns="http://www.w3.org/2000/svg" className="size-5 mr-2">
                                                <path d="M400 48H112a64.07 64.07 0 0 0-64 64v288a64.07 64.07 0 0 0 64 64h288a64.07 64.07 0 0 0 64-64V112a64.07 64.07 0 0 0-64-64zm-35.75 138.29-134.4 160a16 16 0 0 1-12 5.71h-.27a16 16 0 0 1-11.89-5.3l-57.6-64a16 16 0 1 1 23.78-21.4l45.29 50.32 122.59-145.91a16 16 0 0 1 24.5 20.58z">
                                                </path>
                                            </svg>
                                        </div>
                                        Обучение сотрудников.
                                    </List.Item>
                                </List>
                                <ShortFormInvert/>
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
