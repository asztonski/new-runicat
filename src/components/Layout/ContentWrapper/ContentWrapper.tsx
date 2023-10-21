import { ReactNode } from "react"
interface Props {
    children?: ReactNode
}

export const ContentWrapper = ({ children }: Props) => {
    return (
        <div className={'w-full h-full pt-10 px-10 pb-12 flex flex-col'}>
            {children}
        </div>
    )
}