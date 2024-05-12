import Link from '@/components/Link'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { formatDate } from 'pliny/utils/formatDate'
import NewsletterForm from 'pliny/ui/NewsletterForm'
import styles from '@/components/styles.module.css'

const MAX_DISPLAY = 5

export default function Home() {
  return (
    <>
      <div className='divide-y divide-gray-200 dark:divide-gray-700'>
        <div className="hover:animate-jump hover:animate-duration-[1ms] animate-wiggle animate-infinite animate-duration-[10000ms] animate-ease-in-out animate-alternate animate-fill-both space-y-2 pb-8 pt-6 md:space-y-5">
            <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Улучшаем бизнес с помощью уникального плана роста, тщательного анализа рынка и современной разработки, включая внедрение CRM систем
            </h1>
            <a href='/contacts' className={styles.mainLink+` hover:animate-shake text-lg leading-9 text-gray-500 dark:text-gray-400`}>
              Свяжитесь с нами
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 42 42" fill="currentColor" className="h-7 w-7 text-gray-500 dark:text-gray-400">
                <path clipRule="evenodd" d="M2.625 21C2.625 20.6519 2.76328 20.3181 3.00942 20.0719C3.25556 19.8258 3.5894 19.6875 3.9375 19.6875H34.8941L26.6332 11.4292C26.3868 11.1828 26.2483 10.8485 26.2483 10.5C26.2483 10.1515 26.3868 9.8172 26.6332 9.57074C26.8797 9.32429 27.214 9.18584 27.5625 9.18584C27.911 9.18584 28.2453 9.32429 28.4918 9.57074L38.9918 20.0707C39.114 20.1927 39.211 20.3375 39.2771 20.497C39.3433 20.6564 39.3773 20.8274 39.3773 21C39.3773 21.1726 39.3433 21.3436 39.2771 21.503C39.211 21.6625 39.114 21.8073 38.9918 21.9292L28.4918 32.4292C28.2453 32.6757 27.911 32.8142 27.5625 32.8142C27.214 32.8142 26.8797 32.6757 26.6332 32.4292C26.3868 32.1828 26.2483 31.8485 26.2483 31.5C26.2483 31.1515 26.3868 30.8172 26.6332 30.5707L34.8941 22.3125H3.9375C3.5894 22.3125 3.25556 22.1742 3.00942 21.9281C2.76328 21.6819 2.625 21.3481 2.625 21Z"/>
              </svg>
            </a>
          </div>
      </div>
    </>
  )
}
