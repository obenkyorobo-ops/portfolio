/**
 * Antigravity Projects Data
 * キオクノタスケ（クローズドβテスター募集中）を最優先フィーチャー
 * ゲミニータン（3D AIパートナー ＆ Gemini Live）
 * ボク友英単語（実機スクリーンショット5枚対応）
 */
const projectsData = [
  {
    id: "mugen",
    title: "キオクノタスケ",
    subtitle: "新課程全18科目対応・忘却曲線（SRS）暗記＆演習アプリ",
    category: "flutter",
    categoryLabel: "Flutter / SRS Learning",
    status: "クローズドβ募集中",
    statusType: "beta",
    featured: true,
    accentColor: "from-blue-600 via-sky-500 to-indigo-600",
    badgeColor: "bg-amber-500/15 text-amber-300 border-amber-500/30",
    icon: "assets/images/mugen_icon.png",
    previewImage: "assets/images/mugen_study.jpg",
    summary: "大学入学共通テストおよび高校学習に対応した新課程全18科目網羅の忘却曲線学習アプリ。現在、Google Playクローズドβテスターを大募集中です！",
    betaInfo: {
      isRecruiting: true,
      badgeText: "🚀 Google Play クローズドβテスト実施中",
      groupUrl: "https://groups.google.com/u/3/g/study-app-tester",
      playStoreUrl: "https://play.google.com/store/apps/details?id=jp.obenkyorobo.exam_prep",
      note: "連絡不要・出入り自由！相互テストも大歓迎です。Googleグループにご参加いただくだけで、すぐにお手元のスマホ（Android）でお試しいただけます。"
    },
    description: `
      <div class="p-4 rounded-xl bg-gradient-to-r from-amber-950/60 via-slate-900 to-sky-950/60 border border-amber-500/40 mb-6">
        <div class="flex items-center gap-2 text-amber-400 font-bold text-sm mb-2">
          <span class="w-2.5 h-2.5 rounded-full bg-amber-400 animate-ping"></span>
          <span>📢 クローズドβテスター募集中（参加歓迎・連絡不要）</span>
        </div>
        <p class="text-xs text-slate-200 leading-relaxed mb-3">
          現在、Google Playでの正式リリースに向けてクローズドβテストを実施しています。高校生・受験生はもちろん、資格試験や大人の学び直し、開発者の相互テストも大歓迎です！
        </p>
        <div class="space-y-2 bg-slate-950/80 p-3 rounded-lg border border-slate-800 text-xs">
          <div class="flex items-start gap-2">
            <span class="w-5 h-5 rounded-full bg-amber-500/20 text-amber-400 font-bold flex items-center justify-center flex-shrink-0 text-[11px]">1</span>
            <span class="text-slate-300"><strong>テスター用Googleグループに参加</strong><br><a href="https://groups.google.com/u/3/g/study-app-tester" target="_blank" rel="noopener noreferrer" class="text-sky-400 underline hover:text-sky-300">https://groups.google.com/u/3/g/study-app-tester</a></span>
          </div>
          <div class="flex items-start gap-2">
            <span class="w-5 h-5 rounded-full bg-amber-500/20 text-amber-400 font-bold flex items-center justify-center flex-shrink-0 text-[11px]">2</span>
            <span class="text-slate-300"><strong>Google Playからテスト版をインストール</strong><br><a href="https://play.google.com/store/apps/details?id=jp.obenkyorobo.exam_prep" target="_blank" rel="noopener noreferrer" class="text-sky-400 underline hover:text-sky-300">https://play.google.com/store/apps/details?id=jp.obenkyorobo.exam_prep</a><br><span class="text-[10px] text-slate-400">※グループ参加と同じGoogleアカウントで開いてください。</span></span>
          </div>
        </div>
      </div>

      <p class="mb-4">「キオクノタスケ」は、大学入学共通テストおよび高校学習に対応した新課程全18科目網羅の忘却曲線学習アプリです。解けば解くほど苦手分野が絞り込まれ、最短ルートで知識が定着します。</p>
      <h4 class="text-white font-semibold mb-2">🔥 主なハイライト</h4>
      <ul class="list-disc list-inside space-y-1.5 text-slate-300 mb-4">
        <li><strong>忘却曲線に基づく自動反復（SRS）:</strong> 間違えた問題や復習期日を迎えた問題を最適なタイミングで自動出題。</li>
        <li><strong>新課程全18科目完全対応:</strong> 数学（IA/IIBC）、理科4科目、地歴公民、国語、英語、情報Iまで網羅。</li>
        <li><strong>CustomPainter ベクター図表:</strong> 数学のグラフや理科の実験装置図を最大4倍ピンチズーム対応で美しく描画。</li>
        <li><strong>相棒（犬）の育成システム:</strong> 正解でご飯を獲得しLv.1〜30まで成長。思い出アルバムや実績バッジを収集。</li>
        <li><strong>学習ヒートマップ:</strong> GitHub風の学習ストリークで日々の継続を可視化。</li>
      </ul>
    `,
    tags: ["Google Play β版配信中", "Flutter", "Dart", "CustomPainter", "SRS Algorithm", "18科目対応"],
    githubUrl: "https://github.com/",
    demoUrl: "https://groups.google.com/u/3/g/study-app-tester",
    demoLabel: "βテストに参加する",
    metrics: [
      { label: "βテスト状況", value: "参加者 募集中！" },
      { label: "対応科目数", value: "新課程 全18科目" },
      { label: "復習アルゴリズム", value: "忘却曲線 (SRS)" }
    ],
    screenshots: [
      {
        title: "相棒（犬）の学習シーン",
        tag: "相棒育成",
        src: "assets/images/mugen_study.jpg",
        caption: "正解するごとに相棒が成長。Lv.5『集中勉強』シーンなど多彩なビジュアルが解放されます。"
      },
      {
        title: "思い出アルバム ＆ ごほうび",
        tag: "コレクション",
        src: "assets/images/mugen_preview.jpg",
        caption: "問題正解で獲得した骨付き肉をあげて深まる絆と思い出アルバム。"
      }
    ]
  },
  {
    id: "tagetomoai",
    title: "ボク友英単語",
    subtitle: "ターゲット1900＆1000対応・忘却曲線×四択×スペル特訓の英単語学習パートナー",
    category: "flutter",
    categoryLabel: "Flutter / Vocabulary",
    status: "開発中",
    featured: false,
    accentColor: "from-amber-500 to-orange-600",
    badgeColor: "bg-amber-500/15 text-amber-300 border-amber-500/30",
    icon: "assets/images/tagetomo_icon.png",
    previewImage: "assets/images/tagetomo_home.png",
    summary: "ターゲット1900・英熟語1000・獣医英単語・共テ単語を完全網羅。SRS忘却曲線カード、四択テスト、キーボード手打ちスペル特訓、AIコアイメージ解説で確固たる語彙力を養成する実戦アプリ。",
    description: `
      <p class="mb-4">「ボク友英単語」は、ターゲット1900や英熟語1000、獣医英単語など多彩な語彙を、認知科学に基づく3段階の特訓サイクル（カード ➜ 四択 ➜ スペル手打ち特訓）で完璧に定着させる本格派英単語学習アプリです。</p>
      
      <h4 class="text-white font-semibold mb-2">🔥 主な特訓モード ＆ 機能ハイライト</h4>
      <ul class="list-disc list-inside space-y-1.5 text-slate-300 mb-4">
        <li><strong>① 全ノルマ統合フラッシュカード（SRS）:</strong> Ankiライクな4段階判定（忘れた / 難しい / 覚えた / 簡単）とネイティブTTS音声で、忘却曲線に沿って効率的に反復。</li>
        <li><strong>② 四択テスト（多義語・使い分け注記付き）:</strong> 似た単語の使い分け（例: terrestrialの陸生 vs aquaticの水生など）を即座に見分ける実践力を鍛錬。</li>
        <li><strong>③ キーボード手打ちスペル特訓:</strong> 四択で定着した単語をキーボードで直接タイピング。1文字ヒント機能を備え、書ける語彙へ昇華。</li>
        <li><strong>✨ AIコアイメージ解説連携:</strong> 単語カードから直接Geminiのコアイメージ解説へアクセスし、多義語の根本感覚を攻略。</li>
        <li><strong>日々の定着ノルマ進捗 ＆ 連続学習（🔥）:</strong> 今日やるべき復習語数を自動計算し、継続学習を後押し。</li>
      </ul>
    `,
    tags: ["ターゲット1900", "英熟語1000", "獣医英単語", "SRS忘却曲線", "スペル特訓", "TTS音声", "AI解説"],
    githubUrl: "https://github.com/",
    demoUrl: "#",
    metrics: [
      { label: "学習サイクル", value: "カード ➜ 四択 ➜ スペル特訓" },
      { label: "収録語彙", value: "単語1900 / 熟語1000 / 獣医" },
      { label: "定着アルゴリズム", value: "SRS 忘却曲線" }
    ],
    screenshots: [
      {
        title: "ホーム画面 ＆ 本日の定着ノルマ進捗",
        tag: "メイン画面",
        src: "assets/images/tagetomo_home.png",
        caption: "まとめて特訓・ターゲット1900・英熟語1000が並び、定着率（85%）や本日のノルマ進捗を一目で把握。"
      },
      {
        title: "全ノルマ統合カード（SRS忘却曲線 ＆ AI解説）",
        tag: "フラッシュカード",
        src: "assets/images/tagetomo_card.png",
        caption: "使い分け注記・多義語に加え、『AIコアイメージ解説を見る』ボタンを完備。忘れた/難しい/覚えた/簡単で記憶を管理。"
      },
      {
        title: "四択テスト（多義語チェック ＆ 使い分け注記）",
        tag: "四択演習",
        src: "assets/images/tagetomo_quiz.png",
        caption: "発音記号、使い分け注記、対比される単語との多義語チェックを画面上で確認しながら実戦解答。"
      },
      {
        title: "キーボード手打ち スペル特訓（1文字ヒント付）",
        tag: "スペル特訓",
        src: "assets/images/tagetomo_spell.png",
        caption: "四択で定着後に解放される実戦的タイピング特訓。1文字ヒントや文字数表示で着実にスペルを習得。"
      },
      {
        title: "英熟語1000 スペル特訓画面",
        tag: "熟語特訓",
        src: "assets/images/tagetomo_idiom.png",
        caption: "『〜に従事している、忙しく〜をしている』など、入試頻出熟語を手打ちで徹底暗記。"
      }
    ]
  },
  {
    id: "geminitan",
    title: "ゲミニータン",
    subtitle: "3Dアバター × Gemini Live双方向対話・伴走型AI学習パートナー",
    category: "ai",
    categoryLabel: "AI & 3D Avatar / Gemini Live",
    status: "開発中",
    featured: false,
    accentColor: "from-sky-400 via-indigo-500 to-purple-600",
    badgeColor: "bg-indigo-500/15 text-indigo-300 border-indigo-500/30",
    icon: "assets/images/geminitan_icon.png",
    previewImage: "assets/images/geminitan_main.png",
    summary: "Gemini Live APIによる双方向音声対話、ポモドーロ集中タイマー、毎朝のモーニング・レディオを搭載。3Dアバター『ゲミニータン』と相棒ロボ『オビタ』が毎日の学習に寄り添うAIパートナー。",
    description: `
      <p class="mb-4">「ゲミニータン」は、Google Geminiの最先端音声・思考知能（Gemini Live）をフル活用した、3Dインタラクティブ・学習パートナーアプリです。机に向かうあなたを、可愛い3Dアバター「ゲミニータン」と浮遊型相棒ロボット「オビタ」が全力で応援＆サポートします。</p>
      
      <h4 class="text-white font-semibold mb-2">✨ 主な機能ハイライト</h4>
      <ul class="list-disc list-inside space-y-1.5 text-slate-300 mb-4">
        <li><strong>常時会話（Live）モード:</strong> Gemini Live APIを搭載し、超低遅延で自然な音声会話が可能。「呼んだ？ここにいるよ〜！」「耳をすまして聞いてるよ」とリアルタイムに受け答え。</li>
        <li><strong>メガネ姿のスタディモード（STUDY MODE）:</strong> 学習開始と同時にメガネを装着し「がんばって！」のボードを掲示。ポモドーロ集中タイマー（🍅）と連動してペース配分を管理。</li>
        <li><strong>ゲミニータン・モーニング・レディオ:</strong> 毎朝その日の記念日、学習応援メッセージ、最新ニュースをラジオDJ風に読み上げ配信。</li>
        <li><strong>相棒ロボ「オビタ」＆ ふれあいシステム:</strong> ショートケーキをあげると相棒オビタの目がハート💕になったり、喜んだりする温かいコミュニケーション。</li>
      </ul>
    `,
    tags: ["Gemini Live API", "3D Avatar", "Voice Interaction", "Pomodoro Timer", "AI Companion"],
    githubUrl: "https://github.com/",
    demoUrl: "#",
    metrics: [
      { label: "AI対話エンジン", value: "Gemini Live API" },
      { label: "相棒キャラクター", value: "ゲミニータン ＆ オビタ" },
      { label: "学習機能", value: "スタディモード ＆ ラジオ" }
    ],
    screenshots: [
      {
        title: "常時会話（Live）モード ＆ リアルタイム対話",
        tag: "メイン画面",
        src: "assets/images/geminitan_main.png",
        caption: "Gemini Live APIによる双方向音声対話。マイクツールバー完備で思考中のキラキラ演出。"
      },
      {
        title: "スタディモード（メガネ ＆ STUDY MODEボード）",
        tag: "学習集中",
        src: "assets/images/geminitan_study.png",
        caption: "ポモドーロ集中タイマー連動。メガネをかけたゲミニータンが『がんばって！』と応援。"
      },
      {
        title: "ゲミニータン・モーニング・レディオ",
        tag: "ラジオ配信",
        src: "assets/images/geminitan_radio.png",
        caption: "毎朝の記念日、応援メッセージ、最新ニュースを読み上げて一日のやる気をチャージ。"
      },
      {
        title: "ごほうび・ふれあい（ショートケーキ 🍰）",
        tag: "コミュニケーション",
        src: "assets/images/geminitan_cake.png",
        caption: "ショートケーキをあげると、相棒ドローン『オビタ』の目がハート（💕）になって大喜び！"
      },
      {
        title: "相棒ロボ『オビタ』の応援",
        tag: "相棒オビタ",
        src: "assets/images/geminitan_obita.png",
        caption: "『ピピッ！その調子でいこう！』浮遊するAIロボ・オビタが勉強を見守ります。"
      },
      {
        title: "ポモドーロ集中タイマー連動",
        tag: "タイマー機能",
        src: "assets/images/geminitan_timer.png",
        caption: "上部にトマトアイコン（🍅）と残り時間をスマート表示。集中と休憩のサイクルを管理。"
      }
    ]
  }
];
