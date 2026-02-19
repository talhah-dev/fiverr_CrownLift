const navbar = document.getElementById("navbar");

navbar.innerHTML = `
  <header id="siteHeader" class="fixed inset-x-0 top-0 z-50">
    <div id="navContainer" class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 transition-all duration-300">
      <div id="navBar" class="relative mt-3 flex items-center justify-between rounded-2xl px-3 py-2.5 transition-all duration-300">
        <a href="index.html" class="inline-flex items-center gap-3 shrink-0">
          <span class="shrink-0 h-10 w-10 rounded-2xl inline-flex items-center justify-center text-[#111827] shadow-sm bg-[#E6C17A]">
            <i class="fa-solid fa-arrow-up-right-dots"></i>
          </span>
          <div class="leading-tight">
            <p class="text-lg font-extrabold leading-tight text-[#111827]">CrownLift Concrete</p>
            <p class="text-xs font-semibold text-[#777C7C]">Mudjacking & Concrete Raising</p>
          </div>
        </a>

        <nav class="hidden md:block">
          <ul class="flex items-center justify-center gap-2 lg:gap-3 text-sm font-semibold">
            <li><a class="navLink transition" href="index.html">Home</a></li>
            <li><a class="navLink transition" href="about.html">About</a></li>
            <li><a class="navLink transition" href="mudjacking.html">Mud Jacking</a></li>
            <li><a class="navLink transition" href="faq.html">FAQ</a></li>
            <li><a class="navLink transition" href="contact.html">Contact Us</a></li>
          </ul>
        </nav>

        <div class="hidden md:flex items-center gap-2 shrink-0">
          <a
            href="contact.html"
            id="ctaBtn"
            class="inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm font-semibold transition hover:-translate-y-0.5 active:translate-y-0"
          >
            Request Estimate
          </a>
        </div>

        <button
          id="menuBtnMobile"
          type="button"
          aria-label="Open menu"
          aria-expanded="false"
          class="group inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl transition active:scale-[0.98] md:hidden"
        >
          <i class="fa-solid fa-bars text-base"></i>
        </button>
      </div>
    </div>
  </header>

  <div id="menuOverlay" class="fixed inset-0 z-[60] hidden bg-black/40 backdrop-blur-sm opacity-0 transition-opacity duration-300"></div>

  <aside
    id="menuPanel"
    class="fixed right-0 top-0 z-[70] h-full w-[88%] max-w-sm translate-x-full bg-white shadow-2xl shadow-black/10 ring-1 ring-black/5 transition-transform duration-300 ease-out overflow-y-auto"
    aria-hidden="true"
  >
    <div class="flex items-center justify-between px-5 py-5 border-b border-[#777C7C]/10">
      <a href="index.html" class="inline-flex items-center gap-3 shrink-0">
        <span class="shrink-0 h-10 w-10 rounded-2xl inline-flex items-center justify-center text-[#111827] shadow-sm bg-[#E6C17A]">
          <i class="fa-solid fa-arrow-up-right-dots"></i>
        </span>
        <div class="leading-tight">
          <p class="text-lg font-extrabold leading-tight text-[#111827]">CrownLift</p>
          <p class="text-xs font-semibold text-[#777C7C]">Concrete Raising</p>
        </div>
      </a>

      <button
        id="closeBtn"
        type="button"
        aria-label="Close menu"
        class="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#777C7C]/10 text-[#111827] ring-1 ring-[#777C7C]/20 transition hover:bg-[#777C7C]/15 active:scale-[0.98]"
      >
        <i class="fa-solid fa-xmark text-lg"></i>
      </button>
    </div>

    <div class="px-5 pb-8">

      <nav class="mt-5">
        <ul class="space-y-2">
          <li>
            <a class="mLink flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-semibold text-[#111827] ring-1 ring-[#777C7C]/15 hover:bg-[#E6C17A]/10 transition"
              href="index.html">
              <span class="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-2xl bg-[#E6C17A]/25 text-[#111827] ring-1 ring-[#E6C17A]/30">
                <i class="fa-solid fa-house"></i>
              </span>
              Home
            </a>
          </li>

          <li>
            <a class="mLink flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-semibold text-[#111827] ring-1 ring-[#777C7C]/15 hover:bg-[#E6C17A]/10 transition"
              href="about.html">
              <span class="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-2xl bg-[#E6C17A]/25 text-[#111827] ring-1 ring-[#E6C17A]/30">
                <i class="fa-solid fa-circle-info"></i>
              </span>
              About
            </a>
          </li>

          <li>
            <a class="mLink flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-semibold text-[#111827] ring-1 ring-[#777C7C]/15 hover:bg-[#E6C17A]/10 transition"
              href="mudjacking.html">
              <span class="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-2xl bg-[#E6C17A]/25 text-[#111827] ring-1 ring-[#E6C17A]/30">
                <i class="fa-solid fa-layer-group"></i>
              </span>
              Mud Jacking
            </a>
          </li>

          <li>
            <a class="mLink flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-semibold text-[#111827] ring-1 ring-[#777C7C]/15 hover:bg-[#E6C17A]/10 transition"
              href="faq.html">
              <span class="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-2xl bg-[#E6C17A]/25 text-[#111827] ring-1 ring-[#E6C17A]/30">
                <i class="fa-solid fa-circle-question"></i>
              </span>
              FAQ
            </a>
          </li>

          <li>
            <a class="mLink flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-semibold text-[#111827] ring-1 ring-[#777C7C]/15 hover:bg-[#E6C17A]/10 transition"
              href="contact.html">
              <span class="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-2xl bg-[#E6C17A]/25 text-[#111827] ring-1 ring-[#E6C17A]/30">
                <i class="fa-solid fa-envelope"></i>
              </span>
              Contact Us
            </a>
          </li>
        </ul>
      </nav>

      <div class="mt-6">
        <a href="contact.html"
          class="inline-flex w-full items-center justify-center rounded-2xl bg-[#E6C17A] px-6 py-3 text-sm font-semibold text-[#111827] shadow-lg shadow-[#E6C17A]/20 transition hover:brightness-95">
          Request Estimate
        </a>
      </div>

      <div class="h-8"></div>
    </div>
  </aside>
`;

