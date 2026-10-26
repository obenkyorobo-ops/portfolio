/**
 * Antigravity Projects Data
 * 認知科学・FSRS / SRS 忘却曲線アルゴリズム特化
 * キオクノタスケ（実機スクリーンショット全9枚・FSRS完全対応）
 */
const projectsData = [
  {
    id: "mugen",
    title: "キオクノタスケ",
    subtitle: "新課程全18科目対応・FSRS記憶定着アルゴリズム暗記＆演習アプリ",
    category: "flutter",
    categoryLabel: "FSRS / 忘却曲線演習",
    status: "クローズドβ募集中",
    statusType: "beta",
    featured: true,
    accentColor: "from-blue-600 via-sky-500 to-indigo-600",
    badgeColor: "bg-amber-500/15 text-amber-300 border-amber-500/30",
    icon: "assets/images/mugen_icon.png",
    previewImage: "assets/images/mugen_quiz.png",
    summary: "大学入学共通テスト新課程全18科目・3,800問以上を収録。最新のFSRS（Free Spaced Repetition Scheduler）理論とアクティブリコールに基づき、最小の復習回数で長期記憶化する科学的学習アプリ。現在Google Playクローズドβテスター募集中！",
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

      <p class="mb-4">「キオクノタスケ」は、最新のFSRS（Free Spaced Repetition Scheduler）数理モデルと認知心理学（アクティブリコール）を融合した新世代の大学入試・共通テスト対策アプリです。解けば解くほど苦手分野がピンポイントで絞り込まれ、最短・最小の復習回数で知識が脳に定着します。</p>
      
      <h4 class="text-white font-semibold mb-2">🔥 科学的アルゴリズム ＆ 主なハイライト</h4>
      <ul class="list-disc list-inside space-y-1.5 text-slate-300 mb-4">
        <li><strong>FSRS連動 記憶定着ノルマ自動逆算:</strong> 目標試験日や学習計画から、忘却曲線に基づき「今日やるべき復習問題数」を日単位で自動計算。</li>
        <li><strong>アクティブリコール特訓:</strong> 選択肢を隠し、自力で頭の中に答えを思い浮かべてから選択肢を開くことで、試験本番で即使える強固な想起力を鍛成。</li>
        <li><strong>誤答の質を分析する2段階トリアージ:</strong> 不正解時に「ケアレスミス（知っていた）」と「知らなかった」を選別し、アルゴリズムが次回出題間隔を精密に調整。</li>
        <li><strong>多層的な思考ステップ解説:</strong> 単なる答え合わせにとどまらず、原理導出・着眼点アプローチ・具体例・LaTeX数式組版を網羅。</li>
        <li><strong>新課程全18科目・3,851問収録:</strong> 数学、理科4科目、地歴公民、国語、英語、情報Iまで全単元を単元別に絞り込み可能。</li>
        <li><strong>相棒（お勉強ロボ ＆ 子犬）の成長システム:</strong> 正解でご飯を獲得しLv.1〜30まで成長。思い出アルバムや実績トロフィーを解放。</li>
      </ul>
    `,
    tags: ["FSRS数理モデル", "アクティブリコール", "全18科目・3851問", "CustomPainter", "誤答トリアージ", "Google Play β配信中"],
    githubUrl: "https://github.com/obenkyorobo-ops/portfolio",
    demoUrl: "https://groups.google.com/u/3/g/study-app-tester",
    demoLabel: "βテストに参加する",
    metrics: [
      { label: "復習スケジューラ", value: "FSRS 連動逆算" },
      { label: "収録問題数", value: "全3,851問 (18科目)" },
      { label: "想起トレーニング", value: "アクティブリコール" }
    ],
    screenshots: [
      {
        title: "反復演習画面（新課程・共通テスト形式）",
        tag: "メイン演習",
        src: "assets/images/mugen_quiz.png",
        caption: "通常反復と実戦チャレンジの切替、科目ピン留め、ヒント表示、目安時間タイマーを完備。"
      },
      {
        title: "アクティブリコール特訓（選択肢マスク想起）",
        tag: "認知科学",
        src: "assets/images/mugen_recall.png",
        caption: "選択肢を隠し、頭の中で答えを思い出してから開く『アクティブリコール』で真の実戦力を養成。"
      },
      {
        title: "誤答トリアージ（ケアレスミス vs 知らなかった）",
        tag: "FSRS学習",
        src: "assets/images/mugen_explain.png",
        caption: "間違いの質を分類。ケアレスミスか根本的知識不足かを判定し、次回の出題タイミングを最適化。"
      },
      {
        title: "多層解説（原理導出 ＆ 思考ステップ）",
        tag: "詳細解説",
        src: "assets/images/mugen_detail.png",
        caption: "解法の着眼点・公式の原理導出・具体例までをLaTeX数式で美しく解説。思考プロセスが身につく。"
      },
      {
        title: "FSRS連動 記憶定着ノルマ自動逆算",
        tag: "FSRS設定",
        src: "assets/images/mugen_fsrs_settings.png",
        caption: "全問習得目標プランと連動。忘却曲線と残日数から毎日の定着ノルマを自動逆算する本格設計。"
      },
      {
        title: "復習・辞典ライブラリ（全3,851問横断検索）",
        tag: "要復習特訓",
        src: "assets/images/mugen_library.png",
        caption: "全科目・3851問を横断検索。復習期日を迎えた問題やミス履歴のある問題をワンタップで一掃。"
      },
      {
        title: "科目別進捗 ＆ 週間学習マップ",
        tag: "進捗アナリティクス",
        src: "assets/images/mugen_progress.png",
        caption: "習得プラン（残り日数・定着率）、週間学習マップ、全18科目の達成度を直感的に可視化。"
      },
      {
        title: "相棒の部屋（お勉強ロボ ＆ 子犬の成長）",
        tag: "相棒・アルバム",
        src: "assets/images/mugen_pet.png",
        caption: "お勉強ロボと子犬が野原で出会う心温まる相棒システム。ごはんをあげてLv.1〜30まで成長。"
      },
      {
        title: "単元別出題絞り込み（定期テスト対策）",
        tag: "単元カスタマイズ",
        src: "assets/images/mugen_unit_filter.png",
        caption: "学校の授業進度や定期テストの出題範囲に合わせて、単元ごとにON/OFFを自由に設定可能。"
      }
    ]
  },
  {
    id: "install_vocab",
    title: "インストール英単語",
    subtitle: "脳科学×FSRS忘却曲線・目標日数からノルマ自動逆算＆3段階特訓アプリ",
    category: "flutter",
    categoryLabel: "FSRS / 語彙定着サイクル",
    status: "開発・テスト運用中",
    statusType: "active",
    featured: false,
    accentColor: "from-amber-500 via-orange-500 to-teal-600",
    badgeColor: "bg-teal-500/15 text-teal-300 border-teal-500/30",
    icon: "assets/images/install_icon.png",
    previewImage: "assets/images/install_home.png",
    summary: "目標完成日数（30〜120日）から忘却曲線（FSRS）に基づいて毎日の学習・復習ノルマを自動逆算。カード（FSRS 4段階判定・AIコアイメージ解説）➜ 四択（多義語・同義語）➜ キーボード手打ちスペル特訓の3層サイクルで、大学受験・中学・医獣専門英語を脳へ確実に定着させる英単語学習アプリ。",
    description: `
      <div class="p-3.5 rounded-xl bg-slate-900/90 border border-teal-500/30 text-xs text-slate-300 mb-5 leading-relaxed">
        <div class="flex items-center gap-1.5 text-teal-400 font-bold mb-1">
          <svg class="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
          <span>脳科学とFSRSアルゴリズムによる語彙インストールシステム</span>
        </div>
        <p class="text-slate-300">
          「インストール英単語」は、最新のFSRS（Free Spaced Repetition Scheduler）記憶定着モデルと認知心理学に基づき、最小の反復回数で確固たる英単語力を脳に「インストール」するために設計された語彙演習アプリです。目標日数（30〜120日・直接指定）から日々のノルマを自動逆算し、カード・四択・手打ちスペル特訓の3段階で確実に定着させます。
        </p>
      </div>

      <p class="mb-4">「知っているけれど本番で出てこない」「多義語の使い分けが曖昧」「スペルが書けない」という語彙学習の3大課題を、3段階の特訓サイクルと高度な出題モードで徹底的に解決します。</p>
      
      <h4 class="text-white font-semibold mb-2">🔥 主な機能 ＆ 科学的アルゴリズム</h4>
      <ul class="list-disc list-inside space-y-1.5 text-slate-300 mb-4">
        <li><strong>FSRS連動 目標期日からの定着ノルマ自動逆算:</strong> 30日/45日/60日/90日/120日（または直接指定）の学習計画と連動。忘却曲線モデルが残日数と未学習数から「1日の新規目安（例: 約36語/日）」と「本日の定着ノルマ（例: 390問）」を精密に自動算出。</li>
        <li><strong>① まとめて特訓 カード（FSRS 4段階判定 ＆ AIコアイメージ解説）:</strong> 「忘れた / 難しい / 覚えた / 簡単」の4段階判定とネイティブ音声再生を完備。主要意味と他の意味を分類表示し、「✨ AIコアイメージ解説」ボタンで単語の本質的なニュアンスや成り立ちを深く理解。</li>
        <li><strong>② 四択テスト（多義語識別 ＆ 同義語4択モード）:</strong> 似た単語の使い分けを瞬時に見分ける即応力を養成。「和訳分割トレーニング（多義語・複数和訳を個別出題）」や「同義語4択モード（英英形式）」への切り替えも可能。</li>
        <li><strong>③ 全ノルマ統合 キーボード手打ちスペル特訓:</strong> 下線プレースホルダー、文字数表示、1文字ヒント、答え表示、ネイティブ音声読み上げを搭載。実際に手でタイピングすることで、「読める」から「書ける・使える」語彙へ昇華。</li>
        <li><strong>柔軟な出題モード（英和 / 和英 / 混在 推奨）:</strong> インプット・アウトプット・実践的な混在モードを学習フェーズに合わせて自在に切り替え。</li>
        <li><strong>中学〜大学受験〜医学・獣医学専門英語まで網羅:</strong> 大学受験英単語（2,119語）、大学受験英熟語（1,003熟語）、中学英単語（553語）、中学英熟語（90熟語）、医学・獣医学専門英語（221語）など、目的に応じて出題対象を柔軟に選択可能。</li>
        <li><strong>端末内二重自動バックアップ機能:</strong> 学習データを端末内に二重自動バックアップし、アプリアップデート後も安全に学習履歴を引き継ぎ可能。</li>
      </ul>
    `,
    tags: ["FSRS数理モデル", "目標日数逆算", "AIコアイメージ", "スペル手打ちタイピング", "3段階特訓サイクル", "医獣専門英語対応"],
    githubUrl: "https://github.com/obenkyorobo-ops/portfolio",
    demoUrl: "#",
    metrics: [
      { label: "復習スケジューラ", value: "FSRS 自動ノルマ逆算" },
      { label: "収録語彙・熟語", value: "全3,980語以上 (5体系)" },
      { label: "学習サイクル", value: "カード ➜ 四択 ➜ スペル特訓" }
    ],
    screenshots: [
      {
        title: "ホーム画面（定着ノルマ ＆ 特訓ダッシュボード）",
        tag: "ダッシュボード",
        src: "assets/images/install_home.png",
        caption: "目標完成日数（残り50日）、本日の定着ノルマ（2/390問）、連続学習ストリーク（🔥）、出題モード切替（英和/和英/混在）と3大特訓を直感的に集約。"
      },
      {
        title: "まとめて特訓 カード（FSRS 4段階 ＆ AIコアイメージ）",
        tag: "フラッシュカード",
        src: "assets/images/install_card.png",
        caption: "「忘れた/難しい/覚えた/簡単」のFSRS判定、主要意味・多義語の整理、ネイティブ音声、AIコアイメージ解説ボタンを完備。"
      },
      {
        title: "四択テスト（多義語・専門用語の即応力養成）",
        tag: "四択演習",
        src: "assets/images/install_quiz.png",
        caption: "医学・獣医学専門英語などの高度な語彙も収録。紛らわしい類似選択肢の中から瞬時に正解を見抜く実践的識別力を鍛錬。"
      },
      {
        title: "全ノルマ統合 スペル特訓（キーボード手打ちタイピング）",
        tag: "スペル特訓",
        src: "assets/images/install_spell.png",
        caption: "文字数表示と1文字ヒントを備えた本格的な手打ち入力。アウトプットを通じて「本当に書ける語彙」へと定着。"
      },
      {
        title: "出題対象選択（中学・大学受験・医獣専門英語）",
        tag: "語彙ライブラリ",
        src: "assets/images/install_target.png",
        caption: "大学受験英単語(2119語)・英熟語(1003熟語)、中学単語・熟語、医学・獣医学専門英語まで、出題対象を柔軟にスイッチ切替。"
      },
      {
        title: "学習目標設定 ＆ 端末内二重自動バックアップ",
        tag: "目標・データ保護",
        src: "assets/images/install_settings.png",
        caption: "完成目標日数（30〜120日/直接指定）から1日の新規語数を自動逆算。端末内二重自動バックアップで学習履歴を確実に保護。"
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
