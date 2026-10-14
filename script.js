/* ==========================================================================
   Portfolio — app logic
   Edit the DATA object below to make this site yours.
   ========================================================================== */

/* --------------------------------------------------------------------------
   DATA — everything you need to change lives here.
   Point `avatar`, `art`, `image` and `cover` at files inside /images.
   Any image that is missing simply falls back to a coloured gradient.
   -------------------------------------------------------------------------- */
const DATA = {
  title: "portfolio",

  profile: {
    name: "your name",
    handle: "@yourhandle",
    bio: "i build things for the web — small tools, side projects and the occasional bigger one. currently studying computer science and shipping whatever i'm curious about.",
    avatar: "images/avatar.png",
    hue: 265,
    status: "dnd", // online | idle | dnd | offline
  },

  nowPlaying: {
    title: "interlude",
    artist: "some artist",
    url: "#",
    art: "images/nowplaying.png",
    hue: 250,
    statusText: "last played · 12m ago",
  },

  musicStats: [
    { value: "12.4k", label: "streams" },
    { value: "2.1k", label: "tracks" },
    { value: "980", label: "albums" },
    { value: "640", label: "artists" },
  ],
  musicNote: "all time · top lists from the last 30 days",

  topLists: {
    albums: [
      { title: "Late Bloomer, Early Death", sub: "Henry Morris", url: "#", image: "images/music/a1.png", hue: 12 },
      { title: "PRIMA", sub: "ADÉLA", url: "#", image: "images/music/a2.png", hue: 210 },
      { title: "ultraSOUND", sub: "The Neighbourhood", url: "#", image: "images/music/a3.png", hue: 280 },
      { title: "Watch The Throne", sub: "Jaÿ-Z", url: "#", image: "images/music/a4.png", hue: 40 },
    ],
    artists: [
      { title: "Cigarettes After Sex", sub: "3.1k plays", url: "#", image: "images/music/ar1.png", hue: 330 },
      { title: "Lana Del Rey", sub: "2.4k plays", url: "#", image: "images/music/ar2.png", hue: 20 },
      { title: "The Neighbourhood", sub: "1.9k plays", url: "#", image: "images/music/ar3.png", hue: 200 },
      { title: "Billy Idol", sub: "1.2k plays", url: "#", image: "images/music/ar4.png", hue: 260 },
    ],
    tracks: [
      { title: "Starry Eyes", sub: "Cigarettes After Sex", url: "#", image: "images/music/t1.png", hue: 350 },
      { title: "Let the Light In", sub: "Lana Del Rey", url: "#", image: "images/music/t2.png", hue: 30 },
      { title: "Eyes Without a Face", sub: "Billy Idol", url: "#", image: "images/music/t3.png", hue: 220 },
      { title: "american wedding", sub: "dopuu", url: "#", image: "images/music/t4.png", hue: 150 },
    ],
  },

  recentlyPlayed: [
    { title: "Starry Eyes", sub: "Cigarettes After Sex", time: "12m ago", image: "images/music/t1.png", hue: 350 },
    { title: "Let the Light In (feat. Father John Misty)", sub: "Lana Del Rey", time: "15m ago", image: "images/music/t2.png", hue: 30 },
    { title: "Eyes Without a Face", sub: "Billy Idol", time: "20m ago", image: "images/music/t3.png", hue: 220 },
    { title: "american wedding (Hotel California)", sub: "dopuu", time: "24m ago", image: "images/music/t4.png", hue: 150 },
    { title: "take my hand", sub: "kobzx2z", time: "27m ago", image: "", hue: 90 },
    { title: "2026 World Championship Theme", sub: "League of Legends", time: "31m ago", image: "", hue: 190 },
  ],

  genres: [
    { name: "indie", count: 256 },
    { name: "pop", count: 107 },
    { name: "indie pop", count: 97 },
    { name: "indie rock", count: 93 },
    { name: "rnb", count: 84 },
    { name: "female vocalists", count: 77 },
  ],

  projects: [
    {
      name: "project one",
      url: "#",
      years: "2024 — present",
      metric: "40.1m",
      metricLabel: "members",
      image: "images/projects/p1.png",
      hue: 200,
      description: "A short paragraph describing what this project does and why it exists. Mention scale, what makes it interesting, and anything you're proud of.",
      stats: [
        { value: "285.2k", label: "servers" },
        { value: "599.4m", label: "analytics rows" },
      ],
      moreStats: [
        { value: "176", label: "shards" },
        { value: "11", label: "clusters" },
        { value: "40ms", label: "avg latency" },
        { value: "799.6", label: "events / sec" },
        { value: "130.9", label: "commands / min" },
        { value: "2.6k", label: "redis ops / sec" },
        { value: "93%", label: "cache hit rate" },
      ],
      tech: ["bun", "typescript", "discord", "postgresql", "docker"],
    },
    {
      name: "project two",
      url: "#",
      years: "2025 — present",
      metric: "12.7m",
      metricLabel: "members",
      image: "images/projects/p2.png",
      hue: 280,
      description: "Another project. Keep each description to two or three sentences so the card and detail panel stay tidy.",
      stats: [
        { value: "8.4k", label: "servers" },
        { value: "1.2m", label: "daily events" },
      ],
      moreStats: [
        { value: "64", label: "shards" },
        { value: "4", label: "clusters" },
        { value: "38ms", label: "avg latency" },
        { value: "96%", label: "uptime" },
      ],
      tech: ["typescript", "postgresql", "docker"],
    },
    {
      name: "project three",
      url: "#",
      years: "2024 — present",
      metric: "913k+",
      metricLabel: "servers",
      image: "images/projects/p3.png",
      hue: 330,
      description: "A web app, a bot, a desktop tool — whatever this one is. Use the same structure and it'll stay consistent.",
      stats: [
        { value: "913k+", label: "servers" },
        { value: "120m", label: "messages / mo" },
      ],
      moreStats: [
        { value: "42", label: "shards" },
        { value: "3", label: "clusters" },
        { value: "51ms", label: "avg latency" },
        { value: "91%", label: "cache hit rate" },
      ],
      tech: ["bun", "typescript", "docker"],
    },
    {
      name: "project four",
      url: "#",
      years: "2026",
      metric: "5,000+",
      metricLabel: "users",
      image: "images/projects/p4.png",
      hue: 160,
      description: "Smaller side project. Even a one-liner here looks good in the detail panel.",
      stats: [
        { value: "5,000+", label: "users" },
        { value: "12k", label: "sessions / mo" },
      ],
      moreStats: [],
      tech: ["typescript"],
    },
  ],

  journalSubtitle: "notes on things i've built, broken and rebuilt",
  posts: [
    {
      title: "How i built this portfolio",
      date: "2026-10-02",
      read: "6 min read",
      excerpt: "A dynamic-island style frame, a blurred backdrop and a whole lot of CSS — here's how it all fits together.",
      cover: "images/journal/j1.png",
      hue: 265,
      url: "#",
    },
    {
      title: "Shipping a side project in a weekend",
      date: "2026-08-31",
      read: "9 min read",
      excerpt: "What i learned about scope, cuts and the difference between 'done' and 'good enough'.",
      cover: "images/journal/j2.png",
      hue: 200,
      url: "#",
    },
  ],

  moreSubtitle: "everything else that didn't fit anywhere",
  moreCards: [
    { id: "setup", title: "setup", subtitle: "gear & apps", glyph: "keyboard" },
    { id: "contact", title: "contact", subtitle: "say hi", glyph: "chat" },
  ],

  modals: {
    setup: {
      title: "setup",
      subtitle: "the gear & apps i use every day",
      groups: [
        {
          heading: "hardware",
          items: [
            { k: "laptop", v: "MacBook Pro 14\"" },
            { k: "keyboard", v: "Keychron Q1" },
            { k: "mouse", v: "Logitech MX Master" },
            { k: "monitor", v: "27\" 4K" },
          ],
        },
        {
          heading: "software",
          items: [
            { k: "editor", v: "VS Code" },
            { k: "terminal", v: "Warp" },
            { k: "browser", v: "Arc" },
          ],
        },
      ],
    },
    contact: {
      title: "contact",
      subtitle: "the fastest ways to reach me",
      groups: [
        {
          heading: "socials",
          items: [
            { k: "email", v: "you@example.com", href: "mailto:you@example.com" },
            { k: "github", v: "@yourhandle", href: "https://github.com" },
            { k: "discord", v: "@yourhandle", href: "#" },
            { k: "x", v: "@yourhandle", href: "https://x.com" },
          ],
        },
      ],
    },
  },
};

