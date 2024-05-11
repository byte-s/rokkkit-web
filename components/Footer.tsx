import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/social-icons'
import RokkitLogo from '@/data/logo'
import styles from '@/components/styles.module.css'

export default function Footer() {
  return (
    <footer>
      <div className="columns-3 mb-4 mt-16 flex space-x-2 justify-between items-center">
        {/*  */}
        <div className="mb-2 flex space-x-2 text-sm text-gray-900 dark:text-gray-100">
          <div>{siteMetadata.author}</div>
          <div>{`© ${new Date().getFullYear()}`}</div>
          <div>Все права защищены</div>
        </div>
        <div className="mb-3 flex space-x-4">
            <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} size={4} />
            <SocialIcon kind="telegram" href={siteMetadata.github} size={4} />
            <SocialIcon kind="vk" href={siteMetadata.facebook} size={4} />
          </div>
        <div className={styles.footLogo+ ` hover:animate-jump hover:animate-once hover:animate-ease-out mb-2 text-sm text-gray-500 dark:text-gray-400`}>
          <RokkitLogo kind="rokkit" href='/'/>
        </div>
      </div>
    </footer>
  )
}
