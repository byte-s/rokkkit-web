import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/social-icons'
import RokkitLogo from '@/data/logo'
import styles from '@/components/styles.module.css'

export default function Footer() {
  return (
    <footer>
      <div className="columns-3 mb-4 mt-16 flex space-x-2 justify-between items-center">
        {/*  */}
        <div className="mb-2 flex space-x-2 text-sm">
          <div className='font-medium'>{siteMetadata.author}</div>
          <div>{`© ${new Date().getFullYear()}`}</div>
          <div className={'sm:block hidden'}>Все права защищены</div>
        </div>
        <div className="mb-3 flex space-x-4">
            <a href="mailto:rokkitstudio@gmail.com">
              <svg width="20" height="17" viewBox="0 0 20 16" xmlns="http://www.w3.org/2000/svg" fill='currentColor' className="hover:animate-jump hover:animate-once hover:animate-ease-out text-sm text-gray-900 dark:text-gray-100 transition hover:text-gray-600 h-4 w-4">
                <path d="M20 4.15138V12.9231C20 13.7391 19.6708 14.5218 19.0847 15.0988C18.4987 15.6758 17.7038 16 16.875 16H3.125C2.2962 16 1.50134 15.6758 0.915291 15.0988C0.32924 14.5218 0 13.7391 0 12.9231V4.15138L9.6825 9.76123C9.77869 9.81709 9.88833 9.84655 10 9.84655C10.1117 9.84655 10.2213 9.81709 10.3175 9.76123L20 4.15138ZM16.875 3.80956e-08C17.6439 -0.000119035 18.3859 0.2789 18.959 0.78368C19.5321 1.28846 19.8961 1.98356 19.9813 2.736L10 8.51692L0.0187501 2.736C0.103948 1.98356 0.467905 1.28846 1.04099 0.78368C1.61408 0.2789 2.35607 -0.000119035 3.125 3.80956e-08H16.875Z"/>
              </svg>
            </a>
            <a href="https://t.me/rokkit4business">
              <svg width="16" height="17" viewBox="0 0 16 17" xmlns="http://www.w3.org/2000/svg" fill='currentColor' className="hover:animate-jump hover:animate-once hover:animate-ease-out text-sm text-gray-900 dark:text-gray-100 transition hover:text-gray-600 h-4 w-4">
                <path d="M16 8.81445C16 13.2325 12.418 16.8145 8 16.8145C3.582 16.8145 0 13.2325 0 8.81445C0 4.39645 3.582 0.814453 8 0.814453C12.418 0.814453 16 4.39645 16 8.81445ZM8.28667 6.72045C7.50867 7.04379 5.95333 7.71379 3.62133 8.72979C3.24267 8.88045 3.044 9.02779 3.026 9.17179C2.99533 9.41579 3.30067 9.51179 3.71533 9.64179C3.772 9.65979 3.83067 9.67779 3.89067 9.69779C4.29933 9.83045 4.84867 9.98579 5.134 9.99179C5.39333 9.99712 5.68267 9.89045 6.002 9.67179C8.18067 8.20045 9.30533 7.45712 9.376 7.44112C9.426 7.42979 9.49533 7.41512 9.542 7.45712C9.58867 7.49845 9.584 7.57712 9.57933 7.59845C9.54867 7.72712 8.35267 8.83979 7.73267 9.41579C7.53933 9.59512 7.40267 9.72245 7.37467 9.75179C7.312 9.81645 7.248 9.87845 7.18667 9.93779C6.80667 10.3031 6.52267 10.5778 7.20267 11.0258C7.52933 11.2411 7.79067 11.4191 8.05133 11.5965C8.336 11.7905 8.62 11.9838 8.988 12.2251C9.08133 12.2865 9.17067 12.3498 9.258 12.4118C9.58933 12.6485 9.88733 12.8605 10.2553 12.8271C10.4687 12.8071 10.69 12.6065 10.802 12.0071C11.0667 10.5898 11.588 7.52045 11.7087 6.25512C11.716 6.15006 11.7115 6.04451 11.6953 5.94045C11.6856 5.85641 11.6447 5.77907 11.5807 5.72379C11.4853 5.64579 11.3373 5.62912 11.2707 5.63045C10.97 5.63579 10.5087 5.79645 8.28667 6.72045Z"/>
              </svg>
            </a>        
          </div>
        <div className={styles.footLogo+ ` hover:animate-jump hover:animate-once hover:animate-ease-out mb-2 text-sm text-gray-500 dark:text-gray-400`}>
          <RokkitLogo kind="rokkit" href='/'/>
        </div>
      </div>
    </footer>
  )
}
