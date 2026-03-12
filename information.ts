import { Song, NewsDate } from "./types"


//Youtubeの曲を以下の形式で追加していく。スライダー
export const Songs: Song[] = [
  {
    id: '1',
    img: "/01naito.png",
    title: "ナイトノイズン",
    url: "https://youtu.be/6EKUOxmZQNc?si=dbibRomoDwltFQhW"
  },
  {
    id: '2',
    img: "/18spaend.jpg",
    title: "spuendroll",
    url: "https://youtu.be/npYi3rqm16s?si=VwApKQTS86e8FeuW"
  },
  {
    id: '3',
    img: "/17White.jpg",
    title: "White Moment",
    url: "https://youtu.be/nCRjleGsM64?si=zGqtvCsVPlz57wgH"
  },
  {
    id: '4',
    img: "/21rein.jpg",
    title: "Reincarnation",
    url: "https://youtu.be/eUZEYjwB2_w?si=eubxCqaPx6ii5oMJ"
  },
  {
    id: '5',
    img: "/04Natoout.jpeg",
    title: "ナイトアウト",
    url: "https://youtu.be/SrvqARIlEpg?si=Rz9p73erZoPLCYEo"
  },
  {
    id: '6',
    img: "/15deep.jpg",
    title: "Deep Desire",
    url: "https://youtu.be/uDbNMU3nzhQ?si=fUQ55O6oLJTFv_Rb"
  },
  {
    id: '7',
    img: "/12cluel.jpg",
    title: "Cruel Promise",
    url: "https://youtu.be/O-He1XArjQQ?si=cBHk-oy07Q6DKUzI"
  },
]


//記事の内容を以下の形式で記述する
export const NewsDates: NewsDate[] = [
  { id: 1, date: '2010/11/3', content: "記事容" },
  { id: 2, date: '2020/11/3', content: "記事内容" },
  { id: 3, date: '2030/11/3', content: "記事内容" },
  { id: 4, date: '2020/11/3', content: "記事内容" },
  { id: 5, date: '2020/11/3', content: "記事内容" },
  { id: 6, date: '2020/11/3', content: "記事内容" },
  { id: 7, date: '2020/11/3', content: "記事内容" },
  { id: 8, date: '2020/11/3', content: "記事内容" },
  { id: 9, date: '2020/11/3', content: "記事内容" },
  { id: 10, date: '2020/11/3', content: "記事内容" },
  { id: 11, date: '2020/11/3', content: "wwwwww" },
]


export const plans = [
  {
    id: 'composition',
    title: 'Composition',
    jpTitle: '作編曲',
    description: 'あなたのイメージや詞からオリジナルのメロディとコード進行を制作し編曲でを行い納品致します。',
    detailDescription: '鼻歌、歌詞、リファレンス楽曲などのイメージをもとに、主旋律（メロディ）とコード進行を制作します。',
    price: '¥25,000',
    priceSuffix: '〜',
    features: ['メロディ作成', 'コード作成', '編曲 ', '修正無制限', 'ラフ提案：5日〜' ,'納期：3週間〜'],
    buttonText: '詳細を見る',
    isCustomQuote: false,
  },
  
  {
    id: 'mix',
    title: 'Mixing',
    jpTitle: 'MIX・マスタリング',
    description: '歌ってみた動画やオリジナル楽曲の魅力を最大限に引き出すミックスダウンを提供します。',
    detailDescription: 'ボーカルのピッチ・タイミング補正を丁寧に行い、オケとの馴染みを調整し、マスタリング済みの音源を納品致します。',
    price: '¥8,000',
    priceSuffix: '〜',
    features:  ['ノイズ除去', 'ピッチ・タイミング補正', 'MIX・マスタリング', ' 修正無制限 ', '納期：1週間〜'],
    buttonText: '詳細を見る',
    isCustomQuote: false,
  },
  {
    id: 'mv',
    title: 'Music Video',
    jpTitle: 'ミュージックビデオ',
    description: '楽曲の世界観を広げる映像制作。リリックビデオから実写編集まで対応します。',
    detailDescription: 'イラスト一枚からのリリックビデオ制作や、撮影素材のカット編集、エフェクト追加など。YouTubeやSNSに最適なフォーマットで書き出します。',
    price: '¥20,000',
    priceSuffix: '〜',
    features: ['YouTube用エンコード', 'サムネイル作成可', 'ラフ提案：7日〜', '納期：3週間〜'],
    buttonText: '詳細を見る',
    isCustomQuote: false,
  },
  {
    id: 'others',
    title: 'Others',
    jpTitle: 'その他・ご相談',
    description: '作詞、仮歌、ボーカロイドの調整、なども承ります。',
    detailDescription: 'お気軽にご相談ください。',
    price: 'Ask',
    priceSuffix: '',
    features: ['柔軟な対応', '急ぎの案件も相談可', '予算に合わせた提案'],
    buttonText: '詳細を見る',
    isCustomQuote: true,
  },
];

