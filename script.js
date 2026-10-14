const DATA = {
  profile: {
    name: "your name",
    handle: "@yourhandle",
    bio: "I'm a self-taught developer who enjoys making discord bots, websites, and other projects in my free time. coding is just a hobby of mine, but i enjoy learning new things and bringing my ideas to life.",
    avatar: "",
    hue: 265,
    status: "offline",
  },

  nowPlaying: {
    title: "interlude",
    artist: "some artist",
    url: "#",
    art: "",
    hue: 250,
    statusText: "last played · 12m ago",
    playing: false,
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
      { title: "Late Bloomer, Early Death", sub: "Henry Morris", url: "#", image: "", hue: 12 },
      { title: "PRIMA", sub: "ADÉLA", url: "#", image: "", hue: 210 },
      { title: "ultraSOUND", sub: "The Neighbourhood", url: "#", image: "", hue: 280 },
      { title: "Watch The Throne", sub: "Jaÿ-Z", url: "#", image: "", hue: 40 },
    ],
    artists: [
      { title: "Cigarettes After Sex", sub: "3.1k plays", url: "#", image: "", hue: 330, cover: { artist: "Cigarettes After Sex" } },
      { title: "Lana Del Rey", sub: "2.4k plays", url: "#", image: "", hue: 20, cover: { artist: "Lana Del Rey" } },
      { title: "The Neighbourhood", sub: "1.9k plays", url: "#", image: "", hue: 200, cover: { artist: "The Neighbourhood" } },
      { title: "Billy Idol", sub: "1.2k plays", url: "#", image: "", hue: 260, cover: { artist: "Billy Idol" } },
    ],
    tracks: [
      { title: "Starry Eyes", sub: "Cigarettes After Sex", url: "#", image: "", hue: 350, cover: { artist: "Cigarettes After Sex", title: "Starry Eyes" } },
      { title: "Let the Light In", sub: "Lana Del Rey", url: "#", image: "", hue: 30, cover: { artist: "Lana Del Rey", title: "Let the Light In" } },
      { title: "Eyes Without a Face", sub: "Billy Idol", url: "#", image: "", hue: 220, cover: { artist: "Billy Idol", title: "Eyes Without a Face" } },
      { title: "american wedding", sub: "dopuu", url: "#", image: "", hue: 150, cover: { artist: "dopuu", title: "american wedding" } },
    ],
  },

  recentlyPlayed: [
    { title: "Starry Eyes", sub: "Cigarettes After Sex", time: "12m ago", image: "", hue: 350 },
    { title: "Let the Light In (feat. Father John Misty)", sub: "Lana Del Rey", time: "15m ago", image: "", hue: 30 },
    { title: "Eyes Without a Face", sub: "Billy Idol", time: "20m ago", image: "", hue: 220 },
    { title: "american wedding (Hotel California)", sub: "dopuu", time: "24m ago", image: "", hue: 150 },
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
      name: "Starfall OSINT",
      url: "https://starfall-osint.com/",
      years: "2025",
      metric: "15.5k",
      metricLabel: "visits",
      image: "images/starfall.png",
      hue: 200,
      description: "This project a comprehensive open-source intelligence platform designed for security researchers, investigators, and analysts. We provide advanced tools for IP lookup, email validation, username tracking, domain intelligence, and more-all with military-grade security.",
      stats: [],
      moreStats: [
        { value: "15.5k", label: "visits" }
      ],
      tech: ["react", "vite", "tailwind", "typescript", "three.js"],
    },
    {
      name: "Emoji Generator",
      url: "https://yin-emojis.com/",
      years: "2025",
      metric: "5,000+",
      metricLabel: "members",
      image: "images/yin.png",
      hue: 280,
      description: "Upload animated GIFs or videos, configure your grid, and download VRChat-ready sprite sheets.",
      stats: [
        { value: "5,000+", label: "members" },
      ],
      moreStats: [],
      tech: ["react", "vite", "typescript", "tailwind"],
    },
    {
      name: "semetary",
      url: "https://semetary.xyz",
      years: "2026",
      metric: "20.8k",
      metricLabel: "Users",
      image: "images/semetary.png",
      hue: 330,
      description: "Semetary is a feature-rich Discord bot built to help communities of all sizes with moderation, automation, music, utilities, and powerful server management tools.",
      stats: [
        { value: "16", label: "servers" },
        { value: "20.8k", label: "Users" },
      ],
      moreStats: [
        { value: "2", label: "shards" },
        { value: "1", label: "cluster" },
        { value: "13ms", label: "avg latency" },
        { value: "900+", label: "commands" },
      ],
      tech: ["docker", "typescript", "discord", "discordeno", "bun"],
    },
  ],

  moreSubtitle: "everything else that didn't fit anywhere",
  moreCards: [
    { id: "setup", title: "setup", subtitle: "gear & apps", glyph: "keyboard" },
    { id: "contact", title: "contact", subtitle: "say hi", glyph: "chat" },
  ],

  contact: {
    subtitle: "have something to build? my inbox is open",
    discord: "@b5c8",
    github: { handle: "@zephyrrunsyou", href: "https://github.com/zephyrrunsyou" },
  },
};

const CONFIG = {
  discord: {
    id: "194416051348439040",
    api: "https://api.lanyard.rest/v1/users",
    ws: "wss://api.lanyard.rest/socket",
  },
  lastfm: {
    apiKey: "5ed2b501f74373e927bd06a0b194dd28",
    user: "csint_dll",
    api: "https://ws.audioscrobbler.com/2.0/",
    period: "30day",
  },
};

const BRAND = {
  react: "M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z",
  tailwind: "M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z",
  bun: "M12 22.596c6.628 0 12-4.338 12-9.688 0-3.318-2.057-6.248-5.219-7.986-1.286-.715-2.297-1.357-3.139-1.89C14.058 2.025 13.08 1.404 12 1.404c-1.097 0-2.334.785-3.966 1.821a49.92 49.92 0 0 1-2.816 1.697C2.057 6.66 0 9.59 0 12.908c0 5.35 5.372 9.687 12 9.687v.001ZM10.599 4.715c.334-.759.503-1.58.498-2.409 0-.145.202-.187.23-.029.658 2.783-.902 4.162-2.057 4.624-.124.048-.199-.121-.103-.209a5.763 5.763 0 0 0 1.432-1.977Zm2.058-.102a5.82 5.82 0 0 0-.782-2.306v-.016c-.069-.123.086-.263.185-.172 1.962 2.111 1.307 4.067.556 5.051-.082.103-.23-.003-.189-.126a5.85 5.85 0 0 0 .23-2.431Zm1.776-.561a5.727 5.727 0 0 0-1.612-1.806v-.014c-.112-.085-.024-.274.114-.218 2.595 1.087 2.774 3.18 2.459 4.407a.116.116 0 0 1-.049.071.11.11 0 0 1-.153-.026.122.122 0 0 1-.022-.083 5.891 5.891 0 0 0-.737-2.331Zm-5.087.561c-.617.546-1.282.76-2.063 1-.117 0-.195-.078-.156-.181 1.752-.909 2.376-1.649 2.999-2.778 0 0 .155-.118.188.085 0 .304-.349 1.329-.968 1.874Zm4.945 11.237a2.957 2.957 0 0 1-.937 1.553c-.346.346-.8.565-1.286.62a2.178 2.178 0 0 1-1.327-.62 2.955 2.955 0 0 1-.925-1.553.244.244 0 0 1 .064-.198.234.234 0 0 1 .193-.069h3.965a.226.226 0 0 1 .19.07c.05.053.073.125.063.197Zm-5.458-2.176a1.862 1.862 0 0 1-2.384-.245 1.98 1.98 0 0 1-.233-2.447c.207-.319.503-.566.848-.713a1.84 1.84 0 0 1 1.092-.11c.366.075.703.261.967.531a1.98 1.98 0 0 1 .408 2.114 1.931 1.931 0 0 1-.698.869v.001Zm8.495.005a1.86 1.86 0 0 1-2.381-.253 1.964 1.964 0 0 1-.547-1.366c0-.384.11-.76.32-1.079.207-.319.503-.567.849-.713a1.844 1.844 0 0 1 1.093-.108c.367.076.704.262.968.534a1.98 1.98 0 0 1 .4 2.117 1.932 1.932 0 0 1-.702.868Z",
  discord: "M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z",
  docker: "M13.983 11.078h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 00.186-.186V3.574a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m0 2.716h2.118a.187.187 0 00.186-.186V6.29a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.887c0 .102.082.185.185.186m-2.93 0h2.12a.186.186 0 00.184-.186V6.29a.185.185 0 00-.185-.185H8.1a.185.185 0 00-.185.185v1.887c0 .102.083.185.185.186m-2.964 0h2.119a.186.186 0 00.185-.186V6.29a.185.185 0 00-.185-.185H5.136a.186.186 0 00-.186.185v1.887c0 .102.084.185.186.186m5.893 2.715h2.118a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m-2.93 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.083.185.185.185m-2.964 0h2.119a.185.185 0 00.185-.185V9.006a.185.185 0 00-.184-.186h-2.12a.186.186 0 00-.186.186v1.887c0 .102.084.185.186.185m-2.92 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.082.185.185.185M23.763 9.89c-.065-.051-.672-.51-1.954-.51-.338.001-.676.03-1.01.087-.248-1.7-1.653-2.53-1.716-2.566l-.344-.199-.226.327c-.284.438-.49.922-.612 1.43-.23.97-.09 1.882.403 2.661-.595.332-1.55.413-1.744.42H.751a.751.751 0 00-.75.748 11.376 11.376 0 00.692 4.062c.545 1.428 1.355 2.48 2.41 3.124 1.18.723 3.1 1.137 5.275 1.137.983.003 1.963-.086 2.93-.266a12.248 12.248 0 003.823-1.389c.98-.567 1.86-1.288 2.61-2.136 1.252-1.418 1.998-2.997 2.553-4.4h.221c1.372 0 2.215-.549 2.68-1.009.309-.293.55-.65.707-1.046l.098-.288Z",
  postgresql: "M23.5594 14.7228a.5269.5269 0 0 0-.0563-.1191c-.139-.2632-.4768-.3418-1.0074-.2321-1.6533.3411-2.2935.1312-2.5256-.0191 1.342-2.0482 2.445-4.522 3.0411-6.8297.2714-1.0507.7982-3.5237.1222-4.7316a1.5641 1.5641 0 0 0-.1509-.235C21.6931.9086 19.8007.0248 17.5099.0005c-1.4947-.0158-2.7705.3461-3.1161.4794a9.449 9.449 0 0 0-.5159-.0816 8.044 8.044 0 0 0-1.3114-.1278c-1.1822-.0184-2.2038.2642-3.0498.8406-.8573-.3211-4.7888-1.645-7.2219.0788C.9359 2.1526.3086 3.8733.4302 6.3043c.0409.818.5069 3.334 1.2423 5.7436.4598 1.5065.9387 2.7019 1.4334 3.582.553.9942 1.1259 1.5933 1.7143 1.7895.4474.1491 1.1327.1441 1.8581-.7279.8012-.9635 1.5903-1.8258 1.9446-2.2069.4351.2355.9064.3625 1.39.3772a.0569.0569 0 0 0 .0004.0041 11.0312 11.0312 0 0 0-.2472.3054c-.3389.4302-.4094.5197-1.5002.7443-.3102.064-1.1344.2339-1.1464.8115-.0025.1224.0329.2309.0919.3268.2269.4231.9216.6097 1.015.6331 1.3345.3335 2.5044.092 3.3714-.6787-.017 2.231.0775 4.4174.3454 5.0874.2212.5529.7618 1.9045 2.4692 1.9043.2505 0 .5263-.0291.8296-.0941 1.7819-.3821 2.5557-1.1696 2.855-2.9059.1503-.8707.4016-2.8753.5388-4.1012.0169-.0703.0357-.1207.057-.1362.0007-.0005.0697-.0471.4272.0307a.3673.3673 0 0 0 .0443.0068l.2539.0223.0149.001c.8468.0384 1.9114-.1426 2.5312-.4308.6438-.2988 1.8057-1.0323 1.5951-1.6698zM2.371 11.8765c-.7435-2.4358-1.1779-4.8851-1.2123-5.5719-.1086-2.1714.4171-3.6829 1.5623-4.4927 1.8367-1.2986 4.8398-.5408 6.108-.13-.0032.0032-.0066.0061-.0098.0094-2.0238 2.044-1.9758 5.536-1.9708 5.7495-.0002.0823.0066.1989.0162.3593.0348.5873.0996 1.6804-.0735 2.9184-.1609 1.1504.1937 2.2764.9728 3.0892.0806.0841.1648.1631.2518.2374-.3468.3714-1.1004 1.1926-1.9025 2.1576-.5677.6825-.9597.5517-1.0886.5087-.3919-.1307-.813-.5871-1.2381-1.3223-.4796-.839-.9635-2.0317-1.4155-3.5126zm6.0072 5.0871c-.1711-.0428-.3271-.1132-.4322-.1772.0889-.0394.2374-.0902.4833-.1409 1.2833-.2641 1.4815-.4506 1.9143-1.0002.0992-.126.2116-.2687.3673-.4426a.3549.3549 0 0 0 .0737-.1298c.1708-.1513.2724-.1099.4369-.0417.156.0646.3078.26.3695.4752.0291.1016.0619.2945-.0452.4444-.9043 1.2658-2.2216 1.2494-3.1676 1.0128zm2.094-3.988-.0525.141c-.133.3566-.2567.6881-.3334 1.003-.6674-.0021-1.3168-.2872-1.8105-.8024-.6279-.6551-.9131-1.5664-.7825-2.5004.1828-1.3079.1153-2.4468.079-3.0586-.005-.0857-.0095-.1607-.0122-.2199.2957-.2621 1.6659-.9962 2.6429-.7724.4459.1022.7176.4057.8305.928.5846 2.7038.0774 3.8307-.3302 4.7363-.084.1866-.1633.3629-.2311.5454zm7.3637 4.5725c-.0169.1768-.0358.376-.0618.5959l-.146.4383a.3547.3547 0 0 0-.0182.1077c-.0059.4747-.054.6489-.115.8693-.0634.2292-.1353.4891-.1794 1.0575-.11 1.4143-.8782 2.2267-2.4172 2.5565-1.5155.3251-1.7843-.4968-2.0212-1.2217a6.5824 6.5824 0 0 0-.0769-.2266c-.2154-.5858-.1911-1.4119-.1574-2.5551.0165-.5612-.0249-1.9013-.3302-2.6462.0044-.2932.0106-.5909.019-.8918a.3529.3529 0 0 0-.0153-.1126 1.4927 1.4927 0 0 0-.0439-.208c-.1226-.4283-.4213-.7866-.7797-.9351-.1424-.059-.4038-.1672-.7178-.0869.067-.276.1831-.5875.309-.9249l.0529-.142c.0595-.16.134-.3257.213-.5012.4265-.9476 1.0106-2.2453.3766-5.1772-.2374-1.0981-1.0304-1.6343-2.2324-1.5098-.7207.0746-1.3799.3654-1.7088.5321a5.6716 5.6716 0 0 0-.1958.1041c.0918-1.1064.4386-3.1741 1.7357-4.4823a4.0306 4.0306 0 0 1 .3033-.276.3532.3532 0 0 0 .1447-.0644c.7524-.5706 1.6945-.8506 2.802-.8325.4091.0067.8017.0339 1.1742.081 1.939.3544 3.2439 1.4468 4.0359 2.3827.8143.9623 1.2552 1.9315 1.4312 2.4543-1.3232-.1346-2.2234.1268-2.6797.779-.9926 1.4189.543 4.1729 1.2811 5.4964.1353.2426.2522.4522.2889.5413.2403.5825.5515.9713.7787 1.2552.0696.087.1372.1714.1885.245-.4008.1155-1.1208.3825-1.0552 1.717-.0123.1563-.0423.4469-.0834.8148-.0461.2077-.0702.4603-.0994.7662zm.8905-1.6211c-.0405-.8316.2691-.9185.5967-1.0105a2.8566 2.8566 0 0 0 .135-.0406 1.202 1.202 0 0 0 .1342.103c.5703.3765 1.5823.4213 3.0068.1344-.2016.1769-.5189.3994-.9533.6011-.4098.1903-1.0957.333-1.7473.3636-.7197.0336-1.0859-.0807-1.1721-.151zm.5695-9.2712c-.0059.3508-.0542.6692-.1054 1.0017-.055.3576-.112.7274-.1264 1.1762-.0142.4368.0404.8909.0932 1.3301.1066.887.216 1.8003-.2075 2.7014a3.5272 3.5272 0 0 1-.1876-.3856c-.0527-.1276-.1669-.3326-.3251-.6162-.6156-1.1041-2.0574-3.6896-1.3193-4.7446.3795-.5427 1.3408-.5661 2.1781-.463zm.2284 7.0137a12.3762 12.3762 0 0 0-.0853-.1074l-.0355-.0444c.7262-1.1995.5842-2.3862.4578-3.4385-.0519-.4318-.1009-.8396-.0885-1.2226.0129-.4061.0666-.7543.1185-1.0911.0639-.415.1288-.8443.1109-1.3505.0134-.0531.0188-.1158.0118-.1902-.0457-.4855-.5999-1.938-1.7294-3.253-.6076-.7073-1.4896-1.4972-2.6889-2.0395.5251-.1066 1.2328-.2035 2.0244-.1859 2.0515.0456 3.6746.8135 4.8242 2.2824a.908.908 0 0 1 .0667.1002c.7231 1.3556-.2762 6.2751-2.9867 10.5405zm-8.8166-6.1162c-.025.1794-.3089.4225-.6211.4225a.5821.5821 0 0 1-.0809-.0056c-.1873-.026-.3765-.144-.5059-.3156-.0458-.0605-.1203-.178-.1055-.2844.0055-.0401.0261-.0985.0925-.1488.1182-.0894.3518-.1226.6096-.0867.3163.0441.6426.1938.6113.4186zm7.9305-.4114c.0111.0792-.049.201-.1531.3102-.0683.0717-.212.1961-.4079.2232a.5456.5456 0 0 1-.075.0052c-.2935 0-.5414-.2344-.5607-.3717-.024-.1765.2641-.3106.5611-.352.297-.0414.6111.0088.6356.1851z",
  typescript: "M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z",
};

