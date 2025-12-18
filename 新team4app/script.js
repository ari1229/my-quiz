/* ============================================================ 
   完全版 script.js（5問×4軸 / 判定改善 / グラフ表示 / ミックス対応）
   ============================================================ */

// ------------------------------------------------------------
// ⭐ 質問 20問（5問 × 4軸）
// ------------------------------------------------------------
const questions = [
  // 🌡 暑がり / 寒がり（0〜4）
  "夏は他の人より暑さを強く感じるほうだ",
  "冬は他の人より寒さが気にならないことが多い",
  "気温が少し上がるだけで体調が左右されやすい",
  "冷房が効いた部屋はすぐ寒いと感じる",
  "暖房が強い部屋はすぐ暑くなりやすい",

  // 🏃 動的 / 静的（5〜9）
  "じっとしているより、動いているほうが好きだ",
  "日常で歩く・階段を使うなど、意識的に動くことが多い",
  "外出が面倒より“気分転換になる”と感じる",
  "休日は外に出たり予定を入れることが多い",
  "少しの距離なら歩いて移動することが多い",

  // 😌 快適重視 / おしゃれ重視（10〜14）
  "服の肌触りや素材の良さを重視して選ぶ",
  "少し暑かったり寒くても、気にせずそのまま過ごせる",
  "締め付ける服や着心地の悪い服は避けたい",
  "機能よりデザインが良ければ多少の不快は許容できる",
  "快適さを求めて、気温に合わせて服を調整する",

  // 🌦 計画派 / 気分派（15〜19）
  "天気予報を見て服装を決めることが多い",
  "湿度や風の強さなど細かい天候も気になる",
  "雨の可能性がある日は必ず服装を工夫する",
  "天気よりも、その日の気分で服を選ぶことが多い",
  "気候に応じて小物（羽織り・傘など）を準備する"
];

// ------------------------------------------------------------
// ⭐ タイプ16通り
// ------------------------------------------------------------
const typeMap = {
  HAKS: "サラサラ・チーター", HAKN: "スッキリ・インコ",
  HAGS: "シャキッと・フェレット", HAGN: "サラリ・ネコ",
  HIKS: "ヒナタ・フェネック", HIKN: "スズシゲ・リス",
  HIGS: "スマート・カラス", HIGN: "クール・アルパカ",
  CAKS: "モコモコ・パンダ", CAKN: "シットリ・カメ",
  CAGS: "ポカポカ・イヌ", CAGN: "タフ・クマ",
  CIKS: "コタツ・ナマケモノ", CIKN: "フワフワ・ヒツジ",
  CIGS: "シンシン・ペンギン", CIGN: "ノンビリ・カピバラ"
};

// ------------------------------------------------------------
// ⭐ 軸カラー
// ------------------------------------------------------------
const axisColors = {
  H: "#FFD6E6", C: "#D6F0FF",
  A: "#D6FFD6", I: "#E6D6FF",
  K: "#FFF6D6", G: "#FFD6D6",
  S: "#D6FFF0", N: "#F0F0F0"
};

