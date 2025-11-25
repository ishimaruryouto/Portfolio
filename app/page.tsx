import Image from "next/image";
import styles from "./page.module.scss";
import Header from "./Components/Header/Header";
import WorksSection from "./Components/WorksSection/WorkSection";
import AboutMeSection from "./Components/AboutMeSection/AboutMeSection";
import ContactSection from "./Components/ContactSection/ContactSection";
export default function Top() {
  return (
    <>
      <div className={styles.main_visual}>
        <Header />
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
                <li>ECCコンピュータ専門学校</li>
                <li>フロントエンドエンジニア</li>
              </ul>
              <ul className={styles.ul}>
                <li>Webデザインコース　27卒</li>
                <li>将来はディレクター志望</li>
              </ul>
            </div>
            <div className={styles.skill_wrap}>
              <div className={styles.skill_img}>
                <Image src="/img/Next.js.png" alt="Next.js" width={63} height={37} />
              </div>

              <div className={styles.skill_img}>
                <Image src="/img/astro.png" alt="Astro" width={40} height={50} />
              </div>

              <div className={styles.skill_img}>
                <Image src="/img/sass.png" alt="Sass" width={60} height={45} />
              </div>

              <div className={styles.skill_img}>
                <Image src="/img/tailwind.png" alt="Tailwind" width={60} height={60} />
              </div>

              <div className={styles.skill_img}>
                <Image src="/img/html.png" alt="HTML" width={63} height={37} />
              </div>

              <div className={styles.skill_img}>
                <Image src="/img/js.png" alt="JS" width={60} height={60} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <WorksSection />
      <AboutMeSection />
      <ContactSection />

      <p className={styles.last_word}>Thank you for visiting my portfolio.<br />
        I look forward to connecting with you.</p>
    </>
  );
}
