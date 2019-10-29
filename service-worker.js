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
    "revision": "f03d47c185fea981feac07da211a6e68"
  },
  {
    "url": "About/index.html",
    "revision": "7900101751c3e6c3cf5d618108e8e0de"
  },
  {
    "url": "archive/index.html",
    "revision": "a41df347d59b914509c15c6edc8a35fd"
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
    "url": "assets/js/app.09562719.js",
    "revision": "767c0a27848110d12751c1fe4f558364"
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
    "url": "assets/js/layout-Layout.8136b3fd.js",
    "revision": "e148f616ecfc9ca9e6cd5967a7a65cb0"
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
    "url": "assets/js/page-03ff99e4.1a30d2cf.js",
    "revision": "d07af3e290dd50e9ca69377e97536f36"
  },
  {
    "url": "assets/js/page-0762cb2c.1ab68d99.js",
    "revision": "20c0e17122b77fdcfc37c0d89b2b2ea7"
  },
  {
    "url": "assets/js/page-0815fe43.d386b6b6.js",
    "revision": "c5660bae3433888425aeff65be4a45a3"
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
    "url": "assets/js/page-0bd5cd98.ea6e0421.js",
    "revision": "eb76e8b0e9dc6b410d7d9b2b1b53bd2d"
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
    "url": "assets/js/page-2da25f49.29db8fca.js",
    "revision": "f92f6727192e081d2d6bce0b42887929"
  },
  {
    "url": "assets/js/page-2f77601c.4ea6ad30.js",
    "revision": "4dbf0351ef84e35be305e7e434aab2d9"
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
    "url": "assets/js/page-4048f79b.d660dd8c.js",
    "revision": "c3821a655ce3c7d1a6c92eda6790191b"
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
    "url": "assets/js/page-437f73dc.e87d3f44.js",
    "revision": "336fc36397cef476fad22638010730b6"
  },
  {
    "url": "assets/js/page-4773a0fc.963e76f4.js",
    "revision": "ced642a95dab607123ed0689db4e3da1"
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
    "url": "assets/js/page-4f5eb00c.96debe33.js",
    "revision": "c0e81b330cecd163548b8d7fd00fafb8"
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
    "url": "assets/js/page-54cde949.9bd84eeb.js",
    "revision": "c90b48cc612bf4ab09e84a62ca67edb1"
  },
  {
    "url": "assets/js/page-56c5add8.6f68d128.js",
    "revision": "72abc40c04f3982cc0e6c984b813e68d"
  },
  {
    "url": "assets/js/page-5971d062.160ac20f.js",
    "revision": "d7c3ebb9c430fae8b4819c7c25683d09"
  },
  {
    "url": "assets/js/page-5ae76184.b6c85cfa.js",
    "revision": "4f2dc6c7b95c3b699f94eb6f09bede66"
  },
  {
    "url": "assets/js/page-5c24028f.d80fbc5f.js",
    "revision": "bbe6bf7240e5a36ed1ce336422d3ebf8"
  },
  {
    "url": "assets/js/page-5dade32f.b39db271.js",
    "revision": "4300605b06cbd2670402056920faf573"
  },
  {
    "url": "assets/js/page-62c3f84a.e3c6731c.js",
    "revision": "3fb788365a0a0c2b42597e799ee54376"
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
    "url": "assets/js/page-718e3f13.28a76b73.js",
    "revision": "4e0806ddfffd7964d1be623603e83fc1"
  },
  {
    "url": "assets/js/page-7961fc62.4543db10.js",
    "revision": "e8524e9d987d6c5e8265a9fba1903bd9"
  },
  {
    "url": "assets/js/page-7e22c02f.224d4b00.js",
    "revision": "dafc79bb1d480ff3c73ab86a33939f36"
  },
  {
    "url": "assets/js/page-7f4c69e4.060eaea0.js",
    "revision": "cf24a1d8102f2de5439b8a1c1424f3b7"
  },
  {
    "url": "assets/js/page-9a13860a.e707e8e4.js",
    "revision": "2034394333c333363bf1fd383712d435"
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
    "url": "assets/js/page-a649c29e.356c1c7e.js",
    "revision": "494e0b948d51611848f5640d14c00861"
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
    "url": "assets/js/page-c799e3a4.64c4294c.js",
    "revision": "78a9c76bc0613fa2b7266343bc696227"
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
    "revision": "9ce54a0936ba395f23a4c71ba23efcfe"
  },
  {
    "url": "Coding/Front-End/CSS/awesome-css.html",
    "revision": "0260f9fa71d71e9c8988311fb8302263"
  },
  {
    "url": "Coding/Front-End/CSS/awesome-icons.html",
    "revision": "797c34c6bc554bbd347b4104d7999e3f"
  },
  {
    "url": "Coding/Front-End/JS/Module Bundler/Webpack/awesome-webpack.html",
    "revision": "e5402e5540dc57b8016c14740696be73"
  },
  {
    "url": "Coding/Front-End/JS/Vue/awesome-vue.html",
    "revision": "7b0fa824257ccbc81d554badc8b05c97"
  },
  {
    "url": "Coding/日常筆記/CodeReview/code-review-memo.html",
    "revision": "55ba8d6f0bb61bb709585012a2f91edd"
  },
  {
    "url": "Coding/日常筆記/CSharp/AutoMapper-class繼承後之對應.html",
    "revision": "3117788df65bde4d65e441ac11c6ebce"
  },
  {
    "url": "Coding/日常筆記/CSharp/String-Concatenate.html",
    "revision": "6e6116f6d7bfedbbbb5219c6e0c25540"
  },
  {
    "url": "Coding/日常筆記/CSharp/tmp.html",
    "revision": "ad85a7eac92bca7996655d737b2f19ac"
  },
  {
    "url": "Coding/日常筆記/CSharp/變數命名.html",
    "revision": "e91c73f8f3e9978e90fa3995b70af622"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/1. 心/index.html",
    "revision": "d18d5c8948be69dbefe5c57a019e66f0"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/1. 心/TMP.html",
    "revision": "25bfa408fffa7ce396c06010dbbb1d2f"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/1. 心/心理戰.html",
    "revision": "d4fd408c3162d4cf6f2a11a77bc8e88d"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/2. 技/index.html",
    "revision": "68f43a2ea265af83761fa87c22606fb5"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/2. 技/神小跳.html",
    "revision": "aab8266dde687a4fbd1f36edf74cf91b"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/2. 技/視野變換.html",
    "revision": "bc9b49e3614870c193ebcd7d77ee0dba"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/2. 技/走位.html",
    "revision": "fe127a7889542036b420255e34372083"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/2. 技/跳點.html",
    "revision": "b700a16801c3d3cc44fc351099aea392"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/2. 技/預出手.html",
    "revision": "d4d16b0e52729c050a333d4a793e8803"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/3. 體/index.html",
    "revision": "db1bf754f9b56b2b37eb7726fe8506ff"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/4. 群/index.html",
    "revision": "7e88b1129d219110444748c54c54b5d7"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/4. 群/卡位.html",
    "revision": "10ac90e7efbca22a7dd4996ef6a66ed0"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/4. 群/組隊.html",
    "revision": "c3578fb298294b3a353488b7b247b2ed"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/5. 略/index.html",
    "revision": "adb1188f3e7da6560a5432a1b4646a5a"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/5. 略/局勢.html",
    "revision": "1c55856931e7e6c8eafdb08c973e7a67"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/6. 決/index.html",
    "revision": "6cbf94d1552f52bcf39fc5b2ca1ad836"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/index.html",
    "revision": "c056c8de3330b99e224b11a1a2bf9c11"
  },
  {
    "url": "Game/FEZ/2. 國戰步兵戰策略/index.html",
    "revision": "680189e86e21fdd9eab7e8a536fdd3a0"
  },
  {
    "url": "Game/FEZ/3. 各職玩法/刀.html",
    "revision": "2818d65cd26ae0d9d1031065c41e11e8"
  },
  {
    "url": "Game/FEZ/3. 各職玩法/雙修.html",
    "revision": "a17f84a5ada9640b43b68af20791f2b5"
  },
  {
    "url": "Game/FEZ/4. 2on/index.html",
    "revision": "861887d46fc531ad469132e0f95d4bac"
  },
  {
    "url": "Game/FEZ/5. 3on/index.html",
    "revision": "8b511e4168ee2e8cdb3667f8d701e0a4"
  },
  {
    "url": "Game/FEZ/X. Theorem/HMM.html",
    "revision": "79f2cb6816c5ed9bcb5781f1aa0fe709"
  },
  {
    "url": "hello-vuejcblog.html",
    "revision": "8eeb1436400de6de0bf8f6cd0b9e668d"
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
    "revision": "4afe641127300dc914391e625c9a63a8"
  },
  {
    "url": "search/index.html",
    "revision": "aa4bf8973bc1bbd1939263862312bba4"
  },
  {
    "url": "tag/index.html",
    "revision": "ad054c6210a96701d038e065592fda5c"
  },
  {
    "url": "VueJCBlog/Development/article/hello-vuejcblog.html",
    "revision": "84d388290cd3c1f3e3dfc064416a2b60"
  },
  {
    "url": "VueJCBlog/Development/article/test/test-comment.html",
    "revision": "777587103eb48492a479554a7c99b029"
  },
  {
    "url": "VueJCBlog/Development/article/test/test-lazy-load.html",
    "revision": "752eae6bd64fc99379d349c1bb4644d6"
  },
  {
    "url": "VueJCBlog/Development/article/test/test-lazy-load2.html",
    "revision": "23aa96a1a000508b95bee239d9de798f"
  },
  {
    "url": "VueJCBlog/Feature/about-page.html",
    "revision": "0efb88d1282c3700fde9e49cc87ab7b5"
  },
  {
    "url": "VueJCBlog/Feature/archive-page.html",
    "revision": "c96bc90c2950ccf1432dbf9008f76595"
  },
  {
    "url": "VueJCBlog/Feature/category-page.html",
    "revision": "b61d7d40a02c7cea3709c30da45924f6"
  },
  {
    "url": "VueJCBlog/Feature/common-feature.html",
    "revision": "4d6fab31aeefa55eed10f4fce1f2dad9"
  },
  {
    "url": "VueJCBlog/Feature/index-page.html",
    "revision": "1edbbd150abbe578751770784cbe8cf2"
  },
  {
    "url": "VueJCBlog/Feature/index.html",
    "revision": "7c8fe9b7342ea5484472d8cd2a0f94e2"
  },
  {
    "url": "VueJCBlog/Feature/post-page.html",
    "revision": "470ee1bb7e3426c4b94a284e798adf44"
  },
  {
    "url": "VueJCBlog/Feature/search-page.html",
    "revision": "7062a2a5c43c9e941d975fab2817d651"
  },
  {
    "url": "VueJCBlog/Feature/sidebar-feature.html",
    "revision": "b0931cf618e72b7b26c5579d806bbe17"
  },
  {
    "url": "VueJCBlog/Feature/tag-page.html",
    "revision": "cf9deaedb16b30714e8e3e6c1d9f0ae7"
  },
  {
    "url": "VueJCBlog/index.html",
    "revision": "186f5bbd5f03dd270f1e5ed510507dc3"
  },
  {
    "url": "VueJCBlog/Installation.html",
    "revision": "d43293b4a0f2f3b542e3f4b7e40cc574"
  },
  {
    "url": "VueJCBlog/Quick-Start.html",
    "revision": "41a54e8b4471e3787fd32e4350f6c15c"
  },
  {
    "url": "VueJCBlog/Usage/Container/index.html",
    "revision": "c5ba779d013c36b0d6bb82623445f859"
  },
  {
    "url": "VueJCBlog/Usage/front-matter.html",
    "revision": "021af64c85caae15dff0a63b3d4fa532"
  },
  {
    "url": "VueJCBlog/Usage/index.html",
    "revision": "ca19aa83b18bb1565bc8155b5caf5ccf"
  },
  {
    "url": "VueJCBlog/Usage/Markdown/advanced.html",
    "revision": "c6697db48bc2048dc73d8267ff9621c6"
  },
  {
    "url": "VueJCBlog/Usage/Markdown/basic.html",
    "revision": "f2f54d32db547cc37a33d61a2f18abf4"
  },
  {
    "url": "VueJCBlog/Usage/Markdown/flow-chart.html",
    "revision": "e463880a10260adda8cac36402954d7a"
  },
  {
    "url": "VueJCBlog/Usage/Markdown/index.html",
    "revision": "ea59fc88b9719c45acfd6c280b4e5739"
  },
  {
    "url": "VueJCBlog/Usage/Markdown/link.html",
    "revision": "438e23c532e3fa4d9a130f88b21edb3c"
  },
  {
    "url": "VueJCBlog/Usage/Slide.html",
    "revision": "97682181d4fb3e45f68a14b2945589bc"
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
