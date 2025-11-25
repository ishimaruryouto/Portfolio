import Image from "next/image";
import styles from "./WorkDetail.module.scss";

export type WorkDetailProps = {
    title: string;
    subtitle: string;
    image: string;
    period: string;
    role: string;
    tech: string;
    tools: string;
    link?: string;
    WorksManual: string;
    overview: string;
    problems: { problem: string; solution: string }[];
    learning: string;
    improvement: string;
};

export default function WorkDetail(props: WorkDetailProps) {
    const {
        title,
        subtitle,
        image,
        period,
        role,
        tech,
        tools,
        link,
        WorksManual,
        overview,
        problems,
        learning,
        improvement,
    } = props;

    return (
        <div className={styles.wrap}>
            <h1 className={styles.title}>{title}</h1>
            <p className={styles.subtitle}>{subtitle}</p>

            <div className={styles.top}>
                <div className={styles.thumbnail}>
                    <Image src={image} alt={title} width={400} height={400} />
                </div>

                <div className={styles.info}>
                    <p><span>制作期間</span> {period}</p>
                    <p><span>役割</span> {role}</p>
                    <p><span>制作技術</span> {tech}</p>
                    <p><span>使用ツール</span> {tools}</p>
                    {link && (
                        <p><span>リンク</span>
                            <a href={link} target="_blank">{link}</a>
                        </p>
                    )}
                    <p><span></span>{WorksManual}</p>
                </div>
            </div>

            <section className={styles.section}>
                <h2>制作概要</h2>
                <p>{overview}</p>
            </section>

            <section className={styles.section}>
                <h2>課題と解決アプローチ</h2>

                <div className={styles.card_grid}>
                    {problems.map((item, index) => (
                        <div key={index} className={styles.card_wrap}>

                            <div className={styles.problem_card}>
                                <h3>課題 {index + 1}</h3>
                                <p>{item.problem}</p>
                            </div>

                            <div className={styles.arrow}>↓</div>

                            <div className={styles.solution_card}>
                                <h3>解決 {index + 1}</h3>
                                <p>{item.solution}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section className={styles.section}>
                <h2>学び</h2>
                <p>{learning}</p>
            </section>

            <section className={styles.section}>
                <h2>改善点</h2>
                <p>{improvement}</p>
            </section>
        </div>
    );
}