const STORAGE_KEYS = {
  users: "gwj2-ob-community-users",
  session: "gwj2-ob-community-session",
  posts: "gwj2-ob-community-posts",
  snop: "gwj2-ob-community-snop",
  theme: "gwj2-ob-community-theme",
  notifications: "gwj2-ob-community-notifications",
  calendar: "gwj2-ob-community-calendar",
  calendarFilter: "gwj2-ob-community-calendar-filter",
};

const MAX_UPLOAD_SIZE = {
  postImage: 1536 * 1024,
  postFile: 2048 * 1024,
  avatar: 1024 * 1024,
};

const EMOJI_CATEGORIES = [
  {
    id: "smileys",
    label: "표정",
    icon: "😀",
    emojis: [
      "😀","😃","😄","😁","😆","😅","😂","🤣","🥲","🥹","😊","😇","🙂","🙃","😉","😌","😍","🥰","😘","😗","😙","😚","😋","😛","😝","😜","🤪","🤨","🧐","🤓","😎","🥸","🤩","🥳","😏","😒","😞","😔","😟","😕","🙁","☹","😣","😖","😫","😩","🥺","😢","😭","😤","😠","😡","🤬","🤯","😳","🥵","🥶","😱","😨","😰","😥","😓","🤗","🤔","🤭","🤫","🤥","😶","😐","😑","😬","🙄","😯","😦","😧","😮","😲","🥱","😴","🤤","😪","😵","🤐","🥴","🤢","🤮","🤧","😷","🤒","🤕","🤑","🤠","😈","👿","👹","👺","🤡","💩","👻","💀","☠","👽","👾","🤖","🎃","😺","😸","😹","😻","😼","😽","🙀","😿","😾"
    ],
  },
  {
    id: "gestures",
    label: "제스처/사람",
    icon: "👍",
    emojis: [
      "👋","🤚","🖐","✋","🖖","👌","🤌","🤏","✌","🤞","🤟","🤘","🤙","👈","👉","👆","🖕","👇","☝","👍","👎","✊","👊","🤛","🤜","👏","🙌","👐","🤲","🤝","🙏","✍","💅","🤳","💪","🦾","🦿","🦵","🦶","👂","🦻","👃","🧠","🫀","🫁","🦷","🦴","👀","👁","👅","👄","💋","🧑","👶","👧","👦","👩","👨","🧓","👵","👴","🙇","🙆","🙅","💁","🙋","🧏","🤦","🤷","💇","💆","🧖","💃","🕺","👯","🧍","🚶","🏃","👫","👭","👬","💑","💏","👨‍👩‍👧","🫂"
    ],
  },
  {
    id: "hearts",
    label: "하트/반응",
    icon: "❤",
    emojis: [
      "❤","🧡","💛","💚","💙","💜","🖤","🤍","🤎","💔","❣","💕","💞","💓","💗","💖","💘","💝","💟","♥","💌","💢","💥","💫","💦","💨","🕳","💣","💬","👁‍🗨","🗨","🗯","💭","💤","✨","🌟","⭐","🌠","☄","🔥","🎉","🎊","🎈","🎁","🎀","🏆","🥇","🥈","🥉","🏅","🎖","🏵","🎗","🎫","🎟","🎪","🎭","🎨","🎯","🎳","🎮","🕹","🎰","🎲","🧩","🧸"
    ],
  },
  {
    id: "work",
    label: "업무/사물",
    icon: "💼",
    emojis: [
      "💼","📁","📂","🗂","📅","📆","🗓","📇","📈","📉","📊","📋","📌","📍","📎","🖇","📏","📐","✂","🗃","🗄","🗑","🔒","🔓","🔏","🔐","🔑","🗝","🔨","🪓","⛏","⚒","🛠","🗡","⚔","🔫","🏹","🛡","🔧","🪛","🔩","⚙","🗜","⚖","🦯","🔗","⛓","🪝","🧰","🧲","🪜","🧪","🧫","🧬","🔬","🔭","📡","💉","🩸","💊","🩹","🩺","🚪","🛏","🛋","🪑","🚽","🚿","🛁","🧴","🧷","🧹","🧺","🧻","🪣","🧼","🪥","🪒","🧽","🧯","🛒","🚬","⚰","🪦","⚱","🗿","🏧","🚮","🚰","♿","🚹","🚺","🚻","🚼","🚾","🛂","🛃","🛄","🛅","⚠","🚸","⛔","🚫","🚳","🚭","🚯","🚱","🚷","📵","🔞","💻","🖥","🖨","⌨","🖱","🖲","💽","💾","💿","📀","🧮","🎥","📽","🎞","📞","☎","📟","📠","📺","📻","🎙","🎚","🎛","🧭","⏱","⏲","⏰","🕰","⌛","⏳","📡","🔋","🔌","💡","🔦","🕯","🪔"
    ],
  },
  {
    id: "nature",
    label: "자연/동물",
    icon: "🌿",
    emojis: [
      "🌿","🍀","🌱","🌲","🌳","🌴","🌵","🎋","🎍","🍂","🍃","🍁","🌾","🌺","🌻","🌹","🥀","🌷","💐","🌼","🌸","🍄","🌰","🌞","🌝","🌚","🌛","🌜","🌙","⭐","🌟","✨","⚡","☀","🌤","⛅","🌥","☁","🌦","🌧","⛈","🌩","🌨","❄","☃","⛄","🌬","💨","💧","💦","🌊","🌈","🐶","🐱","🐭","🐹","🐰","🦊","🐻","🐼","🐨","🐯","🦁","🐮","🐷","🐽","🐸","🐵","🙈","🙉","🙊","🐒","🐔","🐧","🐦","🐤","🐣","🐥","🦆","🦅","🦉","🦇","🐺","🐗","🐴","🦄","🐝","🐛","🦋","🐌","🐞","🐜","🦟","🦗","🕷","🕸","🦂","🐢","🐍","🦎","🦖","🦕","🐙","🦑","🦐","🦀","🐡","🐠","🐟","🐬","🐳","🐋","🦈","🐊","🐅","🐆","🦓","🦍","🦧","🐘","🦛","🦏","🐪","🐫","🦒","🦘","🐃","🐂","🐄","🐎","🐖","🐏","🐑","🦙","🐐","🦌","🐕","🐩","🐈","🐓","🦃","🦤","🦚","🦜","🦢","🦩","🕊","🐇","🦝","🦨","🦡","🦦","🦥","🐁","🐀","🐿","🦔"
    ],
  },
  {
    id: "food",
    label: "음식/음료",
    icon: "🍔",
    emojis: [
      "🍏","🍎","🍐","🍊","🍋","🍌","🍉","🍇","🍓","🫐","🍈","🍒","🍑","🥭","🍍","🥥","🥝","🍅","🍆","🥑","🥦","🥬","🥒","🌶","🫑","🌽","🥕","🫒","🧄","🧅","🥔","🍠","🥐","🥯","🍞","🥖","🥨","🧀","🥚","🍳","🧈","🥞","🧇","🥓","🥩","🍗","🍖","🦴","🌭","🍔","🍟","🍕","🥪","🥙","🧆","🌮","🌯","🫔","🥗","🥘","🫕","🥫","🍝","🍜","🍲","🍛","🍣","🍱","🥟","🦪","🍤","🍙","🍚","🍘","🍥","🥠","🥮","🍢","🍡","🍧","🍨","🍦","🥧","🧁","🍰","🎂","🍮","🍭","🍬","🍫","🍿","🍩","🍪","🌰","🥜","🍯","🥛","🍼","☕","🫖","🍵","🧃","🥤","🧋","🍶","🍺","🍻","🥂","🍷","🥃","🍸","🍹","🧉","🍾","🧊","🥄","🍴","🍽","🥣","🥡","🥢","🧂"
    ],
  },
  {
    id: "travel",
    label: "여행/장소",
    icon: "✈",
    emojis: [
      "🚗","🚕","🚙","🚌","🚎","🏎","🚓","🚑","🚒","🚐","🛻","🚚","🚛","🚜","🏍","🛵","🚲","🛴","🛹","🛼","🚨","🚔","🚍","🚘","🚖","🚡","🚠","🚟","🚃","🚋","🚞","🚝","🚄","🚅","🚈","🚂","🚆","🚇","🚊","🚉","✈","🛫","🛬","🛩","💺","🛰","🚀","🛸","🚁","🛶","⛵","🚤","🛥","🛳","⛴","🚢","⚓","⛽","🚧","🚦","🚥","🚏","🗺","🗿","🗽","🗼","🏰","🏯","🏟","🎡","🎢","🎠","⛲","⛱","🏖","🏝","🏜","🌋","⛰","🏔","🗻","🏕","⛺","🏠","🏡","🏘","🏚","🏗","🏭","🏢","🏬","🏣","🏤","🏥","🏦","🏨","🏪","🏫","🏩","💒","🏛","⛪","🕌","🕍","🛕","🕋","⛩","🛤","🛣","🗾","🎑","🏞","🌅","🌄","🌠","🎇","🎆","🌇","🌆","🏙","🌃","🌌","🌉","🌁"
    ],
  },
  {
    id: "symbols",
    label: "기호/국기",
    icon: "🔣",
    emojis: [
      "✅","❎","✔","✖","❌","❗","❓","❕","❔","‼","⁉","💯","🔟","🔢","🔡","🔠","🔤","🅰","🅱","🆎","🆑","🅾","🆘","🆔","🆕","🆓","🆒","🆖","🆗","🆙","🆚","Ⓜ","🉑","㊗","㊙","🈚","🈸","🈴","🈳","🈺","🈵","🈶","🈂","🈷","🈹","🈲","🚸","🚫","🚷","🚳","🚭","🚯","🚱","🚾","🅿","♿","🛗","🈁","🛃","🛄","🛂","🛅","⚠","🚸","⭕","✳","✴","❇","©","®","™","🔚","🔙","🔛","🔝","🔜","〽","⤴","⤵","🔃","🔄","🔀","🔁","🔂","◀","▶","⏪","⏩","⏫","⏬","⏯","⏹","⏺","⏭","⏮","⏸","🔼","🔽","🎵","🎶","➕","➖","➗","✖","🟰","💲","💱","🔱","📛","⚜","〰","➰","➿","✅","☑","🔘","🔴","🟠","🟡","🟢","🔵","🟣","⚫","⚪","🟤","🔺","🔻","🔸","🔹","🔶","🔷","🔳","🔲","▪","▫","◾","◽","◼","◻","⬛","⬜","🟥","🟧","🟨","🟩","🟦","🟪","🟫","🔈","🔉","🔊","🔇","📣","📢","🔔","🔕","🎵","🎶","💬","💭","🗯","♠","♣","♥","♦","🃏","🎴","🀄","🏁","🚩","🎌","🏴","🏳","🏳‍🌈","🏳‍⚧","🏴‍☠"
    ],
  },
];

const EMOJIS = EMOJI_CATEGORIES[0].emojis.slice(0, 6);

const HEART_ICON = "&#x2665;";
const ALLOWED_POSITIONS = new Set(["T/C", "Manager"]);
const rtf = new Intl.RelativeTimeFormat("ko", { numeric: "auto" });
const weekdayFormatter = new Intl.DateTimeFormat("ko-KR", { weekday: "short" });
const weekdayLongFormatter = new Intl.DateTimeFormat("ko-KR", { weekday: "long" });
const timeFormatter = new Intl.DateTimeFormat("ko-KR", { hour: "2-digit", minute: "2-digit", hour12: false });
const snopNumberFormatter = new Intl.NumberFormat("ko-KR", { minimumFractionDigits: 1, maximumFractionDigits: 1 });
const DAY_MS = 24 * 60 * 60 * 1000;

const BOARD_CONFIG = {
  handover: {
    label: "주/야간 인수인계",
    description: "교대 전후로 꼭 이어져야 하는 메모를 장비와 라인 기준으로 정돈해서 공유하는 게시판입니다.",
    heroTitle: "교대 메모를 장비별로 빠르게 이어받으세요.",
    heroDescription: "세부 탭을 접고 펼치면서 필요한 라인만 선별해서 보고, 이미지와 파일까지 함께 정리할 수 있습니다.",
    badgeStyle: {
      background: "linear-gradient(135deg, rgba(140, 130, 255, 0.2), rgba(98, 215, 255, 0.22))",
      color: "#3456b5",
      borderColor: "rgba(94, 141, 255, 0.18)",
    },
  },
  operations: {
    label: "운영간 수정 및 추가사항",
    description: "운영 중 변경되거나 새로 추가된 내용을 빠르게 남기고 모두가 같은 기준으로 움직일 수 있게 정리합니다.",
    heroTitle: "운영 변경사항을 깔끔한 흐름으로 정리하세요.",
    heroDescription: "지금 바로 반영되어야 하는 수정점과 추가사항을 한곳에 묶어서 확인할 수 있습니다.",
    badgeStyle: {
      background: "linear-gradient(135deg, rgba(255, 140, 140, 0.18), rgba(255, 199, 106, 0.2))",
      color: "#b55a41",
      borderColor: "rgba(255, 164, 122, 0.24)",
    },
  },
  knowledge: {
    label: "지식인 공유방",
    description: "현장에서 바로 써먹을 수 있는 팁, 사례, 노하우를 축적하는 지식 공유 공간입니다.",
    heroTitle: "자주 쓰는 팁과 사례를 보기 좋게 저장하세요.",
    heroDescription: "반복되는 문의를 줄이고, 경험이 바로 팀의 자산이 되도록 정돈된 공유 흐름을 제공합니다.",
    badgeStyle: {
      background: "linear-gradient(135deg, rgba(94, 227, 192, 0.18), rgba(98, 215, 255, 0.16))",
      color: "#2d8574",
      borderColor: "rgba(94, 227, 192, 0.22)",
    },
  },
  request: {
    label: "개선 필요 요청사항",
    description: "현장에서 불편한 점과 개선 아이디어를 모아서 우선순위를 맞추고 요청 흐름을 명확히 관리합니다.",
    heroTitle: "개선 요청을 선명하게 모으고 우선순위를 맞추세요.",
    heroDescription: "필요한 요청사항을 놓치지 않도록 좋아요, 멘션, 첨부 공유 흐름까지 자연스럽게 연결했습니다.",
    badgeStyle: {
      background: "linear-gradient(135deg, rgba(255, 142, 199, 0.18), rgba(140, 130, 255, 0.18))",
      color: "#9855b7",
      borderColor: "rgba(199, 134, 255, 0.18)",
    },
  },
};

const HANDOVER_SUBTAB_CONFIG = {
  "it-equipment": {
    label: "IT 장비",
    description: "스캐너, 프린터, 충전기 등 IT 장비 관련 인수인계만 빠르게 모아서 확인합니다.",
    badgeStyle: {
      background: "linear-gradient(135deg, #6f8bff, #5bd3ff)",
      color: "#ffffff",
      borderColor: "rgba(255, 255, 255, 0.16)",
    },
  },
  agv: {
    label: "AGV",
    description: "AGV 이동 상태, 배터리, 경로 이슈처럼 즉시 공유가 필요한 인수인계 흐름을 정리합니다.",
    badgeStyle: {
      background: "linear-gradient(135deg, #51c6ff, #54e1d2)",
      color: "#ffffff",
      borderColor: "rgba(255, 255, 255, 0.16)",
    },
  },
  ace: {
    label: "ACE",
    description: "ACE 라인에서 바로 이어받아야 할 장애, 조치, 체크포인트를 모아서 볼 수 있습니다.",
    badgeStyle: {
      background: "linear-gradient(135deg, #70b4ff, #6d8cff)",
      color: "#ffffff",
      borderColor: "rgba(255, 255, 255, 0.16)",
    },
  },
  "manual-pack": {
    label: "ManualPack",
    description: "ManualPack 공정의 장비 메모와 작업 포인트를 교대 간 끊기지 않게 전달합니다.",
    badgeStyle: {
      background: "linear-gradient(135deg, #ff9dc0, #ffbc7c)",
      color: "#ffffff",
      borderColor: "rgba(255, 255, 255, 0.16)",
    },
  },
  autobag: {
    label: "Autobag",
    description: "Autobag 라인의 자재, 알람, 조치 내용을 짧고 빠르게 이어받도록 정리합니다.",
    badgeStyle: {
      background: "linear-gradient(135deg, #ff8d8d, #ffc062)",
      color: "#ffffff",
      borderColor: "rgba(255, 255, 255, 0.16)",
    },
  },
  "6f-pick": {
    label: "6F PICK",
    description: "6F PICK 구간의 피킹 이슈와 메모를 모아서 교대자가 한눈에 확인할 수 있게 구성했습니다.",
    badgeStyle: {
      background: "linear-gradient(135deg, #73d7ff, #67efb2)",
      color: "#ffffff",
      borderColor: "rgba(255, 255, 255, 0.16)",
    },
  },
  "7-2f-pick": {
    label: "7-2F PICK",
    description: "7-2F PICK의 재고 흐름, 병목 지점, 즉시 조치 사항을 빠르게 전달하는 탭입니다.",
    badgeStyle: {
      background: "linear-gradient(135deg, #8b83ff, #74d7ff)",
      color: "#ffffff",
      borderColor: "rgba(255, 255, 255, 0.16)",
    },
  },
  "7-3f-pick": {
    label: "7-3F PICK",
    description: "7-3F PICK 운영 포인트와 실시간 메모를 정돈된 뱃지 흐름으로 공유합니다.",
    badgeStyle: {
      background: "linear-gradient(135deg, #ff9cb5, #8d84ff)",
      color: "#ffffff",
      borderColor: "rgba(255, 255, 255, 0.16)",
    },
  },
  "8f-orderpicker": {
    label: "8F (Orderpicker) PICK",
    description: "8F 오더피커 구간의 특이사항과 인수인계 포인트를 분리해서 관리할 수 있습니다.",
    badgeStyle: {
      background: "linear-gradient(135deg, #6bd3c1, #6fa8ff)",
      color: "#ffffff",
      borderColor: "rgba(255, 255, 255, 0.16)",
    },
  },
};

