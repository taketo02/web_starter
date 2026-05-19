// web_starter ── 動き

const moods = [
  "ご機嫌",
  "ちょっと 眠い",
  "わくわく",
  "落ち着いている",
  "頑張りたい",
  "リラックス中",
  "考えごとモード",
];

const moodEl = document.getElementById("mood");
const btnEl = document.getElementById("moodBtn");

btnEl.addEventListener("click", () => {
  const next = moods[Math.floor(Math.random() * moods.length)];
  moodEl.textContent = next;
});
