import Image from "next/image";
import Link from "next/link";
import styles from "./AboutMeSection.module.scss";

export default function AboutMeSection() {
    return (
        <>
            <div>
                <h2 className={styles.h2}>About Me</h2>
                <div className={styles.About_wrap}>
                    <div className={styles.photo}>
                        <Image src="/img/AboutMe_1.png" alt="ユニバの前でのバイク" width={370} height={240} />
                    </div>
                    <div className={styles.photo}>
                        <Image src="/img/AboutMe_2.png" alt="ライトが光っている黒のバイク" width={370} height={240} />
                    </div>
                    <div className={styles.photo}>
                        <Image src="/img/AboutMe_3.png" alt="四人で乗ってるバイクツーリング" width={370} height={240} />
                    </div>
                    <div className={styles.info_wrap}>
                        <div>
                            <div className={styles.img_text_wrap}>
                                <div className="info_photo">
                                    <Image src="/img/ryouto_photo.png" alt="石丸椋士の写真" width={150} height={227} />
                                </div>
                                <div className={styles.info_text}>
                                    <p>バイク</p>
                                    <p>車</p>
                                    <p>大好き</p>
                                    <p>20歳</p>
                                    <p>男</p>
                                </div>
                            </div>
                            <p className={styles.more_me_wrap}>
                                <Link href="/About" className={styles.more_me}>more me</Link>
                            </p>
                        </div>
                    </div>

                    <div className={styles.contact_circle}>
                        <div className={styles.contact_text}>
                            <p>contact</p>
                            <p>↓</p>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}