const SEED_PROFILES = [
  { id: "seed-manager", nickname: "운영지원", position: "Manager", avatarDataUrl: "" },
  { id: "seed-leader", nickname: "현장리더", position: "Manager", avatarDataUrl: "" },
  { id: "seed-rookie", nickname: "신입메이트", position: "T/C", avatarDataUrl: "" },
  { id: "seed-line-checker", nickname: "라인체커", position: "T/C", avatarDataUrl: "" },
];

const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

const state = {
  user: null,
  activeBoard: "handover",
  activeHandoverTab: "it-equipment",
  handoverExpanded: true,
  feedFilter: "latest",
  theme: "dark",
  snop: {
    selectedDate: "",
  },
  confirm: {
    resolver: null,
  },
  compose: {
    image: null,
    file: null,
  },
  settings: {
    avatarDataUrl: "",
    avatarName: "현재 이미지 없음",
  },
  commentDrafts: {},
  commentFeedback: {},
  feedbackTimers: {},
  notificationTimers: {},
  notificationSeen: new Set(),
  sessionStartAt: Date.now(),
};

const el = {
  appShell: $(".app-shell"),
  cursorGlow: $("[data-cursor-glow]"),
  userPanel: $(".user-panel"),
  userName: $("[data-user-name]"),
  userPosition: $("[data-user-position]"),
  userAvatarImage: $("[data-user-avatar-image]"),
  userAvatarFallback: $("[data-user-avatar-fallback]"),
  logoutButton: $("[data-logout-button]"),
  postCount: $("[data-post-count]"),
  commentCount: $("[data-comment-count]"),
  likeCount: $("[data-like-count]"),
  mentionCount: $("[data-mention-count]"),
  themeToggle: $("[data-theme-toggle]"),
  boardTitle: $("[data-current-board-title]"),
  boardDescription: $("[data-current-board-description]"),
  boardBadge: $("[data-current-board-badge]"),
  subtabBadge: $("[data-current-subtab-badge]"),
  boardTabs: $$("[data-board-tab]"),
  handoverShell: $(".handover-shell"),
  handoverToggle: $("[data-handover-toggle]"),
  handoverPanel: $("[data-handover-panel]"),
  handoverTabs: $$("[data-handover-tab]"),
  heroBadge: $("[data-hero-badge]"),
  heroTitle: $("[data-hero-title]"),
  heroDescription: $("[data-hero-description]"),
  heroPosts: $("[data-hero-posts]"),
  heroMentions: $("[data-hero-mentions]"),
  heroLikes: $("[data-hero-likes]"),
  snopForm: $("[data-snop-form]"),
  snopFeedback: $("[data-snop-feedback]"),
  snopWeekSelector: $("[data-snop-week-selector]"),
  snopDateInput: $('[data-snop-form] [name="date"]'),
  snopValueInput: $('[data-snop-form] [name="value"]'),
  snopTodayValue: $("[data-snop-today-value]"),
  snopTodayMeta: $("[data-snop-today-meta]"),
  snopAverageValue: $("[data-snop-average-value]"),
  snopAverageMeta: $("[data-snop-average-meta]"),
  snopPeakValue: $("[data-snop-peak-value]"),
  snopPeakMeta: $("[data-snop-peak-meta]"),
  snopDeltaValue: $("[data-snop-delta-value]"),
  snopDeltaMeta: $("[data-snop-delta-meta]"),
  snopRange: $("[data-snop-range]"),
  snopCaption: $("[data-snop-caption]"),
  snopChart: $("[data-snop-chart]"),
  composeBoardBadge: $("[data-compose-board-badge]"),
  composeSubtabBadge: $("[data-compose-subtab-badge]"),
  postForm: $("[data-post-form]"),
  postTitle: $('[data-post-form] [name="title"]'),
  postContent: $('[data-post-form] [name="content"]'),
  postFeedback: $("[data-post-feedback]"),
  composeCount: $("[data-compose-count]"),
  postImageInput: $("[data-post-image-input]"),
  postImageName: $("[data-post-image-name]"),
  postFileInput: $("[data-post-file-input]"),
  postFileName: $("[data-post-file-name]"),
  postAttachmentPreview: $("[data-post-attachment-preview]"),
  postImagePreviewBox: $("[data-post-image-preview-box]"),
  postImagePreview: $("[data-post-image-preview]"),
  postFilePreviewBox: $("[data-post-file-preview-box]"),
  postFilePreviewName: $("[data-post-file-preview-name]"),
  postEmojiRow: $("[data-emoji-row='post']"),
  previewBoardBadge: $("[data-preview-board-badge]"),
  previewSubtabBadge: $("[data-preview-subtab-badge]"),
  previewTitle: $("[data-preview-title]"),
  previewContent: $("[data-preview-content]"),
  previewAttachment: $("[data-preview-attachment]"),
  previewImage: $("[data-preview-image]"),
  previewFile: $("[data-preview-file]"),
  filterButtons: $$("[data-feed-filter]"),
  postList: $("[data-post-list]"),
  profileAvatarImage: $("[data-profile-avatar-image]"),
  profileAvatarFallback: $("[data-profile-avatar-fallback]"),
  profileName: $("[data-profile-name]"),
  profilePosition: $("[data-profile-position]"),
  profileNote: $("[data-profile-note]"),
  mentionFeed: $("[data-mention-feed]"),
  settingsOverlay: $("[data-settings-overlay]"),
  settingsForm: $("[data-settings-form]"),
  settingsAvatarInput: $("[data-settings-avatar-input]"),
  settingsAvatarImage: $("[data-settings-avatar-image]"),
  settingsAvatarFallback: $("[data-settings-avatar-fallback]"),
  settingsAvatarName: $("[data-settings-avatar-name]"),
  settingsFeedback: $("[data-settings-feedback]"),
  authOverlay: $("[data-auth-overlay]"),
  authTabs: $$("[data-auth-tab]"),
  authForms: {
    login: $('[data-auth-form="login"]'),
    signup: $('[data-auth-form="signup"]'),
  },
  authFeedback: {
    login: $('[data-auth-feedback="login"]'),
    signup: $('[data-auth-feedback="signup"]'),
  },
  confirmOverlay: $("[data-confirm-overlay]"),
  confirmChip: $("[data-confirm-chip]"),
  confirmTitle: $("[data-confirm-title]"),
  confirmBody: $("[data-confirm-body]"),
  confirmAccept: $("[data-confirm-accept]"),
  confirmCancel: $("[data-confirm-cancel]"),
  confirmClose: $("[data-confirm-close]"),
  notificationRail: $("[data-notification-rail]"),
};

const SYNCED_STORAGE_KEYS = new Set([
  STORAGE_KEYS.posts,
  STORAGE_KEYS.snop,
  STORAGE_KEYS.notifications,
  STORAGE_KEYS.users,
]);

const firebaseBridge = () => (typeof window !== "undefined" ? window.__gwj2Firebase : null);

const readStorage = (key, fallback) => {
  if (SYNCED_STORAGE_KEYS.has(key)) {
    const bridge = firebaseBridge();
    if (bridge) {
      const cached = bridge.read(key);
      if (Array.isArray(cached)) {
        // An empty cache means Firestore has no docs yet — caller decides whether
        // to treat that as "use seed" (posts/snop pass fallback=null) or "empty list".
        if (cached.length === 0 && fallback !== undefined && fallback !== null && !Array.isArray(fallback)) {
          return fallback;
        }
        if (cached.length === 0 && fallback === null) {
          return null;
        }
        return cached;
      }
      return fallback;
    }
  }
  try {
    const value = window.localStorage.getItem(key);
    return value ? JSON.parse(value) : fallback;
  } catch (error) {
    return fallback;
  }
};

const writeStorage = (key, value) => {
  if (SYNCED_STORAGE_KEYS.has(key)) {
    const bridge = firebaseBridge();
    if (bridge) {
      bridge.write(key, value);
      return;
    }
  }
  window.localStorage.setItem(key, JSON.stringify(value));
};

const clearSession = () => {
  window.localStorage.removeItem(STORAGE_KEYS.session);
};

const clean = (value) => `${value ?? ""}`.trim();
const uniqueIds = (items) => [...new Set((Array.isArray(items) ? items : []).map((item) => `${item}`.trim()).filter(Boolean))];

const createId = (prefix) =>
  `${prefix}-${window.crypto?.randomUUID?.() ?? `${Date.now()}-${Math.random().toString(16).slice(2)}`}`;

const escapeHtml = (value) =>
  `${value ?? ""}`
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");

const richText = (value) =>
  escapeHtml(value).replace(/(@[^\s@<]+)/gu, '<span class="mention-token">$1</span>').replace(/\n/g, "<br>");

const avatarLetter = (name) => {
  const text = clean(name);
  return text ? text.charAt(0).toUpperCase() : "G";
};

const formatBytes = (size) => {
  const value = Number(size ?? 0);
  if (value < 1024) return `${value} B`;
  if (value < 1024 * 1024) return `${(value / 1024).toFixed(1)} KB`;
  return `${(value / (1024 * 1024)).toFixed(1)} MB`;
};

const relativeTime = (timestamp) => {
  const diff = Math.round((Number(timestamp) - Date.now()) / 1000);
  const abs = Math.abs(diff);
  if (abs < 60) return rtf.format(diff, "second");
  const minutes = Math.round(diff / 60);
  if (Math.abs(minutes) < 60) return rtf.format(minutes, "minute");
  const hours = Math.round(minutes / 60);
  if (Math.abs(hours) < 24) return rtf.format(hours, "hour");
  return rtf.format(Math.round(hours / 24), "day");
};

const startOfLocalDay = (date = new Date()) => new Date(date.getFullYear(), date.getMonth(), date.getDate());

const dateKeyFromDate = (date = new Date()) => {
  const year = date.getFullYear();
  const month = `${date.getMonth() + 1}`.padStart(2, "0");
  const day = `${date.getDate()}`.padStart(2, "0");
  return `${year}-${month}-${day}`;
};

const dateFromKey = (key) => {
  if (!/^\d{4}-\d{2}-\d{2}$/u.test(clean(key))) return null;
  const [year, month, day] = key.split("-").map(Number);
  return new Date(year, month - 1, day);
};

const addDays = (date, days) => new Date(date.getFullYear(), date.getMonth(), date.getDate() + days);

const currentWeekDateKeys = (referenceDate = new Date()) => {
  const today = startOfLocalDay(referenceDate);
  const sunday = addDays(today, -today.getDay());
  return Array.from({ length: 7 }, (_, index) => dateKeyFromDate(addDays(sunday, index)));
};

const currentWeekEditableDateKeys = (referenceDate = new Date()) => {
  const todayKey = dateKeyFromDate(referenceDate);
  return currentWeekDateKeys(referenceDate).filter((key) => key <= todayKey);
};

const recentSevenDateKeys = (referenceDate = new Date()) => {
  const today = startOfLocalDay(referenceDate);
  return Array.from({ length: 7 }, (_, index) => dateKeyFromDate(addDays(today, index - 6)));
};

const snopReferenceDate = () => dateFromKey(state.snop.selectedDate) ?? new Date();

const formatShortDate = (key) => {
  const date = dateFromKey(key);
  return date ? `${date.getMonth() + 1}/${date.getDate()}` : key;
};

const formatLongDate = (key) => {
  const date = dateFromKey(key);
  return date ? `${date.getMonth() + 1}월 ${date.getDate()}일 ${weekdayFormatter.format(date)}` : key;
};

const formatSnopValue = (value, fallback = "-") => (Number.isFinite(Number(value)) ? snopNumberFormatter.format(Number(value)) : fallback);

const formatSnopDelta = (value, fallback = "-") => {
  if (!Number.isFinite(value)) return fallback;
  const prefix = value > 0 ? "+" : "";
  return `${prefix}${snopNumberFormatter.format(Number(value))}`;
};

const wait = (duration) => new Promise((resolve) => window.setTimeout(resolve, duration));

const normalizeUser = (user) => ({
  id: clean(user?.id),
  password: `${user?.password ?? ""}`,
  nickname: clean(user?.nickname),
  position: user?.position === "Manager" ? "Manager" : "T/C",
  avatarDataUrl: clean(user?.avatarDataUrl ?? user?.avatar ?? user?.profileImage),
});

const normalizeSession = (session) => {
  if (!session || typeof session !== "object") return null;
  return {
    id: clean(session.id),
    nickname: clean(session.nickname),
    position: session.position === "Manager" ? "Manager" : "T/C",
    avatarDataUrl: clean(session.avatarDataUrl),
  };
};

const normalizeAttachment = (attachment) => {
  if (!attachment || typeof attachment !== "object") return null;
  const name = clean(attachment.name);
  const dataUrl = clean(attachment.dataUrl);
  if (!name || !dataUrl) return null;
  return {
    name,
    dataUrl,
    type: clean(attachment.type) || "application/octet-stream",
    size: Number(attachment.size ?? 0),
  };
};

const normalizeComment = (comment) => ({
  id: clean(comment?.id) || createId("comment"),
  content: `${comment?.content ?? ""}`,
  authorId: clean(comment?.authorId) || "unknown",
  authorName: clean(comment?.authorName),
  position: comment?.position === "Manager" ? "Manager" : "T/C",
  createdAt: Number(comment?.createdAt ?? Date.now()),
  likes: uniqueIds(comment?.likes),
});

const normalizePost = (post) => {
  const board = Object.hasOwn(BOARD_CONFIG, post?.board) ? post.board : "handover";
  const subtab = board === "handover" && Object.hasOwn(HANDOVER_SUBTAB_CONFIG, post?.subtab) ? post.subtab : board === "handover" ? "it-equipment" : "";
  return {
    id: clean(post?.id) || createId("post"),
    title: `${post?.title ?? ""}`,
    content: `${post?.content ?? ""}`,
    board,
    subtab,
    authorId: clean(post?.authorId) || "unknown",
    authorName: clean(post?.authorName),
    position: post?.position === "Manager" ? "Manager" : "T/C",
    createdAt: Number(post?.createdAt ?? Date.now()),
    likes: uniqueIds(post?.likes),
    reactions: normalizeReactions(post?.reactions),
    attachments: {
      image: normalizeAttachment(post?.attachments?.image),
      file: normalizeAttachment(post?.attachments?.file),
    },
    comments: Array.isArray(post?.comments) ? post.comments.map(normalizeComment) : [],
  };
};

const normalizeReactions = (raw) => {
  const out = {};
  if (!raw || typeof raw !== "object") return out;
  Object.entries(raw).forEach(([emoji, ids]) => {
    const list = uniqueIds(ids);
    if (emoji && list.length) out[emoji] = list;
  });
  return out;
};

const normalizeSnopEntry = (entry) => {
  const date = clean(entry?.date);
  const value = Number(entry?.value);
  if (!/^\d{4}-\d{2}-\d{2}$/u.test(date) || !Number.isFinite(value) || value < 0) return null;
  return {
    date,
    value: Number(value.toFixed(1)),
    authorId: clean(entry?.authorId),
    authorName: clean(entry?.authorName),
    updatedAt: Number(entry?.updatedAt ?? Date.now()),
  };
};

const buildSeedSnopEntries = () => {
  const seedValues = [92.8, 94.1, 95.4, 94.9, 97.3, 98.1, 99.2];
  const authorSequence = ["운영지원", "현장리더"];
  return recentSevenDateKeys()
    .map((date, index) =>
      normalizeSnopEntry({
        date,
        value: seedValues[index] ?? 0,
        authorId: index % 2 === 0 ? "seed-manager" : "seed-leader",
        authorName: authorSequence[index % authorSequence.length],
        updatedAt: dateFromKey(date)?.getTime() ?? Date.now(),
      }),
    )
    .filter(Boolean);
};