/* --------------------------------------------------------------------------
   Icons (Phosphor + Simple Icons paths) — no external requests.
   -------------------------------------------------------------------------- */
const BRAND = {
  bun: "M12 22.596c6.628 0 12-4.338 12-9.688 0-3.318-2.057-6.248-5.219-7.986-1.286-.715-2.297-1.357-3.139-1.89C14.058 2.025 13.08 1.404 12 1.404c-1.097 0-2.334.785-3.966 1.821a49.92 49.92 0 0 1-2.816 1.697C2.057 6.66 0 9.59 0 12.908c0 5.35 5.372 9.687 12 9.687v.001ZM10.599 4.715c.334-.759.503-1.58.498-2.409 0-.145.202-.187.23-.029.658 2.783-.902 4.162-2.057 4.624-.124.048-.199-.121-.103-.209a5.763 5.763 0 0 0 1.432-1.977Zm2.058-.102a5.82 5.82 0 0 0-.782-2.306v-.016c-.069-.123.086-.263.185-.172 1.962 2.111 1.307 4.067.556 5.051-.082.103-.23-.003-.189-.126a5.85 5.85 0 0 0 .23-2.431Zm1.776-.561a5.727 5.727 0 0 0-1.612-1.806v-.014c-.112-.085-.024-.274.114-.218 2.595 1.087 2.774 3.18 2.459 4.407a.116.116 0 0 1-.049.071.11.11 0 0 1-.153-.026.122.122 0 0 1-.022-.083 5.891 5.891 0 0 0-.737-2.331Zm-5.087.561c-.617.546-1.282.76-2.063 1-.117 0-.195-.078-.156-.181 1.752-.909 2.376-1.649 2.999-2.778 0 0 .155-.118.188.085 0 .304-.349 1.329-.968 1.874Zm4.945 11.237a2.957 2.957 0 0 1-.937 1.553c-.346.346-.8.565-1.286.62a2.178 2.178 0 0 1-1.327-.62 2.955 2.955 0 0 1-.925-1.553.244.244 0 0 1 .064-.198.234.234 0 0 1 .193-.069h3.965a.226.226 0 0 1 .19.07c.05.053.073.125.063.197Zm-5.458-2.176a1.862 1.862 0 0 1-2.384-.245 1.98 1.98 0 0 1-.233-2.447c.207-.319.503-.566.848-.713a1.84 1.84 0 0 1 1.092-.11c.366.075.703.261.967.531a1.98 1.98 0 0 1 .408 2.114 1.931 1.931 0 0 1-.698.869v.001Zm8.495.005a1.86 1.86 0 0 1-2.381-.253 1.964 1.964 0 0 1-.547-1.366c0-.384.11-.76.32-1.079.207-.319.503-.567.849-.713a1.844 1.844 0 0 1 1.093-.108c.367.076.704.262.968.534a1.98 1.98 0 0 1 .4 2.117 1.932 1.932 0 0 1-.702.868Z",
  discord: "M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z",
  docker: "M13.983 11.078h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 00.186-.186V3.574a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m0 2.716h2.118a.187.187 0 00.186-.186V6.29a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.887c0 .102.082.185.185.186m-2.93 0h2.12a.186.186 0 00.184-.186V6.29a.185.185 0 00-.185-.185H8.1a.185.185 0 00-.185.185v1.887c0 .102.083.185.185.186m-2.964 0h2.119a.186.186 0 00.185-.186V6.29a.185.185 0 00-.185-.185H5.136a.186.186 0 00-.186.185v1.887c0 .102.084.185.186.186m5.893 2.715h2.118a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m-2.93 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.083.185.185.185m-2.964 0h2.119a.185.185 0 00.185-.185V9.006a.185.185 0 00-.184-.186h-2.12a.186.186 0 00-.186.186v1.887c0 .102.084.185.186.185m-2.92 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.082.185.185.185M23.763 9.89c-.065-.051-.672-.51-1.954-.51-.338.001-.676.03-1.01.087-.248-1.7-1.653-2.53-1.716-2.566l-.344-.199-.226.327c-.284.438-.49.922-.612 1.43-.23.97-.09 1.882.403 2.661-.595.332-1.55.413-1.744.42H.751a.751.751 0 00-.75.748 11.376 11.376 0 00.692 4.062c.545 1.428 1.355 2.48 2.41 3.124 1.18.723 3.1 1.137 5.275 1.137.983.003 1.963-.086 2.93-.266a12.248 12.248 0 003.823-1.389c.98-.567 1.86-1.288 2.61-2.136 1.252-1.418 1.998-2.997 2.553-4.4h.221c1.372 0 2.215-.549 2.68-1.009.309-.293.55-.65.707-1.046l.098-.288Z",
  postgresql: "M23.5594 14.7228a.5269.5269 0 0 0-.0563-.1191c-.139-.2632-.4768-.3418-1.0074-.2321-1.6533.3411-2.2935.1312-2.5256-.0191 1.342-2.0482 2.445-4.522 3.0411-6.8297.2714-1.0507.7982-3.5237.1222-4.7316a1.5641 1.5641 0 0 0-.1509-.235C21.6931.9086 19.8007.0248 17.5099.0005c-1.4947-.0158-2.7705.3461-3.1161.4794a9.449 9.449 0 0 0-.5159-.0816 8.044 8.044 0 0 0-1.3114-.1278c-1.1822-.0184-2.2038.2642-3.0498.8406-.8573-.3211-4.7888-1.645-7.2219.0788C.9359 2.1526.3086 3.8733.4302 6.3043c.0409.818.5069 3.334 1.2423 5.7436.4598 1.5065.9387 2.7019 1.4334 3.582.553.9942 1.1259 1.5933 1.7143 1.7895.4474.1491 1.1327.1441 1.8581-.7279.8012-.9635 1.5903-1.8258 1.9446-2.2069.4351.2355.9064.3625 1.39.3772a.0569.0569 0 0 0 .0004.0041 11.0312 11.0312 0 0 0-.2472.3054c-.3389.4302-.4094.5197-1.5002.7443-.3102.064-1.1344.2339-1.1464.8115-.0025.1224.0329.2309.0919.3268.2269.4231.9216.6097 1.015.6331 1.3345.3335 2.5044.092 3.3714-.6787-.017 2.231.0775 4.4174.3454 5.0874.2212.5529.7618 1.9045 2.4692 1.9043.2505 0 .5263-.0291.8296-.0941 1.7819-.3821 2.5557-1.1696 2.855-2.9059.1503-.8707.4016-2.8753.5388-4.1012.0169-.0703.0357-.1207.057-.1362.0007-.0005.0697-.0471.4272.0307a.3673.3673 0 0 0 .0443.0068l.2539.0223.0149.001c.8468.0384 1.9114-.1426 2.5312-.4308.6438-.2988 1.8057-1.0323 1.5951-1.6698zM2.371 11.8765c-.7435-2.4358-1.1779-4.8851-1.2123-5.5719-.1086-2.1714.4171-3.6829 1.5623-4.4927 1.8367-1.2986 4.8398-.5408 6.108-.13-.0032.0032-.0066.0061-.0098.0094-2.0238 2.044-1.9758 5.536-1.9708 5.7495-.0002.0823.0066.1989.0162.3593.0348.5873.0996 1.6804-.0735 2.9184-.1609 1.1504.1937 2.2764.9728 3.0892.0806.0841.1648.1631.2518.2374-.3468.3714-1.1004 1.1926-1.9025 2.1576-.5677.6825-.9597.5517-1.0886.5087-.3919-.1307-.813-.5871-1.2381-1.3223-.4796-.839-.9635-2.0317-1.4155-3.5126zm6.0072 5.0871c-.1711-.0428-.3271-.1132-.4322-.1772.0889-.0394.2374-.0902.4833-.1409 1.2833-.2641 1.4815-.4506 1.9143-1.0002.0992-.126.2116-.2687.3673-.4426a.3549.3549 0 0 0 .0737-.1298c.1708-.1513.2724-.1099.4369-.0417.156.0646.3078.26.3695.4752.0291.1016.0619.2945-.0452.4444-.9043 1.2658-2.2216 1.2494-3.1676 1.0128zm2.094-3.988-.0525.141c-.133.3566-.2567.6881-.3334 1.003-.6674-.0021-1.3168-.2872-1.8105-.8024-.6279-.6551-.9131-1.5664-.7825-2.5004.1828-1.3079.1153-2.4468.079-3.0586-.005-.0857-.0095-.1607-.0122-.2199.2957-.2621 1.6659-.9962 2.6429-.7724.4459.1022.7176.4057.8305.928.5846 2.7038.0774 3.8307-.3302 4.7363-.084.1866-.1633.3629-.2311.5454zm7.3637 4.5725c-.0169.1768-.0358.376-.0618.5959l-.146.4383a.3547.3547 0 0 0-.0182.1077c-.0059.4747-.054.6489-.115.8693-.0634.2292-.1353.4891-.1794 1.0575-.11 1.4143-.8782 2.2267-2.4172 2.5565-1.5155.3251-1.7843-.4968-2.0212-1.2217a6.5824 6.5824 0 0 0-.0769-.2266c-.2154-.5858-.1911-1.4119-.1574-2.5551.0165-.5612-.0249-1.9013-.3302-2.6462.0044-.2932.0106-.5909.019-.8918a.3529.3529 0 0 0-.0153-.1126 1.4927 1.4927 0 0 0-.0439-.208c-.1226-.4283-.4213-.7866-.7797-.9351-.1424-.059-.4038-.1672-.7178-.0869.067-.276.1831-.5875.309-.9249l.0529-.142c.0595-.16.134-.3257.213-.5012.4265-.9476 1.0106-2.2453.3766-5.1772-.2374-1.0981-1.0304-1.6343-2.2324-1.5098-.7207.0746-1.3799.3654-1.7088.5321a5.6716 5.6716 0 0 0-.1958.1041c.0918-1.1064.4386-3.1741 1.7357-4.4823a4.0306 4.0306 0 0 1 .3033-.276.3532.3532 0 0 0 .1447-.0644c.7524-.5706 1.6945-.8506 2.802-.8325.4091.0067.8017.0339 1.1742.081 1.939.3544 3.2439 1.4468 4.0359 2.3827.8143.9623 1.2552 1.9315 1.4312 2.4543-1.3232-.1346-2.2234.1268-2.6797.779-.9926 1.4189.543 4.1729 1.2811 5.4964.1353.2426.2522.4522.2889.5413.2403.5825.5515.9713.7787 1.2552.0696.087.1372.1714.1885.245-.4008.1155-1.1208.3825-1.0552 1.717-.0123.1563-.0423.4469-.0834.8148-.0461.2077-.0702.4603-.0994.7662zm.8905-1.6211c-.0405-.8316.2691-.9185.5967-1.0105a2.8566 2.8566 0 0 0 .135-.0406 1.202 1.202 0 0 0 .1342.103c.5703.3765 1.5823.4213 3.0068.1344-.2016.1769-.5189.3994-.9533.6011-.4098.1903-1.0957.333-1.7473.3636-.7197.0336-1.0859-.0807-1.1721-.151zm.5695-9.2712c-.0059.3508-.0542.6692-.1054 1.0017-.055.3576-.112.7274-.1264 1.1762-.0142.4368.0404.8909.0932 1.3301.1066.887.216 1.8003-.2075 2.7014a3.5272 3.5272 0 0 1-.1876-.3856c-.0527-.1276-.1669-.3326-.3251-.6162-.6156-1.1041-2.0574-3.6896-1.3193-4.7446.3795-.5427 1.3408-.5661 2.1781-.463zm.2284 7.0137a12.3762 12.3762 0 0 0-.0853-.1074l-.0355-.0444c.7262-1.1995.5842-2.3862.4578-3.4385-.0519-.4318-.1009-.8396-.0885-1.2226.0129-.4061.0666-.7543.1185-1.0911.0639-.415.1288-.8443.1109-1.3505.0134-.0531.0188-.1158.0118-.1902-.0457-.4855-.5999-1.938-1.7294-3.253-.6076-.7073-1.4896-1.4972-2.6889-2.0395.5251-.1066 1.2328-.2035 2.0244-.1859 2.0515.0456 3.6746.8135 4.8242 2.2824a.908.908 0 0 1 .0667.1002c.7231 1.3556-.2762 6.2751-2.9867 10.5405zm-8.8166-6.1162c-.025.1794-.3089.4225-.6211.4225a.5821.5821 0 0 1-.0809-.0056c-.1873-.026-.3765-.144-.5059-.3156-.0458-.0605-.1203-.178-.1055-.2844.0055-.0401.0261-.0985.0925-.1488.1182-.0894.3518-.1226.6096-.0867.3163.0441.6426.1938.6113.4186zm7.9305-.4114c.0111.0792-.049.201-.1531.3102-.0683.0717-.212.1961-.4079.2232a.5456.5456 0 0 1-.075.0052c-.2935 0-.5414-.2344-.5607-.3717-.024-.1765.2641-.3106.5611-.352.297-.0414.6111.0088.6356.1851z",
  typescript: "M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z",
};

