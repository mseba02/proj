import { ReactNode } from 'react'

export default interface IContainer {
  children: ReactNode
  classNames?: any
}
export interface IUploads {
  maxUploads: number
  setImages: any
  images: any
}
