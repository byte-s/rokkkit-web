import { Metadata } from 'next';
import CallBlock from "@/components/CallBlock";
import ShortForm from "@/components/shortForm";
import React from "react";
import Link from "next/link";
import ShortFormFW from "@/components/shortFormFW";
import {List} from "flowbite-react";
import ShortFormInvert from "@/components/shortFormInvert";
import {IoCheckbox, IoRemove} from "react-icons/io5";
import styles from "@/components/styles.module.css";
import {Disclosure, DisclosureButton, DisclosurePanel} from "@headlessui/react";
import {ChevronDownIcon} from "@heroicons/react/20/solid";

export async function generateMetadata({
  params,
}: {
  params: { slug: string[] }
}): Promise<Metadata | undefined> {

  return {
    title: 'Разработка сайтов, web-приложений и интернет-магазинов',
    description: 'Презентуем вашу компанию и поможем увеличить прибыль вашей компании в интернете.',
    openGraph: {
      title: 'Разработка сайтов, web-приложений и интернет-магазинов',
      description: 'Презентуем вашу компанию и поможем увеличить прибыль вашей компании в интернете.',
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
        <header className='items-center justify-between my-8 py-20'>
          <div>
            <h1 className='text-5xl mb-4 font-black'>
              Разработка сайтов, <span className="text-red-500">web</span>-приложений и <span className="text-red-500">интернет</span>-магазинов
            </h1>
            <h2 className='text-xl mb-4'>
              Презентуем вашу компанию и поможем увеличить прибыль вашей компании в интернете.
            </h2>
            <ShortForm></ShortForm>
          </div>
        </header>
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
      </>
  )
}
