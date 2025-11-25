import Image from "next/image";
import styles from "./AboutMainvisual.module.scss";
import Header from "../Header/Header";

export default function AboutMainvisual() {
    return (
        <>
            <div className={styles.main_visual}>
                <Header />
                <div className={styles.info_wrap}>
                    <div>
                        <Image src="/img/ryouto_photo.png" alt="石丸椋士の写真" width={400} height={500} />
                    </div>
                    <div className={styles.info}>
                        <h1 className={styles.h1}>
                            <span className={styles.name}>Ryouto</span>
                            <span className={styles.last_name}>Ishimaru</span>
                        </h1>

                        <div className={styles.row_wrap}>
                            <dl>
                                <div className={styles.row}>
                                    <dt>Name</dt>
                                    <dd>：石丸 椋士(いしまる りょうと)</dd>
                                </div>

                                <div className={styles.row}>
                                    <dt>Age</dt>
                                    <dd>：20</dd>
                                </div>

                                <div className={styles.row}>
                                    <dt>School</dt>
                                    <dd>：ECCコンピュータ専門学校</dd>
                                </div>

                                <div className={styles.row}>
                                    <dt>Course</dt>
                                    <dd>：Webデザインコース2年生</dd>
                                </div>

                                <div className={styles.row}>
                                    <dt>Interest</dt>
                                    <dd>
                                        ：フロントエンドエンジニア<br />
                                        <span>バックエンドエンジニア</span>
                                    </dd>
                                </div>

                                <div className={styles.row}>
                                    <dt>One Word</dt>
                                    <dd>
                                        ：将来はPL&PMになるために現在デザインも<br />
                                        <span>コーディングも毛嫌いせず奮闘中です！</span>
                                    </dd>
                                </div>
                            </dl>
                        </div>

                    </div>
                </div>
            </div>

        </>
    );
}