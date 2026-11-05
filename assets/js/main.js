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
      const isRelease = project.statusType === "release";
      card.className = `rounded-2xl p-6 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden bg-white border ${
        isRelease 
          ? 'border-2 border-emerald-400/80 shadow-md shadow-emerald-500/5 hover:border-emerald-500' 
          : isBeta 
            ? 'border-2 border-amber-400/80 shadow-md shadow-amber-500/5 hover:border-amber-500' 
            : 'border-slate-200/90 shadow-sm hover:border-slate-300 hover:shadow-md'
      }`;
      card.style.animationDelay = `${index * 80}ms`;

      // Header visual (Screenshot or rich mockup)
      let headerVisual = "";
      if (project.previewImage) {
        headerVisual = `
          <div class="w-full h-48 mb-5 rounded-xl overflow-hidden relative bg-slate-100 border border-slate-200 cursor-pointer" onclick="openProjectModal('${project.id}')">
            <img src="${project.previewImage}" alt="${project.title}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out" />
            <div class="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent"></div>
            <div class="absolute bottom-2.5 left-3 text-xs font-semibold text-white bg-slate-900/80 px-2 py-0.5 rounded backdrop-blur-sm border border-white/20 flex items-center gap-1">
              <svg class="w-3.5 h-3.5 text-sky-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
              <span>実機スクショ</span>
            </div>
          </div>
        `;
      } else if (project.previewMockup) {
        headerVisual = `
          <div class="w-full h-48 mb-5 rounded-xl overflow-hidden relative border border-indigo-200 cursor-pointer" onclick="openProjectModal('${project.id}')">
            ${getMockupHtml(project.previewMockup)}
            <div class="absolute bottom-2.5 right-3 text-xs font-semibold text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded backdrop-blur-sm border border-indigo-200 flex items-center gap-1">
              <span>UIプレビュー</span>
            </div>
          </div>
        `;
      } else {
        headerVisual = `
          <div class="w-full h-48 mb-5 rounded-xl flex items-center justify-center relative overflow-hidden bg-slate-100 border border-slate-200 cursor-pointer" onclick="openProjectModal('${project.id}')">
            <div class="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm group-hover:scale-110 transition-transform duration-300">
              ${project.iconSvg || ""}
            </div>
          </div>
        `;
      }

      const tagsHtml = project.tags
        .slice(0, 4)
        .map(tag => `<span class="text-xs px-2.5 py-1 rounded-full bg-slate-100 text-slate-600 border border-slate-200 font-medium">${tag}</span>`)
        .join("");

      card.innerHTML = `
        <div>
          ${headerVisual}
          <div class="flex items-center justify-between gap-2 mb-2">
            <span class="text-xs font-semibold px-2.5 py-0.5 rounded-full border ${project.badgeColor}">
              ${project.categoryLabel}
            </span>
            <span class="text-xs ${isBeta ? 'text-amber-700 font-bold' : 'text-slate-500 font-medium'} flex items-center gap-1.5">
              <span class="w-1.5 h-1.5 rounded-full ${isBeta ? 'bg-amber-500 animate-ping' : 'bg-slate-400'}"></span>
              ${project.status}
            </span>
          </div>

          <h3 class="text-xl font-bold text-slate-900 mb-2 group-hover:text-sky-600 transition-colors flex items-center gap-2">
            ${project.icon ? `<img src="${project.icon}" alt="" class="w-6 h-6 rounded object-cover inline-block shadow-sm" />` : ''}
            ${project.title}
          </h3>
          <p class="text-sm text-slate-600 line-clamp-2 mb-4 leading-relaxed">
            ${project.summary}
          </p>
        </div>

        <div>
          <div class="flex flex-wrap gap-1.5 mb-5">
            ${tagsHtml}
          </div>

          <div class="pt-4 border-t border-slate-100 flex items-center justify-between gap-2">
            <button 
              type="button" 
              onclick="openProjectModal('${project.id}')"
              class="text-sm font-semibold text-sky-600 hover:text-sky-700 flex items-center gap-1.5 group/btn"
            >
              <span>スクショ・仕様を見る</span>
              <svg class="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
            </button>
            ${project.installerUrl ? `
              <a href="${project.installerUrl}" download class="px-3 py-1.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-extrabold text-xs flex items-center gap-1 shadow-md shadow-emerald-600/20 transition transform hover:scale-105">
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/></svg>
                <span>無料DL</span>
              </a>
            ` : `<span class="text-xs font-mono text-amber-700 font-semibold">お勉強ロボ</span>`}
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
        b.classList.remove("bg-white", "text-sky-700", "border-slate-200", "shadow-sm");
        b.classList.add("text-slate-600", "border-transparent");
      });
      btn.classList.add("bg-white", "text-sky-700", "border-slate-200", "shadow-sm");
      btn.classList.remove("text-slate-600", "border-transparent");

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
    <div class="p-3 rounded-xl bg-slate-50 border border-slate-200">
      <div class="text-xs text-slate-500 mb-0.5">${m.label}</div>
      <div class="text-base font-bold text-slate-900">${m.value}</div>
    </div>
  `).join("");

  const tagsHtml = project.tags.map(tag => `
    <span class="text-xs px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200 font-medium">${tag}</span>
  `).join("");

  // Screenshots Gallery
  let screenshotsHtml = "";
  if (project.screenshots && project.screenshots.length > 0) {
    screenshotsHtml = `
      <div class="mb-8">
        <div class="flex items-center justify-between mb-3">
          <div class="text-xs font-semibold text-sky-700 uppercase tracking-wider flex items-center gap-1.5">
            <svg class="w-4 h-4 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
            <span>スクリーンショット ＆ UIギャラリー (${project.screenshots.length}件)</span>
          </div>
        </div>

        <div class="grid grid-cols-1 ${project.screenshots.length > 1 ? 'sm:grid-cols-2' : ''} gap-4">
          ${project.screenshots.map((s, idx) => {
            if (s.src) {
              return `
                <div class="rounded-xl overflow-hidden bg-slate-100 border border-slate-200 group/img flex flex-col justify-between">
                  <div class="w-full bg-slate-900/5 overflow-hidden flex items-center justify-center p-2">
                    <img src="${s.src}" alt="${s.title}" class="max-h-72 w-auto object-contain rounded-lg transition-transform duration-300 group-hover/img:scale-105" />
                  </div>
                  <div class="p-3 bg-white border-t border-slate-200">
                    <div class="flex items-center justify-between mb-1">
                      <span class="text-xs sm:text-sm font-bold text-slate-900">${s.title}</span>
                      <span class="text-xs px-2 py-0.5 rounded bg-sky-50 text-sky-700 border border-sky-200">${s.tag || '画面'}</span>
                    </div>
                    <p class="text-xs sm:text-sm text-slate-600 leading-relaxed">${s.caption || ''}</p>
                  </div>
                </div>
              `;
            } else if (s.mockupType === "gemini_coach") {
              return `
                <div class="rounded-xl overflow-hidden bg-slate-50 border border-indigo-200 flex flex-col justify-between">
                  <div class="p-4 bg-gradient-to-br from-indigo-50/70 via-white to-purple-50/70">
                    <div class="flex items-center justify-between border-b border-indigo-100 pb-2 mb-3">
                      <span class="text-xs font-mono text-indigo-700 font-semibold flex items-center gap-1.5">
                        <span class="w-2 h-2 rounded-full bg-indigo-500 animate-pulse"></span>
                        Gemini AI Coach Preview
                      </span>
                      <span class="text-xs px-2 py-0.5 rounded bg-indigo-100 text-indigo-800">Live Mockup</span>
                    </div>

                    <div class="mb-3">
                      <div class="flex items-baseline gap-2">
                        <span class="text-2xl font-bold text-slate-900 tracking-wide">appreciate</span>
                        <span class="text-xs text-indigo-600 font-mono">/əˈpriːʃieɪt/</span>
                      </div>
                      <div class="text-xs text-slate-600 mt-1">
                        ① 感謝する ② 正当に評価する ③ 味わう
                      </div>
                    </div>

                    <div class="p-3 rounded-xl bg-white border border-indigo-200 text-xs text-slate-700 space-y-1.5 shadow-sm">
                      <div class="font-bold text-indigo-700 flex items-center gap-1.5">
                        <span>💡 語源的コアイメージ</span>
                      </div>
                      <p class="text-slate-600 leading-relaxed">
                        語源は <em>ad-</em>（〜へ）+ <em>pretium</em>（価格・価値）。対象の「本来の価値を正しく認める」という1つの根本感覚から、「ありがたく思う（感謝）」「良さを理解する（鑑賞）」へと意味が広がっています。
                      </p>
                    </div>
                  </div>
                  <div class="p-3 bg-white border-t border-slate-200">
                    <div class="flex items-center justify-between mb-1">
                      <span class="text-xs sm:text-sm font-bold text-slate-900">${s.title}</span>
                      <span class="text-xs px-2 py-0.5 rounded bg-indigo-50 text-indigo-700 border border-indigo-200">${s.tag || 'AI画面'}</span>
                    </div>
                    <p class="text-xs sm:text-sm text-slate-600 leading-relaxed">${s.caption || ''}</p>
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
          <span class="text-xs text-emerald-700 font-medium">● ${project.status}</span>
        </div>
        <h2 class="text-2xl sm:text-3xl font-extrabold text-slate-900 flex items-center gap-3">
          ${project.icon ? `<img src="${project.icon}" alt="" class="w-8 h-8 rounded-lg object-cover shadow-sm" />` : ''}
          ${project.title}
        </h2>
        <p class="text-sm sm:text-base text-slate-600 mt-1 font-medium">${project.subtitle}</p>
      </div>
      <button onclick="closeProjectModal()" class="p-2 rounded-xl bg-slate-100 text-slate-500 hover:text-slate-900 hover:bg-slate-200 transition">
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
      </button>
    </div>

    <!-- Screenshots Gallery -->
    ${screenshotsHtml}

    <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
      ${metricsHtml}
    </div>

    <div class="prose max-w-none text-slate-700 text-sm leading-relaxed mb-6">
      ${project.description}
    </div>

    <div class="mb-6">
      <div class="text-xs font-semibold text-slate-600 uppercase tracking-wider mb-2">Tech Stack</div>
      <div class="flex flex-wrap gap-2">
        ${tagsHtml}
      </div>
    </div>

    <div class="pt-4 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3">
      <button onclick="closeProjectModal()" class="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-sm font-semibold transition">
        閉じる
      </button>
      <div class="flex items-center gap-2">
        ${project.betaInfo ? `
          <a href="https://x.com/ObenkyoRobo" target="_blank" rel="noopener noreferrer" class="px-3.5 py-2 rounded-xl bg-white hover:bg-slate-50 text-slate-800 text-xs font-bold border border-slate-300 flex items-center gap-1.5 transition shadow-sm">
            <svg class="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            <span class="hidden sm:inline">相互テスト連絡 (X)</span>
            <span class="sm:hidden">相互テスト</span>
          </a>
          ${project.betaInfo.testingUrl ? `
            <a href="${project.betaInfo.testingUrl}" target="_blank" rel="noopener noreferrer" class="px-3.5 py-2 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white text-xs font-extrabold flex items-center gap-1.5 shadow-md shadow-amber-500/20 transition">
              <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
              <span>① テスト参加を承認</span>
            </a>
          ` : ''}
          ${project.betaInfo.playStoreUrl ? `
            <a href="${project.betaInfo.playStoreUrl}" target="_blank" rel="noopener noreferrer" class="px-3 py-2 rounded-xl bg-white hover:bg-slate-50 text-slate-800 text-xs font-semibold flex items-center gap-1.5 border border-slate-300 transition shadow-sm">
              <svg class="w-3.5 h-3.5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/></svg>
              <span>② Playストア</span>
            </a>
          ` : ''}
          <a href="${project.betaInfo.groupUrl}" target="_blank" rel="noopener noreferrer" class="px-3 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-medium border border-slate-200 flex items-center gap-1.5 transition">
            <span>グループ</span>
            <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
          </a>
        ` : project.installerUrl ? `
          <a href="${project.portableUrl}" download class="px-3.5 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold border border-slate-200 flex items-center gap-1.5 transition">
            <span>ポータブル (.zip)</span>
          </a>
          <a href="${project.rawExeUrl || project.installerUrl}" download class="px-3.5 py-2 rounded-xl bg-white hover:bg-slate-100 text-emerald-700 text-xs font-semibold border border-slate-300 flex items-center gap-1.5 transition shadow-sm">
            <span>単体 (.exe)</span>
          </a>
          <a href="${project.installerUrl}" download class="px-5 py-2.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white text-xs sm:text-sm font-extrabold flex items-center gap-2 shadow-md shadow-emerald-600/20 transition transform hover:scale-105">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/></svg>
            <span>推奨インストーラー (.zip)</span>
          </a>
        ` : `
          <a href="https://github.com/obenkyorobo-ops/portfolio" target="_blank" rel="noopener noreferrer" class="px-5 py-2 rounded-xl bg-gradient-to-r from-sky-600 to-indigo-600 hover:from-sky-700 hover:to-indigo-700 text-white text-sm font-semibold flex items-center gap-2 shadow-md shadow-sky-600/20 transition">
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