const buildSeedPosts = () => [
  normalizePost({
    id: "seed-post-1",
    board: "handover",
    subtab: "it-equipment",
    title: "야간 교대 전 스캐너 충전 상태 확인",
    content: "02시 이후 스캐너 3번 배터리 소모가 빨라졌습니다. 교대 전 충전독 상태 점검 부탁드립니다. @현장리더",
    authorId: "seed-manager",
    authorName: "운영지원",
    position: "Manager",
    createdAt: Date.now() - 1000 * 60 * 36,
    likes: ["seed-line-checker", "seed-rookie"],
    comments: [
      {
        id: "seed-comment-1",
        content: "충전독 2번 접점 청소 완료했습니다. 오전 시작 전에 한 번 더 확인할게요.",
        authorId: "seed-leader",
        authorName: "현장리더",
        position: "Manager",
        createdAt: Date.now() - 1000 * 60 * 18,
        likes: ["seed-rookie"],
      },
    ],
  }),
  normalizePost({
    id: "seed-post-2",
    board: "handover",
    subtab: "agv",
    title: "AGV 4번 라인 회차 지연 공유",
    content: "새벽 4시 전후로 AGV 4번이 회차 지연이 있었습니다. 같은 현상 보이면 바로 댓글로 남겨주세요.",
    authorId: "seed-line-checker",
    authorName: "라인체커",
    position: "T/C",
    createdAt: Date.now() - 1000 * 60 * 92,
    likes: ["seed-manager"],
    comments: [
      {
        id: "seed-comment-2",
        content: "오늘 아침에는 정상으로 복귀했습니다. 경로 로그는 별도로 확인 중입니다.",
        authorId: "seed-leader",
        authorName: "현장리더",
        position: "Manager",
        createdAt: Date.now() - 1000 * 60 * 54,
        likes: ["seed-manager", "seed-rookie"],
      },
    ],
  }),
  normalizePost({
    id: "seed-post-3",
    board: "handover",
    subtab: "manual-pack",
    title: "ManualPack 라벨 위치 조정 메모",
    content: "출고 라벨 위치를 2cm 위로 올려야 스캔이 더 안정적입니다. 다음 조에서도 동일 기준으로 부탁드립니다.",
    authorId: "seed-rookie",
    authorName: "신입메이트",
    position: "T/C",
    createdAt: Date.now() - 1000 * 60 * 150,
    likes: ["seed-line-checker"],
    comments: [],
  }),
  normalizePost({
    id: "seed-post-4",
    board: "operations",
    title: "출고 마감 기준 시간 수정 안내",
    content: "오늘부터 오후 5시 40분 이후 접수 건은 야간 흐름으로 넘깁니다. 현장 공지판에도 동일하게 반영 부탁드립니다.",
    authorId: "seed-manager",
    authorName: "운영지원",
    position: "Manager",
    createdAt: Date.now() - 1000 * 60 * 220,
    likes: ["seed-leader", "seed-line-checker"],
    comments: [
      {
        id: "seed-comment-3",
        content: "라인 브리핑 때 같이 안내하겠습니다.",
        authorId: "seed-leader",
        authorName: "현장리더",
        position: "Manager",
        createdAt: Date.now() - 1000 * 60 * 200,
        likes: ["seed-manager"],
      },
    ],
  }),
  normalizePost({
    id: "seed-post-5",
    board: "knowledge",
    title: "피킹 오류 줄이는 빠른 체크 팁",
    content: "바코드가 튀는 경우에는 장비 재로그인보다 스캔 렌즈 먼지 확인이 먼저입니다. @신입메이트 참고용으로 남깁니다.",
    authorId: "seed-line-checker",
    authorName: "라인체커",
    position: "T/C",
    createdAt: Date.now() - 1000 * 60 * 300,
    likes: ["seed-rookie", "seed-manager", "seed-leader"],
    comments: [
      {
        id: "seed-comment-4",
        content: "렌즈 청소 후 오류 빈도가 확실히 줄었습니다.",
        authorId: "seed-rookie",
        authorName: "신입메이트",
        position: "T/C",
        createdAt: Date.now() - 1000 * 60 * 260,
        likes: ["seed-manager", "seed-line-checker"],
      },
    ],
  }),
  normalizePost({
    id: "seed-post-6",
    board: "request",
    title: "포장대 하단 선반 정리 개선 요청",
    content: "자주 쓰는 부자재 위치가 아래로 몰려 있어서 허리 부담이 큽니다. 선반 위치 조정 검토 부탁드립니다. @운영지원",
    authorId: "seed-rookie",
    authorName: "신입메이트",
    position: "T/C",
    createdAt: Date.now() - 1000 * 60 * 420,
    likes: ["seed-leader", "seed-line-checker"],
    comments: [
      {
        id: "seed-comment-5",
        content: "동선 기준으로 한 번 더 정리해서 제안드리겠습니다.",
        authorId: "seed-leader",
        authorName: "현장리더",
        position: "Manager",
        createdAt: Date.now() - 1000 * 60 * 390,
        likes: ["seed-manager"],
      },
    ],
  }),
];

const usersAll = () => {
  const users = readStorage(STORAGE_KEYS.users, []);
  return Array.isArray(users) ? users.map(normalizeUser).filter((user) => user.id) : [];
};

const postsAll = () => {
  const stored = readStorage(STORAGE_KEYS.posts, null);
  if (!Array.isArray(stored)) {
    const seeded = buildSeedPosts();
    writeStorage(STORAGE_KEYS.posts, seeded);
    return seeded;
  }
  return stored.map(normalizePost);
};

const snopAll = () => {
  const stored = readStorage(STORAGE_KEYS.snop, null);
  if (!Array.isArray(stored)) {
    const seeded = buildSeedSnopEntries();
    writeStorage(STORAGE_KEYS.snop, seeded);
    return seeded;
  }
  return stored.map(normalizeSnopEntry).filter(Boolean).sort((a, b) => a.date.localeCompare(b.date));
};

const saveUsers = (users) => writeStorage(STORAGE_KEYS.users, users.map(normalizeUser));
const savePosts = (posts) => writeStorage(STORAGE_KEYS.posts, posts.map(normalizePost));
const saveSession = (session) => writeStorage(STORAGE_KEYS.session, normalizeSession(session));
const saveSnopEntries = (entries) =>
  writeStorage(
    STORAGE_KEYS.snop,
    entries.map(normalizeSnopEntry).filter(Boolean).sort((a, b) => a.date.localeCompare(b.date)),
  );

const buildUserSession = (user) => ({
  id: user.id,
  nickname: user.nickname,
  position: user.position,
  avatarDataUrl: user.avatarDataUrl || "",
});

const findStoredUser = (id) => usersAll().find((user) => user.id === id) ?? null;

const findProfile = (id, fallback = {}) => {
  const user = findStoredUser(id);
  if (user) return user;
  return (
    SEED_PROFILES.find((profile) => profile.id === id) ?? {
      id: clean(id) || "unknown",
      nickname: clean(fallback.nickname) || clean(fallback.authorName) || "알 수 없음",
      position: fallback.position === "Manager" ? "Manager" : "T/C",
      avatarDataUrl: clean(fallback.avatarDataUrl),
    }
  );
};

const allProfiles = () => {
  const profiles = [...SEED_PROFILES, ...usersAll()];
  const seen = new Set();
  return profiles.filter((profile) => {
    const key = clean(profile.nickname).toLowerCase();
    if (!key || seen.has(key)) return false;
    seen.add(key);
    return true;
  });
};

const authService = {
  async getSession() {
    const session = normalizeSession(readStorage(STORAGE_KEYS.session, null));
    if (!session?.id) return null;
    const user = findStoredUser(session.id);
    if (!user) {
      clearSession();
      return null;
    }
    const nextSession = buildUserSession(user);
    saveSession(nextSession);
    return nextSession;
  },
  async login({ id, password }) {
    await wait(120);
    const user = findStoredUser(id);
    if (!user || user.password !== password) {
      throw new Error("아이디 또는 비밀번호를 확인해 주세요.");
    }
    const session = buildUserSession(user);
    saveSession(session);
    return session;
  },
  async signup({ id, password, nickname, position }) {
    await wait(140);
    const users = usersAll();
    if (users.some((user) => user.id === id)) {
      throw new Error("이미 사용 중인 아이디입니다.");
    }
    if (!ALLOWED_POSITIONS.has(position)) {
      throw new Error("직위를 다시 선택해 주세요.");
    }
    const nextUser = normalizeUser({ id, password, nickname, position, avatarDataUrl: "" });
    saveUsers([...users, nextUser]);
    const session = buildUserSession(nextUser);
    saveSession(session);
    return session;
  },
  async logout() {
    await wait(80);
    clearSession();
  },
};

const readFileAsDataUrl = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () =>
      resolve({
        name: file.name,
        type: file.type || "application/octet-stream",
        size: file.size,
        dataUrl: `${reader.result ?? ""}`,
      });
    reader.onerror = () => reject(new Error("파일을 읽는 중 문제가 발생했습니다."));
    reader.readAsDataURL(file);
  });

const setTimedFeedback = (key, node, message = "", duration = 0) => {
  if (!node) return;
  node.textContent = message;
  node.hidden = !message;
  if (state.feedbackTimers[key]) {
    window.clearTimeout(state.feedbackTimers[key]);
    state.feedbackTimers[key] = 0;
  }
  if (message && duration > 0) {
    state.feedbackTimers[key] = window.setTimeout(() => {
      if (node.textContent === message) {
        node.textContent = "";
        node.hidden = true;
      }
    }, duration);
  }
};

const setNodeText = (node, value = "") => {
  if (!node) return;
  node.textContent = value;
};

const readThemePreference = () => {
  const theme = readStorage(STORAGE_KEYS.theme, "dark");
  return theme === "light" ? "light" : "dark";
};

const syncThemeToggle = () => {
  if (!el.themeToggle) return;
  const isDark = state.theme === "dark";
  const nextLabel = isDark ? "다크" : "라이트";
  const labelEl = el.themeToggle.querySelector("[data-theme-toggle-label]");
  if (labelEl) labelEl.textContent = nextLabel;
  el.themeToggle.setAttribute("aria-pressed", String(!isDark));
  el.themeToggle.setAttribute("title", `${isDark ? "라이트" : "다크"} 모드로 전환`);
};

const applyTheme = (theme) => {
  state.theme = theme === "light" ? "light" : "dark";
  document.body.dataset.theme = state.theme;
  writeStorage(STORAGE_KEYS.theme, state.theme);
  syncThemeToggle();
};

const toggleTheme = () => {
  applyTheme(state.theme === "dark" ? "light" : "dark");
};

const normalizeNotification = (item) => {
  const title = clean(item?.title);
  const body = clean(item?.body);
  if (!title && !body) return null;
  return {
    id: clean(item?.id) || createId("notification"),
    title: title || "알림",
    body,
    tone: ["info", "success", "warning", "danger"].includes(clean(item?.tone)) ? clean(item?.tone) : "info",
    createdAt: Number(item?.createdAt ?? Date.now()),
    read: Boolean(item?.read),
  };
};

const notificationsAll = () => {
  const stored = readStorage(STORAGE_KEYS.notifications, []);
  return Array.isArray(stored)
    ? stored.map(normalizeNotification).filter(Boolean).sort((a, b) => b.createdAt - a.createdAt)
    : [];
};

const saveNotifications = (items) => writeStorage(STORAGE_KEYS.notifications, items.map(normalizeNotification).filter(Boolean));

const unreadNotifications = () => notificationsAll().filter((item) => !item.read);

const markNotificationRead = (id) => {
  const next = notificationsAll().map((item) => (item.id === id ? { ...item, read: true } : item));
  if (state.notificationTimers[id]) {
    window.clearTimeout(state.notificationTimers[id]);
    delete state.notificationTimers[id];
  }
  saveNotifications(next);
};

const pushNotification = ({ title, body = "", tone = "info" }) => {
  const next = [{ id: createId("notification"), title, body, tone, createdAt: Date.now(), read: false }, ...notificationsAll()].slice(0, 40);
  saveNotifications(next);
  renderNotificationRail();
};

const collapseNotificationLater = (id) => {
  if (state.notificationTimers[id]) window.clearTimeout(state.notificationTimers[id]);
  state.notificationTimers[id] = window.setTimeout(() => {
    const node = $(`[data-notification-id="${id}"]`);
    if (node) node.classList.add("is-collapsed");
  }, 4600);
};

const renderNotificationRail = () => {
  if (!el.notificationRail) return;
  if (!state.user) {
    el.notificationRail.innerHTML = "";
    return;
  }
  const items = unreadNotifications()
    .filter((item) => !state.notificationSeen.has(item.id))
    .filter((item) => (item.createdAt || 0) >= state.sessionStartAt) // only notifications from this session
    .slice(0, 3);
  el.notificationRail.innerHTML = items
    .map(
      (item) => `
        <article class="notification-card notification-${escapeHtml(item.tone)}" data-notification-id="${escapeHtml(item.id)}">
          <div class="notification-copy">
            <strong class="notification-title">${escapeHtml(item.title)}</strong>
            ${item.body ? `<p class="notification-body">${escapeHtml(item.body)}</p>` : ""}
          </div>
          <button class="notification-close" type="button" data-notification-close="${escapeHtml(item.id)}">확인</button>
        </article>
      `,
    )
    .join("");
  items.forEach((item) => {
    state.notificationSeen.add(item.id);
    collapseNotificationLater(item.id);
  });
};

const openConfirmDialog = ({ title, body = "", chip = "확인", confirmLabel = "확인", cancelLabel = "취소", tone = "warning" }) =>
  new Promise((resolve) => {
    if (!el.confirmOverlay || !el.confirmAccept || !el.confirmCancel) {
      resolve(window.confirm(`${title}\n\n${body}`));
      return;
    }
    if (state.confirm.resolver) state.confirm.resolver(false);
    state.confirm.resolver = resolve;
    el.confirmOverlay.hidden = false;
    document.body.classList.add("is-modal-open");
    setNodeText(el.confirmChip, chip);
    setNodeText(el.confirmTitle, title);
    setNodeText(el.confirmBody, body);
    setNodeText(el.confirmAccept, confirmLabel);
    setNodeText(el.confirmCancel, cancelLabel);
    el.confirmOverlay.dataset.tone = tone;
    el.confirmAccept.focus();
  });

const closeConfirmDialog = (accepted) => {
  if (!el.confirmOverlay) return;
  el.confirmOverlay.hidden = true;
  document.body.classList.remove("is-modal-open");
  const resolver = state.confirm.resolver;
  state.confirm.resolver = null;
  if (resolver) resolver(Boolean(accepted));
};

const getSnopDom = () => ({
  form: el.snopForm ?? $("[data-snop-form]"),
  feedback: el.snopFeedback ?? $("[data-snop-feedback]"),
  weekSelector: el.snopWeekSelector ?? $("[data-snop-week-selector]"),
  dateInput: el.snopDateInput ?? $('[data-snop-form] [name="date"]'),
  valueInput: el.snopValueInput ?? $('[data-snop-form] [name="value"]'),
  todayValue: el.snopTodayValue ?? $("[data-snop-today-value]"),
  todayMeta: el.snopTodayMeta ?? $("[data-snop-today-meta]"),
  averageValue: el.snopAverageValue ?? $("[data-snop-average-value]"),
  averageMeta: el.snopAverageMeta ?? $("[data-snop-average-meta]"),
  peakValue: el.snopPeakValue ?? $("[data-snop-peak-value]"),
  peakMeta: el.snopPeakMeta ?? $("[data-snop-peak-meta]"),
  deltaValue: el.snopDeltaValue ?? $("[data-snop-delta-value]"),
  deltaMeta: el.snopDeltaMeta ?? $("[data-snop-delta-meta]"),
  range: el.snopRange ?? $("[data-snop-range]"),
  caption: el.snopCaption ?? $("[data-snop-caption]"),
  chart: el.snopChart ?? $("[data-snop-chart]"),
});

const setBadge = (node, label, style = null, hidden = false) => {
  if (!node) return;
  node.hidden = hidden;
  if (hidden) return;
  node.textContent = label;
  node.style.background = style?.background ?? "";
  node.style.color = style?.color ?? "";
  node.style.borderColor = style?.borderColor ?? "";
};

const setAvatar = (imageNode, fallbackNode, profile) => {
  if (!imageNode || !fallbackNode) return;
  const nickname = clean(profile?.nickname) || "GWJ2";
  const avatarDataUrl = clean(profile?.avatarDataUrl);
  fallbackNode.textContent = avatarLetter(nickname);
  if (avatarDataUrl) {
    imageNode.src = avatarDataUrl;
    imageNode.alt = `${nickname} 프로필 이미지`;
    imageNode.hidden = false;
    fallbackNode.hidden = true;
  } else {
    imageNode.removeAttribute("src");
    imageNode.alt = "";
    imageNode.hidden = true;
    fallbackNode.hidden = false;
  }
};

const currentMentionToken = () => (state.user?.nickname ? `@${state.user.nickname}` : "");
const textHasMention = (text) => (currentMentionToken() ? `${text ?? ""}`.includes(currentMentionToken()) : false);

const postHasMention = (post) =>
  textHasMention(post.title) || textHasMention(post.content) || post.comments.some((comment) => textHasMention(comment.content));

const collectMentionRecords = (posts) => {
  if (!state.user?.nickname) return [];
  const records = [];
  posts.forEach((post) => {
    if (textHasMention(post.title) || textHasMention(post.content)) {
      records.push({
        kind: "게시글",
        board: post.board,
        subtab: post.subtab,
        title: post.title,
        excerpt: post.content,
        createdAt: post.createdAt,
      });
    }
    post.comments.forEach((comment) => {
      if (!textHasMention(comment.content)) return;
      records.push({
        kind: "댓글",
        board: post.board,
        subtab: post.subtab,
        title: post.title,
        excerpt: comment.content,
        createdAt: comment.createdAt,
      });
    });
  });
  return records.sort((a, b) => b.createdAt - a.createdAt);
};

const getBoardScopedPosts = (posts) =>
  posts.filter((post) => {
    if (state.activeBoard !== post.board) return false;
    if (state.activeBoard !== "handover") return true;
    return post.subtab === state.activeHandoverTab;
  });

const engagementScore = (post) => post.likes.length + post.comments.reduce((sum, comment) => sum + comment.likes.length, 0);

