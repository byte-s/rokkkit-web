import { Metadata } from 'next';
import CallBlock from "@/components/CallBlock";
import ShortForm from "@/components/shortForm";
import React from "react";
import Link from "next/link";
import ShortFormFW from "@/components/shortFormFW";
import {List} from "flowbite-react";
import ShortFormInvert from "@/components/shortFormInvert";
import {IoCheckbox} from "react-icons/io5";
import styles from "@/components/styles.module.css";

export async function generateMetadata({
  params,
}: {
  params: { slug: string[] }
}): Promise<Metadata | undefined> {

  return {
    title: 'Проектное внедрение Битрикс24',
    description: 'Разработка проектов на битрикс24 для крупных организаций.',
    openGraph: {
      title: 'Проектное внедрение Битрикс24',
      description: 'Разработка проектов на битрикс24 для крупных организаций.',
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
              Проектное внедрение Битрикс24
            </h1>
            <h2 className='text-xl mb-4'>
              Разработка проектов на битрикс24 для крупных организаций.
            </h2>
            <ShortForm></ShortForm>
          </div>
          <div
              className='grid lg:row-end-auto row-end-1 lg:justify-end lg:justify-items-end justify-start justify-items-start'>
            <img className="mb-4 w-full max-h-80 lg:max-h-96" src={'/static/images/project.webp'}></img>
          </div>
        </header>
        <div className="max-w-none py-10">
          <h2 className="text-3xl md:text-4xl font-black leading-9 tracking-tight text-gray-900 dark:text-gray-100 mb-4">
            Описание
          </h2>
          <p className="text-lg">
            Проектный подход важен для крупных организаций, у которых нет возможности внедрять платформу итерационно, автоматизируя небольшие участки. Для них необходим комплексный подход с детальной проработкой всех этапов проекта и оценкой их стоимости.
          </p>
        </div>
        <div className="max-w-7xl py-20 mx-auto ">
          <h2 className="text-3xl md:text-4xl font-black leading-9 tracking-tight text-gray-900 dark:text-gray-100 mb-4">
            В каких случаях подходит проектное внедрение
          </h2>
          <div className="grid md:grid-cols-4 md:grid-rows-2 gap-4 ">
            <div
                className="row-span-2 col-span-2 relative before:z-10 before:top-0 before:bottom-0 before:right-0 before:left-0 before:rounded-xl before:absolute before:size-full before:bg-gray-950/40 h-full bg-cover bg-[url('/static/images/project-astr.jpg')] text-gray-100 p-12 rounded-xl">
              <div className='before:font-black relative font-black z-20 text-2xl mb-4'>Импортозамещение</div>
              <div className="mb-8 font-medium relative z-20">
                Импортозамещение существующего решения (SAP, SharePoint, IBM, Oracle Portal) на Битрикс24
              </div>
              <IoCheckbox className='size-6 relative z-20'/>
            </div>
            <div className="rounded-xl bg-gray-100 p-8">
              <div className='font-medium mb-4'>
                Уникальный функционал, которого нет в базовой версии Битрикс24
              </div>
              <IoCheckbox className='size-6'/>
            </div>
            <div className='rounded-xl bg-gray-100 row-span-2 p-8'>
              <div className='text-lg leading-5 mb-4 font-bold'>
                Объемные интеграции с другими системами:
              </div>
              <ul>
                <li>
                  С 1C
                </li>
                <li>
                  С 1С:Фреш
                </li>
                <li>
                  С телефонией
                </li>
                <li>
                  С сайтом
                </li>
                <li>
                  С мессенджерами и соцсетями
                </li>
                <li>
                  С почтой
                </li>
                <li>
                  С Ozon
                </li>
                <li>
                  С кассой
                </li>
                <li>
                  Со СДЭК
                </li>
              </ul>
              <IoCheckbox className='mt-4 size-6 relative z-20'/>
            </div>
            <div className="rounded-xl bg-gray-100 p-8">
              <div className='font-medium mb-4'>
                Комплексный проектный подход с большим объемом доработок Битрикс24
              </div>
              <IoCheckbox className='size-6'/>
            </div>
          </div>

        </div>
        <div className="max-w-7xl py-20 mx-auto ">
          <h2 className="text-3xl md:text-4xl font-black leading-9 tracking-tight text-gray-900 dark:text-gray-100 mb-4">
            Этапы проектного внедрения
          </h2>
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
                    Мы уделяем особое внимание деталям и не упустим ни одной из них. Вы сможете заранее увидеть на что способна ваша система, а мы будем иметь представление обо всех рисках и затратах.
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
                    Никаких сюрпризов - перед запуском составим контрольный список, в который включает в себя соображения по доступности и работоспособности системы.
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
        <CallBlock/>
      </>
  )
}
