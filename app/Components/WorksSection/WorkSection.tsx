import WorksCard, { Work } from "../WorksCard/WorkCard";
import styles from "./WorkSection.module.scss"

const works: Work[] = [
    {
        title: "All Riders Cafe",
        type: "個人",
        catchcopy: "バイクの仲間との交流を",
        desc: "バイク仲間との架け橋サイト",
        imgSrc: "/img/All_Riders_Cafe_topthumb.png",
        link: "/works/allRidersCafe",
    },
    {
        title: "ウォレンジ",
        type: "チーム",
        catchcopy: "みんなで貯金を",
        desc: "友達と貯金できるWebアプリ",
        imgSrc: "/img/warrenji.png",
        link: "/works/warrenji",
    },
    {
        title: "UIコンポーネントサイト",
        type: "チーム",
        catchcopy: "UIに対しての理解を深める",
        desc: "オリジナル UIコンポーネントサイト",
        imgSrc: "/img/UI_component.png",
        link: "/works/uiComponent",
    },
    {
        title: "めもれる",
        type: "チーム",
        catchcopy: "子供のプレゼントを保存",
        desc: "親子で思い出保存Webアプリ",
        imgSrc: "/img/memoreru.png",
        link: "/works/memoreru",
    },
    {
        title: "FitPath",
        type: "個人",
        catchcopy: "筋トレで未来を変える",
        desc: "筋トレ初心者用Webアプリ",
        imgSrc: "/img/FitPath.png",
        link: "/works/fitpath",
    },
    {
        title: "Duel Day",
        type: "個人",
        catchcopy: "無駄な休日脱却へ",
        desc: "対戦型ToDoWebアプリ",
        imgSrc: "/img/DuelDay.png",
        link: "/works/duelday",
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