import { Metadata } from 'next';
import CallBlock from "@/components/CallBlock";
import ShortForm from "@/components/shortForm";
import React from "react";
import {List} from "flowbite-react";
import Image from 'next/image'
import coverImage from '../../../public/static/images/pack.webp'

export async function generateMetadata({
  params,
}: {
  params: { slug: string[] }
}): Promise<Metadata | undefined> {

  return {
    title: 'Пакетное внедрение Битрикс24',
    description: 'Наша команда поможет повысить продуктивность работы вашего бизнеса в Битрикс24, а также усовершенствовать большую часть внутренних бизнес-процессов.',
    openGraph: {
      title: 'Пакетное внедрение Битрикс24',
      description: 'Наша команда поможет повысить продуктивность работы вашего бизнеса в Битрикс24, а также усовершенствовать большую часть внутренних бизнес-процессов.',
      locale: 'ru_RU',
      type: 'article',
    },
  }
}

export default function Page() {
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
        <header className='grid lg:grid-cols-2 lg:grid-rows-1 items-center justify-between my-8 py-20'>
          <div>
            <h1 className='text-5xl mb-4 font-black'>
              Пакетное внедрение CRM Битрикс24
            </h1>
            <h2 className='text-xl mb-4'>
              Наша команда поможет повысить продуктивность работы вашего бизнеса в Битрикс24, а также усовершенствовать большую часть внутренних бизнес-процессов.
            </h2>
            <ShortForm></ShortForm>
          </div>
          <div
              className='grid lg:row-end-auto row-end-1 lg:justify-end lg:justify-items-end justify-start justify-items-start'>
            <Image className="mb-4 w-full max-h-80 lg:max-h-96" alt={'Пакетное внедрение CRM Битрикс24'} src={coverImage}></Image>
          </div>
        </header>
        <div className="max-w-none py-10">
          <h2 className="text-3xl md:text-4xl font-black leading-9 tracking-tight text-gray-900 dark:text-gray-100 mb-4">
            Описание
          </h2>
          <p className="text-lg">
            Пакетное внедрение Битрикс24 представляет собой эффективное решение, которое уже не раз доказало свою
            надежность на практике и которое сфокусировано на учете специфических потребностей каждого отдельного
            клиента.
            <br/>
            <br/>
            В самые короткие сроки вы получите установленный и настроенный Битрикс24, полностью готовый к использованию,
            а также детальное руководство, подготовленное нашими специалистами, для облегчения работы с системой.
          </p>
        </div>
        <div className="grid gap-8 max-w-7xl py-20 mx-auto ">
          <div
              className='hover:scale-105 transition duration-300 grid md:grid-cols-3 gap-4 justify-between bg-gray-100 dark:text-gray-900 p-8 dark:bg-gray-900 w-full rounded-md'>
            <div className='md:col-span-2 text-gray-900 dark:text-gray-100'>
              <div className='text-3xl font-black'>
                CRM Lite
              </div>
              <div className='mt-4 text-lg font-medium'>
                Готовый пакет настроек для быстрого старта с Битрикс24.
              </div>
              <List className='grid md:grid-cols-2 mt-4 text-gray-900 dark:text-gray-100'>
                <List.Item className='text-base font-normal items-start flex-row flex'>
                  <div className='size-5 mr-2'>
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="32"
                         width="32" xmlns="http://www.w3.org/2000/svg" className="size-5 mr-2">
                      <path
                          d="M400 48H112a64.07 64.07 0 0 0-64 64v288a64.07 64.07 0 0 0 64 64h288a64.07 64.07 0 0 0 64-64V112a64.07 64.07 0 0 0-64-64zm-35.75 138.29-134.4 160a16 16 0 0 1-12 5.71h-.27a16 16 0 0 1-11.89-5.3l-57.6-64a16 16 0 1 1 23.78-21.4l45.29 50.32 122.59-145.91a16 16 0 0 1 24.5 20.58z">
                      </path>
                    </svg>
                  </div>
                  До 10 сотрудников.
                </List.Item>
                <List.Item className='text-base font-normal items-start flex-row flex'>
                  <div className='size-5 mr-2'>
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="32"
                         width="32" xmlns="http://www.w3.org/2000/svg" className="size-5 mr-2">
                      <path
                          d="M400 48H112a64.07 64.07 0 0 0-64 64v288a64.07 64.07 0 0 0 64 64h288a64.07 64.07 0 0 0 64-64V112a64.07 64.07 0 0 0-64-64zm-35.75 138.29-134.4 160a16 16 0 0 1-12 5.71h-.27a16 16 0 0 1-11.89-5.3l-57.6-64a16 16 0 1 1 23.78-21.4l45.29 50.32 122.59-145.91a16 16 0 0 1 24.5 20.58z">
                      </path>
                    </svg>
                  </div>
                  Одна воронка (карточки, лиды).
                </List.Item>
                <List.Item className='text-base font-normal items-start flex-row flex'>
                  <div className='size-5 mr-2'>
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="32"
                         width="32" xmlns="http://www.w3.org/2000/svg" className="size-5 mr-2">
                      <path
                          d="M400 48H112a64.07 64.07 0 0 0-64 64v288a64.07 64.07 0 0 0 64 64h288a64.07 64.07 0 0 0 64-64V112a64.07 64.07 0 0 0-64-64zm-35.75 138.29-134.4 160a16 16 0 0 1-12 5.71h-.27a16 16 0 0 1-11.89-5.3l-57.6-64a16 16 0 1 1 23.78-21.4l45.29 50.32 122.59-145.91a16 16 0 0 1 24.5 20.58z">
                      </path>
                    </svg>
                  </div>
                  До 10 полей в карточке.
                </List.Item>
                <List.Item className='text-base font-normal items-start flex-row flex'>
                  <div className='size-5 mr-2'>
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="32"
                         width="32" xmlns="http://www.w3.org/2000/svg" className="size-5 mr-2">
                      <path
                          d="M400 48H112a64.07 64.07 0 0 0-64 64v288a64.07 64.07 0 0 0 64 64h288a64.07 64.07 0 0 0 64-64V112a64.07 64.07 0 0 0-64-64zm-35.75 138.29-134.4 160a16 16 0 0 1-12 5.71h-.27a16 16 0 0 1-11.89-5.3l-57.6-64a16 16 0 1 1 23.78-21.4l45.29 50.32 122.59-145.91a16 16 0 0 1 24.5 20.58z">
                      </path>
                    </svg>
                  </div>
                  Структура и права доступа.
                </List.Item>
                <List.Item className='text-base font-normal items-start flex-row flex'>
                  <div className='size-5 mr-2'>
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="32"
                         width="32" xmlns="http://www.w3.org/2000/svg" className="size-5 mr-2">
                      <path
                          d="M400 48H112a64.07 64.07 0 0 0-64 64v288a64.07 64.07 0 0 0 64 64h288a64.07 64.07 0 0 0 64-64V112a64.07 64.07 0 0 0-64-64zm-35.75 138.29-134.4 160a16 16 0 0 1-12 5.71h-.27a16 16 0 0 1-11.89-5.3l-57.6-64a16 16 0 1 1 23.78-21.4l45.29 50.32 122.59-145.91a16 16 0 0 1 24.5 20.58z">
                      </path>
                    </svg>
                  </div>
                  3 отчета CRM.
                </List.Item>
                <List.Item className='text-base font-normal items-start flex-row flex'>
                  <div className='size-5 mr-2'>
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="32"
                         width="32" xmlns="http://www.w3.org/2000/svg" className="size-5 mr-2">
                      <path
                          d="M400 48H112a64.07 64.07 0 0 0-64 64v288a64.07 64.07 0 0 0 64 64h288a64.07 64.07 0 0 0 64-64V112a64.07 64.07 0 0 0-64-64zm-35.75 138.29-134.4 160a16 16 0 0 1-12 5.71h-.27a16 16 0 0 1-11.89-5.3l-57.6-64a16 16 0 1 1 23.78-21.4l45.29 50.32 122.59-145.91a16 16 0 0 1 24.5 20.58z">
                      </path>
                    </svg>
                  </div>
                  Виджет Битрикс24 на одном сайте.
                </List.Item>
                <List.Item className='text-base font-normal items-start flex-row flex'>
                  <div className='size-5 mr-2'>
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="32"
                         width="32" xmlns="http://www.w3.org/2000/svg" className="size-5 mr-2">
                      <path
                          d="M400 48H112a64.07 64.07 0 0 0-64 64v288a64.07 64.07 0 0 0 64 64h288a64.07 64.07 0 0 0 64-64V112a64.07 64.07 0 0 0-64-64zm-35.75 138.29-134.4 160a16 16 0 0 1-12 5.71h-.27a16 16 0 0 1-11.89-5.3l-57.6-64a16 16 0 1 1 23.78-21.4l45.29 50.32 122.59-145.91a16 16 0 0 1 24.5 20.58z">
                      </path>
                    </svg>
                  </div>
                  1 час группового обучения.
                </List.Item>
              </List>
            </div>
            <div className=''>
              <div className='mt-4 mb-2'>
                <div className='font-normal text-base text-gray-500'>Стоимость</div>
                <div className='font-black text-4xl text-gray-900 dark:text-gray-100'>30 000 ₽</div>
              </div>
              <ShortForm/>
            </div>
          </div>
          <div
              className='hover:scale-105 transition duration-300 grid md:grid-cols-3 gap-4 justify-between bg-gray-100 dark:text-gray-900 p-8 dark:bg-gray-900 w-full rounded-md'>
            <div className='md:col-span-2'>
              <div className='inline-flex items-center '>
                <div className='text-3xl font-black text-gray-900 dark:text-gray-100'>
                  CRM Pro
                </div>
                <div className='ml-2 p-3 badge badge-warning text-gray-50 font-bold'>
                  Рекомендуем
                </div>
              </div>
              <div className='mt-4 text-lg font-medium text-gray-900 dark:text-gray-100'>
                Продвинутый пакет настроек для уверенного старта с Битрикс24.
              </div>
              <div className='mt-4 text-lg font-bold text-gray-900 dark:text-gray-100'>
                Все то, что в CRM Lite +
              </div>
              <List className='grid md:grid-cols-2 mt-2 text-base text-gray-900 dark:text-gray-100'>
                <List.Item className='font-normal items-start flex-row flex'>
                  <div className='size-5 mr-2'>
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="32"
                         width="32" xmlns="http://www.w3.org/2000/svg" className="size-5 mr-2">
                      <path
                          d="M400 48H112a64.07 64.07 0 0 0-64 64v288a64.07 64.07 0 0 0 64 64h288a64.07 64.07 0 0 0 64-64V112a64.07 64.07 0 0 0-64-64zm-35.75 138.29-134.4 160a16 16 0 0 1-12 5.71h-.27a16 16 0 0 1-11.89-5.3l-57.6-64a16 16 0 1 1 23.78-21.4l45.29 50.32 122.59-145.91a16 16 0 0 1 24.5 20.58z">
                      </path>
                    </svg>
                  </div>
                  2 воронки (карточки, лиды).
                </List.Item>
                <List.Item className='font-normal items-start flex-row flex'>
                  <div className='size-5 mr-2'>
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="32"
                         width="32" xmlns="http://www.w3.org/2000/svg" className="size-5 mr-2">
                      <path
                          d="M400 48H112a64.07 64.07 0 0 0-64 64v288a64.07 64.07 0 0 0 64 64h288a64.07 64.07 0 0 0 64-64V112a64.07 64.07 0 0 0-64-64zm-35.75 138.29-134.4 160a16 16 0 0 1-12 5.71h-.27a16 16 0 0 1-11.89-5.3l-57.6-64a16 16 0 1 1 23.78-21.4l45.29 50.32 122.59-145.91a16 16 0 0 1 24.5 20.58z">
                      </path>
                    </svg>
                  </div>
                  4 роли доступа.
                </List.Item>
                <List.Item className='font-normal items-start flex-row flex'>
                  <div className='size-5 mr-2'>
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="32"
                         width="32" xmlns="http://www.w3.org/2000/svg" className="size-5 mr-2">
                      <path
                          d="M400 48H112a64.07 64.07 0 0 0-64 64v288a64.07 64.07 0 0 0 64 64h288a64.07 64.07 0 0 0 64-64V112a64.07 64.07 0 0 0-64-64zm-35.75 138.29-134.4 160a16 16 0 0 1-12 5.71h-.27a16 16 0 0 1-11.89-5.3l-57.6-64a16 16 0 1 1 23.78-21.4l45.29 50.32 122.59-145.91a16 16 0 0 1 24.5 20.58z">
                      </path>
                    </svg>
                  </div>
                  3 канала связи в CRM.
                </List.Item>
                <List.Item className='font-normal items-start flex-row flex'>
                  <div className='size-5 mr-2'>
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="32"
                         width="32" xmlns="http://www.w3.org/2000/svg" className="size-5 mr-2">
                      <path
                          d="M400 48H112a64.07 64.07 0 0 0-64 64v288a64.07 64.07 0 0 0 64 64h288a64.07 64.07 0 0 0 64-64V112a64.07 64.07 0 0 0-64-64zm-35.75 138.29-134.4 160a16 16 0 0 1-12 5.71h-.27a16 16 0 0 1-11.89-5.3l-57.6-64a16 16 0 1 1 23.78-21.4l45.29 50.32 122.59-145.91a16 16 0 0 1 24.5 20.58z">
                      </path>
                    </svg>
                  </div>
                  До 10 роботов в CRM.
                </List.Item>
                <List.Item className='font-normal items-start flex-row flex'>
                  <div className='size-5 mr-2'>
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="32"
                         width="32" xmlns="http://www.w3.org/2000/svg" className="size-5 mr-2">
                      <path
                          d="M400 48H112a64.07 64.07 0 0 0-64 64v288a64.07 64.07 0 0 0 64 64h288a64.07 64.07 0 0 0 64-64V112a64.07 64.07 0 0 0-64-64zm-35.75 138.29-134.4 160a16 16 0 0 1-12 5.71h-.27a16 16 0 0 1-11.89-5.3l-57.6-64a16 16 0 1 1 23.78-21.4l45.29 50.32 122.59-145.91a16 16 0 0 1 24.5 20.58z">
                      </path>
                    </svg>
                  </div>
                  1 час обучения РОПа.
                </List.Item>
              </List>
            </div>
            <div className=''>
              <div className='mt-4 mb-2'>
                <div className='font-normal text-base text-gray-500'>Стоимость</div>
                <div className='font-black text-4xl text-gray-900 dark:text-gray-100'>110 000 ₽</div>
              </div>
              <ShortForm/>
            </div>
          </div>
        </div>
        <div className='xl:col-span-3 mt-5 text-2xl font-bold xl:row-span-2 pb-4 xl:pb-0'></div>
        <CallBlock/>
      </>
  )
}