// ------------------------------------------------------------
// ⭐ キャラ説明
// ------------------------------------------------------------
const characterDescriptions = {
  

HAKS: {
  title: "HAKS｜サラサラチーター",
  catch: "着こなしも気分も、<br>軽やかに駆け抜けるスピードスター",
  image: "C:/Users/raru_/OneDrive/ドキュメント/team4/新team4app/画像一覧/チーター.jpg",
  type: {
    heading: "■あなたの性質",
    text: "チーターのように軽やかで、どんな環境にもすっと溶け込むタイプです。暑さや寒さの変化に柔軟に対応でき、快適さと行動力のバランスを直感的に調整できます。外出先や日常のちょっとした瞬間でも最適な服や行動を自然に選び、周囲には爽やかで整った印象を与えるでしょう。アクティブで動き回ることも好きですが、その一方で人との距離感や空気も敏感に察知できる観察力の高さも持っています。計画的に動きつつも臨機応変に対応できる自由さがあり、新しいことに挑戦することも苦になりません。その軽やかさがあなたの最大の魅力であり、周囲から自然と好感を持たれる理由です。"
  },
  love: {
    heading: "■恋愛・対人傾向",
    text: "恋愛では相手の気持ちやペースを自然に察知し、無理をさせずにお互いにとって心地よい距離感の関係を作ることができます。テンポが合いフットワークの軽い相手とは一気に距離が縮まり、軽やかでありながらも誠実さのある関係を築けるでしょう。ただし感情的な重さが伴う関係や束縛が強すぎる状況に対しては、無意識にふっと距離を置いてしまうことがあります。友人や恋人に対しても適度な軽やかさと確かな安心感を両立させ、一緒にいて居心地の良い空気を作れる社交的なタイプです。"
  },
  style: {
    heading: "■似合うスタイル",
    text: "軽やかで動きやすい薄手トップス、軽量ジャケット、ストレッチパンツなどがベスト。ベージュ、レッド、ホワイトなどがよりあなたの魅力を引き出します。"
  },
  items: {
    heading: "■おすすめアイテム",
    list: ["吸汗速乾シャツ", "ナイロンライトアウター", "ドライ素材パンツ", "持ち運べる薄手カーデ", "軽量スニーカー"]
  }
},

HAKN: {
  title: "HAKN｜すっきりインコ",
  catch: "空気の変化までキャッチする、<br>軽快アナライザー",
  image: "C:/Users/raru_/OneDrive/ドキュメント/team4/新team4app/画像一覧/インコ.jpg",
  type: {
    heading: "■あなたの性質",
    text: "インコのように空気の変化を敏感に察知し、状況に合わせて軽やかに動けるタイプです。暑さや寒さだけでなく、湿度や風の流れまで自然に読み取り、自分が快適になれる選択を瞬時に行えます。見た目の爽やかさだけでなく素材や機能性まで考慮できる理論派で、整った印象を周囲に与えることが多いでしょう。"
  },
  love: {
    heading: "■恋愛・対人傾向",
    text: "恋愛では細やかな気配りと鋭い観察力をバランスよく発揮し、干渉も放任もしない心地よい距離感を作れるタイプです。相手の気持ちを敏感に察知しながらも自分のペースも守れるため、安心感と信頼のある関係を築きやすいでしょう。"
  },
  style: {
    heading: "■似合うスタイル",
    text: "薄手レイヤード、軽い羽織り、機能素材が似合います。色はライトブルー、ホワイト、パステル系が知的な爽やかさを演出します。"
  },
  items: {
    heading: "■おすすめアイテム",
    list: ["リネンシャツ", "軽量カーディガン", "UVカットジャケット", "通気性ボトム", "コンフォートスニーカー", "大容量リュック"]
  }
},

HAGS: {
  title: "HAGK｜シャキッとフェレット",
  catch: "キレ良く動く、メリハリアクティブ",
  image: "C:/Users/raru_/OneDrive/ドキュメント/team4/新team4app/画像一覧/フェレット.jpg",
  type: {
    heading: "■あなたの性質",
    text: "フェレットのように素早く動き、状況判断に長けたアクティブタイプです。暑さには強い一方で、多少の寒さや不快感はぐっとこらえてしまう“我慢派”の一面もあります。サッと動く敏捷さと、必要なときに集中できるメリハリが特徴です。"
  },
  love: {
    heading: "■恋愛・対人傾向",
    text: "テンポの合う相手と一気に距離が縮まるタイプ。束縛を嫌い、適度な自由がある関係が理想です。自然体で接する姿勢が魅力で、友人に対しても軽やかな距離感を作ります。"
  },
  style: {
    heading: "■似合うスタイル",
    text: "動きやすさが鍵。ナイロンアウターやストレッチ素材、ライトグレーやブラック、オリーブなどキレのある色味がフィットします。"
  },
  items: {
    heading: "■おすすめアイテム",
    list: ["ナイロンジャケット", "ストレッチトップス", "ドライ素材パンツ", "軽量スニーカー", "ウエストポーチ"]
  }
},

HAGN: {
  title: "HAGN｜きまぐれネコ",
  catch: "直感で動く、<br>自由気ままなコンフォート派",
  image: "C:/Users/raru_/OneDrive/ドキュメント/team4/新team4app/画像一覧/ネコ.jpg",
  type: {
    heading: "■あなたの性質",
    text: "ネコのように自分のペースを大事にし、心地よさを最優先にできるタイプです。気まぐれに見えますが実はとても合理的で、環境の変化に敏感。暑さ寒さの不快さを避けるセンスが高く、無理をしない上手な生き方ができる人です。"
  },
  love: {
    heading: "■恋愛・対人傾向",
    text: "ベタベタしすぎず、かといって完全に距離を置くわけでもない絶妙な距離感を作るタイプ。自立した関係を好み、心地よいテンポが合う相手とは自然に深い信頼を築きます。"
  },
  style: {
    heading: "■似合うスタイル",
    text: "リラックスシルエットのトップス、やわらか素材、ニュアンスカラーがしっくりきます。アイボリー、グレージュ、モカなどの落ち着いた色味がおすすめ。"
  },
  items: {
    heading: "■おすすめアイテム",
    list: ["ゆるニット", "スウェットプルオーバー", "ワイドパンツ", "ソフトガウン", "軽量ショルダーバッグ"]
  }
},

CIGS: {
  title: "HAKN｜すみっこペンギン",
  catch: "ひんやり空気のほっと安らぎ",
  image: "C:/Users/raru_/OneDrive/ドキュメント/team4/新team4app/画像一覧/ペンギン.jpg",
  type: {
    heading: "■あなたの性質",
    text: "寒さに強く、内面的な冷静さから冷気にも動じないタイプです。静かで高い観察力があり、状況を把握してから行動に移すスマートさを持っています。服装は派手さを避け、必要最小限で機能的なアイテムを選ぶミニマルさが魅力です。控えめながらも確かな存在感があり、周囲からは感情に流されない、落ち着いた知的な印象を持たれやすいです。生活においても安定感を最重視し、ルーティンを維持する傾向も。自分のペースを守りつつも、周囲のニーズに的確に配慮できるバランス感覚を持つタイプです。"
  },
  love: {
    heading: "■恋愛・対人傾向",
    text: "恋愛では時間をかけてゆっくりと信頼できる関係を築きます。相手の言動を深く観察し、最適なサポートや配慮を静かに提供します。お互いが自然体でいられる関係を好み、その冷静な態度が結果的に深い安心感を与えられます。友人関係では感情的になることが少なく、意見が分かれた際の調整役として非常に頼りにされます。あなたの持つ揺るぎない冷静さと安定感が、周囲からの厚い信頼につながる最大の魅力です。"
  },
  style: {
    heading: "■似合うスタイル",
    text: "クールトーン、ミニマル、シンプルレイヤードなど落ち着きがあり、機能性が高い服装と相性◎"
  },
  items: {
    heading: "■おすすめアイテム",
    list: ["クールニット", "シンプルジャケット", "ストレッチパンツ", "ローファー", "コンパクトバッグ"]
  }
},

CIGN: {
  title: "CIGN｜ノンビリカピバラ",
  catch: "いつでもマイペース。<br>心地よい世界に浸る平和主義者",
  image: "C:/Users/raru_/OneDrive/ドキュメント/team4/新team4app/画像一覧/フェレット.jpg",
  type: {
    heading: "■あなたの性質",
    text: "寒さに強く、天気や世間の流行といった外的要因よりも“その時の気分”や“心地よさ”で服装や行動を選ぶカピバラタイプです。生活はのんびりとした独自のペースで進み、常に心身の快適さを最優先にします。その穏やかで落ち着いた性格は、周囲に癒やしと安心感を与える存在です。自由な時間を大切にし、生活全体のリズムを自分に合わせられる柔軟さと楽天的な考え方があります。マイペースでありながらも、周囲とぶつかることを嫌うため、自然と調和の取れた人間関係を築くことができます。"
  },
  love: {
    heading: "■恋愛・対人傾向",
    text: "恋愛ではお互いが心地よいと思えるマイペースな関係を好みます。相手にも自由を許し、ゆったりとした時間の流れの中で安心感のあるつながりを築けるタイプです。友人関係では飾らない自然体でいられる雰囲気を作り、あなたの周りにはいつも穏やかな空気が広がります。このゆったりとした生活感と、一切の攻撃性のない平和的な態度こそが、人を惹きつけるあなたの最大の魅力です。"
  },
  style: {
    heading: "■似合うスタイル",
    text: "ゆるボトム、ナチュラルカラー、ラフかわ系コーデなどゆったりした服装をすることで、あなたにとってより快適な生活につながります。"
  },
  items: {
    heading: "■おすすめアイテム",
    list: ["リラックスパンツ", "オーバーサイズトップス", "ふわふわカーディガン", "スニーカー", "ナチュラル素材の小物"]
  }
},

HIKS: {
  title: "HIKS｜せんさいフェネック",
  catch: "環境に敏感で優しい、<br>気配り上手なやわらかタイプ",
  image: "C:/Users/raru_/OneDrive/ドキュメント/team4/新team4app/画像一覧/フェネック.jpg",
  type: {
    heading: "■あなたの性質",
    text: "フェネックのように気温や空気感の変化にとても敏感で、繊細な感性を持つタイプです。暑さや寒さの不快さを素早く察知し、無理をしない安全な行動選びが得意。周囲の人にも細やかな気配りができ、穏やかな空気を作ります。"
  },
  love: {
    heading: "■恋愛・対人傾向",
    text: "丁寧で優しい関わり方を好み、相手の気持ちを尊重した関係を築きます。ただし急な変化や強い感情をぶつけられると心が疲れやすいため、穏やかな相手との相性が良いタイプです。"
  },
  style: {
    heading: "■似合うスタイル",
    text: "ふわっと柔らかい素材、淡色トーン、軽いニットがマッチ。ベージュ、アイボリー、ピンクなどのやさしい色が似合います。"
  },
  items: {
    heading: "■おすすめアイテム",
    list: ["ふわニット", "薄ショール", "やわらかカットソー", "リラックスパンツ", "軽量スリッポン"]
  }
},

HIKN: {
  title: "HIKN｜スズシゲリス",
  catch: "空気の変化に敏感で、<br>静かに整えるクール温度派",
  image: "C:/Users/raru_/OneDrive/ドキュメント/team4/新team4app/画像一覧/リス.jpg",
  type: {
    heading: "■あなたの性質",
    text: "リスのように気温・湿度などの小さな変化にも敏感で、快適さを丁寧に調整していくタイプです。派手な行動より静かな環境を好み、落ち着いたムードを保つのが上手。周囲の雰囲気をよく読みながら、自分のペースを大切にできます。"
  },
  love: {
    heading: "■恋愛・対人傾向",
    text: "一度信頼すると深く長く関係を育てていくタイプ。穏やかで誠実な相手と相性が良く、感情を無理に動かされない関係を好みます。"
  },
  style: {
    heading: "■似合うスタイル",
    text: "落ち着いたトーン、軽量アウター、柔らかトップスが◎。ネイビー、モカ、オリーブなどが得意。"
  },
  items: {
    heading: "■おすすめアイテム",
    list: ["軽量パーカー", "ロングスリーブT", "ソフトパンツ", "コンパクトバッグ", "ウォームインナー"]
  }
},

HIGS: {
  title: "HIGK｜スマートカラス",
  catch: "合理とスピードのバランサー",
  image: "C:/Users/raru_/OneDrive/ドキュメント/team4/新team4app/画像一覧/カラス.jpg",
  type: {
    heading: "■あなたの性質",
    text: "暑さ寒さといった環境要因を感情論ではなく冷静に判断し、常に機能性を見極めるカラスタイプです。几帳面で無駄を嫌い、最も効率よく目標に向かって行動するのが得意です。服や小物の選択においても合理性が最優先で、流行よりも実用性や利便性を重視します。その冷静さと行動力を両立させる姿勢から周囲からは「判断力があり頼れる存在」と認識されやすく、深い信頼を得やすいタイプです。合理的な判断ができるため、計画性を持ちながらも予期せぬ事態には臨機応変に対応できる自由さも兼ね備えています。"
  },
  love: {
    heading: "■恋愛・対人傾向",
    text: "恋愛では感情に流されることなく、誠実さと信頼関係を重視した大人の関係を築きます。相手との物理的・精神的な距離感を冷静かつ適切に管理できるため、精神的に自立した信頼できるパートナーとして頼られます。友人関係でもその合理的な判断力で人間関係の調整が上手く、無理や負担のない安定した関係を長期的に維持できます。効率的かつ真摯で誠実な対応ができるため、周囲に確かな安心感のある人間関係を築くことができます。"
  },
  style: {
    heading: "■似合うスタイル",
    text: "オフィススタイルやきれいめな服装と相性◎。モノトーンやシンプルデザインがより快適な生活につながるかも。"
  },
  items: {
    heading: "■おすすめアイテム",
    list: ["高機能ジャケット", "ストレッチパンツ", "コンフォートシューズ", "シンプルバックパック", "機能性アクセサリー"]
  }
},

HIGN: {
  title: "HIGN｜クールアルパカ",
  catch: "涼しい顔で自由に生きる、<br>クールペースメーカー",
  image: "C:/Users/raru_/OneDrive/ドキュメント/team4/新team4app/画像一覧/アルパカ.jpg",
  type: {
    heading: "■あなたの性質",
    text: "暑さ寒さといった外的要因に左右されることなく、自分の内なる感覚に従って自由に行動するアルパカタイプです。天候や世間の常識よりも気分を最優先して服装や行動を選び、独自のペースを何よりも大切にします。その態度は常に落ち着いており、周囲からは「余裕があり、物事に動じない」と映ることが多いでしょう。活動的な面を持ちながらも、決して焦らずマイペースで、気楽に人生を楽しみながら周囲と関わることができます。服装や持ち物も、流行に流されず自分の感覚に合うものを自然に選び取り、自由で洗練された心地よい生活空間を作り出します。"
  },
  love: {
    heading: "■恋愛・対人傾向",
    text: "恋愛においては、一時の感情的な盛り上がりよりも、穏やかで安心感のある関係を好みます。相手のペースや価値観を尊重しつつも、自分の自由や独立した時間も大切にできるため、依存し合わない成熟した安定的な関係を築きやすいです。友人関係でも、その落ち着きと柔軟な考え方を併せ持ち、意見の対立が起こりにくい安心感を与える存在となります。自由さと安定感が絶妙に両立しており、周囲に心のゆとりと安心感を提供できることが最大の魅力です。"
  },
  style: {
    heading: "■似合うスタイル",
    text: "リネンや薄手のウール、リラックスウェアなどゆったりしたものと相性◎。色はその日の気分によって選ぶことでより魅力を引き出します。"
  },
  items: {
    heading: "■おすすめアイテム",
    list: ["ゆったり薄手ニット", "リネンパンツ", "ワイドストレートパンツ", "ロングカーディガン", "ラフシューズ", "バングル"]
  }
},

CAKS: {
  title: "CAKS｜モコモコパンダ",
  catch: "ぬくぬく幸せを全力で守る癒し系",
  image: "C:/Users/raru_/OneDrive/ドキュメント/team4/新team4app/画像一覧/パンダ.jpg",
  type: {
    heading: "■あなたの性質",
    text: "寒さに強く、日々の生活において快適さを徹底的に追求するパンダタイプです。静かでおっとりした性格ですが、心地よさに関しては妥協しません。カシミヤやフリースなどのふんわりした素材や全身を包み込むようなあたたかい服を好み、自分にとって居心地の良い環境作りを極めることが得意です。周囲には優しく穏やかな印象を与え、その存在自体が人を和ませる癒しの源として頼られます。活動的な時間よりもじっとしている時間を大切にし、心身をゆったりと整えることを生活の中心に据えています。"
  },
  love: {
    heading: "■恋愛・対人傾向",
    text: "恋愛では相手に深い安らぎと安心感を与えられる、包容力のあるタイプです。穏やかで感情の起伏が少なく相手を優しく包み込むため、長期間にわたって安心できる関係を築きやすいでしょう。友人関係でも自然と心地よいリラックスできる空間を作り出し、周囲から疲れた心を癒してくれる存在として慕われます。その落ち着きと温かい人柄があなたの最大の魅力であり、多くの人を引きつけます。"
  },
  style: {
    heading: "■似合うスタイル",
    text: "モコモコ素材、厚手ニット、フリースなどの着心地の良いあたたかい服装と相性◎。暖色系のアイテムと相性抜群です。"
  },
  items: {
    heading: "■おすすめアイテム",
    list: ["フリースジャケット", "厚手ニット", "ふわふわカーディガン", "モコモコマフラー", "温か素材のルームシューズ"]
  }
},

CAKN: {
  title: "CAKN｜パワフルカメ",
  catch: "ゆっくりだけど確実。<br>ていねいに暮らす職人肌",
  image: "C:/Users/raru_/OneDrive/ドキュメント/team4/新team4app/画像一覧/カメ.jpg",
  type: {
    heading: "■あなたの性質",
    text: "落ち着いた性格で、寒さや快適さに非常に敏感なカメタイプです。動きは静的でゆっくりとしていますが、上質な素材や整った環境にこだわる繊細さを持っています。何事にも計画的で丁寧な行動を好み、日常生活の中で自ら意識して最高の快適さを追求することが自然にできる職人肌のタイプです。安定した確実なペースで物事に取り組み、その信頼性から周囲に安心感を与え、頼りにされやすいでしょう。日常の細部にまで気を配る優れた観察能力があり、長期的に見て心地よい生活環境を完璧に維持できます。"
  },
  love: {
    heading: "■恋愛・対人傾向",
    text: "恋愛では誠実さと落ち着きを大切にするタイプです。日々の生活の中で細やかな気遣いを欠かさず、相手に安心感を与えることが得意です。そのため長期的な信頼関係を築ける最良のパートナーとして慕われます。友人関係でもその安定感は際立ち、相談事には真摯に対応するため、頼れる存在として自然と人が集まります。落ち着いた関係性を好み、一度築いたつながりは深く、確かな信頼に裏打ちされます。"
  },
  style: {
    heading: "■似合うスタイル",
    text: "ウールコートなど質感重視の服装がベスト。シアーベージュ、アッシュブラウン、くすみブルーといった上品なカラーが似合います。"
  },
  items: {
    heading: "■おすすめアイテム",
    list: ["ウールコート", "上質ニット", "レザーグローブ", "暖かカーディガン", "落ち着いた色のバッグ"]
  }
},

CAGS: {
  title: "CAGK｜ポカポカわんこ",
  catch: "あったかさで包み込む、<br>陽だまりプレイヤー",
  image: "C:/Users/raru_/OneDrive/ドキュメント/team4/新team4app/画像一覧/イヌ.jpg",
  type: {
    heading: "■あなたの性質",
    text: "わんこのように人懐っこく、周囲にあたたかい空気を運ぶタイプです。寒さに強く、しっかり体を温めることで元気に活動できます。少し静的で落ち着いた面もありますが、人との交流には前向きで、ふんわりとした安心感を与える性質の持ち主。周囲が自然とあなたのそばに集まりやすい、柔らかい魅力のあるタイプです。"
  },
  love: {
    heading: "■恋愛・対人傾向",
    text: "恋愛では相手を安心させるのが得意。穏やかで優しい距離感を作り、丁寧に関係を育てていきます。感情を押し付けることなく、そっと寄り添うスタイルのため、相手は「癒される」「ずっと一緒にいたい」と感じやすいでしょう。"
  },
  style: {
    heading: "■似合うスタイル",
    text: "厚手パーカー、フリースアウター、ふんわりニットなどのあったか素材がぴったり。ブラウン、キャメル、クリーム色などが特にマッチします。"
  },
  items: {
    heading: "■おすすめアイテム",
    list: ["ボアアウター", "裏起毛スウェット", "ふんわりニット帽", "あったかソックス", "マフラー"]
  }
},

CAGN: {
  title: "CAGN｜タフベア",
  catch: "寒さも人付き合いもどんと来い、<br>頼れる安定型",
  image: "C:/Users/raru_/OneDrive/ドキュメント/team4/新team4app/画像一覧/クマ.jpg",
  type: {
    heading: "■あなたの性質",
    text: "クマのように安定感があり、多少の寒さや環境変化にも動じないタフさを持つタイプです。行動はゆったりしていますが、芯が強く、信頼されやすい性質の持ち主.環境の快適さにも敏感で、必要なときにはしっかり整える慎重さもあります。周囲に安心感を与え、頼れる存在として重宝されるタイプです。"
  },
  love: {
    heading: "■恋愛・対人傾向",
    text: "恋愛ではどっしり構えた落ち着きが魅力。派手なアプローチよりも誠実で優しい態度で関係を深めます。一度心を許した相手には長く深く向き合い、大切に大切に育てるタイプです。"
  },
  style: {
    heading: "■似合うスタイル",
    text: "厚手コート、もこもこカーディガン、重ためシルエットがしっくりきます。深めブラウン、ネイビー、グレーなどが安定感を強調。"
  },
  items: {
    heading: "■おすすめアイテム",
    list: ["ヘビーアウター", "ウールパンツ", "厚手マフラー", "重厚リュック", "保温性の高いインナー"]
  }
},

CIKS: {
  title: "CIKS｜うとうとナマケモノ",
  catch: "ゆっくりが一番心地よい癒し枠",
  image: "C:/Users/raru_/OneDrive/ドキュメント/team4/新team4app/画像一覧/ナマケモノ.jpg",
  type: {
    heading: "■あなたの性質",
    text: "穏やかでマイペース、静かな時間を大切にするナマケモノタイプ。寒さに強く、体をゆったりと温めながら過ごすのが好きな傾向。急ぎすぎる環境よりも、落ち着いて自分のペースを維持できる環境でこそ力を発揮できます。気配りがさりげなく、人を安心させる優しさを持っています。"
  },
  love: {
    heading: "■恋愛・対人傾向",
    text: "恋愛はスローペースで、自分と同じく穏やかな人と相性◎。刺激よりも安心感や深い信頼を重視します。急かされる関係は苦手ですが、落ち着いて向き合える相手とはとても深い絆を築けるタイプです。"
  },
  style: {
    heading: "■似合うスタイル",
    text: "ゆるめニット、スウェット、あったかパンツなど、締め付けのないリラックス系がベスト。カラーはオフホワイト、モカ、ブラウンなどまろやか系。"
  },
  items: {
    heading: "■おすすめアイテム",
    list: ["スウェットセットアップ", "ゆったりニット", "もこもこソックス", "ブランケット", "柔らかバッグ"]
  }
},

CIKN: {
  title: "CIKN｜ちゃんちゃんこヒツジ",
  catch: "ふわふわ安心穏やかキーパー",
  image: "C:/Users/raru_/OneDrive/ドキュメント/team4/新team4app/画像一覧/ヒツジ.jpg",
  type: {
    heading: "■あなたの性質",
    text: "ヒツジのように温厚で、人に安心感を与えるタイプです。寒さに強く、ふんわりとした素材や温かい空間をとても好む傾向があります。動きはゆっくりで静的ですが、周囲の空気を読む力が高く、環境や人の気持ちを察して行動する優しさの持ち主。穏やかで柔らかな性質が魅力です。"
  },
  love: {
    heading: "■恋愛・対人傾向",
    text: "恋愛では守ってあげたくなる可愛らしさと、包み込むような安心感を両立しています。相手に無理をさせず、自然体で穏やかに関係を深めるタイプ。共感性が高く、相手の気持ちに寄り添う姿勢が大きな魅力です。"
  },
  style: {
    heading: "■似合うスタイル",
    text: "ボア、ウール、ニットなどふわふわ素材と相性抜群。アイボリー、ミルクティー、淡ブラウンなど優しい色味がぴったりです。"
  },
  items: {
    heading: "■おすすめアイテム",
    list: ["ボアカーデ", "ニットワンピース", "ふんわりマフラー", "厚手レギンス", "ぬくぬくルームウェア"]
  }
},

};



