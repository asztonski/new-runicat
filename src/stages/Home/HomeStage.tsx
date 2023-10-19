import { HomeRune } from "./HomeRune"

export const HomeStage = () => {
    return (
        <div className={'relative h-full w-full inset-0 m-auto'}>
            <HomeRune />
            <div className={'w-full h-full pt-8 px-10 pb-12'}></div>
        </div>
    )
}