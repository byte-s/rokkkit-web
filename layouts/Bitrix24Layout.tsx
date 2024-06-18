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
                            <img className="mb-4 w-full"src={headerimage}></img>
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
                                <a href="/implementation/package" className='flex justify-between items-center bg-gray-200 dark:text-gray-900 sm:items-start flex-col lg:flex-row p-8 w-full dark:bg-gray-100 rounded-md'>
                                    <div className='flex-row flex justify-start items-center'>
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
                                            <div className='text-base font-normal max-w-2xl'>
                                                Готовые настройки для типовых бизнес-задач.
                                            </div>
                                        </div>
                                        <div className='flex mt-4 xl:mt-0 flex-row items-center justify-between'>
                                            <div className='flex flex-row items-top mr-4 flex-nowrap'>
                                                <span className='text-xs font-semibold text-gray-600 mr-1 leading-5'>
                                                    от
                                                </span>
                                                <div className='text-2xl font-semibold'>
                                                    29 000 ₽
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
                                <a href="" className='flex flex-col justify-between items-center bg-gray-200 dark:text-gray-900 sm:items-start lg:flex-row p-8 w-full dark:bg-gray-100 rounded-md'>
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
                                                Индивидуальные решения для крупных организаций.
                                            </div>
                                        </div>
                                        <div className='flex mt-4 xl:mt-0 flex-row items-center justify-between'>
                                            <div className='flex flex-row items-top mr-4 flex-nowrap'>
                                                <span className='text-xs font-semibold text-gray-600 mr-1 leading-5'>
                                                    от
                                                </span>
                                                <div className='text-2xl font-semibold'>
                                                    500 000 ₽
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
                                        <div className='h-full lg:h-40 flex-col flex justify-start items-top dark:text-gray-900 bg-gray-200 p-4 dark:bg-gray-100 rounded-md'>
                                            <span className='slide-number text-3xl font-bold flex justify-end'>
                                                01.
                                            </span>
                                            <div>
                                                <div className='text-base font-bold uppercase'>
                                                    Отсутствие вложений
                                                </div>
                                                <div className='text-sm font-normal'>
                                                    CRM Битрикс доступна сразу после регистрации, не требуя дополнительных установок или настроек. При подключении до 5 пользователей доступ к платформе абсолютно бесплатен.
                                                </div>
                                            </div>
                                            
                                        </div>
                                    </div>
                                    <div className='flex'>
                                        <div className='h-full lg:h-40 flex-col flex justify-start items-top dark:text-gray-900 bg-gray-200 p-4 dark:bg-gray-100 rounded-md'>
                                            <span className='slide-number text-3xl font-bold flex justify-end'>
                                                02.
                                            </span>
                                            <div>
                                                <div className='text-base font-bold uppercase'>
                                                    Полный контроль и автоматизация
                                                </div>
                                                <div className='text-sm font-normal'>
                                                    Битрикс24 предлагает широкий спектр инструментов для реализации бизнес-процессов, позволяя автоматизировать и контролировать все аспекты работы.
                                                </div>
                                            </div>
                                            
                                        </div>
                                    </div>
                                    <div className='flex'>
                                        <div className='h-full lg:h-40 flex-col flex justify-start items-top dark:text-gray-900 bg-gray-200 p-4 dark:bg-gray-100 rounded-md'>
                                            <span className='slide-number text-3xl font-bold flex justify-end'>
                                                03.
                                            </span>
                                            <div>
                                                <div className='text-base font-bold uppercase'>
                                                    Встроенная телефония
                                                </div>
                                                <div className='text-sm font-normal'>
                                                    Система предоставляет встроенный инструмент для входящих и исходящих звонков, без необходимости подключения сторонних приложений.
                                                </div>
                                            </div>
                                            
                                        </div>
                                    </div>
                                    <div className='flex'>
                                        <div className='h-full lg:h-40 flex-col flex justify-start items-top dark:text-gray-900 bg-gray-200 p-4 dark:bg-gray-100 rounded-md'>
                                            <span className='slide-number text-3xl font-bold flex justify-end'>
                                                04.
                                            </span>
                                            <div>
                                                <div className='text-base font-bold uppercase'>
                                                    Аналитика и прогнозирование
                                                </div>
                                                <div className='text-sm font-normal'>
                                                    Битрикс24 предоставляет глубокий анализ и статистику по всем процессам, включая визуализацию данных и контроль воронок продаж.
                                                </div>
                                            </div>
                                            
                                        </div>
                                    </div>
                                    <div className='flex'>
                                        <div className='h-full lg:h-40 flex-col flex justify-start items-top dark:text-gray-900 bg-gray-200 p-4 dark:bg-gray-100 rounded-md'>
                                            <span className='slide-number text-3xl font-bold flex justify-end'>
                                                05.
                                            </span>
                                            <div>
                                                <div className='text-base font-bold uppercase'>
                                                    Вертикаль доступа
                                                </div>
                                                <div className='text-sm font-normal'>
                                                    Платформа обеспечивает конфиденциальность данных, предоставляя доступ только авторизованным пользователям.
                                                </div>
                                            </div>
                                            
                                        </div>
                                    </div>
                                    <div className='flex'>
                                        <div className='h-full lg:h-40 flex-col flex justify-start items-top dark:text-gray-900 bg-gray-200 p-4 dark:bg-gray-100 rounded-md'>
                                            <span className='slide-number text-3xl font-bold flex justify-end'>
                                                06.
                                            </span>
                                            <div>
                                                <div className='text-base font-bold uppercase'>
                                                    Простота интеграции с 1С
                                                </div>
                                                <div className='text-sm font-normal'>
                                                    Битрикс24 легко интегрируется с продуктами 1С, обеспечивая надежный обмен данными.
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
