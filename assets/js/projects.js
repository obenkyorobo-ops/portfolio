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
    id: "tagetomoai",
    title: "ボク友英単語",
    subtitle: "個人学習用プロトタイプ・FSRS忘却曲線×四択×スペル手打ち特訓",
    category: "flutter",
    categoryLabel: "FSRS / 語彙定着サイクル",
    status: "個人利用・研究用",
    featured: false,
    accentColor: "from-amber-500 to-orange-600",
    badgeColor: "bg-slate-800 text-slate-400 border-slate-700",
    icon: "assets/images/tagetomo_icon.png",
    previewImage: "assets/images/tagetomo_home.png",
    summary: "開発者自身の学習効率化およびFSRS反復アルゴリズムの動作検証用に制作したプライベート英単語アプリ。カード、四択、キーボード手打ちスペル特訓の3段階サイクルを実装（※個人利用のため一般配布予定なし）。",
    description: `
      <div class="p-3.5 rounded-xl bg-slate-900/90 border border-amber-500/30 text-xs text-slate-300 mb-5 leading-relaxed">
        <div class="flex items-center gap-1.5 text-amber-400 font-bold mb-1">
          <svg class="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/></svg>
          <span>開発上の位置づけ（個人利用・研究用プロトタイプ）</span>
        </div>
        <p class="text-slate-300">
          本アプリは、開発者自身の学習効率化およびFSRS記憶定着アルゴリズムの動作検証を目的として制作した<strong>非公開のプライベートツール</strong>です。市販の書籍や既存サービスとの提携・公認関係はありません。一般配布の予定はなく、将来一般向けプロダクトとして展開する場合は、独自の単語選定・データ構成およびオリジナル名称へ完全に刷新してリリース予定です。
        </p>
      </div>

      <p class="mb-4">「ボク友英単語」は、認知科学に基づく3段階の特訓サイクル（カード ➜ 四択 ➜ スペル手打ち特訓）により、最小の反復回数で単語を定着させるアルゴリズム検証用アプリです。</p>
      
      <h4 class="text-white font-semibold mb-2">🔥 3段階の記憶定着サイクル</h4>
      <ul class="list-disc list-inside space-y-1.5 text-slate-300 mb-4">
        <li><strong>① 全ノルマ統合フラッシュカード（FSRS / SRS）:</strong> 4段階判定（忘れた / 難しい / 覚えた / 簡単）とネイティブTTS音声で、忘却曲線に沿って効率的に反復。</li>
        <li><strong>② 四択テスト（多義語・使い分け注記付き）:</strong> 似た単語の使い分け（例: terrestrialの陸生 vs aquaticの水生など）を即座に見分ける実践力を鍛錬。</li>
        <li><strong>③ キーボード手打ちスペル特訓:</strong> 四択で定着した単語をキーボードで直接タイピング。1文字ヒント機能を備え、書ける語彙へ昇華。</li>
        <li><strong>日々の定着ノルマ進捗 ＆ 連続学習（🔥）:</strong> 今日やるべき復習語数をFSRSモデルが自動計算し、毎日の継続学習を強力に後押し。</li>
      </ul>
    `,
    tags: ["FSRS 忘却曲線", "個人用プロトタイプ", "3段階特訓", "スペル手打ち", "TTS音声", "非公開ツール"],
    githubUrl: "https://github.com/obenkyorobo-ops/portfolio",
    demoUrl: "#",
    metrics: [
      { label: "公開区分", value: "個人利用 (非公開)" },
      { label: "反復アルゴリズム", value: "FSRS / SRS数理モデル" },
      { label: "学習サイクル", value: "カード ➜ 四択 ➜ スペル特訓" }
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
