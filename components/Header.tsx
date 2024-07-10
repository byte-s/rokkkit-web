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
              <div className="dropdown dropdown-hover">
                  <div tabIndex={0} role="button"
                       className="focus:outline-none group sm:flex hidden font-medium hover:scale-105 transition duration-300 items-center gap-1">
                      Решения
                      <ChevronDownIcon className={clsx('size-5')}/>
                  </div>
                  <ul tabIndex={0} className="dropdown-content menu bg-base-100 dark:bg-gray-900 rounded-box z-[1] w-52 p-2 shadow dark:shadow-gray-950">
                      <li className="">
                          <Link
                              className="hover:bg-gray-200 dark:hover:bg-gray-800 hover:scale-105 transition duration-300 rounded-lg mr-2 mb-1.5 text-sm"
                              href="/solutions/bitrix24">Битрикс24</Link>
                      </li>
                      <li>
                          <Link
                              className="hover:bg-gray-200 dark:hover:bg-gray-800 hover:scale-105 transition duration-300 rounded-lg mr-2 mb-1.5 text-sm"
                              href="/solutions/1c-bitrix">1С-Битрикс: Управление сайтом</Link>
                      </li>
                  </ul>
              </div>
              <div className="dropdown dropdown-hover">
                  <div tabIndex={0} role="button"
                       className="focus:outline-none group sm:flex hidden font-medium hover:scale-105 transition duration-300 items-center gap-1">
                      Услуги
                      <ChevronDownIcon className={clsx('size-5')}/>
                  </div>
                  <ul tabIndex={0} className="dropdown-content menu bg-base-100 dark:bg-gray-900 rounded-box z-[1] w-52 p-2 shadow dark:shadow-gray-950">
                      <label className="ml-4 mt-2 text-sm font-semibold mb-2">Внедрение</label>
                      <li>
                          <Link
                              className="hover:bg-gray-200 dark:hover:bg-gray-800 hover:scale-105 transition duration-300 rounded-lg mr-2 mb-1.5 text-sm"
                              href="/implementation/package">Пакетное</Link>
                      </li>
                      <li>
                          <Link
                              className="hover:bg-gray-200 dark:hover:bg-gray-800 hover:scale-105 transition duration-300 rounded-lg mr-2 mb-1.5 text-sm"
                              href="/implementation/project">Проектное</Link>
                      </li>
                      <label className="ml-4 mt-2 text-sm font-semibold mb-2">Сайты</label>
                      <li>
                          <Link
                              className="hover:bg-gray-200 dark:hover:bg-gray-800 hover:scale-105 transition duration-300 rounded-lg mr-2 mb-1.5 text-sm"
                              href="/development/corporative">Корпоративный</Link>
                      </li>
                      <li>
                          <Link
                              className="hover:bg-gray-200 dark:hover:bg-gray-800 hover:scale-105 transition duration-300 rounded-lg mr-2 mb-1.5 text-sm"
                              href="/development/landing">Landing page</Link>
                      </li>
                      <li>
                          <Link
                              className="hover:bg-gray-200 dark:hover:bg-gray-800 hover:scale-105 transition duration-300 rounded-lg mr-2 mb-1.5 text-sm"
                              href="/development/ecommerce">Интернет-магазин</Link>
                      </li>
                  </ul>
              </div>
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
