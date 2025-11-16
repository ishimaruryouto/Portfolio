import Image from "next/image";
import styles from "./SkillsSection.module.scss";

export default function SkillsSection() {
    return (
        <>
            <h2 className={styles.h2}>Skills</h2>
            <div className={styles.skills_wrap}>
                <Image src="/img/Next.js.png" alt="Next.js" width={160} height={90} />
                <Image src="/img/astro.png" alt="astro" width={85} height={107} />
                <Image src="/img/sass.png" alt="Sass" width={130} height={98} />
                <Image src="/img/tailwind.png" alt="tailwind" width={167} height={94} />
                <Image src="/img/html.png" alt="HTML" width={140} height={140} />
                <Image src="/img/js.png" alt="JS" width={140} height={140} />
            </div>
        </>
    )
}