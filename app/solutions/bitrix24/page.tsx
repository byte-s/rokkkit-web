import { Metadata } from 'next';
import CallBlock from "@/components/CallBlock";
import ShortForm from "@/components/shortForm";
import {Tab, TabGroup, TabList, TabPanel, TabPanels} from "@headlessui/react";
import React from "react";
import Link from "next/link";
import ShortFormFW from "@/components/shortFormFW";

export async function generateMetadata({
  params,
}: {
  params: { slug: string[] }
}): Promise<Metadata | undefined> {

  return {
    title: 'Битрикс24',
    description: 'Интегрированная eCommerce-платформа с мощными инструментами «1С-Битрикс: Управление сайтом» и Битрикс24 для автоматизации вашего бизнеса',
    openGraph: {
      title: 'Битрикс24',
      description: 'Интегрированная eCommerce-платформа с мощными инструментами «1С-Битрикс: Управление сайтом» и Битрикс24 для автоматизации вашего бизнеса',
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
              Битрикс24
            </h1>
            <h2 className='text-xl mb-4'>
              Интегрированная eCommerce-платформа с мощными инструментами «1С-Битрикс: Управление сайтом» и Битрикс24
              для автоматизации вашего бизнеса
            </h2>
            <ShortForm></ShortForm>
          </div>
          <div
              className='grid lg:row-end-auto row-end-1 lg:justify-end lg:justify-items-end justify-start justify-items-start'>
            <img className="mb-4 w-full" src={'/static/images/bitrix-24.png'}></img>
          </div>
        </header>
        <div className="divide-y divide-gray-200 dark:divide-gray-700 xl:col-span-3 xl:row-span-2 xl:pb-0">
          <div className="max-w-none pb-8 pt-10">
            <h2 className="text-3xl md:text-4xl font-black leading-9 tracking-tight text-gray-900 dark:text-gray-100 mb-4">
              Описание
            </h2>
            <p className="text-lg">
              Битрикс24 предоставляет мощный инструмент для организации совместной работы всех отделов вашего бизнеса —
              от
              бухгалтерии до разработки. Наша платформа для бизнеса создана для максимального удобства и включает весь
              необходимый функционал для эффективной работы.
            </p>
            <p className="text-lg">
              Объедините всех сотрудников в единой системе, работайте вместе над задачами и проектами, контролируйте
              выполнение, анализируйте результаты и автоматизируйте бизнес-процессы с помощью нашей CRM. Битрикс24 — это
              ваш надежный партнер в управлении бизнесом.
            </p>
          </div>
        </div>
        <div className="max-w-7xl py-20 mx-auto">
          <h2 className="text-3xl md:text-4xl font-black leading-9 tracking-tight text-gray-900 dark:text-gray-100 mb-4">
            Тарифы и цены
          </h2>
          <TabGroup>
            <TabList className="flex gap-4">
              <Tab
                  key='cloud'
                  className="rounded-full py-1 px-3 text-sm/6 font-semibold text-gray-900 bg-gray-200 dark:text-gray-100 dark:bg-gray-800 data-[hover]:text-gray-100 data-[hover]:bg-gray-700 data-[hover]:dark:bg-gray-700 data-[selected]:bg-gray-900 data-[selected]:text-gray-100 data-[selected]:dark:text-gray-900 data-[selected]:dark:bg-gray-100 data-[selected]:data-[hover]:bg-gray-500 data-[selected]:data-[hover]:dark:bg-gray-300 focus:outline-none data-[focus]:outline-1 data-[focus]:outline-gray-100"
              >
                Облачная версия
              </Tab>
              <Tab
                  key='box'
                  className="rounded-full py-1 px-3 text-sm/6 font-semibold text-gray-900 bg-gray-200 dark:text-gray-100 dark:bg-gray-800 data-[hover]:text-gray-100 data-[hover]:bg-gray-700 data-[hover]:dark:bg-gray-700 data-[selected]:bg-gray-900 data-[selected]:text-gray-100 data-[selected]:dark:text-gray-900 data-[selected]:dark:bg-gray-100 data-[selected]:data-[hover]:bg-gray-500 data-[selected]:data-[hover]:dark:bg-gray-300 focus:outline-none data-[focus]:outline-1 data-[focus]:outline-gray-100"
              >
                Коробочная версия
              </Tab>
            </TabList>
            <TabPanels className="mt-6 w-full">
              <TabPanel key="cloud" className="rounded-xl w-full">
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">

                  <div
                      className="bg-gray-100 dark:bg-gray-800 rounded-xl p-6 transform hover:scale-105 transition duration-300">
                    <div className="mb-2">
                      <svg className='size-16' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"
                           color="currentColor"
                           fill="none">
                        <path
                            d="M2 10L7 4M7 4L12.4142 9.41421C12.7032 9.70324 12.8478 9.84776 13.0315 9.92388C13.2153 10 13.4197 10 13.8284 10H22L18.1994 5.43926C17.6096 4.73152 17.3147 4.37764 16.9116 4.18882C16.5084 4 16.0478 4 15.1265 4H7Z"
                            stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M11 8V20H3V8.85714" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                              stroke-linejoin="round"/>
                        <path d="M11 20H21V9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                              stroke-linejoin="round"/>
                        <path d="M4 7.5V4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                              stroke-linejoin="round"/>
                        <path d="M7.00801 12L6.99902 12" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                              stroke-linejoin="round"/>
                        <path d="M7 20V16" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                              stroke-linejoin="round"/>
                        <path d="M15 14L17 14" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                              stroke-linejoin="round"/>
                      </svg>
                      <h3 className="mt-2  text-lg font-semibold">Базовый</h3>
                      <p className="hidden mt-4 text-gray-600 dark:text-gray-300">Для небольших отделов продаж и микробизнесов
                        до 5 человек</p>
                    </div>
                    <div className="mb-4">
                      <span className="text-xl font-bold">1 990 ₽</span>
                      <span className="text-base font-medium text-gray-400">/мес.</span>
                    </div>
                    <ShortFormFW/>
                    <ul className="pl-4 !list-disc mt-4 space-y-4 text-base font-medium">
                      <li className="">
                        <span>5 пользвателей</span>
                      </li>
                      <li className=" ">
                        <span>24 Гб в облаке</span>
                      </li>
                      <li className="">
                        <span>CRM</span>
                      </li>
                      <li className="">
                        <span>Задачи и проекты</span>
                      </li>
                    </ul>
                  </div>

                  <div
                      className="bg-gray-100 dark:bg-gray-800 rounded-xl p-6 transform hover:scale-105 transition duration-300">
                    <div className="mb-2">
                      <svg className='size-16' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="currentColor"
                           fill="none">
                        <path d="M13 2L2 7" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                              stroke-linejoin="round"/>
                        <path d="M12 3V22H7C5.11438 22 4.17157 22 3.58579 21.4142C3 20.8284 3 19.8856 3 18V7"
                              stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M12 7L22 12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                              stroke-linejoin="round"/>
                        <path
                            d="M10 21.9997H17C18.8856 21.9997 19.8284 21.9997 20.4142 21.4139C21 20.8281 21 19.8853 21 17.9997V11.5"
                            stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M18 10L18 7" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                              stroke-linejoin="round"/>
                        <path d="M7 11H8M7 15H8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                              stroke-linejoin="round"/>
                        <path d="M16 14H17" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                              stroke-linejoin="round"/>
                        <path d="M16.5 22V18" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                              stroke-linejoin="round"/>
                      </svg>
                      <h3 className="mt-2 text-lg font-semibold">Стандартный</h3>
                      <p className="hidden mt-4 text-gray-600 dark:text-gray-300">Для больших отделов продаж и рабочих групп до
                        50 человек</p>
                    </div>
                    <div className="mb-4">
                      <span className="text-xl font-bold">5 590 ₽</span>
                      <span className="text-base font-medium text-gray-400">/мес.</span>
                    </div>
                    <ShortFormFW/>
                    <div className="font-bold mt-4 mb-3 text-base">
                      Все, что в Базовом +
                    </div>
                    <ul className="pl-4 !list-disc  space-y-4 text-base font-medium">
                      <li >
                        <span>50 пользвателей</span>
                      </li>
                      <li className="">
                        <span>100 Гб в облаке</span>
                      </li>
                      <li className="">
                        <span>Маркетинг</span>
                      </li>
                      <li className="">
                        <span>Документы онлайн</span>
                      </li>
                    </ul>
                  </div>

                  <div
                      className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6 transform hover:scale-105 transition duration-300">
                    <div className="mb-2">
                      <div className="flex flex-row flex-nowrap items-end">
                        <svg className='size-16' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24"
                             height="24" color="currentColor"
                             fill="none">
                          <path
                              d="M14 22V8C14 5.17157 14 3.75736 13.1213 2.87868C12.2426 2 10.8284 2 8 2C5.17157 2 3.75736 2 2.87868 2.87868C2 3.75736 2 5.17157 2 8V16C2 18.8284 2 20.2426 2.87868 21.1213C3.75736 22 5.17157 22 8 22H14Z"
                              stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
                          <path d="M6.5 11H5.5M10.5 11H9.5M6.5 7H5.5M6.5 15H5.5M10.5 7H9.5M10.5 15H9.5"
                                stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
                          <path d="M18.5 15H17.5M18.5 11H17.5" stroke="currentColor" stroke-width="1.5"
                                stroke-linecap="round"/>
                          <path
                              d="M18 8H14V22H18C19.8856 22 20.8284 22 21.4142 21.4142C22 20.8284 22 19.8856 22 18V12C22 10.1144 22 9.17157 21.4142 8.58579C20.8284 8 19.8856 8 18 8Z"
                              stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
                        </svg>
                        <div className='ml-2 p-3 badge badge-success text-gray-50 font-bold'>
                          Популярно
                        </div>
                      </div>
                      <h3 className="mt-2 text-lg hyphens-manual font-semibold">Профессиональ&shy;ный</h3>
                      <p className="hidden mt-4 text-gray-600 dark:text-gray-300">Для компаний или департамента любого
                        типа до
                        100 пользователей.</p>
                    </div>
                    <div className="mb-4">
                      <span className="text-xl font-bold">11 190 ₽</span>
                      <span className="text-base font-medium text-gray-400">/мес.</span>
                    </div>
                    <ShortFormFW/>
                    <div className="font-bold mt-4 mb-3 text-base">
                      Все, что в Стандартном +
                    </div>
                    <ul className="pl-4 !list-disc  space-y-4 text-base font-medium">
                      <li className="">
                        <span>100 пользвателей</span>
                      </li>
                      <li className="">
                        <span>1 Тб в облаке</span>
                      </li>
                      <li className="">
                        <span>Сквозная аналитика</span>
                      </li>
                      <li className="">
                        <span>Бизнес - процессы</span>
                      </li>
                    </ul>

                  </div>

                  <div
                      className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6 transform hover:scale-105 transition duration-300">
                    <div className="mb-2">
                      <svg className='size-16' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24"
                           height="24" color="currentColor"
                           fill="none">
                        <path d="M14 8H10C7.518 8 7 8.518 7 11V22H17V11C17 8.518 16.482 8 14 8Z" stroke="currentColor"
                              stroke-width="1.5" stroke-linejoin="round"/>
                        <path d="M11 12L13 12M11 15H13M11 18H13" stroke="currentColor" stroke-width="1.5"
                              stroke-linecap="round" stroke-linejoin="round"/>
                        <path
                            d="M21 22V8.18564C21 6.95735 21 6.3432 20.7013 5.84966C20.4026 5.35612 19.8647 5.08147 18.7889 4.53216L14.4472 2.31536C13.2868 1.72284 13 1.93166 13 3.22873V7.7035"
                            stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M3 22V13C3 12.1727 3.17267 12 4 12H7" stroke="currentColor" stroke-width="1.5"
                              stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M22 22H2" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                              stroke-linejoin="round"/>
                      </svg>
                      <h3 className="mt-2 text-lg font-semibold">Энтерпрайз</h3>
                      <p className="hidden mt-4 text-gray-600 dark:text-gray-300">Для компаний с высоким оборотом и
                        большим
                        количеством
                        сотрудников.</p>
                    </div>
                    <div className="mb-4">
                      <span className="text-xl font-bold">от 27 190 ₽</span>
                      <span className="text-base font-medium text-gray-400">/мес.</span>
                    </div>
                    <ShortFormFW/>
                    <div className="font-bold mt-4 mb-3 text-base">
                      Все, что в Профессиональном +
                    </div>
                    <ul className="pl-4 !list-disc  space-y-4 text-base font-medium">
                      <li className="">
                        <span>от 250 пользвателей</span>
                      </li>
                      <li className="">
                        <span>3 Тб в облаке</span>
                      </li>
                      <li className="">
                        <span>Филиалы</span>
                      </li>
                      <li className="">
                        <span>Энтерпрайз-кластер</span>
                      </li>
                    </ul>
                  </div>

                </div>
              </TabPanel>
              <TabPanel key="cloud" className="rounded-xl w-full">
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                  <div
                      className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6 transform hover:scale-105 transition duration-300">
                    <div className="mb-2">
                      <svg className='size-16' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="currentColor"
                           fill="none">
                        <path
                            d="M7 9L11.7707 4.73514C13.0647 3.57838 13.7117 3 14.5 3C15.2883 3 15.9353 3.57838 17.2293 4.73514L22 9"
                            stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M8.5 8V20M20.5 20V8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                              stroke-linejoin="round"/>
                        <ellipse cx="3.5" cy="12" rx="1.5" ry="2" stroke="currentColor" stroke-width="1.5"/>
                        <path d="M3.5 14V20" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
                        <path d="M2 20H22" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                              stroke-linejoin="round"/>
                        <path
                            d="M12 20V15.9997C12 15.0571 12 14.5858 12.2929 14.2929C12.5858 14 13.0572 14 14 14H15C15.9428 14 16.4142 14 16.7071 14.2929C17 14.5858 17 15.0572 17 16V20"
                            stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M13.5 11H15.5M13.5 8H15.5" stroke="currentColor" stroke-width="1.5"
                              stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>
                      <h3 className="mt-2 text-lg font-semibold">Интернет-магазин + CRM</h3>
                      <p className="hidden mt-4 text-gray-400">Для работы отдела продаж до 12 человек в
                        eCommerce-платформе.</p>
                    </div>
                    <div className="mb-4">
                      <span className="text-xl font-bold">109 000 ₽</span>
                      <span className="text-base font-medium text-gray-400">/год.</span>
                    </div>
                    <ShortFormFW/>
                    <ul className="pl-4 !list-disc mt-4 space-y-4 text-base font-medium">
                      <li className="">
                        <span>12 пользвателей</span>
                      </li>
                      <li className="">
                        <span>Экстранет</span>
                      </li>
                      <li className="">
                        <span>eCommerce-платформа</span>
                      </li>
                      <li className="">
                        <span>HRM</span>
                      </li>
                    </ul>
                  </div>

                  <div
                      className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6 transform hover:scale-105 transition duration-300">
                    <div className="mb-2">
                      <div className="flex flex-row flex-nowrap items-end">
                        <svg className='size-16' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24"
                             height="24" color="currentColor"
                             fill="none">
                          <path
                              d="M12 22V6C12 4.11438 12 3.17157 11.4142 2.58579C10.8284 2 9.88562 2 8 2H6C4.11438 2 3.17157 2 2.58579 2.58579C2 3.17157 2 4.11438 2 6V18C2 19.8856 2 20.8284 2.58579 21.4142C3.17157 22 4.11438 22 6 22H12Z"
                              stroke="currentColor" stroke-width="1.5"/>
                          <path
                              d="M12 22H18C19.8856 22 20.8284 22 21.4142 21.4142C22 20.8284 22 19.8856 22 18V12C22 10.1144 22 9.17157 21.4142 8.58579C20.8284 8 19.8856 8 18 8H12"
                              stroke="currentColor" stroke-width="1.5"/>
                          <path d="M18.5 16H15.5M18.5 12L15.5 12" stroke="currentColor" stroke-width="1.5"
                                stroke-linecap="round"/>
                          <path d="M8.5 14H5.5M8.5 10H5.5M8.5 6H5.5" stroke="currentColor" stroke-width="1.5"
                                stroke-linecap="round"/>
                        </svg>
                        <div className='ml-2 p-3 badge badge-success text-gray-50 font-bold'>
                          Популярно
                        </div>
                      </div>
                      <h3 className="mt-2 text-lg font-semibold">Корпоративный портал</h3>
                      <p className="hidden mt-4 text-gray-400">Для компаний или департамента любого типа и размера.</p>
                    </div>
                    <div className="mb-4">
                      <span className="text-xl font-bold">от 159 000 ₽</span>
                      <span className="text-base font-medium text-gray-400">/год.</span>
                    </div>
                    <ShortFormFW/>
                    <ul className="pl-4 !list-disc mt-4 space-y-4 text-base font-medium">
                      <li>
                        <span>от 50 пользвателей</span>
                      </li>
                      <li>
                        <span>Документы Онлайн</span>
                      </li>
                      <li>
                        <span>Active Directory + NTLM</span>
                      </li>
                      <li>
                      <span>Зарплатные листки и отпуска</span>
                      </li>
                    </ul>
                  </div>

                  <div
                      className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6 transform hover:scale-105 transition duration-300">
                    <div className="mb-2">
                      <svg className='size-16' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24"
                           height="24" color="currentColor"
                           fill="none">
                        <path d="M14 8H10C7.518 8 7 8.518 7 11V22H17V11C17 8.518 16.482 8 14 8Z" stroke="currentColor"
                              stroke-width="1.5" stroke-linejoin="round"/>
                        <path d="M11 12L13 12M11 15H13M11 18H13" stroke="currentColor" stroke-width="1.5"
                              stroke-linecap="round" stroke-linejoin="round"/>
                        <path
                            d="M21 22V8.18564C21 6.95735 21 6.3432 20.7013 5.84966C20.4026 5.35612 19.8647 5.08147 18.7889 4.53216L14.4472 2.31536C13.2868 1.72284 13 1.93166 13 3.22873V7.7035"
                            stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M3 22V13C3 12.1727 3.17267 12 4 12H7" stroke="currentColor" stroke-width="1.5"
                              stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M22 22H2" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                              stroke-linejoin="round"/>
                      </svg>
                      <h3 className="mt-2 text-lg font-semibold">Энтерпрайз</h3>
                      <p className="hidden mt-4 text-gray-400">Для компаний с высоким оборотом и большим количеством
                        сотрудников.</p>
                    </div>
                    <div className="mb-4">
                      <span className="text-xl font-bold">от 1 299 000 ₽</span>
                      <span className="text-base font-medium text-gray-400">/год.</span>
                    </div>
                    <ShortFormFW/>
                    <ul className="pl-4 !list-disc mt-4 space-y-4 text-base font-medium">
                      <li>
                        <span>от 1000 пользвателей</span>
                      </li>
                      <li>
                        <span>Веб-кластер</span>
                      </li>
                      <li>
                        <span>Многодепартаментность</span>
                      </li>
                      <li>
                        <span>VIP поддержка 24/7</span>
                      </li>
                    </ul>
                  </div>

                </div>
              </TabPanel>
            </TabPanels>
          </TabGroup>
        </div>
        <div className="max-w-7xl py-20 mx-auto">
          <h2 className='text-3xl md:text-4xl font-black leading-9 tracking-tight text-gray-900 dark:text-gray-100 mb-4'>Стоимость
            внедрения Битрикс24</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link href="/implementation/package"
                  className="flex flex-col bg-gray-100 dark:bg-gray-800 p-8 rounded-xl hover:scale-105 transition duration-300">
              <svg className='size-14' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="currentColor"
                   fill="none">
                <path
                    d="M12 22C11.1818 22 10.4002 21.6698 8.83693 21.0095C4.94564 19.3657 3 18.5438 3 17.1613C3 16.7742 3 10.0645 3 7M12 22C12.8182 22 13.5998 21.6698 15.1631 21.0095C19.0544 19.3657 21 18.5438 21 17.1613V7M12 22L12 11.3548"
                    stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path
                    d="M8.32592 9.69138L5.40472 8.27785C3.80157 7.5021 3 7.11423 3 6.5C3 5.88577 3.80157 5.4979 5.40472 4.72215L8.32592 3.30862C10.1288 2.43621 11.0303 2 12 2C12.9697 2 13.8712 2.4362 15.6741 3.30862L18.5953 4.72215C20.1984 5.4979 21 5.88577 21 6.5C21 7.11423 20.1984 7.5021 18.5953 8.27785L15.6741 9.69138C13.8712 10.5638 12.9697 11 12 11C11.0303 11 10.1288 10.5638 8.32592 9.69138Z"
                    stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M6 12L8 13" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                      stroke-linejoin="round"/>
                <path d="M17 4L7 9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                      stroke-linejoin="round"/>
              </svg>
              <div className='py-6 w-full'>
                <div className='text-2xl font-bold'>
                  Пакетное внедрение
                </div>
                <div className='text-base font-normal max-w-2xl'>
                  Готовые настройки для типовых бизнес-задач.
                </div>
              </div>
              <div className='flex flex-row items-center'>
                <div className='flex flex-row items-top mr-4 flex-nowrap'>
                      <span className='text-sm font-semibold text-gray-600 dark:text-gray-300 mr-1 leading-5'>
                          от
                      </span>
                  <div className='text-3xl font-black'>
                    30 000 ₽
                  </div>
                </div>
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 42 42"
                       fill="currentColor" className="size-7 text-gray-600 dark:text-gray-100">
                    <path clipRule="evenodd"
                          d="M2.625 21C2.625 20.6519 2.76328 20.3181 3.00942 20.0719C3.25556 19.8258 3.5894 19.6875 3.9375 19.6875H34.8941L26.6332 11.4292C26.3868 11.1828 26.2483 10.8485 26.2483 10.5C26.2483 10.1515 26.3868 9.8172 26.6332 9.57074C26.8797 9.32429 27.214 9.18584 27.5625 9.18584C27.911 9.18584 28.2453 9.32429 28.4918 9.57074L38.9918 20.0707C39.114 20.1927 39.211 20.3375 39.2771 20.497C39.3433 20.6564 39.3773 20.8274 39.3773 21C39.3773 21.1726 39.3433 21.3436 39.2771 21.503C39.211 21.6625 39.114 21.8073 38.9918 21.9292L28.4918 32.4292C28.2453 32.6757 27.911 32.8142 27.5625 32.8142C27.214 32.8142 26.8797 32.6757 26.6332 32.4292C26.3868 32.1828 26.2483 31.8485 26.2483 31.5C26.2483 31.1515 26.3868 30.8172 26.6332 30.5707L34.8941 22.3125H3.9375C3.5894 22.3125 3.25556 22.1742 3.00942 21.9281C2.76328 21.6819 2.625 21.3481 2.625 21Z"/>
                  </svg>
                </div>
              </div>
            </Link>
            <Link href="/implementation/project" className="flex flex-col bg-gray-100 dark:bg-gray-800 p-8 rounded-xl hover:scale-105 transition duration-300">
              <svg className='size-14' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="currentColor"
                   fill="none">
                <path
                    d="M12.828 6.00096C12.9388 5.68791 12.999 5.35099 12.999 5C12.999 3.34315 11.6559 2 9.99904 2C8.34219 2 6.99904 3.34315 6.99904 5C6.99904 5.35099 7.05932 5.68791 7.17008 6.00096C4.88532 6.0093 3.66601 6.09039 2.87772 6.87868C2.08951 7.66689 2.00836 8.88603 2 11.1704C2.31251 11.06 2.64876 11 2.99904 11C4.6559 11 5.99904 12.3431 5.99904 14C5.99904 15.6569 4.6559 17 2.99904 17C2.64876 17 2.31251 16.94 2 16.8296C2.00836 19.114 2.08951 20.3331 2.87772 21.1213C3.66593 21.9095 4.88508 21.9907 7.16941 21.999C7.05908 21.6865 6.99904 21.3503 6.99904 21C6.99904 19.3431 8.34219 18 9.99904 18C11.6559 18 12.999 19.3431 12.999 21C12.999 21.3503 12.939 21.6865 12.8287 21.999C15.113 21.9907 16.3322 21.9095 17.1204 21.1213C17.9086 20.333 17.9897 19.1137 17.9981 16.829C18.3111 16.9397 18.648 17 18.999 17C20.6559 17 21.999 15.6569 21.999 14C21.999 12.3431 20.6559 11 18.999 11C18.648 11 18.3111 11.0603 17.9981 11.171C17.9897 8.88627 17.9086 7.66697 17.1204 6.87868C16.3321 6.09039 15.1128 6.0093 12.828 6.00096Z"
                    stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>
              </svg>
              <div className='py-6 w-full'>
                <div className='text-2xl font-bold'>
                  Проектное внедрение
                </div>
                <div className='text-base font-normal max-w-2xl'>
                  Индивидуальные решения для крупных организаций.
                </div>
              </div>
              <div className='flex flex-row items-center'>
                <div className='flex flex-row items-top mr-4'>
                      <span className='text-md font-semibold text-gray-600 dark:text-gray-300 mr-1 leading-5'>
                          от
                      </span>
                  <div className='text-3xl font-black'>
                    500 000 ₽
                  </div>
                </div>
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 42 42"
                       fill="currentColor" className="size-7 text-gray-600 dark:text-gray-100">
                    <path clipRule="evenodd"
                          d="M2.625 21C2.625 20.6519 2.76328 20.3181 3.00942 20.0719C3.25556 19.8258 3.5894 19.6875 3.9375 19.6875H34.8941L26.6332 11.4292C26.3868 11.1828 26.2483 10.8485 26.2483 10.5C26.2483 10.1515 26.3868 9.8172 26.6332 9.57074C26.8797 9.32429 27.214 9.18584 27.5625 9.18584C27.911 9.18584 28.2453 9.32429 28.4918 9.57074L38.9918 20.0707C39.114 20.1927 39.211 20.3375 39.2771 20.497C39.3433 20.6564 39.3773 20.8274 39.3773 21C39.3773 21.1726 39.3433 21.3436 39.2771 21.503C39.211 21.6625 39.114 21.8073 38.9918 21.9292L28.4918 32.4292C28.2453 32.6757 27.911 32.8142 27.5625 32.8142C27.214 32.8142 26.8797 32.6757 26.6332 32.4292C26.3868 32.1828 26.2483 31.8485 26.2483 31.5C26.2483 31.1515 26.3868 30.8172 26.6332 30.5707L34.8941 22.3125H3.9375C3.5894 22.3125 3.25556 22.1742 3.00942 21.9281C2.76328 21.6819 2.625 21.3481 2.625 21Z"/>
                  </svg>
                </div>
              </div>
            </Link>
          </div>
        </div>

        <div className="max-w-7xl py-20 mx-auto">
          <h2 className='text-3xl md:text-4xl font-black leading-9 tracking-tight text-gray-900 dark:text-gray-100 mb-4'>
            Преимущества Битрикс24 перед другими системами</h2>
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
            <div className="col-span-2 grid lg:grid-cols-2 gap-4">
              <div className="hover:scale-105 transition duration-300 bg-gray-100 dark:bg-gray-900 rounded-xl p-8">
                <span className="font-black text-3xl">01.</span>
                <div className="font-bold text-xl">Отсутствие вложений</div>
                <div className="text-base">
                  В Битрикс24 работа доступна сразу после регистрации.
                </div>
              </div>
              <div className="hover:scale-105 transition duration-300 bg-gray-100 dark:bg-gray-900 rounded-xl p-8">
                <span className="font-black text-3xl">02.</span>
                <div className="font-bold text-xl">Контроль и автоматизация</div>
                <div className="text-base">
                  Есть все инструменты для реализации автоматизации бизнес-процессов.
                </div>
              </div>
              <div className="hover:scale-105 transition duration-300 bg-gray-100 dark:bg-gray-900 rounded-xl p-8">
                <span className="font-black text-3xl">03.</span>
                <div className="font-bold text-xl">Аналитика</div>
                <div className="text-base">
                  Битрикс24 предоставляет глубокий анализ и статистику по всем процессам.
                </div>
              </div>
              <div className="hover:scale-105 transition duration-300 bg-gray-100 dark:bg-gray-900 rounded-xl p-8">
                <span className="font-black text-3xl">04.</span>
                <div className="font-bold text-xl">Простота интеграции с 1С</div>
                <div className="text-base">
                  Легко интегрируется с 1С, обеспечивая надежный обмен данными.
                </div>
              </div>
            </div>
            <div
                className="hover:scale-105 transition duration-300 col-span-2 bg-gray-100 dark:bg-gray-900 rounded-xl p-8 lg:p-10 items-center justify-center flex flex-col">
              <svg className="lg:!w-80 w-56" xmlns="http://www.w3.org/2000/svg" width="344" height="61" viewBox="0 0 344 61" fill="none">
                <path
                    d="M233.744 44.8082H264.792V37.9282H244.328C247.151 26.6379 264.439 24.1682 264.439 11.6431C264.439 4.93949 259.852 0 250.15 0C244.152 0 238.86 1.7641 235.331 3.52821L237.448 9.87897C240.624 8.29128 244.328 6.88 248.915 6.88C252.443 6.88 255.795 8.46769 255.795 12.5251C255.795 21.6985 235.508 22.4041 233.744 44.8082ZM265.674 33.8708H285.608V44.8082H293.547V33.8708H300.25V27.1672H293.547V0H287.725L265.674 28.5785V33.8708ZM274.671 27.52L285.961 12.3487C285.961 13.5836 285.608 17.4646 285.608 20.9928V27.3436H280.316C278.728 27.3436 275.729 27.52 274.671 27.52Z"
                    fill="#005893"/>
                <path
                    d="M8.29128 38.1047V24.1683H11.6431C14.6421 24.1683 17.1118 24.5211 18.8759 25.5796C20.64 26.6381 21.6985 28.4022 21.6985 31.2247C21.6985 35.9878 18.8759 38.1047 12.1723 38.1047H8.29128ZM0.17641 44.8083H11.9959C25.2267 44.8083 29.9897 38.9868 29.9897 30.8719C29.9897 25.4032 27.6964 21.6986 23.639 19.5816C20.4636 17.8175 16.4062 17.2883 11.4667 17.2883H8.29128V6.70369H26.1087L28.2256 0.176514H0V44.8083H0.17641ZM35.4585 44.8083H43.2205L53.2759 30.3427C55.2164 27.6965 56.6277 25.0504 57.5097 23.6391H57.6862C57.5097 25.5796 57.3333 28.0493 57.3333 30.5191V44.6319H65.2718V12.8781H57.5097L47.4544 27.3437C45.6903 29.9898 44.1026 32.636 43.2205 34.0473H43.0441C43.2205 32.1068 43.3969 29.637 43.3969 27.1673V13.0545H35.4585V44.8083ZM78.8554 44.8083H86.9702V19.5816H96.4964L98.6133 12.8781H69.1528V19.5816H78.8554V44.8083ZM101.436 60.8616H109.374V44.8083C110.962 45.3375 112.55 45.5139 114.314 45.5139C124.369 45.5139 130.896 38.6339 130.896 28.755C130.896 18.5232 124.898 11.996 113.432 11.996C109.022 11.996 104.788 12.8781 101.259 13.9365V60.8616H101.436ZM109.374 37.9283V19.2288C110.609 18.876 111.668 18.6996 113.079 18.6996C118.901 18.6996 122.605 21.875 122.605 28.755C122.605 34.9293 119.606 38.8104 113.608 38.8104C112.021 38.8104 110.786 38.4575 109.374 37.9283ZM135.659 44.8083H143.422L153.477 30.3427C155.417 27.6965 156.829 25.0504 157.711 23.6391H157.887C157.711 25.5796 157.534 28.0493 157.534 30.5191V44.6319H165.473V12.8781H157.711L147.655 27.3437C145.891 29.9898 144.304 32.636 143.422 34.0473H143.245C143.422 32.1068 143.598 29.637 143.598 27.1673V13.0545H135.659V44.8083ZM171.824 44.8083H179.938V31.5775H184.702C185.584 31.5775 186.466 32.4596 187.524 34.5765L191.582 44.8083H200.226L194.404 32.636C193.346 30.5191 192.287 29.2842 190.699 28.755V28.5786C193.346 26.9909 193.698 22.4042 195.286 20.1109C195.815 19.4052 196.521 19.0524 197.579 19.0524C198.109 19.0524 198.814 19.0524 199.344 19.4052V12.5252C198.462 12.1724 196.874 11.996 195.992 11.996C193.169 11.996 191.405 13.0545 190.17 14.8186C187.524 18.6996 187.524 25.4032 183.643 25.4032H179.938V12.8781H171.824V44.8083ZM218.219 45.5139C222.63 45.5139 226.687 44.1027 229.157 42.3386L226.864 36.8698C224.57 38.1047 222.453 38.9868 219.454 38.9868C213.986 38.9868 210.457 35.4586 210.457 28.9314C210.457 23.1098 213.986 18.5232 219.984 18.5232C223.159 18.5232 225.452 19.4052 227.746 20.9929V14.1129C225.982 13.0545 223.159 11.996 219.102 11.996C209.575 11.996 202.166 19.0524 202.166 29.1078C202.166 38.2811 207.811 45.5139 218.219 45.5139Z"
                    fill="#0BBBEF"/>
                <path
                    d="M326.535 33.8708C335.18 33.8708 342.236 26.8143 342.236 18.1702C342.236 9.52614 335.18 2.46973 326.535 2.46973C317.891 2.46973 310.835 9.52614 310.835 18.1702C311.011 26.8143 317.891 33.8708 326.535 33.8708Z"
                    stroke="#005893" strokeWidth="1.769"/>
                <path d="M336.414 18.1702H327.77V9.52612H325.477V20.4636H336.414V18.1702Z" fill="#005893"/>
              </svg>
              <p className={"mt-4 font-medium"}>
                Битрикс24 - это онлайн-сервис, в котором собраны все нужные инструменты для работы компании и управления
                бизнесом. Перенесите в единое пространство и автоматизируйте все рабочие коммуникации, продажи, проекты
                и бизнес-процессы.
              </p>
              <div className={'flex flex-col items-center mt-4'}>
                <div className="flex flex-col md:flex-row gap-2 items-center mb-2">
                  <div className='ml-2 p-3 badge badge-warning text-gray-50 font-bold'>
                    CRM
                  </div>
                  <div className='ml-2 p-3 badge text-gray-50 badge-neutral font-bold'>
                    Аналитика
                  </div>
                </div>
                <div className="flex flex-col lg:flex-row items-center gap-2">
                  <div className='ml-2 p-3 badge badge-error text-gray-50 font-bold'>
                    Задачи
                  </div>
                  <div className='ml-2 p-3 badge badge-error text-gray-50 font-bold'>
                    Проекты
                  </div>
                  <div className='ml-2 p-3 badge badge-success text-gray-50 font-bold'>
                    Интеграции
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <CallBlock/>
      </>
  )
}
