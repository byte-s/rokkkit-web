import {
  Web,
  CRM,
  Design,
  Bot,
  AD
} from './icons'

const components = {
  web: Web,
  crm: CRM,
  design: Design,
  bot: Bot,
  ad: AD
}

type ServiceIconProps = {
  kind: keyof typeof components
  size?: number
}

const ServiceIcon = ({ kind, size = 8 }: ServiceIconProps) => {

  const ServiceSvg = components[kind]

  return (
    <>
      <span className="sr-only">{kind}</span>
      <ServiceSvg
        className={`fill-current h-${size} w-${size}`}
      />
    </>
  )
}

export default ServiceIcon