const TECH_ICONS = {
  vite: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M10 4.5l6 -1.5l-2 6.5l2 -.5l-4 7v-5l-3 1l1 -7.5"></path><path d="M15 6.5l7 -1.5l-10 17l-10 -17l7.741 1.5"></path></svg>',
  "three.js": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M8 22l-5 -19l19 5.5l-14 13.5"></path><path d="M12.573 17.58l-6.152 -1.576l8.796 -9.466l1.914 6.64"></path><path d="M12.573 17.58l-1.573 -6.58l6.13 2.179"></path><path d="M9.527 4.893l1.473 6.107l-6.31 -1.564l4.837 -4.543"></path></svg>',
  discordeno: '<svg viewBox="180 180 660 660" aria-hidden="true"><path fill="currentColor" d="M341.64,298.88c.37,0,.37,0,2.2,0c2.41,0,4.82,0,7.22,.01c1.74,0,3.47,0,5.21,0c4.69,0,9.39,0,14.08,.01c4.91,0,9.82,.01,14.73,.01c9.3,0,18.59,.01,27.88,.02c12.57,.01,25.13,.02,37.69,.02c19.78,.01,39.57,.03,59.35,.05c0,34.33,0,68.67,0,103c6.3-.02,6.3-.02,37.8-.11c7.93-.01,15.86-.03,23.79-.04c12.57-.01,25.14-.04,37.71-.08c9.15-.03,18.31-.05,27.47-.05c4.84-.01,9.68-.02,14.52-.04c4.57-.02,9.15-.02,13.72-.02c1.66,0,3.33-.01,4.99-.02c15.72-.1,31.51,1.49,46.63,6.05c.86,.25,1.72,.51,2.61,.77c14.82,4.55,28.51,11.55,41.76,19.54c.84,.48,1.67,.97,2.53,1.46c7.47,4.49,13.4,9.88,19.47,16.1c.48,.49,.96,.97,1.45,1.47c7.46,7.57,14.46,15.26,20.55,23.97c.19,.27,.19,.27,1.16,1.63c23.96,33.99,33.07,76.27,26.25,117.25c-.44,2.38-.91,4.75-1.41,7.12c-.16,.78-.32,1.56-.49,2.36c-5.15,23.91-16.03,45.8-31.51,64.64c-.47,.58-.94,1.16-1.42,1.75c-24.63,30.16-57.78,49.72-95.89,57.5c-.8,.16-1.6,.33-2.43,.49c-11.69,2.26-23.34,2.4-35.21,2.37c-1.68,0-3.37,0-5.06,0c-4.54,0-9.09,0-13.64-.01c-4.76,0-9.52-.01-14.28-.01c-9.01,0-18.02-.01-27.02-.02c-12.18-.01-24.36-.02-36.54-.02c-19.17-.01-38.34-.03-57.51-.05c0-34.33,0-68.67,0-103c-12.18,.02-24.37,.05-36.55,.07c-7.67,.01-15.34,.02-23,.03c-12.15,.01-24.31,.02-36.46,.05c-8.85,.02-17.71,.03-26.56,.04c-4.68,0-9.36,.01-14.04,.02c-4.42,.02-8.85,.02-13.27,.02c-1.6,0-3.21,0-4.82,.01c-14.7,.07-29.43-.84-43.74-4.43c-.43-.1-.43-.1-2.63-.65C278.07,610.25,253.3,594.4,231,572c-.55-.53-1.1-1.06-1.66-1.6c-4.16-4.06-7.82-8.29-11.28-12.96c-.51-.7-1.03-1.39-1.56-2.11c-24.36-33.32-35.1-76-29.25-116.89C192.1,408.23,204.23,374.49,227,353c.99-1.03,1.97-2.06,2.95-3.09c28.76-29.92,69.49-51.06,111.69-51.03Zm-29.01,87.87c-.66,.34-1.31,.69-1.98,1.04C304.7,391,299.21,394.69,294,399c-.35,.28-.35,.28-2.1,1.72c-10.01,9.08-17.04,22.5-20.9,35.28c-.32,1.05-.63,2.1-.96,3.18c-5.57,21.71-2.13,43.75,8.9,63.04c11.04,18.52,28,31.62,48.76,37.55c10.89,2.68,21.42,2.61,32.57,2.52c2.02,0,4.04-.01,6.06-.01c5.27-.01,10.54-.04,15.82-.07c6.34-.04,12.69-.05,19.04-.07c9.6-.03,19.21-.09,28.81-.14c.33-29.67,.67-59.33,1-89c19,19.06,19,19.06,24.95,25.04c1.58,1.58,3.16,3.16,4.74,4.75c.8,.8,1.6,1.61,2.43,2.44c.39,.39,.39,.39,2.39,2.4c.68,.67,1.35,1.35,2.05,2.05c1.97,1.87,3.97,3.66,6.03,5.44c5.31,4.62,10.39,9.46,15.49,14.31c.53,.5,1.07,1.01,1.62,1.53c10.52,9.99,20.94,20.09,31.32,30.22c6.6,6.43,13.22,12.82,19.92,19.14c5.87,5.54,11.68,11.14,17.43,16.81c3.03,2.99,6.08,5.94,9.21,8.83c12.43,11.47,21.64,20.77,22.36,38.37c.07,5.95-.23,11.85-.76,17.78c-.06,.95-.12,1.91-.18,2.89c2.01,2.01,6.08,1.16,8.83,1.16c.82,.01,1.64,.01,2.49,.02c2.74,.01,5.47,.02,8.21,.02c1.91,.01,3.82,.01,5.73,.02c4.01,.01,8.03,.02,12.05,.02c5.11,.01,10.21,.03,15.32,.06c3.95,.02,7.9,.02,11.86,.02c1.87,.01,3.75,.01,5.63,.03c27.44,.18,49.88-5.41,70.42-24.8c16.65-17.26,22.13-39.98,21.8-63.21c-.81-22.17-11.27-40.74-26.96-55.87c-20.71-18-45.44-20.82-71.84-20.7c-1.82,0-3.63,0-5.44,0c-3.77,0-7.53,.01-11.29,.02c-4.83,.02-9.65,.02-14.48,.02c-3.73,0-7.45,.01-11.18,.02c-1.78,0-3.56,0-5.35,0c-2.47,.01-4.94,.01-7.41,.02c-.37,0-.37,0-2.24,0c-5.04,.04-5.04,.04-6.15,1.15c-.13,2.77-.19,5.51-.21,8.28c-.01,.87-.02,1.74-.03,2.63c-.03,2.89-.05,5.77-.08,8.66c-.02,1.99-.04,3.98-.06,5.98c-.05,5.26-.1,10.52-.15,15.78c-.05,5.36-.11,10.72-.16,16.08c-.11,10.53-.21,21.06-.31,31.59c-20.69-19.89-41.27-39.88-61.75-59.99c-1.9-1.86-3.8-3.73-5.7-5.59c-.47-.47-.94-.93-1.43-1.41c-7.14-7-14.33-13.94-21.54-20.86c-8.39-8.06-16.72-16.16-24.98-24.35c-4.37-4.33-8.76-8.62-13.23-12.84c-31.15-29.47-31.15-29.47-32.07-48.05c-.06-6.73,.54-13.29,1.7-19.91c-11.7-.09-23.4-.16-35.11-.21c-5.43-.02-10.87-.05-16.3-.09c-5.26-.05-10.52-.07-15.78-.08c-1.99-.01-3.98-.02-5.97-.04c-15.24-.16-30.54,.66-44.21,8.17Z"/></svg>',
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
  arrowLeft: '<svg viewBox="0 0 256 256" aria-hidden="true"><path d="M228,128a12,12,0,0,1-12,12H69l51.52,51.51a12,12,0,0,1-17,17l-72-72a12,12,0,0,1,0-17l72-72a12,12,0,0,1,17,17L69,116H216A12,12,0,0,1,228,128Z"/></svg>',
  copy: '<svg viewBox="0 0 256 256" aria-hidden="true"><path d="M184,64H40a8,8,0,0,0-8,8V216a8,8,0,0,0,8,8H184a8,8,0,0,0,8-8V72A8,8,0,0,0,184,64Zm-8,144H48V80H176ZM224,40V184a8,8,0,0,1-16,0V48H72a8,8,0,0,1,0-16H216A8,8,0,0,1,224,40Z"/></svg>',
  github: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>',
};

