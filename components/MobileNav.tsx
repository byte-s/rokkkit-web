'use client'

import React, {Fragment, useState} from 'react'
import Link from './Link'
import headerNavLinks from '@/data/headerNavLinks'
import {Popover, PopoverButton, PopoverPanel, Transition} from "@headlessui/react";
import {Disclosure, DisclosureButton, DisclosurePanel} from "@headlessui/react";
import {ChevronDownIcon} from "@heroicons/react/20/solid";
import clsx from "clsx";
import styles from "@/components/styles.module.css";
import SearchButton from "@/components/SearchButton";
import ThemeSwitch from "@/components/ThemeSwitch";

const MobileNav = () => {
  const [navShow, setNavShow] = useState(false)

  const onToggleNav = () => {
    setNavShow((status) => {
      if (status) {
        document.body.style.overflow = 'auto'
      } else {
        // Prevent scrolling
        document.body.style.overflow = 'hidden'
      }
      return !status
    })
  }

  return (
    <>
      
      <button aria-label="Toggle Menu" onClick={onToggleNav} className="sm:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="hover:animate-jump hover:animate-once hover:animate-ease-out h-7 w-7 text-gray-900 dark:text-gray-100"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <div
        className={`fixed left-0 top-0 z-10 h-full w-full transform bg-white opacity-95 duration-300 ease-in-out dark:bg-gray-950 dark:opacity-[0.98] ${
          navShow ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex justify-end">
          <button className="mr-8 mt-11 h-7 w-7" aria-label="Toggle Menu" onClick={onToggleNav}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="hover:animate-jump hover:animate-once hover:animate-ease-out text-gray-900 dark:text-gray-100"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
        <nav className={styles.scrollNav+" fixed mt-8"}>

          {headerNavLinks.map((link) => (
              <div key={link.title} className="px-12 py-4">
                <Link
                    href={link.href}
                    className="text-2xl font-bold tracking-widest text-gray-900 dark:text-gray-100"
                    onClick={onToggleNav}
                >
                  {link.title}
                </Link>
              </div>
          ))}
          <Disclosure >
            <DisclosureButton className="hover:animate-jump hover:animate-once hover:animate-ease-out group flex w-full items-center gap-1 text-2xl font-bold tracking-widest text-gray-900 dark:text-gray-100 px-12 py-4">
              Решения
              <ChevronDownIcon className={clsx('size-5 group-data-[open]:rotate-180')} />
            </DisclosureButton>
            <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
              <DisclosurePanel className="px-12 grid">
                <Link className="hover:animate-jump hover:animate-once hover:animate-ease-out mr-2 mb-1.5 text-md" href="/solutions/bitrix-24">Битрикс24</Link>
                <Link className="hover:animate-jump hover:animate-once hover:animate-ease-out mr-2 mb-1.5 text-md" href="/solutions/1c-bitrix">1С-Битрикс: Управление сайтом</Link>
              </DisclosurePanel>
            </Transition>
          </Disclosure>
          <Disclosure >
            <DisclosureButton className="hover:animate-jump hover:animate-once hover:animate-ease-out group flex w-full items-center gap-1 text-2xl font-bold tracking-widest text-gray-900 dark:text-gray-100 px-12 py-4">
              Услуги
              <ChevronDownIcon className={clsx('size-5 group-data-[open]:rotate-180')} />
            </DisclosureButton>
            <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
              <DisclosurePanel className={"px-12 grid"}>

                <div className="space-y-2 xl:grid xl:grid-cols-4 gap-x-2 items-start">
                  <div className="grid grid-cols-1">
                    <label className="text-md font-semibold mb-1.5">Внедрение</label>
                    <Link
                        className="hover:animate-jump hover:animate-once hover:animate-ease-out mr-2 mb-1.5 text-md"
                        href="/implementation/package">Пакетное</Link>
                    <Link
                        className="hover:animate-jump hover:animate-once hover:animate-ease-out mr-2 mb-1.5 text-md"
                        href="/implementation/project">Проектное</Link>
                  </div>
                  <div className="grid grid-cols-1">
                    <label className="text-md font-semibold mb-1.5">Сайты</label>
                    <Link
                        className="hover:animate-jump hover:animate-once hover:animate-ease-out mr-2 mb-1.5 text-md"
                        href="/development/corporate">Корпоративный</Link>
                    {/* <Link
                        className="hover:animate-jump hover:animate-once hover:animate-ease-out mr-2 mb-1.5 text-md"
                        href="/">Сайт-визитка</Link> */}
                    <Link
                        className="hover:animate-jump hover:animate-once hover:animate-ease-out mr-2 mb-1.5 text-md"
                        href="/development/landing-page">Landing page</Link>
                    <Link
                        className="hover:animate-jump hover:animate-once hover:animate-ease-out mr-2 mb-1.5 text-md"
                        href="/development/ecommerce">Интернет-магазин</Link>
                  </div>
                  {/* <div className="grid grid-cols-1">
                    <label className="text-md font-semibold mb-1.5">Интеграция с Битрикс24</label>
                    <Link
                        className="hover:animate-jump hover:animate-once hover:animate-ease-out mr-2 mb-1.5 text-md"
                        href="/">С 1С</Link>
                    <Link
                        className="hover:animate-jump hover:animate-once hover:animate-ease-out mr-2 mb-1.5 text-md"
                        href="/">С телефонией</Link>
                    <Link
                        className="hover:animate-jump hover:animate-once hover:animate-ease-out mr-2 mb-1.5 text-md"
                        href="/">С сайтом</Link>
                    <Link
                        className="hover:animate-jump hover:animate-once hover:animate-ease-out mr-2 mb-1.5 text-md"
                        href="/">С мессенджерами и соцсетями</Link>
                    <Link
                        className="hover:animate-jump hover:animate-once hover:animate-ease-out mr-2 mb-1.5 text-md"
                        href="/">С почтой</Link>
                    <Link
                        className="hover:animate-jump hover:animate-once hover:animate-ease-out mr-2 mb-1.5 text-md"
                        href="/">С WhatsApp</Link>
                    <Link
                        className="hover:animate-jump hover:animate-once hover:animate-ease-out mr-2 mb-1.5 text-md"
                        href="/">С управление сайтом (БУС)</Link>
                    <Link
                        className="hover:animate-jump hover:animate-once hover:animate-ease-out mr-2 mb-1.5 text-md"
                        href="/">С WordPress</Link>
                    <Link
                        className="hover:animate-jump hover:animate-once hover:animate-ease-out mr-2 mb-1.5 text-md"
                        href="/">С 1C:ЗУП</Link>
                    <Link
                        className="hover:animate-jump hover:animate-once hover:animate-ease-out mr-2 mb-1.5 text-md"
                        href="/">С ОЗОН</Link>
                    <Link
                        className="hover:animate-jump hover:animate-once hover:animate-ease-out mr-2 mb-1.5 text-md"
                        href="/">С 1С:Фреш</Link>
                    <Link
                        className="hover:animate-jump hover:animate-once hover:animate-ease-out mr-2 mb-1.5 text-md"
                        href="/">С 1С:Документооборот</Link>
                    <Link
                        className="hover:animate-jump hover:animate-once hover:animate-ease-out mr-2 mb-1.5 text-md"
                        href="/">С кассой</Link>
                    <Link
                        className="hover:animate-jump hover:animate-once hover:animate-ease-out mr-2 mb-1.5 text-md"
                        href="/">Со СДЭК</Link>
                    <Link
                        className="hover:animate-jump hover:animate-once hover:animate-ease-out mr-2 mb-1.5 text-md"
                        href="/">С 1С:Бухгалтерия</Link>
                    <Link
                        className="hover:animate-jump hover:animate-once hover:animate-ease-out mr-2 mb-1.5 text-md"
                        href="/">С Tilda</Link>
                  </div>
                  <div className="grid grid-cols-1">
                    <label className="text-md font-semibold mb-1.5">Дополнительно</label>
                    <Link
                        className="hover:animate-jump hover:animate-once hover:animate-ease-out mr-2 mb-1.5 text-md"
                        href="/">Настройка</Link>
                    <Link
                        className="hover:animate-jump hover:animate-once hover:animate-ease-out mr-2 mb-1.5 text-md"
                        href="/">Техподдержка</Link>
                    <Link
                        className="hover:animate-jump hover:animate-once hover:animate-ease-out mr-2 mb-1.5 text-md"
                        href="/">Доработка</Link>
                    <Link
                        className="hover:animate-jump hover:animate-once hover:animate-ease-out mr-2 mb-1.5 text-md"
                        href="/">Автоматизация</Link>
                    <Link
                        className="hover:animate-jump hover:animate-once hover:animate-ease-out mr-2 mb-1.5 text-md"
                        href="/">Настройка сквозной аналитики</Link>
                    <Link
                        className="hover:animate-jump hover:animate-once hover:animate-ease-out mr-2 mb-1.5 text-md"
                        href="/">Документооборот</Link>
                    <Link
                        className="hover:animate-jump hover:animate-once hover:animate-ease-out mr-2 mb-1.5 text-md"
                        href="/">Аутстаффинг ИТ-специалистов</Link>
                    <Link
                        className="hover:animate-jump hover:animate-once hover:animate-ease-out mr-2 mb-1.5 text-md"
                        href="/">Установка коробочной версии</Link>
                    <Link
                        className="hover:animate-jump hover:animate-once hover:animate-ease-out mr-2 mb-1.5 text-md"
                        href="/">Настройка Экстранет</Link>
                    <Link
                        className="hover:animate-jump hover:animate-once hover:animate-ease-out mr-2 mb-1.5 text-md"
                        href="/">Импортозамещение</Link>
                    <Link
                        className="hover:animate-jump hover:animate-once hover:animate-ease-out mr-2 mb-1.5 text-md"
                        href="/">DevOps</Link>
                  </div> */}
                </div>
              </DisclosurePanel>
            </Transition>
          </Disclosure>
          <div className={"py-4"}></div>
        </nav>
      </div>
    </>
  )
}

export default MobileNav