// ------------------------------------------------------------
// ⭐ 診断用変数
// ------------------------------------------------------------
let current = 0;
let answers = [];
let neutralStreak = 0;
const NEUTRAL_WARNING = 3;

// ⭐ 質問の表示
function renderQuestion() {
  document.getElementById("question-text").innerText =
    `Q${current + 1}. ${questions[current]}`;

  const options = [
    "とてもそう思う", "ややそう思う", "どちらともいえない", "あまりそう思わない", "まったくそう思うわない"
  ];

  // ラジオボタンを選択した瞬間に autoNext() が呼ばれます
  document.getElementById("options").innerHTML =
    options.map((opt, i) => `
      <label>
        <input type="radio" name="q" value="${i}" onchange="autoNext()">
        ${opt}
      </label>
    `).join("");

  document.getElementById("back-btn").style.display = current > 0 ? "inline-block" : "none";
}

// 0.2秒後に次へ（クリックした感覚を残すため少しディレイを入れています）
function autoNext() { 
  setTimeout(nextQuestion, 200); 
}

// ------------------------------------------------------------
// ⭐ スタート
// ------------------------------------------------------------
function startQuiz() {
  document.getElementById("start-screen").classList.add("hidden");
  document.querySelector(".question-area").style.display = "block";
  current = 0; answers = []; neutralStreak = 0;
  renderQuestion();
}