const stroke = (inner) =>
  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${inner}</svg>`;

const PLAYER_ICONS = {
  pause: stroke('<rect x="6" y="4" width="4" height="16" rx="1" fill="currentColor" stroke="none"/><rect x="14" y="4" width="4" height="16" rx="1" fill="currentColor" stroke="none"/>'),
  prev: stroke('<polygon points="19 20 9 12 19 4 19 20" fill="currentColor" stroke="none"/><line x1="5" y1="4" x2="5" y2="20"/>'),
  next: stroke('<polygon points="5 4 15 12 5 20 5 4" fill="currentColor" stroke="none"/><line x1="19" y1="4" x2="19" y2="20"/>'),
  shuffle: stroke('<polyline points="16 3 21 3 21 8"/><line x1="4" y1="20" x2="21" y2="3"/><polyline points="21 16 21 21 16 21"/><line x1="15" y1="15" x2="21" y2="21"/><line x1="4" y1="4" x2="9" y2="9"/>'),
  repeat: stroke('<polyline points="17 1 21 5 17 9"/><path d="M3 11V9a4 4 0 0 1 4-4h14"/><polyline points="7 23 3 19 7 15"/><path d="M21 13v2a4 4 0 0 1-4 4H3"/>'),
  close: stroke('<line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>'),
};

const STATUS = {
  online: { color: "#23a55a", label: "Online" },
  idle: { color: "#f0b232", label: "Idle" },
  dnd: { color: "#f23f43", label: "Do not disturb" },
  offline: { color: "#80848e", label: "Offline" },
};

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

const LF_PLACEHOLDER = "2a96cbd8b46e442fc41c2b86b821562f";

function hueFromString(s) {
  let h = 0;
  s = String(s || "");
  for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) % 360;
  return h;
}

function lfImage(item) {
  const arr = item && item.image;
  if (!arr) return "";
  const best = arr.find((x) => x.size === "extralarge") || arr[arr.length - 1] || arr[0];
  const url = (best && best["#text"]) || "";
  if (!url || url.includes(LF_PLACEHOLDER)) return "";
  return url;
}

function formatCount(n) {
  n = Number(n) || 0;
  if (n >= 1e6) return (n / 1e6).toFixed(1).replace(/\.0$/, "") + "m";
  if (n >= 1e3) return (n / 1e3).toFixed(1).replace(/\.0$/, "") + "k";
  return String(n);
}

function timeAgo(uts) {
  const s = Math.floor(Date.now() / 1000) - Number(uts || 0);
  if (!isFinite(s) || s < 0) return "";
  if (s < 60) return s + "s ago";
  if (s < 3600) return Math.floor(s / 60) + "m ago";
  if (s < 86400) return Math.floor(s / 3600) + "h ago";
  return Math.floor(s / 86400) + "d ago";
}

function lfArtist(t) {
  if (!t || !t.artist) return "";
  return t.artist["#text"] || t.artist.name || "";
}

async function lastfm(method, params) {
  const u = new URL(CONFIG.lastfm.api);
  u.searchParams.set("method", method);
  u.searchParams.set("user", CONFIG.lastfm.user);
  u.searchParams.set("api_key", CONFIG.lastfm.apiKey);
  u.searchParams.set("format", "json");
  Object.entries(params || {}).forEach(([k, v]) => u.searchParams.set(k, v));
  const res = await fetch(u.toString());
  if (!res.ok) throw new Error(`${method} → HTTP ${res.status}`);
  return res.json();
}

function discordAvatar(user) {
  if (!user || !user.id) return "";
  if (!user.avatar) return `https://cdn.discordapp.com/embed/avatars/0.png`;
  const ext = user.avatar.startsWith("a_") ? "gif" : "png";
  return `https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.${ext}?size=256`;
}

const ACT_VERB = { 0: "playing", 1: "streaming", 2: "listening to", 3: "watching", 5: "competing in" };
const ACT_TYPES = [0, 1, 3, 5];

function activityAsset(a) {
  const img = a && a.assets && a.assets.large_image;
  if (img) {
    if (/^https?:/i.test(img)) return img;
    if (!img.startsWith("spotify:")) {
      if (img.startsWith("mp:external/")) return "https://media.discordapp.net/external/" + img.slice("mp:external/".length);
      if (a.application_id) return `https://cdn.discordapp.com/app-assets/${a.application_id}/${img}.png`;
    }
  }
  if (a && a.application_id) return `https://dcdn.dstn.to/app-icons/${a.application_id}`;
  return "";
}

function pickActivity(list) {
  if (!Array.isArray(list)) return null;
  const a = list.find((x) => x && ACT_TYPES.includes(x.type) && x.name);
  if (!a) return null;
  const ts = a.timestamps || {};
  return {
    name: a.name,
    details: a.details || "",
    state: a.state || "",
    art: activityAsset(a),
    start: Number(ts.start) || 0,
    hue: hueFromString(a.name || ""),
    verb: ACT_VERB[a.type] || "playing",
  };
}

function fmtDuration(ms) {
  const s = Math.max(0, Math.floor(ms / 1000));
  const h = Math.floor(s / 3600);
  const m = Math.floor((s % 3600) / 60);
  const sec = s % 60;
  if (h) return h + "h " + m + "m";
  if (m) return m + "m " + sec + "s";
  return sec + "s";
}

const coverCache = new Map();

function coverImg({ src, artist, title, album, alt }) {
  const attrs = [];
  attrs.push("data-cover");
  if (artist) attrs.push(`data-artist="${esc(artist)}"`);
  if (title) attrs.push(`data-title="${esc(title)}"`);
  if (album) attrs.push(`data-album="${esc(album)}"`);
  if (src) attrs.push(`src="${esc(src)}"`);
  attrs.push(`alt="${esc(alt || "")}"`);
  attrs.push('decoding="async"');
  attrs.push('loading="lazy"');
  return `<img ${attrs.join(" ")}>`;
}

function itunesJsonp(url) {
  return new Promise((resolve, reject) => {
    const callback = `__portfolioArtwork_${Math.random().toString(36).slice(2)}`;
    const script = document.createElement("script");
    let settled = false;
    const finish = (error, data) => {
      if (settled) return;
      settled = true;
      clearTimeout(timeout);
      script.remove();
      delete window[callback];
      if (error) reject(error);
      else resolve(data);
    };
    window[callback] = data => finish(null, data);
    script.onerror = () => finish(new Error("iTunes artwork lookup failed"));
    script.src = `${url}&callback=${callback}`;
    const timeout = setTimeout(() => finish(new Error("iTunes artwork lookup timed out")), 6500);
    document.head.appendChild(script);
  });
}

async function loadItunesResults(url) {
  try {
    const response = await fetch(url, { mode: "cors" });
    if (response.ok) return (await response.json()).results || [];
  } catch (e) { }
  try { return (await itunesJsonp(url)).results || []; }
  catch (e) { return []; }
}

function loadImageUrl(url) {
  return new Promise(resolve => {
    if (!url) return resolve(false);
    const probe = new Image();
    const timer = setTimeout(() => { probe.onload = probe.onerror = null; resolve(false); }, 8000);
    probe.onload = () => { clearTimeout(timer); resolve(true); };
    probe.onerror = () => { clearTimeout(timer); resolve(false); };
    probe.src = url;
  });
}

async function findCover({ artist, album, title }) {
  const key = `cover|${artist}|${album}|${title}`.toLowerCase();
  if (!key || key === "cover|||") return "";
  if (coverCache.has(key)) return coverCache.get(key);

  const promise = (async () => {
    const itunesQueries = [];
    if (album) {
      itunesQueries.push({ term: [artist, album].filter(Boolean).join(" "), entity: "album" });
      itunesQueries.push({ term: album, entity: "album" });
    } else if (title) {
      itunesQueries.push({ term: [artist, title].filter(Boolean).join(" "), entity: "song" });
      itunesQueries.push({ term: title, entity: "song" });
    } else if (artist) {
      itunesQueries.push({ term: artist, entity: "album" });
      itunesQueries.push({ term: artist, entity: "song" });
    }
    for (const q of itunesQueries) {
      if (!q.term) continue;
      try {
        const url = `https://itunes.apple.com/search?term=${encodeURIComponent(q.term)}&entity=${q.entity}&limit=5&media=music`;
        const results = await loadItunesResults(url);
        const normalizedArtist = (artist || "").toLowerCase().trim();
        const hit = results.find(x => x.artworkUrl100 && (!normalizedArtist || (x.artistName || "").toLowerCase().includes(normalizedArtist)))
          || (!normalizedArtist ? results.find(x => x.artworkUrl100) : null);
        if (hit) {
          const original = hit.artworkUrl100;
          const large = original.replace(/100x100(bb)?\.(jpg|png)(\?.*)?$/i, "600x600bb.jpg");
          if (await loadImageUrl(large)) return large;
          if (await loadImageUrl(original)) return original;
        }
      } catch (e) { }
    }

    if (album && artist) {
      try {
        const mbUrl = `https://musicbrainz.org/ws/2/release-group?query=releasegroup:"${encodeURIComponent(album)}"+AND+artist:"${encodeURIComponent(artist)}"&fmt=json&limit=1`;
        const mbRes = await fetch(mbUrl, { headers: { Accept: "application/json" } });
        if (mbRes.ok) {
          const mbJson = await mbRes.json();
          const rg = mbJson["release-groups"]?.[0];
          if (rg?.id) {
            const caaUrl = `https://coverartarchive.org/release-group/${rg.id}`;
            const caaRes = await fetch(caaUrl);
            if (caaRes.ok) {
              const caaJson = await caaRes.json();
              const img = caaJson.images?.find((i) => i.front) || caaJson.images?.[0];
              if (img?.image) return img.image;
            }
          }
        }
      } catch (e) { }
    }

    if (artist) {
      try {
        const method = album ? "album.getinfo" : "track.getinfo";
        const params = new URLSearchParams({
          method,
          artist,
          api_key: "b25b959554ed76058ac220b7b2e0a026",
          format: "json",
        });
        if (album) params.set("album", album);
        if (title && !album) params.set("track", title);
        const lfRes = await fetch(`https://ws.audioscrobbler.com/2.0/?${params}`);
        if (lfRes.ok) {
          const lfJson = await lfRes.json();
          const images = lfJson.album?.image || lfJson.track?.album?.image || lfJson.track?.image || [];
          const large = images.find((i) => i.size === "extralarge") || images.find((i) => i.size === "large") || images[images.length - 1];
          if (large?.["#text"]) return large["#text"];
        }
      } catch (e) { }
    }

    if (artist) {
      try {
        const q = album ? `album:"${album}" artist:"${artist}"` : `track:"${title}" artist:"${artist}"`;
        const dzUrl = `https://api.deezer.com/search?q=${encodeURIComponent(q)}&limit=5`;
        const dzRes = await fetch(dzUrl);
        if (dzRes.ok) {
          const dzJson = await dzRes.json();
          const hit = dzJson.data?.[0];
          if (hit?.album?.cover_xl) return hit.album.cover_xl;
          if (hit?.album?.cover_big) return hit.album.cover_big;
        }
      } catch (e) { }
    }

    return "";
  })();

  coverCache.set(key, promise);
  return promise;
}

