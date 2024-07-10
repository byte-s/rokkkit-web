'use client'

import React, { Fragment, useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import { Menu, RadioGroup, Transition } from '@headlessui/react'
import {ChevronDownIcon} from "@heroicons/react/20/solid";
import clsx from "clsx";
import Link from "@/components/Link";

const Sun = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-900 dark:text-gray-100">
    <g clipPath="url(#clip0_2_17312)">
      <path d="M10.2649 14.7656C10.9419 14.7656 11.5816 14.6354 12.1839 14.375C12.7861 14.1146 13.3167 13.7565 13.7757 13.3008C14.2346 12.8451 14.5943 12.3161 14.8548 11.7139C15.1152 11.1116 15.2454 10.472 15.2454 9.79492C15.2454 9.11133 15.1152 8.47005 14.8548 7.87109C14.5943 7.27214 14.2346 6.74317 13.7757 6.28418C13.3167 5.82519 12.7861 5.46549 12.1839 5.20508C11.5816 4.94466 10.9419 4.81445 10.2649 4.81445C9.58781 4.81445 8.94816 4.94466 8.34595 5.20508C7.74374 5.46549 7.21476 5.82519 6.75903 6.28418C6.3033 6.74317 5.94523 7.27214 5.68481 7.87109C5.4244 8.47005 5.29419 9.11133 5.29419 9.79492C5.29419 10.472 5.4244 11.1116 5.68481 11.7139C5.94523 12.3161 6.3033 12.8451 6.75903 13.3008C7.21476 13.7565 7.74374 14.1146 8.34595 14.375C8.94816 14.6354 9.58781 14.7656 10.2649 14.7656ZM1.61255 10.9375C1.92505 10.9375 2.1936 10.8252 2.41821 10.6006C2.64282 10.376 2.75513 10.1074 2.75513 9.79492C2.75513 9.48242 2.64282 9.21387 2.41821 8.98926C2.1936 8.76465 1.92505 8.65234 1.61255 8.65234C1.30005 8.65234 1.03149 8.76465 0.806885 8.98926C0.582275 9.21387 0.469971 9.48242 0.469971 9.79492C0.469971 10.1074 0.582275 10.376 0.806885 10.6006C1.03149 10.8252 1.30005 10.9375 1.61255 10.9375ZM4.14185 4.81445C4.45434 4.81445 4.7229 4.70215 4.94751 4.47754C5.17212 4.25293 5.28442 3.98437 5.28442 3.67188C5.28442 3.35937 5.17212 3.09082 4.94751 2.86621C4.7229 2.6416 4.45434 2.5293 4.14185 2.5293C3.82934 2.5293 3.56079 2.6416 3.33618 2.86621C3.11157 3.09082 2.99927 3.35937 2.99927 3.67188C2.99927 3.98437 3.11157 4.25293 3.33618 4.47754C3.56079 4.70215 3.82934 4.81445 4.14185 4.81445ZM10.2649 2.28516C10.5774 2.28516 10.846 2.17285 11.0706 1.94824C11.2952 1.72363 11.4075 1.45508 11.4075 1.14258C11.4075 0.830079 11.2952 0.561523 11.0706 0.336914C10.846 0.112305 10.5774 0 10.2649 0C9.95239 0 9.68384 0.112305 9.45923 0.336914C9.23462 0.561523 9.12231 0.830079 9.12231 1.14258C9.12231 1.45508 9.23462 1.72363 9.45923 1.94824C9.68384 2.17285 9.95239 2.28516 10.2649 2.28516ZM16.388 4.81445C16.7004 4.81445 16.969 4.70215 17.1936 4.47754C17.4182 4.25293 17.5305 3.98437 17.5305 3.67188C17.5305 3.35937 17.4182 3.09082 17.1936 2.86621C16.969 2.6416 16.7004 2.5293 16.388 2.5293C16.0754 2.5293 15.8069 2.6416 15.5823 2.86621C15.3577 3.09082 15.2454 3.35937 15.2454 3.67188C15.2454 3.98437 15.3577 4.25293 15.5823 4.47754C15.8069 4.70215 16.0754 4.81445 16.388 4.81445ZM18.9173 10.9375C19.2297 10.9375 19.4983 10.8252 19.7229 10.6006C19.9475 10.376 20.0598 10.1074 20.0598 9.79492C20.0598 9.48242 19.9475 9.21387 19.7229 8.98926C19.4983 8.76465 19.2297 8.65234 18.9173 8.65234C18.6047 8.65234 18.3362 8.76465 18.1116 8.98926C17.887 9.21387 17.7747 9.48242 17.7747 9.79492C17.7747 10.1074 17.887 10.376 18.1116 10.6006C18.3362 10.8252 18.6047 10.9375 18.9173 10.9375ZM16.388 17.0605C16.7004 17.0605 16.969 16.9482 17.1936 16.7236C17.4182 16.499 17.5305 16.2305 17.5305 15.918C17.5305 15.6055 17.4182 15.3369 17.1936 15.1123C16.969 14.8877 16.7004 14.7754 16.388 14.7754C16.0754 14.7754 15.8069 14.8877 15.5823 15.1123C15.3577 15.3369 15.2454 15.6055 15.2454 15.918C15.2454 16.2305 15.3577 16.499 15.5823 16.7236C15.8069 16.9482 16.0754 17.0605 16.388 17.0605ZM10.2649 19.5898C10.5774 19.5898 10.846 19.4775 11.0706 19.2529C11.2952 19.0283 11.4075 18.7598 11.4075 18.4473C11.4075 18.1348 11.2952 17.8662 11.0706 17.6416C10.846 17.417 10.5774 17.3047 10.2649 17.3047C9.95239 17.3047 9.68384 17.417 9.45923 17.6416C9.23462 17.8662 9.12231 18.1348 9.12231 18.4473C9.12231 18.7598 9.23462 19.0283 9.45923 19.2529C9.68384 19.4775 9.95239 19.5898 10.2649 19.5898ZM4.14185 17.0605C4.45434 17.0605 4.7229 16.9482 4.94751 16.7236C5.17212 16.499 5.28442 16.2305 5.28442 15.918C5.28442 15.6055 5.17212 15.3369 4.94751 15.1123C4.7229 14.8877 4.45434 14.7754 4.14185 14.7754C3.82934 14.7754 3.56079 14.8877 3.33618 15.1123C3.11157 15.3369 2.99927 15.6055 2.99927 15.918C2.99927 16.2305 3.11157 16.499 3.33618 16.7236C3.56079 16.9482 3.82934 17.0605 4.14185 17.0605Z"/>
    </g>
    <defs>
      <clipPath id="clip0_2_17312">
        <rect width="19.5898" height="19.5996" fill="currentColor" transform="translate(0.469971)"/>
      </clipPath>
    </defs>
  </svg>
  
)
const Moon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-900 dark:text-gray-100">
    <g clipPath="url(#clip0_2_17382)">
      <path d="M15.3595 13.0859C14.0379 13.0859 12.8448 12.8873 11.7804 12.4902C10.7159 12.0931 9.80449 11.5202 9.04603 10.7715C8.28756 10.0228 7.7065 9.11947 7.30286 8.06152C6.89921 7.00358 6.69739 5.81055 6.69739 4.48242C6.69739 4.11784 6.72506 3.71908 6.7804 3.28613C6.83573 2.85319 6.90898 2.4349 7.00013 2.03125C7.09127 1.6276 7.19544 1.28906 7.31263 1.01562C7.3582 0.904946 7.3875 0.812174 7.40052 0.737305C7.41354 0.662435 7.42005 0.602214 7.42005 0.556641C7.42005 0.426432 7.37122 0.301107 7.27356 0.180664C7.1759 0.0602213 7.03268 0 6.84388 0C6.79179 0 6.71366 0.00813803 6.6095 0.0244141C6.50533 0.0406901 6.39791 0.0683594 6.28724 0.107422C5.08281 0.589193 4.02812 1.31022 3.12317 2.27051C2.21822 3.2308 1.51347 4.33919 1.00891 5.5957C0.504354 6.85221 0.252075 8.16406 0.252075 9.53125C0.252075 10.9701 0.507609 12.2884 1.01868 13.4863C1.52974 14.6842 2.24263 15.7243 3.15735 16.6064C4.07206 17.4886 5.14302 18.1706 6.37023 18.6523C7.59745 19.1341 8.92396 19.375 10.3498 19.375C11.4044 19.375 12.4103 19.2269 13.3673 18.9307C14.3243 18.6344 15.2033 18.2243 16.0041 17.7002C16.8048 17.1761 17.4981 16.5674 18.0841 15.874C18.67 15.1807 19.1127 14.4369 19.4123 13.6426C19.4578 13.5254 19.4871 13.4163 19.5001 13.3154C19.5131 13.2145 19.5197 13.1413 19.5197 13.0957C19.5197 12.9134 19.4578 12.7669 19.3341 12.6562C19.2104 12.5455 19.0802 12.4902 18.9435 12.4902C18.8328 12.4902 18.6928 12.5195 18.5236 12.5781C18.146 12.7018 17.674 12.8174 17.1076 12.9248C16.5412 13.0322 15.9585 13.0859 15.3595 13.0859Z"/>
    </g>
    <defs>
      <clipPath id="clip0_2_17382">
        <rect width="19.2676" height="19.3848" fill="currentColor" transform="translate(0.252075)"/>
      </clipPath>
    </defs>
  </svg>
)
const Monitor = () => (
  <svg width="24" height="22" viewBox="0 0 24 22" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-900 dark:text-gray-100">
    <g clipPath="url(#clip0_2_5972)">
      <path d="M2.24609 17.8808H21.0254C21.7285 17.8808 22.2803 17.6806 22.6807 17.2802C23.081 16.8799 23.2812 16.3281 23.2812 15.625V3.91599C23.2812 3.21286 23.081 2.66273 22.6807 2.2656C22.2803 1.86846 21.7285 1.66989 21.0254 1.66989H2.24609C1.54948 1.66989 1.00098 1.86846 0.600586 2.2656C0.200195 2.66273 0 3.21286 0 3.91599V15.625C0 16.3281 0.200195 16.8799 0.600586 17.2802C1.00098 17.6806 1.54948 17.8808 2.24609 17.8808ZM2.27539 16.3086C2.06054 16.3086 1.88965 16.2451 1.7627 16.1181C1.63575 15.9912 1.57227 15.8203 1.57227 15.6054V3.94528C1.57227 3.72392 1.63575 3.5514 1.7627 3.42771C1.88965 3.30401 2.06054 3.24216 2.27539 3.24216H21.0059C21.2207 3.24216 21.3916 3.30401 21.5186 3.42771C21.6455 3.5514 21.709 3.72392 21.709 3.94528V15.6054C21.709 15.8203 21.6455 15.9912 21.5186 16.1181C21.3916 16.2451 21.2207 16.3086 21.0059 16.3086H2.27539ZM8.55469 20.2051H14.7266V17.7539H8.55469V20.2051ZM8.49609 21.3476H14.7852C15 21.3476 15.1839 21.2711 15.3369 21.1181C15.4899 20.9651 15.5664 20.7779 15.5664 20.5566C15.5664 20.3353 15.4899 20.1481 15.3369 19.9951C15.1839 19.8421 15 19.7656 14.7852 19.7656H8.49609C8.28125 19.7656 8.0957 19.8421 7.93945 19.9951C7.7832 20.1481 7.70508 20.3353 7.70508 20.5566C7.70508 20.7779 7.7832 20.9651 7.93945 21.1181C8.0957 21.2711 8.28125 21.3476 8.49609 21.3476Z"/>
    </g>
    <defs>
      <clipPath id="clip0_2_5972">
        <rect width="23.2812" height="20.3613" fill="currentColor" transform="translate(0 0.986298)"/>
      </clipPath>
    </defs>
  </svg>
)

