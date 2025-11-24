import styles from "./CareerVisionSection.module.scss";

export default function CareerVisionSection() {
    return (
        <>
            <h2 className={styles.h2}>Career Vision</h2>
            <p className={styles.p}>7年間で「信頼されるメンバー」から「プロジェクトを成功させるリーダー」へ成長するビジョン</p>
            <div className={styles.career_wrap}>
                <div className={styles.circle}>
                    <div className={styles.career_text}>
                        <p><span>1</span>年目</p>
                        <p>自分が動けるメンバーに</p>
                    </div>
                </div>

                <div className={styles.circle}>
                    <div className={styles.career_text}>
                        <p><span>2</span>年目</p>
                        <p>チームの流れを理解し、信頼されるサポート役に</p>
                    </div>
                </div>

                <div className={styles.circle}>
                    <div className={styles.career_text}>
                        <p><span>3</span>年目</p>
                        <p>進行管理を意識し、課題を見つけて動ける存在に</p>
                    </div>
                </div>

                <div className={styles.circle}>
                    <div className={styles.career_text}>
                        <p><span>4</span>年目</p>
                        <p>小規模案件をリードし、判断・調整を担う立場へ</p>
                    </div>
                </div>

                <div className={styles.circle}>
                    <div className={styles.career_text}>
                        <p><span>5</span>年目</p>
                        <p>チームの信頼を得る進行リーダー</p>
                    </div>
                </div>

                <div className={styles.circle}>
                    <div className={styles.career_text}>
                        <p><span>6</span>年目</p>
                        <p>案件全体を俯瞰し、チームとクライアントをつなぐディレクターへ</p>
                    </div>
                </div>

                <div className={styles.circle}>
                    <div className={styles.career_text}>
                        <p><span>7</span>年目</p>
                        <p>チームの力を最大化し、プロジェクトを成功に導くディレクター／PMへ</p>
                    </div>
                </div>

                <div className={styles.line1}></div>
                <div className={styles.line2}></div>
                <div className={styles.line3}></div>
                <div className={styles.line4}></div>
                {/* <div className={`${styles.line} ${styles.l6_5}`}></div>
                <div className={`${styles.line} ${styles.l5_4}`}></div>
                <div className={`${styles.line} ${styles.l4_3}`}></div> */}
                <div className={styles.contact_circle}>
                    <div className={styles.contact_text}>
                        <p>contact</p>
                        <p>↓</p>
                    </div>
                </div>
            </div>

        </>
    );
}