// ------------------------------------------------------------
function autoNext() { setTimeout(nextQuestion, 200); }

// ------------------------------------------------------------
// ⭐ 次へ
// ------------------------------------------------------------
function nextQuestion() {
  const sel = document.querySelector('input[name="q"]:checked');
  if (!sel) return;
  const value = parseInt(sel.value);
  answers[current] = value;

  if (value === 2) { 
    neutralStreak++; 
    if (neutralStreak >= NEUTRAL_WARNING) alert("『どちらともいえない』が続いています。"); 
  } else {
    neutralStreak = 0;
  }

  current++;
  if (current < questions.length) { 
    renderQuestion(); 
    // 背景更新（updateBackground）の呼び出しを削除しました
  } else { 
    showResult(); 
  }
}

// ------------------------------------------------------------
// ⭐ 戻る
// ------------------------------------------------------------
function prevQuestion() {
  if (current > 0) {
    current--;
    renderQuestion();
  }
}

// ------------------------------------------------------------
// ⭐ 結果表示
// ------------------------------------------------------------
// --- showResult関数の中身を以下に差し替え ---
function showResult() {
  document.querySelector(".question-area").style.display = "none";
  const resultArea = document.getElementById("result");
  resultArea.style.display = "block";

  const scores = [
    answers.slice(0, 5),
    answers.slice(5, 10),
    answers.slice(10, 15),
    answers.slice(15, 20)
  ];

  const calcPercent = (arr) => {
    const total = arr.reduce((a, b) => a + b, 0);
    return Math.round((total / (arr.length * 4)) * 100);
  };

  const p = scores.map(s => calcPercent(s));
  const code = judgeTemp(scores[0]) + judgeActive(scores[1]) + judgeComfort(scores[2]) + judgeSpeed(scores[3]);
  const desc = characterDescriptions[code];

  if (!desc) {
    resultArea.innerHTML = `<p>診断結果エラー（code: ${code}）</p>`;
    return;
  }

  // 背景色設定
  const typeBgColors = {
    HAKS: "#ffa3a3", HAKN: "#ffe0c1", HAGS: "#ffffd6", HAGN: "#ffe0ff",
    HIKS: "#ffdbed", HIKN: "#ffffc6", HIGS: "#ffe8d1", HIGN: "#ffc6c6",
    CAKS: "#b2ffff", CAKN: "#eaffd6", CAGS: "#c6ffff", CAGN: "#eddbff",
    CIKS: "#d1ffe8", CIKN: "#c6e2ff", CIGS: "#e5ffff", CIGN: "#eafff4"
  };

  const bgColor = typeBgColors[code] || "#ffffff";
  const container = document.querySelector('.container');
  container.style.background = bgColor;
  container.style.backgroundImage = "none";

  // 結果のHTML組み立て（グラフ部分を初期状態で非表示に）
  let html = `
    <div class="result-card main-title-card">
      <p>あなたの体感温度タイプは…</p>
      <h4>${desc.title}</h4>
      <p class="catch">${desc.catch}</p>
      <img src="${desc.image}" class="result-image" style="width:100%; max-width:250px; margin:10px auto; display:block; border-radius:15px;">
    </div>
    <div class="result-card"><h3>■あなたの性質</h3><p>${desc.type.text}</p></div>
    <div class="result-card"><h3>${desc.love.heading}</h3><p>${desc.love.text}</p></div>
    <div class="result-card"><h3>${desc.style.heading}</h3><p>${desc.style.text}</p></div>
    <div class="result-card">
      <h3>${desc.items.heading}</h3>
      <ul style="text-align:left; display:inline-block;">
        ${desc.items.list.map(item => `<li><a href="https://zozo.jp" target="_blank" class="item-link">${item}</a></li>`).join("")}
      </ul>
    </div>

    <div class="banner-ad-container">
      <a href="https://www.amazon.co.jp" target="_blank" class="banner-link">
        <div class="banner-wrapper amazon-theme">
          <img src="画像一覧/バナー広告.jpeg" alt="Amazonでチェック" onerror="this.src='https://placehold.jp/24/232f3e/ff9900/300x100.png?text=Amazon%0A今すぐチェック！'">
          <span class="ad-badge">AD</span>
        </div>
      </a>
      <p style="font-size: 10px; color: #888; margin-top: 4px;">Amazonで関連アイテムをチェックする</p>
    </div>

    <div id="unlock-container" class="result-card" style="text-align:center;">
      <p style="margin-bottom:15px;">詳しい分析データが見たい方はこちら</p>
      <button class="btn" onclick="unlockGraph()">広告を見てグラフを表示</button>
    </div>

    <div id="ad-overlay" style="display:none; text-align:center; padding:20px;" class="result-card">
       <div class="loader"></div>
       <p>詳細データを読み込み中...<br><span style="font-size:12px;">（数秒で完了します）</span></p>
    </div>

    <div id="graph-area" style="display:none;" class="result-card">
      <h3>■あなたの傾向グラフ</h3>
      <div class="analysis-charts" style="background: transparent; padding: 0; border: none;">
        ${renderBar("暑がり", "寒がり", p[0])}
        ${renderBar("動的", "静的", p[1])}
        ${renderBar("快適重視", "おしゃれ重視", p[2])}
        ${renderBar("計画派", "気分派", p[3])}
      </div>
    </div>

    <div class="share-container" style="margin-top: 30px; border-top: 1px solid #eee; padding-top: 20px;">
      <p style="font-size: 14px; margin-bottom: 10px;">結果を友達に教える</p>
      <div style="display: flex; gap: 10px; justify-content: center;">
        <button class="btn share-x" onclick="shareX('${desc.title}')">Xでポスト</button>
        <button class="btn share-line" onclick="shareLine('${desc.title}')">LINEで送る</button>
      </div>
    </div>
    <div style="height: 50px;"></div>
  `;
  resultArea.innerHTML = html;
}