async function hydrateCovers(root) {
  const imgs = [...(root || document).querySelectorAll("img[data-cover]:not([data-done])")];
  await Promise.all(imgs.map(async img => {
    img.dataset.done = "1";
    const existing = img.getAttribute("src") || "";
    const artist = img.dataset.artist || "";
    const title = img.dataset.title || "";
    const album = img.dataset.album || "";
    if (existing && await loadImageUrl(existing)) {
      if (img.isConnected) img.src = existing;
      return;
    }
    const artwork = await findCover({ artist, title, album });
    if (!img.isConnected) return;
    if (artwork && await loadImageUrl(artwork)) {
      img.src = artwork;
    } else {
      img.removeAttribute("src");
      img.style.opacity = "0";
    }
  }));
}

async function loadDiscord() {
  try {
    const res = await fetch(`${CONFIG.discord.api}/${CONFIG.discord.id}`);
    if (!res.ok) throw new Error("lanyard → HTTP " + res.status);
    const { data } = await res.json();
    const u = (data && data.discord_user) || {};
    DATA.profile.name = u.display_name || u.global_name || u.username || DATA.profile.name;
    DATA.profile.handle = u.username ? "@" + u.username : DATA.profile.handle;
    DATA.profile.avatar = discordAvatar(u) || DATA.profile.avatar;
    DATA.profile.hue = hueFromString(u.username || DATA.profile.name);
    if (data && STATUS[data.discord_status]) DATA.profile.status = data.discord_status;
    spApply(data);
    renderPage("home");
  } catch (e) {
    console.warn("Discord presence unavailable:", e.message);
  }
}

async function loadLastfm() {
  const period = CONFIG.lastfm.period;
  let recent, info, albums, artists, tracks, tags;
  try {
    [recent, info, albums, artists, tracks, tags] = await Promise.all([
      lastfm("user.getrecenttracks", { limit: 8 }),
      lastfm("user.getinfo", {}),
      lastfm("user.gettopalbums", { limit: 4, period }),
      lastfm("user.gettopartists", { limit: 4, period }),
      lastfm("user.gettoptracks", { limit: 4, period }),
      lastfm("user.gettoptags", { limit: 6 }),
    ]);
  } catch (e) {
    console.warn("Last.fm unavailable:", e.message);
    return;
  }

  const list = [].concat((recent.recenttracks && recent.recenttracks.track) || []);
  const isNow = (t) => t && t["@attr"] && t["@attr"].nowplaying === "true";
  const now = list.find(isNow);
  const latest = now || list[0];
  if (latest) {
    const lfNp = {
      title: latest.name || "unknown",
      artist: lfArtist(latest),
      url: latest.url || "#",
      art: lfImage(latest),
      hue: hueFromString(latest.name || ""),
      playing: !!now,
      statusText: now ? "now playing" : latest.date && latest.date.uts ? "last played · " + timeAgo(latest.date.uts) : "last played",
    };
    DATA._lastfmNowPlaying = lfNp;
    if (!SP.active) {
      DATA.nowPlaying = lfNp;
      npKey = nowPlayingKey(lfNp);
    }
  }

  DATA.recentlyPlayed = list.slice(0, 8).map((t) => ({
    title: t.name || "",
    sub: lfArtist(t),
    url: t.url || "#",
    image: lfImage(t),
    cover: { artist: lfArtist(t), title: t.name || "" },
    hue: hueFromString(t.name || ""),
    time: isNow(t) ? "now playing" : t.date && t.date.uts ? timeAgo(t.date.uts) : "",
  }));

  const i = (info && info.user) || {};
  DATA.musicStats = [
    { value: formatCount(i.playcount), label: "scrobbles" },
    { value: formatCount(i.track_count), label: "tracks" },
    { value: formatCount(i.album_count), label: "albums" },
    { value: formatCount(i.artist_count), label: "artists" },
  ];
  DATA.musicNote = "all time · top lists from the last 30 days";

  const albumList = (albums.topalbums && albums.topalbums.album) || [];
  const artistList = (artists.topartists && artists.topartists.artist) || [];
  const trackList = (tracks.toptracks && tracks.toptracks.track) || [];
  DATA.topLists = {
    albums: albumList.map((a) => ({ title: a.name, sub: (a.artist && a.artist.name) || "", url: a.url || "#", image: lfImage(a), cover: { artist: (a.artist && a.artist.name) || "", album: a.name || "" }, hue: hueFromString(a.name || "") })),
    artists: artistList.map((a) => ({ title: a.name, sub: formatCount(a.playcount) + " plays", url: a.url || "#", image: lfImage(a), cover: { artist: a.name || "" }, hue: hueFromString(a.name || "") })),
    tracks: trackList.map((t) => ({ title: t.name, sub: lfArtist(t), url: t.url || "#", image: lfImage(t), cover: { artist: lfArtist(t), title: t.name || "" }, hue: hueFromString(t.name || "") })),
  };

  DATA.genres = ((tags.toptags && tags.toptags.tag) || []).map((t) => ({ name: t.name, count: t.count }));

  renderPage("home");
  renderPage("music");
  if (!SP.active && DATA.nowPlaying.playing) startHomeLyrics(DATA.nowPlaying);
  else if (!SP.active) stopHomeLyrics();
}

function pageHome() {
  const p = DATA.profile;
  const np = DATA.nowPlaying;
  return `
    <div class="page-inner">
      <div class="profile">
        <span class="avatar-wrap ph" style="--h:${p.hue || 240};border-radius:50%">
          ${p.avatar ? `<img class="avatar" src="${esc(p.avatar)}" alt="" onerror="this.remove()">` : ""}
          <span class="status">${statusIcon(p.status)}</span>
        </span>
        <div style="min-width:0">
          <h1>${esc(p.name)}</h1>
          <p class="handle">${esc(p.handle)}</p>
        </div>
      </div>
      <p class="bio">${esc(p.bio)}</p>
      <div class="np-block">
        <div class="np-card${np.playing ? " playing" : ""}">
          <div class="np-left">
            <span class="np-art-wrap">
              <span class="np-disc"></span>
              ${np.art ? `<img class="np-art" src="${esc(np.art)}" alt="" onerror="this.style.display='none'">` : ""}
              <button class="expand-btn" type="button" aria-label="Open player" data-open-player>${ICONS.expand}</button>
            </span>
            <div class="np-meta">
              <a class="np-title" href="${esc(np.url)}" target="_blank" rel="noopener noreferrer">${esc(np.title)}</a>
              <p class="np-artist">${esc(np.artist)}</p>
            </div>
          </div>
          <div class="np-right">
            ${
              np.playing
                ? `<span class="np-lyric" id="np-lyric" title="${esc(np.statusText)}">now playing</span>`
                : `<span class="eq" aria-hidden="true">${bars(5)}</span>
                   <span class="np-status">${esc(np.statusText)}</span>`
            }
          </div>
        </div>
      </div>
      ${activityCard()}
      <p class="clock" id="clock">--:--:--</p>
    </div>`;
}

function activityCard() {
  const a = DATA.activity;
  if (!a) return "";
  const sub = [a.details, a.state].filter(Boolean).join(" · ");
  return `
      <div class="act-block">
        <div class="act-card">
          <span class="act-art-wrap">
            ${a.art ? `<img class="act-art" src="${esc(a.art)}" alt="" onerror="this.remove()">` : ""}
          </span>
          <div class="act-meta">
            <span class="act-title">${esc(a.name)}</span>
            ${sub ? `<span class="act-sub">${esc(sub)}</span>` : ""}
          </div>
          ${a.start ? `<span class="act-time" id="act-time">${esc(actTimeText(a))}</span>` : ""}
        </div>
      </div>`;
}

function actTimeText(a) {
  const verb = a.verb || "playing";
  return verb.charAt(0).toUpperCase() + verb.slice(1) + " for " + fmtDuration(Date.now() - a.start);
}

function pageMusic() {
  const np = DATA.nowPlaying;
  return `
    <div class="page-inner">
      <div class="music-head">
        <span class="music-art-wrap ph" style="--h:${np.hue || 240}">
          ${np.art ? `<img class="music-art" src="${esc(np.art)}" alt="" onerror="this.remove()">` : ""}
          <button class="expand-btn" type="button" aria-label="Open player" data-open-player>${ICONS.expand}</button>
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
        ${["albums", "artists", "tracks"]
          .map((k) => `<button type="button" class="${k === activeList ? "active" : ""}" data-list="${k}">${k}</button>`)
          .join("")}
      </div>
      <ul class="top-grid" id="top-grid"></ul>

      ${
        DATA.recentlyPlayed && DATA.recentlyPlayed.length
          ? `<div class="stack">
        <p class="section-label">recently played</p>
        <ul class="list">
          ${DATA.recentlyPlayed
            .map(
              (r) => `
            <li>
              <a href="${esc(r.url || "#")}" target="_blank" rel="noopener noreferrer">
                <span class="thumb-wrap ph" style="--h:${r.hue || 240}">
                  ${coverImg({ src: r.image, artist: (r.cover || {}).artist, title: (r.cover || {}).title, alt: "" })}
                </span>
                <span class="meta"><span class="t">${esc(r.title)}</span><span class="s">${esc(r.sub)}</span></span>
                <span class="time">${esc(r.time)}</span>
              </a>
            </li>`
            )
            .join("")}
        </ul>
      </div>`
          : ""
      }

      ${
        DATA.genres && DATA.genres.length
          ? `<div class="stack">
        <p class="section-label">genres</p>
        <ul class="chips">
          ${DATA.genres.map((g) => `<li class="chip">${esc(g.name)}<b>${esc(g.count)}</b></li>`).join("")}
        </ul>
      </div>`
          : ""
      }
    </div>`;
}

function topListItem(item, i) {
  const shape = i === 0 ? "big" : i === 3 ? "wide" : "";
  const c = item.cover || {};
  return `
    <li class="${shape} ph" style="--h:${item.hue || 240}">
      <a href="${esc(item.url || "#")}" target="_blank" rel="noopener noreferrer">
        ${coverImg({ src: item.image, artist: c.artist, album: c.album, title: c.title, alt: "" })}
        <span class="top-caption"><span class="t">${esc(item.title)}</span><span class="s">${esc(item.sub)}</span></span>
      </a>
    </li>`;
}

let activeList = "albums";

function renderTopList(key) {
  const grid = document.getElementById("top-grid");
  if (!grid) return;
  if (DATA.topLists[key]) activeList = key;
  const items = (DATA.topLists[key] || []).slice(0, 4);
  grid.innerHTML = items.map(topListItem).join("");
  hydrateCovers(grid);
}

