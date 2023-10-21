import { HomeRune } from "./HomeRune"
import { ContentWrapper } from "@/components/Layout/ContentWrapper/ContentWrapper"

export const HomeStage = () => {
    return (
        <div className={'relative h-full w-full inset-0 m-auto'}>
            <HomeRune />
            <ContentWrapper>
                <div className={'flex justify-between w-full uppercase'}>
                    <h3>Runy<br />Kazdego<br />Dnia</h3>
                    <h3>Sprawdź runę<br />na dzisiaj</h3>
                </div>
            </ContentWrapper>
        </div>
    )
}