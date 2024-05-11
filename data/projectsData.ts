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
    href: '/blog/alladin-omsk',
  }
]

export default projectsData
