/**
 * Main Portfolio UI Logic
 */

document.addEventListener("DOMContentLoaded", () => {
  // 1. Initialize Icons
  if (window.lucide) {
    lucide.createIcons();
  }

  // 2. Render Projects Grid
  const gridContainer = document.getElementById("projectsGrid");
  const filterButtons = document.querySelectorAll(".filter-btn");

  function getMockupHtml(type) {
    if (type === "gemini_card" || type === "gemini_coach") {
      return `
        <div class="w-full h-full p-4 flex flex-col justify-between bg-gradient-to-br from-[#0b1329] via-[#0f172a] to-[#1e1b4b] text-left select-none">
          <div class="flex items-center justify-between border-b border-indigo-500/20 pb-2">
            <span class="text-[11px] font-mono text-indigo-400 font-semibold flex items-center gap-1.5">
              <span class="w-2 h-2 rounded-full bg-indigo-400 animate-pulse"></span>
              Gemini AI Coach
            </span>
            <span class="text-[10px] px-2 py-0.5 rounded bg-indigo-500/20 text-indigo-300">Level 4</span>
          </div>

          <div class="my-2">
            <div class="flex items-baseline gap-2">
              <span class="text-xl font-bold text-white tracking-wide">appreciate</span>
              <span class="text-xs text-indigo-300 font-mono">/əˈpriːʃieɪt/</span>
            </div>
            <div class="text-xs text-slate-300 mt-1 line-clamp-1">
              ① 感謝する ② 正当に評価する ③ 味わう
            </div>
          </div>

          <div class="p-2.5 rounded-lg bg-indigo-950/40 border border-indigo-500/30 text-[11px] text-slate-300 space-y-1">
            <div class="text-[10px] text-indigo-400 font-semibold flex items-center gap-1">
              <span>💡 コアイメージ（根本感覚）</span>
            </div>
            <p class="text-[10px] text-slate-300 leading-snug">
              「ものの価値（price）を正しく見積もる・認める」から派生。
            </p>
          </div>
        </div>
      `;
    }
    return '';
  }

  function renderProjects(filter = "all") {
    if (!gridContainer) return;
    gridContainer.innerHTML = "";

    const filtered = filter === "all" 
      ? projectsData 
      : projectsData.filter(p => p.category === filter);

    filtered.forEach((project, index) => {
      const card = document.createElement("div");
      const isBeta = project.statusType === "beta";
      card.className = `glass-card rounded-2xl p-6 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden ${
        isBeta ? 'border-2 border-amber-500/40 shadow-xl shadow-amber-500/10' : ''
      }`;
      card.style.animationDelay = `${index * 80}ms`;

      // Header visual (Screenshot or rich mockup)
      let headerVisual = "";
      if (project.previewImage) {
        headerVisual = `
          <div class="w-full h-48 mb-5 rounded-xl overflow-hidden relative bg-slate-900 border border-white/5 cursor-pointer" onclick="openProjectModal('${project.id}')">
            <img src="${project.previewImage}" alt="${project.title}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out" />
            <div class="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
            <div class="absolute bottom-2.5 left-3 text-[11px] font-semibold text-white/90 bg-slate-900/80 px-2 py-0.5 rounded backdrop-blur-sm border border-white/10 flex items-center gap-1">
              <svg class="w-3.5 h-3.5 text-sky-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
              <span>実機スクショ</span>
            </div>
          </div>
        `;
      } else if (project.previewMockup) {
        headerVisual = `
          <div class="w-full h-48 mb-5 rounded-xl overflow-hidden relative border border-indigo-500/20 cursor-pointer" onclick="openProjectModal('${project.id}')">
            ${getMockupHtml(project.previewMockup)}
            <div class="absolute bottom-2.5 right-3 text-[11px] font-semibold text-indigo-300 bg-indigo-950/80 px-2 py-0.5 rounded backdrop-blur-sm border border-indigo-500/30 flex items-center gap-1">
              <span>UIプレビュー</span>
            </div>
          </div>
        `;
      } else {
        headerVisual = `
          <div class="w-full h-48 mb-5 rounded-xl flex items-center justify-center relative overflow-hidden bg-gradient-to-br ${project.previewGradient || 'from-slate-900 to-slate-950'} border border-white/5 cursor-pointer" onclick="openProjectModal('${project.id}')">
            <div class="p-4 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 group-hover:scale-110 transition-transform duration-300">
              ${project.iconSvg || ""}
            </div>
          </div>
        `;
      }

      const tagsHtml = project.tags
        .slice(0, 4)
        .map(tag => `<span class="text-xs px-2.5 py-1 rounded-full bg-slate-800/80 text-slate-300 border border-slate-700/60">${tag}</span>`)
        .join("");

      card.innerHTML = `
        <div>
          ${headerVisual}
          <div class="flex items-center justify-between gap-2 mb-2">
            <span class="text-xs font-semibold px-2.5 py-0.5 rounded-full border ${project.badgeColor}">
              ${project.categoryLabel}
            </span>
            <span class="text-xs ${isBeta ? 'text-amber-400 font-bold' : 'text-slate-400 font-medium'} flex items-center gap-1.5">
              <span class="w-1.5 h-1.5 rounded-full ${isBeta ? 'bg-amber-400 animate-ping' : 'bg-slate-400'}"></span>
              ${project.status}
            </span>
          </div>

          <h3 class="text-xl font-bold text-white mb-2 group-hover:text-sky-400 transition-colors flex items-center gap-2">
            ${project.icon ? `<img src="${project.icon}" alt="" class="w-6 h-6 rounded object-cover inline-block" />` : ''}
            ${project.title}
          </h3>
          <p class="text-sm text-slate-400 line-clamp-2 mb-4 leading-relaxed">
            ${project.summary}
          </p>
        </div>

        <div>
          <div class="flex flex-wrap gap-1.5 mb-5">
            ${tagsHtml}
          </div>

          <div class="pt-4 border-t border-slate-800/80 flex items-center justify-between">
            <button 
              type="button" 
              onclick="openProjectModal('${project.id}')"
              class="text-sm font-semibold text-sky-400 hover:text-sky-300 flex items-center gap-1.5 group/btn"
            >
              <span>スクショ・仕様を見る</span>
              <svg class="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
            </button>
            <span class="text-xs font-mono text-amber-400/80 font-medium">お勉強ロボ</span>
          </div>
        </div>
      `;

      gridContainer.appendChild(card);
    });

    if (window.lucide) {
      lucide.createIcons();
    }
  }

  // Filter click handlers
  filterButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      filterButtons.forEach(b => {
        b.classList.remove("bg-sky-500/20", "text-sky-400", "border-sky-500/40");
        b.classList.add("bg-slate-900/60", "text-slate-400", "border-slate-800");
      });
      btn.classList.add("bg-sky-500/20", "text-sky-400", "border-sky-500/40");
      btn.classList.remove("bg-slate-900/60", "text-slate-400", "border-slate-800");

      const category = btn.getAttribute("data-filter");
      renderProjects(category);
    });
  });

  // Initial render
  renderProjects("all");
});

