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

export default function CorporateLayout({ content, authorDetails, next, prev, children }: LayoutProps) {
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
                            <h1 className='lg:text-5xl mb-4 text-3xl font-bold'>
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
                                            Удобным для пользователя
                                        </div>
                                        <div className='text-base font-light'>
                                            Мы создаем каждый проект с уникальным дизайном, который учитывает корпоративный стиль вашей компании. Наш готовый продукт адаптирован для всех устройств и имеет интуитивно понятный интерфейс с учетом UI-аспектов и быструю скорость загрузки страниц. Внешний вид наших сайтов не только подчеркивает статус и репутацию вашего бренда, но и мотивирует посетителей обратиться в вашу компанию и сделать заказ.
                                        </div>
                                    </div>
                                </div>
                                
                                <div className='flex'>
                                    <div className='h-full lg:h-72 flex-col flex justify-center items-top dark:text-gray-900 bg-gray-200 p-8 dark:bg-gray-100 rounded-md'>
                                        <div className='mb-2 text-xl font-bold'>
                                            Убедительным и продающим
                                        </div>
                                        <div className='text-base font-light'>
                                            Наш каталог продуктов и услуг оборудован акцентными конверсионными элементами - формами для заказа, онлайн-консультантами, формами расчета стоимости доставки или калькулятором сделки. Мы утверждаем весь функционал на этапе проектирования. Наш ресурс оптимизирован для поисковых систем, что позволяет нам сразу после запуска привлекать клиентов.
                                        </div>
                                    </div>
                                </div>

                                <div className='flex'>
                                    <div className='h-full lg:h-72 flex-col flex justify-center items-top dark:text-gray-900 bg-gray-200 p-8 dark:bg-gray-100 rounded-md'>
                                        <div className='mb-2 text-xl font-bold'>
                                            Экспертным, подчеркивающим статус
                                        </div>
                                        <div className='text-base font-light'>
                                            Мы создаем уникальный, экспертный контент, который точно отражает успехи вашей компании и преимущества вашей продукции. Ваш сайт станет визитной карточкой организации, которая демонстрирует высокий уровень вашего авторитета и компетентности.
                                        </div>
                                    </div>
                                </div>
                            </Slider>
                            </div>
                        </div>
                    </div>
                    <div className="xl:col-span-3 mt-5 text-2xl font-bold xl:row-span-2 pb-4 xl:pb-0">
                        <div className="xl:col-span-3 mt-5 text-2xl font-bold xl:row-span-2 pb-4 xl:pb-0">
                            <h2 className='py-4'>Что входит в услугу «Корпоративный сайт под ключ»</h2>
                            <div className="w-full">
                                <List className='mt-2 text-gray-900 dark:text-gray-100'>
                                    <List.Item className='text-base py-2 font-normal items-center flex-row flex'>
                                        <div className='size-5 mr-4'>
                                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="32" width="32" xmlns="http://www.w3.org/2000/svg" className="size-5 mr-2">
                                                <path d="M400 48H112a64.07 64.07 0 0 0-64 64v288a64.07 64.07 0 0 0 64 64h288a64.07 64.07 0 0 0 64-64V112a64.07 64.07 0 0 0-64-64zm-35.75 138.29-134.4 160a16 16 0 0 1-12 5.71h-.27a16 16 0 0 1-11.89-5.3l-57.6-64a16 16 0 1 1 23.78-21.4l45.29 50.32 122.59-145.91a16 16 0 0 1 24.5 20.58z">
                                                </path>
                                            </svg>
                                        </div>
                                        Дизайн в уникальном корпоративном стиле — начиная с нуля, мы создаем визуальное оформление и индивидуальный пользовательский интерфейс.
                                    </List.Item>
                                    <List.Item className='text-base py-2 font-normal items-center flex-row flex'>
                                        <div className='size-5 mr-4'>
                                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="32" width="32" xmlns="http://www.w3.org/2000/svg" className="size-5 mr-2">
                                                <path d="M400 48H112a64.07 64.07 0 0 0-64 64v288a64.07 64.07 0 0 0 64 64h288a64.07 64.07 0 0 0 64-64V112a64.07 64.07 0 0 0-64-64zm-35.75 138.29-134.4 160a16 16 0 0 1-12 5.71h-.27a16 16 0 0 1-11.89-5.3l-57.6-64a16 16 0 1 1 23.78-21.4l45.29 50.32 122.59-145.91a16 16 0 0 1 24.5 20.58z">
                                                </path>
                                            </svg>
                                        </div>
                                        Обширный каталог продуктов или услуг — мы разрабатываем детализированный каталог с удобной навигацией, поисковой системой и фильтрацией по различным характеристикам.
                                    </List.Item>
                                    <List.Item className='text-base py-2 font-normal items-center flex-row flex'>
                                        <div className='size-5 mr-4'>
                                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="32" width="32" xmlns="http://www.w3.org/2000/svg" className="size-5 mr-2">
                                                <path d="M400 48H112a64.07 64.07 0 0 0-64 64v288a64.07 64.07 0 0 0 64 64h288a64.07 64.07 0 0 0 64-64V112a64.07 64.07 0 0 0-64-64zm-35.75 138.29-134.4 160a16 16 0 0 1-12 5.71h-.27a16 16 0 0 1-11.89-5.3l-57.6-64a16 16 0 1 1 23.78-21.4l45.29 50.32 122.59-145.91a16 16 0 0 1 24.5 20.58z">
                                                </path>
                                            </svg>
                                        </div>
                                        Корзину для покупок/Форму для оформления заказа — все интернет-заказы автоматически обрабатываются системой CRM или при необходимости направляются менеджерам. Мы предлагаем интеграцию сайтов с CRM и 1С в качестве дополнительной услуги.
                                    </List.Item>
                                    <List.Item className='text-base py-2 font-normal items-center flex-row flex'>
                                        <div className='size-5 mr-4'>
                                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="32" width="32" xmlns="http://www.w3.org/2000/svg" className="size-5 mr-2">
                                                <path d="M400 48H112a64.07 64.07 0 0 0-64 64v288a64.07 64.07 0 0 0 64 64h288a64.07 64.07 0 0 0 64-64V112a64.07 64.07 0 0 0-64-64zm-35.75 138.29-134.4 160a16 16 0 0 1-12 5.71h-.27a16 16 0 0 1-11.89-5.3l-57.6-64a16 16 0 1 1 23.78-21.4l45.29 50.32 122.59-145.91a16 16 0 0 1 24.5 20.58z">
                                                </path>
                                            </svg>
                                        </div>
                                        Разработку личного кабинета — это добавляет возможность регистрации на портале как внутренних сотрудников компании для управления рабочими процессами, так и бизнес-партнеров и посетителей сайта.
                                    </List.Item>
                                    <List.Item className='text-base py-2 font-normal items-center flex-row flex'>
                                        <div className='size-5 mr-4'>
                                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="32" width="32" xmlns="http://www.w3.org/2000/svg" className="size-5 mr-2">
                                                <path d="M400 48H112a64.07 64.07 0 0 0-64 64v288a64.07 64.07 0 0 0 64 64h288a64.07 64.07 0 0 0 64-64V112a64.07 64.07 0 0 0-64-64zm-35.75 138.29-134.4 160a16 16 0 0 1-12 5.71h-.27a16 16 0 0 1-11.89-5.3l-57.6-64a16 16 0 1 1 23.78-21.4l45.29 50.32 122.59-145.91a16 16 0 0 1 24.5 20.58z">
                                                </path>
                                            </svg>
                                        </div>
                                        Базовую поисковую оптимизацию — проект реализуется с участием специалиста по SEO, оптимизирован и готов к дальнейшему развитию.
                                    </List.Item>
                                </List>
                            </div>
                        </div>
                    </div>
                    <div className="xl:col-span-3 mt-5 text-2xl font-bold xl:row-span-2 pb-4 xl:pb-0">
                        <div className="xl:col-span-3 mt-5 text-2xl font-bold xl:row-span-2 pb-4 xl:pb-0">
                            <h2 className='py-4'>Дополнительные возможности для бизнеса</h2>
                            <div className="w-full">
                                <List className='mt-2 text-gray-900 dark:text-gray-100'>
                                    <List.Item className='text-base py-2 font-normal justify-start items-start flex-col flex'>
                                        <div className='flex flex-row items-center mb-2 font-bold'>
                                            <div className='size-5 mr-4 '>
                                                <IoRemove className="size-5 mr-2"/>
                                            </div>
                                            Поддержка пользователей
                                        </div>
                                        <div>
                                            Корпоративный сайт разрабатывается с целью получения обратной связи от пользователей о продуктах и услугах компании. Это достигается за счет интеграции модулей отзывов, комментариев и форм обратной связи. Это позволяет представить новый продукт целевой аудитории, выявить основные проблемы, с которыми сталкиваются пользователи, и улучшить качество обслуживания.
                                        </div>
                                    </List.Item>
                                    <List.Item className='text-base py-2 font-normal justify-start items-start flex-col flex'>
                                        <div className='flex flex-row items-center mb-2 font-bold'>
                                            <div className='size-5 mr-4 '>
                                                <IoRemove className="size-5 mr-2"/>
                                            </div>
                                            Коммуникация с сотрудниками и партнерами
                                        </div>
                                        <div>
                                            Корпоративный веб-портал идеально подходит для общения и взаимодействия сотрудников внутри компании и партнеров. Постоянное общение с персоналом помогает улучшить качество предоставляемого сервиса и контроль над выполнением задач.
                                        </div>
                                    </List.Item>
                                    <List.Item className='text-base py-2 font-normal justify-start items-start flex-col flex'>
                                        <div className='flex flex-row items-center mb-2 font-bold'>
                                            <div className='size-5 mr-4 '>
                                                <IoRemove className="size-5 mr-2"/>
                                            </div>
                                            Поиск новых сотрудников
                                        </div>
                                        <div>
                                            Корпоративный сайт может служить площадкой для управления персоналом, размещения вакансий и привлечения новых кадров.
                                        </div>
                                    </List.Item>
                                    <List.Item className='text-base py-2 font-normal justify-start items-start flex-col flex'>
                                        <div className='flex flex-row items-center mb-2 font-bold'>
                                            <div className='size-5 mr-4 '>
                                                <IoRemove className="size-5 mr-2"/>
                                            </div>
                                            Размещение каталога
                                        </div>
                                        <div>
                                            Во время создания корпоративного сайта мы предусматриваем функционал для публикации каталога продуктов или услуг в виде прайс-листа, карточек товаров и пр. Мы также предлагаем услугу автоматической выгрузки данных из внешних программ в рамках комплексной разработки.
                                        </div>
                                    </List.Item>
                                </List>
                            </div>
                        </div>
                    </div>
                    <div className="xl:col-span-3 mt-5 text-2xl font-bold xl:row-span-2 pb-4 xl:pb-0">
                        <div className="xl:col-span-3 mt-5 text-2xl font-bold xl:row-span-2 pb-4 xl:pb-0">
                            <h2 className='py-4'>Преимущества сотрудничества с нами</h2>
                            <div className="w-full">
                                <List className='mt-2 text-gray-900 dark:text-gray-100'>
                                    <List.Item className='text-base py-2 font-normal justify-start items-start flex-col flex'>
                                        <div className='flex flex-row items-center mb-2 font-bold'>
                                            <div className='size-5 mr-4 '>
                                                <IoRemove className="size-5 mr-2"/>
                                            </div>
                                            Веб-разработка любого уровня сложности
                                        </div>
                                        <div>
                                            Мы обладаем необходимыми компетенциями для реализации проектов любого масштаба и сложности, учитывая особенности вашего бизнеса, требования к функционалу и нагрузке на ресурс. Наши специалисты готовы воплотить ваши задачи в жизнь, соблюдая сроки, установленные в договоре.
                                        </div>
                                    </List.Item>
                                    <List.Item className='text-base py-2 font-normal justify-start items-start flex-col flex'>
                                        <div className='flex flex-row items-center mb-2 font-bold'>
                                            <div className='size-5 mr-4 '>
                                                <IoRemove className="size-5 mr-2"/>
                                            </div>
                                            Ответственность перед каждым заказчиком
                                        </div>
                                        <div>
                                            Наша политика в отношении каждого проекта не меняется в зависимости от статуса, бюджета или размера бизнеса клиента. Мы строго следуем внутреннему регламенту компании, осуществляя детальную проработку сайта на всех этапах – от предпроектного анализа до финального тестирования и сдачи проекта клиенту.
                                        </div>
                                    </List.Item>
                                    <List.Item className='text-base py-2 font-normal justify-start items-start flex-col flex'>
                                        <div className='flex flex-row items-center mb-2 font-bold'>
                                            <div className='size-5 mr-4 '>
                                                <IoRemove className="size-5 mr-2"/>
                                            </div>
                                            Предоставляем услугу под ключ
                                        </div>
                                        <div>
                                            Мы не просто разрабатываем сайт, но и предлагаем дальнейшую техническую поддержку, продвижение и доработку проекта для его успешного развития.
                                        </div>
                                    </List.Item>
                                </List>
                            </div>
                        </div>
                    </div>
                    <div className="xl:col-span-3 mt-5 text-2xl font-bold xl:row-span-2 pb-4 xl:pb-0">
                        <div className="xl:col-span-3 mt-5 text-2xl font-bold xl:row-span-2 pb-4 xl:pb-0">
                            <h2 className='py-4'>Этапы разработки корпоративного сайта</h2>
                            <div className="w-full">
                                <div className='font-normal text-base'>
                                    В результате вы получите сайт, оформленный в фирменном стиле с уникальным дизайном. Он станет отличным генератором дополнительных продаж и поднимет узнаваемость вашего бренда.
                                </div>
                                <div className='grid grid-cols-1 gap-4 mt-4 xl:grid-cols-4'>
                                    <div className='border border-gray-400 dark:hover:bg-gray-100 dark:hover:text-gray-900 hover:bg-gray-900 hover:text-gray-100 rounded-md p-4'>
                                        <div className='text-3xl font-bold mb-2'>
                                            01.
                                        </div>
                                        <div className='text-base font-bold mb-1'>
                                            Разработка технического задания
                                        </div>
                                        <div className='text-base font-normal mb-4'>
                                            Подробное описание проекта, всех визуальных и функциональных требований.
                                        </div>   
                                    </div>
                                    <div className='border border-gray-400 dark:hover:bg-gray-100 dark:hover:text-gray-900 hover:bg-gray-900 hover:text-gray-100 rounded-md p-4'>
                                        <div className='text-3xl font-bold mb-2'>
                                            02.
                                        </div>
                                        <div className='text-base font-bold mb-1'>
                                            Прототипирование
                                        </div>
                                        <div className='text-base font-normal mb-4'>
                                            Разработка структуры разделов, удобной навигации и интерфейса.
                                        </div>   
                                    </div>
                                    <div className='border border-gray-400 dark:hover:bg-gray-100 dark:hover:text-gray-900 hover:bg-gray-900 hover:text-gray-100 rounded-md p-4'>
                                        <div className='text-3xl font-bold mb-2'>
                                            03.
                                        </div>
                                        <div className='text-base font-bold mb-1'>
                                            Разработка дизайна страниц
                                        </div>
                                        <div className='text-base font-normal mb-4'>
                                            Установка Битрикс24 и программная разработка
                                        </div>   
                                    </div>
                                    <div className='border border-gray-400 dark:hover:bg-gray-100 dark:hover:text-gray-900 hover:bg-gray-900 hover:text-gray-100 rounded-md p-4'>
                                        <div className='text-3xl font-bold mb-2'>
                                            04.
                                        </div>
                                        <div className='text-base font-bold mb-1'>
                                            Адаптивная верстка и программирование
                                        </div>
                                        <div className='text-base font-normal mb-4'>
                                            Визуальная и функциональная реализация проекта в программном коде.
                                        </div>   
                                    </div>
                                    <div className='border border-gray-400 dark:hover:bg-gray-100 dark:hover:text-gray-900 hover:bg-gray-900 hover:text-gray-100 rounded-md p-4'>
                                        <div className='text-3xl font-bold mb-2'>
                                            05.
                                        </div>
                                        <div className='text-base font-bold mb-1'>
                                            Оптимизация под поиск
                                        </div>
                                        <div className='text-base font-normal mb-4'>
                                            Работа над релевантностью страниц поисковым запросам, установка аналитических инструментов.
                                        </div>   
                                    </div>
                                    <div className='border border-gray-400 dark:hover:bg-gray-100 dark:hover:text-gray-900 hover:bg-gray-900 hover:text-gray-100 rounded-md p-4'>
                                        <div className='text-3xl font-bold mb-2'>
                                            06.
                                        </div>
                                        <div className='text-base font-bold mb-1'>
                                            Функциональное тестирование и запуск
                                        </div>
                                        <div className='text-base font-normal mb-4'>
                                            Кроссбраузерное тестирование, проверка верстки, поиск и устранение возможных технических ошибок.
                                        </div>   
                                    </div>
                                    <div className='border border-gray-400 dark:hover:bg-gray-100 dark:hover:text-gray-900 hover:bg-gray-900 hover:text-gray-100 rounded-md p-4'>
                                        <div className='text-3xl font-bold mb-2'>
                                            07.
                                        </div>
                                        <div className='text-base font-bold mb-1'>
                                            Поддержка и продвижение
                                        </div>
                                        <div className='text-base font-normal mb-4'>
                                            После сдачи проекта не бросаем клиентов, и предлагаем техническую поддержку.
                                        </div>   
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="xl:col-span-3 mt-5 text-2xl font-bold xl:row-span-2 pb-4 xl:pb-0">
                        <div className="xl:col-span-3 mt-5 text-2xl font-bold xl:row-span-2 pb-4 xl:pb-0">
                            <h2 className='py-4'>Ответы на частые вопросы</h2>
                            <div className="w-full">
                               <div className="mx-auto mt-4 w-full divide-y divide-white/5 rounded-xl bg-gray/5">
                                    <Disclosure as="div" className="py-2" defaultOpen={true}>
                                        <DisclosureButton className="group flex w-full items-center justify-between">
                                            <span className="text-start text-base font-bold group-data-[hover]:text-gray-500/80">
                                                Входит ли контент в стоимость сайта?
                                            </span>
                                            <ChevronDownIcon className="size-5 " />
                                        </DisclosureButton>
                                        <DisclosurePanel className="mt-2 text-base font-normal">
                                            Да, мы занимаемся оформлением сайта под ключ. В перечень работ входит наполнение качественным контентом, подробно рассказывающим о достоинствах вашего продукта.
                                        </DisclosurePanel>
                                    </Disclosure>
                                    <Disclosure as="div" className="py-2" defaultOpen={true}>
                                        <DisclosureButton className="group flex w-full items-center justify-between">
                                            <span className="text-start text-base font-bold group-data-[hover]:text-gray-500/80">
                                                Подходит ли ресурс под поисковое продвижение?
                                            </span>
                                            <ChevronDownIcon className="size-5 " />
                                        </DisclosureButton>
                                        <DisclosurePanel className="mt-2 text-base font-normal">
                                            Полностью готов к продвижению. Корпоративный ресурс в процессе работы проходит базовую оптимизацию, структура проектируется совместно с SEO-специалистами.
                                        </DisclosurePanel>
                                    </Disclosure>
                                    <Disclosure as="div" className="py-2" defaultOpen={true}>
                                        <DisclosureButton className="group flex w-full items-center justify-between">
                                            <span className="text-start text-base font-bold group-data-[hover]:text-gray-500/80">
                                                Каков срок создания сайта?
                                            </span>
                                            <ChevronDownIcon className="size-5 " />
                                        </DisclosureButton>
                                        <DisclosurePanel className="mt-2 text-base font-normal">
                                            В среднем 1-2 месяца. Длительность веб-разработки зависит от масштабов проекта. Крупный сайт или портал может занимать до полугода, небольшой — 2 недели.
                                        </DisclosurePanel>
                                    </Disclosure>
                                    <Disclosure as="div" className="py-2" defaultOpen={true}>
                                        <DisclosureButton className="group flex w-full items-center justify-between">
                                            <span className="text-start text-base font-bold group-data-[hover]:text-gray-500/80">
                                                Что если сайт перестанет работать?
                                            </span>
                                            <ChevronDownIcon className="size-5 " />
                                        </DisclosureButton>
                                        <DisclosurePanel className="mt-2 text-base font-normal">
                                            Мы даем гарантию на наши услуги в течение 6 месяцев с момента передачи заказчику. Если сайт перестает корректно функционировать вследствие ошибки наших программистов — устраняем бесплатно.
                                        </DisclosurePanel>
                                    </Disclosure>
                                    <Disclosure as="div" className="py-2" defaultOpen={true}>
                                        <DisclosureButton className="group flex w-full items-center justify-between">
                                            <span className="text-start text-base font-bold group-data-[hover]:text-gray-500/80">
                                                Насколько сложно добавлять информацию на сайт?
                                            </span>
                                            <ChevronDownIcon className="size-5 " />
                                        </DisclosureButton>
                                        <DisclosurePanel className="mt-2 text-base font-normal">
                                            Для исправления текстов, добавления новых услуг или продуктов, а также новых страниц и разделов не требуется профессиональная подготовка. Сайт будет работать на современной CMS-системе 1С-Битрикс — удобной и интуитивно понятной для заказчика.
                                        </DisclosurePanel>
                                    </Disclosure>
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
