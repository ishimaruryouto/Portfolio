import Image from "next/image";
import Link from "next/link";
import styles from "./Header.module.scss";
export default function Header() {
    return (
        <>
            <header className={styles.header}>
                <div>
                    <Link href="/">
                        <Image src="/img/logo.png" alt="ロゴ" width={60} height={70} />
                    </Link>
                </div>
                <nav className={styles.nav}>
                    <ul>
                        <li><Link href="/About" className={styles.link}>Profile</Link></li>
                    </ul>
                </nav>
            </header>
        </>
    );
}
