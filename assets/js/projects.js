/**
 * Antigravity Projects Data
 * 認知科学・FSRS / SRS 忘却曲線アルゴリズム特化
 * キオクノタスケ（実機スクリーンショット全9枚・FSRS完全対応）
 */
const projectsData = [
  {
    id: "cloppy",
    title: "Cloppy",
    subtitle: "「元フォルダーに別名保存」— ドラッグ＆ドロップで一瞬クロップ・リサイズ、複数枚の一括処理に対応したスマート画像加工ツール",
    category: "utility",
    categoryLabel: "Windows ＆ Android / 画像加工ツール",
    status: "Win公開中 ＆ Android βテスト中",
    statusType: "release",
    featured: true,
    accentColor: "from-amber-600 via-orange-500 to-amber-700",
    badgeColor: "bg-amber-50 text-amber-900 border-amber-200 dark:bg-amber-950/60 dark:text-amber-300 dark:border-amber-800",
    icon: "assets/images/cloppy_icon.png",
    previewImage: "assets/images/cloppy_main.png",
    installerUrl: "assets/downloads/Cloppy_Installer.zip",
    rawExeUrl: "assets/downloads/Cloppy_Setup.exe",
    portableUrl: "assets/downloads/Cloppy_Portable.zip",
    betaInfo: {
      isRecruiting: true,
      badgeText: "📱 Android版 Google Play クローズドβテスト実施中",
      groupUrl: "https://groups.google.com/u/3/g/study-app-tester",
      testingUrl: "https://play.google.com/apps/testing/jp.obenkyorobo.cloppy",
      playStoreUrl: "https://play.google.com/store/apps/details?id=jp.obenkyorobo.cloppy",
    },
    summary: "撮影した写真や拾った画像を最も手軽に切り抜き＆リサイズ。面倒な保存先選びは不要、元画像と同じフォルダーへ自動連番で別名保存。保存完了ダイアログからワンクリックでフォルダーを開くエクスプローラー連携機能も搭載。",
    description: `
      <div class="p-4 rounded-xl bg-gradient-to-r from-amber-50 via-white to-orange-50 dark:from-amber-950/40 dark:via-slate-900 dark:to-orange-950/40 border border-amber-300 dark:border-amber-700/60 mb-6 text-slate-800 dark:text-slate-200">
        <div class="flex items-center justify-between flex-wrap gap-2 mb-2">
          <div class="flex items-center gap-2 text-amber-700 dark:text-amber-400 font-bold text-sm">
            <span class="w-2.5 h-2.5 rounded-full bg-amber-500 animate-ping"></span>
            <span>✂️ Windows 公開中 ＆ Android Play βテスト中（完全無料）</span>
          </div>
          <span class="text-[11px] px-2.5 py-0.5 rounded-full bg-amber-100 dark:bg-amber-900/60 text-amber-800 dark:text-amber-300 border border-amber-300 dark:border-amber-700 font-mono">v1.0.0 Official Release</span>
        </div>
        <p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-3">
          「スクショや写真をサクッと切り抜きたいだけなのに、保存先を毎回聞かれて面倒」「誤って元画像を上書きしてしまった」「カメラで撮った元画像がどこに行ったかわからない」——そんな日々の写真編集の小さなストレスをすべて解消するために生まれた、<strong>超軽量スマート画像切り抜き・リサイズツール</strong>です。
        </p>
        <div class="p-2.5 rounded-lg bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-700/50 text-[11px] text-slate-700 dark:text-slate-300 mb-3">
          💡 <strong>WindowsでSmartScreen（青い保護画面）を回避する方法：</strong><br>
          下の<strong>「推奨インストーラーパック (.zip)」</strong>を解凍し、中の <code>1_インストール開始 (SmartScreen回避).bat</code> を実行すると保護画面なしでそのまま起動します（単体 <code>.exe</code> を直接開いた場合は<strong>［詳細情報］➜［実行］</strong>をクリックしてください）。
        </div>
        <div class="flex flex-wrap gap-2.5">
          <a href="assets/downloads/Cloppy_Installer.zip" download class="px-4 py-2.5 rounded-xl bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white font-extrabold text-xs flex items-center gap-2 shadow-md shadow-amber-600/20 transition transform hover:scale-105">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/></svg>
            <span>推奨インストーラーパック (.zip)</span>
          </a>
          <a href="assets/downloads/Cloppy_Setup.exe" download class="px-3.5 py-2.5 rounded-xl bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-amber-700 dark:text-amber-400 font-semibold text-xs border border-slate-300 dark:border-slate-700 flex items-center gap-1.5 transition shadow-sm">
            <span>単体インストーラー (.exe)</span>
          </a>
          <a href="assets/downloads/Cloppy_Portable.zip" download class="px-3.5 py-2.5 rounded-xl bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 font-semibold text-xs border border-slate-300 dark:border-slate-700 flex items-center gap-1.5 transition shadow-sm">
            <span>ポータブル版 (.zip)</span>
          </a>
          <a href="assets/downloads/Cloppy_Android.apk" download class="px-3.5 py-2.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-semibold text-xs flex items-center gap-1.5 transition shadow-sm">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"/></svg>
            <span>Android APK (.apk)</span>
          </a>
        </div>
        <div class="mt-3 pt-3 border-t border-amber-200/70 dark:border-amber-800/50">
          <div class="flex items-center justify-between flex-wrap gap-2 mb-2">
            <span class="text-xs font-bold text-emerald-700 dark:text-emerald-400 flex items-center gap-1.5">
              <span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              📱 Android版 Google Play クローズドβテスト実施中
            </span>
            <span class="text-[10px] font-mono text-slate-500 dark:text-slate-400">jp.obenkyorobo.cloppy</span>
          </div>
          <div class="flex flex-wrap gap-2">
            <a href="https://groups.google.com/u/3/g/study-app-tester" target="_blank" rel="noopener noreferrer" class="px-3 py-1.5 rounded-lg bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 text-[11px] font-semibold border border-slate-300 dark:border-slate-700 transition">① Googleグループ参加</a>
            <a href="https://play.google.com/apps/testing/jp.obenkyorobo.cloppy" target="_blank" rel="noopener noreferrer" class="px-3 py-1.5 rounded-lg bg-amber-50 dark:bg-amber-950/60 hover:bg-amber-100 dark:hover:bg-amber-900/60 text-amber-800 dark:text-amber-300 text-[11px] font-semibold border border-amber-300 dark:border-amber-700 transition">② Webでテスター承認</a>
            <a href="https://play.google.com/store/apps/details?id=jp.obenkyorobo.cloppy" target="_blank" rel="noopener noreferrer" class="px-3 py-1.5 rounded-lg bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white text-[11px] font-bold shadow-sm transition">③ Google Playで見る ↗</a>
          </div>
        </div>
      </div>

      <h4 class="text-slate-900 dark:text-slate-100 font-bold mb-2">✂️ コンセプト：「迷わず元フォルダーに別名保存。作業を1秒も止めない。」</h4>
      <p class="mb-4 text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed">
        一般的な画像編集アプリは保存のたびにファイルダイアログが開き、フォルダーを選び直す必要があります。<strong>Cloppy（クロッピー）</strong>は「元画像と同じフォルダーへ自動連番で別名保存（例: <code>photo_cropped.jpg</code>）」を一貫して採用。上書きの心配なく、ワンタップで高速に編集作業を完結できます。
      </p>

      <h4 class="text-slate-900 dark:text-slate-100 font-bold mb-2">✨ 主な機能 ＆ 快適な編集体験</h4>
      <ul class="list-disc list-inside space-y-1.5 text-slate-600 dark:text-slate-300 mb-4 text-xs sm:text-sm">
        <li><strong>複数画像の一括処理（まとめクロップ＆リサイズ）:</strong> 複数の画像ファイルをまとめてD&Dまたは選択。同一のクロップ枠（相対比率または中央クロップ）やパーセント縮小を一括適用し、全画像をそれぞれの元フォルダーへ高速自動保存。</li>
        <li><strong>直感的なドラッグ＆ドロップ ＆ クリップボード貼り付け:</strong> 画像ファイルをドラッグ＆ドロップするか、Ctrl+Vで即座に読み込み（Androidでは共有メニューやカメラから直接起動可能）。</li>
        <li><strong>多彩なアスペクト比クロップ:</strong> 自由比率、1:1（正方形・SNSアイコン用）、16:9（動画サムネイル用）、4:3、3:2 など定番比率にワンタップで固定可能。</li>
        <li><strong>劣化なしの高品質リサイズ:</strong> 25%, 50%, 75%, 100%のプリセットボタン、またはピクセル直接入力で縦横比を維持しながらきれいに縮小・拡大。</li>
        <li><strong>元フォルダー自動連番保存 ＆ 一発フォルダー表示:</strong> 保存先を選ぶ手間なく元フォルダーに安全保存。保存完了ダイアログから「フォルダーを開く」ボタンでエクスプローラーやファイルアプリが即座に起動します。</li>
        <li><strong>カメラ撮影時の元画像安全退避:</strong> カメラで撮影した写真も一時キャッシュに放置せず、端末のピクチャフォルダーへ安全に実体保存してからクロップ画面へ引き渡します。</li>
      </ul>
    `,
    tags: ["Windows 10/11", "Android", "Google Play β配信中", "Flutter", "画像クロップ", "画像リサイズ", "元フォルダ別名保存", "無料インストーラー配布"],
    githubUrl: "https://github.com/obenkyorobo-ops/portfolio",
    demoUrl: "assets/downloads/Cloppy_Setup.exe",
    demoLabel: "インストーラー DL",
    metrics: [
      { label: "対応OS", value: "Windows 10 / 11 ＆ Android" },
      { label: "一括処理", value: "複数画像まとめクロップ＆リサイズ対応" },
      { label: "保存仕様", value: "元フォルダ自動連番別名保存" },
      { label: "フォルダー連携", value: "保存フォルダー一発オープン" }
    ],
    screenshots: [
      {
        title: "クロップ ＆ リサイズ 編集画面",
        tag: "メイン画面",
        src: "assets/images/cloppy_main.png",
        caption: "直感的な枠操作によるアスペクト比クロップとパーセント・ピクセルリサイズ。ドラッグ＆ドロップやクリップボード貼り付けにも対応。"
      },
      {
        title: "保存完了 ＆ フォルダー連携画面",
        tag: "完了ダイアログ",
        src: "assets/images/cloppy_sub.png",
        caption: "元フォルダーへの別名保存完了後、ワンクリックで保存フォルダーを開くエクスプローラー連携や画像プレビュー、共有に対応。"
      }
    ]
  },
  {
    id: "xcleanbot",
    title: "X Clean Bot",
    subtitle: "「公式アーカイブ活用 ＆ BAN防止ガード搭載」— X（旧Twitter）過去投稿一括削除・整理ツール",
    category: "utility",
    categoryLabel: "Windows ＆ Android / X整理ツール",
    status: "Win公開中 ＆ Android βテスト中",
    statusType: "release",
    featured: true,
    accentColor: "from-sky-600 via-cyan-500 to-blue-600",
    badgeColor: "bg-sky-50 text-sky-800 border-sky-200 dark:bg-sky-950/60 dark:text-sky-300 dark:border-sky-800",
    icon: "assets/images/xcleanbot_icon.png",
    previewImage: "assets/images/xcleanbot_main.png",
    installerUrl: "assets/downloads/XCleanBot_Installer.zip",
    rawExeUrl: "assets/downloads/XCleanBot_Setup.exe",
    portableUrl: "assets/downloads/XCleanBot_Portable.zip",
    betaInfo: {
      isRecruiting: true,
      badgeText: "📱 Android版 Google Play クローズドβテスト実施中",
      groupUrl: "https://groups.google.com/u/3/g/study-app-tester",
      testingUrl: "https://play.google.com/apps/testing/jp.obenkyorobo.xcleanbot",
      playStoreUrl: "https://play.google.com/store/apps/details?id=jp.obenkyorobo.xcleanbot",
    },
    summary: "X公式アーカイブ（ZIP）を活用して通信規制（Rate Limit）を受けずに全投稿を抽出。人間の操作を模したランダム遅延や定期休憩、1日安全上限など多重のBAN防止物理ガードレールを搭載した、安全第一の過去ポスト一括クリーンツール。",
    description: `
      <div class="p-4 rounded-xl bg-gradient-to-r from-sky-50 via-white to-cyan-50 dark:from-sky-950/40 dark:via-slate-900 dark:to-cyan-950/40 border border-sky-300 dark:border-sky-700/60 mb-6 text-slate-800 dark:text-slate-200">
        <div class="flex items-center justify-between flex-wrap gap-2 mb-2">
          <div class="flex items-center gap-2 text-sky-700 dark:text-sky-400 font-bold text-sm">
            <span class="w-2.5 h-2.5 rounded-full bg-sky-500 animate-ping"></span>
            <span>🛡️ Windows 公開中 ＆ Android Play βテスト中（完全無料）</span>
          </div>
          <span class="text-[11px] px-2.5 py-0.5 rounded-full bg-sky-100 dark:bg-sky-900/60 text-sky-800 dark:text-sky-300 border border-sky-300 dark:border-sky-700 font-mono">v1.0.0 Official Release</span>
        </div>
        <p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-3">
          「就活や転職、アカウント整理のために過去のポストを一括削除したいけれど、ツールを使ってアカウントが凍結（BAN）されるのが怖い」「APIの制限で数十件しか消せない」——そんな不安を徹底的に解消するために開発された、<strong>アカウント保護最優先の過去ログ整理ツール</strong>です。
        </p>
        <div class="p-2.5 rounded-lg bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-700/50 text-[11px] text-slate-700 dark:text-slate-300 mb-3">
          💡 <strong>SmartScreen（青い保護画面）を回避する方法：</strong><br>
          下の<strong>「推奨インストーラーパック (.zip)」</strong>を解凍し、中の <code>1_インストール開始 (SmartScreen回避).bat</code> を実行すると保護画面なしでそのまま起動します（単体 <code>.exe</code> を直接開いた場合は<strong>［詳細情報］➜［実行］</strong>をクリックしてください）。
        </div>
        <div class="flex flex-wrap gap-2.5">
          <a href="assets/downloads/XCleanBot_Installer.zip" download class="px-4 py-2.5 rounded-xl bg-gradient-to-r from-sky-600 to-cyan-600 hover:from-sky-700 hover:to-cyan-700 text-white font-extrabold text-xs flex items-center gap-2 shadow-md shadow-sky-600/20 transition transform hover:scale-105">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/></svg>
            <span>推奨インストーラーパック (.zip)</span>
          </a>
          <a href="assets/downloads/XCleanBot_Setup.exe" download class="px-3.5 py-2.5 rounded-xl bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-sky-700 dark:text-sky-400 font-semibold text-xs border border-slate-300 dark:border-slate-700 flex items-center gap-1.5 transition shadow-sm">
            <span>単体インストーラー (.exe)</span>
          </a>
          <a href="assets/downloads/XCleanBot_Portable.zip" download class="px-3.5 py-2.5 rounded-xl bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 font-semibold text-xs border border-slate-300 dark:border-slate-700 flex items-center gap-1.5 transition shadow-sm">
            <span>ポータブル版 (.zip)</span>
          </a>
        </div>
        <div class="mt-3 pt-3 border-t border-sky-200/70 dark:border-sky-800/50">
          <div class="flex items-center justify-between flex-wrap gap-2 mb-2">
            <span class="text-xs font-bold text-emerald-700 dark:text-emerald-400 flex items-center gap-1.5">
              <span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              📱 Android版 Google Play クローズドβテスト実施中
            </span>
            <span class="text-[10px] font-mono text-slate-500 dark:text-slate-400">jp.obenkyorobo.xcleanbot</span>
          </div>
          <div class="flex flex-wrap gap-2">
            <a href="https://groups.google.com/u/3/g/study-app-tester" target="_blank" rel="noopener noreferrer" class="px-3 py-1.5 rounded-lg bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 text-[11px] font-semibold border border-slate-300 dark:border-slate-700 transition">① Googleグループ参加</a>
            <a href="https://play.google.com/apps/testing/jp.obenkyorobo.xcleanbot" target="_blank" rel="noopener noreferrer" class="px-3 py-1.5 rounded-lg bg-sky-50 dark:bg-sky-950/60 hover:bg-sky-100 dark:hover:bg-sky-900/60 text-sky-800 dark:text-sky-300 text-[11px] font-semibold border border-sky-300 dark:border-sky-700 transition">② Webでテスター承認</a>
            <a href="https://play.google.com/store/apps/details?id=jp.obenkyorobo.xcleanbot" target="_blank" rel="noopener noreferrer" class="px-3 py-1.5 rounded-lg bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white text-[11px] font-bold shadow-sm transition">③ Google Playで見る ↗</a>
          </div>
        </div>
      </div>

      <h4 class="text-slate-900 dark:text-slate-100 font-bold mb-2">🧹 コンセプト：「公式アーカイブ活用 ＆ 物理リミッターで絶対にBANさせない安全整理」</h4>
      <p class="mb-4 text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed">
        X（旧Twitter）上で削除ツールを使う最大のリスクは、機械的な高速アクセスや急激な大量削除によってスパム検知AIに引っかかることです。<strong>X Clean Bot</strong> は、公式アーカイブからローカルで投稿を解析して無駄な通信を完全排除し、人間の操作を模したランダム待機時間と定期休憩、そして危険な数値を入力させない「安全物理ガードレール」でアカウントを鉄壁に守ります。
      </p>

      <h4 class="text-slate-900 dark:text-slate-100 font-bold mb-2">✨ 主な機能 ＆ 安全ガードレール設計</h4>
      <ul class="list-disc list-inside space-y-1.5 text-slate-600 dark:text-slate-300 mb-4 text-xs sm:text-sm">
        <li><strong>公式アーカイブ（ZIP）のオフライン高速解析:</strong> Xのタイムライン取得APIを叩かないため、API制限（Rate Limit）を受けずに何万件もの全履歴から即座に対象を抽出できます。</li>
        <li><strong>BAN防止物理ガードレール（安全リミッター）:</strong>
          <ol class="list-decimal list-inside ml-4 mt-1 space-y-1 text-slate-500 dark:text-slate-400 text-xs">
            <li><strong>ランダム待機時間:</strong> 1件ごとに 4.0〜10.0秒の不規則な遅延を挟み、機械的アクセスを完全偽装（安全のため 4.0秒未満は設定不可）。</li>
            <li><strong>定期休憩（クールダウン）:</strong> 25件（最大50件）ごとに 120秒（2分）以上の休憩を挟み、セッション監視を落ち着かせます。</li>
            <li><strong>1日安全上限数:</strong> アカウント挙動の急変を防ぐため、1日最大300件に制限（無制限設定は物理的に禁止）。</li>
            <li><strong>429エラー即時停止:</strong> 万が一のレート制限検知時も無理に再試行せず即座に自動停止してアカウントを保護。</li>
          </ol>
        </li>
        <li><strong>柔軟な抽出・除外フィルター ＆ ソート機能:</strong> 日付指定、いいね数指定、メディア（画像・動画）保護、指定キーワード除外、投稿個別チェック、新しい順・古い順・いいね順の並び替えに対応。</li>
        <li><strong>削除前の安全バックアップ（CSV / JSON エクスポート）:</strong> 一度削除した投稿は復元できないため、Excel対応（BOM付き）CSVやJSON形式で手元に大切に残しておけます。</li>
        <li><strong>誤操作を防ぐ最終確認ダイアログ:</strong> 削除開始前に、削除件数・推定所要時間・注意事項を明記したフェイルセーフを挟み、誤クリックを防止します。</li>
      </ul>
    `,
    tags: ["Windows 10/11", "Android", "Google Play β配信中", "X過去投稿一括削除", "BAN防止ガード", "アーカイブ解析", "CSV/JSONバックアップ", "無料インストーラー配布"],
    githubUrl: "https://github.com/obenkyorobo-ops/portfolio",
    demoUrl: "assets/downloads/XCleanBot_Setup.exe",
    demoLabel: "インストーラー DL",
    metrics: [
      { label: "対応OS", value: "Windows 10 / 11 (64bit) ＆ Android" },
      { label: "安全設計", value: "BAN防止物理ガードレール搭載" },
      { label: "データ保護", value: "削除前バックアップ (CSV/JSON)" }
    ],
    screenshots: [
      {
        title: "削除対象リストの確認 ＆ 並び替え画面",
        tag: "メイン確認画面",
        src: "assets/images/xcleanbot_main.png",
        caption: "抽出された過去投稿を一覧表示。いいね数や日付、本文プレビューを確認しながら、残したい投稿を1タップで保護切り替え。新しい順・古い順・いいね順のソートにも対応。"
      },
      {
        title: "条件設定 ＆ BAN防止ガードレール設定画面",
        tag: "条件・安全設定",
        src: "assets/images/xcleanbot_sub.png",
        caption: "いいね数・期間・メディア保護の抽出条件と、BANを防ぐ安全設定（ランダム待機時間・定期クールダウン・1日上限）を直感的に設定可能。"
      }
    ]
  },
  {
    id: "hikikomoswitch",
    title: "HikikomoSwitch",
    subtitle: "「回線を止めれば、PCつけっぱなしでも絶対に侵入されない」— 画面端に潜む半透明ポート＆回線ロックダウンスイッチャー",
    category: "security",
    categoryLabel: "Windows / 鉄壁回線スイッチャー",
    status: "Windows版 公開中 (無料DL)",
    statusType: "release",
    featured: true,
    accentColor: "from-emerald-600 via-teal-500 to-sky-600",
    badgeColor: "bg-emerald-50 text-emerald-800 border-emerald-200 dark:bg-emerald-950/60 dark:text-emerald-300 dark:border-emerald-800",
    icon: "assets/images/hikikomo_icon.png",
    previewImage: "assets/images/hikikomo_main.png",
    installerUrl: "assets/downloads/HikikomoSwitch_Installer.zip",
    rawExeUrl: "assets/downloads/HikikomoSwitch_Setup.exe",
    portableUrl: "assets/downloads/HikikomoSwitch_Portable.zip",
    summary: "「回線を止めれば絶対に安全」を形にしたWindows常駐セキュリティツール。画面端の半透明ピルから、ワンクリックで全通信の完全ロックダウンやアプリ・ポート単位の遮断を実行できます。",
    description: `
      <div class="p-4 rounded-xl bg-gradient-to-r from-emerald-50 via-white to-teal-50 dark:from-emerald-950/40 dark:via-slate-900 dark:to-teal-950/40 border border-emerald-300 dark:border-emerald-700/60 mb-6 text-slate-800 dark:text-slate-200">
        <div class="flex items-center justify-between flex-wrap gap-2 mb-2">
          <div class="flex items-center gap-2 text-emerald-700 dark:text-emerald-400 font-bold text-sm">
            <span class="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping"></span>
            <span>🛡️ Windows 10 / 11 対応（追加ランタイム不要・完全無料）</span>
          </div>
          <span class="text-[11px] px-2.5 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-900/60 text-emerald-800 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-700 font-mono">v1.0.0 Official Release</span>
        </div>
        <p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-3">
          「席を離れるときや夜間、PCをつけっぱなしにしておくのが不安」「怪しい通信をしている裏アプリや特定ポートだけを黙らせたい」——そんな悩みを一番シンプルかつ根本的に解決するコンセプトは、<strong>『回線を止めれば絶対に安全なのだ』</strong>という事実です。
        </p>
        <div class="p-2.5 rounded-lg bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-700/50 text-[11px] text-slate-700 dark:text-slate-300 mb-3">
          💡 <strong>SmartScreen（青い保護画面）を回避する方法：</strong><br>
          下の<strong>「推奨インストーラーパック (.zip)」</strong>を解凍し、中の <code>1_インストール開始 (SmartScreen回避).bat</code> を実行すると保護画面なしでそのまま起動します（単体 <code>.exe</code> を直接開いた場合は<strong>［詳細情報］➜［実行］</strong>をクリックしてください）。
        </div>
        <div class="flex flex-wrap gap-2.5">
          <a href="assets/downloads/HikikomoSwitch_Installer.zip" download class="px-4 py-2.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-extrabold text-xs flex items-center gap-2 shadow-md shadow-emerald-600/20 transition transform hover:scale-105">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/></svg>
            <span>推奨インストーラーパック (.zip)</span>
          </a>
          <a href="assets/downloads/HikikomoSwitch_Setup.exe" download class="px-3.5 py-2.5 rounded-xl bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-emerald-700 dark:text-emerald-400 font-semibold text-xs border border-slate-300 dark:border-slate-700 flex items-center gap-1.5 transition shadow-sm">
            <span>単体インストーラー (.exe)</span>
          </a>
          <a href="assets/downloads/HikikomoSwitch_Portable.zip" download class="px-3.5 py-2.5 rounded-xl bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 font-semibold text-xs border border-slate-300 dark:border-slate-700 flex items-center gap-1.5 transition shadow-sm">
            <span>ポータブル版 (.zip)</span>
          </a>
        </div>
      </div>

      <h4 class="text-slate-900 dark:text-slate-100 font-bold mb-2">🔒 コンセプト：「回線を止めれば、PCつけっぱなしでも絶対に侵入されない」</h4>
      <p class="mb-4 text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed">
        複雑なセキュリティ設定がなくても、物理的に外との扉を閉ざしてしまえば外部からの不正アクセス・リモート侵入・情報漏洩は100%起こり得ません。<strong>HikikomoSwitch（ヒキコモスイッチ）</strong>は、PCの作業状態はそのまま維持しつつ、ワンクリックでPCを外界から「完全な引きこもり状態（ロックダウン）」にできる常駐スイッチャーです。
      </p>

      <h4 class="text-slate-900 dark:text-slate-100 font-bold mb-2">✨ 主な機能 ＆ 鉄壁の防衛アーキテクチャ</h4>
      <ul class="list-disc list-inside space-y-1.5 text-slate-600 dark:text-slate-300 mb-4 text-xs sm:text-sm">
        <li><strong>画面端から「にょっと」現れる半透明スリムピル:</strong> 普段は画面端の細いインジケーター（緑＝通常 / 赤＝引きこもり中）として控えめに待機。マウスを近づけた瞬間だけスライド出現し、9ドット（3×3）のグリップを掴んで上下左右の好きな辺・位置へ自由に配置できます。</li>
        <li><strong>3重の完全ロックダウン（回線マスタースイッチ）:</strong>
          <ol class="list-decimal list-inside ml-4 mt-1 space-y-1 text-slate-500 dark:text-slate-400 text-xs">
            <li>Windows ファイアウォールの全プロファイルに <code>blockinboundalways,blockoutbound</code> を適用し、既存の「許可ルール」すら無視して全着信・全送信を完全拒否。</li>
            <li>TCP/UDP だけでなく ICMP（Ping応答）を含む全プロトコル（<code>protocol=any</code>）を遮断し、ネットワーク上からPCの存在を隠蔽。</li>
            <li>スイッチを切った瞬間に確立済みの外部TCPセッション（<code>ESTABLISHED</code>）を Win32 API <code>SetTcpEntry</code> で即時強制切断（ローカル <code>127.0.0.1</code> は維持するため作業中のアプリはフリーズしません）。</li>
          </ol>
        </li>
        <li><strong>アプリ別グループ表示 ＆ 個別ポートのトグル遮断:</strong> 同じアプリが使う複数ポートを自動で1行に集約。クリックでアコーディオン展開し、アプリ全体の一括遮断も、特定ポート（<code>TCP :443</code> 等）だけのピンポイント遮断もトグル1つで即反映。</li>
        <li><strong>通信中 / 待機中ポートの可視化 ＆ リアルタイム速度グラフ:</strong> 実際にデータを送受信している「通信中ポート」と「待機中（LISTEN/UDP）ポート」を明確に識別。全体送受信チャートとアプリ別のミニ波形グラフ（スパークライン）を毎秒リアルタイム描画します。</li>
        <li><strong>一度の管理者実行でずっと使える「常時管理者＆自動起動」:</strong> 初回または設定時に管理者権限を記憶させれば、次回起動時やPC再起動時もUAC確認なしで自動的に管理者権限のまま常駐します（フッターのスイッチでいつでもOFF可能）。</li>
      </ul>
    `,
    tags: ["Windows 10/11", "完全ロックダウン", "ポート別通信遮断", "リアルタイム通信グラフ", "WPF半透明UI", "無料インストーラー配布"],
    githubUrl: "https://github.com/obenkyorobo-ops/portfolio",
    demoUrl: "assets/downloads/HikikomoSwitch_Setup.exe",
    demoLabel: "インストーラー DL",
    metrics: [
      { label: "対応OS", value: "Windows 10 / 11 (64bit)" },
      { label: "防衛レベル", value: "全プロトコル遮断＋即時切断" },
      { label: "常駐スタイル", value: "画面端スライド半透明ピル" }
    ],
    screenshots: [
      {
        title: "アプリ別ポート＆リアルタイム通信管理ウィンドウ",
        tag: "メイン一覧＆グラフ",
        src: "assets/images/hikikomo_main.png",
        caption: "回線全体のリアルタイム送受信グラフ、アプリごとのミニ波形グラフ、通信中/待機中ポートの内訳を半透明ダークUIに集約。アプリ行クリックで使用ポート一覧を展開し、個別にトグルでオン/オフ可能。"
      },
      {
        title: "画面端からにょっと現れる半透明スリムピル",
        tag: "常駐エッジドック",
        src: "assets/images/hikikomo_pill.png",
        caption: "マウスを画面端に近づけるとスライド出現。上の9ドットグリップで画面の上下左右どこへでも移動でき、中央の地球儀ボタンで回線ロックダウン、下のボタンで一覧ウィンドウを即座に開閉。"
      }
    ]
  },
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
    badgeColor: "bg-amber-50 text-amber-800 border-amber-200 dark:bg-amber-950/60 dark:text-amber-300 dark:border-amber-800",
    icon: "assets/images/mugen_icon.png",
    previewImage: "assets/images/mugen_quiz.png",
    summary: "新課程全18科目・3,800問以上を収録。最新のFSRS忘却曲線理論とアクティブリコール（選択肢マスク想起）で、最小の復習回数で記憶を定着させる大学入試・共通テスト対策アプリ。",
    betaInfo: {
      isRecruiting: true,
      badgeText: "🚀 Google Play クローズドβテスト実施中",
      groupUrl: "https://groups.google.com/u/3/g/study-app-tester",
      testingUrl: "https://play.google.com/apps/testing/jp.obenkyorobo.exam_prep",
      playStoreUrl: "https://play.google.com/store/apps/details?id=jp.obenkyorobo.exam_prep",
      note: "連絡不要・出入り自由！相互テストも大歓迎です。Googleグループ参加後、Web参加リンクで『テスターになる』を承認するとPlayストアからDLできます。"
    },
    description: `
      <div class="p-4 rounded-xl bg-gradient-to-r from-amber-50 via-white to-orange-50 dark:from-amber-950/40 dark:via-slate-900 dark:to-orange-950/40 border border-amber-200 dark:border-amber-700/60 mb-6 text-slate-800 dark:text-slate-200">
        <div class="flex items-center gap-2 text-amber-800 dark:text-amber-400 font-bold text-sm mb-2">
          <span class="w-2.5 h-2.5 rounded-full bg-amber-500 animate-ping"></span>
          <span>📢 クローズドβテスター募集中（参加歓迎・連絡不要）</span>
        </div>
        <p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-3">
          現在、Google Playでの正式リリースに向けてクローズドβテストを実施しています。高校生・受験生はもちろん、資格試験や大人の学び直し、開発者の相互テストも大歓迎です！
        </p>
        <div class="space-y-2.5 bg-white dark:bg-slate-900 p-3 rounded-lg border border-slate-200 dark:border-slate-700 text-xs text-slate-700 dark:text-slate-300">
          <div class="flex items-start gap-2">
            <span class="w-5 h-5 rounded-full bg-amber-100 dark:bg-amber-900/60 text-amber-800 dark:text-amber-300 font-bold flex items-center justify-center flex-shrink-0 text-[11px]">1</span>
            <span class="text-slate-600 dark:text-slate-300"><strong>テスター用Googleグループに参加</strong>（キオクノタスケ・英単語共通）<br><a href="https://groups.google.com/u/3/g/study-app-tester" target="_blank" rel="noopener noreferrer" class="text-sky-600 dark:text-sky-400 underline hover:text-sky-700 font-medium">https://groups.google.com/u/3/g/study-app-tester</a></span>
          </div>
          <div class="flex items-start gap-2">
            <span class="w-5 h-5 rounded-full bg-amber-100 dark:bg-amber-900/60 text-amber-800 dark:text-amber-300 font-bold flex items-center justify-center flex-shrink-0 text-[11px]">2</span>
            <span class="text-slate-600 dark:text-slate-300"><strong>Webでテスト参加（オプトイン）を承認</strong><br><a href="https://play.google.com/apps/testing/jp.obenkyorobo.exam_prep" target="_blank" rel="noopener noreferrer" class="text-amber-700 dark:text-amber-400 underline hover:text-amber-800 font-semibold">https://play.google.com/apps/testing/jp.obenkyorobo.exam_prep</a><br><span class="text-[10px] text-slate-500 dark:text-slate-400">※開いた画面で「テスターになる」をタップしてください。</span></span>
          </div>
          <div class="flex items-start gap-2">
            <span class="w-5 h-5 rounded-full bg-amber-100 dark:bg-amber-900/60 text-amber-800 dark:text-amber-300 font-bold flex items-center justify-center flex-shrink-0 text-[11px]">3</span>
            <span class="text-slate-600 dark:text-slate-300"><strong>Google Playからテスト版をインストール</strong><br><a href="https://play.google.com/store/apps/details?id=jp.obenkyorobo.exam_prep" target="_blank" rel="noopener noreferrer" class="text-sky-600 dark:text-sky-400 underline hover:text-sky-700 font-medium">https://play.google.com/store/apps/details?id=jp.obenkyorobo.exam_prep</a><br><span class="text-[10px] text-slate-500 dark:text-slate-400">※グループ参加と同じGoogleアカウントで開いてください。</span></span>
          </div>
        </div>
      </div>

      <p class="mb-4 text-slate-600 dark:text-slate-300">「キオクノタスケ」は、最新のFSRS（Free Spaced Repetition Scheduler）数理モデルと認知心理学（アクティブリコール）を融合した新世代の大学入試・共通テスト対策アプリです。解けば解くほど苦手分野がピンポイントで絞り込まれ、最短・最小の復習回数で知識が脳に定着します。</p>
      
      <h4 class="text-slate-900 dark:text-slate-100 font-bold mb-2">🔥 科学的アルゴリズム ＆ 主なハイライト</h4>
      <ul class="list-disc list-inside space-y-1.5 text-slate-600 dark:text-slate-300 mb-4">
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
    status: "クローズドβ募集中",
    statusType: "beta",
    featured: true,
    accentColor: "from-teal-600 via-emerald-500 to-cyan-600",
    badgeColor: "bg-teal-50 text-teal-800 border-teal-200 dark:bg-teal-950/60 dark:text-teal-300 dark:border-teal-800",
    icon: "assets/images/install_icon.png",
    previewImage: "assets/images/install_home.png",
    summary: "目標完成日数から日々のノルマをFSRS忘却曲線で自動逆算。カード・四択・手打ちスペル特訓の3層サイクルとAIコアイメージ解説で、大学受験・医獣専門英語を脳へ確実に定着させます。",
    betaInfo: {
      isRecruiting: true,
      badgeText: "🚀 Google Play クローズドβテスト実施中",
      groupUrl: "https://groups.google.com/u/3/g/study-app-tester",
      testingUrl: "https://play.google.com/apps/testing/jp.obenkyorobo.install_vocab",
      playStoreUrl: "https://play.google.com/store/apps/details?id=jp.obenkyorobo.install_vocab",
      note: "連絡不要・出入り自由！キオクノタスケと同じ共通Googleグループにご参加後、Web参加リンクで『テスターになる』を承認することですぐにインストール可能です。"
    },
    description: `
      <div class="p-4 rounded-xl bg-gradient-to-r from-teal-50 via-white to-cyan-50 dark:from-teal-950/40 dark:via-slate-900 dark:to-cyan-950/40 border border-teal-200 dark:border-teal-700/60 mb-6 text-slate-800 dark:text-slate-200">
        <div class="flex items-center gap-2 text-teal-800 dark:text-teal-400 font-bold text-sm mb-2">
          <span class="w-2.5 h-2.5 rounded-full bg-teal-500 animate-ping"></span>
          <span>📢 クローズドβテスター募集中（グループ共通・連絡不要）</span>
        </div>
        <p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-3">
          現在、Google Playでの正式リリースに向けてクローズドβテストを実施しています。<strong>『キオクノタスケ』と同じGoogleグループに参加するだけで、追加手続きなしで両方のテスト版がインストール可能</strong>になります！高校生・受験生はもちろん、開発者の相互テストも大歓迎です。
        </p>
        <div class="space-y-2.5 bg-white dark:bg-slate-900 p-3 rounded-lg border border-slate-200 dark:border-slate-700 text-xs text-slate-700 dark:text-slate-300">
          <div class="flex items-start gap-2">
            <span class="w-5 h-5 rounded-full bg-teal-100 dark:bg-teal-900/60 text-teal-800 dark:text-teal-300 font-bold flex items-center justify-center flex-shrink-0 text-[11px]">1</span>
            <span class="text-slate-600 dark:text-slate-300"><strong>共通Googleグループに参加</strong>（キオクノタスケ・英単語共通）<br><a href="https://groups.google.com/u/3/g/study-app-tester" target="_blank" rel="noopener noreferrer" class="text-sky-600 dark:text-sky-400 underline hover:text-sky-700 font-medium">https://groups.google.com/u/3/g/study-app-tester</a></span>
          </div>
          <div class="flex items-start gap-2">
            <span class="w-5 h-5 rounded-full bg-teal-100 dark:bg-teal-900/60 text-teal-800 dark:text-teal-300 font-bold flex items-center justify-center flex-shrink-0 text-[11px]">2</span>
            <span class="text-slate-600 dark:text-slate-300"><strong>Webでテスト参加（オプトイン）を承認</strong><br><a href="https://play.google.com/apps/testing/jp.obenkyorobo.install_vocab" target="_blank" rel="noopener noreferrer" class="text-teal-700 dark:text-teal-400 underline hover:text-teal-800 font-semibold">https://play.google.com/apps/testing/jp.obenkyorobo.install_vocab</a><br><span class="text-[10px] text-slate-500 dark:text-slate-400">※開いた画面で「テスターになる」をタップしてください。</span></span>
          </div>
          <div class="flex items-start gap-2">
            <span class="w-5 h-5 rounded-full bg-teal-100 dark:bg-teal-900/60 text-teal-800 dark:text-teal-300 font-bold flex items-center justify-center flex-shrink-0 text-[11px]">3</span>
            <span class="text-slate-600 dark:text-slate-300"><strong>Google Playからテスト版をインストール</strong><br><a href="https://play.google.com/store/apps/details?id=jp.obenkyorobo.install_vocab" target="_blank" rel="noopener noreferrer" class="text-sky-600 dark:text-sky-400 underline hover:text-sky-700 font-medium">https://play.google.com/store/apps/details?id=jp.obenkyorobo.install_vocab</a><br><span class="text-[10px] text-slate-500 dark:text-slate-400">※グループ参加と同じGoogleアカウントで開いてください。</span></span>
          </div>
        </div>
      </div>

      <p class="mb-4 text-slate-600 dark:text-slate-300">「インストール英単語」は、最新のFSRS（Free Spaced Repetition Scheduler）記憶定着モデルと認知心理学に基づき、最小の反復回数で確固たる英単語力を脳に「インストール」するために設計された語彙演習アプリです。「知っているけれど本番で出てこない」「多義語の使い分けが曖昧」「スペルが書けない」という語彙学習の3大課題を、3段階の特訓サイクルと高度な出題モードで徹底的に解決します。</p>
      
      <h4 class="text-slate-900 dark:text-slate-100 font-bold mb-2">🔥 主な機能 ＆ 科学的アルゴリズム</h4>
      <ul class="list-disc list-inside space-y-1.5 text-slate-600 dark:text-slate-300 mb-4">
        <li><strong>FSRS連動 目標期日からの定着ノルマ自動逆算:</strong> 30日/45日/60日/90日/120日（または直接指定）の学習計画と連動。忘却曲線モデルが残日数と未学習数から「1日の新規目安（例: 約36語/日）」と「本日の定着ノルマ（例: 390問）」を精密に自動算出。</li>
        <li><strong>① まとめて特訓 カード（FSRS 4段階判定 ＆ AIコアイメージ解説）:</strong> 「忘れた / 難しい / 覚えた / 簡単」の4段階判定とネイティブ音声再生を完備。主要意味と他の意味を分類表示し、「✨ AIコアイメージ解説」ボタンで単語の本質的なニュアンスや成り立ちを深く理解。</li>
        <li><strong>② 四択テスト（多義語識別 ＆ 同義語4択モード）:</strong> 似た単語の使い分けを瞬時に見分ける即応力を養成。「和訳分割トレーニング（多義語・複数和訳を個別出題）」や「同義語4択モード（英英形式）」への切り替えも可能。</li>
        <li><strong>③ 全ノルマ統合 キーボード手打ちスペル特訓:</strong> 下線プレースホルダー、文字数表示、1文字ヒント、答え表示、ネイティブ音声読み上げを搭載。実際に手でタイピングすることで、「読める」から「書ける・使える」語彙へ昇華。</li>
        <li><strong>柔軟な出題モード（英和 / 和英 / 混在 推奨）:</strong> インプット・アウトプット・実践的な混在モードを学習フェーズに合わせて自在に切り替え。</li>
        <li><strong>中学〜大学受験〜医学・獣医学専門英語まで網羅:</strong> 大学受験英単語（2,119語）、大学受験英熟語（1,003熟語）、中学英単語（553語）、中学英熟語（90熟語）、医学・獣医学専門英語（221語）など、目的に応じて出題対象を柔軟に選択可能。</li>
        <li><strong>端末内二重自動バックアップ機能:</strong> 学習データを端末内に二重自動バックアップし、アプリアップデート後も安全に学習履歴を引き継ぎ可能。</li>
      </ul>
    `,
    tags: ["FSRS数理モデル", "目標日数逆算", "AIコアイメージ", "スペル手打ちタイピング", "3段階特訓サイクル", "Google Play β配信中"],
    githubUrl: "https://github.com/obenkyorobo-ops/portfolio",
    demoUrl: "https://play.google.com/store/apps/details?id=jp.obenkyorobo.install_vocab",
    demoLabel: "Playストア テスト版",
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
    badgeColor: "bg-indigo-50 text-indigo-800 border-indigo-200 dark:bg-indigo-950/60 dark:text-indigo-300 dark:border-indigo-800",
    icon: "assets/images/geminitan_icon.png",
    previewImage: "assets/images/geminitan_main.png",
    summary: "ポモドーロ集中タイマー（🍅）連動のスタディモード、毎朝のモーニング・レディオを搭載。3Dアバター『ゲミニータン』と相棒ロボ『オビタ』が毎日の学習リズムと継続を支える伴走型パートナー。",
    description: `
      <p class="mb-4 text-slate-600 dark:text-slate-300">「ゲミニータン」は、毎日の学習リズムとモチベーションを科学的に持続させるための3Dインタラクティブ・学習パートナーアプリです。机に向かうあなたを、可愛い3Dアバター「ゲミニータン」と浮遊型相棒ロボット「オビタ」が全力で応援＆サポートします。</p>
      
      <h4 class="text-slate-900 dark:text-slate-100 font-bold mb-2">✨ 主な機能ハイライト</h4>
      <ul class="list-disc list-inside space-y-1.5 text-slate-600 dark:text-slate-300 mb-4">
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
