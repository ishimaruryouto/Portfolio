import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.scss";
import WorksSection from "./Components/WorksSection/WorkSection";
import SkillsSection from "./Components/SkillsSection/SkillsSection";
export default function Home() {
  return (
    <>
      <div className={styles.main_visual}>
        <div className={styles.info_wrap}>
          <div>
            <Image src="/img/my_photo.png" alt="石丸椋士の写真" width={400} height={500} />
          </div>
          <div className={styles.info}>
            <h1 className={styles.h1}>
              <span className={styles.name}>Ryouto</span>
              <span className={styles.last_name}>Ishimaru</span>
            </h1>
            <div className={styles.info_text_wrap}>
              <ul className={styles.ul}>
                <li>フロントエンドエンジニア志望</li>
                <li>将来はディレクター志望</li>
              </ul>
              <ul className={styles.ul}>
                <li>ECCコンピュータ専門学校</li>
                <li>Webデザインコース　27卒</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <WorksSection />;
      <SkillsSection />
    </>
  );
}
