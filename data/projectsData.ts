interface Project {
  title: string,
  description: string,
  href?: string,
  imgSrc?: string,
}

const projectsData: Project[] = [
  {
    title: 'Интернет-магазин для мебельной фабрики «Алладин»',
    description: 'Мебельная фабрика «Алладин» – одна из ведущих фабрик мягкой мебели в Омске и Омской области.',
    imgSrc: '/static/images/alladin.png',
    href: '/projects/alladin-omsk',
  },
  {
    title: 'Сайт для компании «Проект ОВК»',
    description: 'Проект ОВК работает с 2008 года. За это время создано более 900 систем микроклимата и большинство из них на технической поддержке Проекта ОВК.',
    imgSrc: '/static/images/ovk.png',
    href: '/projects/project-ovk',
  },
  {
    title: "Дизайн корпоративного сайта для ООО «СибПромСтрой»",
    description: "О том, как мы разработали дизайн сайта для одной из крупнейших строительных компаний России",
    imgSrc: "/static/images/sibpromstroy.png",
    href: "/projects/sibpromstroy"
  }
]

export default projectsData
