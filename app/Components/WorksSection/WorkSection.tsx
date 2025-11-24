import WorksCard, { Work } from "../WorksCard/WorkCard";
import styles from "./WorkSection.module.scss"

const works: Work[] = [
    {
        title: "All Riders Cafe",
        type: "個人",
        catchcopy: "バイクの仲間との交流を",
        desc: "バイク仲間との架け橋サイト",
        imgSrc: "/img/All_Riders_Cafe_topthumb.png",
        link: "/AllRidersCafe",
    },
    {
        title: "UIコンポーネントサイト",
        type: "チーム",
        catchcopy: "UIに対しての理解を深める",
        desc: "オリジナル UIコンポーネントサイト",
        imgSrc: "/img/UI_component.png",
        link: "/UIComponent",
    },
    {
        title: "めもれる",
        type: "チーム",
        catchcopy: "子供のプレゼントを保存",
        desc: "親子で思い出保存Webアプリ",
        imgSrc: "/img/memoreru.png",
        link: "/Memoreru",
    },
    {
        title: "FitPath",
        type: "個人",
        catchcopy: "筋トレで未来を変える",
        desc: "筋トレ初心者用Webアプリ",
        imgSrc: "/img/FitPath.png",
        link: "/FitPath",
    },
]

export default function WorksSection() {
    return (
        <>
            <section className={styles.works}>
                <h2 className={styles.heading}>Works</h2>
                <div className={styles.grid}>
                    {works.map((w) => <WorksCard key={w.title} {...w} />)}
                </div>
            </section>
        </>
    )
};