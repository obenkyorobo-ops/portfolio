# 🤖 お勉強ロボ (Obenkyou Robo) 公式アプリポートフォリオ

屋号「お勉強ロボ」が Google Antigravity とのペアプログラミングによって開発した Flutter アプリ・AI パートナープロダクトの公式ポートフォリオサイトです。

机に向かってひたむきにノートをとるロボットのように、学習者の成長にずっと寄り添う実戦的な学習支援アプリを届けています。

---

## 📱 掲載アプリ一覧（厳選3大フラッグシップ）

1. **キオクノタスケ 【Google Play クローズドβテスト実施中】**
   - 新課程全18科目対応・忘却曲線（SRS）暗記＆共通テスト過去問演習アプリ
   - CustomPainter による鮮明なベクター図表描画（最大4倍ピンチズーム対応）
   - 正解でごはんを獲得し成長する相棒（犬）とのふれあい・思い出アルバム・実績バッジ機能
   - GitHub風の学習ヒートマップ ＆ 連続学習ストリーク
   - **Googleグループ参加 URL**: https://groups.google.com/u/3/g/study-app-tester
   - **Playストア テスト版 URL**: https://play.google.com/store/apps/details?id=jp.obenkyorobo.exam_prep
   - **相互テスト連絡先 (X)**: [@ObenkyoRobo](https://x.com/ObenkyoRobo)

2. **ボク友英単語**
   - ターゲット1900＆英熟語1000対応・獣医英単語・共テ単語網羅
   - 認知科学に基づく3段階特訓サイクル：①フラッシュカード（SRS忘却曲線） ➜ ②四択テスト（多義語・使い分け注記） ➜ ③キーボード手打ちスペル特訓（1文字ヒント付）
   - 単語カードから直接アクセスできる「✨ AIコアイメージ解説」連携
   - 本日の定着ノルマ進捗 ＆ 連続学習ストリーク（🔥）

3. **ゲミニータン**
   - 3Dアバター × Gemini Live API 双方向対話・伴走型AI学習パートナー
   - 常時会話（Live）モードによる超低遅延リアルタイム音声対話
   - メガネ姿のスタディモード（STUDY MODE）＆ポモドーロ集中タイマー（🍅）連動
   - 毎朝のモーニング・レディオ（記念日・応援メッセージ・最新ニュース配信）
   - 浮遊型相棒ロボット「オビタ」（ハート目のふれあい・応援）

---

## 💻 ローカルでプレビューする

ブラウザで `index.html` または `open_portfolio.bat` をダブルクリックするだけで確認できます。

---

## 🌐 GitHub Pages で公開する手順（3ステップ）

### ステップ 1: GitHub で新しいリポジトリを作成
[GitHub](https://github.com/new) にログインし、新しいリポジトリ（例: `portfolio` または `<あなたのユーザー名>.github.io`）を Public で作成します。

### ステップ 2: ローカルからプッシュ
ターミナルまたはPowerShellで以下を実行します：

```bash
cd c:\Users\Steel\StudioProjects\portfolio

git init
git add .
git commit -m "feat: portfolio release with real screenshots for Bokutomo AI"
git branch -M main
git remote add origin https://github.com/obenkyorobo-ops/portfolio.git
git push -u origin main
```

### ステップ 3: GitHub Pages を有効化（1クリック）
1. GitHub リポジトリの **Settings** > **Pages** を開きます。
2. **Build and deployment** > **Source** で **GitHub Actions** を選択します。
3. すでに `.github/workflows/deploy.yml` が同梱されているため、数秒で自動ビルド＆デプロイが完了します！
4. 公開URL（`https://obenkyorobo-ops.github.io/portfolio/`）で世界中に高速配信されます。