const sortPosts = (posts) => {
  const copy = [...posts];
  if (state.feedFilter === "likes") {
    return copy.sort((a, b) => {
      const score = engagementScore(b) - engagementScore(a);
      return score === 0 ? b.createdAt - a.createdAt : score;
    });
  }
  return copy.sort((a, b) => b.createdAt - a.createdAt);
};

const getVisiblePosts = (posts) => {
  const scoped = getBoardScopedPosts(posts);
  const filtered = state.feedFilter === "mentions" ? scoped.filter(postHasMention) : scoped;
  return sortPosts(filtered);
};

const likeTooltipText = (likes) => {
  if (!likes.length) return "아직 좋아요가 없습니다.";
  const names = likes.map((id) => findProfile(id).nickname || "알 수 없음");
  return `좋아요: ${names.join(", ")}`;
};

const boardHeadline = () => {
  const board = BOARD_CONFIG[state.activeBoard];
  if (state.activeBoard !== "handover") {
    return {
      title: board.label,
      description: board.description,
      heroBadge: board.label,
      heroTitle: board.heroTitle,
      heroDescription: board.heroDescription,
    };
  }
  const subtab = HANDOVER_SUBTAB_CONFIG[state.activeHandoverTab];
  return {
    title: board.label,
    description: subtab.description,
    heroBadge: `${board.label} · ${subtab.label}`,
    heroTitle: `${subtab.label} 인수인계를 한 번에 이어받으세요.`,
    heroDescription: `${subtab.description} 멘션과 첨부, 좋아요 흐름까지 같은 화면에서 자연스럽게 이어집니다.`,
  };
};

const recentSnopSeries = () => {
  const entries = new Map(snopAll().map((entry) => [entry.date, entry]));
  const todayKey = dateKeyFromDate(new Date());
  return currentWeekDateKeys(snopReferenceDate()).map((date) => {
    const entry = entries.get(date) ?? null;
    const parsedDate = dateFromKey(date);
    return {
      date,
      shortLabel: formatShortDate(date),
      dayLabel: parsedDate ? weekdayLongFormatter.format(parsedDate) : "",
      isToday: date === todayKey,
      entry,
      value: entry?.value ?? null,
      authorName: entry?.authorName ?? "",
      updatedAt: entry?.updatedAt ?? 0,
    };
  });
};

const buildSnopPathSegments = (points) => {
  const lineSegments = [];
  let buffer = [];

  const flush = () => {
    if (!buffer.length) return;
    const line = buffer
      .map((point, index) => `${index === 0 ? "M" : "L"} ${point.x.toFixed(1)} ${point.y.toFixed(1)}`)
      .join(" ");
    lineSegments.push(line);
    buffer = [];
  };

  points.forEach((point) => {
    if (point.y == null) {
      flush();
      return;
    }
    buffer.push(point);
  });
  flush();

  return {
    line: lineSegments.join(" "),
  };
};

const renderSnopWeekSelector = (series, selectedDate) => {
  const snopDom = getSnopDom();
  if (!snopDom.weekSelector) return;
  const todayKey = dateKeyFromDate(new Date());
  snopDom.weekSelector.innerHTML = series
    .map(
      (item) => `
        <button
          class="snop-date-chip ${item.date === selectedDate ? "is-active" : ""}${item.isToday ? " is-today" : ""}"
          type="button"
          data-snop-date-option="${escapeHtml(item.date)}"
          ${item.date > todayKey ? "disabled" : ""}
          aria-pressed="${item.date === selectedDate ? "true" : "false"}"
        >
          <span class="snop-date-chip-day">${escapeHtml(item.dayLabel)}</span>
          <span class="snop-date-chip-date">${escapeHtml(item.shortLabel)}</span>
        </button>
      `,
    )
    .join("");
};

const buildSnopChartMarkup = (series) => {
  const available = series.filter((item) => Number.isFinite(item.value));
  if (!available.length) {
    return `<div class="snop-empty-state">이번 주 SNOP가 아직 없습니다. 그래프 상단 입력칸에서 값을 먼저 저장해 주세요.</div>`;
  }

  const values = available.map((item) => item.value);
  const valueMin = Math.min(...values);
  const valueMax = Math.max(...values);
  const spread = Math.max(valueMax - valueMin, 0.6);
  const valuePadding = Math.max(0.8, spread * 0.24);
  const paddedMin = Math.max(0, valueMin - valuePadding);
  const paddedMax = valueMax + valuePadding;
  const guideValues = Array.from({ length: 4 }, (_, index) => {
    const ratio = index / 3;
    const value = paddedMax - (paddedMax - paddedMin) * ratio;
    return Number(Math.max(0, value).toFixed(1));
  });
  const chartWidth = 700;
  const chartHeight = 192;
  const step = chartWidth / series.length;
  const projectY = (value) => ((paddedMax - value) / Math.max(paddedMax - paddedMin, 1)) * (chartHeight - 18) + 9;
  const points = series.map((item, index) => ({
    ...item,
    x: step * index + step / 2,
    y: item.value == null ? null : projectY(item.value),
  }));
  const { line } = buildSnopPathSegments(points);
  const todayPoint = points.find((point) => point.isToday) ?? null;

  return `
    <div class="snop-chart-grid" role="img" aria-label="이번 주 SNOP 막대 및 추세 그래프">
      <div class="snop-chart-guides">
        ${guideValues
          .map(
            (value) => `
              <div class="snop-guide-row">
                <span class="snop-guide-line"></span>
                <span class="snop-guide-label">${escapeHtml(formatSnopValue(value))}</span>
              </div>
            `,
          )
          .join("")}
      </div>
      <div class="snop-chart-plot">
        <div class="snop-bars">
          ${series
            .map((point) => {
              const normalized = point.value == null ? 0 : (point.value - paddedMin) / Math.max(paddedMax - paddedMin, 1);
              const height = point.value == null ? 10 : Math.max(18, Math.round(20 + normalized * 72));
              return `
                <article class="snop-column ${point.isToday ? "is-today" : ""}${point.value == null ? " is-empty" : ""}">
                  <div class="snop-column-head">
                    <strong class="snop-column-value">${point.value == null ? "-" : escapeHtml(formatSnopValue(point.value))}</strong>
                    ${point.isToday ? `<span class="snop-column-badge">오늘</span>` : ""}
                  </div>
                  <div class="snop-column-track">
                    <div class="snop-column-bar" style="height: ${height}%"></div>
                  </div>
                  <div class="snop-column-footer">
                    <strong class="snop-column-day ${point.isToday ? "is-today" : ""}">${escapeHtml(point.dayLabel)}</strong>
                    <span class="snop-column-date">${escapeHtml(point.shortLabel)}</span>
                  </div>
                </article>
              `;
            })
            .join("")}
        </div>
        <svg class="snop-line-overlay" viewBox="0 0 ${chartWidth} ${chartHeight}" preserveAspectRatio="none" aria-hidden="true">
          ${guideValues
            .map((_, index) => {
              const y = (chartHeight * index) / 3;
              return `<line class="snop-overlay-guide" x1="0" y1="${y.toFixed(1)}" x2="${chartWidth}" y2="${y.toFixed(1)}"></line>`;
            })
            .join("")}
          ${
            todayPoint?.y != null
              ? `<rect class="snop-overlay-today-band" x="${(todayPoint.x - step * 0.24).toFixed(1)}" y="0" width="${(step * 0.48).toFixed(1)}" height="${chartHeight}" rx="16"></rect>`
              : ""
          }
          ${line ? `<path class="snop-trend-path" d="${line}"></path>` : ""}
          ${points
            .map((point) => {
              if (point.y == null) return "";
              return `
                <circle class="snop-trend-dot${point.isToday ? " is-today" : ""}" cx="${point.x.toFixed(1)}" cy="${point.y.toFixed(1)}" r="${point.isToday ? 6 : 4}"></circle>
                ${point.isToday ? `<circle class="snop-trend-ring" cx="${point.x.toFixed(1)}" cy="${point.y.toFixed(1)}" r="10"></circle>` : ""}
              `;
            })
            .join("")}
        </svg>
      </div>
    </div>
  `;
};

const buildSnopChartPanel = (series) => {
  const available = series.filter((item) => Number.isFinite(item.value));
  if (!available.length) {
    return `<div class="snop-empty-state">최근 7일 SNOP 데이터가 아직 없습니다. 위 날짜칩에서 기준일을 고르고 값을 먼저 저장해 주세요.</div>`;
  }

  const values = available.map((item) => item.value);
  const valueMin = Math.min(...values);
  const valueMax = Math.max(...values);
  const spread = Math.max(valueMax - valueMin, 0.6);
  const valuePadding = Math.max(0.8, spread * 0.24);
  const paddedMin = Math.max(0, valueMin - valuePadding);
  const paddedMax = valueMax + valuePadding;
  const guideValues = Array.from({ length: 4 }, (_, index) => {
    const ratio = index / 3;
    const value = paddedMax - (paddedMax - paddedMin) * ratio;
    return Number(Math.max(0, value).toFixed(1));
  });
  const chartWidth = 860;
  const chartHeight = 212;
  const step = chartWidth / series.length;
  const projectY = (value) => ((paddedMax - value) / Math.max(paddedMax - paddedMin, 1)) * (chartHeight - 22) + 11;
  const points = series.map((item, index) => ({
    ...item,
    x: step * index + step / 2,
    y: item.value == null ? null : projectY(item.value),
  }));
  const { line } = buildSnopPathSegments(points);
  const todayPoint = points.find((point) => point.isToday) ?? null;

  return `
    <div class="snop-chart-grid" role="img" aria-label="Recent 7 day SNOP chart">
      <div class="snop-chart-guides">
        ${guideValues
          .map(
            (value) => `
              <div class="snop-guide-row">
                <span class="snop-guide-line"></span>
                <span class="snop-guide-label">${escapeHtml(formatSnopValue(value))}</span>
              </div>
            `,
          )
          .join("")}
      </div>
      <div class="snop-chart-plot">
        <div class="snop-bars">
          ${series
            .map((point) => {
              const normalized = point.value == null ? 0 : (point.value - paddedMin) / Math.max(paddedMax - paddedMin, 1);
              const height = point.value == null ? 10 : Math.max(16, Math.round(18 + normalized * 78));
              return `
                <article class="snop-column ${point.isToday ? "is-today" : ""}${point.value == null ? " is-empty" : ""}">
                  <div class="snop-column-head">
                    <strong class="snop-column-value">${point.value == null ? "-" : escapeHtml(formatSnopValue(point.value))}</strong>
                    ${point.isToday ? `<span class="snop-column-badge">오늘</span>` : ""}
                  </div>
                  <div class="snop-column-track">
                    <div class="snop-column-bar" style="height: ${height}%"></div>
                  </div>
                  <div class="snop-column-footer">
                    <strong class="snop-column-day ${point.isToday ? "is-today" : ""}">${escapeHtml(point.dayLabel)}</strong>
                    <span class="snop-column-date">${escapeHtml(point.shortLabel)}</span>
                  </div>
                </article>
              `;
            })
            .join("")}
        </div>
        <svg class="snop-line-overlay" viewBox="0 0 ${chartWidth} ${chartHeight}" preserveAspectRatio="none" aria-hidden="true">
          ${guideValues
            .map((_, index) => {
              const y = (chartHeight * index) / 3;
              return `<line class="snop-overlay-guide" x1="0" y1="${y.toFixed(1)}" x2="${chartWidth}" y2="${y.toFixed(1)}"></line>`;
            })
            .join("")}
          ${
            todayPoint?.y != null
              ? `<rect class="snop-overlay-today-band" x="${(todayPoint.x - step * 0.19).toFixed(1)}" y="0" width="${(step * 0.38).toFixed(1)}" height="${chartHeight}" rx="16"></rect>`
              : ""
          }
          ${line ? `<path class="snop-trend-path" d="${line}"></path>` : ""}
          ${points
            .map((point) => {
              if (point.y == null) return "";
              return `
                <circle class="snop-trend-dot${point.isToday ? " is-today" : ""}" cx="${point.x.toFixed(1)}" cy="${point.y.toFixed(1)}" r="${point.isToday ? 6 : 4}"></circle>
                ${point.isToday ? `<circle class="snop-trend-ring" cx="${point.x.toFixed(1)}" cy="${point.y.toFixed(1)}" r="10"></circle>` : ""}
              `;
            })
            .join("")}
        </svg>
      </div>
    </div>
  `;
};

const buildSnopWeeklyChartPanel = (series) => {
  const available = series.filter((item) => Number.isFinite(item.value));
  if (!available.length) {
    return `<div class="snop-empty-state">이번 주 SNOP 데이터가 아직 없습니다. 일요일부터 토요일까지 기준일을 골라 먼저 값을 저장해 주세요.</div>`;
  }

  const values = available.map((item) => item.value);
  const valueMin = Math.min(...values);
  const valueMax = Math.max(...values);
  const spread = Math.max(valueMax - valueMin, 1);
  const padding = Math.max(1, spread * 0.18);
  const paddedMin = Math.max(0, valueMin - padding);
  const paddedMax = valueMax + padding;
  const chartWidth = 840;
  const chartHeight = 210;
  const step = chartWidth / series.length;
  const guideValues = Array.from({ length: 4 }, (_, index) => {
    const ratio = index / 3;
    const value = paddedMax - (paddedMax - paddedMin) * ratio;
    return Number(Math.max(0, value).toFixed(1));
  });
  const projectY = (value) => ((paddedMax - value) / Math.max(paddedMax - paddedMin, 1)) * (chartHeight - 28) + 14;
  const todayKey = dateKeyFromDate(new Date());
  const points = series.map((item, index) => ({
    ...item,
    x: step * index + step / 2,
    y: item.value == null ? null : projectY(item.value),
  }));
  const { line } = buildSnopPathSegments(points);

  return `
    <div class="snop-chart-grid" role="img" aria-label="이번 주 SNOP 차트">
      <div class="snop-chart-guides">
        ${guideValues
          .map(
            (value) => `
              <div class="snop-guide-row">
                <span class="snop-guide-line"></span>
                <span class="snop-guide-label">${escapeHtml(formatSnopValue(value))}</span>
              </div>
            `,
          )
          .join("")}
      </div>
      <div class="snop-chart-plot">
        <div class="snop-bars">
          ${series
            .map((point) => {
              const ratio = point.value == null ? 0 : (point.value - paddedMin) / Math.max(paddedMax - paddedMin, 1);
              const height = point.value == null ? 8 : Math.max(12, Math.round(18 + ratio * 78));
              const isFuture = point.date > todayKey;
              return `
                <article class="snop-column ${point.isToday ? "is-today" : ""}${point.value == null ? " is-empty" : ""}${isFuture ? " is-future" : ""}">
                  <div class="snop-column-head">
                    <strong class="snop-column-value">${point.value == null ? "-" : escapeHtml(formatSnopValue(point.value))}</strong>
                    ${point.isToday ? `<span class="snop-column-badge">오늘</span>` : ""}
                  </div>
                  <div class="snop-column-track">
                    <div class="snop-column-bar" style="height: ${height}%"></div>
                  </div>
                  <div class="snop-column-footer">
                    <strong class="snop-column-day ${point.isToday ? "is-today" : ""}">${escapeHtml(point.dayLabel)}</strong>
                    <span class="snop-column-date">${escapeHtml(point.shortLabel)}</span>
                  </div>
                </article>
              `;
            })
            .join("")}
        </div>
        <svg class="snop-line-overlay" viewBox="0 0 ${chartWidth} ${chartHeight}" preserveAspectRatio="none" aria-hidden="true">
          ${guideValues
            .map((_, index) => {
              const y = (chartHeight * index) / 3;
              return `<line class="snop-overlay-guide" x1="0" y1="${y.toFixed(1)}" x2="${chartWidth}" y2="${y.toFixed(1)}"></line>`;
            })
            .join("")}
          ${line ? `<path class="snop-trend-path" d="${line}"></path>` : ""}
          ${points
            .map((point) => {
              if (point.y == null) return "";
              return `
                <circle class="snop-trend-dot${point.isToday ? " is-today" : ""}" cx="${point.x.toFixed(1)}" cy="${point.y.toFixed(1)}" r="${point.isToday ? 6.5 : 4.5}"></circle>
                ${point.isToday ? `<circle class="snop-trend-ring" cx="${point.x.toFixed(1)}" cy="${point.y.toFixed(1)}" r="11"></circle>` : ""}
              `;
            })
            .join("")}
        </svg>
      </div>
    </div>
  `;
};

const syncSnopFormFields = (series) => {
  const snopDom = getSnopDom();
  if (!snopDom.dateInput || !snopDom.valueInput) return;
  const editableDates = currentWeekEditableDateKeys(snopReferenceDate());
  const validDates = editableDates.length ? editableDates : [dateKeyFromDate(new Date())];
  const nextDate = validDates.includes(state.snop.selectedDate) ? state.snop.selectedDate : validDates[validDates.length - 1];
  const selectedEntry = series.find((item) => item.date === nextDate)?.entry ?? null;
  state.snop.selectedDate = nextDate;
  snopDom.dateInput.value = nextDate;
  if (document.activeElement !== snopDom.valueInput) {
    snopDom.valueInput.value = selectedEntry ? String(selectedEntry.value) : "";
  }
  renderSnopWeekSelector(series, nextDate);
};

