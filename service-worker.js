/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "4c6ca37dc9ded35a29ee0a5fb2e7fd7a"
  },
  {
    "url": "About/index.html",
    "revision": "772ba2ec2e0d4c73593f9f83ef788f00"
  },
  {
    "url": "archive/index.html",
    "revision": "dd90d8816504347cbfc4b5e741de860e"
  },
  {
    "url": "assets/css/0.styles.ac29b77f.css",
    "revision": "8171e2867a443cd18fc1c66db4f61abb"
  },
  {
    "url": "assets/fonts/KaTeX_AMS-Regular.1ba8a24a.woff2",
    "revision": "1ba8a24a34177c2ffb565c9215073d79"
  },
  {
    "url": "assets/fonts/KaTeX_AMS-Regular.6e83a9fb.woff",
    "revision": "6e83a9fb848f6ed110947bbea540160e"
  },
  {
    "url": "assets/fonts/KaTeX_AMS-Regular.ca857b15.ttf",
    "revision": "ca857b159d215139f84ec5406486b5dc"
  },
  {
    "url": "assets/fonts/KaTeX_Caligraphic-Bold.2c8faa1b.ttf",
    "revision": "2c8faa1b5f83e4062290d6f1f48feeef"
  },
  {
    "url": "assets/fonts/KaTeX_Caligraphic-Bold.9e74aa81.woff2",
    "revision": "9e74aa81afcd2a2c51e6fdda41905bbd"
  },
  {
    "url": "assets/fonts/KaTeX_Caligraphic-Bold.c0985438.woff",
    "revision": "c09854387bea3260d7c3eae73dc9d01c"
  },
  {
    "url": "assets/fonts/KaTeX_Caligraphic-Regular.31f25d65.woff2",
    "revision": "31f25d65c5a444b82edbd416cecf1c24"
  },
  {
    "url": "assets/fonts/KaTeX_Caligraphic-Regular.35974d12.woff",
    "revision": "35974d12700c7250a51804f82845dc16"
  },
  {
    "url": "assets/fonts/KaTeX_Caligraphic-Regular.52a6a165.ttf",
    "revision": "52a6a1658f19627bacf35b495b60891c"
  },
  {
    "url": "assets/fonts/KaTeX_Fraktur-Bold.34c03657.woff",
    "revision": "34c0365729037176f5f2a662f5ba0f5c"
  },
  {
    "url": "assets/fonts/KaTeX_Fraktur-Bold.34c1d184.ttf",
    "revision": "34c1d184d4ab02f85c035ed9fc25caa7"
  },
  {
    "url": "assets/fonts/KaTeX_Fraktur-Bold.71620e6a.woff2",
    "revision": "71620e6ae5f7675d278fa891e0653b5b"
  },
  {
    "url": "assets/fonts/KaTeX_Fraktur-Regular.b48160ea.woff",
    "revision": "b48160eab3a0afe79f8102a504f31bb8"
  },
  {
    "url": "assets/fonts/KaTeX_Fraktur-Regular.bae342e8.woff2",
    "revision": "bae342e85347989ffe3407d5d286abc0"
  },
  {
    "url": "assets/fonts/KaTeX_Fraktur-Regular.f6780ff5.ttf",
    "revision": "f6780ff593f7ba72754d7e57dc31f7d9"
  },
  {
    "url": "assets/fonts/KaTeX_Main-Bold.6a754845.woff",
    "revision": "6a754845184d0bbadc833d7938d4df66"
  },
  {
    "url": "assets/fonts/KaTeX_Main-Bold.9e629571.ttf",
    "revision": "9e6295711d9a28d1991bc02b2ba6a8c6"
  },
  {
    "url": "assets/fonts/KaTeX_Main-Bold.b5549071.woff2",
    "revision": "b5549071a4cf728bf88d49f042fc7313"
  },
  {
    "url": "assets/fonts/KaTeX_Main-BoldItalic.2cefb96e.woff2",
    "revision": "2cefb96e245f6175b4ef2f2ca0db06c1"
  },
  {
    "url": "assets/fonts/KaTeX_Main-BoldItalic.3df52c58.ttf",
    "revision": "3df52c586302de43bd5ca95182fb1315"
  },
  {
    "url": "assets/fonts/KaTeX_Main-BoldItalic.ff75463a.woff",
    "revision": "ff75463a7fa586585fd3586e79000d36"
  },
  {
    "url": "assets/fonts/KaTeX_Main-Italic.9485af58.ttf",
    "revision": "9485af58d5ca94fbb6bc0378860a9b72"
  },
  {
    "url": "assets/fonts/KaTeX_Main-Italic.d2f17a9e.woff",
    "revision": "d2f17a9e3f2a368e28042f28f8988a03"
  },
  {
    "url": "assets/fonts/KaTeX_Main-Italic.d9153c94.woff2",
    "revision": "d9153c94a9b598eefe0e4179c9e97205"
  },
  {
    "url": "assets/fonts/KaTeX_Main-Regular.28a2d0a5.woff",
    "revision": "28a2d0a50e53991263c83f5bb3c8205c"
  },
  {
    "url": "assets/fonts/KaTeX_Main-Regular.bce47876.ttf",
    "revision": "bce47876efef2be1f02bfe02a2b2ed29"
  },
  {
    "url": "assets/fonts/KaTeX_Main-Regular.ddb93dd1.woff2",
    "revision": "ddb93dd102489fb45c99d6712fdb5f25"
  },
  {
    "url": "assets/fonts/KaTeX_Math-BoldItalic.8c96bb55.woff2",
    "revision": "8c96bb5502e4d11c51cc9f3eb062f3d7"
  },
  {
    "url": "assets/fonts/KaTeX_Math-BoldItalic.91370c15.ttf",
    "revision": "91370c15e6c8c636f86c01838fa7f654"
  },
  {
    "url": "assets/fonts/KaTeX_Math-BoldItalic.b4a5e15f.woff",
    "revision": "b4a5e15f65b5afbe788cc687aa6af3bc"
  },
  {
    "url": "assets/fonts/KaTeX_Math-Italic.2342417f.woff",
    "revision": "2342417fbf7f6ae5910a34ea90e844c6"
  },
  {
    "url": "assets/fonts/KaTeX_Math-Italic.efef72b8.woff2",
    "revision": "efef72b8e4ff4083ca1e91a6b4ec2363"
  },
  {
    "url": "assets/fonts/KaTeX_Math-Italic.f47a61c8.ttf",
    "revision": "f47a61c859ea90d15547822f4836dafb"
  },
  {
    "url": "assets/fonts/KaTeX_SansSerif-Bold.000b9ed0.ttf",
    "revision": "000b9ed03c3867fd218ec15822564ec4"
  },
  {
    "url": "assets/fonts/KaTeX_SansSerif-Bold.5d4480bd.woff",
    "revision": "5d4480bd287fed8d9f52f15f9e891cf4"
  },
  {
    "url": "assets/fonts/KaTeX_SansSerif-Bold.b2acfbf0.woff2",
    "revision": "b2acfbf0bcb210d7dcacd3a625691c29"
  },
  {
    "url": "assets/fonts/KaTeX_SansSerif-Italic.255f1668.woff2",
    "revision": "255f1668bf91741143ff907abfe87350"
  },
  {
    "url": "assets/fonts/KaTeX_SansSerif-Italic.40d559e3.ttf",
    "revision": "40d559e307d2766ad67e717b07c6bfe8"
  },
  {
    "url": "assets/fonts/KaTeX_SansSerif-Italic.d5333e23.woff",
    "revision": "d5333e23e0fb885dcce91f8d39dcfbe1"
  },
  {
    "url": "assets/fonts/KaTeX_SansSerif-Regular.7ba33ebb.ttf",
    "revision": "7ba33ebb57e020a4948ef3da67a961fe"
  },
  {
    "url": "assets/fonts/KaTeX_SansSerif-Regular.8de2dee1.woff2",
    "revision": "8de2dee189a5cb86d2c63ec286594f63"
  },
  {
    "url": "assets/fonts/KaTeX_SansSerif-Regular.a8506f1b.woff",
    "revision": "a8506f1b1fb95010d2e46a2ce5edc453"
  },
  {
    "url": "assets/fonts/KaTeX_Script-Regular.46b2d8cf.woff",
    "revision": "46b2d8cfe4fd0021561890cf34a99e86"
  },
  {
    "url": "assets/fonts/KaTeX_Script-Regular.4b4feb45.woff2",
    "revision": "4b4feb459569bc556025e27940c5a43c"
  },
  {
    "url": "assets/fonts/KaTeX_Script-Regular.b3881cee.ttf",
    "revision": "b3881ceea63499db39bfebca1edd0df7"
  },
  {
    "url": "assets/fonts/KaTeX_Size1-Regular.686db35f.ttf",
    "revision": "686db35f856dc151987748d946b577f2"
  },
  {
    "url": "assets/fonts/KaTeX_Size2-Regular.3f883bff.ttf",
    "revision": "3f883bff6b52775d6f96de5cc9d50052"
  },
  {
    "url": "assets/fonts/KaTeX_Size4-Regular.4c04d946.ttf",
    "revision": "4c04d946e924fcb72074640737e05f5c"
  },
  {
    "url": "assets/fonts/KaTeX_Typewriter-Regular.a5ed4d0a.ttf",
    "revision": "a5ed4d0a38f0c027bcc49c972e41330b"
  },
  {
    "url": "assets/fonts/KaTeX_Typewriter-Regular.cabbcf15.woff2",
    "revision": "cabbcf159469220758fdde285fdb9a37"
  },
  {
    "url": "assets/fonts/KaTeX_Typewriter-Regular.e52da442.woff",
    "revision": "e52da4424fa372f4ff884569d461369d"
  },
  {
    "url": "assets/fonts/MaterialIcons-Regular.012cf6a1.woff",
    "revision": "012cf6a10129e2275d79d6adac7f3b02"
  },
  {
    "url": "assets/fonts/MaterialIcons-Regular.570eb838.woff2",
    "revision": "570eb83859dc23dd0eec423a49e147fe"
  },
  {
    "url": "assets/fonts/MaterialIcons-Regular.a37b0c01.ttf",
    "revision": "a37b0c01c0baf1888ca812cc0508f6e2"
  },
  {
    "url": "assets/fonts/MaterialIcons-Regular.e79bfd88.eot",
    "revision": "e79bfd88537def476913f3ed52f4f4b3"
  },
  {
    "url": "assets/img/blue_wash_wall_4.ee64ddfc.png",
    "revision": "ee64ddfcb1b52dddaa795ed34bebabfb"
  },
  {
    "url": "assets/img/crossword.b5c5ab66.png",
    "revision": "b5c5ab66d8331513696fe3ec992187a0"
  },
  {
    "url": "assets/img/dust_scratches.608ab5fe.png",
    "revision": "608ab5fe4a45e2ac93febd3416b260f0"
  },
  {
    "url": "assets/img/pika.264710a4.png",
    "revision": "264710a4e7826b35df2e562895c44ee2"
  },
  {
    "url": "assets/img/pika.9f1eafdd.gif",
    "revision": "9f1eafdd20b87ca874da588867df2497"
  },
  {
    "url": "assets/img/whitey.db698606.png",
    "revision": "db698606ff0094844cc0d3b5e99b807a"
  },
  {
    "url": "assets/img/xv_light_blue.9693a7e2.png",
    "revision": "9693a7e2dbef5afa0fe66488e8f51896"
  },
  {
    "url": "assets/img/xv.30148b7c.png",
    "revision": "30148b7c22dc86276789e064c85bec9c"
  },
  {
    "url": "assets/js/1.d819af06.js",
    "revision": "e90be68e5d5be3777ef73f20ad63e8de"
  },
  {
    "url": "assets/js/2.44bda0ec.js",
    "revision": "d57a2f8d49d3a3409bbf9710a395a83e"
  },
  {
    "url": "assets/js/39.c16cb0d1.js",
    "revision": "2e99f084eeb70ed9eef885b9ed565ff3"
  },
  {
    "url": "assets/js/4.5368da55.js",
    "revision": "ab27b58cf28040775a7affde02c24ea2"
  },
  {
    "url": "assets/js/40.e5b068b4.js",
    "revision": "aa1a5a4392878873b2c673198fdfd778"
  },
  {
    "url": "assets/js/41.07ba3d73.js",
    "revision": "749278f2d9b499422680e5d407c215b3"
  },
  {
    "url": "assets/js/42.dca9d99c.js",
    "revision": "4e727ed74cc8c6c68e1bc0b4f921ae28"
  },
  {
    "url": "assets/js/43.940e0e12.js",
    "revision": "1c3ff0a2be3baef07ba35453a7a8d5be"
  },
  {
    "url": "assets/js/44.e93280e4.js",
    "revision": "69415f1f83ab09dffab3a93d000b3636"
  },
  {
    "url": "assets/js/45.f1484f83.js",
    "revision": "d2ed400cb0fa5e2af1877b30dfb1e32a"
  },
  {
    "url": "assets/js/46.be35df64.js",
    "revision": "1a37db39c9dbb4ee30044210d16e710b"
  },
  {
    "url": "assets/js/47.3c451df9.js",
    "revision": "688f6545423f1e5ba05219b580da6c5d"
  },
  {
    "url": "assets/js/48.ab76ce8f.js",
    "revision": "570c38af9de68c68af30cc81630d1efa"
  },
  {
    "url": "assets/js/49.05731120.js",
    "revision": "69318776a7a22b475a78dc381d92c446"
  },
  {
    "url": "assets/js/5.6fec8d10.js",
    "revision": "b4834625252e83bbc080ff5e3fe25f34"
  },
  {
    "url": "assets/js/50.fa4943b0.js",
    "revision": "72c414dc08d3a9e222dd40f821284fdf"
  },
  {
    "url": "assets/js/51.a6089489.js",
    "revision": "232c1faa0528bb0b077c1299774121f3"
  },
  {
    "url": "assets/js/52.2914f207.js",
    "revision": "48fa7b2b2e480fa937171b0bd62335fc"
  },
  {
    "url": "assets/js/53.f5900b98.js",
    "revision": "c5eb2779446fc19f7ec351050981868b"
  },
  {
    "url": "assets/js/6.364c00c1.js",
    "revision": "61e69cf1c650a6e70ca34398173cf955"
  },
  {
    "url": "assets/js/app.d28ffa38.js",
    "revision": "052b9c5f0455a6c0e6149316a9ddb5c3"
  },
  {
    "url": "assets/js/layout-BaseLayout.eab5aa61.js",
    "revision": "e99758e852b7031813f3a7442faf0136"
  },
  {
    "url": "assets/js/layout-BaseLayout~layout-Layout.5361974f.js",
    "revision": "f7bee4e3b23ee6398d9ac332ad161ab5"
  },
  {
    "url": "assets/js/layout-Layout.774a400c.js",
    "revision": "aa425d6e5eadb57790b10a548a044776"
  },
  {
    "url": "assets/js/layout-NotFound.283e8ad6.js",
    "revision": "5d7153b75bf33d4d0758fc292d25fe8e"
  },
  {
    "url": "assets/js/page-0815fe43.391789bb.js",
    "revision": "49ef9e1fc7eb54c4ea39618410239fed"
  },
  {
    "url": "assets/js/page-1bb4b3ad.be5634f8.js",
    "revision": "d3b3ac6c9884824d29b0f6aed33ef30a"
  },
  {
    "url": "assets/js/page-22a9043f.9d49cf3b.js",
    "revision": "7d1a6ceac2a8a6f05e26ea379d3d59b1"
  },
  {
    "url": "assets/js/page-23e99a6f.cd7f80af.js",
    "revision": "b8d63f4e56fa7434388256830b3e5784"
  },
  {
    "url": "assets/js/page-293f1fdc.0c5277f7.js",
    "revision": "496837a16b2250ee48bb4d8e8d8606dd"
  },
  {
    "url": "assets/js/page-32e15e7c.85ea8317.js",
    "revision": "33267a9389ef13ec1f6923e21917bfed"
  },
  {
    "url": "assets/js/page-3841e8ef.3ccef647.js",
    "revision": "9a8d8b70dd87dc86de240155c0013547"
  },
  {
    "url": "assets/js/page-3c4a43ae.01e99e33.js",
    "revision": "d2b8822d8c9515876e74f2bf8c9f29de"
  },
  {
    "url": "assets/js/page-49376acf.dd43aa76.js",
    "revision": "d3fdc7b0f0db1c4ed28c404d2d749ad0"
  },
  {
    "url": "assets/js/page-4abc2b47.6c3b8223.js",
    "revision": "6eb5dff01515f53a2bf8bb20794409e1"
  },
  {
    "url": "assets/js/page-50e0a6f6.efa2dac7.js",
    "revision": "bf6100f392b2b67f1b37b01f124dc16e"
  },
  {
    "url": "assets/js/page-5607f94f.9814a897.js",
    "revision": "43a0d4f557f5e3d4929bbb09f82e15ff"
  },
  {
    "url": "assets/js/page-5c008213.2c533dcd.js",
    "revision": "bf29f7df4e9dd0c2d67f7c0b15d90164"
  },
  {
    "url": "assets/js/page-5fc63572.2e4617e9.js",
    "revision": "c75384444dc596e0ce9aec598ddae876"
  },
  {
    "url": "assets/js/page-6365d1e8.0ac45cb0.js",
    "revision": "973f4e10855a75149572a07051cbcf24"
  },
  {
    "url": "assets/js/page-6f8a8732.917cf8f9.js",
    "revision": "b861e836196496afd70bbb061d4a989c"
  },
  {
    "url": "assets/js/page-70a930f7.7904e1b3.js",
    "revision": "7548bb71a62dd7484fc09a750da5c38f"
  },
  {
    "url": "assets/js/page-782df662.fba4a7fe.js",
    "revision": "7ebd831115435b470b51e31bae13c8cd"
  },
  {
    "url": "assets/js/page-921a5862.e00b5bf4.js",
    "revision": "3b556a2d0405219caf89e1ed1521bfe3"
  },
  {
    "url": "assets/js/page-9a911df4.f0c06139.js",
    "revision": "527e394d610b0ea86771583c9a567bc4"
  },
  {
    "url": "assets/js/page-bfd44046.58eba8d6.js",
    "revision": "701820f353a63a586983381edf798b9b"
  },
  {
    "url": "assets/js/page-bffdee08.a00f1d1c.js",
    "revision": "31901e2da335543bcb19313c0e071cb5"
  },
  {
    "url": "assets/js/page-cd7053a2.15f23cab.js",
    "revision": "4636b200acb76ae2631e3302219fd670"
  },
  {
    "url": "assets/js/page-dad8d1c2.3330f665.js",
    "revision": "d18aadc09fe1f40fbb3b1b6f04a84bf2"
  },
  {
    "url": "assets/js/page-eaea12a2.f24e9ae7.js",
    "revision": "9282ae12074f21e336684bdf76339c18"
  },
  {
    "url": "assets/js/page-fa1749c8.19893de9.js",
    "revision": "fd804219d5533ecd7afaacfa7f379da5"
  },
  {
    "url": "assets/js/vendors~flowchart.70701252.js",
    "revision": "65cce7e3dd25f525e153ff9660aace84"
  },
  {
    "url": "assets/js/vendors~layout-Layout.283475a2.js",
    "revision": "488712b5fbe7b4b0b127b4c13a55b06e"
  },
  {
    "url": "category/index.html",
    "revision": "739213b6dd83b282688ed43116f4fb59"
  },
  {
    "url": "hello-vblog.html",
    "revision": "6164f839a6fd802f4f253e2e5da797ba"
  },
  {
    "url": "icon.png",
    "revision": "a0b370e0cdc4fb660546c5ecc4c7da20"
  },
  {
    "url": "index.html",
    "revision": "8fb6eded9926ba17d367417d09a3a43b"
  },
  {
    "url": "search/index.html",
    "revision": "63d1a0553d79583a631cd4698322a36c"
  },
  {
    "url": "tag/index.html",
    "revision": "bd456b131daffa7f5725a142f0806934"
  },
  {
    "url": "VBlog/Development/article/common/test-lazy-load.html",
    "revision": "be093e518c37cea57c3bb68d6b6e5105"
  },
  {
    "url": "VBlog/Development/article/common/test-lazy-load2.html",
    "revision": "51f5af1dc41a1648860ed0f946fdf11a"
  },
  {
    "url": "VBlog/Feature/about-page.html",
    "revision": "068c8d18af4e7d57a92a5c0700489490"
  },
  {
    "url": "VBlog/Feature/archive-page.html",
    "revision": "03b7dd65b26098b45f10160fa9e67f56"
  },
  {
    "url": "VBlog/Feature/category-page.html",
    "revision": "3946b89354f0ab0dea86ace978459533"
  },
  {
    "url": "VBlog/Feature/common-feature.html",
    "revision": "057807a12986f031fe758f1e5bacceb4"
  },
  {
    "url": "VBlog/Feature/index-page.html",
    "revision": "2db355e0af3dea8f962a2bcbe43b671e"
  },
  {
    "url": "VBlog/Feature/index.html",
    "revision": "616088cc2539bbda03a45579565aee45"
  },
  {
    "url": "VBlog/Feature/post-page.html",
    "revision": "5c8f99857f53675b17409b77ed9d5b3f"
  },
  {
    "url": "VBlog/Feature/search-page.html",
    "revision": "215ccc2aa049218a09b7e6abb1591d21"
  },
  {
    "url": "VBlog/Feature/sidebar-feature.html",
    "revision": "d8b55febcbc8c52e73143a3fedbea8e9"
  },
  {
    "url": "VBlog/Feature/tag-page.html",
    "revision": "fbbe3a00f0ea7d157115e67f8b88ed82"
  },
  {
    "url": "VBlog/index.html",
    "revision": "8bd33a4ce7233bb15fb6d1fd8f9de8f2"
  },
  {
    "url": "VBlog/Installation.html",
    "revision": "197272440210fab667ba28d98f1dfb5e"
  },
  {
    "url": "VBlog/Quick-Start.html",
    "revision": "3818cdaf4c81c989c382bd5fca0c82df"
  },
  {
    "url": "VBlog/Usage/Container/index.html",
    "revision": "623fe2c7db093fcff795687f86ec1acd"
  },
  {
    "url": "VBlog/Usage/front-matter.html",
    "revision": "4f3dba9db0e7b95f7602138bb2a56cf9"
  },
  {
    "url": "VBlog/Usage/index.html",
    "revision": "ec453c6687bd484b93ee7bdedef740bc"
  },
  {
    "url": "VBlog/Usage/Markdown/advanced.html",
    "revision": "bd8c8ef704513d634fd206e15a966036"
  },
  {
    "url": "VBlog/Usage/Markdown/basic.html",
    "revision": "98a6290cd13984bb0b16f88d3791beae"
  },
  {
    "url": "VBlog/Usage/Markdown/flow-chart.html",
    "revision": "a0d7b1ffaaa2879e53e212540383e2f2"
  },
  {
    "url": "VBlog/Usage/Markdown/index.html",
    "revision": "7c5371020a415aeaf51fed6d59948bfa"
  },
  {
    "url": "VBlog/Usage/Markdown/link.html",
    "revision": "7ab54e79088960378bc8c7b05c986641"
  },
  {
    "url": "VBlog/Usage/Slide.html",
    "revision": "f51b39d9afe9de562715d82fba377ca8"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
