import Image from "next/image";
import Link from "next/link";
import styles from "./Header.module.scss";
export default function Home() {
    return (
        <>
            <header className={styles.header}>
                <div>
                    <Link href="#">
                        <Image src="/img/logo.png" alt="ロゴ" width={60} height={70} />
                    </Link>
                </div>
                <nav className={styles.nav}>
                    <ul>
                        <li><Link href="#" className={styles.link}>Works</Link></li>
                        <li><Link href="#" className={styles.link}>Profile</Link></li>
                    </ul>
                </nav>
            </header>
        </>
    );
}
