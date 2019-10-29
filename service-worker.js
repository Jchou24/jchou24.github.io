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
    "revision": "44080e8e9a4cb822a9e10a0fe5e84810"
  },
  {
    "url": "About/index.html",
    "revision": "ac293ee8cb7078b6760559b7981e8a18"
  },
  {
    "url": "archive/index.html",
    "revision": "9d1a453c917af7bba83ba303082fbc2d"
  },
  {
    "url": "assets/css/0.styles.16983fe8.css",
    "revision": "736826592739eb4f668cfeba6ba16124"
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
    "url": "assets/js/6.2431392c.js",
    "revision": "bb21652ddf8d74d6f6feb0d2341c6b31"
  },
  {
    "url": "assets/js/73.c8a9d252.js",
    "revision": "0c3cce311be3024c729545e50585c5a9"
  },
  {
    "url": "assets/js/74.b5d75eb3.js",
    "revision": "a0c6300b11ad10b8bcaf2f65f80dadee"
  },
  {
    "url": "assets/js/75.a9f19ee7.js",
    "revision": "596a44ba59f735440f013f4095b5740d"
  },
  {
    "url": "assets/js/76.18567ed8.js",
    "revision": "8a4519a060983fcb90d8bec1b0928610"
  },
  {
    "url": "assets/js/77.70f89a27.js",
    "revision": "65b05cbb1aaa70e5520b0d9d47ffd311"
  },
  {
    "url": "assets/js/78.32b3b475.js",
    "revision": "b68d535a9fda8fbdcb5292b74b2ac1b8"
  },
  {
    "url": "assets/js/79.6d434246.js",
    "revision": "73d2e18141ddadff4b1dc590c7f5148d"
  },
  {
    "url": "assets/js/80.139b2e97.js",
    "revision": "1f9655a4121c5fad0408ecc30836d8fb"
  },
  {
    "url": "assets/js/81.54726919.js",
    "revision": "2e522d207e2292398983225bdb9d8c09"
  },
  {
    "url": "assets/js/82.1aa7f19a.js",
    "revision": "da0e3a8eb67b2434b51df564e7f8a442"
  },
  {
    "url": "assets/js/83.3ec38495.js",
    "revision": "00c59316ae699c64ce04b8d33fe81b73"
  },
  {
    "url": "assets/js/84.02b5ef37.js",
    "revision": "d7c3dabf159e10336c3ae8281c6d2746"
  },
  {
    "url": "assets/js/85.d63a00f0.js",
    "revision": "fea7162fd7d0e94800c1db11749ba225"
  },
  {
    "url": "assets/js/86.db5da13a.js",
    "revision": "44b4cd154f6c9b405e04b3f29222a465"
  },
  {
    "url": "assets/js/87.3c318750.js",
    "revision": "81e875956061d5c73b52a29b974a4739"
  },
  {
    "url": "assets/js/88.4b33dfdd.js",
    "revision": "55981ebae8ad4403b9a542893b8f00f9"
  },
  {
    "url": "assets/js/89.26261914.js",
    "revision": "241b788c0192a12f7c2243e3ada50d87"
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
    "url": "assets/js/app.819789bd.js",
    "revision": "5c354bcc4a1ef46fdda311a543bc19b8"
  },
  {
    "url": "assets/js/layout-BaseLayout.701130f6.js",
    "revision": "80c6cbbb34b9be577f1c462b5157bd68"
  },
  {
    "url": "assets/js/layout-BaseLayout~layout-Layout.cac4077a.js",
    "revision": "847092bd9c964e1e14ac3a90bc90515d"
  },
  {
    "url": "assets/js/layout-Layout.4769bd81.js",
    "revision": "a09453d0c16bd1751b1319232b630c9b"
  },
  {
    "url": "assets/js/layout-NotFound.19a5a471.js",
    "revision": "2546bee544c737a9909fdb5074ef92b8"
  },
  {
    "url": "assets/js/page-01b1365c.bbe7eb09.js",
    "revision": "273fa2f27ab9fbaf13e443b10d6a4f87"
  },
  {
    "url": "assets/js/page-03ff99e4.1a30d2cf.js",
    "revision": "d07af3e290dd50e9ca69377e97536f36"
  },
  {
    "url": "assets/js/page-0762cb2c.ab42bb1a.js",
    "revision": "f774ffb4169b001aa51becc629ea66cf"
  },
  {
    "url": "assets/js/page-0815fe43.e75d5806.js",
    "revision": "845a7a7d1580ec254906887c89fd3866"
  },
  {
    "url": "assets/js/page-0994254e.8b10873b.js",
    "revision": "957028bd6278b2217b2a5873b61171a1"
  },
  {
    "url": "assets/js/page-09cfa20f.1ef7e81e.js",
    "revision": "5ed1526d6029f57c7b64224f85d9fa85"
  },
  {
    "url": "assets/js/page-0bd5cd98.386c9bdc.js",
    "revision": "6f10b166e115b39d614a6ffd8fb1a938"
  },
  {
    "url": "assets/js/page-0ca8b05c.a1240cc7.js",
    "revision": "aacdb6721d332b54a9b2a3185eccd8f5"
  },
  {
    "url": "assets/js/page-130de14f.3a5f466c.js",
    "revision": "75061100f485d540e17d0df46ed0a9b8"
  },
  {
    "url": "assets/js/page-17916170.cd53572f.js",
    "revision": "2480d90d12c2aa700c20574ad4cccbe2"
  },
  {
    "url": "assets/js/page-1efb5c62.ad7964ef.js",
    "revision": "3f36ab0b3c9647ae907af16a4e33bb1e"
  },
  {
    "url": "assets/js/page-2282a6e0.f92875d0.js",
    "revision": "35fe536032f420fa0a62856f3229ed74"
  },
  {
    "url": "assets/js/page-2ba07fce.02760103.js",
    "revision": "b0032f84115139855ac1c201f876d199"
  },
  {
    "url": "assets/js/page-2da25f49.0dfc57ae.js",
    "revision": "a9321c1587f7e2447ce2ee2aa071526c"
  },
  {
    "url": "assets/js/page-2f77601c.faa95514.js",
    "revision": "2901296f333467b0186180ac0995107a"
  },
  {
    "url": "assets/js/page-36058925.7fee2e97.js",
    "revision": "0af53ae1d3cb2aae3384d67c71046410"
  },
  {
    "url": "assets/js/page-3721e5cf.68a36ba6.js",
    "revision": "2c6dfe5e6e4599252707b0c3e47963a3"
  },
  {
    "url": "assets/js/page-38e94d3e.35c49725.js",
    "revision": "bb2fdcf655aa0900b626a826b2909060"
  },
  {
    "url": "assets/js/page-39d006b5.654a2382.js",
    "revision": "644fa3f7a86e58b168cc728f201d7221"
  },
  {
    "url": "assets/js/page-3b1778e4.613cac59.js",
    "revision": "00287abf81b140078380914a1f75f554"
  },
  {
    "url": "assets/js/page-4048f79b.810e5ae6.js",
    "revision": "02561227f74e491e11b5a5abac8da4a6"
  },
  {
    "url": "assets/js/page-409d673b.bcef271c.js",
    "revision": "1d5565867956c7c9eddbd6faf8551b34"
  },
  {
    "url": "assets/js/page-42a0ea7c.33986034.js",
    "revision": "7cf16d60077da58afd3b090b2eb4882d"
  },
  {
    "url": "assets/js/page-437f73dc.31d8b66b.js",
    "revision": "f7469e46edaa983bd7c40e6b658ed93f"
  },
  {
    "url": "assets/js/page-4773a0fc.433cf84f.js",
    "revision": "ced2724e9c246e110681057c6519be8d"
  },
  {
    "url": "assets/js/page-47ec31ef.c772d5fa.js",
    "revision": "bcb2ada71185977f993a736ac8b943ef"
  },
  {
    "url": "assets/js/page-494b7749.03599cbb.js",
    "revision": "a252f7d0dbe602837d5d9f78f58f7e66"
  },
  {
    "url": "assets/js/page-4e40ef0e.a8e8fb18.js",
    "revision": "3ed5eb4df96a36fd6c8e12198629691e"
  },
  {
    "url": "assets/js/page-4f5eb00c.96919ecd.js",
    "revision": "6a236cd45293657db32f2d190d4982cf"
  },
  {
    "url": "assets/js/page-52453899.b34bfc64.js",
    "revision": "5568bbcbf301c3b208dc1dbc3a7ea766"
  },
  {
    "url": "assets/js/page-53a21bc2.2f33fedf.js",
    "revision": "7d283d1242c7358a9b6cb9c092e23a76"
  },
  {
    "url": "assets/js/page-548dbfdd.9fe716af.js",
    "revision": "8bb70b20e693eaa6967de2398962e7c5"
  },
  {
    "url": "assets/js/page-54cde949.84add117.js",
    "revision": "a5edfd99192f47590a8425a033904b93"
  },
  {
    "url": "assets/js/page-56c5add8.eac85256.js",
    "revision": "fec58f1afdd90e8626f404f78e4970f7"
  },
  {
    "url": "assets/js/page-5971d062.559d688c.js",
    "revision": "e6bafa4f264f5928cadb8cd8df01d610"
  },
  {
    "url": "assets/js/page-5ae76184.7a389a2c.js",
    "revision": "0e526ff3eb35a36bf65dd0811c7e6ccd"
  },
  {
    "url": "assets/js/page-5c24028f.96d33701.js",
    "revision": "89a6da8250e35222fa838431e72ce5a4"
  },
  {
    "url": "assets/js/page-5dade32f.b39db271.js",
    "revision": "4300605b06cbd2670402056920faf573"
  },
  {
    "url": "assets/js/page-62c3f84a.ad55ffa6.js",
    "revision": "7fdfe10fec67e270d03e501ba0d657bf"
  },
  {
    "url": "assets/js/page-631831dc.f892c5d2.js",
    "revision": "bc2da41f9a8d8ae37d79dd0e00068992"
  },
  {
    "url": "assets/js/page-64c6c3f9.54508c59.js",
    "revision": "b8d46f7d74355da9c9c451c0a0148325"
  },
  {
    "url": "assets/js/page-68a3e126.fcd0e712.js",
    "revision": "6640566fe5c5e0f2cd42f18300955c1e"
  },
  {
    "url": "assets/js/page-718e3f13.7731e00d.js",
    "revision": "9b263d09a9e12f7ff859ad725512d0fe"
  },
  {
    "url": "assets/js/page-7961fc62.7239bdad.js",
    "revision": "c787f31a1e14d17388f04d78274a0ef0"
  },
  {
    "url": "assets/js/page-7e22c02f.223946ad.js",
    "revision": "2977e018b12f286b081052814a1ba55e"
  },
  {
    "url": "assets/js/page-7f4c69e4.e66b0d30.js",
    "revision": "a5161e894d66e8602445be61fb023a0f"
  },
  {
    "url": "assets/js/page-9a13860a.20c725c8.js",
    "revision": "c8da74cbc8c697be8efc5ced8b9e263f"
  },
  {
    "url": "assets/js/page-9d704b70.915adcb8.js",
    "revision": "24614d7f8fff6d109b782e23637876c5"
  },
  {
    "url": "assets/js/page-a1c83fc6.7109b541.js",
    "revision": "46d5dbd8b5deaa1f8cb3b20ba496804c"
  },
  {
    "url": "assets/js/page-a649c29e.c2c202eb.js",
    "revision": "971ac1d4e9c74cf3b416c647c5823868"
  },
  {
    "url": "assets/js/page-b6123e24.3a0cb331.js",
    "revision": "be972b0acbc4959a65b5828b7f4391f4"
  },
  {
    "url": "assets/js/page-c1e7a5fc.73d89efe.js",
    "revision": "654c0b0c0b3abf179dc19553e79b9543"
  },
  {
    "url": "assets/js/page-c41b383a.6c2694b3.js",
    "revision": "c90c132355d1f17931bdbecd0fdb0430"
  },
  {
    "url": "assets/js/page-c799e3a4.69294438.js",
    "revision": "e0c8152ca6ee2d893df9e7d15828a40c"
  },
  {
    "url": "assets/js/page-cd03364e.6b78a768.js",
    "revision": "5f7d0242a9192b69f22349a80962c805"
  },
  {
    "url": "assets/js/page-deb70f94.8f53ad5b.js",
    "revision": "fea5dc4b8470d0ad91eaf6ba95959305"
  },
  {
    "url": "assets/js/page-e63bef64.7b6d91c2.js",
    "revision": "bc472c2a30dc05b6453c93fd32b6fedf"
  },
  {
    "url": "assets/js/page-e869018c.4dd808c7.js",
    "revision": "b2f8effe4aeb459b0caf52c96b5653f2"
  },
  {
    "url": "assets/js/page-e87fecf8.2e06587f.js",
    "revision": "9c26f6b887e75467ed662c30867c0d5b"
  },
  {
    "url": "assets/js/page-fa2e9ecc.da187b2a.js",
    "revision": "00596d8cf2791a19e9fecc4bf0074e41"
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
    "revision": "f5a36735ba215a1a0ba49cf85fd04e1d"
  },
  {
    "url": "Coding/Front-End/CSS/awesome-css.html",
    "revision": "cb0301cfae83f80c4839a744f62fc160"
  },
  {
    "url": "Coding/Front-End/CSS/awesome-icons.html",
    "revision": "1c7cb7ccb9dfe6b88e4f9a16bb1f4cc7"
  },
  {
    "url": "Coding/Front-End/JS/Module Bundler/Webpack/awesome-webpack.html",
    "revision": "ed334e41998d4897bf8686641482c074"
  },
  {
    "url": "Coding/Front-End/JS/Vue/awesome-vue.html",
    "revision": "7b36e405c539156c67dba6a22b8c5915"
  },
  {
    "url": "Coding/日常筆記/CodeReview/code-review-memo.html",
    "revision": "727d6c5ca4ad2581ea3b7a13d899e22b"
  },
  {
    "url": "Coding/日常筆記/CSharp/AutoMapper-class繼承後之對應.html",
    "revision": "55a65f5da86854523240fc884f84b42a"
  },
  {
    "url": "Coding/日常筆記/CSharp/String-Concatenate.html",
    "revision": "581e43de5f55744ae1d0aaa477db7f94"
  },
  {
    "url": "Coding/日常筆記/CSharp/tmp.html",
    "revision": "9fe9da7abf48d1a08b55c02076c0d640"
  },
  {
    "url": "Coding/日常筆記/CSharp/變數命名.html",
    "revision": "f59df70daba43c3aac04c9886f7aba48"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/1. 心/index.html",
    "revision": "236ea677015d6a4c42817c217e0b5d81"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/1. 心/TMP.html",
    "revision": "087d4484a5a088f94b3b687ecfbcef02"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/1. 心/心理戰.html",
    "revision": "49f9847a6f3af161463165d1b3b0007a"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/2. 技/index.html",
    "revision": "574eb531c811598b47fbe2da4cb723c9"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/2. 技/神小跳.html",
    "revision": "9e7bf3c2dffa18b82f5fb3cb610d82d0"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/2. 技/視野變換.html",
    "revision": "47d0f2b2c345c988dd7b37f43d276d21"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/2. 技/走位.html",
    "revision": "c364ce343ababccdb478c841b6a9351d"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/2. 技/跳點.html",
    "revision": "086fa0b44690bc59c6532a852979fb7b"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/2. 技/預出手.html",
    "revision": "e1252f76c07adf5facb2ed1a98ff6ef1"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/3. 體/index.html",
    "revision": "e82fa217ea0a1c86c277b0cbced39051"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/4. 群/index.html",
    "revision": "ddf672669809f426daf7e4dc1ef6a865"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/4. 群/卡位.html",
    "revision": "f368848b6430e129b657456aa5b57006"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/4. 群/組隊.html",
    "revision": "3420fc17ccb06d408bf03b3d5bcfc742"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/5. 略/index.html",
    "revision": "8adaa993cf2ca4a1139fe1a7f13a1f24"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/5. 略/局勢.html",
    "revision": "3eaa956c46a7266ed5f383e2fb611016"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/6. 決/index.html",
    "revision": "99f8a78cf55a208129c933daca910a15"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/index.html",
    "revision": "9d37fea7d0aa0633543e0eea778546ef"
  },
  {
    "url": "Game/FEZ/2. 國戰步兵戰策略/index.html",
    "revision": "85766e47aad6be91501e0e7bf4d462bd"
  },
  {
    "url": "Game/FEZ/3. 各職玩法/刀.html",
    "revision": "2aa8c8cba70222220890ca5e123e0512"
  },
  {
    "url": "Game/FEZ/3. 各職玩法/雙修.html",
    "revision": "2607e37fe1af06ea7ba7f3045bb72fa8"
  },
  {
    "url": "Game/FEZ/4. 2on/index.html",
    "revision": "0a0ffafc5f646378387d8d3adc33e15f"
  },
  {
    "url": "Game/FEZ/5. 3on/index.html",
    "revision": "ee1e6741c3b4d2e9fffe105892999347"
  },
  {
    "url": "Game/FEZ/X. Theorem/HMM.html",
    "revision": "d4f13571e9a196100b43c01b9c2c2ff3"
  },
  {
    "url": "hello-vuejcblog.html",
    "revision": "5b97f6e828dc939b61545cb9a2fc0158"
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
    "revision": "6a7d1b1df09f7e63d10e2eb1e3f94309"
  },
  {
    "url": "search/index.html",
    "revision": "b4faf5687d7ffb2ffd1745f98a26bc3d"
  },
  {
    "url": "tag/index.html",
    "revision": "5a529a2f1f163f9c315f548bfb08d964"
  },
  {
    "url": "VueJCBlog/Development/article/hello-vuejcblog.html",
    "revision": "eec722d4e578012fcd1a34ad870f5513"
  },
  {
    "url": "VueJCBlog/Development/article/test/test-comment.html",
    "revision": "ac6697d816ba0315bea319e41a1f55cc"
  },
  {
    "url": "VueJCBlog/Development/article/test/test-lazy-load.html",
    "revision": "5241cd21f46329278d27411e72923719"
  },
  {
    "url": "VueJCBlog/Development/article/test/test-lazy-load2.html",
    "revision": "19356afccb6c4aa854b18fe66c6cc1bc"
  },
  {
    "url": "VueJCBlog/Feature/about-page.html",
    "revision": "05f8bc1a1018ab4a091d62abd8d449d5"
  },
  {
    "url": "VueJCBlog/Feature/archive-page.html",
    "revision": "a4a08f9ac530b66ac7a1c70eff42ddeb"
  },
  {
    "url": "VueJCBlog/Feature/category-page.html",
    "revision": "0b37d92667b8fa37f3fb5c77f96efb41"
  },
  {
    "url": "VueJCBlog/Feature/common-feature.html",
    "revision": "15b17e126515b4f351707a001aecfcb9"
  },
  {
    "url": "VueJCBlog/Feature/index-page.html",
    "revision": "e501c132b0490717e54f186873bb0c4e"
  },
  {
    "url": "VueJCBlog/Feature/index.html",
    "revision": "4368fb2a9024ab27982898a7af22c918"
  },
  {
    "url": "VueJCBlog/Feature/post-page.html",
    "revision": "c4339fa9d4e58f32f2fb238718dcf6c2"
  },
  {
    "url": "VueJCBlog/Feature/search-page.html",
    "revision": "f0f3c41037c73c4171d7b39d25ce7f6f"
  },
  {
    "url": "VueJCBlog/Feature/sidebar-feature.html",
    "revision": "fe994a169b09aca5998905178803e368"
  },
  {
    "url": "VueJCBlog/Feature/tag-page.html",
    "revision": "958758e0ba515c682a2e4d833af21f6b"
  },
  {
    "url": "VueJCBlog/index.html",
    "revision": "ffe17cf39f422472328752441c1debb7"
  },
  {
    "url": "VueJCBlog/Installation.html",
    "revision": "fc05fc67cf357c1ab2cf498e2cdb0690"
  },
  {
    "url": "VueJCBlog/Quick-Start.html",
    "revision": "b77238a905b7f8a50ddd3da550308228"
  },
  {
    "url": "VueJCBlog/Usage/Container/index.html",
    "revision": "080655e5b80c968a59629ecd34f99d64"
  },
  {
    "url": "VueJCBlog/Usage/front-matter.html",
    "revision": "d87e5a76d34eb3ef508870e4bbd98db6"
  },
  {
    "url": "VueJCBlog/Usage/index.html",
    "revision": "dc2ba92f427be738cf3bc996d0699ad7"
  },
  {
    "url": "VueJCBlog/Usage/Markdown/advanced.html",
    "revision": "1fe80d3412a05e119bad81a6e18a0367"
  },
  {
    "url": "VueJCBlog/Usage/Markdown/basic.html",
    "revision": "49f98d4963ed538934dcf0f6f58e6496"
  },
  {
    "url": "VueJCBlog/Usage/Markdown/flow-chart.html",
    "revision": "6bd5c4be4b57b7733249419ee2564723"
  },
  {
    "url": "VueJCBlog/Usage/Markdown/index.html",
    "revision": "e030af660e6a89c808074c671e8c853c"
  },
  {
    "url": "VueJCBlog/Usage/Markdown/link.html",
    "revision": "73a1e0eabccd8fed8a516a667d8e4e61"
  },
  {
    "url": "VueJCBlog/Usage/Slide.html",
    "revision": "92560451e7c88c2fd78b7130d96fb0b4"
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