const renderSnopDashboard = () => {
  const snopDom = getSnopDom();
  if (!snopDom.chart) return;
  const series = recentSnopSeries();
  const entryMap = new Map(snopAll().map((entry) => [entry.date, entry]));
  const todayKey = dateKeyFromDate(new Date());
  const yesterdayKey = dateKeyFromDate(addDays(new Date(), -1));
  const today = series.find((item) => item.isToday) ?? series[series.length - 1];
  const yesterday = entryMap.get(yesterdayKey) ?? null;
  const numeric = series.filter((item) => Number.isFinite(item.value));
  const average = numeric.length ? numeric.reduce((sum, item) => sum + item.value, 0) / numeric.length : null;
  const peak = numeric.length ? numeric.reduce((best, item) => (item.value > best.value ? item : best), numeric[0]) : null;
  const delta = today?.value != null && yesterday?.value != null ? today.value - yesterday.value : null;

  setNodeText(snopDom.todayValue, today?.value != null ? formatSnopValue(today.value) : "미입력");
  setNodeText(
    snopDom.todayMeta,
    today?.entry ? `${formatLongDate(today.date)} · ${today.authorName || "작성자 미상"} 입력` : `${formatLongDate(todayKey)} · 아직 입력되지 않았습니다.`,
  );

  setNodeText(snopDom.averageValue, average != null ? formatSnopValue(average) : "-");
  setNodeText(snopDom.averageMeta, numeric.length ? `${numeric.length}일 입력 완료` : "입력 데이터가 없습니다.");

  setNodeText(snopDom.peakValue, peak ? formatSnopValue(peak.value) : "-");
  setNodeText(snopDom.peakMeta, peak ? `${formatLongDate(peak.date)} · ${peak.authorName || "작성자 미상"}` : "최고값 데이터가 없습니다.");

  setNodeText(snopDom.deltaValue, delta != null ? formatSnopDelta(delta) : "-");
  setNodeText(
    snopDom.deltaMeta,
    delta == null ? "어제와 비교할 데이터가 없습니다." : delta === 0 ? "어제와 동일합니다." : delta > 0 ? "어제보다 상승했습니다." : "어제보다 하락했습니다.",
  );

  setNodeText(snopDom.range, `${formatLongDate(series[0].date)} - ${formatLongDate(series[series.length - 1].date)}`);
  setNodeText(
    snopDom.caption,
    today?.entry
      ? `오늘 값 ${formatSnopValue(today.value)} · ${today.authorName || "작성자 미상"} · ${timeFormatter.format(
        new Date(today.updatedAt || Date.now()),
      )} 업데이트`
      : "이번 주 일요일부터 토요일까지 SNOP를 입력하면 그래프와 추세선이 바로 업데이트됩니다.",
  );
  snopDom.chart.innerHTML = buildSnopWeeklyChartPanel(series);
  syncSnopFormFields(series);
};

const renderBoardState = () => {
  const board = BOARD_CONFIG[state.activeBoard];
  const subtab = state.activeBoard === "handover" ? HANDOVER_SUBTAB_CONFIG[state.activeHandoverTab] : null;
  const headline = boardHeadline();

  el.boardTitle.textContent = headline.title;
  el.boardDescription.textContent = headline.description;
  el.heroBadge.textContent = headline.heroBadge;
  el.heroTitle.textContent = headline.heroTitle;
  el.heroDescription.textContent = headline.heroDescription;

  setBadge(el.boardBadge, board.label, board.badgeStyle, false);
  setBadge(el.composeBoardBadge, board.label, board.badgeStyle, false);
  setBadge(el.previewBoardBadge, board.label, board.badgeStyle, false);
  setBadge(el.subtabBadge, subtab?.label ?? "", subtab?.badgeStyle ?? null, !subtab);
  setBadge(el.composeSubtabBadge, subtab?.label ?? "", subtab?.badgeStyle ?? null, !subtab);
  setBadge(el.previewSubtabBadge, subtab?.label ?? "", subtab?.badgeStyle ?? null, !subtab);

  el.boardTabs.forEach((button) => {
    const active = button.dataset.boardTab === state.activeBoard;
    button.classList.toggle("is-active", active);
    button.setAttribute("aria-selected", String(active));
  });

  el.handoverShell.hidden = state.activeBoard !== "handover";
  el.handoverToggle.textContent = state.handoverExpanded ? "세부 탭 접기" : "세부 탭 펼치기";
  el.handoverToggle.setAttribute("aria-expanded", String(state.handoverExpanded));
  el.handoverPanel.hidden = !state.handoverExpanded;

  el.handoverTabs.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.handoverTab === state.activeHandoverTab);
  });
};

const renderStats = (allPosts, visiblePosts) => {
  const totalComments = allPosts.reduce((sum, post) => sum + post.comments.length, 0);
  const totalLikes = allPosts.reduce(
    (sum, post) => sum + post.likes.length + post.comments.reduce((inner, comment) => inner + comment.likes.length, 0),
    0,
  );
  const mentions = collectMentionRecords(allPosts);
  const visibleLikes = visiblePosts.reduce(
    (sum, post) => sum + post.likes.length + post.comments.reduce((inner, comment) => inner + comment.likes.length, 0),
    0,
  );
  const visibleMentions = collectMentionRecords(visiblePosts);

  el.postCount.textContent = String(allPosts.length);
  el.commentCount.textContent = String(totalComments);
  el.likeCount.textContent = String(totalLikes);
  el.mentionCount.textContent = String(mentions.length);
  el.heroPosts.textContent = String(visiblePosts.length);
  el.heroMentions.textContent = String(visibleMentions.length);
  el.heroLikes.textContent = String(visibleLikes);
};

const renderProfile = () => {
  if (!state.user) {
    el.userPanel.hidden = true;
    setAvatar(el.userAvatarImage, el.userAvatarFallback, { nickname: "GWJ2", avatarDataUrl: "" });
    setAvatar(el.profileAvatarImage, el.profileAvatarFallback, { nickname: "GWJ2", avatarDataUrl: "" });
    el.profileName.textContent = "GWJ2";
    el.profilePosition.textContent = "로그인 대기";
    el.profileNote.textContent = "로그인하면 닉네임, 프로필 이미지, 비밀번호 설정을 여기서 관리할 수 있습니다.";
    return;
  }

  el.userPanel.hidden = false;
  el.userName.textContent = state.user.nickname;
  el.userPosition.textContent = state.user.position;
  setAvatar(el.userAvatarImage, el.userAvatarFallback, state.user);
  setAvatar(el.profileAvatarImage, el.profileAvatarFallback, state.user);
  el.profileName.textContent = state.user.nickname;
  el.profilePosition.textContent = state.user.position;
  el.profileNote.textContent = "프로필, 첨부 업로드, 멘션 흐름이 모두 현재 계정 기준으로 바로 반영됩니다.";
};

const attachmentSummaryText = (attachment, emptyText) =>
  attachment ? `${attachment.name} · ${formatBytes(attachment.size)}` : emptyText;

const renderComposeAttachments = () => {
  const image = state.compose.image;
  const file = state.compose.file;
  el.postImageName.textContent = attachmentSummaryText(image, "선택된 이미지가 없습니다.");
  el.postFileName.textContent = attachmentSummaryText(file, "선택된 파일이 없습니다.");
  const hasAttachment = Boolean(image || file);
  el.postAttachmentPreview.hidden = !hasAttachment;

  el.postImagePreviewBox.hidden = !image;
  if (image) {
    el.postImagePreview.src = image.dataUrl;
    el.postImagePreview.alt = image.name;
  } else {
    el.postImagePreview.removeAttribute("src");
    el.postImagePreview.alt = "";
  }

  el.postFilePreviewBox.hidden = !file;
  el.postFilePreviewName.textContent = file ? `${file.name} · ${formatBytes(file.size)}` : "";
};

const renderComposePreview = () => {
  const title = clean(el.postTitle.value);
  const content = clean(el.postContent.value);
  el.previewTitle.textContent = title || "제목을 입력하면 여기에 바로 반영됩니다.";
  el.previewContent.innerHTML = content
    ? richText(content)
    : "내용을 입력하면 현재 작성 중인 문장이 이 영역에 바로 정리됩니다.";
  el.composeCount.textContent = `${content.length} / 800`;

  const image = state.compose.image;
  const file = state.compose.file;
  const hasAttachment = Boolean(image || file);
  el.previewAttachment.hidden = !hasAttachment;

  el.previewImage.hidden = !image;
  if (image) {
    el.previewImage.src = image.dataUrl;
    el.previewImage.alt = image.name;
  } else {
    el.previewImage.removeAttribute("src");
    el.previewImage.alt = "";
  }

  el.previewFile.hidden = !file;
  el.previewFile.textContent = file ? `${file.name} · ${formatBytes(file.size)}` : "";
};

const renderPostReactionChips = (post) => {
  const entries = Object.entries(post.reactions || {}).filter(([, ids]) => ids && ids.length);
  if (!entries.length) return "";
  const currentUser = state.user?.id;
  return `<div class="reaction-chip-row">${entries
    .sort((a, b) => b[1].length - a[1].length)
    .map(([emoji, ids]) => {
      const mine = currentUser && ids.includes(currentUser);
      return `<button type="button" class="reaction-chip${mine ? " is-mine" : ""}" data-reaction-toggle data-post-id="${escapeHtml(post.id)}" data-emoji="${escapeHtml(emoji)}" title="${escapeHtml(emoji)}"><span class="reaction-chip-emoji">${emoji}</span><span class="reaction-chip-count">${ids.length}</span></button>`;
    })
    .join("")}</div>`;
};

const emojiButtonsHtml = (target) => {
  const safeTarget = escapeHtml(target);
  const tabs = EMOJI_CATEGORIES.map(
    (category, index) =>
      `<button class="emoji-tab${index === 0 ? " is-active" : ""}" type="button" role="tab" data-emoji-category="${category.id}" data-target="${safeTarget}" title="${escapeHtml(category.label)}" aria-selected="${index === 0 ? "true" : "false"}">${category.icon}</button>`,
  ).join("");
  const panels = EMOJI_CATEGORIES.map(
    (category, index) =>
      `<div class="emoji-panel${index === 0 ? " is-active" : ""}" role="tabpanel" data-emoji-panel="${category.id}" data-target="${safeTarget}">${category.emojis
        .map(
          (emoji) =>
            `<button class="emoji-option" type="button" data-insert-emoji="${escapeHtml(emoji)}" data-target="${safeTarget}" title="${escapeHtml(emoji)}">${emoji}</button>`,
        )
        .join("")}</div>`,
  ).join("");
  return `
    <div class="emoji-picker" data-emoji-picker data-target="${safeTarget}">
      <button class="emoji-trigger" type="button" data-emoji-trigger data-target="${safeTarget}" aria-haspopup="dialog" aria-expanded="false" title="이모지 선택">
        <span class="emoji-trigger-icon">😊</span>
        <span class="emoji-trigger-label">이모지</span>
      </button>
      <div class="emoji-popover" data-emoji-popover hidden>
        <div class="emoji-tabs" role="tablist">${tabs}</div>
        <div class="emoji-panels">${panels}</div>
      </div>
    </div>
  `;
};

const renderAttachmentHtml = (attachments) => {
  const blocks = [];
  if (attachments.image) {
    blocks.push(`
      <div class="attachment-image-box">
        <img class="post-attachment-image" src="${escapeHtml(attachments.image.dataUrl)}" alt="${escapeHtml(attachments.image.name)}" loading="lazy">
      </div>
    `);
  }
  if (attachments.file) {
    blocks.push(`
      <div class="attachment-file-box">
        <a class="post-file-link" href="${escapeHtml(attachments.file.dataUrl)}" download="${escapeHtml(attachments.file.name)}">
          <span class="file-pill">파일</span>
          <span>${escapeHtml(attachments.file.name)} · ${escapeHtml(formatBytes(attachments.file.size))}</span>
        </a>
      </div>
    `);
  }
  return blocks.length ? `<div class="post-attachment-grid">${blocks.join("")}</div>` : "";
};

const canManageContent = (authorId) => Boolean(state.user && (state.user.id === authorId || state.user.position === "Manager"));

const renderAvatarMarkup = (profile, className = "tooltip-avatar") =>
  profile.avatarDataUrl
    ? `<img class="${escapeHtml(className)}" src="${escapeHtml(profile.avatarDataUrl)}" alt="${escapeHtml(profile.nickname)} 프로필 이미지">`
    : `<span class="${escapeHtml(className)} avatar-fallback">${escapeHtml(avatarLetter(profile.nickname))}</span>`;

const renderLikeTooltipHtml = (likes) => {
  if (!likes.length) {
    return `
      <span class="like-tooltip-card">
        <span class="like-tooltip-empty">아직 좋아요가 없습니다.</span>
      </span>
    `;
  }

  const visibleProfiles = likes.slice(0, 6).map((id) => findProfile(id));
  const remaining = likes.length - visibleProfiles.length;
  return `
    <span class="like-tooltip-card">
      <strong class="like-tooltip-title">좋아요 ${likes.length}</strong>
      <span class="like-tooltip-list">
        ${visibleProfiles
          .map(
            (profile) => `
              <span class="like-tooltip-person">
                <span class="like-tooltip-avatar-shell">${renderAvatarMarkup(profile, "like-tooltip-avatar")}</span>
                <span class="like-tooltip-copy">
                  <span class="like-tooltip-name">${escapeHtml(profile.nickname || "알 수 없음")}</span>
                  <span class="like-tooltip-role">${escapeHtml(profile.position || "T/C")}</span>
                </span>
              </span>
            `,
          )
          .join("")}
      </span>
      ${remaining > 0 ? `<span class="like-tooltip-more">외 ${remaining}명</span>` : ""}
    </span>
  `;
};