const navBar = document.getElementById("navBar");
const navContainer = document.getElementById("navContainer");
const navLinks = Array.from(document.querySelectorAll(".navLink"));
const ctaBtn = document.getElementById("ctaBtn");
const menuBtn = document.getElementById("menuBtnMobile");

const overlay = document.getElementById("menuOverlay");
const panel = document.getElementById("menuPanel");
const closeBtn = document.getElementById("closeBtn");

const lockScroll = () => {
  document.documentElement.style.overflow = "hidden";
  document.body.style.overflow = "hidden";
};

const unlockScroll = () => {
  document.documentElement.style.overflow = "";
  document.body.style.overflow = "";
};

const setMenuClosed = (immediate = false) => {
  if (!overlay || !panel) return;
  if (immediate) {
    overlay.style.transition = "none";
    panel.style.transition = "none";
  }
  overlay.classList.add("hidden");
  overlay.classList.add("opacity-0");
  overlay.classList.remove("opacity-100");
  panel.classList.add("translate-x-full");
  panel.classList.remove("translate-x-0");
  panel.style.transform = "translateX(100%)";
  panel.setAttribute("aria-hidden", "true");
  if (menuBtn) menuBtn.setAttribute("aria-expanded", "false");
  unlockScroll();
  if (immediate) {
    overlay.offsetHeight;
    panel.offsetHeight;
    overlay.style.transition = "";
    panel.style.transition = "";
  }
};

const openMenu = () => {
  if (!overlay || !panel) return;
  overlay.classList.remove("hidden");
  lockScroll();
  panel.setAttribute("aria-hidden", "false");
  if (menuBtn) menuBtn.setAttribute("aria-expanded", "true");
  requestAnimationFrame(() => {
    overlay.classList.remove("opacity-0");
    overlay.classList.add("opacity-100");
    panel.classList.remove("translate-x-full");
    panel.classList.add("translate-x-0");
    panel.style.transform = "translateX(0)";
  });
};

const closeMenu = () => {
  if (!overlay || !panel) return;
  overlay.classList.add("opacity-0");
  overlay.classList.remove("opacity-100");
  panel.classList.add("translate-x-full");
  panel.classList.remove("translate-x-0");
  panel.style.transform = "translateX(100%)";
  panel.setAttribute("aria-hidden", "true");
  if (menuBtn) menuBtn.setAttribute("aria-expanded", "false");
  unlockScroll();
  setTimeout(() => overlay.classList.add("hidden"), 300);
};