const ICONS = {
  expand: '<svg viewBox="0 0 256 256" aria-hidden="true"><path d="M220,48V96a12,12,0,0,1-24,0V77l-39.51,39.52a12,12,0,0,1-17-17L179,60H160a12,12,0,0,1,0-24h48A12,12,0,0,1,220,48ZM99.51,139.51,60,179V160a12,12,0,0,0-24,0v48a12,12,0,0,0,12,12H96a12,12,0,0,0,0-24H77l39.52-39.51a12,12,0,0,0-17-17Z"/></svg>',
  externalLink: '<svg viewBox="0 0 256 256" aria-hidden="true"><path d="M204,64V168a12,12,0,0,1-24,0V93L72.49,200.49a12,12,0,0,1-17-17L163,76H88a12,12,0,0,1,0-24H192A12,12,0,0,1,204,64Z"/></svg>',
  chevronLeft: '<svg viewBox="0 0 256 256" aria-hidden="true"><path d="M168.49,199.51a12,12,0,0,1-17,17l-80-80a12,12,0,0,1,0-17l80-80a12,12,0,0,1,17,17L97,128Z"/></svg>',
  chevronRight: '<svg viewBox="0 0 256 256" aria-hidden="true"><path d="M184.49,136.49l-80,80a12,12,0,0,1-17-17L159,128,87.51,56.49a12,12,0,1,1,17-17l80,80A12,12,0,0,1,184.49,136.49Z"/></svg>',
  chevronDown: '<svg viewBox="0 0 256 256" aria-hidden="true"><path d="M216.49,104.49l-80,80a12,12,0,0,1-17,0l-80-80a12,12,0,0,1,17-17L128,159l71.51-71.52a12,12,0,0,1,17,17Z"/></svg>',
  arrowRight: '<svg viewBox="0 0 256 256" aria-hidden="true"><path d="M224.49,136.49l-72,72a12,12,0,0,1-17-17L187,140H40a12,12,0,0,1,0-24H187L135.51,64.48a12,12,0,0,1,17-17l72,72A12,12,0,0,1,224.49,136.49Z"/></svg>',
  keyboard: '<svg viewBox="0 0 256 256" aria-hidden="true"><path d="M120,76V188a4,4,0,0,1-4,4H96v16h15.73a8.18,8.18,0,0,1,8.25,7.47,8,8,0,0,1-8,8.53H64.27A8.18,8.18,0,0,1,56,216.53,8,8,0,0,1,64,208H80V192H32A24,24,0,0,1,8,168V96A24,24,0,0,1,32,72h84A4,4,0,0,1,120,76ZM248,48V208a16,16,0,0,1-16,16H152a16,16,0,0,1-16-16V48a16,16,0,0,1,16-16h80A16,16,0,0,1,248,48ZM203.9,181.57a12,12,0,1,0-10.34,10.33A12,12,0,0,0,203.9,181.57ZM224,103.47A8.18,8.18,0,0,0,215.73,96H168.27a8.18,8.18,0,0,0-8.25,7.47,8,8,0,0,0,8,8.53h48A8,8,0,0,0,224,103.47Zm0-32A8.18,8.18,0,0,0,215.73,64H168.27A8.18,8.18,0,0,0,160,71.47,8,8,0,0,0,168,80h48A8,8,0,0,0,224,71.47Z"/></svg>',
  chat: '<svg viewBox="0 0 256 256" aria-hidden="true"><path d="M128,24A104,104,0,0,0,36.18,176.88L24.83,210.93a16,16,0,0,0,20.24,20.24l34.05-11.35A104,104,0,1,0,128,24ZM84,140a12,12,0,1,1,12-12A12,12,0,0,1,84,140Zm44,0a12,12,0,1,1,12-12A12,12,0,0,1,128,140Zm44,0a12,12,0,1,1,12-12A12,12,0,0,1,172,140Z"/></svg>',
};