function projCard(p) {
  return `
    <a class="proj-card ph" style="--h:${p.hue || 240}" href="${esc(p.url || "#")}" target="_blank" rel="noopener noreferrer">
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
                `<span class="glass">${TECH_ICONS[t] || (BRAND[t] ? `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="${BRAND[t]}"></path></svg>` : "")}${esc(t)}</span>`
            )
            .join("")}</div>`
        : ""
    }`;
}

function pageMore() {
  if (moreView === "contact") return pageContact();
  if (moreView === "setup") return pageSetup();
  return pageMoreGrid();
}

function pageMoreGrid() {
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

function pageSetup() {
  return `
    <div class="page-inner">
      <div class="animate-[fade-in_500ms_cubic-bezier(0.22,1,0.36,1)]">
        <button type="button" class="mb-6 inline-flex items-center gap-1.5 text-[12.5px] text-white/45 transition-colors hover:text-white" data-more-back><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 256 256" aria-hidden="true" class="h-3 w-3" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M228,128a12,12,0,0,1-12,12H69l51.52,51.51a12,12,0,0,1-17,17l-72-72a12,12,0,0,1,0-17l72-72a12,12,0,0,1,17,17L69,116H216A12,12,0,0,1,228,128Z"></path></svg><span>more</span></button>
        <h2 class="text-[24px] font-semibold tracking-tight">setup</h2>
        <p class="mt-1 text-[14.5px] leading-relaxed text-white/50">the gear and software i use every day</p>
        <div class="mt-6 grid gap-7">
          <section>
            <h3 class="mb-2.5 text-[11.5px] lowercase text-white/40">pc</h3>
            <ul class="grid grid-cols-6 gap-2">
              <li class="col-span-6 sm:col-span-3 min-h-[128px] rounded-[12px] border border-white/[0.07] bg-white/[0.03] backdrop-blur-xl relative flex flex-col justify-between overflow-hidden p-3.5"><span class="flex items-center gap-1.5 text-[11px] lowercase text-white/40"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 256 256" aria-hidden="true" class="h-3.5 w-3.5 text-white/55" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M232,48H16a8,8,0,0,0-8,8V208a8,8,0,0,0,16,0V192H40v16a8,8,0,0,0,16,0V192H72v16a8,8,0,0,0,16,0V192h16v16a8,8,0,0,0,16,0V192H232a16,16,0,0,0,16-16V64A16,16,0,0,0,232,48Zm-20,72a35.81,35.81,0,0,1-5.53,19.16L156.84,89.53A36,36,0,0,1,212,120Zm-96,0a35.81,35.81,0,0,1-5.53,19.16L60.84,89.53A36,36,0,0,1,116,120ZM80,156a36,36,0,0,1-30.47-55.16l49.63,49.63A35.81,35.81,0,0,1,80,156Zm60-36a35.81,35.81,0,0,1,5.53-19.16l49.63,49.63A36,36,0,0,1,140,120Z"></path></svg>gpu</span><span class="mt-3 block"><span class="line-clamp-2 block font-semibold tracking-tight text-white text-[19px]">RTX 5080</span><span class="block truncate text-[11.5px] text-white/45">NVIDIA GeForce</span></span><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 256 256" aria-hidden="true" class="pointer-events-none absolute -bottom-4 -right-3 h-24 w-24 text-white/[0.04]" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M232,48H16a8,8,0,0,0-8,8V208a8,8,0,0,0,16,0V192H40v16a8,8,0,0,0,16,0V192H72v16a8,8,0,0,0,16,0V192h16v16a8,8,0,0,0,16,0V192H232a16,16,0,0,0,16-16V64A16,16,0,0,0,232,48Zm-20,72a35.81,35.81,0,0,1-5.53,19.16L156.84,89.53A36,36,0,0,1,212,120Zm-96,0a35.81,35.81,0,0,1-5.53,19.16L60.84,89.53A36,36,0,0,1,116,120ZM80,156a36,36,0,0,1-30.47-55.16l49.63,49.63A35.81,35.81,0,0,1,80,156Zm60-36a35.81,35.81,0,0,1,5.53-19.16l49.63,49.63A36,36,0,0,1,140,120Z"></path></svg></li>
              <li class="col-span-6 sm:col-span-3 min-h-[128px] rounded-[12px] border border-white/[0.07] bg-white/[0.03] backdrop-blur-xl relative flex flex-col justify-between overflow-hidden p-3.5"><span class="flex items-center gap-1.5 text-[11px] lowercase text-white/40"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 256 256" aria-hidden="true" class="h-3.5 w-3.5 text-white/55" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M104,104h48v48H104Zm136,48a8,8,0,0,1-8,8H216v40a16,16,0,0,1-16,16H160v16a8,8,0,0,1-16,0V216H112v16a8,8,0,0,1-16,0V216H56a16,16,0,0,1-16-16V160H24a8,8,0,0,1,0-16H40V112H24a8,8,0,0,1,0-16H40V56A16,16,0,0,1,56,40H96V24a8,8,0,0,1,16,0V40h32V24a8,8,0,0,1,16,0V40h40a16,16,0,0,1,16,16V96h16a8,8,0,0,1,0,16H216v32h16A8,8,0,0,1,240,152ZM168,96a8,8,0,0,0-8-8H96a8,8,0,0,0-8,8v64a8,8,0,0,0,8,8h64a8,8,0,0,0,8-8Z"></path></svg>cpu</span><span class="mt-3 block"><span class="line-clamp-2 block font-semibold tracking-tight text-white text-[19px]">Intel Core Ultra 9 285k</span><span class="block truncate text-[11.5px] text-white/45">Intel Core · 24 cores</span></span><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 256 256" aria-hidden="true" class="pointer-events-none absolute -bottom-4 -right-3 h-24 w-24 text-white/[0.04]" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M104,104h48v48H104Zm136,48a8,8,0,0,1-8,8H216v40a16,16,0,0,1-16,16H160v16a8,8,0,0,1-16,0V216H112v16a8,8,0,0,1-16,0V216H56a16,16,0,0,1-16-16V160H24a8,8,0,0,1,0-16H40V112H24a8,8,0,0,1,0-16H40V56A16,16,0,0,1,56,40H96V24a8,8,0,0,1,16,0V40h32V24a8,8,0,0,1,16,0V40h40a16,16,0,0,1,16,16V96h16a8,8,0,0,1,0,16H216v32h16A8,8,0,0,1,240,152ZM168,96a8,8,0,0,0-8-8H96a8,8,0,0,0-8,8v64a8,8,0,0,0,8,8h64a8,8,0,0,0,8-8Z"></path></svg></li>
              <li class="col-span-3 sm:col-span-2 min-h-[104px] rounded-[12px] border border-white/[0.07] bg-white/[0.03] backdrop-blur-xl relative flex flex-col justify-between overflow-hidden p-3.5"><span class="flex items-center gap-1.5 text-[11px] lowercase text-white/40"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 256 256" aria-hidden="true" class="h-3.5 w-3.5 text-white/55" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M232,56H24A16,16,0,0,0,8,72V200a8,8,0,0,0,16,0V184H40v16a8,8,0,0,0,16,0V184H72v16a8,8,0,0,0,16,0V184h16v16a8,8,0,0,0,16,0V184h16v16a8,8,0,0,0,16,0V184h16v16a8,8,0,0,0,16,0V184h16v16a8,8,0,0,0,16,0V184h16v16a8,8,0,0,0,16,0V72A16,16,0,0,0,232,56ZM208,96v48H144V96Zm-96,0v48H48V96Z"></path></svg>memory</span><span class="mt-3 block"><span class="line-clamp-2 block font-semibold tracking-tight text-white text-[14.5px]">64GB DDR5</span><span class="block truncate text-[11.5px] text-white/45">TG · 8000+ MT/s</span></span></li>
              <li class="col-span-3 sm:col-span-2 min-h-[104px] rounded-[12px] border border-white/[0.07] bg-white/[0.03] backdrop-blur-xl relative flex flex-col justify-between overflow-hidden p-3.5"><span class="flex items-center gap-1.5 text-[11px] lowercase text-white/40"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 256 256" aria-hidden="true" class="h-3.5 w-3.5 text-white/55" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M88,111.31l48,48V220a4,4,0,0,1-4,4H48a16,16,0,0,1-16-16V48A16,16,0,0,1,48,32H68a4,4,0,0,1,4,4V153.38a24,24,0,1,0,16,0ZM80,184a8,8,0,1,0-8-8A8,8,0,0,0,80,184Zm104-80a8,8,0,1,0-8,8A8,8,0,0,0,184,104Zm24-72H156a4,4,0,0,0-4,4V68.69l13.66,13.66a24,24,0,1,1-11.31,11.31l-16-16A8,8,0,0,1,136,72V36a4,4,0,0,0-4-4H92a4,4,0,0,0-4,4V88.69l61.66,61.65A8,8,0,0,1,152,156v64a4,4,0,0,0,4,4h52a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32Z"></path></svg>motherboard</span><span class="mt-3 block"><span class="line-clamp-2 block font-semibold tracking-tight text-white text-[14.5px]">Z890 MAX GAMING</span><span class="block truncate text-[11.5px] text-white/45">ASUS</span></span></li>
              <li class="col-span-3 sm:col-span-2 min-h-[104px] rounded-[12px] border border-white/[0.07] bg-white/[0.03] backdrop-blur-xl relative flex flex-col justify-between overflow-hidden p-3.5"><span class="flex items-center gap-1.5 text-[11px] lowercase text-white/40"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 256 256" aria-hidden="true" class="h-3.5 w-3.5 text-white/55" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M208,40H48A16,16,0,0,0,32,56v48a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V56A16,16,0,0,0,208,40ZM180,92a12,12,0,1,1,12-12A12,12,0,0,1,180,92Z"></path><path d="M208,136H48a16,16,0,0,0-16,16v48a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V152A16,16,0,0,0,208,136Zm-28,52a12,12,0,1,1,12-12A12,12,0,0,1,180,188Z"></path></svg>storage</span><span class="mt-3 block"><span class="line-clamp-2 block font-semibold tracking-tight text-white text-[14.5px]">4TB</span><span class="block truncate text-[11px] text-white/45">WD Blue SN5000 NVMe</span></span></li>
            </ul>
          </section>
          <section>
            <h3 class="mb-2.5 text-[11.5px] lowercase text-white/40">desk</h3>
            <ul class="grid grid-cols-6 gap-2">
              <li class="col-span-3 min-h-[128px] rounded-[12px] border border-white/[0.07] bg-white/[0.03] backdrop-blur-xl relative flex flex-col justify-between overflow-hidden p-3.5"><span class="flex items-center gap-1.5 text-[11px] lowercase text-white/40"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 256 256" aria-hidden="true" class="h-3.5 w-3.5 text-white/55" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M232,64V176a24,24,0,0,1-24,24H48a24,24,0,0,1-24-24V64A24,24,0,0,1,48,40H208A24,24,0,0,1,232,64ZM160,216H96a8,8,0,0,0,0,16h64a8,8,0,0,0,0-16Z"></path></svg>main monitor</span><span class="mt-3 block"><span class="line-clamp-2 block font-semibold tracking-tight text-white text-[19px]">ROG PG259QNR</span><span class="block truncate text-[11.5px] text-white/45">ASUS · 24"</span></span><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 256 256" aria-hidden="true" class="pointer-events-none absolute -bottom-4 -right-3 h-24 w-24 text-white/[0.04]" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M232,64V176a24,24,0,0,1-24,24H48a24,24,0,0,1-24-24V64A24,24,0,0,1,48,40H208A24,24,0,0,1,232,64ZM160,216H96a8,8,0,0,0,0,16h64a8,8,0,0,0,0-16Z"></path></svg></li>
              <li class="col-span-3 min-h-[128px] rounded-[12px] border border-white/[0.07] bg-white/[0.03] backdrop-blur-xl relative flex flex-col justify-between overflow-hidden p-3.5"><span class="flex items-center gap-1.5 text-[11px] lowercase text-white/40"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 256 256" aria-hidden="true" class="h-3.5 w-3.5 text-white/55" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M232,64V176a24,24,0,0,1-24,24H48a24,24,0,0,1-24-24V64A24,24,0,0,1,48,40H208A24,24,0,0,1,232,64ZM160,216H96a8,8,0,0,0,0,16h64a8,8,0,0,0,0-16Z"></path></svg>second monitor</span><span class="mt-3 block"><span class="line-clamp-2 block font-semibold tracking-tight text-white text-[19px]">VG247Q1A</span><span class="block truncate text-[11.5px] text-white/45">ASUS · 24"</span></span><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 256 256" aria-hidden="true" class="pointer-events-none absolute -bottom-4 -right-3 h-24 w-24 text-white/[0.04]" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M232,64V176a24,24,0,0,1-24,24H48a24,24,0,0,1-24-24V64A24,24,0,0,1,48,40H208A24,24,0,0,1,232,64ZM160,216H96a8,8,0,0,0,0,16h64a8,8,0,0,0,0-16Z"></path></svg></li>
              <li class="col-span-3 min-h-[92px] rounded-[12px] border border-white/[0.07] bg-white/[0.03] backdrop-blur-xl relative flex flex-col justify-between overflow-hidden p-3.5"><span class="flex items-center gap-1.5 text-[11px] lowercase text-white/40"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 256 256" aria-hidden="true" class="h-3.5 w-3.5 text-white/55" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M224,48H32A16,16,0,0,0,16,64V192a16,16,0,0,0,16,16H224a16,16,0,0,0,16-16V64A16,16,0,0,0,224,48ZM64,168H48a8,8,0,0,1,0-16H64a8,8,0,0,1,0,16Zm96,0H96a8,8,0,0,1,0-16h64a8,8,0,0,1,0,16Zm48,0H192a8,8,0,0,1,0-16h16a8,8,0,0,1,0,16Zm0-32H48a8,8,0,0,1,0-16H208a8,8,0,0,1,0,16Zm0-32H48a8,8,0,0,1,0-16H208a8,8,0,0,1,0,16Z"></path></svg>keyboard</span><span class="mt-3 block"><span class="line-clamp-2 block font-semibold tracking-tight text-white text-[14.5px]">One 3 Mini</span><span class="block truncate text-[11.5px] text-white/45">Ducky</span></span></li>
              <li class="col-span-3 min-h-[92px] rounded-[12px] border border-white/[0.07] bg-white/[0.03] backdrop-blur-xl relative flex flex-col justify-between overflow-hidden p-3.5"><span class="flex items-center gap-1.5 text-[11px] lowercase text-white/40"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 256 256" aria-hidden="true" class="h-3.5 w-3.5 text-white/55" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M144,16H112A64.07,64.07,0,0,0,48,80v96a64.07,64.07,0,0,0,64,64h32a64.07,64.07,0,0,0,64-64V80A64.07,64.07,0,0,0,144,16Zm48,64v24H136V32h8A48.05,48.05,0,0,1,192,80ZM112,32h8v72H64V80A48.05,48.05,0,0,1,112,32Z"></path></svg>mouse</span><span class="mt-3 block"><span class="line-clamp-2 block font-semibold tracking-tight text-white text-[14.5px]">Model O</span><span class="block truncate text-[11.5px] text-white/45">Glorious</span></span></li>
            </ul>
          </section>
          <section>
            <h3 class="mb-2.5 text-[11.5px] lowercase text-white/40">audio</h3>
            <ul class="grid grid-cols-6 gap-2">
              <li class="col-span-6 sm:col-span-3 min-h-[128px] rounded-[12px] border border-white/[0.07] bg-white/[0.03] backdrop-blur-xl relative flex flex-col justify-between overflow-hidden p-3.5"><span class="flex items-center gap-1.5 text-[11px] lowercase text-white/40"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 256 256" aria-hidden="true" class="h-3.5 w-3.5 text-white/55" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M232,128v80a40,40,0,0,1-40,40H136a8,8,0,0,1,0-16h56a24,24,0,0,0,24-24H192a24,24,0,0,1-24-24V144a24,24,0,0,1,24-24h23.65A88,88,0,0,0,66,65.54,87.29,87.29,0,0,0,40.36,120H64a24,24,0,0,1,24,24v40a24,24,0,0,1-24,24H48a24,24,0,0,1-24-24V128A104.11,104.11,0,0,1,201.89,54.66,103.41,103.41,0,0,1,232,128Z"></path></svg>headset</span><span class="mt-3 block"><span class="line-clamp-2 block font-semibold tracking-tight text-white text-[19px]">Arctis Nova Elite</span><span class="block truncate text-[11.5px] text-white/45">SteelSeries</span></span><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 256 256" aria-hidden="true" class="pointer-events-none absolute -bottom-4 -right-3 h-24 w-24 text-white/[0.04]" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M232,128v80a40,40,0,0,1-40,40H136a8,8,0,0,1,0-16h56a24,24,0,0,0,24-24H192a24,24,0,0,1-24-24V144a24,24,0,0,1,24-24h23.65A88,88,0,0,0,66,65.54,87.29,87.29,0,0,0,40.36,120H64a24,24,0,0,1,24,24v40a24,24,0,0,1-24,24H48a24,24,0,0,1-24-24V128A104.11,104.11,0,0,1,201.89,54.66,103.41,103.41,0,0,1,232,128Z"></path></svg></li>
              <li class="col-span-6 sm:col-span-3 min-h-[128px] rounded-[12px] border border-white/[0.07] bg-white/[0.03] backdrop-blur-xl relative flex flex-col justify-between overflow-hidden p-3.5"><span class="flex items-center gap-1.5 text-[11px] lowercase text-white/40"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 256 256" aria-hidden="true" class="h-3.5 w-3.5 text-white/55" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M80,128V64a48,48,0,0,1,96,0v64a48,48,0,0,1-96,0Zm128,0a8,8,0,0,0-16,0,64,64,0,0,1-128,0,8,8,0,0,0-16,0,80.11,80.11,0,0,0,72,79.6V240a8,8,0,0,0,16,0V207.6A80.11,80.11,0,0,0,208,128Z"></path></svg>mic</span><span class="mt-3 block"><span class="line-clamp-2 block font-semibold tracking-tight text-white text-[19px]">Quadcast</span><span class="block truncate text-[11.5px] text-white/45">HyperX</span></span><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 256 256" aria-hidden="true" class="pointer-events-none absolute -bottom-4 -right-3 h-24 w-24 text-white/[0.04]" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M80,128V64a48,48,0,0,1,96,0v64a48,48,0,0,1-96,0Zm128,0a8,8,0,0,0-16,0,64,64,0,0,1-128,0,8,8,0,0,0-16,0,80.11,80.11,0,0,0,72,79.6V240a8,8,0,0,0,16,0V207.6A80.11,80.11,0,0,0,208,128Z"></path></svg></li>
                          </ul>
          </section>
          <section>
            <h3 class="mb-2.5 text-[11.5px] lowercase text-white/40">daily drivers</h3>
            <ul class="grid grid-cols-2 gap-2 sm:grid-cols-4">
              <li class="rounded-[12px] border border-white/[0.07] bg-white/[0.03] backdrop-blur-xl flex flex-col items-start gap-3 p-3.5"><span class="grid h-10 w-10 place-items-center rounded-[9px] bg-white/[0.07] text-white/85"><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" class="h-5 w-5" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M16 3v18l4 -2.5v-13l-4 -2.5"></path><path d="M9.165 13.903l-4.165 3.597l-2 -1l4.333 -4.5m1.735 -1.802l6.932 -7.198v5l-4.795 4.141"></path><path d="M16 16.5l-11 -10l-2 1l13 13.5"></path></svg></span><span><span class="block text-[14px] font-semibold tracking-tight text-white">VS Code</span><span class="block text-[11px] lowercase text-white/40">editor</span></span></li>
              <li class="rounded-[12px] border border-white/[0.07] bg-white/[0.03] backdrop-blur-xl flex flex-col items-start gap-3 p-3.5"><span class="grid h-10 w-10 place-items-center rounded-[9px] bg-white/[0.07] text-white/85"><svg viewBox="0 0 24 24" class="h-5 w-5 fill-current" aria-hidden="true"><path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"></path></svg></span><span><span class="block text-[14px] font-semibold tracking-tight text-white">Discord</span><span class="block text-[11px] lowercase text-white/40">social</span></span></li>
              <li class="rounded-[12px] border border-white/[0.07] bg-white/[0.03] backdrop-blur-xl flex flex-col items-start gap-3 p-3.5"><span class="grid h-10 w-10 place-items-center rounded-[9px] bg-white/[0.07] text-white/85"><svg aria-hidden="true" viewBox="0 0 24 24" class="h-5 w-5 fill-current"><path d="M15.68 0l2.096 2.38s1.84-.512 2.709.358c.868.87 1.584 1.638 1.584 1.638l-.562 1.381.715 2.047s-2.104 7.98-2.35 8.955c-.486 1.919-.818 2.66-2.198 3.633-1.38.972-3.884 2.66-4.293 2.916-.409.256-.92.692-1.38.692-.46 0-.97-.436-1.38-.692a185.796 185.796 0 01-4.293-2.916c-1.38-.973-1.712-1.714-2.197-3.633-.247-.975-2.351-8.955-2.351-8.955l.715-2.047-.562-1.381s.716-.768 1.585-1.638c.868-.87 2.708-.358 2.708-.358L8.321 0h7.36zm-3.679 14.936c-.14 0-1.038.317-1.758.69-.72.373-1.242.637-1.409.742-.167.104-.065.301.087.409.152.107 2.194 1.69 2.393 1.866.198.175.489.464.687.464.198 0 .49-.29.688-.464.198-.175 2.24-1.759 2.392-1.866.152-.108.254-.305.087-.41-.167-.104-.689-.368-1.41-.741-.72-.373-1.617-.69-1.757-.69zm0-11.278s-.409.001-1.022.206-1.278.46-1.584.46c-.307 0-2.581-.434-2.581-.434S4.119 7.152 4.119 7.849c0 .697.339.881.68 1.243l2.02 2.149c.192.203.59.511.356 1.066-.235.555-.58 1.26-.196 1.977.384.716 1.042 1.194 1.464 1.115.421-.08 1.412-.598 1.776-.834.364-.237 1.518-1.19 1.518-1.554 0-.365-1.193-1.02-1.413-1.168-.22-.15-1.226-.725-1.247-.95-.02-.227-.012-.293.284-.851.297-.559.831-1.304.742-1.8-.089-.495-.95-.753-1.565-.986-.615-.232-1.799-.671-1.947-.74-.148-.068-.11-.133.339-.175.448-.043 1.719-.212 2.292-.052.573.16 1.552.403 1.632.532.079.13.149.134.067.579-.081.445-.5 2.581-.541 2.96-.04.38-.12.63.288.724.409.094 1.097.256 1.333.256s.924-.162 1.333-.256c.408-.093.329-.344.288-.723-.04-.38-.46-2.516-.541-2.961-.082-.445-.012-.45.067-.579.08-.129 1.059-.372 1.632-.532.573-.16 1.845.009 2.292.052.449.042.487.107.339.175-.148.069-1.332.508-1.947.74-.615.233-1.476.49-1.565.986-.09.496.445 1.241.742 1.8.297.558.304.624.284.85-.02.226-1.026.802-1.247.95-.22.15-1.413.804-1.413 1.169 0 .364 1.154 1.317 1.518 1.554.364.236 1.355.755 1.776.834.422.079 1.08-.4 1.464-1.115.384-.716.039-1.422-.195-1.977-.235-.555.163-.863.355-1.066l2.02-2.149c.341-.362.68-.546.68-1.243 0-.697-2.695-3.96-2.695-3.96s-2.274.436-2.58.436c-.307 0-.972-.256-1.585-.461-.613-.205-1.022-.206-1.022-.206z"></path></svg></span><span><span class="block text-[14px] font-semibold tracking-tight text-white">Brave</span><span class="block text-[11px] lowercase text-white/40">browser</span></span></li>
              <li class="rounded-[12px] border border-white/[0.07] bg-white/[0.03] backdrop-blur-xl flex flex-col items-start gap-3 p-3.5"><span class="grid h-10 w-10 place-items-center rounded-[9px] bg-white/[0.07] text-white/85"><svg aria-hidden="true" viewBox="0 0 24 24" class="h-5 w-5 fill-current"><path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"></path></svg></span><span><span class="block text-[14px] font-semibold tracking-tight text-white">Spotify</span><span class="block text-[11px] lowercase text-white/40">music</span></span></li>
            </ul>
          </section>
        </div>
      </div>
    </div>`;
}

function pageContact() {
  const c = DATA.contact;
  return `
    <div class="page-inner">
      <button type="button" class="back-link" data-more-back>${ICONS.arrowLeft}<span>more</span></button>
      <h2 class="contact-title">contact</h2>
      <p class="contact-sub">${esc(c.subtitle)}</p>
      <div class="contact-grid contact-grid-single">
        <button type="button" class="contact-card contact-card-lg" data-copy="${esc(c.discord)}">
          <span class="contact-eyebrow">${BRAND.discord ? `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="${BRAND.discord}"></path></svg>` : ""}discord</span>
          <span class="contact-email-row">
            <span class="contact-email">${esc(c.discord)}</span>
            <span class="contact-copy">${ICONS.copy}<span class="contact-copy-text">copy</span></span>
          </span>
          <span class="contact-watermark">${BRAND.discord ? `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="${BRAND.discord}"></path></svg>` : ""}</span>
        </button>
        <a class="contact-card contact-card-lg" href="${esc(c.github.href)}" target="_blank" rel="noopener noreferrer">
          <span class="contact-eyebrow">${ICONS.github}github</span>
          <span class="contact-email-row">
            <span class="contact-email">${esc(c.github.handle)}</span>
            <span class="contact-link-icon">${ICONS.externalLink}</span>
          </span>
          <span class="contact-watermark">${ICONS.github}</span>
        </a>
      </div>
    </div>`;
}

const RENDERERS = {
  home: pageHome,
  music: pageMusic,
  projects: pageProjects,
  more: pageMore,
};

const TABS = ["home", "music", "projects", "more"];
const viewport = document.getElementById("viewport");

let projIndex = 0;
let moreView = "grid";

function renderAll() {
  document.querySelectorAll(".page").forEach((page) => {
    const name = page.dataset.page;
    if (RENDERERS[name]) page.innerHTML = RENDERERS[name]();
  });
  renderTopList(activeList);
  layoutProjects();
  startClock();
  hydrateCovers(document);
}

function renderPage(name) {
  if (!RENDERERS[name]) return;
  const page = document.querySelector(`.page[data-page="${name}"]`);
  if (!page) return;
  page.innerHTML = RENDERERS[name]();
  if (name === "home") startClock();
  if (name === "music") renderTopList(activeList);
  if (name === "projects") layoutProjects();
  hydrateCovers(page);
}

function currentTab() {
  const t = new URLSearchParams(location.search).get("tab") || "";
  return TABS.includes(t) ? t : "home";
}

function setTab(tab) {
  if (!TABS.includes(tab)) tab = "home";
  if (tab !== "more") moreView = "grid";
  if (tab === "more") renderPage("more");
  document.querySelectorAll(".page").forEach((p) => {
    p.hidden = p.dataset.page !== tab;
  });
  document.querySelectorAll(".nav-link").forEach((a) => {
    a.classList.toggle("active", a.dataset.tab === tab);
    a.setAttribute("aria-current", a.dataset.tab === tab ? "page" : "false");
  });
  viewport.scrollTop = 0;
  document.title = "portfolio";
}

function go(tab) {
  if (!TABS.includes(tab)) tab = "home";
  if (currentTab() === tab) {
    setTab(tab);
    return;
  }
  history.pushState({ tab }, "", tab === "home" ? location.pathname : "?tab=" + tab);
  setTab(tab);
}

let clockTimer = null;
function startClock() {
  const tick = () => {
    const el = document.getElementById("clock");
    if (el) el.textContent = new Date().toLocaleTimeString("en-GB", { hour12: false });
    const at = document.getElementById("act-time");
    if (at && DATA.activity && DATA.activity.start) at.textContent = actTimeText(DATA.activity);
  };
  if (clockTimer) clearInterval(clockTimer);
  tick();
  clockTimer = setInterval(tick, 1000);
}

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

const SP = {
  userId: CONFIG.discord.id,
  restUrl: CONFIG.discord.api + "/" + CONFIG.discord.id,
  wsUrl: CONFIG.discord.ws,
  ws: null,
  hbTimer: null,
  hbInterval: 30000,
  backoff: 1000,
  reconnectTimer: null,
  connected: false,
  active: false,
  track: null,
  open: false,
  raf: null,
  tickTimer: null,
  lineIndex: -2,
  homeLine: "",
  lyrics: [],
  synced: false,
  lyricsStatus: "idle",
  lyricsToken: 0,
  cache: new Map(),
  artUrl: "",
  cardKey: "",
};

function spEl(id) {
  return document.getElementById(id);
}

function spFmt(ms) {
  const s = Math.max(0, Math.floor((ms || 0) / 1000));
  return Math.floor(s / 60) + ":" + String(s % 60).padStart(2, "0");
}

function spArtists(str) {
  return String(str || "").split(/\s*[;,]\s*/).filter(Boolean).join(", ");
}

function spStart() {
  spFetchRest();
  spConnect();
}

async function spFetchRest() {
  try {
    const res = await fetch(SP.restUrl, { cache: "no-store" });
    if (!res.ok) return;
    const json = await res.json();
    spApply(json && json.data);
  } catch (e) { }
}

function spConnect() {
  if (SP.ws && (SP.ws.readyState === 0 || SP.ws.readyState === 1)) return;
  let ws;
  try {
    ws = new WebSocket(SP.wsUrl);
  } catch (e) {
    spScheduleReconnect();
    return;
  }
  SP.ws = ws;
  ws.addEventListener("open", () => {
    SP.connected = true;
    SP.backoff = 1000;
  });
  ws.addEventListener("message", spOnMessage);
  ws.addEventListener("close", () => {
    SP.connected = false;
    spStopHeartbeat();
    spScheduleReconnect();
  });
  ws.addEventListener("error", () => {
    try { ws.close(); } catch (e) { }
  });
}

function spScheduleReconnect() {
  if (SP.reconnectTimer) return;
  SP.reconnectTimer = setTimeout(() => {
    SP.reconnectTimer = null;
    spConnect();
  }, SP.backoff);
  SP.backoff = Math.min(SP.backoff * 2, 30000);
}

function spOnMessage(ev) {
  let msg;
  try {
    msg = JSON.parse(ev.data);
  } catch (e) {
    return;
  }
  if (msg.op === 1) {
    SP.hbInterval = (msg.d && msg.d.heartbeat_interval) || 30000;
    try { SP.ws.send(JSON.stringify({ op: 2, d: { subscribe_to_id: SP.userId } })); } catch (e) { }
    spStartHeartbeat();
    return;
  }
  if (msg.op === 0 && msg.d && (msg.t === "INIT_STATE" || msg.t === "PRESENCE_UPDATE")) {
    spApply(spExtractPresence(msg.d));
  }
}

function spExtractPresence(d) {
  if (d && typeof d === "object" && !("discord_user" in d) && d[SP.userId]) return d[SP.userId];
  return d;
}

function spApplyActivity(data) {
  const next = pickActivity(data && data.activities);
  const key = next ? [next.name, next.details, next.state, next.start].join("|") : "";
  if (key === DATA._actKey) return;
  DATA._actKey = key;
  DATA.activity = next;
  renderPage("home");
}

function spStartHeartbeat() {
  spStopHeartbeat();
  SP.hbTimer = setInterval(() => {
    if (SP.ws && SP.ws.readyState === 1) {
      try { SP.ws.send(JSON.stringify({ op: 3 })); } catch (e) { }
    }
  }, SP.hbInterval);
}

function spStopHeartbeat() {
  if (SP.hbTimer) {
    clearInterval(SP.hbTimer);
    SP.hbTimer = null;
  }
}

function spApply(data) {
  if (!data) return;
  spApplyActivity(data);
  const listening = !!data.listening_to_spotify && data.spotify && data.spotify.track_id;
  if (!listening) {
    spSetInactive();
    return;
  }
  const s = data.spotify;
  const ts = s.timestamps || {};
  const track = {
    id: s.track_id,
    title: s.song || "",
    artist: spArtists(s.artist),
    album: s.album || "",
    art: s.album_art_url || "",
    start: Number(ts.start) || 0,
    end: Number(ts.end) || 0,
  };
  const changed = !SP.track || SP.track.id !== track.id;
  SP.track = track;
  SP.active = true;

  if (changed) {
    SP.lineIndex = -2;
    SP.lyrics = [];
    SP.synced = false;
    SP.lyricsStatus = "loading";
    spRenderTrack(track);
    spSyncCards(track);
    spLoadLyrics(track);
  }
  spRenderState();
  spUpdateProgress();
  spUpdateActiveLine();
  spSetLoop();
}

function spSetInactive() {
  const wasActive = SP.active;
  SP.active = false;
  SP.track = null;
  spStopLoop();
  if (wasActive) {
    SP.lyrics = [];
    SP.synced = false;
    SP.lineIndex = -2;
    spSyncCards(null);
  }
  spRenderState();
}

function spPosition() {
  const t = SP.track;
  if (!t || !t.start || !t.end) return { pos: 0, dur: 0 };
  const dur = Math.max(0, t.end - t.start);
  const pos = Math.min(Math.max(0, Date.now() - t.start), dur);
  return { pos, dur };
}

function spSetLoop() {
  spStopLoop();
  if (!SP.active) return;
  if (SP.open) {
    const step = () => {
      SP.raf = null;
      if (!SP.active || !SP.open) return;
      spUpdateProgress();
      spUpdateActiveLine();
      SP.raf = requestAnimationFrame(step);
    };
    SP.raf = requestAnimationFrame(step);
  } else {
    SP.tickTimer = setInterval(() => {
      if (SP.active) spUpdateActiveLine();
    }, 1000);
  }
}

function spStopLoop() {
  if (SP.raf) {
    cancelAnimationFrame(SP.raf);
    SP.raf = null;
  }
  if (SP.tickTimer) {
    clearInterval(SP.tickTimer);
    SP.tickTimer = null;
  }
}

function spRenderTrack(t) {
  const title = spEl("sp-title");
  const artist = spEl("sp-artist");
  const art = spEl("sp-art");
  const ph = spEl("sp-art-ph");
  if (title) title.textContent = t.title || "—";
  if (artist) artist.textContent = t.artist || "";
  if (ph) ph.style.setProperty("--h", hueFromString(t.title || ""));
  if (art && t.art && t.art !== SP.artUrl) {
    SP.artUrl = t.art;
    const url = t.art;
    art.classList.remove("loaded");
    art.onload = () => { if (SP.artUrl === url) art.classList.add("loaded"); };
    art.onerror = () => { art.classList.remove("loaded"); };
    art.src = url;
  }
}

function spRenderState() {
  const root = spEl("player");
  if (!root) return;
  root.classList.toggle("is-active", SP.active);
  const stage = spEl("sp-stage");
  const inactive = spEl("sp-inactive");
  if (stage) stage.hidden = !SP.active;
  if (inactive) inactive.hidden = SP.active;
}

function spUpdateProgress() {
  const fill = spEl("sp-fill");
  const elapsed = spEl("sp-elapsed");
  const remaining = spEl("sp-remaining");
  const { pos, dur } = spPosition();
  if (fill) fill.style.width = (dur ? (pos / dur) * 100 : 0) + "%";
  if (elapsed) elapsed.textContent = spFmt(pos);
  if (remaining) remaining.textContent = "-" + spFmt(Math.max(0, dur - pos));
}

function spSyncCards(track) {
  if (track) {
    DATA.nowPlaying = {
      title: track.title,
      artist: track.artist,
      url: "#",
      art: track.art,
      hue: hueFromString(track.title || ""),
      playing: true,
      statusText: "now playing",
    };
    const key = "sp:" + track.id;
    if (key === SP.cardKey) return;
    SP.cardKey = key;
    stopHomeLyrics();
    renderPage("home");
    renderPage("music");
    hydrateCovers(document);
  } else if (SP.cardKey) {
    SP.cardKey = "";
    if (DATA._lastfmNowPlaying) DATA.nowPlaying = DATA._lastfmNowPlaying;
    renderPage("home");
    renderPage("music");
    hydrateCovers(document);
    if (DATA.nowPlaying && DATA.nowPlaying.playing) startHomeLyrics(DATA.nowPlaying);
  }
}

async function spLoadLyrics(track) {
  const token = ++SP.lyricsToken;
  SP.lyricsStatus = "loading";
  SP.lyrics = [];
  SP.synced = false;
  SP.lineIndex = -2;
  spRenderLyrics();
  const key = [track.artist, track.title, track.album].join("|").toLowerCase();
  let data;
  if (SP.cache.has(key)) {
    data = SP.cache.get(key);
  } else {
    data = await spFetchLyrics(track);
    SP.cache.set(key, data);
  }
  if (token !== SP.lyricsToken) return;
  if (!data) {
    SP.lyricsStatus = "none";
    spRenderLyrics();
    return;
  }
  if (data.instrumental) {
    SP.lyricsStatus = "instrumental";
    spRenderLyrics();
    return;
  }
  if (data.synced && data.synced.length) {
    SP.lyrics = data.synced;
    SP.synced = true;
  } else if (data.plain && data.plain.length) {
    SP.lyrics = data.plain;
    SP.synced = false;
  } else {
    SP.lyricsStatus = "none";
    spRenderLyrics();
    return;
  }
  SP.lyricsStatus = "ok";
  spRenderLyrics();
  spUpdateActiveLine();
}

async function spFetchLyrics(track) {
  const dur = track.end && track.start ? Math.round((track.end - track.start) / 1000) : 0;
  const base = new URLSearchParams({ artist_name: track.artist || "", track_name: track.title || "" });
  try {
    const p = new URLSearchParams(base);
    if (track.album) p.set("album_name", track.album);
    if (dur) p.set("duration", String(dur));
    const res = await fetch("https://lrclib.net/api/get?" + p.toString());
    if (res.ok) {
      const parsed = spParseResult(await res.json());
      if (parsed) return parsed;
    }
  } catch (e) { }
  try {
    const res = await fetch("https://lrclib.net/api/search?" + base.toString());
    if (res.ok) {
      const arr = await res.json();
      if (Array.isArray(arr) && arr.length) {
        const best = arr.find((x) => x.syncedLyrics) || arr.find((x) => x.plainLyrics) || arr[0];
        const parsed = spParseResult(best);
        if (parsed) return parsed;
      }
    }
  } catch (e) { }
  return null;
}

function spParseResult(j) {
  if (!j) return null;
  if (j.instrumental) return { instrumental: true };
  if (j.syncedLyrics) {
    const synced = spParseLrc(j.syncedLyrics);
    if (synced.length) return { synced };
  }
  if (j.plainLyrics) {
    const plain = j.plainLyrics
      .split(/\r?\n/)
      .map((text) => ({ t: null, text }))
      .filter((l) => l.text.trim() !== "");
    if (plain.length) return { plain };
  }
  return null;
}

function spParseLrc(text) {
  const out = [];
  String(text).split(/\r?\n/).forEach((line) => {
    const stamps = [...line.matchAll(/\[(\d{1,3}):(\d{1,2}(?:\.\d+)?)\]/g)];
    if (!stamps.length) return;
    const txt = line.replace(/\[[^\]]*\]/g, "").replace(/\s+/g, " ").trim();
    if (!txt) return;
    stamps.forEach((m) => out.push({ t: Number(m[1]) * 60 + Number(m[2]), text: txt }));
  });
  return out.sort((a, b) => a.t - b.t);
}

function spRenderLyrics() {
  const box = spEl("sp-lyrics");
  if (!box) return;
  SP.lineIndex = -2;
  if (SP.lyricsStatus === "loading") {
    box.innerHTML = '<p class="sp-lyrics-note">loading lyrics…</p>';
    return;
  }
  if (SP.lyricsStatus === "instrumental") {
    box.innerHTML = '<p class="sp-lyrics-note">instrumental</p>';
    return;
  }
  if (SP.lyricsStatus === "none" || !SP.lyrics.length) {
    box.innerHTML = '<p class="sp-lyrics-note">no synchronized lyrics available</p>';
    return;
  }
  box.innerHTML = SP.lyrics.map((l) => `<p class="sp-lyric-line">${esc(l.text) || "♪"}</p>`).join("");
  box.scrollTop = 0;
}

function spUpdateActiveLine() {
  let idx = -1;
  if (SP.synced && SP.lyrics.length) {
    const { pos } = spPosition();
    const t = pos / 1000;
    for (let i = 0; i < SP.lyrics.length; i++) {
      if (SP.lyrics[i].t <= t + 0.05) idx = i;
      else break;
    }
  }
  if (idx !== SP.lineIndex) {
    SP.lineIndex = idx;
    const box = spEl("sp-lyrics");
    if (box && SP.synced) {
      const lines = box.querySelectorAll(".sp-lyric-line");
      lines.forEach((el, i) => el.classList.toggle("active", i === idx));
      const active = lines[idx];
      if (active) spScrollIntoView(box, active);
    }
  }
  spUpdateHomeCardLine(idx);
}

function spScrollIntoView(box, el) {
  const boxRect = box.getBoundingClientRect();
  const elRect = el.getBoundingClientRect();
  const target = box.scrollTop + (elRect.top - boxRect.top) - box.clientHeight / 2 + elRect.height / 2;
  box.scrollTo({ top: Math.max(0, target), behavior: "smooth" });
}

function spUpdateHomeCardLine(idx) {
  if (!SP.active) return;
  const el = spEl("np-lyric");
  if (!el) return;
  let text;
  if (!SP.synced || idx < 0) {
    const next = SP.lyrics[0];
    text = next && next.text ? next.text : "now playing";
  } else {
    const line = SP.lyrics[idx];
    text = (line && line.text) || "♪";
  }
  if (text === SP.homeLine) return;
  SP.homeLine = text;
  el.textContent = text;
}

function openPlayer() {
  const root = spEl("player");
  if (!root) return;
  SP.open = true;
  root.classList.add("open");
  root.setAttribute("aria-hidden", "false");
  spRenderState();
  if (SP.active) {
    if (SP.track) spRenderTrack(SP.track);
    spUpdateProgress();
    spUpdateActiveLine();
  }
  spSetLoop();
}

function closePlayer() {
  const root = spEl("player");
  if (!root) return;
  SP.open = false;
  root.classList.remove("open");
  root.setAttribute("aria-hidden", "true");
  spSetLoop();
}

function spInit() {
  const root = spEl("player");
  if (!root) return;
  const close = root.querySelector("[data-player-close]");
  if (close) close.innerHTML = PLAYER_ICONS.close;
  root.querySelectorAll("[data-ic]").forEach((el) => {
    const icon = PLAYER_ICONS[el.dataset.ic];
    if (icon) el.innerHTML = icon;
  });
  spRenderState();
  spStart();
}

const homeLyrics = { timer: null, lines: [], token: 0, startAt: 0 };

function updateHomeLyric() {
  const el = document.getElementById("np-lyric");
  if (!el) return;
  const lines = homeLyrics.lines;
  if (!lines.length) {
    el.textContent = "now playing";
    return;
  }
  const pos = (Date.now() - homeLyrics.startAt) / 1000;
  let idx = -1;
  for (let i = 0; i < lines.length; i++) {
    if (lines[i].t != null && lines[i].t <= pos + 0.05) idx = i;
    else break;
  }
  el.textContent = (lines[idx] && lines[idx].text) || "♪";
}

async function startHomeLyrics(track) {
  const token = ++homeLyrics.token;
  homeLyrics.lines = [];
  homeLyrics.startAt = Date.now();
  updateHomeLyric();
  let result = null;
  try {
    result = await spFetchLyrics(track);
  } catch (e) { }
  if (token !== homeLyrics.token) return;
  homeLyrics.lines = result && result.synced ? result.synced : [];
  updateHomeLyric();
  if (homeLyrics.timer) clearInterval(homeLyrics.timer);
  homeLyrics.timer = setInterval(updateHomeLyric, 1000);
}

function stopHomeLyrics() {
  homeLyrics.token += 1;
  homeLyrics.lines = [];
  if (homeLyrics.timer) {
    clearInterval(homeLyrics.timer);
    homeLyrics.timer = null;
  }
}

function nowPlayingKey(t) {
  return ((t.title || "") + "|" + (t.artist || "") + "|" + (t.playing ? "1" : "0")).toLowerCase();
}

let npKey = "";

async function refreshNowPlaying() {
  if (SP.active) return;
  let recent;
  try {
    recent = await lastfm("user.getrecenttracks", { limit: 1 });
  } catch (e) {
    return;
  }
  const list = [].concat((recent.recenttracks && recent.recenttracks.track) || []);
  const t = list[0];
  if (!t) return;
  const playing = !!(t["@attr"] && t["@attr"].nowplaying === "true");
  const np = {
    title: t.name || "unknown",
    artist: lfArtist(t),
    url: t.url || "#",
    art: lfImage(t),
    hue: hueFromString(t.name || ""),
    playing,
    statusText: playing ? "now playing" : t.date && t.date.uts ? "last played · " + timeAgo(t.date.uts) : "last played",
  };
  DATA._lastfmNowPlaying = np;
  if (SP.active) return;
  DATA.nowPlaying = np;
  const key = nowPlayingKey(np);
  if (key === npKey) return;
  npKey = key;
  renderPage("home");
  if (playing) startHomeLyrics(np);
  else stopHomeLyrics();
}

window.addEventListener("popstate", () => setTab(currentTab()));

document.addEventListener("click", (e) => {
  const navLink = e.target.closest(".nav-link");
  if (navLink && e.button === 0 && !e.metaKey && !e.ctrlKey && !e.shiftKey && !e.altKey) {
    e.preventDefault();
    go(navLink.dataset.tab);
    return;
  }

  const openTab = e.target.closest("[data-open-tab]");
  if (openTab) {
    go(openTab.dataset.openTab);
    return;
  }

  if (e.target.closest("[data-open-player]")) return openPlayer();
  if (e.target.closest("[data-player-close]")) return closePlayer();
  if (SP.open && e.target === spEl("player")) return closePlayer();

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

  const moreCard = e.target.closest("[data-more-card]");
  if (moreCard) {
    const id = moreCard.dataset.moreCard;
    if (id === "contact") {
      moreView = "contact";
      renderPage("more");
    } else if (id === "setup") {
      moreView = "setup";
      renderPage("more");
    }
    return;
  }

  const backBtn = e.target.closest("[data-more-back]");
  if (backBtn) {
    moreView = "grid";
    renderPage("more");
    return;
  }

  const copyBtn = e.target.closest("[data-copy]");
  if (copyBtn) {
    const text = copyBtn.dataset.copy;
    if (navigator.clipboard) navigator.clipboard.writeText(text).catch(() => {});
    const label = copyBtn.querySelector(".contact-copy-text");
    if (label) {
      const original = label.textContent;
      label.textContent = "copied";
      clearTimeout(label._t);
      label._t = setTimeout(() => { label.textContent = original; }, 1200);
    }
    return;
  }

});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    if (SP.open) closePlayer();
  }
  if (currentTab() !== "projects") return;
  if (e.key === "ArrowLeft") moveProject(-1);
  if (e.key === "ArrowRight") moveProject(1);
});

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

if (currentTab() === "home" && new URLSearchParams(location.search).has("tab")) {
  history.replaceState({ tab: "home" }, "", location.pathname);
}
setTab(currentTab());
renderAll();
spInit();
setTab(currentTab());

loadDiscord();
loadLastfm();

setInterval(refreshNowPlaying, 30000);

document.addEventListener("visibilitychange", () => {
  if (!document.hidden && SP.active) {
    spUpdateProgress();
    spUpdateActiveLine();
    spSetLoop();
  }
});

if (document.fonts && document.fonts.ready) {
  document.fonts.ready.then(() => {
    layoutProjects();
  });
}
