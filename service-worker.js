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
    "revision": "3bd1b266dcd78e8c8b378b0c3a3e172c"
  },
  {
    "url": "About/index.html",
    "revision": "85ebedd687e2cad43b19f5dc7a730514"
  },
  {
    "url": "archive/index.html",
    "revision": "6581c7da59b2612d683dfc9b6c2327a9"
  },
  {
    "url": "assets/css/0.styles.540cd930.css",
    "revision": "0219ec63fb9ad660051ddfee0c32cf73"
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
    "url": "assets/js/77.1b474d53.js",
    "revision": "a8aabcb7fce6cce28bb39dc7ca9dcbb8"
  },
  {
    "url": "assets/js/78.dc8b7509.js",
    "revision": "2fd0ba27b7fef3c04c849ca3da4e1ad1"
  },
  {
    "url": "assets/js/79.db950fcb.js",
    "revision": "85cbdab85dd5d77a3342d8e1b5940ff0"
  },
  {
    "url": "assets/js/80.c6a98f45.js",
    "revision": "29d5e49498223a4d5a9e93f708fc0b31"
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
    "url": "assets/js/app.36c765b8.js",
    "revision": "2c6411b5b03e7e4b9bcd467ea24e149d"
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
    "url": "assets/js/layout-Layout.6e74ace9.js",
    "revision": "323d4267916602de0d0ea127fce5590a"
  },
  {
    "url": "assets/js/layout-NotFound.104fabbe.js",
    "revision": "f17d10652c8c30e6e1c388bd3de6a145"
  },
  {
    "url": "assets/js/page-01b1365c.c160853c.js",
    "revision": "307496b6d7fbef2d99c13222cde01101"
  },
  {
    "url": "assets/js/page-03ff99e4.90c344c4.js",
    "revision": "2da7b81ca44d4d025b120914832e426b"
  },
  {
    "url": "assets/js/page-0762cb2c.d4441fea.js",
    "revision": "98a54aa32cd801bdd757aa4309ec6c25"
  },
  {
    "url": "assets/js/page-0815fe43.01f051bb.js",
    "revision": "a7dd4511515ddd492d7baa7655ebee3a"
  },
  {
    "url": "assets/js/page-0994254e.2edee449.js",
    "revision": "8865030e856cd47b040038d50603925c"
  },
  {
    "url": "assets/js/page-09cfa20f.824c9db9.js",
    "revision": "f43b2062cb4f540c3ba5ce32ae0e2e22"
  },
  {
    "url": "assets/js/page-0bd5cd98.386c9bdc.js",
    "revision": "6f10b166e115b39d614a6ffd8fb1a938"
  },
  {
    "url": "assets/js/page-0ca8b05c.551d3752.js",
    "revision": "2732631a3a86df1a20c432b48c53be20"
  },
  {
    "url": "assets/js/page-130de14f.292f9eb1.js",
    "revision": "5ad3631a16a52b390aa4064165bac5cb"
  },
  {
    "url": "assets/js/page-17916170.5e78559a.js",
    "revision": "8a64cbed535f37d786fd96fea33e759f"
  },
  {
    "url": "assets/js/page-1efb5c62.f967321a.js",
    "revision": "8d42cc2ed70833a909db6c264cf44880"
  },
  {
    "url": "assets/js/page-2282a6e0.9c24ffef.js",
    "revision": "a6d214fa6ce35ee1a88628af58ef9654"
  },
  {
    "url": "assets/js/page-2ba07fce.ebe07078.js",
    "revision": "d7c659f8aee8dfc9dc1ef2a465ed9a6a"
  },
  {
    "url": "assets/js/page-2da25f49.0d86a019.js",
    "revision": "5a0e6f81b1e0d0aa37315f45cf91ae9f"
  },
  {
    "url": "assets/js/page-2f77601c.69f17e4c.js",
    "revision": "d1279a0321e63e0c2d47aa9006d4418b"
  },
  {
    "url": "assets/js/page-36058925.5f403bc6.js",
    "revision": "43ff1735361dc25879ce27c27752e52c"
  },
  {
    "url": "assets/js/page-3721e5cf.68a36ba6.js",
    "revision": "2c6dfe5e6e4599252707b0c3e47963a3"
  },
  {
    "url": "assets/js/page-38e94d3e.a09d6171.js",
    "revision": "82a07d000a370902d3b5b6994771b4b0"
  },
  {
    "url": "assets/js/page-39d006b5.1ba5f51a.js",
    "revision": "b50bff59421eb70dc89957e4117a16d0"
  },
  {
    "url": "assets/js/page-3b1778e4.c51f55b2.js",
    "revision": "1466127d6caeaecf263ca8a88a6a46f2"
  },
  {
    "url": "assets/js/page-4048f79b.32a5124e.js",
    "revision": "c7728f7dc620feaa9182741ee51f7c1d"
  },
  {
    "url": "assets/js/page-409d673b.550a2122.js",
    "revision": "ba98ce9d517ce434e351e9c838e87bb4"
  },
  {
    "url": "assets/js/page-42a0ea7c.64c58b7d.js",
    "revision": "ff0a4ca3991060cebbe71c371d1fbebd"
  },
  {
    "url": "assets/js/page-437f73dc.42b29289.js",
    "revision": "9d3366d5ea95f7c704f932b2c73fb391"
  },
  {
    "url": "assets/js/page-4773a0fc.433cf84f.js",
    "revision": "ced2724e9c246e110681057c6519be8d"
  },
  {
    "url": "assets/js/page-47ec31ef.18c4d133.js",
    "revision": "c5c0a16ada1b7eaf2499f0fc48e55276"
  },
  {
    "url": "assets/js/page-494b7749.03599cbb.js",
    "revision": "a252f7d0dbe602837d5d9f78f58f7e66"
  },
  {
    "url": "assets/js/page-4e40ef0e.ea8f8c55.js",
    "revision": "5bf3ecb0f21f7aaac196b3b7a64ab083"
  },
  {
    "url": "assets/js/page-4f5eb00c.19de133b.js",
    "revision": "190c6ee6e3c2835939bedce17f85f2c8"
  },
  {
    "url": "assets/js/page-52453899.d175dced.js",
    "revision": "1831d6c54059523c67b6d20bbfd4cb73"
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
    "url": "assets/js/page-5971d062.160ac20f.js",
    "revision": "d7c3ebb9c430fae8b4819c7c25683d09"
  },
  {
    "url": "assets/js/page-5ae76184.7a389a2c.js",
    "revision": "0e526ff3eb35a36bf65dd0811c7e6ccd"
  },
  {
    "url": "assets/js/page-5c24028f.1c56fdf1.js",
    "revision": "a014d223ea978add2ad8efbb28a42a31"
  },
  {
    "url": "assets/js/page-5dade32f.b39db271.js",
    "revision": "4300605b06cbd2670402056920faf573"
  },
  {
    "url": "assets/js/page-62c3f84a.e3e754d2.js",
    "revision": "5cd99d1f6e6e491f83694f2f00e486bb"
  },
  {
    "url": "assets/js/page-631831dc.a91e0726.js",
    "revision": "7ab55075eb64e8f91ba589de6bc0945e"
  },
  {
    "url": "assets/js/page-64c6c3f9.b599717c.js",
    "revision": "ed8a3558cc2e7f7c8c43a30cfe5e445b"
  },
  {
    "url": "assets/js/page-68a3e126.fcd0e712.js",
    "revision": "6640566fe5c5e0f2cd42f18300955c1e"
  },
  {
    "url": "assets/js/page-718e3f13.966adf99.js",
    "revision": "9a99f40ef1e74d046d513e6776d14842"
  },
  {
    "url": "assets/js/page-7961fc62.4543db10.js",
    "revision": "e8524e9d987d6c5e8265a9fba1903bd9"
  },
  {
    "url": "assets/js/page-7e22c02f.c07d0ef7.js",
    "revision": "28e201ecba31e1595c79d111b5b304a7"
  },
  {
    "url": "assets/js/page-7f4c69e4.060eaea0.js",
    "revision": "cf24a1d8102f2de5439b8a1c1424f3b7"
  },
  {
    "url": "assets/js/page-9a13860a.20c725c8.js",
    "revision": "c8da74cbc8c697be8efc5ced8b9e263f"
  },
  {
    "url": "assets/js/page-9d704b70.92aa0479.js",
    "revision": "c4c27ec573d5c5cec0816a63a8634268"
  },
  {
    "url": "assets/js/page-a1c83fc6.7cb215c4.js",
    "revision": "28c2da1367e32fb2fa4ee1382a527109"
  },
  {
    "url": "assets/js/page-a649c29e.c59ae5bc.js",
    "revision": "55f3a199e70d9ea45d3d4f4baa79d393"
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
    "url": "assets/js/page-c799e3a4.8551d4f3.js",
    "revision": "a9966754e0d86ec0ead7480457258b55"
  },
  {
    "url": "assets/js/page-cd03364e.6b78a768.js",
    "revision": "5f7d0242a9192b69f22349a80962c805"
  },
  {
    "url": "assets/js/page-deb70f94.e3ca9294.js",
    "revision": "6641cea5ba43436aabbaa625fdde6d87"
  },
  {
    "url": "assets/js/page-e63bef64.03c3476a.js",
    "revision": "9cd33a04d7901bd07ed34c20a31fec97"
  },
  {
    "url": "assets/js/page-e869018c.e3cf892b.js",
    "revision": "a5dae4a7a4b9f3d8493eb2e36759c0ff"
  },
  {
    "url": "assets/js/page-e87fecf8.8120cf7e.js",
    "revision": "d5b54a9bca016d47c85f5eb81d5eff06"
  },
  {
    "url": "assets/js/page-fa2e9ecc.92f112a8.js",
    "revision": "46ea763ad5d873925a9f34beefb521a0"
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
    "revision": "0ec345a7fb808b478cffc93079fa8359"
  },
  {
    "url": "Coding/Front-End/CSS/awesome-css.html",
    "revision": "95ca6ee63b5a980bb5dfaed9713d72b2"
  },
  {
    "url": "Coding/Front-End/CSS/awesome-icons.html",
    "revision": "f74f035c5ac381b9a788ceeaaeb24b76"
  },
  {
    "url": "Coding/Front-End/JS/Module Bundler/Webpack/awesome-webpack.html",
    "revision": "6029c45e8dcb43d84b7ec580017f89e5"
  },
  {
    "url": "Coding/Front-End/JS/Vue/awesome-vue.html",
    "revision": "652a854f986df41610758880b32e8581"
  },
  {
    "url": "Coding/日常筆記/CodeReview/code-review-memo.html",
    "revision": "22c3865a08fe2994553eb9c631bc94f6"
  },
  {
    "url": "Coding/日常筆記/CSharp/AutoMapper-class繼承後之對應.html",
    "revision": "9096b8dcb3b4080072c299b4f9893516"
  },
  {
    "url": "Coding/日常筆記/CSharp/String-Concatenate.html",
    "revision": "b60ae375d9c3aa2b7e758c6bb89cb021"
  },
  {
    "url": "Coding/日常筆記/CSharp/tmp.html",
    "revision": "8712e448543ca243a8ca6ec6a0312af5"
  },
  {
    "url": "Coding/日常筆記/CSharp/變數命名.html",
    "revision": "9b84ea879ed4e7d0ec28b3b6eb30c063"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/1. 心/index.html",
    "revision": "b79d3cfa46b884e181c4fffba33199c7"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/1. 心/TMP.html",
    "revision": "728be7029a74018523cafc7738338ff1"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/1. 心/心理戰.html",
    "revision": "ce63953cff9cebdd35a521605d4cf13b"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/2. 技/index.html",
    "revision": "44c8e1cde0a404c8439fcb1336f1d229"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/2. 技/神小跳.html",
    "revision": "c51c3651c1887dc1aa0b5264dd7fa4ca"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/2. 技/視野變換.html",
    "revision": "5a53bb86a64f0e9a9a0634a3357f960c"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/2. 技/走位.html",
    "revision": "8054ccd0baa841b4ffafd3247da267f1"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/2. 技/跳點.html",
    "revision": "1c6d6e2e1f409964052a12229090f438"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/2. 技/預出手.html",
    "revision": "56633578a9220590ba6a46f9b8375bf1"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/3. 體/index.html",
    "revision": "54e6f504ebd386188635c213608b0c04"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/4. 群/index.html",
    "revision": "f6b013dfaa0d537e17aff4c612a35323"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/4. 群/卡位.html",
    "revision": "3feebca9f55967e1ecc0a02acfd424d9"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/4. 群/組隊.html",
    "revision": "6ccb3288ac68596bb6b3bfe5d3ce1df5"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/5. 略/index.html",
    "revision": "fe65f637bad14a9fc6d7364c216b3198"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/5. 略/局勢.html",
    "revision": "525f0a4b2c433996362c4dd5b8ab165d"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/6. 決/index.html",
    "revision": "ac461d5c61f0f7564958ccb00942a86d"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/index.html",
    "revision": "6e048540b8afa2fd44f1d6885a49fffb"
  },
  {
    "url": "Game/FEZ/2. 國戰步兵戰策略/index.html",
    "revision": "cf96a98d736268178059966fcdf56400"
  },
  {
    "url": "Game/FEZ/3. 各職玩法/刀.html",
    "revision": "f3f51cf34bd944e29cd3eda8c71e6277"
  },
  {
    "url": "Game/FEZ/3. 各職玩法/雙修.html",
    "revision": "4ccded79efd7a8d162feb251780e9bd3"
  },
  {
    "url": "Game/FEZ/4. 2on/index.html",
    "revision": "f4373afbc3123acba9b9ea22e1589ff3"
  },
  {
    "url": "Game/FEZ/5. 3on/index.html",
    "revision": "8938642fe67dff1b2ecdab0158fae840"
  },
  {
    "url": "Game/FEZ/X. Theorem/HMM.html",
    "revision": "c6aa4b77dc4def13832a53f832726173"
  },
  {
    "url": "hello-vuejcblog.html",
    "revision": "6a991e13ee396d336acdf1fa783d57cd"
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
    "revision": "40b965c20d7274cf948c9292b4778a29"
  },
  {
    "url": "search/index.html",
    "revision": "021b9145dea5599de042be0af76773f7"
  },
  {
    "url": "tag/index.html",
    "revision": "ade6450ca79ba41237e8640582431f3a"
  },
  {
    "url": "VueJCBlog/Development/article/hello-vuejcblog.html",
    "revision": "790fd5df53f9a0820c0569195fcb4212"
  },
  {
    "url": "VueJCBlog/Development/article/test/test-comment.html",
    "revision": "bb463898b75d20a655d8d0d5ae5d8f65"
  },
  {
    "url": "VueJCBlog/Development/article/test/test-lazy-load.html",
    "revision": "93e16543cc58e5499fccdb1f803f395b"
  },
  {
    "url": "VueJCBlog/Development/article/test/test-lazy-load2.html",
    "revision": "1c94bfe68aff516b4a4983ad3489387d"
  },
  {
    "url": "VueJCBlog/Feature/about-page.html",
    "revision": "b60ececdfa2ff51bffc1ca96863771b5"
  },
  {
    "url": "VueJCBlog/Feature/archive-page.html",
    "revision": "087417aed41e8cecbc8970e5d2de8eda"
  },
  {
    "url": "VueJCBlog/Feature/category-page.html",
    "revision": "1d57b3b7b09a71c28e480ce4debe646d"
  },
  {
    "url": "VueJCBlog/Feature/common-feature.html",
    "revision": "cebde482385414e7c415e36f1e61b64f"
  },
  {
    "url": "VueJCBlog/Feature/index-page.html",
    "revision": "8b7d1c960bd5b7da0ac5bb2cb000e850"
  },
  {
    "url": "VueJCBlog/Feature/index.html",
    "revision": "fc2755e61630d4c7f77e2dae31dab502"
  },
  {
    "url": "VueJCBlog/Feature/post-page.html",
    "revision": "8107d1e54c987e3ecf43f66b6359277e"
  },
  {
    "url": "VueJCBlog/Feature/search-page.html",
    "revision": "9ab64f7927a613c451f508bab24eeb66"
  },
  {
    "url": "VueJCBlog/Feature/sidebar-feature.html",
    "revision": "03c58b52e8aee95cb4553a8cf7cc6b46"
  },
  {
    "url": "VueJCBlog/Feature/tag-page.html",
    "revision": "8463e9df390029588b3652fbd266cded"
  },
  {
    "url": "VueJCBlog/index.html",
    "revision": "ae291b2404611f3950ab032e9c98f118"
  },
  {
    "url": "VueJCBlog/Installation.html",
    "revision": "3795b249562ddfdefb781a5856631fad"
  },
  {
    "url": "VueJCBlog/Quick-Start.html",
    "revision": "e85702b0578fc70c1589d9319d89e091"
  },
  {
    "url": "VueJCBlog/Usage/Container/index.html",
    "revision": "f17869ff335f0811114a4098aa9c6892"
  },
  {
    "url": "VueJCBlog/Usage/front-matter.html",
    "revision": "e008c2c316636f80cefe4bee4fbc93be"
  },
  {
    "url": "VueJCBlog/Usage/index.html",
    "revision": "4e4f37cf2d8188c345e97be914289b70"
  },
  {
    "url": "VueJCBlog/Usage/Markdown/advanced.html",
    "revision": "d18f351498a0d1c0ade116330c665ef8"
  },
  {
    "url": "VueJCBlog/Usage/Markdown/basic.html",
    "revision": "19b2442903c2a54b5fafc88e0c4c963c"
  },
  {
    "url": "VueJCBlog/Usage/Markdown/flow-chart.html",
    "revision": "26ae783ce727a7dfabbbb9570cd4d491"
  },
  {
    "url": "VueJCBlog/Usage/Markdown/index.html",
    "revision": "ffca8b710cf5f5631d8adbf875da3432"
  },
  {
    "url": "VueJCBlog/Usage/Markdown/link.html",
    "revision": "abd0600a892b794321758e5cd7168de6"
  },
  {
    "url": "VueJCBlog/Usage/Slide.html",
    "revision": "9061b575ff8127b44831807dda6293aa"
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
