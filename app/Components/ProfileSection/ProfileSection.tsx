import Image from "next/image";
import styles from "./ProfileSection.module.scss";

export default function ProfileSection() {
    return (
        <>
            <h2 className={styles.h2}>Profile Details</h2>
            <div className={styles.photo_wrap}>
                <div className={styles.photo1}>
                    <Image src="/img/Profile_Details_1.png" alt="背景が海のバイク3台" width={100} height={100} />
                </div>

                <div className={styles.photo2}>
                    <Image src="/img/Profile_Details_2.png" alt="背景が海のバイク3台" width={150} height={150} />
                </div>
            </div>

            <div className={styles.profile_table}>
                <div className={styles.row}>
                    <dt>Field of study：</dt>
                    <dd>兵庫県宝塚市</dd>
                </div>

                <div className={styles.row}>
                    <dt>Hobby：</dt>
                    <dd>バイクに乗ること、車でドライブ、自然を感じること、筋トレ</dd>
                </div>

                <div className={styles.row}>
                    <dt>Residence：</dt>
                    <dd>企画、UI設計からフロント／バックエンド開発まで幅広く学習中。</dd>
                </div>

                <div className={styles.row}>
                    <dt>Specialty Field：</dt>
                    <dd>CSSを使ったレイアウト調整、デザインの再現。</dd>
                </div>

                <div className={styles.row}>
                    <dt>Production Style：</dt>
                    <dd>
                        コードの見やすさと再利用性を意識した設計。
                        特にCSSでは、クラス構造や命名規則を整理し、
                        他の人が読んでも理解しやすいコードを意識。
                    </dd>
                </div>
            </div>

            <div className={styles.photo_wrap}>
                <div className={styles.photo3}>
                    <Image src="/img/Profile_Details_3.png" alt="背景が海のバイク3台" width={110} height={110} />
                </div>

                <div className={styles.photo4}>
                    <Image src="/img/Profile_Details_4.png" alt="背景が海のバイク3台" width={130} height={130} />
                </div>
            </div>
        </>
    );
}