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
    title: '1С-Битрикс: Управление сайтом',
    description: '«1С-Битрикс: Управление сайтом» — это профессиональная платформа для управления веб-проектами, универсальный инструмент для создания, поддержки и успешного развития вебсайтов и интернет-магазинов любого масштаба.',
    openGraph: {
      title: '1С-Битрикс: Управление сайтом',
      description: '«1С-Битрикс: Управление сайтом» — это профессиональная платформа для управления веб-проектами, универсальный инструмент для создания, поддержки и успешного развития вебсайтов и интернет-магазинов любого масштаба.',
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
              1С-Битрикс: Управление сайтом
            </h1>
            <h2 className='text-xl mb-4'>
              «1С-Битрикс: Управление сайтом» — это профессиональная платформа для управления веб-проектами,
              универсальный инструмент для создания, поддержки и успешного развития вебсайтов и интернет-магазинов
              любого масштаба.
            </h2>
            <ShortForm></ShortForm>
          </div>
          <div
              className='grid lg:row-end-auto row-end-1 lg:justify-end lg:justify-items-end justify-start justify-items-start'>
            <img className="mb-4 w-full max-h-80 lg:max-h-96" src={'/static/images/1c-bitrix.png'}></img>
          </div>
        </header>
        <div className="max-w-none py-10">
          <h2 className="text-3xl md:text-4xl font-black leading-9 tracking-tight text-gray-900 dark:text-gray-100 mb-4">
            Описание
          </h2>
          <p className="text-lg">
            «1С-Битрикс: Управление сайтом» является ведущей коммерческой CMS по числу реальных установок на
            вебсайтах, согласно рейтингу iTrack (на март 2021 года). Сайты на базе платформы "1C-Bitrix"
            гарантированно обеспечивают удобство, надежность и высокую посещаемость.
          </p>
        </div>
        <div className="max-w-7xl py-20 mx-auto ">
          <div className='grid md:grid-cols-4 grid-cols-2 gap-8'>
            <div className="">
              <svg className="size-16 mr-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24"
                   height="24" color="currentColor"
                   fill="none">
                <path
                    d="M2.9668 10.4961V15.4979C2.9668 18.3273 2.9668 19.742 3.84548 20.621C4.72416 21.5001 6.13837 21.5001 8.9668 21.5001H14.9668C17.7952 21.5001 19.2094 21.5001 20.0881 20.621C20.9668 19.742 20.9668 18.3273 20.9668 15.4979V10.4961"
                    stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
                <path
                    d="M14.9668 16.9932C14.2827 17.6004 13.1936 17.9932 11.9668 17.9932C10.74 17.9932 9.65089 17.6004 8.9668 16.9932"
                    stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
                <path
                    d="M10.1038 8.41848C9.82182 9.43688 8.79628 11.1936 6.84777 11.4482C5.12733 11.673 3.82246 10.922 3.48916 10.608C3.12168 10.3534 2.28416 9.53872 2.07906 9.02952C1.87395 8.52032 2.11324 7.41706 2.28416 6.96726L2.96743 4.98888C3.13423 4.49196 3.5247 3.31666 3.92501 2.91913C4.32533 2.5216 5.13581 2.5043 5.4694 2.5043H12.4749C14.2781 2.52978 18.2209 2.48822 19.0003 2.50431C19.7797 2.52039 20.2481 3.17373 20.3848 3.45379C21.5477 6.27061 22 7.88382 22 8.57124C21.8482 9.30456 21.22 10.6873 19.0003 11.2955C16.6933 11.9275 15.3854 10.6981 14.9751 10.2261M9.15522 10.2261C9.47997 10.625 10.4987 11.4279 11.9754 11.4482C13.4522 11.4686 14.7273 10.4383 15.1802 9.92062C15.3084 9.76786 15.5853 9.31467 15.8725 8.41848"
                    stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <h3 className="mt-4 text-2xl break-words font-black !leading-7 tracking-tight text-gray-900 dark:text-gray-100 mb-4">
                Для интернет-магазинов
              </h3>
              <p className="hidden text-lg font-medium">
                Треть из всех интернет-магазинов в России работает на «1С-Битрикс: Управление сайтом».
                <br/>
                Хотите начать получать прибыль уже сегодня? Наши удобные инструменты, готовые решения и встроенные
                интеграции помогут вам быстро запустить современный интернет-магазин любой специализации.
              </p>
            </div>
            <div className="">
              <svg className="size-16 mr-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24"
                   height="24" color="currentColor"
                   fill="none">
                <path d="M12 15L12 16.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                      stroke-linejoin="round"/>
                <path
                    d="M3 11L3.15288 13.8633C3.31714 17.477 3.39927 19.2839 4.55885 20.3919C5.71843 21.5 7.52716 21.5 11.1446 21.5H12.8554C16.4728 21.5 18.2816 21.5 19.4412 20.3919C20.6007 19.2839 20.6829 17.477 20.8471 13.8633L21 11"
                    stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path
                    d="M2.84718 10.4431C4.54648 13.6744 8.3792 15 12 15C15.6208 15 19.4535 13.6744 21.1528 10.4431C21.964 8.90056 21.3498 6 19.352 6H4.648C2.65023 6 2.03603 8.90056 2.84718 10.4431Z"
                    stroke="currentColor" stroke-width="1.5"/>
                <path
                    d="M16 6L15.9117 5.69094C15.4717 4.15089 15.2517 3.38087 14.7279 2.94043C14.2041 2.5 13.5084 2.5 12.117 2.5H11.883C10.4916 2.5 9.79587 2.5 9.2721 2.94043C8.74832 3.38087 8.52832 4.15089 8.0883 5.69094L8 6"
                    stroke="currentColor" stroke-width="1.5"/>
              </svg>
              <h3 className="mt-4 text-2xl break-words font-black !leading-7 tracking-tight text-gray-900 dark:text-gray-100 mb-4">
                Для бизнеса любого уровня
              </h3>
              <p className="hidden text-lg">
                Обширный функционал нашей платформы позволит вам в кратчайшие сроки запустить полноценное
                интернет-представительство компании - от среднего корпоративного сайта до крупного мультирегионального
                портала с каталогом продукции.
              </p>
            </div>
            <div className="">
              <svg className="!size-16 mr-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24"
                   height="24"
                   color="currentColor  "
                   fill="none">
                <path
                    d="M18 15V9C18 6.17157 18 4.75736 17.1213 3.87868C16.2426 3 14.8284 3 12 3H8C5.17157 3 3.75736 3 2.87868 3.87868C2 4.75736 2 6.17157 2 9V15C2 17.8284 2 19.2426 2.87868 20.1213C3.75736 21 5.17157 21 8 21H20"
                    stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M6 8L14 8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                      stroke-linejoin="round"/>
                <path d="M6 12L14 12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                      stroke-linejoin="round"/>
                <path d="M6 16L10 16" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                      stroke-linejoin="round"/>
                <path
                    d="M18 8H19C20.4142 8 21.1213 8 21.5607 8.43934C22 8.87868 22 9.58579 22 11V19C22 20.1046 21.1046 21 20 21C18.8954 21 18 20.1046 18 19V8Z"
                    stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <h3 className="mt-4 text-2xl hyphens-manual font-black !leading-7 tracking-tight text-gray-900 dark:text-gray-100 mb-4">
                Для СМИ и инфопорта&shy;лов
              </h3>
              <p className="hidden text-lg">
                Наша платформа идеально подходит для создания сайтов СМИ, тематических ресурсов, блогов,
                информационных
                порталов, комьюнити-сайтов. Взаимодействуйте с посетителями на форумах, проводите опросы, создавайте
                фотогалереи, рассылайте подписчикам новостные дайджесты.
              </p>
            </div>
            <div className="">
              <svg className="!size-16 mr-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24"
                   height="24" color="currentColor"
                   fill="none">
                <path
                    d="M20 14.5V6.5C20 4.61438 20 3.67157 19.4142 3.08579C18.8284 2.5 17.8856 2.5 16 2.5H8C6.11438 2.5 5.17157 2.5 4.58579 3.08579C4 3.67157 4 4.61438 4 6.5V14.5"
                    stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path
                    d="M3.49762 15.5154L4.01953 14.5H19.9518L20.5023 15.5154C21.9452 18.177 22.3046 19.5077 21.7561 20.5039C21.2077 21.5 19.7536 21.5 16.8454 21.5L7.15462 21.5C4.24642 21.5 2.79231 21.5 2.24387 20.5039C1.69543 19.5077 2.05474 18.177 3.49762 15.5154Z"
                    stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path
                    d="M15.5 7L16.4199 7.79289C16.8066 8.12623 17 8.29289 17 8.5C17 8.70711 16.8066 8.87377 16.4199 9.20711L15.5 10"
                    stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path
                    d="M8.5 7L7.58009 7.79289C7.19337 8.12623 7 8.29289 7 8.5C7 8.70711 7.19336 8.87377 7.58009 9.20711L8.5 10"
                    stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M13 6L11 11" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                      stroke-linejoin="round"/>
              </svg>
              <h3 className="mt-4 text-2xl break-words font-black !leading-7 tracking-tight text-gray-900 dark:text-gray-100 mb-4">
                Для небольших сайтов
              </h3>
            </div>
          </div>
        </div>
        <div className="max-w-7xl py-20 mx-auto">
          <h2 className="text-3xl md:text-4xl font-black leading-9 tracking-tight text-gray-900 dark:text-gray-100 mb-4">
            Тарифы и цены
          </h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">

            <div
                className="bg-gray-100 dark:bg-gray-800 rounded-xl p-6 transform hover:scale-105 transition duration-300">
              <div className="mb-2">
                <svg className='size-16' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="currentColor"
                     fill="none">
                  <path
                      d="M19 12C19 13.6569 17.6569 15 16 15C14.3431 15 13 13.6569 13 12C13 10.3431 14.3431 9 16 9C17.6569 9 19 10.3431 19 12Z"
                      stroke="currentColor" stroke-width="1.5"/>
                  <path
                      d="M16 6H8C4.68629 6 2 8.68629 2 12C2 15.3137 4.68629 18 8 18H16C19.3137 18 22 15.3137 22 12C22 8.68629 19.3137 6 16 6Z"
                      stroke="currentColor" stroke-width="1.5"/>
                </svg>
                <h3 className="mt-2  text-lg font-semibold">Старт</h3>
              </div>
              <div className="mb-4">
                <span className="text-xl font-bold">6 200 ₽</span>
              </div>
              <ShortFormFW/>
              <div className="mt-4 space-y-4 text-base font-medium">
                Для быстрого старта с минимальными вложениями
              </div>
            </div>

            <div
                className="bg-gray-100 dark:bg-gray-800 rounded-xl p-6 transform hover:scale-105 transition duration-300">
              <div className="mb-2">
                <svg className='size-16' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="currentColor"
                     fill="none">
                  <path
                      d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z"
                      stroke="currentColor" stroke-width="1.5"/>
                  <path d="M2.5 9H21.5" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>
                  <path d="M13 13L17 13" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                        stroke-linejoin="round"/>
                  <path d="M13 17H15" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                        stroke-linejoin="round"/>
                  <path d="M6.99981 6H7.00879" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                        stroke-linejoin="round"/>
                  <path d="M10.9998 6H11.0088" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                        stroke-linejoin="round"/>
                  <path d="M9 9V21.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                        stroke-linejoin="round"/>
                </svg>
                <h3 className="mt-2  text-lg font-semibold">Стандарт</h3>
              </div>
              <div className="mb-4">
                <span className="text-xl font-bold">17 900 ₽</span>
              </div>
              <ShortFormFW/>
              <div className="mt-4 space-y-4 text-base font-medium">
                Сайт для работы с клиентами с простым управлением контентом
              </div>
            </div>

            <div
                className="bg-gray-100 dark:bg-gray-800 rounded-xl p-6 transform hover:scale-105 transition duration-300">
              <div className="mb-2">
                <div className="flex flex-row flex-nowrap items-end">
                  <svg className='size-16' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="currentColor"
                       fill="none">
                    <path
                        d="M10 13.3333C10 13.0233 10 12.8683 10.0341 12.7412C10.1265 12.3961 10.3961 12.1265 10.7412 12.0341C10.8683 12 11.0233 12 11.3333 12H12.6667C12.9767 12 13.1317 12 13.2588 12.0341C13.6039 12.1265 13.8735 12.3961 13.9659 12.7412C14 12.8683 14 13.0233 14 13.3333V14C14 15.1046 13.1046 16 12 16C10.8954 16 10 15.1046 10 14V13.3333Z"
                        stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path
                        d="M13.9 13.5H15.0826C16.3668 13.5 17.0089 13.5 17.5556 13.3842C19.138 13.049 20.429 12.0207 20.9939 10.6455C21.1891 10.1704 21.2687 9.59552 21.428 8.4457C21.4878 8.01405 21.5177 7.79823 21.489 7.62169C21.4052 7.10754 20.9932 6.68638 20.4381 6.54764C20.2475 6.5 20.0065 6.5 19.5244 6.5H4.47562C3.99351 6.5 3.75245 6.5 3.56187 6.54764C3.00682 6.68638 2.59477 7.10754 2.51104 7.62169C2.48229 7.79823 2.51219 8.01405 2.57198 8.4457C2.73128 9.59552 2.81092 10.1704 3.00609 10.6455C3.571 12.0207 4.86198 13.049 6.44436 13.3842C6.99105 13.5 7.63318 13.5 8.91743 13.5H10.1"
                        stroke="currentColor" stroke-width="1.5"/>
                    <path
                        d="M3.5 11.5V13.5C3.5 17.2712 3.5 19.1569 4.60649 20.3284C5.71297 21.5 7.49383 21.5 11.0556 21.5H12.9444C16.5062 21.5 18.287 21.5 19.3935 20.3284C20.5 19.1569 20.5 17.2712 20.5 13.5V11.5"
                        stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path
                        d="M15.5 6.5L15.4227 6.14679C15.0377 4.38673 14.8452 3.50671 14.3869 3.00335C13.9286 2.5 13.3199 2.5 12.1023 2.5H11.8977C10.6801 2.5 10.0714 2.5 9.61309 3.00335C9.15478 3.50671 8.96228 4.38673 8.57727 6.14679L8.5 6.5"
                        stroke="currentColor" stroke-width="1.5"/>
                  </svg>
                  <div className='ml-2 p-3 badge badge-success text-gray-50 font-bold'>
                    Популярно
                  </div>
                </div>
                <h3 className="mt-2 text-lg font-semibold">Малый бизнес</h3>
              </div>
              <div className="mb-4">
                <span className="text-xl font-bold">40 900 ₽</span>
              </div>
              <ShortFormFW/>
              <div className="mt-4 space-y-4 text-base font-medium">
                Всё необходимое для начала торговли: каталог, склад, валюты, маркетинг, защита
              </div>
            </div>

            <div
                className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6 transform hover:scale-105 transition duration-300">
              <div className="mb-2">
                <svg className='size-16' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="currentColor"
                     fill="none">
                  <path
                      d="M2 14C2 10.4934 2 8.74003 2.90796 7.55992C3.07418 7.34388 3.25989 7.14579 3.46243 6.96849C4.56878 6 6.21252 6 9.5 6H14.5C17.7875 6 19.4312 6 20.5376 6.96849C20.7401 7.14579 20.9258 7.34388 21.092 7.55992C22 8.74003 22 10.4934 22 14C22 17.5066 22 19.26 21.092 20.4401C20.9258 20.6561 20.7401 20.8542 20.5376 21.0315C19.4312 22 17.7875 22 14.5 22H9.5C6.21252 22 4.56878 22 3.46243 21.0315C3.25989 20.8542 3.07418 20.6561 2.90796 20.4401C2 19.26 2 17.5066 2 14Z"
                      stroke="currentColor" stroke-width="1.5"/>
                  <path
                      d="M16 6C16 4.11438 16 3.17157 15.4142 2.58579C14.8284 2 13.8856 2 12 2C10.1144 2 9.17157 2 8.58579 2.58579C8 3.17157 8 4.11438 8 6"
                      stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  <path
                      d="M12 11C10.8954 11 10 11.6716 10 12.5C10 13.3284 10.8954 14 12 14C13.1046 14 14 14.6716 14 15.5C14 16.3284 13.1046 17 12 17M12 11C12.8708 11 13.6116 11.4174 13.8862 12M12 11V10M12 17C11.1292 17 10.3884 16.5826 10.1138 16M12 17V18"
                      stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
                  <path d="M6 12H2" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
                  <path d="M22 12L18 12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
                </svg>
                <h3 className="mt-2 text-lg hyphens-manual font-semibold">Бизнес</h3>
                <p className="hidden mt-4 text-gray-600 dark:text-gray-300">Для компаний или департамента любого
                  типа до
                  100 пользователей.</p>
              </div>
              <div className="mb-4">
                <span className="text-xl font-bold">83 900 ₽</span>
              </div>
              <ShortFormFW/>
              <div className="mt-4 space-y-4 text-base font-medium">
                Мощная система для управления большим интернет-магазином
              </div>

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
              </div>
              <div className="mb-4">
                <span className="text-xl font-bold">от 1 699 000 ₽</span>
              </div>
              <ShortFormFW/>
              <div className="mt-4 space-y-4 text-base font-medium">
                Максимальные возможности для крупных предприятий
              </div>
            </div>

          </div>
        </div>
        <div className="max-w-7xl py-20 mx-auto">
          <h2 className='text-3xl md:text-4xl font-black leading-9 tracking-tight text-gray-900 dark:text-gray-100 mb-4'>Стоимость
            разработки сайта</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link href="/public"
                  className="flex flex-col bg-gray-100 dark:bg-gray-800 p-8 rounded-xl hover:scale-105 transition duration-300">
              <div className='pt-6 pb-4 w-full'>
                <div className='text-2xl font-bold'>
                  Корпоративный сайт
                </div>
                <div className='text-base font-normal max-w-2xl'>
                  Многостраничный веб-сайт вашей компании с индивидуальным дизайном.
                </div>
              </div>
              <div className='flex flex-row items-center pb-6'>
                <div className='flex flex-row items-top mr-4 flex-nowrap'>
                      <span className='text-base font-semibold text-gray-600 dark:text-gray-300 mr-1 leading-5'>
                          от
                      </span>
                  <div className='text-3xl font-black'>
                    100 000 ₽
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
            <Link href="/public"
                  className="flex flex-col bg-gray-100 dark:bg-gray-800 p-8 rounded-xl hover:scale-105 transition duration-300">
              <div className='pt-6 pb-4 w-full'>
                <div className='text-2xl font-bold'>
                  eCommerce
                </div>
                <div className='text-base font-normal max-w-2xl'>
                  Интернет-магазин с современным дизайном, который удобен для пользовтелей.
                </div>
              </div>
              <div className='flex flex-row items-center pb-6'>
                <div className='flex flex-row items-top mr-4'>
                      <span className='text-base font-semibold text-gray-600 dark:text-gray-300 mr-1 leading-5'>
                          от
                      </span>
                  <div className='text-3xl font-black'>
                    150 000 ₽
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
            <Link href="/public"
                  className="flex flex-col bg-gray-100 dark:bg-gray-800 p-8 rounded-xl hover:scale-105 transition duration-300">
              <div className='pt-6 pb-4 w-full'>
                <div className='text-2xl font-bold'>
                  Landing page
                </div>
                <div className='text-base font-normal max-w-2xl'>
                  Высококонверсионный, полностью функциональный одностраничный проект.
                </div>
              </div>
              <div className='flex flex-row items-center pb-6'>
                <div className='flex flex-row items-top mr-4'>
                      <span className='text-base font-semibold text-gray-600 dark:text-gray-300 mr-1 leading-5'>
                          от
                      </span>
                  <div className='text-3xl font-black'>
                    50 000 ₽
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
            Преимущества сайтов на 1С-Битрикс</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div>
              <span className="font-black text-3xl">01.</span>
              <div className="font-bold text-xl">Интеграция с 1С</div>
              <div className="text-base">
                Двусторонний обмен данными вашего магазина с 1С по товарам, заказам, покупателям и контрагентам. Обмен работает в режиме реального времени.
              </div>
            </div>
            <div>
              <span className="font-black text-3xl">02.</span>
              <div className="font-bold text-xl">Скорость и надежность</div>
              <div className="text-base">
                Собственная технология для быстрой загрузки страниц. Поддержка «облачных» хранилищ. Распределение нагрузки между серверами.
              </div>
            </div>
            <div>
              <span className="font-black text-3xl">03.</span>
              <div className="font-bold text-xl">Безопасность</div>
              <div className="text-base">
                Целый ряд технических решений по обеспечению безопасности системы. Несколько уровней защиты от большинства атак.
              </div>
            </div>
            <div>
              <span className="font-black text-3xl">04.</span>
              <div className="font-bold text-xl">Строгое соответствие</div>
              <div className="text-base">
                Соответствие всем требованиям законодательства, включая требования ФЗ-54. Готовое соглашение об обработке персональных данных.
              </div>
            </div>
            <div>
              <span className="font-black text-3xl">05.</span>
              <div className="font-bold text-xl">Многосайтовость</div>
              <div className="text-base">
                Возможность создания нескольких сайтов в рамках одной лицензии. Неограниченное количестве лендингов в конструкторе сайтов.
              </div>
            </div>
            <div>
              <span className="font-black text-3xl">06.</span>
              <div className="font-bold text-xl">Высокое качество</div>
              <div className="text-base">
                Профессиональная разработка платформы. Строгое тестирование каждого инструмента. Ежегодные обновления. Бесплатная техническая поддержка
              </div>
            </div>
          </div>
        </div>
        <div className='xl:col-span-3 mt-5 text-2xl font-bold xl:row-span-2 pb-4 xl:pb-0'></div>
        <CallBlock/>
      </>
  )
}
