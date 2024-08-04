import headerNavLinks from '@/data/headerNavLinks'
import Link from './Link'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'
import SearchButton from './SearchButton'
import {Popover, PopoverButton, PopoverPanel, Transition} from "@headlessui/react";
import {ChevronDownIcon} from "@heroicons/react/20/solid";
import clsx from "clsx";
import React, {Fragment} from "react";
import styles from "@/components/styles.module.css";


const Header = () => {
  return (
      <header className="flex items-center justify-between py-10">
          <div className="hover:animate-jump hover:animate-once hover:animate-ease-out">
              <a href={'/'} className={'inline-flex items-center'}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 74 74" fill="none">
                      <rect width="74" height="74" rx="37" fill="currentColor"/>
                      <path
                          d="M34.3706 19.0959L17.7127 47.5234C16.1262 50.2273 17.6114 51.8034 21.0375 51.037L37.2566 47.3932L52.9525 51.0081C56.3617 51.7889 57.8638 50.2273 56.311 47.5089L40.0582 19.1248C38.5055 16.4064 35.957 16.3919 34.3706 19.0959Z"
                          fill="url(#paint0_linear_1450_14514)"/>
                      <defs>
                          <linearGradient id="paint0_linear_1450_14514" x1="17.9684" y1="50.0107" x2="37.0694"
                                          y2="9.11623" gradientUnits="userSpaceOnUse">
                              <stop offset="0.0001" stop-color="#6A6EC6"/>
                              <stop offset="1" stop-color="#9E63FF"/>
                          </linearGradient>
                      </defs>
                  </svg>
                  <span className={'!text-3xl font-extrabold ml-1'}>Rokkit</span>
              </a>
          </div>
          <div className="flex items-center space-x-4 leading-5 sm:space-x-6">
              <div className="dropdown dropdown-hover sm:inline-block hidden dropdown-end">
                  <div tabIndex={0} role="button"
                       className="focus:outline-none group text-xl inline-flex font-medium hover:scale-105 transition duration-300 items-center gap-1">
                      Решения
                      <ChevronDownIcon className={clsx('size-5')}/>
                  </div>
                  <ul tabIndex={0}
                      className="dropdown-content menu bg-base-100 dark:bg-gray-900 rounded-box z-[1000] w-52 p-2 shadow dark:shadow-gray-950">
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
              {/*<div className="dropdown dropdown-hover sm:inline-block hidden dropdown-end">*/}
              {/*    <div tabIndex={0} role="button"*/}
              {/*         className="focus:outline-none group inline-flex font-medium hover:scale-105 transition duration-300 items-center gap-1">*/}
              {/*        Услуги*/}
              {/*        <ChevronDownIcon className={clsx('size-5')}/>*/}
              {/*    </div>*/}
              {/*    <ul tabIndex={0} className="dropdown-content menu bg-base-100 dark:bg-gray-900 rounded-box z-[1000] w-52 p-2 shadow dark:shadow-gray-950">*/}
              {/*        <label className="ml-4 mt-2 text-sm font-semibold mb-2">Внедрение</label>*/}
              {/*        <li>*/}
              {/*            <Link*/}
              {/*                className="hover:bg-gray-200 dark:hover:bg-gray-800 hover:scale-105 transition duration-300 rounded-lg mr-2 mb-1.5 text-sm"*/}
              {/*                href="/implementation/package">Пакетное</Link>*/}
              {/*        </li>*/}
              {/*        <li>*/}
              {/*            <Link*/}
              {/*                className="hover:bg-gray-200 dark:hover:bg-gray-800 hover:scale-105 transition duration-300 rounded-lg mr-2 mb-1.5 text-sm"*/}
              {/*                href="/implementation/project">Проектное</Link>*/}
              {/*        </li>*/}
              {/*        <label className="ml-4 mt-2 text-sm font-semibold mb-2">Сайты</label>*/}
              {/*        <li>*/}
              {/*            <Link*/}
              {/*                className="hover:bg-gray-200 dark:hover:bg-gray-800 hover:scale-105 transition duration-300 rounded-lg mr-2 mb-1.5 text-sm"*/}
              {/*                href="/development/corporative">Корпоративный</Link>*/}
              {/*        </li>*/}
              {/*        <li>*/}
              {/*            <Link*/}
              {/*                className="hover:bg-gray-200 dark:hover:bg-gray-800 hover:scale-105 transition duration-300 rounded-lg mr-2 mb-1.5 text-sm"*/}
              {/*                href="/development/landing">Landing page</Link>*/}
              {/*        </li>*/}
              {/*        <li>*/}
              {/*            <Link*/}
              {/*                className="hover:bg-gray-200 dark:hover:bg-gray-800 hover:scale-105 transition duration-300 rounded-lg mr-2 mb-1.5 text-sm"*/}
              {/*                href="/development/ecommerce">Интернет-магазин</Link>*/}
              {/*        </li>*/}
              {/*    </ul>*/}
              {/*</div>*/}
              {headerNavLinks
                  .filter((link) => link.href !== '/')
                  .map((link) => (
                      <Link
                          key={link.title}
                          href={link.href}
                          className="hover:scale-105 transition duration-300 hidden text-xl font-medium text-gray-900 dark:text-gray-100 sm:block"
                      >
                          {link.title}
                      </Link>
                  ))}
              <div className={'py-2 px-4 bg-gray-200 rounded-full hover:scale-105 transition'}>
                  <a href="https://t.me/rokkit4business" className={'inline-flex items-center text-gray-900'}>
                      <span className={'text-lg font-medium mr-2 hidden md:block'}>Написать</span>
                      <svg width="16" height="17" viewBox="0 0 16 17" xmlns="http://www.w3.org/2000/svg"
                           fill='#00AFF7'
                           className=" hover:text-gray-600 h-6 w-6">
                          <path
                              d="M16 8.81445C16 13.2325 12.418 16.8145 8 16.8145C3.582 16.8145 0 13.2325 0 8.81445C0 4.39645 3.582 0.814453 8 0.814453C12.418 0.814453 16 4.39645 16 8.81445ZM8.28667 6.72045C7.50867 7.04379 5.95333 7.71379 3.62133 8.72979C3.24267 8.88045 3.044 9.02779 3.026 9.17179C2.99533 9.41579 3.30067 9.51179 3.71533 9.64179C3.772 9.65979 3.83067 9.67779 3.89067 9.69779C4.29933 9.83045 4.84867 9.98579 5.134 9.99179C5.39333 9.99712 5.68267 9.89045 6.002 9.67179C8.18067 8.20045 9.30533 7.45712 9.376 7.44112C9.426 7.42979 9.49533 7.41512 9.542 7.45712C9.58867 7.49845 9.584 7.57712 9.57933 7.59845C9.54867 7.72712 8.35267 8.83979 7.73267 9.41579C7.53933 9.59512 7.40267 9.72245 7.37467 9.75179C7.312 9.81645 7.248 9.87845 7.18667 9.93779C6.80667 10.3031 6.52267 10.5778 7.20267 11.0258C7.52933 11.2411 7.79067 11.4191 8.05133 11.5965C8.336 11.7905 8.62 11.9838 8.988 12.2251C9.08133 12.2865 9.17067 12.3498 9.258 12.4118C9.58933 12.6485 9.88733 12.8605 10.2553 12.8271C10.4687 12.8071 10.69 12.6065 10.802 12.0071C11.0667 10.5898 11.588 7.52045 11.7087 6.25512C11.716 6.15006 11.7115 6.04451 11.6953 5.94045C11.6856 5.85641 11.6447 5.77907 11.5807 5.72379C11.4853 5.64579 11.3373 5.62912 11.2707 5.63045C10.97 5.63579 10.5087 5.79645 8.28667 6.72045Z"/>
                      </svg>
                  </a>
              </div>
              <ThemeSwitch/>
              <MobileNav/>
          </div>
      </header>
  )
}

export default Header