const renderComment = (postId, comment) => {
  const profile = findProfile(comment.authorId, { nickname: comment.authorName, position: comment.position });
  const liked = Boolean(state.user && comment.likes.includes(state.user.id));
  const tooltip = renderLikeTooltipHtml(comment.likes);
  const canDelete = canManageContent(comment.authorId);
  return `
    <article class="comment-item">
      <div class="comment-head">
        <div class="comment-author-line">
          <strong class="comment-author">${escapeHtml(profile.nickname)}</strong>
          <span class="position-badge">${escapeHtml(profile.position)}</span>
        </div>
        <div class="comment-head-side">
          <span class="comment-meta">${escapeHtml(relativeTime(comment.createdAt))}</span>
          ${
            canDelete
              ? `<button class="inline-action danger-action" type="button" data-delete-comment data-post-id="${escapeHtml(
                  postId,
                )}" data-comment-id="${escapeHtml(comment.id)}">삭제</button>`
              : ""
          }
        </div>
      </div>
      <div class="comment-content">${richText(comment.content)}</div>
      <div class="post-actions">
        <button class="reaction-button ${liked ? "is-active" : ""}" type="button" data-comment-like data-post-id="${escapeHtml(
          postId,
        )}" data-comment-id="${escapeHtml(comment.id)}">
          <span class="reaction-icon">${HEART_ICON}</span>
          <span>좋아요</span>
          <strong>${comment.likes.length}</strong>
          <span class="like-tooltip">${tooltip}</span>
        </button>
      </div>
    </article>
  `;
};

const renderPost = (post) => {
  const profile = findProfile(post.authorId, { nickname: post.authorName, position: post.position });
  const board = BOARD_CONFIG[post.board];
  const subtab = post.board === "handover" ? HANDOVER_SUBTAB_CONFIG[post.subtab] : null;
  const liked = Boolean(state.user && post.likes.includes(state.user.id));
  const tooltip = renderLikeTooltipHtml(post.likes);
  const canDelete = canManageContent(post.authorId);
  const commentsHtml = post.comments.length
    ? post.comments.map((comment) => renderComment(post.id, comment)).join("")
    : `<div class="empty-comments">아직 댓글이 없습니다. 첫 댓글을 남겨보세요.</div>`;
  const draft = state.commentDrafts[post.id] ?? "";
  const feedback = state.commentFeedback[post.id] ?? "";
  const attachmentCount = Number(Boolean(post.attachments.image)) + Number(Boolean(post.attachments.file));
  const metaBits = [`댓글 ${post.comments.length}`];
  if (attachmentCount > 0) metaBits.push(`첨부 ${attachmentCount}`);

  return `
    <article class="post-card">
      <div class="post-head">
        <div class="post-author">
          <div class="post-avatar">
            ${
              profile.avatarDataUrl
                ? `<img class="avatar-image" src="${escapeHtml(profile.avatarDataUrl)}" alt="${escapeHtml(profile.nickname)} 프로필 이미지">`
                : `<span class="avatar-fallback">${escapeHtml(avatarLetter(profile.nickname))}</span>`
            }
          </div>
          <div class="post-author-copy">
            <div class="post-author-line">
              <strong class="post-author-name">${escapeHtml(profile.nickname)}</strong>
              <span class="position-badge">${escapeHtml(profile.position)}</span>
            </div>
            <span class="post-meta">${escapeHtml(relativeTime(post.createdAt))}</span>
          </div>
        </div>
        ${
          canDelete
            ? `<button class="inline-action danger-action" type="button" data-delete-post data-post-id="${escapeHtml(post.id)}">게시글 삭제</button>`
            : ""
        }
      </div>
      <div class="post-badge-row">
        <span class="board-badge" style="background:${escapeHtml(board.badgeStyle.background)};color:${escapeHtml(
          board.badgeStyle.color,
        )};border-color:${escapeHtml(board.badgeStyle.borderColor)};">${escapeHtml(board.label)}</span>
        ${
          subtab
            ? `<span class="board-badge" style="background:${escapeHtml(subtab.badgeStyle.background)};color:${escapeHtml(
                subtab.badgeStyle.color,
              )};border-color:${escapeHtml(subtab.badgeStyle.borderColor)};">${escapeHtml(subtab.label)}</span>`
            : ""
        }
      </div>
      <h3 class="post-title">${escapeHtml(post.title)}</h3>
      <div class="post-content">${richText(post.content)}</div>
      ${renderAttachmentHtml(post.attachments)}
      <div class="post-reactions" data-post-reactions="${escapeHtml(post.id)}">
        ${renderPostReactionChips(post)}
        ${emojiButtonsHtml(`reaction-${post.id}`)}
      </div>
      <div class="post-actions">
        <button class="like-button ${liked ? "is-active" : ""}" type="button" data-post-like data-post-id="${escapeHtml(post.id)}" aria-pressed="${liked ? "true" : "false"}" aria-label="좋아요">
          <span class="like-heart" aria-hidden="true">
            <svg viewBox="0 0 24 24" width="22" height="22"><path d="M12 21s-7.5-4.9-10-9.6C.4 8.2 2 4 6 4c2.2 0 3.7 1.2 4.8 2.8h.4C12.3 5.2 13.8 4 16 4c4 0 5.6 4.2 4 7.4-2.5 4.7-10 9.6-10 9.6h2z" fill="currentColor"/></svg>
          </span>
          <span class="like-count"><strong>${post.likes.length}</strong></span>
          <span class="like-tooltip">${tooltip}</span>
        </button>
        <span class="reaction-meta">${escapeHtml(metaBits.join(" · "))}</span>
      </div>
      <div class="comment-section">
        <div class="comment-list">${commentsHtml}</div>
        <form class="comment-form" data-comment-form data-post-id="${escapeHtml(post.id)}">
          <div class="comment-field-shell">
            <textarea class="text-input text-area comment-textarea js-mention-input" maxlength="300" placeholder="댓글을 입력해 주세요." data-compose-input="comment-${escapeHtml(
              post.id,
            )}">${escapeHtml(draft)}</textarea>
            <div class="mention-box" data-mention-box="comment-${escapeHtml(post.id)}" hidden></div>
          </div>
          <div class="comment-toolbar">
            <button class="secondary-button" type="submit">댓글 남기기</button>
          </div>
          <p class="form-feedback" data-comment-feedback="${escapeHtml(post.id)}" ${feedback ? "" : "hidden"}>${escapeHtml(feedback)}</p>
        </form>
      </div>
    </article>
  `;
};

const renderPosts = (visiblePosts) => {
  el.postList.innerHTML = visiblePosts.length
    ? visiblePosts.map(renderPost).join("")
    : `<div class="empty-state">${
        state.feedFilter === "mentions"
          ? "선택한 탭에서 나를 멘션한 글이 아직 없습니다."
          : "선택한 탭에 아직 게시글이 없습니다. 첫 글을 남겨보세요."
      }</div>`;

  el.filterButtons.forEach((button) => {
    const active = button.dataset.feedFilter === state.feedFilter;
    button.classList.toggle("is-active", active);
    button.setAttribute("aria-selected", String(active));
  });
};

const renderMentionFeed = (allPosts) => {
  const mentions = collectMentionRecords(allPosts);
  el.mentionFeed.innerHTML = mentions.length
    ? mentions
        .slice(0, 6)
        .map((item) => {
          const board = BOARD_CONFIG[item.board];
          const subtab = item.board === "handover" ? HANDOVER_SUBTAB_CONFIG[item.subtab] : null;
          const meta = [board.label];
          if (subtab) meta.push(subtab.label);
          meta.push(relativeTime(item.createdAt));
          return `
            <article class="mention-card-item">
              <div class="mention-card-head">
                <span class="mention-kind">${escapeHtml(item.kind)}</span>
                <span class="mention-meta">${escapeHtml(meta.join(" · "))}</span>
              </div>
              <strong class="mention-title">${escapeHtml(item.title)}</strong>
              <div class="mention-excerpt">${richText(item.excerpt)}</div>
            </article>
          `;
        })
        .join("")
    : `<div class="empty-mention-state">아직 나를 멘션한 글이나 댓글이 없습니다.</div>`;
};

const refreshAll = () => {
  const allPosts = postsAll();
  const visiblePosts = getVisiblePosts(allPosts);
  renderBoardState();
  renderSnopDashboard();
  renderProfile();
  renderStats(allPosts, visiblePosts);
  renderComposeAttachments();
  renderComposePreview();
  renderMentionFeed(allPosts);
  renderPosts(visiblePosts);
  renderNotificationRail();
  scheduleRevealSweep();
};

const syncLockState = (locked) => {
  document.body.classList.toggle("is-auth-locked", locked);
  el.authOverlay.hidden = !locked;
  el.appShell.setAttribute("aria-hidden", String(locked));
};

const setAuthFeedback = (kind, message = "") => {
  el.authFeedback[kind].textContent = message;
  el.authFeedback[kind].hidden = !message;
};

const setAuthTab = (kind) => {
  el.authTabs.forEach((button) => {
    const active = button.dataset.authTab === kind;
    button.classList.toggle("is-active", active);
    button.setAttribute("aria-selected", String(active));
  });
  Object.entries(el.authForms).forEach(([name, form]) => {
    const active = name === kind;
    form.hidden = !active;
    form.classList.toggle("is-active", active);
  });
  setAuthFeedback("login");
  setAuthFeedback("signup");
};

const setAuthBusy = (busy) => {
  el.authTabs.forEach((button) => {
    button.disabled = busy;
  });
  Object.values(el.authForms).forEach((form) => {
    [...form.elements].forEach((field) => {
      field.disabled = busy;
    });
  });
};

const resetAuthForms = () => {
  Object.values(el.authForms).forEach((form) => form.reset());
  setAuthFeedback("login");
  setAuthFeedback("signup");
  setAuthTab("login");
};

const openSettings = () => {
  if (!state.user) return;
  const user = findStoredUser(state.user.id);
  if (!user) return;
  state.settings.avatarDataUrl = user.avatarDataUrl || "";
  state.settings.avatarName = user.avatarDataUrl ? "현재 프로필 이미지" : "현재 이미지 없음";
  el.settingsForm.reset();
  el.settingsForm.elements.nickname.value = user.nickname;
  updateSettingsPreview(user.nickname);
  setTimedFeedback("settings", el.settingsFeedback, "");
  el.settingsOverlay.hidden = false;
};

const closeSettings = () => {
  el.settingsOverlay.hidden = true;
  setTimedFeedback("settings", el.settingsFeedback, "");
};

const updateSettingsPreview = (nickname = state.user?.nickname || "GWJ2") => {
  setAvatar(el.settingsAvatarImage, el.settingsAvatarFallback, {
    nickname,
    avatarDataUrl: state.settings.avatarDataUrl,
  });
  el.settingsAvatarName.textContent = state.settings.avatarName;
};

const resetComposer = () => {
  el.postForm.reset();
  state.compose.image = null;
  state.compose.file = null;
  setTimedFeedback("post", el.postFeedback, "");
  hideAllMentionBoxes();
  renderComposeAttachments();
  renderComposePreview();
};

const clearComposeImage = () => {
  state.compose.image = null;
  el.postImageInput.value = "";
  renderComposeAttachments();
  renderComposePreview();
};

const clearComposeFile = () => {
  state.compose.file = null;
  el.postFileInput.value = "";
  renderComposeAttachments();
  renderComposePreview();
};

const clearSettingsAvatar = () => {
  state.settings.avatarDataUrl = "";
  state.settings.avatarName = "현재 이미지 없음";
  el.settingsAvatarInput.value = "";
  updateSettingsPreview(el.settingsForm.elements.nickname.value);
};

const selectSnopDate = (nextDate) => {
  const snopDom = getSnopDom();
  const series = recentSnopSeries();
  const validDates = series.map((item) => item.date);
  if (!validDates.includes(nextDate)) return;
  if (nextDate > dateKeyFromDate(new Date())) return;
  state.snop.selectedDate = nextDate;
  const selectedEntry = series.find((item) => item.date === nextDate)?.entry ?? null;
  if (snopDom.dateInput) snopDom.dateInput.value = nextDate;
  if (snopDom.valueInput) {
    snopDom.valueInput.value = selectedEntry ? String(selectedEntry.value) : "";
  }
  renderSnopWeekSelector(series, nextDate);
  setTimedFeedback("snop", snopDom.feedback, "");
};

const handleSnopDateChange = (event) => {
  selectSnopDate(clean(event.target.value));
};

const submitSnop = (event) => {
  event.preventDefault();
  if (!state.user) return;
  const snopDom = getSnopDom();
  if (!snopDom.dateInput || !snopDom.valueInput) return;

  const date = clean(snopDom.dateInput.value);
  const value = Number(snopDom.valueInput.value);
  const allowedDates = currentWeekEditableDateKeys(snopReferenceDate());

  if (!date) {
    setTimedFeedback("snop", snopDom.feedback, "기준일을 선택해 주세요.", 2200);
    return;
  }
  if (!allowedDates.includes(date)) {
    setTimedFeedback("snop", snopDom.feedback, "SNOP는 이번 주 일요일부터 오늘까지 범위에서만 입력할 수 있습니다.", 2400);
    return;
  }
  if (!Number.isFinite(value) || value < 0) {
    setTimedFeedback("snop", snopDom.feedback, "SNOP 숫자를 0 이상으로 입력해 주세요.", 2200);
    return;
  }

  const entries = snopAll().filter((entry) => entry.date !== date);
  entries.push({
    date,
    value,
    authorId: state.user.id,
    authorName: state.user.nickname,
    updatedAt: Date.now(),
  });
  saveSnopEntries(entries);
  state.snop.selectedDate = date;
  refreshAll();
  setTimedFeedback("snop", snopDom.feedback, `${formatLongDate(date)} SNOP가 저장되었습니다.`, 1800);
  pushNotification({
    title: "SNOP 저장 완료",
    body: `${formatLongDate(date)} · ${formatSnopValue(value)}`,
    tone: "success",
  });
};

const loadComposeImage = async (file, source = "upload") => {
  if (!file) return false;
  if (file.size > MAX_UPLOAD_SIZE.postImage) {
    setTimedFeedback("post", el.postFeedback, "이미지는 1.5MB 이하만 업로드할 수 있습니다.", 2200);
    return false;
  }
  try {
    state.compose.image = await readFileAsDataUrl(file);
    renderComposeAttachments();
    renderComposePreview();
    if (source === "paste") {
      setTimedFeedback("post", el.postFeedback, "클립보드 이미지를 첨부했습니다.", 1800);
    }
    return true;
  } catch (error) {
    setTimedFeedback("post", el.postFeedback, error.message, 2200);
    return false;
  }
};

const handlePostImageSelect = async (event) => {
  const file = event.target.files?.[0];
  const attached = await loadComposeImage(file, "upload");
  if (!attached) event.target.value = "";
};

const handlePostFileSelect = async (event) => {
  const file = event.target.files?.[0];
  if (!file) return;
  if (file.size > MAX_UPLOAD_SIZE.postFile) {
    setTimedFeedback("post", el.postFeedback, "파일은 2MB 이하만 업로드할 수 있습니다.", 2200);
    event.target.value = "";
    return;
  }
  try {
    state.compose.file = await readFileAsDataUrl(file);
    renderComposeAttachments();
    renderComposePreview();
  } catch (error) {
    setTimedFeedback("post", el.postFeedback, error.message, 2200);
  }
};

const handleSettingsAvatarSelect = async (event) => {
  const file = event.target.files?.[0];
  if (!file) return;
  if (file.size > MAX_UPLOAD_SIZE.avatar) {
    setTimedFeedback("settings", el.settingsFeedback, "프로필 이미지는 1MB 이하만 업로드할 수 있습니다.");
    event.target.value = "";
    return;
  }
  try {
    const attachment = await readFileAsDataUrl(file);
    state.settings.avatarDataUrl = attachment.dataUrl;
    state.settings.avatarName = `${attachment.name} · ${formatBytes(attachment.size)}`;
    updateSettingsPreview(el.settingsForm.elements.nickname.value);
  } catch (error) {
    setTimedFeedback("settings", el.settingsFeedback, error.message);
  }
};

const handleGlobalPaste = async (event) => {
  const target = event.target;
  if (!(target instanceof HTMLElement)) return;
  if (!target.closest("[data-post-form]")) return;
  const items = [...(event.clipboardData?.items ?? [])];
  const imageItem = items.find((item) => item.type.startsWith("image/"));
  if (!imageItem) return;
  const file = imageItem.getAsFile();
  if (!file) return;
  event.preventDefault();
  const extension = file.type.split("/")[1] || "png";
  const clipboardFile = new File([file], file.name || `clipboard-image-${Date.now()}.${extension}`, {
    type: file.type || "image/png",
  });
  await loadComposeImage(clipboardFile, "paste");
};

const findMentionBox = (key) => $(`[data-mention-box="${key}"]`);
const findComposeField = (key) => $(`[data-compose-input="${key}"]`);

const hideAllMentionBoxes = () => {
  $$("[data-mention-box]").forEach((box) => {
    box.hidden = true;
    box.innerHTML = "";
  });
};

const mentionCandidates = (query) => {
  const lower = clean(query).toLowerCase();
  return allProfiles().filter((profile) => {
    if (!profile.nickname) return false;
    if (state.user && profile.id === state.user.id) return false;
    return !lower || profile.nickname.toLowerCase().includes(lower);
  });
};

const updateMentionBox = (textarea) => {
  const key = textarea.dataset.composeInput;
  const box = findMentionBox(key);
  if (!box) return;
  const cursor = textarea.selectionStart ?? textarea.value.length;
  const before = textarea.value.slice(0, cursor);
  const match = before.match(/(^|\s)@([^\s@]*)$/u);
  if (!match) {
    box.hidden = true;
    box.innerHTML = "";
    return;
  }
  const candidates = mentionCandidates(match[2]).slice(0, 6);
  if (!candidates.length) {
    box.hidden = true;
    box.innerHTML = "";
    return;
  }
  box.innerHTML = candidates
    .map(
      (profile) => `
        <button class="mention-item" type="button" data-mention-select data-mention-target="${escapeHtml(
          key,
        )}" data-mention-name="${escapeHtml(profile.nickname)}">
          <span class="mention-item-copy">
            <strong class="mention-item-name">${escapeHtml(profile.nickname)}</strong>
            <span class="mention-item-role">${escapeHtml(profile.position)}</span>
          </span>
          <span class="mention-kind">멘션</span>
        </button>
      `,
    )
    .join("");
  box.hidden = false;
};

const insertMention = (key, nickname) => {
  const textarea = findComposeField(key);
  if (!textarea) return;
  const cursor = textarea.selectionStart ?? textarea.value.length;
  const before = textarea.value.slice(0, cursor);
  const after = textarea.value.slice(cursor);
  const mentionStart = before.lastIndexOf("@");
  if (mentionStart < 0) return;
  textarea.value = `${before.slice(0, mentionStart)}@${nickname} ${after}`;
  const nextCursor = mentionStart + nickname.length + 2;
  textarea.focus();
  textarea.setSelectionRange(nextCursor, nextCursor);
  textarea.dispatchEvent(new Event("input", { bubbles: true }));
};

const closeAllEmojiPickers = () => {
  $$("[data-emoji-picker]").forEach((picker) => {
    const popover = picker.querySelector("[data-emoji-popover]");
    const trigger = picker.querySelector("[data-emoji-trigger]");
    if (popover) popover.hidden = true;
    if (trigger) trigger.setAttribute("aria-expanded", "false");
    picker.classList.remove("is-open");
  });
};

const toggleEmojiPicker = (triggerEl) => {
  const picker = triggerEl.closest("[data-emoji-picker]");
  if (!picker) return;
  const popover = picker.querySelector("[data-emoji-popover]");
  const isOpen = picker.classList.contains("is-open");
  closeAllEmojiPickers();
  if (!isOpen) {
    picker.classList.add("is-open");
    if (popover) popover.hidden = false;
    triggerEl.setAttribute("aria-expanded", "true");
  }
};

const selectEmojiCategory = (tabEl) => {
  const picker = tabEl.closest("[data-emoji-picker]");
  if (!picker) return;
  const categoryId = tabEl.dataset.emojiCategory;
  picker.querySelectorAll("[data-emoji-category]").forEach((tab) => {
    const active = tab.dataset.emojiCategory === categoryId;
    tab.classList.toggle("is-active", active);
    tab.setAttribute("aria-selected", active ? "true" : "false");
  });
  picker.querySelectorAll("[data-emoji-panel]").forEach((panel) => {
    panel.classList.toggle("is-active", panel.dataset.emojiPanel === categoryId);
  });
};

const togglePostReaction = (postId, emoji) => {
  if (!state.user || !postId || !emoji) return;
  const userId = state.user.id;
  const posts = postsAll().map((post) => {
    if (post.id !== postId) return post;
    const reactions = { ...(post.reactions || {}) };
    const current = new Set(reactions[emoji] || []);
    if (current.has(userId)) current.delete(userId);
    else current.add(userId);
    if (current.size === 0) delete reactions[emoji];
    else reactions[emoji] = [...current];
    return { ...post, reactions };
  });
  savePosts(posts);
  refreshAll();
};

const insertEmoji = (key, emoji) => {
  if (typeof key === "string" && key.startsWith("reaction-")) {
    const postId = key.slice("reaction-".length);
    togglePostReaction(postId, emoji);
    return;
  }
  const textarea = findComposeField(key);
  if (!textarea) return;
  const start = textarea.selectionStart ?? textarea.value.length;
  const end = textarea.selectionEnd ?? textarea.value.length;
  const value = textarea.value;
  textarea.value = `${value.slice(0, start)}${emoji}${value.slice(end)}`;
  const nextCursor = start + emoji.length;
  textarea.focus();
  textarea.setSelectionRange(nextCursor, nextCursor);
  textarea.dispatchEvent(new Event("input", { bubbles: true }));
};

const animateLikeButton = (button) => {
  if (!button) return;
  button.classList.remove("is-pulsing");
  void button.offsetWidth;
  button.classList.add("is-pulsing");
  setTimeout(() => button.classList.remove("is-pulsing"), 520);
};

const togglePostLike = (postId) => {
  if (!state.user) return;
  const posts = postsAll().map((post) => {
    if (post.id !== postId) return post;
    const likes = new Set(post.likes);
    if (likes.has(state.user.id)) likes.delete(state.user.id);
    else likes.add(state.user.id);
    return { ...post, likes: [...likes] };
  });
  savePosts(posts);
  refreshAll();
};

const toggleCommentLike = (postId, commentId) => {
  if (!state.user) return;
  const posts = postsAll().map((post) => {
    if (post.id !== postId) return post;
    return {
      ...post,
      comments: post.comments.map((comment) => {
        if (comment.id !== commentId) return comment;
        const likes = new Set(comment.likes);
        if (likes.has(state.user.id)) likes.delete(state.user.id);
        else likes.add(state.user.id);
        return { ...comment, likes: [...likes] };
      }),
    };
  });
  savePosts(posts);
  refreshAll();
};

const deletePost = async (postId) => {
  if (!state.user) return;
  const post = postsAll().find((item) => item.id === postId);
  if (!post || !canManageContent(post.authorId)) return;
  const accepted = await openConfirmDialog({
    chip: "삭제 확인",
    title: "게시글을 삭제할까요?",
    body: "삭제하면 포함된 댓글도 함께 사라집니다.",
    confirmLabel: "삭제",
    cancelLabel: "취소",
    tone: "danger",
  });
  if (!accepted) return;

  const posts = postsAll().filter((item) => item.id !== postId);
  delete state.commentDrafts[postId];
  delete state.commentFeedback[postId];
  savePosts(posts);
  refreshAll();
  pushNotification({
    title: "게시글 삭제 완료",
    body: clean(post.title) || "선택한 게시글이 삭제되었습니다.",
    tone: "danger",
  });
};

const deleteComment = async (postId, commentId) => {
  if (!state.user) return;
  const post = postsAll().find((item) => item.id === postId);
  const comment = post?.comments.find((item) => item.id === commentId);
  if (!post || !comment || !canManageContent(comment.authorId)) return;
  const accepted = await openConfirmDialog({
    chip: "삭제 확인",
    title: "댓글을 삭제할까요?",
    body: "삭제한 댓글은 되돌릴 수 없습니다.",
    confirmLabel: "삭제",
    cancelLabel: "취소",
    tone: "danger",
  });
  if (!accepted) return;

  const posts = postsAll().map((item) =>
    item.id === postId ? { ...item, comments: item.comments.filter((entry) => entry.id !== commentId) } : item,
  );
  savePosts(posts);
  refreshAll();
  pushNotification({
    title: "댓글 삭제 완료",
    body: clean(post.title) || "게시글 댓글이 삭제되었습니다.",
    tone: "danger",
  });
};

const submitComment = (event) => {
  event.preventDefault();
  if (!state.user) return;
  const form = event.target;
  if (!(form instanceof HTMLFormElement)) return;
  const postId = form.dataset.postId;
  const textarea = $('[data-compose-input]', form);
  if (!textarea) return;
  const content = clean(textarea.value);
  if (!content) {
    state.commentFeedback[postId] = "댓글 내용을 입력해 주세요.";
    refreshAll();
    return;
  }

  const nextComment = normalizeComment({
    id: createId("comment"),
    content,
    authorId: state.user.id,
    authorName: state.user.nickname,
    position: state.user.position,
    createdAt: Date.now(),
    likes: [],
  });

  const posts = postsAll().map((post) =>
    post.id === postId ? { ...post, comments: [...post.comments, nextComment] } : post,
  );
  savePosts(posts);
  delete state.commentDrafts[postId];
  delete state.commentFeedback[postId];
  refreshAll();
  pushNotification({
    title: "댓글 등록 완료",
    body: content.slice(0, 60),
    tone: "info",
  });
};

const submitPost = (event) => {
  event.preventDefault();
  if (!state.user) return;
  const title = clean(el.postTitle.value);
  const content = clean(el.postContent.value);
  if (!title || !content) {
    setTimedFeedback("post", el.postFeedback, "제목과 내용을 모두 입력해 주세요.");
    return;
  }

  const nextPost = normalizePost({
    id: createId("post"),
    title,
    content,
    board: state.activeBoard,
    subtab: state.activeBoard === "handover" ? state.activeHandoverTab : "",
    authorId: state.user.id,
    authorName: state.user.nickname,
    position: state.user.position,
    createdAt: Date.now(),
    likes: [],
    reactions: {},
    attachments: {
      image: state.compose.image,
      file: state.compose.file,
    },
    comments: [],
  });

  savePosts([nextPost, ...postsAll()]);
  resetComposer();
  refreshAll();
  setTimedFeedback("post", el.postFeedback, "게시글이 등록되었습니다.", 1800);
  pushNotification({
    title: "새 게시글 등록",
    body: title,
    tone: "success",
  });
};

const submitLogin = async (event) => {
  event.preventDefault();
  const id = clean(el.authForms.login.elements.id.value);
  const password = `${el.authForms.login.elements.password.value ?? ""}`;
  if (!id || !password) {
    setAuthFeedback("login", "아이디와 비밀번호를 모두 입력해 주세요.");
    return;
  }

  try {
    setAuthBusy(true);
    state.user = await authService.login({ id, password });
    syncLockState(false);
    resetAuthForms();
    refreshAll();
    el.postTitle.focus();
  } catch (error) {
    setAuthFeedback("login", error.message || "로그인에 실패했습니다.");
  } finally {
    setAuthBusy(false);
  }
};

const submitSignup = async (event) => {
  event.preventDefault();
  const id = clean(el.authForms.signup.elements.id.value);
  const password = `${el.authForms.signup.elements.password.value ?? ""}`;
  const nickname = clean(el.authForms.signup.elements.nickname.value);
  const position = `${el.authForms.signup.elements.position.value ?? ""}`;

  if (!id || !password || !nickname || !position) {
    setAuthFeedback("signup", "아이디, 비밀번호, 닉네임, 직위를 모두 입력해 주세요.");
    return;
  }

  try {
    setAuthBusy(true);
    state.user = await authService.signup({ id, password, nickname, position });
    syncLockState(false);
    resetAuthForms();
    refreshAll();
    el.postTitle.focus();
  } catch (error) {
    setAuthFeedback("signup", error.message || "회원가입에 실패했습니다.");
  } finally {
    setAuthBusy(false);
  }
};

const saveSettings = async (event) => {
  event.preventDefault();
  if (!state.user) return;
  const user = findStoredUser(state.user.id);
  if (!user) return;

  const nickname = clean(el.settingsForm.elements.nickname.value);
  const currentPassword = `${el.settingsForm.elements.currentPassword.value ?? ""}`;
  const nextPassword = `${el.settingsForm.elements.nextPassword.value ?? ""}`;
  const confirmPassword = `${el.settingsForm.elements.confirmPassword.value ?? ""}`;

  if (!nickname) {
    setTimedFeedback("settings", el.settingsFeedback, "닉네임을 입력해 주세요.");
    return;
  }

  const wantsPasswordChange = Boolean(currentPassword || nextPassword || confirmPassword);
  if (wantsPasswordChange) {
    if (!currentPassword || !nextPassword || !confirmPassword) {
      setTimedFeedback("settings", el.settingsFeedback, "비밀번호를 변경하려면 세 칸을 모두 입력해 주세요.");
      return;
    }
    if (currentPassword !== user.password) {
      setTimedFeedback("settings", el.settingsFeedback, "현재 비밀번호가 일치하지 않습니다.");
      return;
    }
    if (nextPassword !== confirmPassword) {
      setTimedFeedback("settings", el.settingsFeedback, "새 비밀번호 확인이 일치하지 않습니다.");
      return;
    }
  }

  const nextUsers = usersAll().map((item) =>
    item.id === user.id
      ? {
          ...item,
          nickname,
          password: wantsPasswordChange ? nextPassword : item.password,
          avatarDataUrl: state.settings.avatarDataUrl,
        }
      : item,
  );
  saveUsers(nextUsers);
  const nextUser = nextUsers.find((item) => item.id === user.id);
  state.user = buildUserSession(nextUser);
  saveSession(state.user);
  refreshAll();
  updateSettingsPreview(nickname);
  el.settingsForm.elements.currentPassword.value = "";
  el.settingsForm.elements.nextPassword.value = "";
  el.settingsForm.elements.confirmPassword.value = "";
  setTimedFeedback("settings", el.settingsFeedback, "프로필 변경사항이 저장되었습니다.", 1800);
};

const logout = async () => {
  if (!state.user) return;
  el.logoutButton.disabled = true;
  try {
    await authService.logout();
    state.user = null;
    closeSettings();
    syncLockState(true);
    resetAuthForms();
    refreshAll();
  } finally {
    el.logoutButton.disabled = false;
  }
};

const handleGlobalInput = (event) => {
  const target = event.target;
  if (!(target instanceof HTMLElement)) return;

  const snopDom = getSnopDom();
  if (target === snopDom.valueInput) {
    setTimedFeedback("snop", snopDom.feedback, "");
  }

  if (target === el.postTitle || target === el.postContent) {
    setTimedFeedback("post", el.postFeedback, "");
    renderComposePreview();
  }

  if (target === el.postContent) {
    updateMentionBox(target);
    return;
  }

  if (target.matches("textarea[data-compose-input^='comment-']")) {
    const form = target.closest("[data-comment-form]");
    const postId = form?.dataset.postId;
    if (postId) {
      state.commentDrafts[postId] = target.value;
      delete state.commentFeedback[postId];
    }
    updateMentionBox(target);
    return;
  }

  if (target === el.settingsForm?.elements.nickname) {
    updateSettingsPreview(target.value);
  }
};

const handleGlobalClick = (event) => {
  const target = event.target;
  if (!(target instanceof HTMLElement)) return;

  const authTab = target.closest("[data-auth-tab]");
  if (authTab) {
    setAuthTab(authTab.dataset.authTab);
    return;
  }

  const boardTab = target.closest("[data-board-tab]");
  if (boardTab) {
    state.activeBoard = boardTab.dataset.boardTab;
    refreshAll();
    return;
  }

  if (target.closest("[data-handover-toggle]")) {
    state.handoverExpanded = !state.handoverExpanded;
    renderBoardState();
    return;
  }

  const handoverTab = target.closest("[data-handover-tab]");
  if (handoverTab) {
    state.activeBoard = "handover";
    state.activeHandoverTab = handoverTab.dataset.handoverTab;
    refreshAll();
    return;
  }

  const snopDateOption = target.closest("[data-snop-date-option]");
  if (snopDateOption) {
    selectSnopDate(snopDateOption.dataset.snopDateOption);
    return;
  }

  const filterButton = target.closest("[data-feed-filter]");
  if (filterButton) {
    state.feedFilter = filterButton.dataset.feedFilter;
    refreshAll();
    return;
  }

  if (target.closest("[data-open-settings]")) {
    openSettings();
    return;
  }

  if (target.closest("[data-theme-toggle]")) {
    toggleTheme();
    return;
  }

  if (target.closest("[data-confirm-close]") || target.closest("[data-confirm-cancel]")) {
    closeConfirmDialog(false);
    return;
  }

  if (target.closest("[data-confirm-accept]")) {
    closeConfirmDialog(true);
    return;
  }

  const notificationClose = target.closest("[data-notification-close]");
  if (notificationClose) {
    markNotificationRead(notificationClose.dataset.notificationClose);
    renderNotificationRail();
    return;
  }

  if (target.closest("[data-close-settings]")) {
    closeSettings();
    return;
  }

  if (target.closest("[data-clear-post-image]")) {
    clearComposeImage();
    return;
  }

  if (target.closest("[data-clear-post-file]")) {
    clearComposeFile();
    return;
  }

  if (target.closest("[data-settings-avatar-clear]")) {
    clearSettingsAvatar();
    return;
  }

  if (target.closest("[data-logout-button]")) {
    logout();
    return;
  }

  const emojiTrigger = target.closest("[data-emoji-trigger]");
  if (emojiTrigger) {
    toggleEmojiPicker(emojiTrigger);
    return;
  }

  const emojiCategory = target.closest("[data-emoji-category]");
  if (emojiCategory) {
    selectEmojiCategory(emojiCategory);
    return;
  }

  const emojiButton = target.closest("[data-insert-emoji]");
  if (emojiButton) {
    insertEmoji(emojiButton.dataset.target, emojiButton.dataset.insertEmoji);
    closeAllEmojiPickers();
    return;
  }

  if (!target.closest("[data-emoji-picker]")) {
    closeAllEmojiPickers();
  }

  const mentionButton = target.closest("[data-mention-select]");
  if (mentionButton) {
    insertMention(mentionButton.dataset.mentionTarget, mentionButton.dataset.mentionName);
    return;
  }

  const reactionChip = target.closest("[data-reaction-toggle]");
  if (reactionChip) {
    togglePostReaction(reactionChip.dataset.postId, reactionChip.dataset.emoji);
    return;
  }

  const postLike = target.closest("[data-post-like]");
  if (postLike) {
    togglePostLike(postLike.dataset.postId);
    animateLikeButton(postLike);
    return;
  }

  const postDelete = target.closest("[data-delete-post]");
  if (postDelete) {
    deletePost(postDelete.dataset.postId);
    return;
  }

  const commentLike = target.closest("[data-comment-like]");
  if (commentLike) {
    toggleCommentLike(commentLike.dataset.postId, commentLike.dataset.commentId);
    return;
  }

  const commentDelete = target.closest("[data-delete-comment]");
  if (commentDelete) {
    deleteComment(commentDelete.dataset.postId, commentDelete.dataset.commentId);
    return;
  }

  if (!target.closest(".mention-box") && !target.closest(".js-mention-input")) {
    hideAllMentionBoxes();
  }
};

const handleGlobalKeydown = (event) => {
  if (event.key === "Escape") {
    hideAllMentionBoxes();
    closeAllEmojiPickers();
    const calendarModal = $("[data-calendar-modal]");
    if (calendarModal && !calendarModal.hidden) {
      closeCalendarModal();
      return;
    }
    if (state.confirm.resolver) {
      closeConfirmDialog(false);
      return;
    }
    if (!el.settingsOverlay.hidden) closeSettings();
  }
};

const bindEvents = () => {
  el.postForm.addEventListener("submit", submitPost);
  if (el.snopForm) el.snopForm.addEventListener("submit", submitSnop);
  el.authForms.login.addEventListener("submit", submitLogin);
  el.authForms.signup.addEventListener("submit", submitSignup);
  el.settingsForm.addEventListener("submit", saveSettings);

  document.addEventListener("input", handleGlobalInput);
  document.addEventListener("click", handleGlobalClick);
  document.addEventListener("keydown", handleGlobalKeydown);
  document.addEventListener("paste", handleGlobalPaste);
  el.postList.addEventListener("submit", submitComment);
  el.postImageInput.addEventListener("change", handlePostImageSelect);
  el.postFileInput.addEventListener("change", handlePostFileSelect);
  el.settingsAvatarInput.addEventListener("change", handleSettingsAvatarSelect);
  if (el.snopDateInput) el.snopDateInput.addEventListener("change", handleSnopDateChange);

  el.settingsOverlay.addEventListener("click", (event) => {
    if (event.target === el.settingsOverlay) closeSettings();
  });

  if (el.confirmOverlay) {
    el.confirmOverlay.addEventListener("click", (event) => {
      if (event.target === el.confirmOverlay) closeConfirmDialog(false);
    });
  }

  if (el.cursorGlow && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    window.addEventListener("pointermove", (event) => {
      el.cursorGlow.style.left = `${event.clientX}px`;
      el.cursorGlow.style.top = `${event.clientY}px`;
      el.cursorGlow.style.opacity = "1";
    });
    window.addEventListener("pointerleave", () => {
      el.cursorGlow.style.opacity = "0";
    });
  }

  el.postEmojiRow.innerHTML = emojiButtonsHtml("post");
};

const CALENDAR_CATEGORIES = [
  { id: "important", label: "중요", color: "#ff6b6b" },
  { id: "notice", label: "공지", color: "#5e8dff" },
  { id: "operations", label: "운영", color: "#5ee3c0" },
  { id: "maintenance", label: "점검", color: "#ffb347" },
  { id: "shift", label: "교대", color: "#c78bff" },
  { id: "etc", label: "기타", color: "#94a3b8" },
];

const calendarState = {
  viewDate: new Date(),
  selectedDate: dateKeyFromDate(new Date()),
  filter: "all",
  events: [],
};

const readCalendarEvents = () => {
  try {
    const raw = readStorage(STORAGE_KEYS.calendar, []);
    return Array.isArray(raw) ? raw : [];
  } catch {
    return [];
  }
};

const writeCalendarEvents = (events) => {
  writeStorage(STORAGE_KEYS.calendar, events);
  calendarState.events = events;
};

const getCategoryById = (id) =>
  CALENDAR_CATEGORIES.find((c) => c.id === id) || CALENDAR_CATEGORIES[CALENDAR_CATEGORIES.length - 1];

const monthLabel = (date) =>
  new Intl.DateTimeFormat("ko-KR", { year: "numeric", month: "long" }).format(date);

const monthKeyOf = (d) => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}`;

