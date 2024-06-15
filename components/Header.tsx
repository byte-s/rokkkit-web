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
                  <PopoverButton className="group sm:flex hidden font-medium hover:animate-jump hover:animate-once hover:animate-ease-out items-center gap-1">
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
                      <PopoverPanel anchor="bottom" className="p-4 absolute right-0 z-50 mt-2 w-48 flex flex-col origin-top-right rounded-md bg-white/75 backdrop-blur-xl shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none dark:bg-gray-800/75">
                          <Link className="hover:animate-jump hover:animate-once hover:animate-ease-out mr-2 mb-1.5 text-sm" href="/solutions/bitrix-24">Битрикс24</Link>
                          <Link className="hover:animate-jump hover:animate-once hover:animate-ease-out mr-2 mb-1.5 text-sm" href="/solutions/1c-bitrix">1С-Битрикс: Управление сайтом</Link>
                      </PopoverPanel>
                  </Transition>
              </Popover>
              <Popover >
                  <PopoverButton className="group sm:flex hidden font-medium hover:animate-jump hover:animate-once hover:animate-ease-out items-center gap-1">
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
                      <PopoverPanel anchor="bottom" className={styles.headerPopover+" backdrop-blur-xl max-w-sm p-4 absolute right-0 z-50 mt-2 flex flex-col origin-top-right rounded-md bg-white/75 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none dark:bg-gray-800/75"}>

                          <div className="space-y-2 xl:grid xl:grid-cols-2 gap-x-2 items-start">
                              <div className="grid grid-cols-1">
                                  <label className="text-sm font-semibold mb-1.5">Внедрение</label>
                                  <Link
                                      className="hover:animate-jump hover:animate-once hover:animate-ease-out mr-2 mb-1.5 text-sm"
                                      href="/implementation/package">Пакетное</Link>
                                  <Link
                                      className="hover:animate-jump hover:animate-once hover:animate-ease-out mr-2 mb-1.5 text-sm"
                                      href="/implementation/project">Проектное</Link>
                                  <Link
                                      className="hover:animate-jump hover:animate-once hover:animate-ease-out mr-2 mb-1.5 text-sm"
                                      href="/implementation/support">Сопровождение и поддержка</Link>
                              </div>
                              <div className="grid grid-cols-1">
                                  <label className="text-sm font-semibold mb-1.5">Сайты</label>
                                  <Link
                                      className="hover:animate-jump hover:animate-once hover:animate-ease-out mr-2 mb-1.5 text-sm"
                                      href="/development/corporate">Корпоративный</Link>
                                  {/* <Link
                                      className="hover:animate-jump hover:animate-once hover:animate-ease-out mr-2 mb-1.5 text-sm"
                                      href="/">Сайт-визитка</Link> */}
                                  <Link
                                      className="hover:animate-jump hover:animate-once hover:animate-ease-out mr-2 mb-1.5 text-sm"
                                      href="/development/landing-page">Landing page</Link>
                                  <Link
                                      className="hover:animate-jump hover:animate-once hover:animate-ease-out mr-2 mb-1.5 text-sm"
                                      href="/development/ecommerce">Интернет-магазин</Link>
                              </div>
                              {/* <div className="grid grid-cols-1">
                                  <label className="text-sm font-semibold mb-1.5">Интеграция с Битрикс24</label>
                                  <Link
                                      className="hover:animate-jump hover:animate-once hover:animate-ease-out mr-2 mb-1.5 text-sm"
                                      href="/">С 1С</Link>
                                  <Link
                                      className="hover:animate-jump hover:animate-once hover:animate-ease-out mr-2 mb-1.5 text-sm"
                                      href="/">С телефонией</Link>
                                  <Link
                                      className="hover:animate-jump hover:animate-once hover:animate-ease-out mr-2 mb-1.5 text-sm"
                                      href="/">С сайтом</Link>
                                  <Link
                                      className="hover:animate-jump hover:animate-once hover:animate-ease-out mr-2 mb-1.5 text-sm"
                                      href="/">С мессенджерами и соцсетями</Link>
                                  <Link
                                      className="hover:animate-jump hover:animate-once hover:animate-ease-out mr-2 mb-1.5 text-sm"
                                      href="/">С почтой</Link>
                                  <Link
                                      className="hover:animate-jump hover:animate-once hover:animate-ease-out mr-2 mb-1.5 text-sm"
                                      href="/">С WhatsApp</Link>
                                  <Link
                                      className="hover:animate-jump hover:animate-once hover:animate-ease-out mr-2 mb-1.5 text-sm"
                                      href="/">С управление сайтом (БУС)</Link>
                                  <Link
                                      className="hover:animate-jump hover:animate-once hover:animate-ease-out mr-2 mb-1.5 text-sm"
                                      href="/">С WordPress</Link>
                                  <Link
                                      className="hover:animate-jump hover:animate-once hover:animate-ease-out mr-2 mb-1.5 text-sm"
                                      href="/">С 1C:ЗУП</Link>
                                  <Link
                                      className="hover:animate-jump hover:animate-once hover:animate-ease-out mr-2 mb-1.5 text-sm"
                                      href="/">С ОЗОН</Link>
                                  <Link
                                      className="hover:animate-jump hover:animate-once hover:animate-ease-out mr-2 mb-1.5 text-sm"
                                      href="/">С 1С:Фреш</Link>
                                  <Link
                                      className="hover:animate-jump hover:animate-once hover:animate-ease-out mr-2 mb-1.5 text-sm"
                                      href="/">С 1С:Документооборот</Link>
                                  <Link
                                      className="hover:animate-jump hover:animate-once hover:animate-ease-out mr-2 mb-1.5 text-sm"
                                      href="/">С кассой</Link>
                                  <Link
                                      className="hover:animate-jump hover:animate-once hover:animate-ease-out mr-2 mb-1.5 text-sm"
                                      href="/">Со СДЭК</Link>
                                  <Link
                                      className="hover:animate-jump hover:animate-once hover:animate-ease-out mr-2 mb-1.5 text-sm"
                                      href="/">С 1С:Бухгалтерия</Link>
                                  <Link
                                      className="hover:animate-jump hover:animate-once hover:animate-ease-out mr-2 mb-1.5 text-sm"
                                      href="/">С Tilda</Link>
                              </div>
                              <div className="grid grid-cols-1">
                                  <label className="text-sm font-semibold mb-1.5">Дополнительно</label>
                                  <Link
                                      className="hover:animate-jump hover:animate-once hover:animate-ease-out mr-2 mb-1.5 text-sm"
                                      href="/">Настройка</Link>
                                  <Link
                                      className="hover:animate-jump hover:animate-once hover:animate-ease-out mr-2 mb-1.5 text-sm"
                                      href="/">Техподдержка</Link>
                                  <Link
                                      className="hover:animate-jump hover:animate-once hover:animate-ease-out mr-2 mb-1.5 text-sm"
                                      href="/">Доработка</Link>
                                  <Link
                                      className="hover:animate-jump hover:animate-once hover:animate-ease-out mr-2 mb-1.5 text-sm"
                                      href="/">Автоматизация</Link>
                                  <Link
                                      className="hover:animate-jump hover:animate-once hover:animate-ease-out mr-2 mb-1.5 text-sm"
                                      href="/">Настройка сквозной аналитики</Link>
                                  <Link
                                      className="hover:animate-jump hover:animate-once hover:animate-ease-out mr-2 mb-1.5 text-sm"
                                      href="/">Документооборот</Link>
                                  <Link
                                      className="hover:animate-jump hover:animate-once hover:animate-ease-out mr-2 mb-1.5 text-sm"
                                      href="/">Аутстаффинг ИТ-специалистов</Link>
                                  <Link
                                      className="hover:animate-jump hover:animate-once hover:animate-ease-out mr-2 mb-1.5 text-sm"
                                      href="/">Установка коробочной версии</Link>
                                  <Link
                                      className="hover:animate-jump hover:animate-once hover:animate-ease-out mr-2 mb-1.5 text-sm"
                                      href="/">Настройка Экстранет</Link>
                                  <Link
                                      className="hover:animate-jump hover:animate-once hover:animate-ease-out mr-2 mb-1.5 text-sm"
                                      href="/">Импортозамещение</Link>
                                  <Link
                                      className="hover:animate-jump hover:animate-once hover:animate-ease-out mr-2 mb-1.5 text-sm"
                                      href="/">DevOps</Link>
                              </div> */}
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
                          className="hover:animate-jump hover:animate-once hover:animate-ease-out hidden font-medium text-gray-900 dark:text-gray-100 sm:block"
                      >
                          {link.title}
                      </Link>
                  ))}
              <SearchButton/>
              <ThemeSwitch/>
              <MobileNav/>
          </div>
      </header>
  )
}

export default Header
