import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Kiyaku() {
    return (
        <>
            <Header />
            <main className="pt-32 pb-20 px-4 min-h-screen bg-black text-white">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-3xl md:text-4xl font-bold mb-16 text-center tracking-widest font-heading">PRIVACY POLICY</h1>

                    <div className="space-y-12 text-gray-300 leading-relaxed text-sm md:text-base">
                        <section>
                            <h2 className="text-xl md:text-2xl font-bold text-white mb-6 border-b border-white/20 pb-2">本ガイドラインは、suragiが制作した楽曲の off vocal音源および楽曲の二次創作利用に関する条件を定めたものです。
以下の内容を守っていただければ、基本的に自由にご利用いただけます。
</h2>
                            <p>
                                
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl md:text-2xl font-bold text-white mb-6 border-b border-white/20 pb-2">1. 【許可されている利用】</h2>
                            <p className="mb-4">  
                            </p>
                            <p className="mb-4">
                                以下の用途での利用を許可しています
                            </p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>以下の用途での利用を許可しています。</li>
                                <li>歌ってみた動画の制作および投稿</li>
                                <li>SNS（YouTube / TikTok / X / Instagram 等）への公開</li>
                                <li>個人によるカバー作品の制作</li>
                                <li>配信サイトでの動画公開</li>
                                <li>YouTube等の収益化チャンネルでの利用</li>
                                <p className="mb-4">
                                
                            </p>
                                ※クレジット表記を必須とします。
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-xl md:text-2xl font-bold text-white mb-6 border-b border-white/20 pb-2">2. 【クレジット表記】</h2>
                            <p className="mb-4">
                                動画説明欄または投稿文に 原曲クレジットの記載をお願いします。

                            </p>
                            <ul className="list-disc pl-6 space-y-2">
                                <p className="mb-4">
                                ※記載例
                            </p>
                            <p className="mb-4">
                                Original：suragi
                            </p>
                            <p className="mb-4">
                                Music / Lyrics：suragi  
                            </p>
                            <p className="mb-4">
                                Original Video：https://（原曲URL）
                            </p>
                            
                            
                                
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-xl md:text-2xl font-bold text-white mb-6 border-b border-white/20 pb-2">3. 【禁止事項】</h2>
                            <p>
                                以下の行為は禁止します。
                            </p>
                            <ul className="list-disc pl-6 space-y-2 mt-4">
                                <li>off vocal音源の再配布</li>
                                <li>音源のみのアップロード</li>
                                <li>楽曲の自作発言</li>
                                <li>原曲のイメージを著しく損なう利用</li>
                                <li>AI学習データとしての利用</li>
                                <li>第三者への音源の無断配布</li>

                            </ul>
                        </section>

                        <section>
                            <h2 className="text-xl md:text-2xl font-bold text-white mb-6 border-b border-white/20 pb-2">4. 【二次創作について】</h2>
                            <p className="mb-4">
                                
                            </p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>歌ってみた</li>
                                <li>Remix</li>
                                <li>アレンジ</li>
                            </ul>
                            <p className="mb-4">
                            </p>
                            <p className="mb-4">
                            </p>
                            <p className="mb-4">
                                ※二次創作は歓迎しています。
                                公開の際は 原曲クレジットの記載をお願いします。

                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl md:text-2xl font-bold text-white mb-6 border-b border-white/20 pb-2">5. 【プライバシーポリシーの変更】</h2>
                            <p>
                                本ポリシーの内容は、ユーザーに通知することなく、変更することができるものとします。
                                当方が別途定める場合を除いて、変更後のプライバシーポリシーは、本ウェブサイトに掲載したときから効力を生じるものとします。
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl md:text-2xl font-bold text-white mb-6 border-b border-white/20 pb-2">6. 【お問い合わせ】</h2>
                            <p></p>
                            <p className="mb-4">
                                個人情報の取扱いに関するお問い合わせは、以下の窓口までお願いいたします。
                            </p>
                            <address className="not-italic">
                                <p>Suragi</p>
                                <p>お問い合わせフォーム、またはSNSのDMよりご連絡ください。</p>
                            </address>
                        </section>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}