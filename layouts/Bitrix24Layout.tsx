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

export default function Bitrix24Layout({ content, authorDetails, next, prev, children }: LayoutProps) {
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
                    <header className='grid grid-cols-2 items-center my-8'>
                        <div>
                            <h1 className='text-5xl mb-4 font-bold'>
                            {title}
                            </h1>
                            <h2 className='text-xl mb-4'>
                                {summary}
                            </h2>
                            <ShortForm></ShortForm>
                        </div>
                        <div className='grid col-end-auto justify-end'>
                            <img className="w-full"src={headerimage}></img>
                        </div>
                    </header>
                    <div className="divide-y divide-gray-200 dark:divide-gray-700 xl:col-span-3 xl:row-span-2 xl:pb-0">
                    <div className="prose max-w-none pb-8 pt-10 dark:prose-invert">{children}</div>
                    </div>
                    <div className="xl:col-span-3 xl:row-span-2 xl:pb-0">
                        <TabGroup>
                            <TabList>
                                <Tab className={"uppercase mr-4 data-[selected]:text-gray-900 dark:data-[selected]:text-gray-200 data-[selected]:no-underline hover:text-gray-500 underline text-gray-400 dark:text-gray-300 text-lg font-semibold"}>Облачная версия Битрикс24</Tab>
                                <Tab className={"uppercase data-[selected]:text-gray-900 dark:data-[selected]:text-gray-200 data-[selected]:no-underline hover:text-gray-500 underline text-gray-400 dark:text-gray-300 text-lg font-semibold"}>Коробочная версия Битрикс24</Tab>
                            </TabList>
                            <TabPanels>
                                <TabPanel className="py-6">
                                    <div className="relative overflow-x-auto dark:shadow-gray-700 shadow-md sm:rounded-md">
                                        <div id="detailed-pricing" className="w-full overflow-x-auto">
                                            <div className="overflow-hidden min-w-max">
                                                <div className="grid grid-cols-5 p-4 text-sm font-medium text-gray-900 border-t border-b border-gray-200 gap-x-16 dark:border-gray-700 dark:text-white">
                                                    <div className="flex items-center justify-center"></div>
                                                    <div className='flex items-center justify-center flex-col text-center'>
                                                        <div className='text-md font-bold'>
                                                            Базовый
                                                        </div>
                                                        <div className='w-28 text-gray-500 text-xs font-normal'>
                                                            Для небольших отделов продаж и микробизнесов до 5 человек
                                                        </div>
                                                    </div>
                                                    <div className='flex items-center justify-center flex-col text-center'>
                                                        <div className='text-md font-bold'>
                                                            Стандартный
                                                        </div>
                                                        <div className='w-28 text-gray-500 text-xs font-normal'>
                                                            Для больших отделов продаж и рабочих групп до 50 человек
                                                        </div>
                                                    </div>
                                                    <div className='flex items-center justify-center flex-col text-center'>
                                                        <div className='text-md font-bold'>
                                                            Профессиональный
                                                        </div>
                                                        <div className='w-28 text-gray-500 text-xs font-normal'>
                                                            Для компаний или департамента любого типа до 100 пользователей
                                                        </div>
                                                    </div>
                                                    <div className='flex items-center justify-center flex-col text-center'>
                                                        <div className='text-md font-bold'>
                                                            Энтерпрайз
                                                        </div>
                                                        <div className='w-28 text-gray-500 text-xs font-normal'>
                                                            Для компаний с высоким оборотом и большим количеством сотрудников
                                                        </div>
                                                    </div>
                                                    
                                                </div>
                                                <div className="hover:bg-gray-900 hover:text-gray-100 grid grid-cols-5 px-4 py-5 text-sm text-gray-700 dark:text-gray-200 border-b border-gray-200 gap-x-16 dark:border-gray-700">
                                                    <div className="">Пользователи</div>
                                                    <div className='flex items-center justify-center flex-col text-center'>
                                                        5
                                                    </div>
                                                    <div className='flex items-center justify-center flex-col text-center'>
                                                        50 
                                                    </div>
                                                    <div className='flex items-center justify-center flex-col text-center'>
                                                        100
                                                    </div>
                                                    <div className='flex items-center justify-center flex-col text-center'>
                                                        от 250
                                                    </div>
                                                </div>
                                                <div className="hover:bg-gray-900 hover:text-gray-100 grid grid-cols-5 px-4 py-5 text-sm text-gray-700 dark:text-gray-200 border-b border-gray-200 gap-x-16 dark:border-gray-700">
                                                    <div className="">Место в облаке</div>
                                                    <div className='flex items-center justify-center flex-col text-center'>
                                                        24 Гб
                                                    </div>
                                                    <div className='flex items-center justify-center flex-col text-center'>
                                                        100 Гб
                                                    </div>
                                                    <div className='flex items-center justify-center flex-col text-center'>
                                                        1024 Гб
                                                    </div>
                                                    <div className='flex items-center justify-center flex-col text-center'>
                                                        3 Тб
                                                    </div>
                                                </div>
                                                <div className="hover:bg-gray-900 hover:text-gray-100 grid grid-cols-5 px-4 py-5 text-sm text-gray-700 dark:text-gray-200 border-b border-gray-200 gap-x-16 dark:border-gray-700">
                                                    <div className="">Совместная работа</div>
                                                    <div className='flex items-center justify-center flex-row text-center'>
                                                        <svg className="w-3 h-3 text-green-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                                                        </svg>
                                                        <svg className="w-3 h-3 text-green-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                                                        </svg>
                                                    </div>
                                                    <div className='flex items-center justify-center flex-row text-center'>
                                                        <svg className="w-3 h-3 text-green-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                                                        </svg>
                                                        <svg className="w-3 h-3 text-green-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                                                        </svg>
                                                    </div>
                                                    <div className='flex items-center justify-center flex-row text-center'>
                                                        <svg className="w-3 h-3 text-green-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                                                        </svg>
                                                        <svg className="w-3 h-3 text-green-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                                                        </svg>
                                                    </div>
                                                    <div className='flex items-center justify-center flex-row text-center'>
                                                        <svg className="w-3 h-3 text-green-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                                                        </svg>
                                                        <svg className="w-3 h-3 text-green-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                                                        </svg>
                                                        <svg className="w-3 h-3 text-green-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                                                        </svg>
                                                    </div>
                                                </div>
                                                <div className="hover:bg-gray-900 hover:text-gray-100 grid grid-cols-5 px-4 py-5 text-sm text-gray-700 dark:text-gray-200 border-b border-gray-200 gap-x-16 dark:border-gray-700">
                                                    <div className="">Задачи и проекты</div>
                                                    <div className='flex items-center justify-center flex-row text-center'>
                                                        <svg className="w-3 h-3 text-green-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                                                        </svg>
                                                        <svg className="w-3 h-3 text-green-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                                                        </svg>
                                                    </div>
                                                    <div className='flex items-center justify-center flex-row text-center'>
                                                        <svg className="w-3 h-3 text-green-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                                                        </svg>
                                                        <svg className="w-3 h-3 text-green-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                                                        </svg>
                                                    </div>
                                                    <div className='flex items-center justify-center flex-row text-center'>
                                                        <svg className="w-3 h-3 text-green-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                                                        </svg>
                                                        <svg className="w-3 h-3 text-green-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                                                        </svg>
                                                        <svg className="w-3 h-3 text-green-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                                                        </svg>
                                                    </div>
                                                    <div className='flex items-center justify-center flex-row text-center'>
                                                        <svg className="w-3 h-3 text-green-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                                                        </svg>
                                                        <svg className="w-3 h-3 text-green-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                                                        </svg>
                                                        <svg className="w-3 h-3 text-green-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                                                        </svg>
                                                    </div>
                                                </div>
                                                <div className="hover:bg-gray-900 hover:text-gray-100 grid grid-cols-5 px-4 py-5 text-sm text-gray-700 dark:text-gray-200 border-b border-gray-200 gap-x-16 dark:border-gray-700">
                                                    <div className="">CRM</div>
                                                    <div className='flex items-center justify-center flex-row text-center'>
                                                        <svg className="w-3 h-3 text-green-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                                                        </svg>
                                                        <svg className="w-3 h-3 text-green-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                                                        </svg>
                                                    </div>
                                                    <div className='flex items-center justify-center flex-row text-center'>
                                                        <svg className="w-3 h-3 text-green-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                                                        </svg>
                                                        <svg className="w-3 h-3 text-green-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                                                        </svg>
                                                    </div>
                                                    <div className='flex items-center justify-center flex-row text-center'>
                                                        <svg className="w-3 h-3 text-green-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                                                        </svg>
                                                        <svg className="w-3 h-3 text-green-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                                                        </svg>
                                                        <svg className="w-3 h-3 text-green-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                                                        </svg>
                                                    </div>
                                                    <div className='flex items-center justify-center flex-row text-center'>
                                                        <svg className="w-3 h-3 text-green-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                                                        </svg>
                                                        <svg className="w-3 h-3 text-green-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                                                        </svg>
                                                        <svg className="w-3 h-3 text-green-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                                                        </svg>
                                                    </div>
                                                </div>
                                                <div className="hover:bg-gray-900 hover:text-gray-100 grid grid-cols-5 px-4 py-5 text-sm text-gray-700 dark:text-gray-200 border-b border-gray-200 gap-x-16 dark:border-gray-700">
                                                    <div className="">Сайты</div>
                                                    <div className='flex items-center justify-center flex-row text-center'>
                                                        <svg className="w-3 h-3 text-green-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                                                        </svg>
                                                        <svg className="w-3 h-3 text-green-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                                                        </svg>
                                                    </div>
                                                    <div className='flex items-center justify-center flex-row text-center'>
                                                        <svg className="w-3 h-3 text-green-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                                                        </svg>
                                                        <svg className="w-3 h-3 text-green-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                                                        </svg>
                                                    </div>
                                                    <div className='flex items-center justify-center flex-row text-center'>
                                                        <svg className="w-3 h-3 text-green-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                                                        </svg>
                                                        <svg className="w-3 h-3 text-green-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                                                        </svg>
                                                        <svg className="w-3 h-3 text-green-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                                                        </svg>
                                                    </div>
                                                    <div className='flex items-center justify-center flex-row text-center'>
                                                        <svg className="w-3 h-3 text-green-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                                                        </svg>
                                                        <svg className="w-3 h-3 text-green-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                                                        </svg>
                                                        <svg className="w-3 h-3 text-green-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                                                        </svg>
                                                    </div>
                                                </div>
                                                <div className="hover:bg-gray-900 hover:text-gray-100 grid grid-cols-5 px-4 py-5 text-sm text-gray-700 dark:text-gray-200 border-b border-gray-200 gap-x-16 dark:border-gray-700">
                                                    <div className="">Контакт-центр</div>
                                                    <div className='flex items-center justify-center flex-row text-center'>
                                                        <svg className="w-3 h-3 text-green-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                                                        </svg>
                                                        <svg className="w-3 h-3 text-green-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                                                        </svg>
                                                    </div>
                                                    <div className='flex items-center justify-center flex-row text-center'>
                                                        <svg className="w-3 h-3 text-green-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                                                        </svg>
                                                        <svg className="w-3 h-3 text-green-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                                                        </svg>
                                                    </div>
                                                    <div className='flex items-center justify-center flex-row text-center'>
                                                        <svg className="w-3 h-3 text-green-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                                                        </svg>
                                                        <svg className="w-3 h-3 text-green-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                                                        </svg>
                                                        <svg className="w-3 h-3 text-green-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                                                        </svg>
                                                    </div>
                                                    <div className='flex items-center justify-center flex-row text-center'>
                                                        <svg className="w-3 h-3 text-green-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                                                        </svg>
                                                        <svg className="w-3 h-3 text-green-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                                                        </svg>
                                                        <svg className="w-3 h-3 text-green-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                                                        </svg>
                                                    </div>
                                                </div>
                                                <div className="hover:bg-gray-900 hover:text-gray-100 grid grid-cols-5 px-4 py-5 text-sm text-gray-700 dark:text-gray-200 border-b border-gray-200 gap-x-16 dark:border-gray-700">
                                                    <div className="">Интернет-магазин</div>
                                                    <div className='flex items-center justify-center flex-row text-center'>
                                                        <svg className="w-3 h-3 text-green-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                                                        </svg>
                                                        <svg className="w-3 h-3 text-green-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                                                        </svg>
                                                    </div>
                                                    <div className='flex items-center justify-center flex-row text-center'>
                                                        <svg className="w-3 h-3 text-green-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                                                        </svg>
                                                        <svg className="w-3 h-3 text-green-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                                                        </svg>
                                                    </div>
                                                    <div className='flex items-center justify-center flex-row text-center'>
                                                        <svg className="w-3 h-3 text-green-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                                                        </svg>
                                                        <svg className="w-3 h-3 text-green-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                                                        </svg>
                                                        <svg className="w-3 h-3 text-green-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                                                        </svg>
                                                    </div>
                                                    <div className='flex items-center justify-center flex-row text-center'>
                                                        <svg className="w-3 h-3 text-green-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                                                        </svg>
                                                        <svg className="w-3 h-3 text-green-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                                                        </svg>
                                                        <svg className="w-3 h-3 text-green-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                                                        </svg>
                                                    </div>
                                                </div>
                                                <div className="hover:bg-gray-900 hover:text-gray-100 grid grid-cols-5 px-4 py-5 text-sm text-gray-700 dark:text-gray-200 border-b border-gray-200 gap-x-16 dark:border-gray-700">
                                                    <div className="">Маркетинг</div>
                                                    <div className='flex items-center justify-center flex-row text-center'>
                                                        <svg className="w-3 h-3 text-red-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                                                        </svg>
                                                    </div>
                                                    <div className='flex items-center justify-center flex-row text-center'>
                                                        <svg className="w-3 h-3 text-green-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                                                        </svg>
                                                        <svg className="w-3 h-3 text-green-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                                                        </svg>
                                                    </div>
                                                    <div className='flex items-center justify-center flex-row text-center'>
                                                        <svg className="w-3 h-3 text-green-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                                                        </svg>
                                                        <svg className="w-3 h-3 text-green-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                                                        </svg>
                                                        <svg className="w-3 h-3 text-green-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                                                        </svg>
                                                    </div>
                                                    <div className='flex items-center justify-center flex-row text-center'>
                                                        <svg className="w-3 h-3 text-green-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                                                        </svg>
                                                        <svg className="w-3 h-3 text-green-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                                                        </svg>
                                                        <svg className="w-3 h-3 text-green-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                                                        </svg>
                                                    </div>
                                                </div>
                                                <div className="hover:bg-gray-900 hover:text-gray-100 grid grid-cols-5 px-4 py-5 text-sm text-gray-700 dark:text-gray-200 border-b border-gray-200 gap-x-16 dark:border-gray-700">
                                                    <div className="">Документы онлайн</div>
                                                    <div className='flex items-center justify-center flex-row text-center'>
                                                        <svg className="w-3 h-3 text-red-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                                                        </svg>
                                                    </div>
                                                    <div className='flex items-center justify-center flex-row text-center'>
                                                        <svg className="w-3 h-3 text-green-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                                                        </svg>
                                                        <svg className="w-3 h-3 text-green-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                                                        </svg>
                                                    </div>
                                                    <div className='flex items-center justify-center flex-row text-center'>
                                                        <svg className="w-3 h-3 text-green-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                                                        </svg>
                                                        <svg className="w-3 h-3 text-green-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                                                        </svg>
                                                        <svg className="w-3 h-3 text-green-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                                                        </svg>
                                                    </div>
                                                    <div className='flex items-center justify-center flex-row text-center'>
                                                        <svg className="w-3 h-3 text-green-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                                                        </svg>
                                                        <svg className="w-3 h-3 text-green-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                                                        </svg>
                                                        <svg className="w-3 h-3 text-green-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                                                        </svg>
                                                    </div>
                                                </div>
                                                <div className="hover:bg-gray-900 hover:text-gray-100 grid grid-cols-5 px-4 py-5 text-sm text-gray-700 dark:text-gray-200 border-b border-gray-200 gap-x-16 dark:border-gray-700">
                                                    <div className="">Сквозная аналитика</div>
                                                    <div className='flex items-center justify-center flex-row text-center'>
                                                        <svg className="w-3 h-3 text-red-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                                                        </svg>
                                                    </div>
                                                    <div className='flex items-center justify-center flex-row text-center'>
                                                        <svg className="w-3 h-3 text-red-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                                                        </svg>
                                                    </div>
                                                    <div className='flex items-center justify-center flex-row text-center'>
                                                        <svg className="w-3 h-3 text-green-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                                                        </svg>
                                                        <svg className="w-3 h-3 text-green-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                                                        </svg>
                                                    </div>
                                                    <div className='flex items-center justify-center flex-row text-center'>
                                                        <svg className="w-3 h-3 text-green-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                                                        </svg>
                                                        <svg className="w-3 h-3 text-green-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                                                        </svg>
                                                        <svg className="w-3 h-3 text-green-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                                                        </svg>
                                                    </div>
                                                </div>
                                                <div className="hover:bg-gray-900 hover:text-gray-100 grid grid-cols-5 px-4 py-5 text-sm text-gray-700 dark:text-gray-200 border-b border-gray-200 gap-x-16 dark:border-gray-700">
                                                    <div className="w-32">Автоматизация бизнес-процессов</div>
                                                    <div className='flex items-center justify-center flex-row text-center'>
                                                        <svg className="w-3 h-3 text-red-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                                                        </svg>
                                                    </div>
                                                    <div className='flex items-center justify-center flex-row text-center'>
                                                        <svg className="w-3 h-3 text-red-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                                                        </svg>
                                                    </div>
                                                    <div className='flex items-center justify-center flex-row text-center'>
                                                        <svg className="w-3 h-3 text-green-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                                                        </svg>
                                                        <svg className="w-3 h-3 text-green-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                                                        </svg>
                                                        <svg className="w-3 h-3 text-green-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                                                        </svg>
                                                    </div>
                                                    <div className='flex items-center justify-center flex-row text-center'>
                                                        <svg className="w-3 h-3 text-green-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                                                        </svg>
                                                        <svg className="w-3 h-3 text-green-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                                                        </svg>
                                                        <svg className="w-3 h-3 text-green-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                                                        </svg>
                                                    </div>
                                                </div>
                                                <div className="hover:bg-gray-900 hover:text-gray-100 grid grid-cols-5 px-4 py-5 text-sm text-gray-700 dark:text-gray-200 border-b border-gray-200 gap-x-16 dark:border-gray-700">
                                                    <div className="">Администрирование</div>
                                                    <div className='flex items-center justify-center flex-row text-center'>
                                                        <svg className="w-3 h-3 text-red-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                                                        </svg>
                                                    </div>
                                                    <div className='flex items-center justify-center flex-row text-center'>
                                                        <svg className="w-3 h-3 text-green-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                                                        </svg>
                                                        <svg className="w-3 h-3 text-green-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                                                        </svg>
                                                    </div>
                                                    <div className='flex items-center justify-center flex-row text-center'>
                                                        <svg className="w-3 h-3 text-green-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                                                        </svg>
                                                        <svg className="w-3 h-3 text-green-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                                                        </svg>
                                                    </div>
                                                    <div className='flex items-center justify-center flex-row text-center'>
                                                        <svg className="w-3 h-3 text-green-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                                                        </svg>
                                                        <svg className="w-3 h-3 text-green-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                                                        </svg>
                                                        <svg className="w-3 h-3 text-green-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                                                        </svg>
                                                    </div>
                                                </div>
                                                <div className="hover:bg-gray-900 hover:text-gray-100 grid grid-cols-5 px-4 py-5 text-sm text-gray-700 dark:text-gray-200 border-b border-gray-200 gap-x-16 dark:border-gray-700">
                                                    <div className="w-32 flex items-center">Цена</div>
                                                    <div className='w-32 flex items-center justify-center flex-row text-center'>
                                                        за месяц при покупке на год
                                                    </div>
                                                    <div className='w-32 flex items-center justify-center flex-row text-center'>
                                                        за месяц при покупке на год
                                                    </div>
                                                    <div className='w-32 flex items-center justify-center flex-row text-center'>
                                                        за месяц при покупке на год
                                                    </div>
                                                    <div className='w-32 flex items-center justify-center flex-row text-center'>
                                                        за месяц при покупке на год
                                                    </div>
                                                </div>
                                                <div className="grid grid-cols-5 px-4 py-5 text-gray-700 dark:text-gray-200 border-b border-gray-200 gap-x-16 dark:border-gray-700">
                                                    <div className="text-gray-500 dark:text-gray-400"></div>
                                                    <div className='w-32 flex items-center justify-center flex-col text-center'>
                                                        <div className='font-bold text-lg mb-4'>1 990 ₽</div>
                                                        <ShortForm></ShortForm>
                                                    </div>
                                                    <div className='w-32 flex items-center justify-center flex-col text-center'>
                                                        <div className='font-bold text-lg mb-4'>5 590 ₽</div>
                                                        <ShortForm></ShortForm>
                                                    </div>
                                                    <div className='w-32 flex items-center justify-center flex-col text-center'>
                                                        <div className='font-bold text-lg mb-4'>11 190 ₽</div>
                                                        <ShortForm></ShortForm>
                                                    </div>
                                                    <div className='w-32 flex items-center justify-center flex-col text-center'>
                                                        <div className='font-bold text-lg mb-4'>от 27 190 ₽</div>
                                                        <ShortForm></ShortForm>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </TabPanel>
                                <TabPanel className="py-6">
                                    <div className="relative overflow-x-auto shadow-md dark:shadow-gray-700 sm:rounded-md">
                                        <div id="detailed-pricing" className="w-full overflow-x-auto">
                                            <div className="overflow-hidden min-w-max">
                                                <div className="grid grid-cols-4 p-4 text-sm font-medium text-gray-900 border-t border-b border-gray-200 gap-x-16 dark:border-gray-700 dark:text-white">
                                                    <div className="flex items-center justify-center"></div>
                                                    <div className='flex items-center justify-center flex-col text-center'>
                                                        <div className='text-md font-bold'>
                                                            Интернет-магазин + CRM
                                                        </div>
                                                        <div className='w-32 text-gray-500 text-xs font-normal'>
                                                            Для работы отдела продаж до 12 человек в eCommerce-платформе
                                                        </div>
                                                    </div>
                                                    <div className='flex items-center justify-center flex-col text-center'>
                                                        <div className='text-md font-bold'>
                                                            Корпоративный портал
                                                        </div>
                                                        <div className='w-32 text-gray-500 text-xs font-normal'>
                                                            Для компаний или департамента любого типа и размера
                                                        </div>
                                                    </div>
                                                    <div className='flex items-center justify-center flex-col text-center'>
                                                        <div className='text-md font-bold'>
                                                            Энтерпрайз
                                                        </div>
                                                        <div className='w-32 text-gray-500 text-xs font-normal'>
                                                            Для компаний с высоким оборотом и большим количеством сотрудников
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="hover:bg-gray-900 hover:text-gray-100 grid grid-cols-4 px-4 py-5 text-sm text-gray-700 dark:text-gray-200 border-b border-gray-200 gap-x-16 dark:border-gray-700">
                                                    <div className="">Пользователи</div>
                                                    <div className='flex items-center justify-center flex-col text-center'>
                                                        12
                                                    </div>
                                                    <div className='flex items-center justify-center flex-col text-center'>
                                                        50-500
                                                    </div>
                                                    <div className='flex items-center justify-center flex-col text-center'>
                                                        от 1000
                                                    </div>
                                                </div>
                                                <div className="hover:bg-gray-900 hover:text-gray-100 grid grid-cols-4 px-4 py-5 text-sm text-gray-700 dark:text-gray-200 border-b border-gray-200 gap-x-16 dark:border-gray-700">
                                                    <div className="">Экстранет</div>
                                                    <div className='flex items-center justify-center flex-row text-center'>
                                                        <svg className="w-3 h-3 text-green-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                                                        </svg>
                                                        <svg className="w-3 h-3 text-green-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                                                        </svg>
                                                        <svg className="w-3 h-3 text-green-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                                                        </svg>
                                                    </div>
                                                    <div className='flex items-center justify-center flex-row text-center'>
                                                        <svg className="w-3 h-3 text-green-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                                                        </svg>
                                                    </div>
                                                    <div className='flex items-center justify-center flex-row text-center'>
                                                        <svg className="w-3 h-3 text-green-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                                                        </svg>
                                                    </div>
                                                </div>
                                                <div className="hover:bg-gray-900 hover:text-gray-100 grid grid-cols-4 px-4 py-5 text-sm text-gray-700 dark:text-gray-200 border-b border-gray-200 gap-x-16 dark:border-gray-700">
                                                    <div className="">Многодепартаментность</div>
                                                    <div className='flex items-center justify-center flex-row text-center'>
                                                        <svg className="w-3 h-3 text-red-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                                                        </svg>
                                                    </div>
                                                    <div className='flex items-center justify-center flex-row text-center'>
                                                        <svg className="w-3 h-3 text-red-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                                                        </svg>
                                                    </div>
                                                    <div className='flex items-center justify-center flex-row text-center'>
                                                        <svg className="w-3 h-3 text-green-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                                                        </svg>
                                                    </div>
                                                </div>
                                                <div className="hover:bg-gray-900 hover:text-gray-100 grid grid-cols-4 px-4 py-5 text-sm text-gray-700 dark:text-gray-200 border-b border-gray-200 gap-x-16 dark:border-gray-700">
                                                    <div className="">Веб-кластер</div>
                                                    <div className='flex items-center justify-center flex-row text-center'>
                                                        <svg className="w-3 h-3 text-red-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                                                        </svg>
                                                    </div>
                                                    <div className='flex items-center justify-center flex-row text-center'>
                                                        <svg className="w-3 h-3 text-red-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                                                        </svg>
                                                    </div>
                                                    <div className='flex items-center justify-center flex-row text-center'>
                                                        <svg className="w-3 h-3 text-green-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                                                        </svg>
                                                    </div>
                                                </div>
                                                <div className="hover:bg-gray-900 hover:text-gray-100 grid grid-cols-4 px-4 py-5 text-sm text-gray-700 dark:text-gray-200 border-b border-gray-200 gap-x-16 dark:border-gray-700">
                                                    <div className="">eCommerce-платформа</div>
                                                    <div className='flex items-center justify-center flex-row text-center'>
                                                        <svg className="w-3 h-3 text-green-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                                                        </svg>
                                                    </div>
                                                    <div className='flex items-center justify-center flex-row text-center'>
                                                        <svg className="w-3 h-3 text-green-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                                                        </svg>
                                                    </div>
                                                    <div className='flex items-center justify-center flex-row text-center'>
                                                        <svg className="w-3 h-3 text-green-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                                                        </svg>
                                                    </div>
                                                </div>
                                                <div className="hover:bg-gray-900 hover:text-gray-100 grid grid-cols-4 px-4 py-5 text-sm text-gray-700 dark:text-gray-200 border-b border-gray-200 gap-x-16 dark:border-gray-700">
                                                    <div className="">HRM</div>
                                                    <div className='flex items-center justify-center flex-row text-center'>
                                                        <svg className="w-3 h-3 text-green-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                                                        </svg>
                                                    </div>
                                                    <div className='flex items-center justify-center flex-row text-center'>
                                                        <svg className="w-3 h-3 text-green-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                                                        </svg>
                                                    </div>
                                                    <div className='flex items-center justify-center flex-row text-center'>
                                                        <svg className="w-3 h-3 text-green-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                                                        </svg>
                                                    </div>
                                                </div>
                                                <div className="hover:bg-gray-900 hover:text-gray-100 grid grid-cols-4 px-4 py-5 text-sm text-gray-700 dark:text-gray-200 border-b border-gray-200 gap-x-16 dark:border-gray-700">
                                                    <div className="">Цена</div>
                                                    <div className='flex items-center justify-center flex-row text-center'>
                                                        за год
                                                    </div>
                                                    <div className='flex items-center justify-center flex-row text-center'>
                                                        за год
                                                    </div>
                                                    <div className='flex items-center justify-center flex-row text-center'>
                                                        за год
                                                    </div>
                                                </div>
                                                <div className="grid grid-cols-4 px-4 py-5 text-gray-700 border-b dark:text-gray-200 border-gray-200 gap-x-16 dark:border-gray-700">
                                                    <div className="text-gray-500 dark:text-gray-400"></div>
                                                    <div className='flex items-center justify-center flex-col text-center'>
                                                        <div className='font-bold text-lg mb-4'>109 000 ₽</div>
                                                        <ShortForm></ShortForm>
                                                    </div>
                                                    <div className='lex items-center justify-center flex-col text-center'>
                                                        <div className='font-bold text-lg mb-4'>от 159 000 ₽</div>
                                                        <ShortForm></ShortForm>
                                                    </div>
                                                    <div className='flex items-center justify-center flex-col text-center'>
                                                        <div className='font-bold text-lg mb-4'>от 1 299 000 ₽</div>
                                                        <ShortForm></ShortForm>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </TabPanel>
                            </TabPanels>
                        </TabGroup>
                    </div>
                    <div className="xl:col-span-3 mt-5 text-2xl font-bold xl:row-span-2 pb-4 xl:pb-0">
                        <h2 className='my-8'>Стоимость внедрения Битрикс24</h2>
                        <ul className='flex flex-col gap-y-4'>
                            <li className='hover:animate-jump hover:animate-once hover:animate-ease-out w-full'>
                                <a href="" className='flex justify-between items-center bg-gray-200 dark:text-gray-900 sm:items-start lg:flex-row p-8 w-full dark:bg-gray-100 rounded-md'>
                                    <div className='flex-row flex justify-start'>
                                        <div className='mr-8'>
                                            <svg className="w-14" xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 56 56" fill="currentColor">
                                                <path d="M15.1667 44.3334C14.1821 44.3334 13.353 43.9959 12.6794 43.3208C12.0043 42.6472 11.6667 41.8181 11.6667 40.8334V34.2814C11.6667 33.2983 12.0043 32.4692 12.6794 31.7941C13.353 31.119 14.1821 30.7814 15.1667 30.7814C16.1514 30.7814 16.9805 31.119 17.6541 31.7941C18.3276 32.4692 18.6652 33.2983 18.6667 34.2814V40.8334C18.6667 41.8181 18.3292 42.6472 17.6541 43.3208C16.9805 43.9959 16.1514 44.3334 15.1667 44.3334ZM28.0001 44.3334C27.0154 44.3334 26.1863 43.9959 25.5127 43.3208C24.8376 42.6472 24.5001 41.8181 24.5001 40.8334V15.1667C24.5001 14.1821 24.8376 13.353 25.5127 12.6794C26.1863 12.0043 27.0154 11.6667 28.0001 11.6667C28.9847 11.6667 29.8139 12.0043 30.4874 12.6794C31.161 13.3545 31.4985 14.1836 31.5001 15.1667V40.8334C31.5001 41.8181 31.1625 42.6472 30.4874 43.3208C29.8139 43.9959 28.9847 44.3334 28.0001 44.3334ZM40.8334 44.3334C39.8487 44.3334 39.0196 43.9959 38.3461 43.3208C37.671 42.6472 37.3334 41.8181 37.3334 40.8334V26.3854C37.3334 25.4007 37.671 24.5709 38.3461 23.8957C39.0196 23.2222 39.8487 22.8854 40.8334 22.8854C41.8181 22.8854 42.6472 23.2222 43.3208 23.8957C43.9959 24.5709 44.3334 25.4007 44.3334 26.3854V40.8334C44.3334 41.8181 43.9959 42.6472 43.3208 43.3208C42.6472 43.9959 41.8181 44.3334 40.8334 44.3334Z" fill="black"/>
                                            </svg>
                                        </div>
                                    </div>
                                    <div className='flex xl:flex-row flex-col w-full justify-between'>
                                        <div>
                                            <div className='text-lg font-bold'>
                                                Пакетное внедрение
                                            </div>
                                            <div className='text-base font-normal'>
                                                Готовый набор настроек для решения типовых задач бизнеса.
                                            </div>
                                        </div>
                                        <div className='flex mt-4 xl:mt-0 flex-row items-center justify-between'>
                                            <div className='flex flex-row items-top mr-4 flex-nowrap'>
                                                <span className='text-xs font-semibold text-gray-600 mr-1 leading-5'>
                                                    от
                                                </span>
                                                <div className='text-2xl font-semibold'>
                                                    39 000 ₽
                                                </div>
                                            </div>
                                            <div>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 42 42" fill="currentColor" className="size-7 text-gray-600 dark:text-gray-900">
                                                    <path clipRule="evenodd" d="M2.625 21C2.625 20.6519 2.76328 20.3181 3.00942 20.0719C3.25556 19.8258 3.5894 19.6875 3.9375 19.6875H34.8941L26.6332 11.4292C26.3868 11.1828 26.2483 10.8485 26.2483 10.5C26.2483 10.1515 26.3868 9.8172 26.6332 9.57074C26.8797 9.32429 27.214 9.18584 27.5625 9.18584C27.911 9.18584 28.2453 9.32429 28.4918 9.57074L38.9918 20.0707C39.114 20.1927 39.211 20.3375 39.2771 20.497C39.3433 20.6564 39.3773 20.8274 39.3773 21C39.3773 21.1726 39.3433 21.3436 39.2771 21.503C39.211 21.6625 39.114 21.8073 38.9918 21.9292L28.4918 32.4292C28.2453 32.6757 27.911 32.8142 27.5625 32.8142C27.214 32.8142 26.8797 32.6757 26.6332 32.4292C26.3868 32.1828 26.2483 31.8485 26.2483 31.5C26.2483 31.1515 26.3868 30.8172 26.6332 30.5707L34.8941 22.3125H3.9375C3.5894 22.3125 3.25556 22.1742 3.00942 21.9281C2.76328 21.6819 2.625 21.3481 2.625 21Z"/>
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                    
                                </a>
                            </li>
                            <li className='hover:animate-jump hover:animate-once hover:animate-ease-out w-full'>
                                <a href="" className='flex justify-between items-center bg-gray-200 dark:text-gray-900 sm:items-start lg:flex-row p-8 w-full dark:bg-gray-100 rounded-md'>
                                    <div className='flex-row flex justify-start'>
                                        <div className='mr-8'>
                                            <svg className="w-14" xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 56 56" fill="none">
                                                <path d="M23.6484 49L22.8037 42.252C22.0586 42.0264 21.2536 41.6733 20.3887 41.1927C19.5223 40.7104 18.7857 40.194 18.1791 39.6433L11.9537 42.2917L7.60205 34.7083L12.9827 30.6507C12.9127 30.2307 12.8559 29.7967 12.8124 29.3487C12.7657 28.9007 12.7424 28.4659 12.7424 28.0443C12.7424 27.6523 12.7657 27.2401 12.8124 26.8077C12.8559 26.3752 12.9127 25.8883 12.9827 25.347L7.60205 21.294L11.9537 13.7993L18.1324 16.4033C18.8293 15.8231 19.5837 15.2997 20.3957 14.833C21.2046 14.3663 21.9925 14.0054 22.7594 13.7503L23.6461 7H32.354L33.1964 13.7947C34.0908 14.1089 34.8811 14.469 35.5671 14.875C36.2531 15.281 36.9601 15.7897 37.6881 16.401L44.0464 13.7993L48.3981 21.2917L42.8401 25.4823C42.9676 25.9646 43.0392 26.4071 43.0547 26.81C43.0703 27.2129 43.0781 27.6096 43.0781 28C43.0781 28.3624 43.0625 28.7443 43.0314 29.1457C43.0018 29.5486 42.9334 30.0354 42.8261 30.6063L48.2954 34.7083L43.9437 42.2917L37.6881 39.599C36.9616 40.2103 36.2305 40.7338 35.4947 41.1693C34.7589 41.6049 33.9928 41.951 33.1964 42.2077L32.354 49H23.6484ZM25.6667 46.6667H30.2307L31.0917 40.348C32.2677 40.0369 33.3255 39.6099 34.265 39.067C35.2077 38.5241 36.1659 37.7806 37.1397 36.8363L42.9614 39.3167L45.2807 35.35L40.173 31.514C40.3675 30.8498 40.4966 30.2384 40.5604 29.68C40.6226 29.1231 40.6537 28.5631 40.6537 28C40.6537 27.4089 40.6226 26.8489 40.5604 26.32C40.4982 25.7911 40.369 25.2101 40.173 24.577L45.3694 20.65L43.0501 16.6833L37.0954 19.18C36.3892 18.4038 35.4613 17.6766 34.3117 16.9983C33.1606 16.3217 32.0717 15.8729 31.0451 15.652L30.3334 9.33333H25.6807L24.9527 15.6077C23.7767 15.8581 22.6956 16.2626 21.7094 16.821C20.7247 17.3779 19.7447 18.144 18.7694 19.1193L12.9501 16.6833L10.6307 20.65L15.6917 24.43C15.4973 24.9527 15.3612 25.5204 15.2834 26.1333C15.2056 26.7462 15.1667 27.384 15.1667 28.0467C15.1667 28.6378 15.2056 29.225 15.2834 29.8083C15.3612 30.3917 15.4825 30.9594 15.6474 31.5117L10.6307 35.35L12.9501 39.3167L18.725 36.8667C19.6413 37.7907 20.5917 38.5319 21.5764 39.0903C22.5626 39.6488 23.6733 40.0836 24.9084 40.3947L25.6667 46.6667ZM27.9371 33.8333C29.5642 33.8333 30.9432 33.2679 32.0741 32.137C33.2049 31.0061 33.7704 29.6271 33.7704 28C33.7704 26.3729 33.2049 24.9939 32.0741 23.863C30.9432 22.7321 29.5642 22.1667 27.9371 22.1667C26.3006 22.1667 24.9193 22.7321 23.793 23.863C22.6668 24.9939 22.1037 26.3729 22.1037 28C22.1037 29.6271 22.6668 31.0061 23.793 32.137C24.9193 33.2679 26.3006 33.8333 27.9371 33.8333Z" fill="black"/>
                                            </svg>
                                        </div>
                                    </div>
                                    <div className='flex xl:flex-row flex-col w-full justify-between'>
                                        <div>
                                            <div className='text-lg font-bold'>
                                                Сопровождение и поддержка
                                            </div>
                                            <div className='text-base font-normal'>
                                                Не только техническое обслуживание, но и забота о пользователях
                                            </div>
                                        </div>
                                        <div className='flex mt-4 xl:mt-0 flex-row items-center justify-between'>
                                            <div className='flex flex-row items-top mr-4 flex-nowrap'>
                                                <span className='text-xs font-semibold text-gray-600 mr-1 leading-5'>
                                                    от
                                                </span>
                                                <div className='text-2xl font-semibold'>
                                                    5 000 ₽
                                                </div>
                                            </div>
                                            <div>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 42 42" fill="currentColor" className="size-7 text-gray-600 dark:text-gray-900">
                                                    <path clipRule="evenodd" d="M2.625 21C2.625 20.6519 2.76328 20.3181 3.00942 20.0719C3.25556 19.8258 3.5894 19.6875 3.9375 19.6875H34.8941L26.6332 11.4292C26.3868 11.1828 26.2483 10.8485 26.2483 10.5C26.2483 10.1515 26.3868 9.8172 26.6332 9.57074C26.8797 9.32429 27.214 9.18584 27.5625 9.18584C27.911 9.18584 28.2453 9.32429 28.4918 9.57074L38.9918 20.0707C39.114 20.1927 39.211 20.3375 39.2771 20.497C39.3433 20.6564 39.3773 20.8274 39.3773 21C39.3773 21.1726 39.3433 21.3436 39.2771 21.503C39.211 21.6625 39.114 21.8073 38.9918 21.9292L28.4918 32.4292C28.2453 32.6757 27.911 32.8142 27.5625 32.8142C27.214 32.8142 26.8797 32.6757 26.6332 32.4292C26.3868 32.1828 26.2483 31.8485 26.2483 31.5C26.2483 31.1515 26.3868 30.8172 26.6332 30.5707L34.8941 22.3125H3.9375C3.5894 22.3125 3.25556 22.1742 3.00942 21.9281C2.76328 21.6819 2.625 21.3481 2.625 21Z"/>
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                    
                                </a>
                            </li>
                            <li className='hover:animate-jump hover:animate-once hover:animate-ease-out w-full'>
                                <a href="" className='flex justify-between items-center bg-gray-200 dark:text-gray-900 sm:items-start lg:flex-row p-8 w-full dark:bg-gray-100 rounded-md'>
                                    <div className='flex-row flex justify-start'>
                                        <div className='mr-8'>
                                            <svg className="w-14" xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 56 56" fill="none">
                                                <path d="M20.8926 46.6669H11.6666C11.0117 46.6669 10.4595 46.4413 10.0099 45.9902C9.55881 45.5422 9.33325 44.99 9.33325 44.3336V35.1076C10.6617 34.7187 11.7716 33.9837 12.6629 32.9026C13.5543 31.8214 13.9999 30.5762 13.9999 29.1669C13.9999 27.7576 13.5543 26.5123 12.6629 25.4312C11.7716 24.3501 10.6617 23.6151 9.33325 23.2262V14.0002C9.33325 13.3453 9.55881 12.7931 10.0099 12.3436C10.4595 11.8924 11.0117 11.6669 11.6666 11.6669H20.9999C21.4199 10.3322 22.1557 9.26589 23.2073 8.46789C24.2604 7.66833 25.469 7.26855 26.8333 7.26855C28.1975 7.26855 29.4061 7.66833 30.4593 8.46789C31.5124 9.26744 32.2481 10.3338 32.6666 11.6669H41.9999C42.6548 11.6669 43.207 11.8924 43.6566 12.3436C44.1077 12.7931 44.3333 13.3453 44.3333 14.0002V23.3336C45.6679 23.7536 46.7343 24.4893 47.5323 25.5409C48.3318 26.594 48.7316 27.8027 48.7316 29.1669C48.7316 30.5311 48.3318 31.7398 47.5323 32.7929C46.7327 33.846 45.6664 34.5818 44.3333 35.0002V44.3336C44.3333 44.9884 44.1077 45.5407 43.6566 45.9902C43.207 46.4413 42.6548 46.6669 41.9999 46.6669H32.7739C32.3555 45.2607 31.601 44.1313 30.5106 43.2789C29.4201 42.4264 28.1944 42.0002 26.8333 42.0002C25.4721 42.0002 24.2464 42.4264 23.1559 43.2789C22.0655 44.1313 21.311 45.2607 20.8926 46.6669ZM11.6666 44.3336H19.3619C20.0261 42.7842 21.0528 41.6191 22.4419 40.8382C23.8295 40.0573 25.2933 39.6669 26.8333 39.6669C28.3733 39.6669 29.8378 40.0573 31.2269 40.8382C32.616 41.6191 33.6419 42.7842 34.3046 44.3336H41.9999V32.9376H43.0779C44.1964 32.7571 45.0286 32.2959 45.5746 31.5539C46.1237 30.8119 46.3983 30.0162 46.3983 29.1669C46.3983 28.3176 46.1245 27.5219 45.5769 26.7799C45.0294 26.0379 44.1956 25.5774 43.0756 25.3986H41.9999V14.0002H30.6039V12.9246C30.4235 11.8046 29.9623 10.9708 29.2203 10.4232C28.4783 9.87722 27.6826 9.60422 26.8333 9.60422C25.9839 9.60422 25.1883 9.87722 24.4463 10.4232C23.7043 10.9692 23.2438 11.803 23.0649 12.9246V14.0002H11.6666V21.6466C13.1086 22.3341 14.2473 23.3608 15.0826 24.7266C15.9164 26.0877 16.3333 27.5678 16.3333 29.1669C16.3333 30.7551 15.9156 32.2313 15.0803 33.5956C14.2465 34.9598 13.1086 35.9903 11.6666 36.6872V44.3336Z" fill="black"/>
                                            </svg>
                                        </div>
                                    </div>
                                    <div className='flex xl:flex-row flex-col w-full justify-between'>
                                        <div>
                                            <div className='text-lg font-bold'>
                                                Проектное внедрение
                                            </div>
                                            <div className='text-base font-normal'>
                                                Внедрение внутренних порталов и CRM Битрикс24 в крупных организациях.
                                            </div>
                                        </div>
                                        <div className='flex mt-4 xl:mt-0 flex-row items-center justify-between'>
                                            <div className='flex flex-row items-top mr-4 flex-nowrap'>
                                                <span className='text-xs font-semibold text-gray-600 mr-1 leading-5'>
                                                    от
                                                </span>
                                                <div className='text-2xl font-semibold'>
                                                    800 000 ₽
                                                </div>
                                            </div>
                                            <div>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 42 42" fill="currentColor" className="size-7 text-gray-600 dark:text-gray-900">
                                                    <path clipRule="evenodd" d="M2.625 21C2.625 20.6519 2.76328 20.3181 3.00942 20.0719C3.25556 19.8258 3.5894 19.6875 3.9375 19.6875H34.8941L26.6332 11.4292C26.3868 11.1828 26.2483 10.8485 26.2483 10.5C26.2483 10.1515 26.3868 9.8172 26.6332 9.57074C26.8797 9.32429 27.214 9.18584 27.5625 9.18584C27.911 9.18584 28.2453 9.32429 28.4918 9.57074L38.9918 20.0707C39.114 20.1927 39.211 20.3375 39.2771 20.497C39.3433 20.6564 39.3773 20.8274 39.3773 21C39.3773 21.1726 39.3433 21.3436 39.2771 21.503C39.211 21.6625 39.114 21.8073 38.9918 21.9292L28.4918 32.4292C28.2453 32.6757 27.911 32.8142 27.5625 32.8142C27.214 32.8142 26.8797 32.6757 26.6332 32.4292C26.3868 32.1828 26.2483 31.8485 26.2483 31.5C26.2483 31.1515 26.3868 30.8172 26.6332 30.5707L34.8941 22.3125H3.9375C3.5894 22.3125 3.25556 22.1742 3.00942 21.9281C2.76328 21.6819 2.625 21.3481 2.625 21Z"/>
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                    
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="xl:col-span-3 mt-5 text-2xl font-bold xl:row-span-2 pb-4 xl:pb-0">
                        <h2 className='my-8'>Преимущества CRM Битрикс перед другими системами</h2>
                        <div className="w-full">
                            <div className='slider-container'>
                            <Slider {...settings} className="">
                                    <div className='flex'>
                                        <div className='h-48 flex-col flex justify-start items-top dark:text-gray-900 bg-gray-200 p-4 dark:bg-gray-100 rounded-md'>
                                            <span className='slide-number text-3xl font-bold flex justify-end'>
                                                01.
                                            </span>
                                            <div>
                                                <div className='text-base font-bold uppercase'>
                                                    Отсутствие вложений
                                                </div>
                                                <div className='text-sm font-normal'>
                                                    Для начала работы с Битрикс не требуется установка дополнительных приложений или настроек. Запустить систему можно сразу после регистрации. Более того, при подключении до 12 человек к корпоративному порталу продукт полностью бесплатен
                                                </div>
                                            </div>
                                            
                                        </div>
                                    </div>
                                    <div className='flex'>
                                        <div className='h-48 flex-col flex justify-start items-top dark:text-gray-900 bg-gray-200 p-4 dark:bg-gray-100 rounded-md'>
                                            <span className='slide-number text-3xl font-bold flex justify-end'>
                                                02.
                                            </span>
                                            <div>
                                                <div className='text-base font-bold uppercase'>
                                                    Полный контроль и автоматизация
                                                </div>
                                                <div className='text-sm font-normal'>
                                                    С помощью Битрикс24 можно реализовать любой бизнес-процесс. Система имеет обширный набор опций для автоматизации и легко настраивается под требования компании. По всем процессам проводится анализ и статистика.
                                                </div>
                                            </div>
                                            
                                        </div>
                                    </div>
                                    <div className='flex h-14'>
                                        <div className='h-48 flex-col flex justify-start items-top dark:text-gray-900 bg-gray-200 p-4 dark:bg-gray-100 rounded-md'>
                                            <span className='slide-number text-3xl font-bold flex justify-end'>
                                                03.
                                            </span>
                                            <div>
                                                <div className='text-base font-bold uppercase'>
                                                    Встроенная телефония
                                                </div>
                                                <div className='text-sm font-normal'>
                                                    Штатный инструментарий Б24 позволяет совершать входящие и исходящие звонки без подключения сторонних приложений. Все разговоры при необходимости могут быть записаны. Использование встроенной телефонии выгоднее подключения АТС.
                                                </div>
                                            </div>
                                            
                                        </div>
                                    </div>
                                    <div className='flex h-14'>
                                        <div className='h-48 flex-col flex justify-start items-top dark:text-gray-900 bg-gray-200 p-4 dark:bg-gray-100 rounded-md'>
                                            <span className='slide-number text-3xl font-bold flex justify-end'>
                                                04.
                                            </span>
                                            <div>
                                                <div className='text-base font-bold uppercase'>
                                                    Аналитика и прогнозирование
                                                </div>
                                                <div className='text-sm font-normal'>
                                                    Корпоративный портал включает 8 отчетов и глобальную статистику с опцией визуализации данных. Система позволяет контролировать воронки продаж, получение оплаты за заказы, эффективность работы персонала и т.д.
                                                </div>
                                            </div>
                                            
                                        </div>
                                    </div>
                                    <div className='flex h-14'>
                                        <div className='h-48 flex-col flex justify-start items-top dark:text-gray-900 bg-gray-200 p-4 dark:bg-gray-100 rounded-md'>
                                            <span className='slide-number text-3xl font-bold flex justify-end'>
                                                05.
                                            </span>
                                            <div>
                                                <div className='text-base font-bold uppercase'>
                                                    Вертикаль доступа
                                                </div>
                                                <div className='text-sm font-normal'>
                                                    Система предполагает настройку закрытых и полузакрытых чатов, проектов и групп. Все данные полностью конфиденциальны и доступны только конкретным сотрудникам или департаментам согласно уровню доступа.
                                                </div>
                                            </div>
                                            
                                        </div>
                                    </div>
                                    <div className='flex h-14'>
                                        <div className='h-48 flex-col flex justify-start items-top dark:text-gray-900 bg-gray-200 p-4 dark:bg-gray-100 rounded-md'>
                                            <span className='slide-number text-3xl font-bold flex justify-end'>
                                                06.
                                            </span>
                                            <div>
                                                <div className='text-base font-bold uppercase'>
                                                    Простота интеграции с 1С
                                                </div>
                                                <div className='text-sm font-normal'>
                                                    Синхронизация корпоративного портала с продуктами 1С возможна штатными инструментами Битрикс. Обмен данными между корпоративным порталом и бухгалтерией возможен в одно- или двустороннем порядке.
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
