  import {
    Logo
  } from './icon'
  
  const components = {
    rokkit: Logo
  }
  
  type RokkitLogoProps = {
    kind: keyof typeof components
    href: string | undefined
  }
  
  const RokkitLogo = ({ kind, href }: RokkitLogoProps) => {
  
    const RokkitSvg = components[kind]
  
    return (
      <a
        className="text-sm text-gray-900 transition hover:text-gray-600"
        href={href}
      >
        <RokkitSvg
          className={`fill-current text-gray-900 hover:text-primary-500 dark:text-gray-100 dark:hover:text-primary-400"`}
          width="90" height="20"
        />
      </a>
    )
  }
  
  export default RokkitLogo
  