const STATUS = {
  online: { color: "#23a55a", label: "Online" },
  idle: { color: "#f0b232", label: "Idle" },
  dnd: { color: "#f23f43", label: "Do not disturb" },
  offline: { color: "#80848e", label: "Offline" },
};

/* --------------------------------------------------------------------------
   Helpers
   -------------------------------------------------------------------------- */
const esc = (s) =>
  String(s == null ? "" : s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

function bars(n) {
  let out = "";
  for (let i = 0; i < n; i++) out += `<span style="animation-delay:${i * 180}ms"></span>`;
  return out;
}

function statusIcon(key) {
  const s = STATUS[key] || STATUS.offline;
  const id = "status-mask-" + key;
  return `<svg viewBox="0 0 1 1" role="img" aria-label="${s.label}"><title>${s.label}</title><defs><mask id="${id}" maskContentUnits="objectBoundingBox" x="0" y="0" width="1" height="1"><circle fill="white" cx="0.5" cy="0.5" r="0.5"></circle><rect fill="black" x="0.125" y="0.375" width="0.75" height="0.25" rx="0.125" ry="0.125"></rect></mask></defs><rect width="1" height="1" fill="${s.color}" mask="url(#${id})"></rect></svg>`;
}

function prettyDate(iso) {
  const d = new Date(iso + "T00:00:00");
  if (isNaN(d)) return iso;
  return d.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" }).toLowerCase();
}

/* --------------------------------------------------------------------------
   Page renderers
   -------------------------------------------------------------------------- */
function pageHome() {
  const p = DATA.profile;
  const np = DATA.nowPlaying;
  return `
    <div class="page-inner">
      <div class="profile">
        <span class="avatar-wrap ph" style="--h:${p.hue || 240};border-radius:50%">
          <img class="avatar" src="${esc(p.avatar)}" alt="" onerror="this.remove()">
          <span class="status">${statusIcon(p.status)}</span>
        </span>
        <div style="min-width:0">
          <h1>${esc(p.name)}</h1>
          <p class="handle">${esc(p.handle)}</p>
        </div>
      </div>
      <p class="bio">${esc(p.bio)}</p>
      <div class="np-block">
        <div class="np-card">
          <div class="np-left">
            <span class="np-art-wrap">
              <span class="np-disc"></span>
              <img class="np-art" src="${esc(np.art)}" alt="" onerror="this.style.display='none'">
              <button class="expand-btn" type="button" aria-label="Open now playing" data-open-tab="music">${ICONS.expand}</button>
            </span>
            <div class="np-meta">
              <a class="np-title" href="${esc(np.url)}" target="_blank" rel="noopener noreferrer">${esc(np.title)}</a>
              <p class="np-artist">${esc(np.artist)}</p>
            </div>
          </div>
          <div class="np-right">
            <span class="eq" aria-hidden="true">${bars(5)}</span>
            <span class="np-status">${esc(np.statusText)}</span>
          </div>
        </div>
      </div>
      <p class="clock" id="clock">--:--:--</p>
    </div>`;
}

function pageMusic() {
  const np = DATA.nowPlaying;
  return `
    <div class="page-inner">
      <div class="music-head">
        <span class="music-art-wrap ph" style="--h:${np.hue || 240}">
          <img class="music-art" src="${esc(np.art)}" alt="" onerror="this.remove()">
          <button class="expand-btn" type="button" aria-label="Open now playing" data-open-tab="home">${ICONS.expand}</button>
        </span>
        <div class="music-meta">
          <a class="t" href="${esc(np.url)}" target="_blank" rel="noopener noreferrer">${esc(np.title)}</a>
          <p class="s">${esc(np.artist)}</p>
          <p class="w">${esc(np.statusText)}</p>
        </div>
      </div>

      <div class="music-divider">
        <div class="stats-row">
          ${DATA.musicStats.map((s) => `<span><b>${esc(s.value)}</b>${esc(s.label)}</span>`).join("")}
        </div>
        <p class="stats-note">${esc(DATA.musicNote)}</p>
      </div>

      <div class="seg" id="seg">
        <button type="button" class="active" data-list="albums">albums</button>
        <button type="button" data-list="artists">artists</button>
        <button type="button" data-list="tracks">tracks</button>
      </div>
      <ul class="top-grid" id="top-grid"></ul>

      <div class="stack">
        <p class="section-label">recently played</p>
        <ul class="list">
          ${DATA.recentlyPlayed
            .map(
              (r) => `
            <li>
              <a href="${esc(r.url || "#")}" target="_blank" rel="noopener noreferrer">
                ${r.image ? `<img src="${esc(r.image)}" alt="" loading="lazy" onerror="this.outerHTML='<span class=&quot;thumb&quot;></span>'">` : `<span class="thumb"></span>`}
                <span class="meta"><span class="t">${esc(r.title)}</span><span class="s">${esc(r.sub)}</span></span>
                <span class="time">${esc(r.time)}</span>
              </a>
            </li>`
            )
            .join("")}
        </ul>
      </div>

      <div class="stack">
        <p class="section-label">genres</p>
        <ul class="chips">
          ${DATA.genres.map((g) => `<li class="chip">${esc(g.name)}<b>${esc(g.count)}</b></li>`).join("")}
        </ul>
      </div>
    </div>`;
}

function topListItem(item, i) {
  const shape = i === 0 ? "big" : i === 3 ? "wide" : "";
  return `
    <li class="${shape} ph" style="--h:${item.hue || 240}">
      <a href="${esc(item.url || "#")}" target="_blank" rel="noopener noreferrer">
        ${item.image ? `<img src="${esc(item.image)}" alt="" loading="lazy" onerror="this.remove()">` : ""}
        <span class="top-caption"><span class="t">${esc(item.title)}</span><span class="s">${esc(item.sub)}</span></span>
      </a>
    </li>`;
}

function renderTopList(key) {
  const grid = document.getElementById("top-grid");
  if (!grid) return;
  const items = (DATA.topLists[key] || []).slice(0, 4);
  grid.innerHTML = items.map(topListItem).join("");
}

function projCard(p, i) {
  return `
    <a class="proj-card ph" style="--h:${p.hue || 240}" href="${esc(p.url || "#")}" target="_blank" rel="noopener noreferrer" data-index="${i}">
      <img src="${esc(p.image)}" alt="${esc(p.name)} preview" loading="lazy" onerror="this.remove()">
      <span class="proj-caption">
        <span class="proj-ident">
          <span class="proj-name">${esc(p.name)}${ICONS.externalLink}</span>
          <span class="proj-years">${esc(p.years)}</span>
        </span>
        ${p.metric ? `<span class="proj-metric"><span class="v">${esc(p.metric)}</span><span class="l">${esc(p.metricLabel)}</span></span>` : ""}
      </span>
    </a>`;
}

function pageProjects() {
  return `
    <div class="page-inner">
      <div class="carousel">
        <div class="stage" id="stage">
          ${DATA.projects.map(projCard).join("")}
        </div>
      </div>
      <div class="proj-nav">
        <button class="icon-btn glass glass-hover" type="button" data-proj-prev aria-label="Previous project">${ICONS.chevronLeft}</button>
        <div class="dots" id="dots">
          ${DATA.projects.map((p, i) => `<button class="dot" type="button" data-goto="${i}" aria-label="${esc(p.name)}"></button>`).join("")}
        </div>
        <button class="icon-btn glass glass-hover" type="button" data-proj-next aria-label="Next project">${ICONS.chevronRight}</button>
      </div>
      <div class="proj-detail" id="proj-detail"></div>
    </div>`;
}

function projectDetail(p) {
  return `
    <p class="proj-desc">${esc(p.description)}</p>
    ${p.stats && p.stats.length
      ? `<dl class="proj-stats">${p.stats.map((s) => `<div><dd>${esc(s.value)}</dd><dt>${esc(s.label)}</dt></div>`).join("")}</dl>`
      : ""}
    ${
      p.moreStats && p.moreStats.length
        ? `<div class="more-stats-wrap">
             <button class="more-btn glass glass-hover" type="button" aria-expanded="false" data-more>show more stats ${ICONS.chevronDown}</button>
             <div class="more-panel">
               <div>
                 <dl class="more-stats">
                   ${p.moreStats.map((s) => `<div><dd>${esc(s.value)}</dd><dt>${esc(s.label)}</dt></div>`).join("")}
                 </dl>
               </div>
             </div>
           </div>`
        : ""
    }
    ${
      p.tech && p.tech.length
        ? `<div class="tech">${p.tech
            .map(
              (t) =>
                `<span class="glass">${BRAND[t] ? `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="${BRAND[t]}"></path></svg>` : ""}${esc(t)}</span>`
            )
            .join("")}</div>`
        : ""
    }`;
}

function pageJournal() {
  return `
    <div class="page-inner">
      <header class="page-header">
        <h2>journal</h2>
        <p>${esc(DATA.journalSubtitle)}</p>
      </header>
      <ul class="posts">
        ${DATA.posts
          .map(
            (post) => `
          <li>
            <a class="post" href="${esc(post.url || "#")}">
              <span class="post-cover ph" style="--h:${post.hue || 240}">
                ${post.cover ? `<img src="${esc(post.cover)}" alt="${esc(post.title)} cover" loading="lazy" onerror="this.remove()">` : ""}
              </span>
              <span class="post-body">
                <span class="post-meta"><time datetime="${esc(post.date)}">${prettyDate(post.date)}</time><span aria-hidden="true">·</span><span>${esc(post.read)}</span></span>
                <span class="post-title">${esc(post.title)}</span>
                <span class="post-excerpt">${esc(post.excerpt)}</span>
              </span>
            </a>
          </li>`
          )
          .join("")}
      </ul>
    </div>`;
}

function pageMore() {
  return `
    <div class="page-inner">
      <header class="page-header">
        <h2>more</h2>
        <p>${esc(DATA.moreSubtitle)}</p>
      </header>
      <ul class="more-grid">
        ${DATA.moreCards
          .map(
            (c) => `
          <li>
            <button class="more-card" type="button" data-more-card="${esc(c.id)}">
              <span class="more-glyph">${ICONS[c.glyph] || ""}</span>
              <span class="more-row">
                <span>
                  <span class="t">${esc(c.title)}</span>
                  <span class="s">${esc(c.subtitle)}</span>
                </span>
                <span class="more-arrow">${ICONS.arrowRight}</span>
              </span>
            </button>
          </li>`
          )
          .join("")}
      </ul>
    </div>`;
}

const RENDERERS = {
  home: pageHome,
  music: pageMusic,
  projects: pageProjects,
  journal: pageJournal,
  more: pageMore,
};

/* --------------------------------------------------------------------------
   App state & init
   -------------------------------------------------------------------------- */
const TABS = ["home", "music", "projects", "journal", "more"];
const viewport = document.getElementById("viewport");
const modalBackdrop = document.getElementById("modal");
const modalBody = modalBackdrop.querySelector(".modal");

let projIndex = 0;

function renderAll() {
  document.querySelectorAll(".page").forEach((page) => {
    const name = page.dataset.page;
    if (RENDERERS[name]) page.innerHTML = RENDERERS[name]();
  });
  renderTopList("albums");
  layoutProjects();
  startClock();
}

function currentTab() {
  const h = (location.hash || "").replace(/^#/, "");
  return TABS.includes(h) ? h : "home";
}

function setTab(tab) {
  if (!TABS.includes(tab)) tab = "home";
  document.querySelectorAll(".page").forEach((p) => {
    p.hidden = p.dataset.page !== tab;
  });
  document.querySelectorAll(".nav-link").forEach((a) => {
    a.classList.toggle("active", a.dataset.tab === tab);
    a.setAttribute("aria-current", a.dataset.tab === tab ? "page" : "false");
  });
  viewport.scrollTop = 0;
  document.title = tab === "home" ? DATA.title : `${tab} — ${DATA.title}`;
}

function go(tab) {
  if (location.hash === "#" + tab) setTab(tab);
  else location.hash = "#" + tab;
}

/* Clock -------------------------------------------------------------------- */
let clockTimer = null;
function startClock() {
  const tick = () => {
    const el = document.getElementById("clock");
    if (!el) return;
    el.textContent = new Date().toLocaleTimeString("en-GB", { hour12: false });
  };
  if (clockTimer) clearInterval(clockTimer);
  tick();
  clockTimer = setInterval(tick, 1000);
}

/* Projects carousel -------------------------------------------------------- */
function layoutProjects() {
  const cards = [...document.querySelectorAll(".proj-card")];
  const n = cards.length;
  if (!n) return;
  cards.forEach((card, i) => {
    const delta = i - projIndex;
    if (delta === 0) {
      Object.assign(card.style, { transform: "translateX(0) scale(1)", opacity: "1", zIndex: "10", filter: "none", pointerEvents: "auto" });
      card.setAttribute("aria-hidden", "false");
      card.tabIndex = 0;
    } else if (delta > 0) {
      const x = Math.min(delta, 3) * 30;
      const scale = 1 - Math.min(delta, 3) * 0.06;
      const opacity = delta <= 2 ? 1 - delta * 0.25 : 0;
      Object.assign(card.style, { transform: `translateX(${x}px) scale(${scale})`, opacity: String(opacity), zIndex: String(10 - delta), filter: "blur(1.5px) brightness(0.7)", pointerEvents: "none" });
      card.setAttribute("aria-hidden", "true");
      card.tabIndex = -1;
    } else {
      Object.assign(card.style, { transform: "translateX(-48px) scale(0.94)", opacity: "0", zIndex: "0", filter: "blur(1.5px) brightness(0.7)", pointerEvents: "none" });
      card.setAttribute("aria-hidden", "true");
      card.tabIndex = -1;
    }
  });

  document.querySelectorAll("#dots .dot").forEach((d, i) => {
    const active = i === projIndex;
    d.classList.toggle("active", active);
    d.setAttribute("aria-current", String(active));
  });

  const detail = document.getElementById("proj-detail");
  if (detail) {
    detail.innerHTML = projectDetail(DATA.projects[projIndex]);
    detail.style.animation = "none";
    void detail.offsetWidth;
    detail.style.animation = "";
  }
}

function moveProject(dir) {
  const n = DATA.projects.length;
  if (!n) return;
  projIndex = (projIndex + dir + n) % n;
  layoutProjects();
}

function gotoProject(i) {
  projIndex = (i + DATA.projects.length) % DATA.projects.length;
  layoutProjects();
}

/* Modal -------------------------------------------------------------------- */
function openModal(id) {
  const data = DATA.modals[id];
  if (!data) return;
  modalBody.innerHTML = `
    <h3>${esc(data.title)}</h3>
    <p class="modal-sub">${esc(data.subtitle || "")}</p>
    ${(data.groups || [])
      .map(
        (g) => `
      <div class="modal-group">
        <h4>${esc(g.heading)}</h4>
        <ul>
          ${g.items
            .map((it) => {
              const inner = `<span class="k">${esc(it.k)}</span><span class="v">${esc(it.v)}</span>`;
              return `<li>${it.href ? `<a href="${esc(it.href)}" target="_blank" rel="noopener noreferrer">${inner}</a>` : `<a>${inner}</a>`}</li>`;
            })
            .join("")}
        </ul>
      </div>`
      )
      .join("")}`;
  modalBackdrop.classList.add("open");
  modalBackdrop.setAttribute("aria-hidden", "false");
}

function closeModal() {
  modalBackdrop.classList.remove("open");
  modalBackdrop.setAttribute("aria-hidden", "true");
}

/* --------------------------------------------------------------------------
   Events
   -------------------------------------------------------------------------- */
window.addEventListener("hashchange", () => setTab(currentTab()));

document.addEventListener("click", (e) => {
  const openTab = e.target.closest("[data-open-tab]");
  if (openTab) {
    go(openTab.dataset.openTab);
    return;
  }

  const seg = e.target.closest("#seg button");
  if (seg) {
    document.querySelectorAll("#seg button").forEach((b) => b.classList.toggle("active", b === seg));
    renderTopList(seg.dataset.list);
    return;
  }

  if (e.target.closest("[data-proj-prev]")) return moveProject(-1);
  if (e.target.closest("[data-proj-next]")) return moveProject(1);

  const dot = e.target.closest("[data-goto]");
  if (dot) return gotoProject(Number(dot.dataset.goto));

  const more = e.target.closest("[data-more]");
  if (more) {
    const expanded = more.getAttribute("aria-expanded") === "true";
    more.setAttribute("aria-expanded", String(!expanded));
    const panel = more.parentElement.querySelector(".more-panel");
    if (panel) panel.classList.toggle("open", !expanded);
    return;
  }

  const card = e.target.closest("[data-more-card]");
  if (card) {
    openModal(card.dataset.moreCard);
    return;
  }

  if (e.target === modalBackdrop) closeModal();
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeModal();
  if (currentTab() !== "projects") return;
  if (e.key === "ArrowLeft") moveProject(-1);
  if (e.key === "ArrowRight") moveProject(1);
});

/* Swipe on the project stage */
(function enableSwipe() {
  let startX = null;
  viewport.addEventListener(
    "pointerdown",
    (e) => {
      if (currentTab() !== "projects" || !e.target.closest("#stage")) return;
      startX = e.clientX;
    },
    { passive: true }
  );
  viewport.addEventListener("pointerup", (e) => {
    if (startX == null) return;
    const dx = e.clientX - startX;
    startX = null;
    if (Math.abs(dx) > 40) moveProject(dx < 0 ? 1 : -1);
  });
})();

/* Parallax-ish: nothing needed, but keep backdrop visible under reduced motion */

/* Boot */
setTab(currentTab());
renderAll();
setTab(currentTab());

if (document.fonts && document.fonts.ready) {
  document.fonts.ready.then(() => {
    layoutProjects();
  });
}
