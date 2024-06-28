import headerNavLinks from '@/data/headerNavLinks'
import Link from './Link'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'
import SearchButton from './SearchButton'
import RokkitLogo from '@/data/logo'
import {Popover, PopoverButton, PopoverPanel, Transition} from "@headlessui/react";
import {ChevronDownIcon} from "@heroicons/react/20/solid";
import clsx from "clsx";
import React, {Fragment} from "react";
import styles from "@/components/styles.module.css";


const Header = () => {
  return (
      <header className="flex items-center justify-between py-10">
          <div className="hover:animate-jump hover:animate-once hover:animate-ease-out">
              <RokkitLogo kind="rokkit" href='/'/>
          </div>
          <div className="flex items-center space-x-4 leading-5 sm:space-x-6">
              <Popover >
                  <PopoverButton className="focus:outline-none group sm:flex hidden font-medium hover:scale-105 transition duration-300 items-center gap-1">
                      Решения
                      <ChevronDownIcon className={clsx('size-5 group-data-[open]:rotate-180')} />
                  </PopoverButton>
                  <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                  >
                      <PopoverPanel anchor="bottom" className="px-8 py-6 absolute right-0 z-50 mt-2 !max-w-sm flex flex-col origin-top-right rounded-md bg-white/75 backdrop-blur-xl shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none dark:bg-gray-800/75">
                          <Link className="hover:animate-jump hover:animate-once hover:animate-ease-out mr-2 mb-1.5 text-sm" href="/solutions/bitrix24">Битрикс24</Link>
                          <Link className="hover:animate-jump hover:animate-once hover:animate-ease-out mr-2 mb-1.5 text-sm" href="/solutions/1c-bitrix">1С-Битрикс: Управление сайтом</Link>
                      </PopoverPanel>
                  </Transition>
              </Popover>
              <Popover >
                  <PopoverButton className="focus:outline-none group sm:flex hidden font-medium hover:scale-105 transition duration-300 items-center gap-1">
                      Услуги
                      <ChevronDownIcon className={clsx('size-5 group-data-[open]:rotate-180')} />
                  </PopoverButton>
                  <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                  >
                      <PopoverPanel anchor="bottom" className={styles.headerPopover+" backdrop-blur-xl max-w-md px-8 py-6 absolute right-0 z-50 mt-2 flex flex-col origin-top-right rounded-md bg-white/75 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none dark:bg-gray-800/75"}>

                          <div className="space-y-2 grid gap-x-2 gap-y-4 items-start">
                              <div className="grid lg:grid-cols-2">
                                  <label className="text-sm font-semibold mb-2">Внедрение</label>
                                  <div className='grid'>
                                      <Link
                                          className="hover:scale-105 transition duration-300 mr-2 mb-1.5 text-sm"
                                          href="/implementation/package">Пакетное</Link>
                                      <Link
                                          className="hover:scale-105 transition duration-300 mr-2 mb-1.5 text-sm"
                                          href="/implementation/project">Проектное</Link>
                                  </div>

                              </div>
                              <div className="grid lg:grid-cols-2 !mt-0">
                                  <label className="text-sm font-semibold mb-2">Сайты</label>
                                  <div className='grid'>
                                      <Link
                                          className="hover:scale-105 transition duration-300 mr-2 mb-1.5 text-sm"
                                          href="/development/corporate">Корпоративный</Link>
                                      <Link
                                          className="hover:scale-105 transition duration-300 mr-2 mb-1.5 text-sm"
                                          href="/development/landing-page">Landing page</Link>
                                      <Link
                                          className="hover:scale-105 transition duration-300 mr-2 mb-1.5 text-sm"
                                          href="/development/ecommerce">Интернет-магазин</Link>
                                  </div>

                              </div>
                          </div>
                      </PopoverPanel>
                  </Transition>
              </Popover>
              {headerNavLinks
                  .filter((link) => link.href !== '/')
                  .map((link) => (
                      <Link
                          key={link.title}
                          href={link.href}
                          className="hover:scale-105 transition duration-300 hidden font-medium text-gray-900 dark:text-gray-100 sm:block"
                      >
                          {link.title}
                      </Link>
                  ))}
              <ThemeSwitch/>
              <MobileNav/>
          </div>
      </header>
  )
}

export default Header