// --- showResult関数より下を以下に差し替え ---

// ⭐ 広告を見てグラフを表示する関数
function unlockGraph() {
  const unlockBtn = document.getElementById("unlock-container");
  const adOverlay = document.getElementById("ad-overlay");
  const graphArea = document.getElementById("graph-area");

  // ボタンを隠してローディング（広告代わり）を表示
  unlockBtn.style.display = "none";
  adOverlay.style.display = "block";

  // 3秒後にグラフを表示
  setTimeout(() => {
    adOverlay.style.display = "none";
    graphArea.style.display = "block";
    // グラフまでスムーズにスクロール
    graphArea.scrollIntoView({ behavior: 'smooth' });
  }, 3000); 
}

// ⭐ 背景色切り替え（中身を空にして固定）
function updateBackground() {}

// 1. 各軸のスコアから記号（H, C, A...）を判定する関数
function judgeTemp(arr) {
  const avg = arr.reduce((a, b) => a + b, 0) / arr.length;
  return avg < 2 ? "H" : "C"; 
}

function judgeActive(arr) {
  const avg = arr.reduce((a, b) => a + b, 0) / arr.length;
  return avg < 2 ? "A" : "I"; 
}

function judgeComfort(arr) {
  const avg = arr.reduce((a, b) => a + b, 0) / arr.length;
  return avg < 2 ? "K" : "G"; 
}

