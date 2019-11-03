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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "4a0baaaec7642595dafa33ffaa081c76"
  },
  {
    "url": "About/index.html",
    "revision": "30956f2c5836f40d507519bccac3c327"
  },
  {
    "url": "archive/index.html",
    "revision": "168173fa743da151fed48773f2aae113"
  },
  {
    "url": "assets/css/0.styles.0daad973.css",
    "revision": "64c9cc52df8a4343083890b6d5594d54"
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
    "url": "assets/js/1.a72bb583.js",
    "revision": "4c74dac5986e94b5eb8814e8ae91c5f9"
  },
  {
    "url": "assets/js/2.8e43167e.js",
    "revision": "ef0df3f7b316cb8d0dceabc6ff2262b5"
  },
  {
    "url": "assets/js/3.a04ad345.js",
    "revision": "57d4f6c6c2f07128843c6cba07c6ab96"
  },
  {
    "url": "assets/js/5.802652d3.js",
    "revision": "ac98ccfa04ee0ba3c3894ea748341e77"
  },
  {
    "url": "assets/js/6.882729aa.js",
    "revision": "34172c7a77e200e2ae4a78d4f8a165bf"
  },
  {
    "url": "assets/js/73.c8a9d252.js",
    "revision": "0c3cce311be3024c729545e50585c5a9"
  },
  {
    "url": "assets/js/74.8df9665d.js",
    "revision": "98f569bf7ec73acd7c916e0e4ed551f4"
  },
  {
    "url": "assets/js/75.a9f19ee7.js",
    "revision": "596a44ba59f735440f013f4095b5740d"
  },
  {
    "url": "assets/js/76.846155c4.js",
    "revision": "5946b9af54ea219b0828d95836d83579"
  },
  {
    "url": "assets/js/77.ffabfc83.js",
    "revision": "b031c2df3ec065285e79146e3e6613a7"
  },
  {
    "url": "assets/js/78.116bc7f2.js",
    "revision": "d2337987f33a7948950b32137cc6aa56"
  },
  {
    "url": "assets/js/79.cc49079e.js",
    "revision": "e644c99211657c7b5e27ccd76ed9da6c"
  },
  {
    "url": "assets/js/80.8cf96bbe.js",
    "revision": "6f0cced559bdf2084860279e2305e54b"
  },
  {
    "url": "assets/js/81.54726919.js",
    "revision": "2e522d207e2292398983225bdb9d8c09"
  },
  {
    "url": "assets/js/82.d538e25e.js",
    "revision": "9e5580eb13ce538c67f1aee605e4e015"
  },
  {
    "url": "assets/js/83.77fe9b0f.js",
    "revision": "912ac435d91fde502118d2075f568845"
  },
  {
    "url": "assets/js/84.442c15bd.js",
    "revision": "b8f3e8f387b49566c2d48cc599dddad8"
  },
  {
    "url": "assets/js/85.1b11f254.js",
    "revision": "0c7c9274ae960dde7aaec715ed57b09e"
  },
  {
    "url": "assets/js/86.db5da13a.js",
    "revision": "44b4cd154f6c9b405e04b3f29222a465"
  },
  {
    "url": "assets/js/87.fe596c14.js",
    "revision": "0ce6273f12b5fe7c60607197095ef2e3"
  },
  {
    "url": "assets/js/88.61a0a9b6.js",
    "revision": "7611b4a66f63062bf3a197059c9cbd54"
  },
  {
    "url": "assets/js/89.ec643538.js",
    "revision": "c95220de09d07f9424c1c1d4ebdd3e87"
  },
  {
    "url": "assets/js/90.67ef7f47.js",
    "revision": "d9ebcd9762e2ffa2b1cf95a0054dfc43"
  },
  {
    "url": "assets/js/91.bbb2bd06.js",
    "revision": "cfe55cac5159984fd34348b1f276682d"
  },
  {
    "url": "assets/js/92.6960a17f.js",
    "revision": "69ec7a777ec9230555e1399fb7db85b7"
  },
  {
    "url": "assets/js/93.2c23d285.js",
    "revision": "a307e559449a1e10b6641704437f23c4"
  },
  {
    "url": "assets/js/94.a33b8bbc.js",
    "revision": "79a4e99bd5cd7d0a18863279e64fac7b"
  },
  {
    "url": "assets/js/95.fae73623.js",
    "revision": "d1fb97e1a492c5f07bee30c10616c513"
  },
  {
    "url": "assets/js/app.8890307b.js",
    "revision": "58b11616b4ddce82e46a829eeaccb267"
  },
  {
    "url": "assets/js/layout-BaseLayout.701130f6.js",
    "revision": "80c6cbbb34b9be577f1c462b5157bd68"
  },
  {
    "url": "assets/js/layout-BaseLayout~layout-Layout.abac54af.js",
    "revision": "cd7c12e87ec6dd6a1e5150cfbe311b36"
  },
  {
    "url": "assets/js/layout-Layout.c785bd23.js",
    "revision": "11252fdedc20b5818286978b860225e7"
  },
  {
    "url": "assets/js/layout-NotFound.104fabbe.js",
    "revision": "f17d10652c8c30e6e1c388bd3de6a145"
  },
  {
    "url": "assets/js/page-01b1365c.75c61b3e.js",
    "revision": "c677a559ffcbf80280e755705fe6bbaf"
  },
  {
    "url": "assets/js/page-03ff99e4.3292ac79.js",
    "revision": "e66d87c832001213f3b7c9a6fa5ffc05"
  },
  {
    "url": "assets/js/page-0762cb2c.6bebd84a.js",
    "revision": "3487100dfe8f01db6e1fcb00c8121b76"
  },
  {
    "url": "assets/js/page-0815fe43.031c5a6a.js",
    "revision": "aecd45da8114023dbae02d108e93961e"
  },
  {
    "url": "assets/js/page-0994254e.8b975ca5.js",
    "revision": "0b281c886605a74fb9ad9b97a330ebf2"
  },
  {
    "url": "assets/js/page-09cfa20f.dd510dc8.js",
    "revision": "906e5d13744d4e0ebfdc0c23be00912d"
  },
  {
    "url": "assets/js/page-0bd5cd98.0e90ceaf.js",
    "revision": "321f32c2b47e2efd6f9226e21023578d"
  },
  {
    "url": "assets/js/page-0ca8b05c.c51e564f.js",
    "revision": "c0ab84b092f1f11115f0f521a1db94aa"
  },
  {
    "url": "assets/js/page-130de14f.6a1a0b18.js",
    "revision": "7d67020276f2f3dc91d5f389b9b63a2d"
  },
  {
    "url": "assets/js/page-17916170.35fdd681.js",
    "revision": "2795944648caff6c5f208b871d81bfbf"
  },
  {
    "url": "assets/js/page-1efb5c62.02e4fe5c.js",
    "revision": "2e964de894c7c74dc6ea008f4484115d"
  },
  {
    "url": "assets/js/page-2282a6e0.ee959b6d.js",
    "revision": "540e03e57c113fa84c1ddbc8109f4da0"
  },
  {
    "url": "assets/js/page-2ba07fce.34d02aaa.js",
    "revision": "2caab45aad4ae2db0b1a04b221f27b87"
  },
  {
    "url": "assets/js/page-2da25f49.d3d3d3d6.js",
    "revision": "17a0880def2b1c6e54ba4a097ccd5f07"
  },
  {
    "url": "assets/js/page-2f77601c.e79bd2cb.js",
    "revision": "e9f7679617edef0e9677a33088f2a011"
  },
  {
    "url": "assets/js/page-36058925.2eb11938.js",
    "revision": "e57c6757a39f2cd8dcff22299838e3b2"
  },
  {
    "url": "assets/js/page-3721e5cf.0496d7a9.js",
    "revision": "0042629d1d9d64deed9a3c948464b491"
  },
  {
    "url": "assets/js/page-38e94d3e.09fc19b6.js",
    "revision": "251d76d42a56c0f3c15e64cc2b04fbbb"
  },
  {
    "url": "assets/js/page-39d006b5.62ad6618.js",
    "revision": "c7a999824c5b19ae1aa9e0463f5770be"
  },
  {
    "url": "assets/js/page-3b1778e4.f405bc3c.js",
    "revision": "1272ef98bb463a1482e938f4363f85e5"
  },
  {
    "url": "assets/js/page-4048f79b.7017f9af.js",
    "revision": "59d906cd99d683c155afdfa05ff29381"
  },
  {
    "url": "assets/js/page-409d673b.3f69bda1.js",
    "revision": "25764e809bad2dfa80b3d786d4009e6d"
  },
  {
    "url": "assets/js/page-42a0ea7c.8a3f5d10.js",
    "revision": "00e9c77e16c0562ccf16d12586c591b1"
  },
  {
    "url": "assets/js/page-437f73dc.79e41cec.js",
    "revision": "243ded234ed9b833c4b71558fa5af9de"
  },
  {
    "url": "assets/js/page-4773a0fc.446687ee.js",
    "revision": "1c5862e096ebf0b8019f75a22a29a4ea"
  },
  {
    "url": "assets/js/page-47ec31ef.20899dda.js",
    "revision": "542a850f6b2094ab4a7be6864398adfb"
  },
  {
    "url": "assets/js/page-494b7749.0969d500.js",
    "revision": "598660fefbe28751c6f1b70206d909e4"
  },
  {
    "url": "assets/js/page-4e40ef0e.cd8ec63a.js",
    "revision": "f120f13c267db6304d87772130f2c2ec"
  },
  {
    "url": "assets/js/page-4f5eb00c.5950829a.js",
    "revision": "ca1963f8b84110e9a93774cc08a8aca4"
  },
  {
    "url": "assets/js/page-52453899.75ff908a.js",
    "revision": "8ec7431565b81ddea7448a9d67e36b76"
  },
  {
    "url": "assets/js/page-53a21bc2.38c2dd67.js",
    "revision": "d02926aa3689161f448555e0aa574c5a"
  },
  {
    "url": "assets/js/page-548dbfdd.df918b8d.js",
    "revision": "26b28a3e9a31843592c086578903f501"
  },
  {
    "url": "assets/js/page-54cde949.470cdafd.js",
    "revision": "fb19769bb994be22f77ed29e48233e6a"
  },
  {
    "url": "assets/js/page-56c5add8.7a057ac5.js",
    "revision": "ce326049b0ad0e3056049cd24d304151"
  },
  {
    "url": "assets/js/page-5971d062.90c9454f.js",
    "revision": "8ac51617a8672b7fc0c151148766237e"
  },
  {
    "url": "assets/js/page-5ae76184.ede6a0fe.js",
    "revision": "b8869848263131949ccb3edf765c6d57"
  },
  {
    "url": "assets/js/page-5c24028f.da04313c.js",
    "revision": "31e93dee7d139addbde5bf5ca3d63aa2"
  },
  {
    "url": "assets/js/page-5dade32f.9bed2f73.js",
    "revision": "8efb4cbe2132be82fd70769d975fc344"
  },
  {
    "url": "assets/js/page-62c3f84a.a22c0749.js",
    "revision": "2b380cbcf0e12ca94bacc8eb4a9ed1a8"
  },
  {
    "url": "assets/js/page-631831dc.9f33fdd7.js",
    "revision": "844c596e4c969f66839f49573de06d62"
  },
  {
    "url": "assets/js/page-64c6c3f9.adc2007a.js",
    "revision": "7edacdc699d2faadb87bc7be814efbc0"
  },
  {
    "url": "assets/js/page-68a3e126.41d8312f.js",
    "revision": "09d574ff0c0aa49a2ce39cc7b0f0a306"
  },
  {
    "url": "assets/js/page-718e3f13.52ba68d4.js",
    "revision": "774bbb2dfd464e08cfc354f621d43706"
  },
  {
    "url": "assets/js/page-7961fc62.697e680a.js",
    "revision": "90c5ba8fb55ee2f5cee1299fdc1c6608"
  },
  {
    "url": "assets/js/page-7e22c02f.74aa5ef4.js",
    "revision": "cf2d7ab071d1d4ee3300845ec95729e3"
  },
  {
    "url": "assets/js/page-7f4c69e4.ff7c23a8.js",
    "revision": "aff47e09909adad57352849840a55142"
  },
  {
    "url": "assets/js/page-9a13860a.6f91b355.js",
    "revision": "adfa78430ebc577421f20b96c2e2de23"
  },
  {
    "url": "assets/js/page-9d704b70.098f7f5e.js",
    "revision": "f09013232f3e40a17827c25e810342c2"
  },
  {
    "url": "assets/js/page-a1c83fc6.f7f888b8.js",
    "revision": "f9a7452a6ca1eda4346703d8d59c89c1"
  },
  {
    "url": "assets/js/page-a649c29e.74623527.js",
    "revision": "8a6deb05056a7ffc65d7990856cbfa40"
  },
  {
    "url": "assets/js/page-b6123e24.35ff4a9a.js",
    "revision": "95960524c15fbf608ad0a9987dfa9617"
  },
  {
    "url": "assets/js/page-c1e7a5fc.dc869110.js",
    "revision": "5bc73d7a0c0867590292862186c5a6d0"
  },
  {
    "url": "assets/js/page-c41b383a.2d51adf5.js",
    "revision": "83fcc23f255fd55c551121e7a6b99376"
  },
  {
    "url": "assets/js/page-c799e3a4.71adb678.js",
    "revision": "0274cfa705305c5d3e48d2e183f40507"
  },
  {
    "url": "assets/js/page-cd03364e.d41f0bdd.js",
    "revision": "4ce45b09dbea14d24e53dc70d94ad133"
  },
  {
    "url": "assets/js/page-deb70f94.951e9e4b.js",
    "revision": "9215eb9cada9f55de02d4a831d7a5521"
  },
  {
    "url": "assets/js/page-e63bef64.80845eb1.js",
    "revision": "e1a3780d514396953081f7429944ff42"
  },
  {
    "url": "assets/js/page-e869018c.d13f666e.js",
    "revision": "73954de9bca616d67dc6aee17b89eca6"
  },
  {
    "url": "assets/js/page-e87fecf8.1968276f.js",
    "revision": "d68755ceaf4ed5cc10947cf03d94540b"
  },
  {
    "url": "assets/js/page-fa2e9ecc.1d2da0e8.js",
    "revision": "44791e653d070860be4714825bf942e0"
  },
  {
    "url": "assets/js/vendors~flowchart.9f9b026a.js",
    "revision": "2921bf2c291f9070e018ae491b40f2f9"
  },
  {
    "url": "assets/js/vendors~layout-Layout.95b9892c.js",
    "revision": "5a6b66632dab4c379f5b6874c6a76d5b"
  },
  {
    "url": "category/index.html",
    "revision": "05e5ac4f3b302db9ed7605833a106d14"
  },
  {
    "url": "Coding/Front-End/CSS/awesome-css.html",
    "revision": "fe8cb64981e1db66d1867decefd01e5d"
  },
  {
    "url": "Coding/Front-End/CSS/awesome-icons.html",
    "revision": "352f0b4ed53ca23815df1e7ea85db358"
  },
  {
    "url": "Coding/Front-End/JS/Module Bundler/Webpack/awesome-webpack.html",
    "revision": "432be25de26d97ee76f04cadab9a4f69"
  },
  {
    "url": "Coding/Front-End/JS/Vue/awesome-vue.html",
    "revision": "0b5600f015f89a7930e2220fc784d506"
  },
  {
    "url": "Coding/日常筆記/CodeReview/code-review-memo.html",
    "revision": "d29fc7051564cf14adecaef61257459a"
  },
  {
    "url": "Coding/日常筆記/CSharp/AutoMapper-class繼承後之對應.html",
    "revision": "de6da1f4b8fce2fead29c7740a1293c2"
  },
  {
    "url": "Coding/日常筆記/CSharp/String-Concatenate.html",
    "revision": "e9f7b1d04ed2a759c1a02975e2d8f9ff"
  },
  {
    "url": "Coding/日常筆記/CSharp/tmp.html",
    "revision": "71526445358e8281ef37401d7125c650"
  },
  {
    "url": "Coding/日常筆記/CSharp/變數命名.html",
    "revision": "6d6eba2841297e5b439fe9fd1152f556"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/1. 心/index.html",
    "revision": "ea11a2614938e77ad06b8788796eb56f"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/1. 心/TMP.html",
    "revision": "f3b87c3ee2b2607f76982d8dc48cd47d"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/1. 心/心理戰.html",
    "revision": "6326f850a356b376dec15bca13eae31a"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/2. 技/index.html",
    "revision": "ea0979c7d63aac7c366e3bf3003c19f5"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/2. 技/神小跳.html",
    "revision": "81a92791c2aec8acc6f2188127d6604a"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/2. 技/視野變換.html",
    "revision": "6680f2baa9f98fa05be0f6f554c94bc0"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/2. 技/走位.html",
    "revision": "44c221aae98813db60e991a997621a05"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/2. 技/跳點.html",
    "revision": "94d7d23e4d317400f9252681f536c70a"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/2. 技/預出手.html",
    "revision": "d7b420a52cf8f70f1e9f2d0ff72c5cda"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/3. 體/index.html",
    "revision": "ac503c0232627a5314faf89639d677f7"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/4. 群/index.html",
    "revision": "42256dda9e95b34d479ecfc7b2368bc0"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/4. 群/卡位.html",
    "revision": "a6b3dd78c0a32cafdc0e5fccd1b5739f"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/4. 群/組隊.html",
    "revision": "5a1f06bf115ab743f2f6e257eeed0306"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/5. 略/index.html",
    "revision": "89edd408d1cac728b48d2ef7ce4cb669"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/5. 略/局勢.html",
    "revision": "3d3267a1913f78e56786827638050b74"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/6. 決/index.html",
    "revision": "69d7713b502f0b2493db296d6f3ba017"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/index.html",
    "revision": "3d63d865425e3d26177c9a204455df07"
  },
  {
    "url": "Game/FEZ/2. 國戰步兵戰策略/index.html",
    "revision": "b8b5e73688da8a5d6126eda794f78531"
  },
  {
    "url": "Game/FEZ/3. 各職玩法/刀.html",
    "revision": "63bc71519fbc5e5b32ad81037ea2d90d"
  },
  {
    "url": "Game/FEZ/3. 各職玩法/雙修.html",
    "revision": "28df40f0440e553812ffa04bc47382e0"
  },
  {
    "url": "Game/FEZ/4. 2on/index.html",
    "revision": "23d5ce6bdc336710dbb5cb7613c874be"
  },
  {
    "url": "Game/FEZ/5. 3on/index.html",
    "revision": "108f85bc0c0cb4aa5816acb19cdf205b"
  },
  {
    "url": "Game/FEZ/X. Theorem/HMM.html",
    "revision": "9b85fabbe8eb7f9259addced8a26854a"
  },
  {
    "url": "hello-vuejcblog.html",
    "revision": "3f7a07db3706d17b758e0667aab297dd"
  },
  {
    "url": "icon.png",
    "revision": "bc278be9745f5fec074429e789a0b788"
  },
  {
    "url": "img/firebase/1.png",
    "revision": "d00d9e42c9fe6dbb66a96fca6d576a4b"
  },
  {
    "url": "img/firebase/2.png",
    "revision": "58100b6accea1cf2ae329108aa1cd24d"
  },
  {
    "url": "img/firebase/3.png",
    "revision": "5ff0dbb7891ca608e94a45c93adc2301"
  },
  {
    "url": "img/firebase/4.png",
    "revision": "ea9bbb03f7281540e7ffe0f57de84c1f"
  },
  {
    "url": "img/firebase/5.png",
    "revision": "baac21751249cb11f399a1cbdb68c444"
  },
  {
    "url": "img/firebase/6.png",
    "revision": "3c0ff0ffdb8502c5b3648bbd6c944aa5"
  },
  {
    "url": "img/firebase/7.png",
    "revision": "6dcd151419be9665e29a023f356a135a"
  },
  {
    "url": "index.html",
    "revision": "9724f97f20b3bc6fd6de8800196edcde"
  },
  {
    "url": "search/index.html",
    "revision": "e3e1f921be66ca406f5c2e37a11c78be"
  },
  {
    "url": "tag/index.html",
    "revision": "b6893207a2b4399843d08d84b1339577"
  },
  {
    "url": "VueJCBlog/Development/article/hello-vuejcblog.html",
    "revision": "bc74637ace6996aae6072a294ddeb72a"
  },
  {
    "url": "VueJCBlog/Development/article/test/test-comment.html",
    "revision": "d05af150dce9828a613af62dc553ae1a"
  },
  {
    "url": "VueJCBlog/Development/article/test/test-lazy-load.html",
    "revision": "9101fcba1d72c3bdece6fc480cd4717b"
  },
  {
    "url": "VueJCBlog/Development/article/test/test-lazy-load2.html",
    "revision": "f30301ddd2ef4047e2ef901751463144"
  },
  {
    "url": "VueJCBlog/Feature/about-page.html",
    "revision": "9924e0f590b21ec84ef5744ed1be9377"
  },
  {
    "url": "VueJCBlog/Feature/archive-page.html",
    "revision": "5add8159d0e09cbbf435ec354a83b41f"
  },
  {
    "url": "VueJCBlog/Feature/category-page.html",
    "revision": "ebe45b9fbc68a2ed70c5e583d36bafae"
  },
  {
    "url": "VueJCBlog/Feature/common-feature.html",
    "revision": "1b3d687e2f848501ebfbf753e7c868cf"
  },
  {
    "url": "VueJCBlog/Feature/index-page.html",
    "revision": "4e8670160d614e5b2c7e833b4acbfc54"
  },
  {
    "url": "VueJCBlog/Feature/index.html",
    "revision": "883364ba0331b93ace070d32d3f60205"
  },
  {
    "url": "VueJCBlog/Feature/post-page.html",
    "revision": "e37e6c597139ae2c3d915e39fb846388"
  },
  {
    "url": "VueJCBlog/Feature/search-page.html",
    "revision": "8fdf9278e62b8214e92d4075955b7eee"
  },
  {
    "url": "VueJCBlog/Feature/sidebar-feature.html",
    "revision": "429d512ec91460d84720548b9e280371"
  },
  {
    "url": "VueJCBlog/Feature/tag-page.html",
    "revision": "d750e70a39dc1e4bc8c42a81077845dc"
  },
  {
    "url": "VueJCBlog/index.html",
    "revision": "8e3043570ef360a42bae1c481d7b6269"
  },
  {
    "url": "VueJCBlog/Installation.html",
    "revision": "daa213a28164705b20f61d8367185fd2"
  },
  {
    "url": "VueJCBlog/Quick-Start.html",
    "revision": "d850e1a2caf12ff0a81dc739c26e8f03"
  },
  {
    "url": "VueJCBlog/Usage/Container/index.html",
    "revision": "b39792e8027385e985ab7fc28f0ad395"
  },
  {
    "url": "VueJCBlog/Usage/front-matter.html",
    "revision": "355acd93ae1c07cc86bba1493b391b13"
  },
  {
    "url": "VueJCBlog/Usage/index.html",
    "revision": "4bb88ed0ef7fa83ceacb006c9eff1df5"
  },
  {
    "url": "VueJCBlog/Usage/Markdown/advanced.html",
    "revision": "51b719e97aef26f81bf5a99b4ca80d04"
  },
  {
    "url": "VueJCBlog/Usage/Markdown/basic.html",
    "revision": "e447b329280a6c6fb958f19b03ab2c5d"
  },
  {
    "url": "VueJCBlog/Usage/Markdown/flow-chart.html",
    "revision": "6549ddcdbd142a7494865afdaf4db74f"
  },
  {
    "url": "VueJCBlog/Usage/Markdown/index.html",
    "revision": "7cb554a023e4cdaadab5244bf62f16d9"
  },
  {
    "url": "VueJCBlog/Usage/Markdown/link.html",
    "revision": "d43f74410926b474121bf62a1999d140"
  },
  {
    "url": "VueJCBlog/Usage/Slide.html",
    "revision": "d93ae8023ba0ce22d12c6e3f77f6133b"
  }
].concat(self.__precacheManifest || []);
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