if (menuBtn) menuBtn.addEventListener("click", openMenu);
if (closeBtn) closeBtn.addEventListener("click", closeMenu);
if (overlay) overlay.addEventListener("click", closeMenu);

const getCurrentPage = () => {
  const p = (window.location.pathname.split("/").pop() || "index.html").split("?")[0];
  return p || "index.html";
};

const applyActiveState = () => {
  const current = getCurrentPage();
  const allDesktop = Array.from(document.querySelectorAll(".navLink"));
  const allMobile = Array.from(document.querySelectorAll(".mLink"));

  allDesktop.forEach((a) => {
    a.removeAttribute("aria-current");
    a.classList.remove("bg-[#E6C17A]/20", "text-[#111827]");
    const href = (a.getAttribute("href") || "").trim();
    if (href === current) {
      a.classList.add("bg-[#E6C17A]/20", "text-[#111827]");
      a.setAttribute("aria-current", "page");
    }
  });

  allMobile.forEach((a) => {
    a.removeAttribute("aria-current");
    a.classList.remove("bg-[#E6C17A]/10", "ring-[#E6C17A]/30");
    const href = (a.getAttribute("href") || "").trim();
    if (href === current) {
      a.classList.add("bg-[#E6C17A]/10");
      a.classList.add("ring-[#E6C17A]/30");
      a.setAttribute("aria-current", "page");
    }
  });
};

const setTopStyle = () => {
  if (navContainer) navContainer.className = "mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 transition-all duration-300";
  if (navBar) navBar.className = "relative mt-3 flex items-center justify-between rounded-2xl px-3 py-2.5 transition-all duration-300 bg-white/55 ring-1 ring-[#777C7C]/15 shadow-sm backdrop-blur";

  navLinks.forEach((a) => {
    a.className =
      "navLink inline-flex items-center rounded-xl px-3 py-2 text-[#2B2F2F] hover:text-[#111827] hover:bg-[#E6C17A]/10 transition";
  });

  if (ctaBtn)
    ctaBtn.className =
      "inline-flex items-center justify-center rounded-2xl bg-[#E6C17A] px-5 py-3 text-sm font-semibold text-[#111827] shadow-lg shadow-[#E6C17A]/20 transition hover:-translate-y-0.5 active:translate-y-0 hover:brightness-95";

  if (menuBtn)
    menuBtn.className =
      "group inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-[#777C7C]/10 text-[#111827] ring-1 ring-[#777C7C]/20 transition hover:bg-[#777C7C]/15 active:scale-[0.98] md:hidden";

  applyActiveState();
};

const setScrolledStyle = () => {
  if (navContainer) navContainer.className = "mx-auto max-w-6xl px-4 sm:px-6 lg:px-10 transition-all duration-300";
  if (navBar) navBar.className = "relative mt-3 flex items-center justify-between rounded-2xl px-3 py-2.5 transition-all duration-300 bg-white/85 ring-1 ring-black/10 shadow-lg shadow-black/5 backdrop-blur";

  navLinks.forEach((a) => {
    a.className =
      "navLink inline-flex items-center rounded-xl px-3 py-2 text-[#2B2F2F] hover:text-[#111827] hover:bg-[#E6C17A]/10 transition";
  });

  if (ctaBtn)
    ctaBtn.className =
      "inline-flex items-center justify-center rounded-2xl bg-[#E6C17A] px-5 py-3 text-sm font-semibold text-[#111827] shadow-lg shadow-[#E6C17A]/20 transition hover:-translate-y-0.5 active:translate-y-0 hover:brightness-95";

  if (menuBtn)
    menuBtn.className =
      "group inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-[#777C7C]/10 text-[#111827] ring-1 ring-[#777C7C]/20 transition hover:bg-[#777C7C]/15 active:scale-[0.98] md:hidden";

  applyActiveState();
};

const applyNavState = () => {
  const atTop = window.scrollY <= 1;
  if (atTop) setTopStyle();
  else setScrolledStyle();
};

let ticking = false;
const onScroll = () => {
  if (ticking) return;
  ticking = true;
  requestAnimationFrame(() => {
    applyNavState();
    ticking = false;
  });
};

window.addEventListener("scroll", onScroll, { passive: true });
window.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeMenu();
});

applyNavState();
setMenuClosed(true);
applyActiveState();