export const media = [
  {
    id: 'Youtube',
    url: "https://www.youtube.com/@suragi6832",
    name: 'YouTube',
    img: '/youtube-log.png'
  },
  {
    id: 'X',
    url: "https://x.com/suragi2196?s=21&t=agcGAVABEL7hQDGfyeL9lw",
    name: 'X',
    img: '/x-logo.png'
  },
  {
    id: 'Instagram',
    url: "https://www.instagram.com/suragi_2196?igsh=dWJ3c3hiZnZnZ3J0&utm_source=qr",
    name: 'Instagram',
    img: '/insta-logo.png'
  },
  {
    id: 'TikTok',
    url: "https://www.tiktok.com/@suragi2196?is_from_webapp=1&sender_device=pc",
    name: 'TikTok',
    img: '/tiktok-log.png'
  },
  {
    id: 'Spotify',
    url: "https://open.spotify.com/intl-ja/artist/3lhpdkU29iCZtGEC857EIh?si=bMAXZIQcTkuz84rwG_k8kw",
    name: 'Spotify',
    img: '/spotify-log.png'
  }
]

//新しく発表する曲をここに入れてください。
export const Nsong = [
  {
    id: '1',
    data: "2026/1/1",
    title: "Dialectic",
    url: "	https//suragi.verse.jp/Dialec.mp4",
  },
]

