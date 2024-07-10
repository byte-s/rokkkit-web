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
        className={`fixed left-0 top-0 z-10 h-full w-full transform bg-white duration-300 ease-in-out dark:bg-gray-950 dark:opacity-[0.98] ${
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
        <nav className={styles.scrollNav + " fixed mt-8"}>

          {headerNavLinks.map((link) => (
              <div key={link.title} className="px-12 py-4">
                <Link
                    href={link.href}
                    className="hover:scale-105 transition duration-300 text-2xl font-bold text-gray-900 dark:text-gray-100"
                    onClick={onToggleNav}
                >
                  {link.title}
                </Link>
              </div>
          ))}
          <Disclosure>
            <DisclosureButton
                className="hover:scale-105 transition duration-300 group flex w-full items-center gap-1 text-2xl font-bold text-gray-900 dark:text-gray-100 px-12 py-4">
              Решения
              <ChevronDownIcon className={clsx('size-5 group-data-[open]:rotate-180')}/>
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
                <Link className="hover:scale-105 transition duration-300 mr-2 my-2 text-md"
                      href="/solutions/bitrix24">Битрикс24</Link>
                <Link className="hover:scale-105 transition duration-300 mr-2 my-2 text-md" href="/solutions/1c-bitrix">1С-Битрикс:
                  Управление сайтом</Link>
              </DisclosurePanel>
            </Transition>
          </Disclosure>
          <Disclosure>
            <DisclosureButton
                className="hover:scale-105 transition duration-300 flex w-full items-center gap-1 text-2xl font-bold text-gray-900 dark:text-gray-100 px-12 py-4">
              Услуги
              <ChevronDownIcon className={clsx('size-5 group-data-[open]:rotate-180')}/>
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
                    <label className="text-md font-semibold my-2">Внедрение</label>
                    <Link
                        className="hover:scale-105 transition duration-300 mr-2 my-2 text-md"
                        href="/implementation/package">Пакетное</Link>
                    <Link
                        className="hover:scale-105 transition duration-300 mr-2 my-2 text-md"
                        href="/implementation/project">Проектное</Link>
                  </div>
                  <div className="grid grid-cols-1">
                    <label className="text-md font-semibold my-2">Сайты</label>
                    <Link
                        className="hover:scale-105 transition duration-300 mr-2 my-2 text-md"
                        href="/development/corporative">Корпоративный</Link>
                    <Link
                        className="hover:scale-105 transition duration-300 mr-2 my-2 text-md"
                        href="/development/landing">Landing page</Link>
                    <Link
                        className="hover:scale-105 transition duration-300 mr-2 my-2 text-md"
                        href="/development/ecommerce">Интернет-магазин</Link>
                  </div>
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
