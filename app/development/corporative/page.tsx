import { Metadata } from 'next';
import CallBlock from "@/components/CallBlock";
import ShortForm from "@/components/shortForm";
import React from "react";
import {List} from "flowbite-react";
import {IoCheckbox, IoRemove} from "react-icons/io5";
import styles from "@/components/styles.module.css";
import {Disclosure, DisclosureButton, DisclosurePanel} from "@headlessui/react";
import {ChevronDownIcon} from "@heroicons/react/20/solid";
import Image from 'next/image'
import coverImage from '../../../public/static/images/corporate.webp'

export async function generateMetadata({
  params,
}: {
  params: { slug: string[] }
}): Promise<Metadata | undefined> {

  return {
    title: 'Создание корпоративного сайта',
    description: 'Это ключевой инструмент для привлечения новых клиентов, укрепления доверия и улучшения общения. Мы реализуем бизнес-проекты с множеством интеграций и технических решений.',
    openGraph: {
      title: 'Создание корпоративного сайта',
      description: 'Это ключевой инструмент для привлечения новых клиентов, укрепления доверия и улучшения общения. Мы реализуем бизнес-проекты с множеством интеграций и технических решений.',
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
            <h1 className='text-5xl mb-4 hyphens-manual font-black'>
              Создание корпоратив&shy;ного сайта
            </h1>
            <h2 className='text-xl mb-4'>
              Это ключевой инструмент для привлечения новых клиентов, укрепления доверия и улучшения общения. Мы
              реализуем бизнес-проекты с множеством интеграций и технических решений.
            </h2>
            <ShortForm></ShortForm>
          </div>
          <div
              className='grid lg:row-end-auto row-end-1 lg:justify-end lg:justify-items-end justify-start justify-items-start'>
            <Image className="mb-4 w-full max-h-80 lg:max-h-96" alt={'Создание корпоративного сайта'} src={coverImage}></Image>
          </div>
        </header>

        <div className="max-w-none py-10">
          <h2 className="text-3xl md:text-4xl font-black leading-9 tracking-tight text-gray-900 dark:text-gray-100 mb-4">
            Каким должен быть бизнес-сайт
          </h2>
          <div className='grid md:grid-cols-3 grid-cols-2 gap-8'>
            <div className="">
              <svg className="size-16 mr-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24"
                   height="24" color="currentColor"
                   fill="none">
                <path
                    d="M2 12.5C2 11.3954 2.89543 10.5 4 10.5C5.65685 10.5 7 11.8431 7 13.5V17.5C7 19.1569 5.65685 20.5 4 20.5C2.89543 20.5 2 19.6046 2 18.5V12.5Z"
                    stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path
                    d="M15.4787 7.80626L15.2124 8.66634C14.9942 9.37111 14.8851 9.72349 14.969 10.0018C15.0369 10.2269 15.1859 10.421 15.389 10.5487C15.64 10.7065 16.0197 10.7065 16.7791 10.7065H17.1831C19.7532 10.7065 21.0382 10.7065 21.6452 11.4673C21.7145 11.5542 21.7762 11.6467 21.8296 11.7437C22.2965 12.5921 21.7657 13.7351 20.704 16.0211C19.7297 18.1189 19.2425 19.1678 18.338 19.7852C18.2505 19.8449 18.1605 19.9013 18.0683 19.9541C17.116 20.5 15.9362 20.5 13.5764 20.5H13.0646C10.2057 20.5 8.77628 20.5 7.88814 19.6395C7 18.7789 7 17.3939 7 14.6239V13.6503C7 12.1946 7 11.4668 7.25834 10.8006C7.51668 10.1344 8.01135 9.58664 9.00069 8.49112L13.0921 3.96056C13.1947 3.84694 13.246 3.79012 13.2913 3.75075C13.7135 3.38328 14.3652 3.42464 14.7344 3.84235C14.774 3.8871 14.8172 3.94991 14.9036 4.07554C15.0388 4.27205 15.1064 4.37031 15.1654 4.46765C15.6928 5.33913 15.8524 6.37436 15.6108 7.35715C15.5838 7.46692 15.5488 7.5801 15.4787 7.80626Z"
                    stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <h3 className="mt-4 text-xl lg:text-2xl font-bold lg:font-black break-words !leading-7 tracking-tight text-gray-900 dark:text-gray-100 mb-4">
                Удобным для пользователя
              </h3>
            </div>
            <div className="">
              <svg className="size-16 mr-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24}
                   height={24} color={"currentColor"}
                   fill={"none"}>
                <path
                    d="M17.5 5C18.3284 5 19 5.67157 19 6.5C19 7.32843 18.3284 8 17.5 8C16.6716 8 16 7.32843 16 6.5C16 5.67157 16.6716 5 17.5 5Z"
                    stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path
                    d="M2.77423 11.1439C1.77108 12.2643 1.7495 13.9546 2.67016 15.1437C4.49711 17.5033 6.49674 19.5029 8.85633 21.3298C10.0454 22.2505 11.7357 22.2289 12.8561 21.2258C15.8979 18.5022 18.6835 15.6559 21.3719 12.5279C21.6377 12.2187 21.8039 11.8397 21.8412 11.4336C22.0062 9.63798 22.3452 4.46467 20.9403 3.05974C19.5353 1.65481 14.362 1.99377 12.5664 2.15876C12.1603 2.19608 11.7813 2.36233 11.472 2.62811C8.34412 5.31646 5.49781 8.10211 2.77423 11.1439Z"
                    stroke="currentColor" strokeWidth="1.5"/>
                <path
                    d="M13.7884 12.3665C13.8097 11.9655 13.9222 11.232 13.3125 10.6744M13.3125 10.6744C13.1238 10.5019 12.866 10.3462 12.5149 10.2225C11.2583 9.77958 9.71484 11.2619 10.8067 12.6188C11.3936 13.3482 11.8461 13.5725 11.8035 14.4008C11.7735 14.9834 11.2012 15.5922 10.4469 15.824C9.7916 16.0255 9.06876 15.7588 8.61156 15.2479C8.05332 14.6241 8.1097 14.0361 8.10492 13.7798M13.3125 10.6744L14.0006 9.98633M8.66131 15.3256L8.00781 15.9791"
                    stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <h3 className="mt-4 text-xl lg:text-2xl font-bold lg:font-black hyphens-manual !leading-7 tracking-tight text-gray-900 dark:text-gray-100 mb-4">
                Убедитель&shy;ным и продающим
              </h3>
            </div>
            <div className="">
              <svg className="!size-16 mr-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24}
                   height={24} color={"currentColor"}
                   fill={"none"}>
                <path d="M12 22L10 16H2L4 22H12ZM12 22H16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
                      strokeLinejoin="round"/>
                <path
                    d="M12 13V12.5C12 10.6144 12 9.67157 11.4142 9.08579C10.8284 8.5 9.88562 8.5 8 8.5C6.11438 8.5 5.17157 8.5 4.58579 9.08579C4 9.67157 4 10.6144 4 12.5V13"
                    stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path
                    d="M19 13C19 14.1046 18.1046 15 17 15C15.8954 15 15 14.1046 15 13C15 11.8954 15.8954 11 17 11C18.1046 11 19 11.8954 19 13Z"
                    stroke="currentColor" strokeWidth="1.5"/>
                <path
                    d="M10 4C10 5.10457 9.10457 6 8 6C6.89543 6 6 5.10457 6 4C6 2.89543 6.89543 2 8 2C9.10457 2 10 2.89543 10 4Z"
                    stroke="currentColor" strokeWidth="1.5"/>
                <path d="M14 17.5H20C21.1046 17.5 22 18.3954 22 19.5V20C22 21.1046 21.1046 22 20 22H19"
                      stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
              <h3 className="mt-4 text-xl lg:text-2xl font-bold lg:font-black hyphens-manual !leading-7 tracking-tight text-gray-900 dark:text-gray-100 mb-4">
                Экспертным, подчеркива&shy;ющим статус
              </h3>
            </div>
          </div>
        </div>

        <div className="max-w-none py-10">
          <h2 className="text-3xl md:text-4xl font-black leading-9 tracking-tight text-gray-900 dark:text-gray-100 mb-4">
            Что входит в услугу «Корпоративный сайт под ключ»
          </h2>
          <List className='mt-2 text-gray-900 dark:text-gray-100'>
            <List.Item className='py-2 font-normal flex-row text-lg flex'>
              <div className='size-6 mt-1 mr-4'>
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="32"
                     width="32" xmlns="http://www.w3.org/2000/svg" className="size-6 mr-2">
                  <path
                      d="M400 48H112a64.07 64.07 0 0 0-64 64v288a64.07 64.07 0 0 0 64 64h288a64.07 64.07 0 0 0 64-64V112a64.07 64.07 0 0 0-64-64zm-35.75 138.29-134.4 160a16 16 0 0 1-12 5.71h-.27a16 16 0 0 1-11.89-5.3l-57.6-64a16 16 0 1 1 23.78-21.4l45.29 50.32 122.59-145.91a16 16 0 0 1 24.5 20.58z">
                  </path>
                </svg>
              </div>
              Дизайн в уникальном корпоративном стиле — начиная с нуля, мы создаем визуальное оформление и
              индивидуальный пользовательский интерфейс.
            </List.Item>
            <List.Item className='py-2 font-normal flex-row text-lg flex'>
              <div className='size-6 mt-1 mr-4'>
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="32"
                     width="32" xmlns="http://www.w3.org/2000/svg" className="size-6 mr-2">
                  <path
                      d="M400 48H112a64.07 64.07 0 0 0-64 64v288a64.07 64.07 0 0 0 64 64h288a64.07 64.07 0 0 0 64-64V112a64.07 64.07 0 0 0-64-64zm-35.75 138.29-134.4 160a16 16 0 0 1-12 5.71h-.27a16 16 0 0 1-11.89-5.3l-57.6-64a16 16 0 1 1 23.78-21.4l45.29 50.32 122.59-145.91a16 16 0 0 1 24.5 20.58z">
                  </path>
                </svg>
              </div>
              Обширный каталог продуктов или услуг — мы разрабатываем детализированный каталог с удобной навигацией,
              поисковой системой и фильтрацией по различным характеристикам.
            </List.Item>
            <List.Item className='py-2 font-normal flex-row text-lg flex'>
              <div className='size-6 mt-1 mr-4'>
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="32"
                     width="32" xmlns="http://www.w3.org/2000/svg" className="size-6 mr-2">
                  <path
                      d="M400 48H112a64.07 64.07 0 0 0-64 64v288a64.07 64.07 0 0 0 64 64h288a64.07 64.07 0 0 0 64-64V112a64.07 64.07 0 0 0-64-64zm-35.75 138.29-134.4 160a16 16 0 0 1-12 5.71h-.27a16 16 0 0 1-11.89-5.3l-57.6-64a16 16 0 1 1 23.78-21.4l45.29 50.32 122.59-145.91a16 16 0 0 1 24.5 20.58z">
                  </path>
                </svg>
              </div>
              Корзину для покупок/Форму для оформления заказа — все интернет-заказы автоматически обрабатываются
              системой CRM или при необходимости направляются менеджерам. Мы предлагаем интеграцию сайтов с CRM и 1С
              в качестве дополнительной услуги.
            </List.Item>
            <List.Item className='py-2 font-normal flex-row text-lg flex'>
              <div className='size-6 mt-1 mr-4'>
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="32"
                     width="32" xmlns="http://www.w3.org/2000/svg" className="size-6 mr-2">
                  <path
                      d="M400 48H112a64.07 64.07 0 0 0-64 64v288a64.07 64.07 0 0 0 64 64h288a64.07 64.07 0 0 0 64-64V112a64.07 64.07 0 0 0-64-64zm-35.75 138.29-134.4 160a16 16 0 0 1-12 5.71h-.27a16 16 0 0 1-11.89-5.3l-57.6-64a16 16 0 1 1 23.78-21.4l45.29 50.32 122.59-145.91a16 16 0 0 1 24.5 20.58z">
                  </path>
                </svg>
              </div>
              Разработку личного кабинета — это добавляет возможность регистрации на портале как внутренних
              сотрудников компании для управления рабочими процессами, так и бизнес-партнеров и посетителей сайта.
            </List.Item>
            <List.Item className='py-2 font-normal flex-row text-lg flex'>
              <div className='size-6 mt-1 mr-4'>
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="32"
                     width="32" xmlns="http://www.w3.org/2000/svg" className="size-6 mr-2">
                  <path
                      d="M400 48H112a64.07 64.07 0 0 0-64 64v288a64.07 64.07 0 0 0 64 64h288a64.07 64.07 0 0 0 64-64V112a64.07 64.07 0 0 0-64-64zm-35.75 138.29-134.4 160a16 16 0 0 1-12 5.71h-.27a16 16 0 0 1-11.89-5.3l-57.6-64a16 16 0 1 1 23.78-21.4l45.29 50.32 122.59-145.91a16 16 0 0 1 24.5 20.58z">
                  </path>
                </svg>
              </div>
              Базовую поисковую оптимизацию — проект реализуется с участием специалиста по SEO, оптимизирован и
              готов к дальнейшему развитию.
            </List.Item>
          </List>
        </div>

        <div className="max-w-none py-10">
          <div
              className='gap-8 mt-4 grid grid-cols-1 justify-items-start lg:justify-items-stretch lg:grid-cols-6 bg-gray-100 dark:bg-gray-900 py-8 px-12 w-full rounded-lg'>
            <div className='col-span-4'>
              <h2 className='mb-2 font-black text-4xl'>
                Стоимость услуги
              </h2>
              <div className='text-lg font-normal'>
                Разработаем корпоративный сайт, с вашими фирменным стилем. Нашаей задачей является максимально точно
                и гармонично презентовать ваш бизнес в интернете. Свяжитесь с нами для получения
                подробного расчета стоимости разработки.
              </div>
            </div>
            <div className='col-span-2 flex flex-col items-center justify-center'>
              <svg className="lg:block hidden size-16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24}
                   height={24} color={"currentColor"}
                   fill={"none"}>
                <path
                    d="M20.9977 13C21 12.5299 21 12.0307 21 11.5C21 7.02166 21 4.78249 19.6088 3.39124C18.2175 2 15.9783 2 11.5 2C7.02166 2 4.78249 2 3.39124 3.39124C2 4.78249 2 7.02166 2 11.5C2 15.9783 2 18.2175 3.39124 19.6088C4.78249 21 7.02166 21 11.5 21C12.0307 21 12.5299 21 13 20.9977"
                    stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                <path
                    d="M18.5 15L18.7579 15.697C19.0961 16.611 19.2652 17.068 19.5986 17.4014C19.932 17.7348 20.389 17.9039 21.303 18.2421L22 18.5L21.303 18.7579C20.389 19.0961 19.932 19.2652 19.5986 19.5986C19.2652 19.932 19.0961 20.389 18.7579 21.303L18.5 22L18.2421 21.303C17.9039 20.389 17.7348 19.932 17.4014 19.5986C17.068 19.2652 16.611 19.0961 15.697 18.7579L15 18.5L15.697 18.2421C16.611 17.9039 17.068 17.7348 17.4014 17.4014C17.7348 17.068 17.9039 16.611 18.2421 15.697L18.5 15Z"
                    stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
                <path d="M2 9H21" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
                <path d="M6.49981 5.5H6.50879" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                      strokeLinejoin="round"/>
                <path d="M10.4998 5.5H10.5088" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                      strokeLinejoin="round"/>
              </svg>
              <div className='flex flex-row items-top mb-2 flex-nowrap'>
                      <span className='text-base font-semibold text-gray-600 dark:text-gray-300 mr-1 leading-5'>
                          от
                      </span>
                <div className='text-4xl font-black'>
                  100 000 ₽
                </div>
              </div>
              <ShortForm/>
            </div>
          </div>
        </div>

        <div className="max-w-none py-10">
          <h2 className="text-3xl md:text-4xl font-black leading-9 tracking-tight text-gray-900 dark:text-gray-100 mb-4">
            Преимущества сотрудничества с нами
          </h2>
          <List className='mt-2 text-gray-900 dark:text-gray-100'>
            <List.Item className='text-lg py-2 font-normal justify-start items-start flex-col flex'>
              <div className='flex flex-row items-center mb-2 font-bold'>
                <div className='size-5 mr-4 '>
                  <IoRemove className="size-5 mr-2"/>
                </div>
                Веб-разработка любого уровня сложности
              </div>
              <div>
                Мы обладаем необходимыми компетенциями для реализации проектов любого масштаба и сложности, учитывая
                особенности вашего бизнеса, требования к функционалу и нагрузке на ресурс. Наши специалисты готовы
                воплотить ваши задачи в жизнь, соблюдая сроки, установленные в договоре.
              </div>
            </List.Item>
            <List.Item className='text-lg py-2 font-normal justify-start items-start flex-col flex'>
              <div className='flex flex-row items-center mb-2 font-bold'>
                <div className='size-5 mr-4 '>
                  <IoRemove className="size-5 mr-2"/>
                </div>
                Ответственность перед каждым заказчиком
              </div>
              <div>
                Наша политика в отношении каждого проекта не меняется в зависимости от статуса, бюджета или размера
                бизнеса клиента. Мы строго следуем внутреннему регламенту компании, осуществляя детальную проработку
                сайта на всех этапах – от предпроектного анализа до финального тестирования и сдачи проекта клиенту.
              </div>
            </List.Item>
            <List.Item className='text-lg py-2 font-normal justify-start items-start flex-col flex'>
              <div className='flex flex-row items-center mb-2 font-bold'>
                <div className='size-5 mr-4 '>
                  <IoRemove className="size-5 mr-2"/>
                </div>
                Предоставляем услугу под ключ
              </div>
              <div>
                Мы не просто разрабатываем сайт, но и предлагаем дальнейшую техническую поддержку, продвижение и
                доработку проекта для его успешного развития.
              </div>
            </List.Item>
          </List>
        </div>

        <div className="max-w-none py-10">
          <h2 className="text-3xl md:text-4xl font-black leading-9 tracking-tight text-gray-900 dark:text-gray-100 mb-4">
            Этапы разработки корпоративного сайта
          </h2>
          <h3 className="text-xl">
            В результате вы получите сайт, оформленный в фирменном стиле с уникальным дизайном. Он станет отличным
            генератором дополнительных продаж и поднимет узнаваемость вашего бренда.
          </h3>
          <ul className="timeline pt-4 timeline-snap-icon max-md:timeline-compact timeline-vertical ">
            <li>
              <div
                  className="hover:scale-105 transition duration-300 timeline-start timeline-box bg-gray-100 dark:bg-gray-900 border-0">
                <div className={styles.workCard + ' items-center sm:max-w-md max-w-xl p-4 '}>
                  <h4 className="font-black">
                    01 — Аналитика и аудит
                  </h4>
                  <p className='max-w-none pb-2 pt-2 text-sm dark:prose-invert xl:col-span-2'>
                    Мы начинаем с изучения вашего бренда, рынка и аудитории. Мы проверяем ваш
                    существующий
                    цифровой опыт и разрабатываем четкую дорожную карту для достижения ваших целей.
                  </p>
                </div>
              </div>
              <div className="timeline-middle">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="text-primary h-5 w-5">
                  <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clipRule="evenodd"/>
                </svg>
              </div>
              <hr/>
            </li>
            <li>
              <hr/>
              <div
                  className="hover:scale-105 transition duration-300 timeline-end timeline-box bg-gray-100 dark:bg-gray-900 border-0">
                <div className={styles.workCard + ' items-center sm:max-w-md max-w-xl p-4'}>
                  <h4 className="font-black">
                    02 — Проектирование и модель
                  </h4>
                  <p className='max-w-none pb-2 pt-2 text-sm dark:prose-invert xl:col-span-2'>
                    Мы уделяем особое внимание дизайну вашего сайта и пользовательскому опыту, изучая
                    запоминающиеся способы продемонстрировать ваш бренд и продукты, при этом делая
                    большую
                    ставку на удобстве использования.
                  </p>
                </div>
              </div>
              <div className="timeline-middle">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="text-primary h-5 w-5">
                  <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clipRule="evenodd"/>
                </svg>
              </div>
              <hr/>
            </li>
            <li>
              <hr/>
              <div
                  className="hover:scale-105 transition duration-300 timeline-start timeline-box bg-gray-100 dark:bg-gray-900 border-0">
                <div className={styles.workCard + ' items-center sm:max-w-md max-w-xl p-4'}>
                  <h4 className="font-black">
                    03 — Разработка и внедрение
                  </h4>
                  <p className='max-w-none pb-2 pt-2 text-sm dark:prose-invert xl:col-span-2'>
                    Мы превращаем проекты в код и реализуем функции и интеграции для достижения
                    необходимой
                    функциональности. Мы тщательно тестируем, чтобы гарантировать качество.
                  </p>
                </div>
              </div>
              <div className="timeline-middle">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="text-primary h-5 w-5">
                  <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clipRule="evenodd"/>
                </svg>
              </div>
              <hr/>
            </li>
            <li>
              <hr/>
              <div
                  className="hover:scale-105 transition duration-300 timeline-end timeline-box bg-gray-100 dark:bg-gray-900 border-0">
                <div className={styles.workCard + ' items-center sm:max-w-md max-w-xl p-4'}>
                  <h4 className="font-black">
                    04 — Развертывание и оптимизация
                  </h4>
                  <p className='max-w-none pb-2 pt-2 text-sm dark:prose-invert xl:col-span-2'>
                    Мы составляем наш контрольный список перед запуском, который включает в себя
                    соображения по
                    доступности, SEO и отслеживанию аналитики. Затем мы предлагаем поддержку после
                    запуска.
                  </p>
                </div>
              </div>
              <div className="timeline-middle">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="text-primary h-5 w-5">
                  <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clipRule="evenodd"/>
                </svg>
              </div>
              <hr/>
            </li>
          </ul>
        </div>

        <div className="max-w-none py-10">
          <div className="xl:col-span-3 mt-5 text-2xl font-bold xl:row-span-2 pb-4 xl:pb-0">
            <h2 className="text-3xl md:text-4xl font-black leading-9 tracking-tight text-gray-900 dark:text-gray-100 mb-4">
              Ответы на частые вопросы
            </h2>
            <div className="w-full">
              <div className="text-lg mx-auto mt-4 w-full divide-y divide-white/5 rounded-xl bg-gray/5">
                <Disclosure as="div" className="py-2" defaultOpen={true}>
                  <DisclosureButton className="group flex w-full items-center justify-between">
                    <span
                        className="text-start font-bold group-data-[hover]:text-gray-500/80">
                        Входит ли контент в стоимость сайта?
                    </span>
                    <ChevronDownIcon className="size-5 "/>
                  </DisclosureButton>
                  <DisclosurePanel className="mt-2 font-normal">
                    Да, мы занимаемся оформлением сайта под ключ. В перечень работ входит наполнение качественным
                    контентом, подробно рассказывающим о достоинствах вашего продукта.
                  </DisclosurePanel>
                </Disclosure>
                <Disclosure as="div" className="py-2" defaultOpen={false}>
                  <DisclosureButton className="group flex w-full items-center justify-between">
                    <span
                        className="text-start font-bold group-data-[hover]:text-gray-500/80">
                        Подходит ли ресурс под поисковое продвижение?
                    </span>
                    <ChevronDownIcon className="size-5 "/>
                  </DisclosureButton>
                  <DisclosurePanel className="mt-2 font-normal">
                    Полностью готов к продвижению. Корпоративный ресурс в процессе работы проходит базовую оптимизацию,
                    структура проектируется совместно с SEO-специалистами.
                  </DisclosurePanel>
                </Disclosure>
                <Disclosure as="div" className="py-2" defaultOpen={false}>
                  <DisclosureButton className="group flex w-full items-center justify-between">
                    <span
                        className="text-start font-bold group-data-[hover]:text-gray-500/80">
                        Каков срок создания сайта?
                    </span>
                    <ChevronDownIcon className="size-5 "/>
                  </DisclosureButton>
                  <DisclosurePanel className="mt-2 font-normal">
                    В среднем 1-2 месяца. Длительность веб-разработки зависит от масштабов проекта. Крупный сайт или
                    портал может занимать до полугода, небольшой — 2 недели.
                  </DisclosurePanel>
                </Disclosure>
                <Disclosure as="div" className="py-2" defaultOpen={false}>
                  <DisclosureButton className="group flex w-full items-center justify-between">
                    <span
                        className="text-start font-bold group-data-[hover]:text-gray-500/80">
                        Что если сайт перестанет работать?
                    </span>
                    <ChevronDownIcon className="size-5 "/>
                  </DisclosureButton>
                  <DisclosurePanel className="mt-2 font-normal">
                    Мы даем гарантию на наши услуги в течение 6 месяцев с момента передачи заказчику. Если сайт
                    перестает корректно функционировать вследствие ошибки наших программистов — устраняем бесплатно.
                  </DisclosurePanel>
                </Disclosure>
                <Disclosure as="div" className="py-2" defaultOpen={false}>
                  <DisclosureButton className="group flex w-full items-center justify-between">
                    <span
                        className="text-start font-bold group-data-[hover]:text-gray-500/80">
                        Насколько сложно добавлять информацию на сайт?
                    </span>
                    <ChevronDownIcon className="size-5 "/>
                  </DisclosureButton>
                  <DisclosurePanel className="mt-2 font-normal">
                    Для исправления текстов, добавления новых услуг или продуктов, а также новых страниц и разделов не
                    требуется профессиональная подготовка. Сайт будет работать на современной CMS-системе 1С-Битрикс —
                    удобной и интуитивно понятной для заказчика.
                  </DisclosurePanel>
                </Disclosure>
              </div>
            </div>
          </div>
        </div>

        <CallBlock/>
      </>
  )
}
