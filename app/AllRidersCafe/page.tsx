import WorkDetail from "../Components/WorkDetail/WorkDetail";

export default function AllRidersCafe() {
    return (
        <WorkDetail
            title="All Riders Cafe"
            subtitle="バイク初心者と経験者が自然に交わる中間地点カフェサイト。"
            image="/img/AllRidersCafe_datail.png"
            period="2024年5月〜7月末"
            role="デザイン / コーディング / 企画"
            tech="HTML / CSS（Flexbox）"
            tools="Figma / Illustrator / Photoshop / VSCode"
            // link="https://example.com"
            overview="
                バイク初心者と経験者が気軽に交流できる中間地点カフェのコンセプトサイト。
                色別リストバンド・バイクストーリーシェア・QRアクスタなど、当日の会話のきっかけや
                出会いからツーリングまで自然に繋がる導線をデザインしました。
            "
            problems={[
                { problem: "初心者が入りづらい", solution: "色別リストバンドで可視化" },
                { problem: "SNSの繋がりは行動力のある人に偏る", solution: "ストーリーシェア機能で自然交流" },
                { problem: "現地で会話のきっかけが不足", solution: "アクスタ(QR)でつながる仕組みを設計" },
            ]}
            learning="
                初めての個人制作として企画からデザイン、コーディングまで一人で行う経験をしました。
                特に『どうやって見知らぬ同士が自然に会話できる空間を作れるか』という観点で、
                UI/UXを考えることの大切さを体感しました。
            "
            improvement="
                一方でレスポンシブ対応不足やコードの設計面に改善余地があります。
                今後は1年間で学んだ知識を活かして、フォントサイズ・余白・バランスの見直しを行い
                より完成度の高い作品にブラッシュアップしていきたいと考えています。
            "
        />
    );
}