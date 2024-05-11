
import 'react-toastify/dist/ReactToastify.css';
import { Authors, allAuthors } from '.contentlayer/generated'
import { MDXLayoutRenderer } from 'pliny/mdx-components'
import AuthorLayout from '@/layouts/AuthorLayout'
import { coreContent } from 'pliny/utils/contentlayer'
import { genPageMetadata } from 'app/seo'
import styles from '@/components/styles.module.css'
import React from 'react'
import { toast, ToastContainer } from 'react-toastify'
import Form from '@/components/Form';


export const metadata = genPageMetadata({ title: 'Наши контакты' })

export default function Page() {

    
  return (
    <>
        <ToastContainer 
                        position="top-center"
                        autoClose={5000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                    />
      
        <div className="divide-y divide-gray-200 dark:divide-gray-700">
            <div className="space-y-2 pb-8 pt-6 md:space-y-5">
                <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
                    Наши контакты
                </h1>
            </div>
            <div className="items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
                <div className="flex flex-col items-start space-x-2 pt-8 xl:col-span-2">
                    <h2 className={styles.head+` text-xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14`}>
                    Расскажите о своем проекте
                    </h2>
                    <Form/>
                </div>
                <div className={styles.contactWrapper+` flex flex-col items-start space-x-2 pt-8 prose max-w-none pb-8 pt-8 dark:prose-invert xl:col-span-1`}>
                    <h3 className={styles.head+` font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14`}>Наша почта</h3>
                    <a className={styles.prose} href="mailto:rokkitstudio@gmail.com">rokkitstudio@gmail.com</a>
                    <h3 className={styles.head+` font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14`}>Наши соц. сети</h3>
                    <a className={styles.prose} href="http://">VK</a>
                    <a className={styles.prose} href="http://">Telegram</a>
                    <h3 className={styles.head+` font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14`}>Наши контакты</h3>
                    <p className={styles.prose}>Российская Федерация, Омская область, <br /> г. Омск, ул. Фурманова, 7В</p>
                    <p className={styles.prose}>+7 913 143-09-86</p>
                    <h3 className={styles.head+` font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14`}>Реквизиты</h3>
                    <p className={styles.prose}>ООО «РОККИТ»</p>
                    <span className={styles.prose}>Юридический адрес</span>
                    <p className={styles.prose}>644031, РОССИЯ, ОМСКАЯ ОБЛАСТЬ, Г.О. ГОРОД ОМСК, Г ОМСК, УЛ ЧЕРНОМОРСКАЯ, Д. 6</p>
                    <span className={styles.prose}>ИНН/КПП</span>
                    <p className={styles.prose}>5503274800/550301001</p>
                    <span className={styles.prose}>ОГРН/ОГРНИП</span>
                    <p className={styles.prose}>1245500003650</p>
                    <span className={styles.prose}>Расчетный счет</span>
                    <p className={styles.prose}>40702810010001582089</p>
                    <span className={styles.prose}>Банк</span>
                    <p className={styles.prose}>АО «ТИНЬКОФФ БАНК»</p>
                    <span className={styles.prose}>ИНН банка</span>
                    <p className={styles.prose}>7710140679</p>
                    <span className={styles.prose}>БИК банка</span>
                    <p className={styles.prose}>044525974</p>
                    <span className={styles.prose}>Корреспондентский счет банка</span>
                    <p className={styles.prose}>30101810145250000974</p>
                </div>
            </div>
        </div>
    </>
  )
}