const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme, resolvedTheme } = useTheme()

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), [])

  return (
      <div className="mr-5">
        <div className="dropdown dropdown-hover">
          <div tabIndex={0} role="button"
               className="mt-1.5 focus:outline-none group sm:flex hidden font-medium hover:scale-105 transition duration-300 items-center gap-1">
            {resolvedTheme === 'dark' ? <Moon/> : <Sun/>}
          </div>
          <ul tabIndex={0}
              className="dropdown-content menu bg-base-100 dark:bg-gray-900 rounded-box z-[1] w-52 p-2 shadow dark:shadow-gray-950">

            <RadioGroup value={theme} onChange={setTheme}>
                <RadioGroup.Option value="light">
                  <button
                      className="hover:bg-gray-200 dark:hover:bg-gray-800 hover:scale-105 transition duration-300 rounded-lg group flex w-full items-center  px-2 py-2 text-sm">
                    <div className="mr-2">
                      <Sun/>
                    </div>
                    Светлая
                  </button>
                </RadioGroup.Option>
                <RadioGroup.Option value="dark">
                  <button
                      className="hover:bg-gray-200 dark:hover:bg-gray-800 hover:scale-105 transition duration-300 rounded-lg group flex w-full items-center px-2 py-2 text-sm">
                    <div className="mr-2">
                      <Moon/>
                    </div>
                    Темная
                  </button>
                </RadioGroup.Option>
                <RadioGroup.Option value="system">
                  <button
                      className="hover:bg-gray-200 dark:hover:bg-gray-800 hover:scale-105 transition duration-300 rounded-lg group flex w-full items-center px-2 py-2 text-sm">
                    <div className="mr-2">
                      <Monitor/>
                    </div>
                    Системная
                  </button>
                </RadioGroup.Option>
            </RadioGroup>
          </ul>
        </div>
      </div>
  )
}

export default ThemeSwitch