// Modal Logic
function openProjectModal(projectId) {
  const project = projectsData.find(p => p.id === projectId);
  if (!project) return;

  const modal = document.getElementById("projectModal");
  const modalContent = document.getElementById("modalBody");
  if (!modal || !modalContent) return;

  const metricsHtml = (project.metrics || []).map(m => `
    <div class="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
      <div class="text-xs text-slate-400 mb-0.5">${m.label}</div>
      <div class="text-base font-bold text-white">${m.value}</div>
    </div>
  `).join("");

  const tagsHtml = project.tags.map(tag => `
    <span class="text-xs px-2.5 py-1 rounded-full bg-slate-800 text-sky-300 border border-slate-700">${tag}</span>
  `).join("");

  // Screenshots Gallery
  let screenshotsHtml = "";
  if (project.screenshots && project.screenshots.length > 0) {
    screenshotsHtml = `
      <div class="mb-8">
        <div class="flex items-center justify-between mb-3">
          <div class="text-xs font-semibold text-sky-400 uppercase tracking-wider flex items-center gap-1.5">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
            <span>スクリーンショット ＆ UIギャラリー (${project.screenshots.length}件)</span>
          </div>
        </div>

        <div class="grid grid-cols-1 ${project.screenshots.length > 1 ? 'sm:grid-cols-2' : ''} gap-4">
          ${project.screenshots.map((s, idx) => {
            if (s.src) {
              return `
                <div class="rounded-xl overflow-hidden bg-slate-950 border border-slate-800 group/img flex flex-col justify-between">
                  <div class="w-full bg-black/40 overflow-hidden flex items-center justify-center p-2">
                    <img src="${s.src}" alt="${s.title}" class="max-h-72 w-auto object-contain rounded-lg transition-transform duration-300 group-hover/img:scale-105" />
                  </div>
                  <div class="p-3 bg-slate-900/90 border-t border-slate-800">
                    <div class="flex items-center justify-between mb-1">
                      <span class="text-xs font-bold text-white">${s.title}</span>
                      <span class="text-[10px] px-2 py-0.5 rounded bg-sky-500/10 text-sky-400 border border-sky-500/20">${s.tag || '画面'}</span>
                    </div>
                    <p class="text-[11px] text-slate-400 leading-relaxed">${s.caption || ''}</p>
                  </div>
                </div>
              `;
            } else if (s.mockupType === "gemini_coach") {
              return `
                <div class="rounded-xl overflow-hidden bg-slate-950 border border-indigo-500/30 flex flex-col justify-between">
                  <div class="p-4 bg-gradient-to-br from-[#0c132c] via-[#0f172a] to-[#1e1b4b]">
                    <div class="flex items-center justify-between border-b border-indigo-500/20 pb-2 mb-3">
                      <span class="text-xs font-mono text-indigo-400 font-semibold flex items-center gap-1.5">
                        <span class="w-2 h-2 rounded-full bg-indigo-400 animate-pulse"></span>
                        Gemini AI Coach Preview
                      </span>
                      <span class="text-[10px] px-2 py-0.5 rounded bg-indigo-500/20 text-indigo-300">Live Mockup</span>
                    </div>

                    <div class="mb-3">
                      <div class="flex items-baseline gap-2">
                        <span class="text-2xl font-bold text-white tracking-wide">appreciate</span>
                        <span class="text-xs text-indigo-300 font-mono">/əˈpriːʃieɪt/</span>
                      </div>
                      <div class="text-xs text-slate-300 mt-1">
                        ① 感謝する ② 正当に評価する ③ 味わう
                      </div>
                    </div>

                    <div class="p-3 rounded-xl bg-indigo-950/60 border border-indigo-500/40 text-xs text-slate-300 space-y-1.5">
                      <div class="font-bold text-indigo-400 flex items-center gap-1.5">
                        <span>💡 語源的コアイメージ</span>
                      </div>
                      <p class="text-slate-300 leading-relaxed">
                        語源は <em>ad-</em>（〜へ）+ <em>pretium</em>（価格・価値）。対象の「本来の価値を正しく認める」という1つの根本感覚から、「ありがたく思う（感謝）」「良さを理解する（鑑賞）」へと意味が広がっています。
                      </p>
                    </div>
                  </div>
                  <div class="p-3 bg-slate-900/90 border-t border-slate-800">
                    <div class="flex items-center justify-between mb-1">
                      <span class="text-xs font-bold text-white">${s.title}</span>
                      <span class="text-[10px] px-2 py-0.5 rounded bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">${s.tag || 'AI画面'}</span>
                    </div>
                    <p class="text-[11px] text-slate-400 leading-relaxed">${s.caption || ''}</p>
                  </div>
                </div>
              `;
            }
            return '';
          }).join("")}
        </div>
      </div>
    `;
  }

  modalContent.innerHTML = `
    <div class="flex items-start justify-between gap-4 mb-4">
      <div>
        <div class="flex items-center gap-2 mb-2">
          <span class="text-xs font-semibold px-2.5 py-0.5 rounded-full border ${project.badgeColor}">
            ${project.categoryLabel}
          </span>
          <span class="text-xs text-emerald-400 font-medium">● ${project.status}</span>
        </div>
        <h2 class="text-2xl sm:text-3xl font-extrabold text-white flex items-center gap-3">
          ${project.icon ? `<img src="${project.icon}" alt="" class="w-8 h-8 rounded-lg object-cover shadow" />` : ''}
          ${project.title}
        </h2>
        <p class="text-sm sm:text-base text-slate-300 mt-1 font-medium">${project.subtitle}</p>
      </div>
      <button onclick="closeProjectModal()" class="p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition">
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
      </button>
    </div>

    <!-- Screenshots Gallery -->
    ${screenshotsHtml}

    <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
      ${metricsHtml}
    </div>

    <div class="prose prose-invert max-w-none text-slate-300 text-sm leading-relaxed mb-6">
      ${project.description}
    </div>

    <div class="mb-6">
      <div class="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Tech Stack</div>
      <div class="flex flex-wrap gap-2">
        ${tagsHtml}
      </div>
    </div>

    <div class="pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3">
      <button onclick="closeProjectModal()" class="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-sm font-semibold transition">
        閉じる
      </button>
      <div class="flex items-center gap-2">
        ${project.betaInfo ? `
          <a href="https://x.com/ObenkyoRobo" target="_blank" rel="noopener noreferrer" class="px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-amber-300 text-xs font-bold border border-amber-500/30 flex items-center gap-1.5 transition">
            <svg class="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            <span class="hidden sm:inline">相互テスト連絡 (X)</span>
            <span class="sm:hidden">相互テスト</span>
          </a>
          ${project.betaInfo.testingUrl ? `
            <a href="${project.betaInfo.testingUrl}" target="_blank" rel="noopener noreferrer" class="px-3.5 py-2 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-slate-950 text-xs font-extrabold flex items-center gap-1.5 shadow-lg shadow-amber-500/20 transition">
              <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
              <span>① テスト参加を承認</span>
            </a>
          ` : ''}
          ${project.betaInfo.playStoreUrl ? `
            <a href="${project.betaInfo.playStoreUrl}" target="_blank" rel="noopener noreferrer" class="px-3 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 text-xs font-semibold flex items-center gap-1.5 border border-slate-700/80 transition shadow">
              <svg class="w-3.5 h-3.5 text-sky-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/></svg>
              <span>② Playストア</span>
            </a>
          ` : ''}
          <a href="${project.betaInfo.groupUrl}" target="_blank" rel="noopener noreferrer" class="px-3 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-medium border border-slate-700/60 flex items-center gap-1.5 transition">
            <span>グループ</span>
            <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
          </a>
        ` : `
          <a href="https://github.com/obenkyorobo-ops/portfolio" target="_blank" rel="noopener noreferrer" class="px-5 py-2 rounded-xl bg-gradient-to-r from-sky-500 to-indigo-600 hover:from-sky-400 hover:to-indigo-500 text-white text-sm font-semibold flex items-center gap-2 shadow-lg shadow-sky-500/20 transition">
            <span>GitHub を開く</span>
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
          </a>
        `}
      </div>
    </div>
  `;

  modal.classList.remove("hidden-modal");
  document.body.style.overflow = "hidden";
}

function closeProjectModal() {
  const modal = document.getElementById("projectModal");
  if (!modal) return;
  modal.classList.add("hidden-modal");
  document.body.style.overflow = "";
}

// Close on backdrop click or ESC
window.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeProjectModal();
});
