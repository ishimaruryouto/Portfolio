import Image from "next/image";
import Link from "next/link";
import styles from "./ContactSection.module.scss";

export default function ContactSection() {
    return (
        <>
            <h2 className={styles.h2}>Contact</h2>
            <div className={styles.contact_wrap}>
                <p>ご質問等、お気軽にお問い合わせください</p>
                <div className={styles.mail}>
                    <Image src="/img/mail.png" alt="メール" width={40} height={40} />
                    <p>ecc.rishimaru@gmail.com</p>
                </div>
                <div className={styles.tell}>
                    <Image src="/img/tell.png" alt="メール" width={40} height={40} />
                    <p>080-7965-5658</p>
                </div>

            </div>

        </>
    );
}