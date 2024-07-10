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
    title: 'Внедрение корпоративных порталов и CRM Битрикс24',
    description: 'Презентуем вашу компанию и поможем увеличить прибыль вашей компании в интернете.',
    openGraph: {
      title: 'Внедрение корпоративных порталов и CRM Битрикс24',
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
              Внедрение <span className="text-blue-500">корпоративных</span> порталов и <span
                className="text-blue-500">CRM</span> Битрикс24
            </h1>
            <h2 className='text-xl mb-4'>
            Презентуем вашу компанию и поможем увеличить прибыль вашей компании в интернете.
            </h2>
            <ShortForm></ShortForm>
          </div>
        </header>
        <div className="max-w-7xl py-20 mx-auto">
          <h2 className='text-3xl md:text-4xl font-black leading-9 tracking-tight text-gray-900 dark:text-gray-100 mb-4'>Стоимость
            внедрения Битрикс24</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link href="/implementation/package"
                  className="flex flex-col bg-gray-100 dark:bg-gray-800 p-8 rounded-xl hover:scale-105 transition duration-300">
              <svg className='size-14' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"
                   color="currentColor"
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
            <Link href="/implementation/project"
                  className="flex flex-col bg-gray-100 dark:bg-gray-800 p-8 rounded-xl hover:scale-105 transition duration-300">
              <svg className='size-14' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"
                   color="currentColor"
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