//ダウンロード曲
export const Dsong = [
  {
    id: '1',
    img: "/01naito.png",
    title: "ナイトノイズン",
    mix:  "https//suragi.verse.jp/nightnoisen_offvocal.mp3",
    master: "https//suragi.verse.jp/nightnoisen_offvocal.mp3",
    mix_file:"mank.wav",
    master_file:"master.wav"
  },
  {
    id: '2',
    img: "/02anatta.jpeg",
    title: "あなたは夢を見る",
    mix: "https//suragi.verse.jp/anatawayumewomiru_offvocal.wav",
    master: "https//suragi.verse.jp/anatawayumewomiru_offvocal.wav",
    mix_file:"mank.wav",
    master_file:"master.wav"
  },
  {
    id: '3',
    img: "/03Lumiere.jpeg",
    title: "ルミエール",
    mix: "https//suragi.verse.jp/lumiere_offvocal.mp3",
    master: "https//suragi.verse.jp/lumiere_offvocal.mp3",
    mix_file:"mank.wav",
    master_file:"master.wav"
  },
  {
    id: '4',
    img: "/04Natoout.jpeg",
    title: "ナイトアウト",
    mix: "https//suragi.verse.jp/nightout_offvocal.wav",
    master: "https//suragi.verse.jp/nightout_offvocal.wav",
    mix_file:"mank.wav",
    master_file:"master.wav"
  },
  {
    id: '5',
    img: "/05life.jpeg",
    title: "ライフエフェクト",
    mix: "https//suragi.verse.jp/lifeeffect_offvocal.wav",
    master: "https//suragi.verse.jp/lifeeffect_offvocal.wav",
    mix_file:"mank.wav",
    master_file:"master.wav"

  },
  {
    id: '6',
    img: "/06natukaze.jpg",
    title: "夏風の中で",
    mix: "https//suragi.verse.jp/natukazenonakade_offvocal.wav",
    master: "https//suragi.verse.jp/natukazenonakade_offvocal.wav",
    mix_file:"mank.wav",
    master_file:"master.wav"

  },
  {
    id: '7',
    img: "/07EnvyRain.jpeg",
    title: "エンヴィーレイン", 
    mix: "https//suragi.verse.jp/envyrain_offvocal.wav",
    master: "https//suragi.verse.jp/envyrain_offvocal.wav",
    mix_file:"mank.wav",
    master_file:"master.wav"
  },
  {
    id: '8',
    img: "/08shiatsu.webp",
    title: "シアス", 
    mix: "https//suragi.verse.jp/shiasu_offvocal.wav",
    master: "https//suragi.verse.jp/shiasu_offvocal.wav",
    mix_file:"mank.wav",
    master_file:"master.wav"
  },
  {
    id: '9',
    img: "/09konnfe.jpeg",
    title: "コンフェションノイズ", 
    mix: "https//suragi.verse.jp/confessionnoise_offvocal.wav",
    master: "https//suragi.verse.jp/confessionnoise_offvocal.wav",
    mix_file:"mank.wav",
    master_file:"master.wav"
  },
  {
    id: '10',
    img: "/10relics.jpg",
    title: "レリクス", 
    mix: "https//suragi.verse.jp/relics_offvocal.wav",
    master: "https//suragi.verse.jp/relics_offvocal.wav",
    mix_file:"mank.wav",
    master_file:"master.wav"
  },
  {
    id: '11',
    img: "/11advance.jpg",
    title: "Advance Damage", 
    mix: "https//suragi.verse.jp/advancedamage_offvocal.wav",
    master: "https//suragi.verse.jp/advancedamage_offvocal.wav",
    mix_file:"mank.wav",
    master_file:"master.wav"
  },
  
  {
    id: '13',
    img: "/13kimino.png",
    title: "君の忘れ物", 
    mix: "https//suragi.verse.jp/kiminowasuremono_offvocal.wav",
    master: "https//suragi.verse.jp/kiminowasuremono_offvocal.wav",
    mix_file:"mank.wav",
    master_file:"master.wav"
  },
  {
    id: '14',
    img: "/14hoshino.jpg",
    title: "星の爪痕", 
    mix: "https//suragi.verse.jp/hoshinotumeato_offvocal.wav",
    master: "https//suragi.verse.jp/hoshinotumeato_offvocal.wav",
    mix_file:"mank.wav",
    master_file:"master.wav"
  },
  {
    id: '15',
    img: "/15deep.jpg",
    title: "Deep Desire", 
    mix: "https//suragi.verse.jp/deepdesire_offvocal.wav",
    master: "https//suragi.verse.jp/deepdesire_offvocal.wav",
    mix_file:"mank.wav",
    master_file:"master.wav"
  },
  {
    id: '16',
    img: "/16left.jpeg",
    title: "LeftFlower", 
    mix: "https//suragi.verse.jp/leftflower_offvocal.wav",
    master: "https//suragi.verse.jp/leftflower_offvocal.wav",
    mix_file:"mank.wav",
    master_file:"master.wav"
  },
  
  {
    id: '18',
    img: "/18spaend.jpg",
    title: "Spuendroll", 
    mix: "https//suragi.verse.jp/spuendroll_offvocal.wav",
    master: "https//suragi.verse.jp/spuendroll_offvocal.wav",
    mix_file:"mank.wav",
    master_file:"master.wav"
  },
  {
    id: '19',
    img: "/19deare.jpg",
    title: "DEALER", 
    mix: "https//suragi.verse.jp/dealer_offvocal.wav",
    master: "https//suragi.verse.jp/dealer_offvocal.wav",
    mix_file:"mank.wav",
    master_file:"master.wav"
  },
  {
    id: '20',
    img: "/20darekawo.jpeg",
    title: "誰かを呪おう", 
    mix: "https//suragi.verse.jp/darekawonoroou_offvocal.wav",
    master: "https//suragi.verse.jp/darekawonoroou_offvocal.wav",
    mix_file:"mank.wav",
    master_file:"master.wav"
  },
  {
    id: '21',
    img: "/21rein.jpg",
    title: "Reincarnation", 
    mix: "https//suragi.verse.jp/reincarnation_offvocal.wav",
    master: "https//suragi.verse.jp/reincarnation_offvocal.wav",
    mix_file:"mank.wav",
    master_file:"master.wav"
  },
  {
    id: '22',
    img: "/22huukai.png",
    title: "風懐", 
    mix: "https//suragi.verse.jp/fukai.wav",
    master: "https//suragi.verse.jp/fukai.wav",
    mix_file:"mank.wav",
    master_file:"master.wav"
  },
  {
    id: '23',
    img: "/23diale.png",
    title: "Dialectic.", 
    mix: "https//suragi.verse.jp/Dialectic_offvocal2mix.wav",
    master: "https//suragi.verse.jp/Dialectic_offvocal.wav",
    mix_file:"mank.wav",
    master_file:"master.wav"
  },
  

  
]