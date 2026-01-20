"use client"; // fetchを使用するため必要です

import { Dsong } from "@/information";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
export default function Dowlode() {
    // ダウンロードを実行する関数
    const handleDownload = async (url: string) => {
        try {
            const res = await fetch(url);
            if (!res.ok) throw new Error('ダウンロードに失敗しました');
            
            const blob = await res.blob();
            const blobUrl = window.URL.createObjectURL(blob);
            const fileName = url.split('/').pop() || 'download.wav';
            
            const link = document.createElement('a');
            link.href = blobUrl;
            link.download = fileName;
            document.body.appendChild(link);
            link.click();
            
            // 後片付け
            link.remove();
            window.URL.revokeObjectURL(blobUrl);
        } catch (err) {
            console.error("Download error:", err);
            // 失敗時のフォールバック：?download=1 を付与して直接ダウンロードを試みる
            const downloadUrl = url.includes('?') ? `${url}&download=1` : `${url}?download=1`;
            const link = document.createElement('a');
            link.href = downloadUrl;
            link.download = ''; // ブラウザにダウンロードを指示
            document.body.appendChild(link);
            link.click();
            link.remove();
        }
    };

    return (
        <>
            <section id="download" className="pt-32 pb-20 px-4 max-w-6xl mx-auto">
                <h2 className="text-4xl font-bold text-center mb-12 tracking-widest font-heading">DOWNLOAD TO OFFVOCAL</h2>

                <div className="max-w-3xl mx-auto mb-16">
                    <div className="border border-white/20 bg-white/5 p-8 md:p-10 rounded-xl text-center backdrop-blur-sm shadow-lg">
                        <h3 className="text-xl md:text-2xl font-bold mb-6 tracking-wide">はじめに</h3>
                        <p className="text-gray-300 leading-relaxed text-sm md:text-base mb-8">
                            いつもsuragiを応援頂きありがとうございます。<br className="hidden md:block" />
                            皆様に作品を楽しんで頂くために以下に利用規約を公開しています。<br className="hidden md:block" />
                            規約に同意した後に作品をご利用頂くようお願い申し上げます。
                        </p>
                        <Link href="/kiyaku" target="_blank">
                            <Button className="w-full md:w-auto px-8 py-6 text-base" variant="secondary">
                                利用規約を見る
                            </Button>
                        </Link>
                    </div>
                </div>

                <div className="space-y-6">
                    {Dsong
                        .sort((a, b) => Number(b.id) - Number(a.id))
                        .slice(0, 4)
                        .map((item) => (
                            <div key={item.id} className="block group">
                                <div className="flex flex-col md:flex-row md:items-center border border-white/10 bg-white/5 p-4 gap-6 rounded-lg overflow-hidden">
                                    {/* 画像エリア */}
                                    <div className="w-full md:w-60 aspect-video relative overflow-hidden flex-shrink-0">
                                        <Image
                                            fill
                                            src={item.img}
                                            alt={item.title}
                                            className="object-cover w-full h-full"
                                        />
                                    </div>

                                    {/* 情報エリア */}
                                    <div className="flex flex-1 flex-col md:flex-row md:items-center justify-between p-4 md:p-0">
                                        <h3 className="text-2xl md:text-3xl font-bold tracking-tight mb-4 md:mb-0">{item.title}</h3>

                                        <div className="mt-4 md:mt-0 flex flex-col gap-3">
                                            {/* buttonタグに変更し、onClickで関数を呼ぶ */}
                                            <button 
                                                onClick={() => handleDownload(item.mix)}
                                                className="inline-block border border-white/30 px-8 py-3 text-sm tracking-widest hover:bg-white hover:text-black transition-colors text-center cursor-pointer"
                                            >
                                                2MIX
                                            </button>
                                            <button 
                                                onClick={() => handleDownload(item.master)}
                                                className="inline-block border border-white/30 px-8 py-3 text-sm tracking-widest hover:bg-white hover:text-black transition-colors text-center cursor-pointer"
                                            >
                                                マスタリング済み
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                </div>

                <div className="mt-12 text-center">
                    <Link href="/Downlode" className="inline-block border border-white/30 px-12 py-3 text-sm tracking-widest hover:bg-white hover:text-black transition-colors">
                        MORE
                    </Link>
                </div>
            </section>
        </>
    );
}