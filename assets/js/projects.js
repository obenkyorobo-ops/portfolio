/**
 * Antigravity Projects Data
 * 認知科学・FSRS / SRS 忘却曲線アルゴリズム特化
 */
const projectsData = [
  {
    id: "mugen",
    title: "キオクノタスケ",
    subtitle: "新課程全18科目対応・FSRS / 忘却曲線暗記＆演習アプリ",
    category: "flutter",
    categoryLabel: "FSRS / 忘却曲線演習",
    status: "クローズドβ募集中",
    statusType: "beta",
    featured: true,
    accentColor: "from-blue-600 via-sky-500 to-indigo-600",
    badgeColor: "bg-amber-500/15 text-amber-300 border-amber-500/30",
    icon: "assets/images/mugen_icon.png",
    previewImage: "assets/images/mugen_study.jpg",
    summary: "大学入学共通テスト新課程全18科目対応。最新のFSRS（Free Spaced Repetition Scheduler）理論とエビングハウスの忘却曲線に基づき、最小の復習回数で知識を長期記憶化する科学的学習アプリ。現在Google Playクローズドβテスター募集中！",
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

      <p class="mb-4">「キオクノタスケ」は、最新のFSRS（Free Spaced Repetition Scheduler）理論とエビングハウスの忘却曲線に基づき、人間の記憶の減衰速度を数学的にモデリングした新世代の共通テスト演習アプリです。解けば解くほど苦手分野が絞り込まれ、最短・最小の復習回数で知識が定着します。</p>
      
      <h4 class="text-white font-semibold mb-2">🔥 科学的アルゴリズム ＆ 主なハイライト</h4>
      <ul class="list-disc list-inside space-y-1.5 text-slate-300 mb-4">
        <li><strong>FSRS / SRS 数理スケジューラ:</strong> 回答の正誤・所要時間から記憶定着度（Stability）を算出し、忘れかける直前の最適タイミングで自動再出題。</li>
        <li><strong>新課程全18科目完全対応:</strong> 数学（IA/IIBC）、理科4科目、地歴公民、国語、英語、情報Iまで網羅。</li>
        <li><strong>CustomPainter ベクター図表:</strong> 数学のグラフや理科の実験装置図を最大4倍ピンチズーム対応で美しく描画。視覚情報の長期記憶化を支援。</li>
        <li><strong>相棒（犬）の育成システム:</strong> 正解でご飯を獲得しLv.1〜30まで成長。思い出アルバムや実績バッジを収集。</li>
        <li><strong>学習ヒートマップ:</strong> GitHub風の学習ストリークで日々の継続を可視化。</li>
      </ul>
    `,
    tags: ["FSRS アルゴリズム", "忘却曲線 (SRS)", "Google Play β配信中", "Flutter", "CustomPainter", "全18科目対応"],
    githubUrl: "https://github.com/obenkyorobo-ops/portfolio",
    demoUrl: "https://groups.google.com/u/3/g/study-app-tester",
    demoLabel: "βテストに参加する",
    metrics: [
      { label: "記憶定着モデル", value: "FSRS / 忘却曲線" },
      { label: "対応科目数", value: "新課程 全18科目" },
      { label: "ベクター描画", value: "最大4倍ズーム" }
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
    subtitle: "ターゲット1900＆1000対応・FSRS忘却曲線×四択×スペル特訓の英単語パートナー",
    category: "flutter",
    categoryLabel: "FSRS / 語彙定着サイクル",
    status: "開発中",
    featured: false,
    accentColor: "from-amber-500 to-orange-600",
    badgeColor: "bg-amber-500/15 text-amber-300 border-amber-500/30",
    icon: "assets/images/tagetomo_icon.png",
    previewImage: "assets/images/tagetomo_home.png",
    summary: "ターゲット1900・英熟語1000・獣医英単語・共テ単語を網羅。FSRS数理モデルに基づく忘却曲線カード、四択テスト、キーボード手打ちスペル特訓の3段階特訓サイクルで強固な語彙力を養成。",
    description: `
      <p class="mb-4">「ボク友英単語」は、ターゲット1900や英熟語1000、獣医英単語など多彩な語彙を、認知科学に基づく3段階の特訓サイクル（カード ➜ 四択 ➜ スペル手打ち特訓）で確実に定着させる本格派英単語学習アプリです。</p>
      
      <h4 class="text-white font-semibold mb-2">🔥 3段階の記憶定着サイクル</h4>
      <ul class="list-disc list-inside space-y-1.5 text-slate-300 mb-4">
        <li><strong>① 全ノルマ統合フラッシュカード（FSRS / SRS）:</strong> Ankiライクな4段階判定（忘れた / 難しい / 覚えた / 簡単）とネイティブTTS音声で、忘却曲線に沿って効率的に反復。</li>
        <li><strong>② 四択テスト（多義語・使い分け注記付き）:</strong> 似た単語の使い分け（例: terrestrialの陸生 vs aquaticの水生など）を即座に見分ける実践力を鍛錬。</li>
        <li><strong>③ キーボード手打ちスペル特訓:</strong> 四択で定着した単語をキーボードで直接タイピング。1文字ヒント機能を備え、書ける語彙へ昇華。</li>
        <li><strong>日々の定着ノルマ進捗 ＆ 連続学習（🔥）:</strong> 今日やるべき復習語数をFSRSモデルが自動計算し、毎日の継続学習を強力に後押し。</li>
      </ul>
    `,
    tags: ["FSRS 忘却曲線", "ターゲット1900", "英熟語1000", "3段階特訓", "スペル手打ち", "TTS音声"],
    githubUrl: "https://github.com/obenkyorobo-ops/portfolio",
    demoUrl: "#",
    metrics: [
      { label: "学習サイクル", value: "カード ➜ 四択 ➜ スペル特訓" },
      { label: "反復アルゴリズム", value: "FSRS / SRS数理モデル" },
      { label: "収録語彙", value: "単語1900 / 熟語1000 / 獣医" }
    ],
    screenshots: [
      {
        title: "ホーム画面 ＆ 本日の定着ノルマ進捗",
        tag: "メイン画面",
        src: "assets/images/tagetomo_home.png",
        caption: "まとめて特訓・ターゲット1900・英熟語1000が並び、定着率（85%）や本日のノルマ進捗を一目で把握。"
      },
      {
        title: "全ノルマ統合カード（SRS忘却曲線）",
        tag: "フラッシュカード",
        src: "assets/images/tagetomo_card.png",
        caption: "使い分け注記・多義語に加え、忘れた/難しい/覚えた/簡単の4段階判定で記憶の減衰を精密管理。"
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
    subtitle: "3Dアバター × ポモドーロ集中タイマー・学習習慣化パートナー",
    category: "ai",
    categoryLabel: "3D Partner / 習慣化タイマー",
    status: "開発中",
    featured: false,
    accentColor: "from-sky-400 via-indigo-500 to-purple-600",
    badgeColor: "bg-indigo-500/15 text-indigo-300 border-indigo-500/30",
    icon: "assets/images/geminitan_icon.png",
    previewImage: "assets/images/geminitan_main.png",
    summary: "ポモドーロ集中タイマー（🍅）連動のスタディモード、毎朝のモーニング・レディオを搭載。3Dアバター『ゲミニータン』と相棒ロボ『オビタ』が毎日の学習リズムと継続を支える伴走型パートナー。",
    description: `
      <p class="mb-4">「ゲミニータン」は、毎日の学習リズムとモチベーションを科学的に持続させるための3Dインタラクティブ・学習パートナーアプリです。机に向かうあなたを、可愛い3Dアバター「ゲミニータン」と浮遊型相棒ロボット「オビタ」が全力で応援＆サポートします。</p>
      
      <h4 class="text-white font-semibold mb-2">✨ 主な機能ハイライト</h4>
      <ul class="list-disc list-inside space-y-1.5 text-slate-300 mb-4">
        <li><strong>メガネ姿のスタディモード（STUDY MODE）:</strong> 学習開始と同時にメガネを装着し「がんばって！」のボードを掲示。ポモドーロ集中タイマー（🍅）と連動して25分集中＋5分休憩のサイクルを徹底管理。</li>
        <li><strong>ゲミニータン・モーニング・レディオ:</strong> 毎朝その日の記念日、学習応援メッセージ、最新ニュースを読み上げ配信し、一日を前向きにスタート。</li>
        <li><strong>相棒ロボ「オビタ」の応援＆ふれあい:</strong> 「ピピッ！その調子でいこう！」と勉強を見守り、ショートケーキをあげると目がハート💕になる楽しいふれあい機能。</li>
        <li><strong>常時会話モード:</strong> リアルタイム対話に対応し、「呼んだ？ここにいるよ〜！」「耳をすまして聞いてるよ」と勉強の合間に癒しを提供。</li>
      </ul>
    `,
    tags: ["3D Avatar", "ポモドーロタイマー", "モーニング・レディオ", "学習習慣化", "Gemini Live"],
    githubUrl: "https://github.com/obenkyorobo-ops/portfolio",
    demoUrl: "#",
    metrics: [
      { label: "習慣化システム", value: "ポモドーロ 25分集中" },
      { label: "相棒キャラクター", value: "ゲミニータン ＆ オビタ" },
      { label: "継続サポート", value: "スタディモード ＆ ラジオ" }
    ],
    screenshots: [
      {
        title: "常時会話モード ＆ リアルタイム対話",
        tag: "メイン画面",
        src: "assets/images/geminitan_main.png",
        caption: "マイクツールバー完備で思考中のキラキラ演出。勉強の合間の受け答え。"
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