function judgeSpeed(arr) {
  const avg = arr.reduce((a, b) => a + b, 0) / arr.length;
  return avg < 2 ? "S" : "N"; 
}

// ⭐ グラフのHTMLを生成する関数
function renderBar(leftLabel, rightLabel, percent) {
  const leftPercent = 100 - percent;
  const rightPercent = percent;

  return `
    <div class="chart-row">
      <div class="labels">
        <span>${leftLabel} (${leftPercent}%)</span>
        <span>(${rightPercent}%) ${rightLabel}</span>
      </div>
      <div class="bar-container">
        <div class="bar-fill" style="width: ${percent}%;"></div>
      </div>
    </div>
  `;
}
// ⭐ 背景色切り替え（中身を空にして固定）
function unlockGraph() {
  const unlockBtn = document.getElementById("unlock-container");
  const adOverlay = document.getElementById("ad-overlay");
  const graphArea = document.getElementById("graph-area");

  // ボタンを隠して広告表示エリアを出す
  unlockBtn.style.display = "none";
  adOverlay.style.display = "block";

  // 広告動画のHTMLを生成（動画パスを指定）
  // ※パスはご提示いただいたものに合わせていますが、動かない場合は
  //   動画ファイルをHTMLと同じフォルダに移動して "広告動画.mp4" と記述してください
  adOverlay.innerHTML = `
    <p style="margin-bottom:10px; font-weight:bold;">広告再生中...</p>
    <video id="ad-video" width="100%" style="border-radius:10px; box-shadow: 0 4px 10px rgba(0,0,0,0.1);" autoplay muted playsinline>
      <source src="画像一覧/広告動画.mp4" type="video/mp4">
      お使いのブラウザは動画再生に対応していません。
    </video>
    <p style="font-size:12px; color:#888; margin-top:5px;">動画終了後にグラフが表示されます</p>
  `;

  const video = document.getElementById("ad-video");

  // 動画が終了した時の処理
  video.onended = function() {
    adOverlay.style.display = "none"; // 広告を消す
    graphArea.style.display = "block"; // グラフを出す
    graphArea.scrollIntoView({ behavior: 'smooth' }); // グラフへスクロール
  };

  // 万が一動画が読み込めなかった場合、5秒後に強制的にグラフを出す（エラー対策）
  video.onerror = function() {
    setTimeout(() => {
      adOverlay.style.display = "none";
      graphArea.style.display = "block";
    }, 3000);
  };
}

