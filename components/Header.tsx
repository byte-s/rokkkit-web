import siteMetadata from '@/data/siteMetadata'
import Logo from '@/data/logo.svg'
import headerNavLinks from '@/data/headerNavLinks'
import Link from './Link'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'
import SearchButton from './SearchButton'
import ContactButton from './ContactButton'
import RokkitLogo from '@/data/logo'

const Header = () => {
  return (
    <header className="flex items-center justify-between py-10">
      <div className="hover:animate-jump hover:animate-once hover:animate-ease-out">
        <RokkitLogo kind="rokkit" href='/'/>
      </div>
      <div className="flex items-center space-x-4 leading-5 sm:space-x-6">
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
        <SearchButton />
        <ThemeSwitch />
        <MobileNav />
      </div>
    </header>
  )
}

export default Header