const renderCalendarCategories = () => {
  const host = $("[data-calendar-categories]");
  if (!host) return;
  const items = [
    `<button type="button" class="calendar-category${calendarState.filter === "all" ? " is-active" : ""}" data-calendar-filter="all" style="--cat-color:#5e8dff"><span class="cat-dot"></span>전체</button>`,
    ...CALENDAR_CATEGORIES.map(
      (cat) =>
        `<button type="button" class="calendar-category${calendarState.filter === cat.id ? " is-active" : ""}" data-calendar-filter="${cat.id}" style="--cat-color:${cat.color}"><span class="cat-dot"></span>${escapeHtml(cat.label)}</button>`,
    ),
  ];
  host.innerHTML = items.join("");
};

const eventsForDate = (dateKey) =>
  calendarState.events
    .filter((e) => e.date === dateKey)
    .filter((e) => calendarState.filter === "all" || e.category === calendarState.filter);

const renderCalendarGrid = () => {
  const grid = $("[data-calendar-grid]");
  const titleEl = $("[data-calendar-title]");
  if (!grid || !titleEl) return;

  const view = calendarState.viewDate;
  const year = view.getFullYear();
  const month = view.getMonth();
  titleEl.textContent = monthLabel(view);

  const firstDay = new Date(year, month, 1);
  const startOffset = firstDay.getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const prevMonthDays = new Date(year, month, 0).getDate();
  const todayKey = dateKeyFromDate(new Date());

  const cells = [];

  for (let i = startOffset - 1; i >= 0; i--) {
    const d = prevMonthDays - i;
    const dateObj = new Date(year, month - 1, d);
    cells.push({ date: dateObj, outside: true });
  }
  for (let d = 1; d <= daysInMonth; d++) {
    cells.push({ date: new Date(year, month, d), outside: false });
  }
  while (cells.length % 7 !== 0) {
    const last = cells[cells.length - 1].date;
    const next = new Date(last);
    next.setDate(last.getDate() + 1);
    cells.push({ date: next, outside: true });
  }

  grid.innerHTML = cells
    .map(({ date, outside }) => {
      const key = dateKeyFromDate(date);
      const dayEvents = eventsForDate(key).slice(0, 3);
      const dots = dayEvents
        .map((e) => {
          const cat = getCategoryById(e.category);
          return `<span class="calendar-event-dot" style="--cat-color:${cat.color}"></span>`;
        })
        .join("");
      const classes = [
        "calendar-day",
        outside ? "is-outside" : "",
        key === todayKey ? "is-today" : "",
        key === calendarState.selectedDate ? "is-selected" : "",
      ]
        .filter(Boolean)
        .join(" ");
      return `<button type="button" class="${classes}" data-calendar-day="${key}"><span class="calendar-day-num">${date.getDate()}</span><span class="calendar-day-dots">${dots}</span></button>`;
    })
    .join("");
};

