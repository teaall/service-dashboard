export interface MenuInfomation {
  path: string
  title: string
  icon: JSX.Element
}

export interface Service {
  title: string
  path: string
  image: string
  category: Category
}

export interface Category {
  title: string
}
