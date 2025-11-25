import WorkDetail from "../Components/WorkDetail/WorkDetail";

export default function FitPathPage() {
    return (
        <WorkDetail
            title="FitPath"
            subtitle="筋トレ初心者が迷わず続けられるように設計した、習慣化を支えるトレーニングアプリ。"
            image="/img/FitPath_detail.png"
            period="2024年10月〜2024年11月末"
            role="すべて"
            tech="HTML / JS / CSS（Flexbox中心）"
            tools="Notion / Figma / Illustrator / Photoshop / VSCode"
            link="https://fit-path.vercel.app"
            WorksManual="(スマホサイズでご視聴ください)"
            overview="筋トレ初心者が迷わず続けられるように設計した、習慣化をサポートするトレーニングアプリ。
メニューごとに“ポイント解説”や“効く部位のイラスト”を用意し、迷わず正しいフォームで続けられる設計に。
さらにカレンダーで積み上げを可視化し、グループ機能で仲間と継続できる仕組みを構築。
行動の迷い・モチベ低下・継続できない問題を UI × コミュニティ要素で解消したアプリ体験を提案。"

            problems={[
                {
                    problem: "成果が実感できず継続しづらい",
                    solution: "成果が見える化"
                },
                {
                    problem: "何をすればいいか迷って続かない",
                    solution: "イラスト付きメニューで視覚的に理解できる設計"
                },
                {
                    problem: "ひとりではモチベーションが続かない",
                    solution: "仲間と続けられる環境を作る"
                }
            ]}

            learning="初心者向けのアプリを制作する中で、『ユーザーがどこで迷うのか』を細かく想像しながら設計する重要性を学びました。
フォームの説明や効く部位の可視化、カレンダーの達成表示など、迷わない導線を意識することで体験が大きく向上することを実感しました。
また、デザイナー視点で画面説明をできるようになり、チーム開発でも意図説明がスムーズになりました。"

            improvement="現状、メニューの種類やアドバイスの詳細が限定的で、より多様なユーザーに対応するための改善余地が残っています。
またリアルタイムの継続データ分析やレベル設計を整えることで、より継続しやすいアプリ体験を提供できると考えています。"
        />
    );
}