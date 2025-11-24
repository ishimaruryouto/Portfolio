import Image from "next/image";
import styles from "./WorkCard.module.scss";
import Link from "next/link";

export type Work = {
    title: string;
    type: "個人" | "チーム";
    catchcopy: string;
    desc: string;
    imgSrc: string;
    link: string;
};

export default function worksCard(props: Work) {
    const { title, type, catchcopy, desc, imgSrc, link } = props;
    return (
        <>
            <div className={styles.works_card_wrap}>
                <h3 className={styles.h3}>{title}<span> - {type}</span></h3>
                <p className={styles.p}>{catchcopy}</p>
                <p className={styles.p}>{desc}</p>
                <div className={styles.work_img}>
                    <Link href={link}>
                        <Image src={imgSrc} alt={`${title}のサムネイル`} width={280} height={280} />
                    </Link>
                </div>
            </div>
        </>
    )
}