const renderCalendarEvents = () => {
  const listEl = $("[data-calendar-event-list]");
  const titleEl = $("[data-calendar-events-title]");
  if (!listEl || !titleEl) return;

  const selected = calendarState.selectedDate;
  const selectedDate = selected ? new Date(`${selected}T00:00:00`) : null;
  const prettyDate = selectedDate
    ? new Intl.DateTimeFormat("ko-KR", { month: "long", day: "numeric", weekday: "short" }).format(selectedDate)
    : "";
  titleEl.textContent = selected ? `${prettyDate} 이벤트` : "이번 달 이벤트";

  const items = selected
    ? eventsForDate(selected)
    : calendarState.events
        .filter((e) => e.date.startsWith(monthKeyOf(calendarState.viewDate)))
        .filter((e) => calendarState.filter === "all" || e.category === calendarState.filter)
        .sort((a, b) => a.date.localeCompare(b.date));

  if (!items.length) {
    listEl.innerHTML = `<li class="calendar-events-empty">등록된 이벤트가 없습니다.</li>`;
    return;
  }

  listEl.innerHTML = items
    .map((ev) => {
      const cat = getCategoryById(ev.category);
      const meta = `${ev.date}${ev.note ? ` · ${escapeHtml(ev.note)}` : ""} · ${escapeHtml(cat.label)}`;
      return `
        <li class="calendar-event-item" style="--cat-color:${cat.color}">
          <span class="calendar-event-bar"></span>
          <div class="calendar-event-body">
            <span class="calendar-event-title">${escapeHtml(ev.title)}</span>
            <span class="calendar-event-meta">${meta}</span>
          </div>
          <button type="button" class="calendar-event-delete" data-calendar-delete="${escapeHtml(ev.id)}" aria-label="삭제">✕</button>
        </li>
      `;
    })
    .join("");
};

const renderCalendar = () => {
  renderCalendarCategories();
  renderCalendarGrid();
  renderCalendarEvents();
};

const openCalendarModal = (prefillDate) => {
  const modal = $("[data-calendar-modal]");
  if (!modal) return;
  const form = modal.querySelector("[data-calendar-form]");
  if (form) form.reset();
  const select = modal.querySelector("[data-calendar-category-select]");
  if (select) {
    select.innerHTML = CALENDAR_CATEGORIES.map(
      (cat) => `<option value="${cat.id}">${escapeHtml(cat.label)}</option>`,
    ).join("");
  }
  const dateInput = modal.querySelector('[name="date"]');
  if (dateInput) dateInput.value = prefillDate || calendarState.selectedDate || dateKeyFromDate(new Date());
  const feedback = modal.querySelector("[data-calendar-feedback]");
  if (feedback) feedback.hidden = true;
  modal.hidden = false;
  document.body.classList.add("is-modal-open");
};

const closeCalendarModal = () => {
  const modal = $("[data-calendar-modal]");
  if (modal) modal.hidden = true;
  document.body.classList.remove("is-modal-open");
};

const handleCalendarSubmit = (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  const formData = new FormData(form);
  const date = String(formData.get("date") || "").trim();
  const category = String(formData.get("category") || "etc");
  const title = String(formData.get("title") || "").trim();
  const note = String(formData.get("note") || "").trim();
  const feedback = form.querySelector("[data-calendar-feedback]");

  if (!date || !title) {
    if (feedback) {
      feedback.textContent = "날짜와 제목은 필수입니다.";
      feedback.hidden = false;
    }
    return;
  }

  const events = calendarState.events.slice();
  events.push({
    id: `cal-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
    date,
    category,
    title,
    note,
    createdAt: Date.now(),
  });
  writeCalendarEvents(events);
  calendarState.selectedDate = date;
  calendarState.viewDate = new Date(`${date}T00:00:00`);
  renderCalendar();
  closeCalendarModal();
};

const deleteCalendarEvent = (id) => {
  const events = calendarState.events.filter((e) => e.id !== id);
  writeCalendarEvents(events);
  renderCalendar();
};

const bindCalendarEvents = () => {
  const prev = $("[data-calendar-prev]");
  const next = $("[data-calendar-next]");
  const todayBtn = $("[data-calendar-today]");
  const addBtn = $("[data-calendar-add]");
  const grid = $("[data-calendar-grid]");
  const categories = $("[data-calendar-categories]");
  const eventList = $("[data-calendar-event-list]");
  const modal = $("[data-calendar-modal]");
  const form = $("[data-calendar-form]");

  if (prev)
    prev.addEventListener("click", () => {
      const d = calendarState.viewDate;
      calendarState.viewDate = new Date(d.getFullYear(), d.getMonth() - 1, 1);
      renderCalendar();
    });
  if (next)
    next.addEventListener("click", () => {
      const d = calendarState.viewDate;
      calendarState.viewDate = new Date(d.getFullYear(), d.getMonth() + 1, 1);
      renderCalendar();
    });
  if (todayBtn)
    todayBtn.addEventListener("click", () => {
      const today = new Date();
      calendarState.viewDate = today;
      calendarState.selectedDate = dateKeyFromDate(today);
      renderCalendar();
    });
  if (addBtn)
    addBtn.addEventListener("click", () => openCalendarModal(calendarState.selectedDate));

  if (grid)
    grid.addEventListener("click", (event) => {
      const cell = event.target.closest("[data-calendar-day]");
      if (!cell) return;
      calendarState.selectedDate = cell.dataset.calendarDay;
      renderCalendar();
    });

  if (categories)
    categories.addEventListener("click", (event) => {
      const btn = event.target.closest("[data-calendar-filter]");
      if (!btn) return;
      calendarState.filter = btn.dataset.calendarFilter;
      writeStorage(STORAGE_KEYS.calendarFilter, calendarState.filter);
      renderCalendar();
    });

  if (eventList)
    eventList.addEventListener("click", (event) => {
      const btn = event.target.closest("[data-calendar-delete]");
      if (!btn) return;
      deleteCalendarEvent(btn.dataset.calendarDelete);
    });

  if (modal) {
    modal.addEventListener("click", (event) => {
      if (event.target === modal || event.target.closest("[data-calendar-modal-close]")) {
        closeCalendarModal();
      }
    });
  }

  if (form) form.addEventListener("submit", handleCalendarSubmit);
};

const initCalendar = () => {
  calendarState.events = readCalendarEvents();
  const savedFilter = readStorage(STORAGE_KEYS.calendarFilter, "all");
  calendarState.filter = savedFilter || "all";
  bindCalendarEvents();
  renderCalendar();
};

/* ========================================================
   SCROLL REVEAL — toss.im style fade-up on enter viewport
   ======================================================== */
const REVEAL_SELECTORS = [
  ".hero-card",
  ".snop-panel",
  ".composer-card",
  ".feed-card",
  ".profile-card",
  ".calendar-card",
  ".mention-card",
  ".guide-card",
  ".post-card",
  ".mention-card-item",
  ".comment-item",
  ".snop-stat-card",
];

let revealObserver = null;

const ensureRevealObserver = () => {
  if (revealObserver || typeof IntersectionObserver === "undefined") return revealObserver;
  revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-revealed");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.08, rootMargin: "0px 0px -40px 0px" },
  );
  return revealObserver;
};

const tagReveal = (root = document) => {
  const observer = ensureRevealObserver();
  const scope = root === document ? document : root;
  const nodes = scope.querySelectorAll(REVEAL_SELECTORS.join(","));
  nodes.forEach((node, index) => {
    if (node.classList.contains("reveal")) return;
    node.classList.add("reveal");
    // stagger siblings a touch within the same parent
    if (!node.hasAttribute("data-reveal-delay")) {
      const parent = node.parentElement;
      if (parent) {
        const siblingIndex = Array.prototype.indexOf.call(
          parent.querySelectorAll(REVEAL_SELECTORS.join(",")),
          node,
        );
        if (siblingIndex >= 0 && siblingIndex < 5) {
          node.setAttribute("data-reveal-delay", String(siblingIndex));
        }
      }
    }
    if (observer) {
      observer.observe(node);
    } else {
      node.classList.add("is-revealed");
    }
  });
};

const scheduleRevealSweep = (() => {
  let handle = null;
  return () => {
    if (handle) return;
    handle = requestAnimationFrame(() => {
      handle = null;
      tagReveal(document);
    });
  };
})();

/* ========================================================
   AUTH MASCOT — eyes follow mouse + password typing
   ======================================================== */
const initAuthMascot = () => {
  const mascot = document.querySelector("[data-auth-mascot]");
  if (!mascot) return;
  const pupils = mascot.querySelectorAll("[data-auth-mascot-pupil]");
  if (!pupils.length) return;

  const passwordInputs = document.querySelectorAll('.auth-form input[type="password"]');
  const idInputs = document.querySelectorAll('.auth-form input[name="id"], .auth-form input[name="nickname"]');
  const overlay = document.querySelector("[data-auth-overlay]");
  if (!overlay) return;

  const MAX_X = 6;   // px pupil travel on X
  const MAX_Y = 4;   // px pupil travel on Y
  let currentTarget = { x: 0, y: 0 };
  let animating = false;

  const getEyeCenters = () => {
    return [...pupils].map((pupil) => {
      const eye = pupil.parentElement;
      const rect = eye.getBoundingClientRect();
      return {
        pupil,
        cx: rect.left + rect.width / 2,
        cy: rect.top + rect.height / 2,
      };
    });
  };

  const applyLook = (targetX, targetY) => {
    const centers = getEyeCenters();
    centers.forEach(({ pupil, cx, cy }) => {
      const dx = targetX - cx;
      const dy = targetY - cy;
      const dist = Math.hypot(dx, dy) || 1;
      const nx = Math.max(-1, Math.min(1, dx / (dist * 0.8)));
      const ny = Math.max(-1, Math.min(1, dy / (dist * 0.8)));
      pupil.style.transform = `translate(calc(-50% + ${nx * MAX_X}px), calc(-50% + ${ny * MAX_Y}px))`;
    });
  };

  const lookAtPoint = (x, y) => {
    currentTarget = { x, y };
    applyLook(x, y);
  };

  /* Mouse tracking across the login overlay */
  overlay.addEventListener("pointermove", (event) => {
    if (overlay.hidden) return;
    if (document.activeElement && document.activeElement.matches('.auth-form input[type="password"]')) return;
    lookAtPoint(event.clientX, event.clientY);
  });

  /* ID / nickname inputs: follow caret as it moves to the right */
  idInputs.forEach((input) => {
    const updateFromInput = () => {
      const rect = input.getBoundingClientRect();
      const len = input.value.length;
      const maxLen = Math.max(input.maxLength > 0 ? input.maxLength : 24, 16);
      const ratio = Math.min(1, len / maxLen);
      const x = rect.left + 16 + (rect.width - 32) * ratio;
      const y = rect.top + rect.height / 2;
      lookAtPoint(x, y);
    };
    input.addEventListener("input", updateFromInput);
    input.addEventListener("focus", updateFromInput);
    input.addEventListener("keyup", updateFromInput);
  });

  /* Password typing: peeping eyes track character by character.
     The mascot partially covers its eyes (is-peeping), but pupils still scan. */
  passwordInputs.forEach((input) => {
    const handlePasswordFocus = () => {
      mascot.classList.add("is-peeping");
    };
    const handlePasswordBlur = () => {
      mascot.classList.remove("is-peeping");
    };
    const handlePasswordInput = () => {
      const rect = input.getBoundingClientRect();
      const len = input.value.length;
      // pretend each character is ~10px wide, cap at box width
      const virtualCaret = Math.min(rect.width - 16, 14 + len * 10);
      const x = rect.left + virtualCaret;
      const y = rect.top + rect.height / 2;
      lookAtPoint(x, y);
    };

    input.addEventListener("focus", handlePasswordFocus);
    input.addEventListener("blur", handlePasswordBlur);
    input.addEventListener("input", handlePasswordInput);
    input.addEventListener("keyup", handlePasswordInput);
  });

  /* Re-apply on window resize so pupils continue to look at last target */
  window.addEventListener("resize", () => {
    applyLook(currentTarget.x, currentTarget.y);
  });

  /* Idle blink-look pattern when overlay is visible */
  const idleGlance = () => {
    if (overlay.hidden) return;
    if (document.activeElement && document.activeElement.matches('.auth-form input')) return;
    const rect = mascot.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const angle = Math.random() * Math.PI * 2;
    const dist = 80 + Math.random() * 60;
    lookAtPoint(cx + Math.cos(angle) * dist, cy + Math.sin(angle) * dist);
  };
  setInterval(idleGlance, 3200);
};

const markStaleNotificationsRead = () => {
  const items = notificationsAll();
  let changed = false;
  const next = items.map((item) => {
    if (item.read) return item;
    if ((item.createdAt || 0) < state.sessionStartAt) {
      changed = true;
      return { ...item, read: true };
    }
    return item;
  });
  if (changed) saveNotifications(next);
};

const initialize = async () => {
  applyTheme(readThemePreference());
  const bridge = firebaseBridge();
  if (bridge?.ready) {
    try {
      await bridge.ready;
    } catch (err) {
      console.error("Firebase bootstrap failed, falling back to local cache", err);
    }
    bridge.subscribe?.(() => {
      // A remote Firestore change arrived — repaint the UI against the refreshed cache.
      try { refreshAll(); } catch (_) {}
    });
  }
  markStaleNotificationsRead();
  bindEvents();
  initCalendar();
  initAuthMascot();
  tagReveal(document);
  setAuthTab("login");
  state.snop.selectedDate = recentSevenDateKeys().at(-1) || dateKeyFromDate(new Date());
  renderComposeAttachments();
  renderComposePreview();
  const session = await authService.getSession();
  if (session) {
    state.user = session;
    syncLockState(false);
  } else {
    syncLockState(true);
  }
  refreshAll();
};

initialize();