// --- 以下を script.js の最後に追加（何も消さなくてOKです） ---

// 1. 各軸のスコアから記号（H, C, A...）を判定する関数
function judgeTemp(arr) {
  const avg = arr.reduce((a, b) => a + b, 0) / arr.length;
  return avg < 2 ? "H" : "C"; 
}

function judgeActive(arr) {
  const avg = arr.reduce((a, b) => a + b, 0) / arr.length;
  return avg < 2 ? "A" : "I"; 
}

function judgeComfort(arr) {
  const avg = arr.reduce((a, b) => a + b, 0) / arr.length;
  return avg < 2 ? "K" : "G"; 
}

function judgeSpeed(arr) {
  const avg = arr.reduce((a, b) => a + b, 0) / arr.length;
  return avg < 2 ? "S" : "N"; 
}

// ⭐ グラフのHTMLを生成する関数（script.js内の同名関数を書き換え）
function renderBar(leftLabel, rightLabel, percent) {
  // 左側の要素のパーセントは percent、右側は (100 - percent)
  const leftPercent = 100 - percent;
  const rightPercent = percent;

  return `
    <div class="chart-row">
      <div class="labels">
        <span>${leftLabel} (${leftPercent}%)</span>
        <span>(${rightPercent}%) ${rightLabel}</span>
      </div>
      <div class="bar-container">
        <div class="bar-fill" style="width: ${percent}%;"></div>
      </div>
    </div>
  `;
}

// 3. script.js内に空で定義されている関数を確認（念のため）
// もし既にある場合は重複しても問題ありません
if (typeof updateBackground !== 'function') {
  function updateBackground() {}
}

// --- シェア用関数をscript.jsのどこか（外側）に追加 ---
function shareX(typeTitle) {
  const text = encodeURIComponent(`私の体感温度タイプは 【${typeTitle}】 でした！\n#体感温度診断 #チーム4app`);
  const url = encodeURIComponent(window.location.href);
  window.open(`https://twitter.com/intent/tweet?text=${text}&url=${url}`, '_blank');
}

function shareLine(typeTitle) {
  const text = encodeURIComponent(`私の体感温度タイプは 【${typeTitle}】 でした！\n${window.location.href}`);
  window.open(`https://social-plugins.line.me/lineit/share?url=${text}`, '_blank');
}