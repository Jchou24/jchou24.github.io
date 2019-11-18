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
    "revision": "e288f47c813968aa2c6a30b4de14f523"
  },
  {
    "url": "About/index.html",
    "revision": "5ac199d63b4adcf1843ab671fac496d9"
  },
  {
    "url": "archive/index.html",
    "revision": "a726a74c991c91a5709c960a4fc00142"
  },
  {
    "url": "assets/css/0.styles.d7b351b0.css",
    "revision": "a324252ffa83825cb2966e03c71ff7dc"
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
    "url": "assets/js/1.408cc343.js",
    "revision": "86650cf6363e0fcf666b638b0d97860a"
  },
  {
    "url": "assets/js/2.6adca5a2.js",
    "revision": "ddc6f9c5d3483274f68133642392186e"
  },
  {
    "url": "assets/js/3.bbc82137.js",
    "revision": "552dd9831ed8e5ed136a38a6608b80bc"
  },
  {
    "url": "assets/js/4.35967ab4.js",
    "revision": "7a844d2fa1fa605a3ea440f235aa721a"
  },
  {
    "url": "assets/js/5.1892aa04.js",
    "revision": "0f2d6d52cd7859690387c11a9e4fc5ed"
  },
  {
    "url": "assets/js/6.b1cd1a6c.js",
    "revision": "08409e713c1379de619829386779fc63"
  },
  {
    "url": "assets/js/73.55e9bb82.js",
    "revision": "0c8b4b29d3ae58396bef80a0d75fe21d"
  },
  {
    "url": "assets/js/74.0ee7e3a0.js",
    "revision": "28b0504a462756c4582886d2cc79d191"
  },
  {
    "url": "assets/js/75.315e2684.js",
    "revision": "864d56df3eb72fa6e8ca996611da0b50"
  },
  {
    "url": "assets/js/76.e81654db.js",
    "revision": "d867a18389c6080f897a0230e23fba75"
  },
  {
    "url": "assets/js/77.b8338403.js",
    "revision": "60635eee7edcbce212ba21f03b172856"
  },
  {
    "url": "assets/js/78.de4fedf2.js",
    "revision": "53b0766688706799d31386c3e31f8246"
  },
  {
    "url": "assets/js/79.1c0f7984.js",
    "revision": "1e5e134abbef58c93ecd866300d169e3"
  },
  {
    "url": "assets/js/80.ba493fc7.js",
    "revision": "eb6ebc1a9f83cdf15af06978e2c9f7d7"
  },
  {
    "url": "assets/js/81.f945b71f.js",
    "revision": "58f49c32d43074822bca7fe8dde134e7"
  },
  {
    "url": "assets/js/82.a1d3545e.js",
    "revision": "8959e9e84d5a6e08fc29a89346f4b51b"
  },
  {
    "url": "assets/js/83.3c35285a.js",
    "revision": "a636a9b6576dc023a98b1260aef60058"
  },
  {
    "url": "assets/js/84.de074b7a.js",
    "revision": "24c40c13055f3507a1f3e2f5b49d8e98"
  },
  {
    "url": "assets/js/85.157513a6.js",
    "revision": "9d3cbc6408b583e75d3a71f8d3bc0f72"
  },
  {
    "url": "assets/js/86.7ff043a4.js",
    "revision": "54b8e1779fe1c454aacc261a4e0d9e93"
  },
  {
    "url": "assets/js/87.d3d7f979.js",
    "revision": "fbd1788c22526e88d5806e62e4fb9ca3"
  },
  {
    "url": "assets/js/88.6ec40faf.js",
    "revision": "9e6fe8f72a921090c58e3dc21b36381c"
  },
  {
    "url": "assets/js/89.94a6843b.js",
    "revision": "948252c2d25f358570f31873d0a451e1"
  },
  {
    "url": "assets/js/90.764966e1.js",
    "revision": "9e6bf625961c22010639cab034726465"
  },
  {
    "url": "assets/js/91.316b09d2.js",
    "revision": "cf919b6e3e06f3e59a0b0e5fa3602836"
  },
  {
    "url": "assets/js/92.a4cc5989.js",
    "revision": "bd1a3e1acfca8166a99b3687196456cb"
  },
  {
    "url": "assets/js/93.9df41279.js",
    "revision": "e8a55ef254589cbe418db53d21e1a558"
  },
  {
    "url": "assets/js/94.0ffd2487.js",
    "revision": "db0457bc3a6b2600baf5e3299e448e2a"
  },
  {
    "url": "assets/js/app.db89cb15.js",
    "revision": "974870f7e494260dbb77532d89502411"
  },
  {
    "url": "assets/js/layout-BaseLayout.fe9ffc80.js",
    "revision": "15ad79365b27483ab173dffd1c41807b"
  },
  {
    "url": "assets/js/layout-Layout.37c40349.js",
    "revision": "2cb18aada95ad81145d7e5fe1ca0f56e"
  },
  {
    "url": "assets/js/layout-NotFound.b509f238.js",
    "revision": "dcefbb6f76c6e25b3444d5706f38d9d7"
  },
  {
    "url": "assets/js/page-01b1365c.63324ce5.js",
    "revision": "16ab821a59311e09a50711af5cd6420f"
  },
  {
    "url": "assets/js/page-03ff99e4.23d57a44.js",
    "revision": "8dfc781de1ba7df958e59ca1c30c6d13"
  },
  {
    "url": "assets/js/page-0762cb2c.e289891b.js",
    "revision": "a584932bdf92bf354f2ebdedb97d09e2"
  },
  {
    "url": "assets/js/page-0815fe43.01b67d3e.js",
    "revision": "541284ce83d9a3a638fbf7d2a573b762"
  },
  {
    "url": "assets/js/page-0994254e.13c599c1.js",
    "revision": "5c63ac91c6a52912fe39f24c32beac39"
  },
  {
    "url": "assets/js/page-09cfa20f.c4b89e61.js",
    "revision": "b40c50e51b2abee564b8a7d6f100d66d"
  },
  {
    "url": "assets/js/page-0bd5cd98.16b169cf.js",
    "revision": "7c775ebc3484232bdaf8ef10e4907599"
  },
  {
    "url": "assets/js/page-0ca8b05c.b952813f.js",
    "revision": "f4b1ac60152f3dbb3fbe00244526dcb0"
  },
  {
    "url": "assets/js/page-130de14f.0171c60e.js",
    "revision": "1bcbd1198fa6099fc1d1fb54a915bd04"
  },
  {
    "url": "assets/js/page-17916170.a6adb3ab.js",
    "revision": "a2139625119985f1327347fc1757353b"
  },
  {
    "url": "assets/js/page-1efb5c62.9e2566ca.js",
    "revision": "c3c5511c867fcebc111160e74096d676"
  },
  {
    "url": "assets/js/page-2282a6e0.eff0ef5f.js",
    "revision": "fb92ac9dc6273248b3e6ca6ff53ee747"
  },
  {
    "url": "assets/js/page-2ba07fce.5f2b4222.js",
    "revision": "b351e5af74515229510598a4c80165bd"
  },
  {
    "url": "assets/js/page-2da25f49.cee5d0f0.js",
    "revision": "5692889907724aa9e0f8caadb36eb736"
  },
  {
    "url": "assets/js/page-2f77601c.934137e6.js",
    "revision": "b2afdbcdfff2a5ac17693076933c5438"
  },
  {
    "url": "assets/js/page-36058925.7495c200.js",
    "revision": "06e18409cc8a08800d2b5ac8cfe7c4e1"
  },
  {
    "url": "assets/js/page-3721e5cf.500c6198.js",
    "revision": "219d9de8ba75071de4cc2e62f38de065"
  },
  {
    "url": "assets/js/page-38e94d3e.05274894.js",
    "revision": "712ac0abc1b539433adbbd083f47070e"
  },
  {
    "url": "assets/js/page-39d006b5.c068097a.js",
    "revision": "76f028f036c0fb32c00ff4d0608d0306"
  },
  {
    "url": "assets/js/page-3b1778e4.3bbe486d.js",
    "revision": "2aa4f9917b4ee64a9615f20e1e161bd7"
  },
  {
    "url": "assets/js/page-4048f79b.392f79f6.js",
    "revision": "f696b8e22c792c3a262a35248185d3b6"
  },
  {
    "url": "assets/js/page-409d673b.26d94df3.js",
    "revision": "a1085a6cf0c203ee6442a34f02832ae5"
  },
  {
    "url": "assets/js/page-42a0ea7c.764a551f.js",
    "revision": "ce289f520649607d5bf905c78d4afefd"
  },
  {
    "url": "assets/js/page-437f73dc.503d6de9.js",
    "revision": "bd3ed984b0dad44731b89312cd10e7dc"
  },
  {
    "url": "assets/js/page-4773a0fc.2d65d93d.js",
    "revision": "df092d8c38d783c40ce007f069249612"
  },
  {
    "url": "assets/js/page-47ec31ef.e68b6b25.js",
    "revision": "dedc2939b8f1c28f48ed10aa9c4a1f17"
  },
  {
    "url": "assets/js/page-494b7749.83dcaeb3.js",
    "revision": "8cbdbe9fe65005b4ea6d676b4dd8dc8e"
  },
  {
    "url": "assets/js/page-4e40ef0e.48a98083.js",
    "revision": "8c74a2aaf07390f61af2e1c8549d7ed7"
  },
  {
    "url": "assets/js/page-4f5eb00c.f45fc967.js",
    "revision": "ae87bb4d2888e00e81b69557edd5de9d"
  },
  {
    "url": "assets/js/page-52453899.f2561f55.js",
    "revision": "c0adc6fc1bafd4abd6dff59c14167d21"
  },
  {
    "url": "assets/js/page-53a21bc2.c8e9c939.js",
    "revision": "bfb6ad42065217a21c88051307cef550"
  },
  {
    "url": "assets/js/page-548dbfdd.5254e7dc.js",
    "revision": "e3bf84fa8c4fdd82026f88cb1262b3fe"
  },
  {
    "url": "assets/js/page-54cde949.8b185dde.js",
    "revision": "1d9248bfe1b37d5a82576603bc0bb498"
  },
  {
    "url": "assets/js/page-56c5add8.5a966e8d.js",
    "revision": "2d2ac25556e1cdb0b16a32b70fef3741"
  },
  {
    "url": "assets/js/page-5971d062.8b54faa9.js",
    "revision": "e5ab4ef366f75909febcf3809041b522"
  },
  {
    "url": "assets/js/page-5ae76184.831a476b.js",
    "revision": "5c1fba68dca894936db5e2f0d3ed63e0"
  },
  {
    "url": "assets/js/page-5c24028f.bd43d25a.js",
    "revision": "9a71459bfbbcefc1115d468a2cf2760e"
  },
  {
    "url": "assets/js/page-5dade32f.a7717821.js",
    "revision": "86def018c7ef47f0871b4be693b78ecd"
  },
  {
    "url": "assets/js/page-62c3f84a.2fb33cd8.js",
    "revision": "530a9ef59af50fd4e421a226815fb67e"
  },
  {
    "url": "assets/js/page-631831dc.bce03f84.js",
    "revision": "e5c8ae8277d15a1e23d398e0128911b3"
  },
  {
    "url": "assets/js/page-64c6c3f9.3ba8e115.js",
    "revision": "7354fc7f85bef4dc94659049294a4ef1"
  },
  {
    "url": "assets/js/page-68a3e126.41723be2.js",
    "revision": "e47e09cc4417dd214dd3618436c31605"
  },
  {
    "url": "assets/js/page-718e3f13.8e934d04.js",
    "revision": "d757400f21a30bf379ffd2348f6cbf63"
  },
  {
    "url": "assets/js/page-7961fc62.dd1122ae.js",
    "revision": "0c87e88ca9c5153d6f98378b4e847fde"
  },
  {
    "url": "assets/js/page-7e22c02f.c3cfe2b9.js",
    "revision": "56e1aa0ab0488842733d093dc6e3674c"
  },
  {
    "url": "assets/js/page-7f4c69e4.614090da.js",
    "revision": "55b58d499102bb336101e8689523515a"
  },
  {
    "url": "assets/js/page-9a13860a.97fe8e15.js",
    "revision": "74e0847811254e9e6a0aca57f0565167"
  },
  {
    "url": "assets/js/page-9d704b70.3511ebb2.js",
    "revision": "6b2ef0670e77385e8a8b3e811fd49d9e"
  },
  {
    "url": "assets/js/page-a1c83fc6.19cbb49b.js",
    "revision": "86c2814855851801728799f6e65ed152"
  },
  {
    "url": "assets/js/page-a649c29e.0db77a28.js",
    "revision": "05867c0ab309022bcb434fac6dbe8151"
  },
  {
    "url": "assets/js/page-b6123e24.8b58098b.js",
    "revision": "4694dd4fc7d68eeb0e2f71a41e206fa2"
  },
  {
    "url": "assets/js/page-c1e7a5fc.3963ee6c.js",
    "revision": "110fb177aef150c5b48770e05faa03c5"
  },
  {
    "url": "assets/js/page-c41b383a.79a65c68.js",
    "revision": "08eb983dff89350d7f6404c763855c80"
  },
  {
    "url": "assets/js/page-c799e3a4.083f94f3.js",
    "revision": "c6da5de8ec6f3891c44b191f90ae7318"
  },
  {
    "url": "assets/js/page-cd03364e.44693d1a.js",
    "revision": "21817ccae15c0361478a0b0df2df15a8"
  },
  {
    "url": "assets/js/page-deb70f94.1ed01b33.js",
    "revision": "089ff574701c9e337ac79a12991fd012"
  },
  {
    "url": "assets/js/page-e63bef64.dd0773a7.js",
    "revision": "bf2b942c2468f874423b5b9a7e4db419"
  },
  {
    "url": "assets/js/page-e869018c.5c96568d.js",
    "revision": "4f21e8b1f0a3a5b7c36167a77d17ee28"
  },
  {
    "url": "assets/js/page-e87fecf8.36587980.js",
    "revision": "e78d540c09cef7c8dc4aa0052754b236"
  },
  {
    "url": "assets/js/page-fa2e9ecc.5e9ff49b.js",
    "revision": "00411b74222a7e25d1efb956209c8ad9"
  },
  {
    "url": "assets/js/vendors~flowchart.ce4dd347.js",
    "revision": "7b0a7ccd71957666ee17dc04c7588054"
  },
  {
    "url": "assets/js/vendors~layout-Layout.24cf10ad.js",
    "revision": "0ab0a8de06d4d30cdcde86a5156366f2"
  },
  {
    "url": "category/index.html",
    "revision": "0cd5bd75425fcf4d7139b579783f0eb1"
  },
  {
    "url": "Coding/Front-End/CSS/awesome-css.html",
    "revision": "9071e7f78b92694fe05999cfa4a37259"
  },
  {
    "url": "Coding/Front-End/CSS/awesome-icons.html",
    "revision": "e918ea40dff07cac682c986c47b45682"
  },
  {
    "url": "Coding/Front-End/JS/Module Bundler/Webpack/awesome-webpack.html",
    "revision": "d7ce0097b6ba2c15c51f2708e80cb296"
  },
  {
    "url": "Coding/Front-End/JS/Vue/awesome-vue.html",
    "revision": "7f1bafda9df841fe4d1fdb17594ebde1"
  },
  {
    "url": "Coding/日常筆記/CodeReview/code-review-memo.html",
    "revision": "7cba442b5c499fa0a07e6d2dafc64924"
  },
  {
    "url": "Coding/日常筆記/CSharp/AutoMapper-class繼承後之對應.html",
    "revision": "cf6dfe68a405df135a446666af7475ca"
  },
  {
    "url": "Coding/日常筆記/CSharp/String-Concatenate.html",
    "revision": "c4fab50aea09a5b9112057cf9994c3d1"
  },
  {
    "url": "Coding/日常筆記/CSharp/tmp.html",
    "revision": "88ea5e7ac3d36ae9b24d7598980af402"
  },
  {
    "url": "Coding/日常筆記/CSharp/變數命名.html",
    "revision": "060aacc4c787eb90be366a9bb726c3aa"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/1. 心/index.html",
    "revision": "064d0f2a3023cde739d8c487962f8b81"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/1. 心/TMP.html",
    "revision": "d6440ad1282bd3e76e132c1c5ebfe2e9"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/1. 心/心理戰.html",
    "revision": "8f8fcf44315f79134e2460673ccceab3"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/2. 技/index.html",
    "revision": "3e2be88c2ee71bd18265ac0f6397e119"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/2. 技/神小跳.html",
    "revision": "bb6f9c129ac79cb9398cfa6080c7f397"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/2. 技/視野變換.html",
    "revision": "4fb9b86fe39b5a585953d7f5f23635fb"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/2. 技/走位.html",
    "revision": "38275a4ded564c4f000654e09212887f"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/2. 技/跳點.html",
    "revision": "e77572baf3ec2fad1c7fa9d63961273f"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/2. 技/預出手.html",
    "revision": "e270457d588449ba2fa250a778fae463"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/3. 體/index.html",
    "revision": "bb06773657e03679ba68dfbc383b461f"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/4. 群/index.html",
    "revision": "e2413d13688477350e944b7246714e47"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/4. 群/卡位.html",
    "revision": "03e0fa6a2fdb834f58f29249dd3e7f3d"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/4. 群/組隊.html",
    "revision": "20a0a48eaa24e43fa510523bcbbc3a49"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/5. 略/index.html",
    "revision": "5427abc5d383b387104ce60786e76a8f"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/5. 略/局勢.html",
    "revision": "77d79b648d33ee749f0261049a9fb8f8"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/6. 決/index.html",
    "revision": "7241c7a8a6cf20b4834830ca95349f3d"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/index.html",
    "revision": "833ee75191a0e2ba27eed3f4b7d320bb"
  },
  {
    "url": "Game/FEZ/2. 國戰步兵戰策略/index.html",
    "revision": "3fcc2cccfa5bb1fccdbf44e49d28bd86"
  },
  {
    "url": "Game/FEZ/3. 各職玩法/刀.html",
    "revision": "a3953656056d5a6f193e1a69befc50fa"
  },
  {
    "url": "Game/FEZ/3. 各職玩法/雙修.html",
    "revision": "91494c321884855324b104ce1bcac17d"
  },
  {
    "url": "Game/FEZ/4. 2on/index.html",
    "revision": "74aee4ebedc3a34c428b85171753ba2f"
  },
  {
    "url": "Game/FEZ/5. 3on/index.html",
    "revision": "e6bb65f2735eda986c85305ef99d9578"
  },
  {
    "url": "Game/FEZ/X. Theorem/HMM.html",
    "revision": "124373dff6b655fb14a153ca54086b45"
  },
  {
    "url": "hello-vuejcblog.html",
    "revision": "98e7b9b9ae58014f1181d66e97065c8d"
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
    "revision": "583f969f0285e74d577307ad2c63297b"
  },
  {
    "url": "reveal-plugins/reveal.js-menu/font-awesome/css/all.css",
    "revision": "826c57385f3d35cfed5478ba7b1f5c03"
  },
  {
    "url": "reveal-plugins/reveal.js-menu/font-awesome/css/brands.css",
    "revision": "a3ceb4f1b808969cd8f1bb0aac1510c2"
  },
  {
    "url": "reveal-plugins/reveal.js-menu/font-awesome/css/fontawesome.css",
    "revision": "dbcb133434de9fcab3b59ade7ec21498"
  },
  {
    "url": "reveal-plugins/reveal.js-menu/font-awesome/css/regular.css",
    "revision": "fee1728359ce4620fd348a3e54507aa2"
  },
  {
    "url": "reveal-plugins/reveal.js-menu/font-awesome/css/solid.css",
    "revision": "29836be7445cd9786959237ea8e13405"
  },
  {
    "url": "reveal-plugins/reveal.js-menu/font-awesome/css/svg-with-js.css",
    "revision": "bd066123cdf3337103b21713df9bfd01"
  },
  {
    "url": "reveal-plugins/reveal.js-menu/font-awesome/css/v4-shims.css",
    "revision": "6dd334cc89ff203f10b026482960997d"
  },
  {
    "url": "reveal-plugins/reveal.js-menu/font-awesome/css/v4-shims.min.css",
    "revision": "7254c92168d4717ed7b36234b2bba3b8"
  },
  {
    "url": "reveal-plugins/reveal.js-menu/font-awesome/webfonts/fa-brands-400.eot",
    "revision": "e2a76403183eff8967cf6318c6e51509"
  },
  {
    "url": "reveal-plugins/reveal.js-menu/font-awesome/webfonts/fa-brands-400.svg",
    "revision": "a999c7b8823b901248833dc7fe07a52f"
  },
  {
    "url": "reveal-plugins/reveal.js-menu/font-awesome/webfonts/fa-brands-400.ttf",
    "revision": "e0fc4e5c719b4dc10c97fc111d7374e1"
  },
  {
    "url": "reveal-plugins/reveal.js-menu/font-awesome/webfonts/fa-brands-400.woff",
    "revision": "d034c1b2ee84dd981ef2e637754a0b4f"
  },
  {
    "url": "reveal-plugins/reveal.js-menu/font-awesome/webfonts/fa-brands-400.woff2",
    "revision": "f319eac1c755f9929fd856720ce1695e"
  },
  {
    "url": "reveal-plugins/reveal.js-menu/font-awesome/webfonts/fa-regular-400.eot",
    "revision": "5a4618f029618cc2795c05fe53d57028"
  },
  {
    "url": "reveal-plugins/reveal.js-menu/font-awesome/webfonts/fa-regular-400.svg",
    "revision": "e9d8dbb0c3e9b97ffc59c50ff5d01422"
  },
  {
    "url": "reveal-plugins/reveal.js-menu/font-awesome/webfonts/fa-regular-400.ttf",
    "revision": "6534c603e0892488132ad57248ec69e2"
  },
  {
    "url": "reveal-plugins/reveal.js-menu/font-awesome/webfonts/fa-regular-400.woff",
    "revision": "e99569d3d10c94c60d9a68523c1c0e71"
  },
  {
    "url": "reveal-plugins/reveal.js-menu/font-awesome/webfonts/fa-regular-400.woff2",
    "revision": "a3715c6fe264a51f1d9260b447ff46bc"
  },
  {
    "url": "reveal-plugins/reveal.js-menu/font-awesome/webfonts/fa-solid-900.eot",
    "revision": "d9824d00712532d7697df68df16ae0d3"
  },
  {
    "url": "reveal-plugins/reveal.js-menu/font-awesome/webfonts/fa-solid-900.svg",
    "revision": "666a82cb3e9f8591bef4049aea26c4c6"
  },
  {
    "url": "reveal-plugins/reveal.js-menu/font-awesome/webfonts/fa-solid-900.ttf",
    "revision": "00ddaede094b83270cadbfc1a907e8ca"
  },
  {
    "url": "reveal-plugins/reveal.js-menu/font-awesome/webfonts/fa-solid-900.woff",
    "revision": "128d2b0be23925e5cf36717ddc6f093b"
  },
  {
    "url": "reveal-plugins/reveal.js-menu/font-awesome/webfonts/fa-solid-900.woff2",
    "revision": "18d2347ab2a9f40ca2247cdb03303d84"
  },
  {
    "url": "reveal-plugins/reveal.js-menu/menu.css",
    "revision": "b77ae49bbe4659ad03cfef294993ae00"
  },
  {
    "url": "reveal-plugins/reveal.js-menu/menu.js",
    "revision": "a5c2b07e1542574c9c32ef832a816d5f"
  },
  {
    "url": "reveal-plugins/reveal.js-toolbar/font-awesome-5.0.2/css/fontawesome-all.css",
    "revision": "df971aa5d84841ee38832d91eec13fea"
  },
  {
    "url": "reveal-plugins/reveal.js-toolbar/font-awesome-5.0.2/css/fontawesome-all.min.css",
    "revision": "008d988812b8880cba5c961a2801ecf4"
  },
  {
    "url": "reveal-plugins/reveal.js-toolbar/font-awesome-5.0.2/webfonts/fa-brands-400.eot",
    "revision": "7001a3b042968d7dab0e6101e006e7b9"
  },
  {
    "url": "reveal-plugins/reveal.js-toolbar/font-awesome-5.0.2/webfonts/fa-brands-400.svg",
    "revision": "7062ba59eccb39a5b2928e76775c070e"
  },
  {
    "url": "reveal-plugins/reveal.js-toolbar/font-awesome-5.0.2/webfonts/fa-brands-400.ttf",
    "revision": "8ba7759787c0747a9eb4cacc52fda0d4"
  },
  {
    "url": "reveal-plugins/reveal.js-toolbar/font-awesome-5.0.2/webfonts/fa-brands-400.woff",
    "revision": "06caed825136db34feec1818b2e7b694"
  },
  {
    "url": "reveal-plugins/reveal.js-toolbar/font-awesome-5.0.2/webfonts/fa-brands-400.woff2",
    "revision": "821db3df5dfee55d22d026a550437493"
  },
  {
    "url": "reveal-plugins/reveal.js-toolbar/font-awesome-5.0.2/webfonts/fa-regular-400.eot",
    "revision": "eb226bfbc2cbafd8d77dd97c5c51a707"
  },
  {
    "url": "reveal-plugins/reveal.js-toolbar/font-awesome-5.0.2/webfonts/fa-regular-400.svg",
    "revision": "5520ce161fcd465b3af338abb8c3df01"
  },
  {
    "url": "reveal-plugins/reveal.js-toolbar/font-awesome-5.0.2/webfonts/fa-regular-400.ttf",
    "revision": "2beb8065550b6030c920fc073c10abce"
  },
  {
    "url": "reveal-plugins/reveal.js-toolbar/font-awesome-5.0.2/webfonts/fa-regular-400.woff",
    "revision": "e688d53830f28ff118f912e3eaa42dc5"
  },
  {
    "url": "reveal-plugins/reveal.js-toolbar/font-awesome-5.0.2/webfonts/fa-regular-400.woff2",
    "revision": "ddb3298b99debbc30dab9de16385fd6e"
  },
  {
    "url": "reveal-plugins/reveal.js-toolbar/font-awesome-5.0.2/webfonts/fa-solid-900.eot",
    "revision": "89b584356dc1ab35af50c4417f6af1cb"
  },
  {
    "url": "reveal-plugins/reveal.js-toolbar/font-awesome-5.0.2/webfonts/fa-solid-900.svg",
    "revision": "354488156fbac95ac6b0f486d9d344c2"
  },
  {
    "url": "reveal-plugins/reveal.js-toolbar/font-awesome-5.0.2/webfonts/fa-solid-900.ttf",
    "revision": "e77d3ec9bc38ea486eb885456693278a"
  },
  {
    "url": "reveal-plugins/reveal.js-toolbar/font-awesome-5.0.2/webfonts/fa-solid-900.woff",
    "revision": "e00c146f3a292e6dc28f7a5730dc4e20"
  },
  {
    "url": "reveal-plugins/reveal.js-toolbar/font-awesome-5.0.2/webfonts/fa-solid-900.woff2",
    "revision": "e519eef3aaa5e7db03d6a901694fc660"
  },
  {
    "url": "reveal-plugins/reveal.js-toolbar/lib/screenfull/screenfull.min.js",
    "revision": "d72f6e9bf2c61ac4724dac6a346c5180"
  },
  {
    "url": "reveal-plugins/reveal.js-toolbar/toolbar.css",
    "revision": "487c98342da1e3e11d455fb333fe4f0f"
  },
  {
    "url": "reveal-plugins/reveal.js-toolbar/toolbar.js",
    "revision": "dc54ab50ab6df632767a594bbfeb3738"
  },
  {
    "url": "search/index.html",
    "revision": "1eb4285b4f1f72b94ef49435e3eaca5c"
  },
  {
    "url": "tag/index.html",
    "revision": "1b2ab7e6d5c637a18e2eb1f7c7d2ef82"
  },
  {
    "url": "VueJCBlog/Development/article/hello-vuejcblog.html",
    "revision": "fac8f2c465309d440db7aecaf6f04f5f"
  },
  {
    "url": "VueJCBlog/Development/article/test/test-comment.html",
    "revision": "7e3cc63e6d1bfd3c8d59d4e11b442846"
  },
  {
    "url": "VueJCBlog/Development/article/test/test-lazy-load.html",
    "revision": "d61892cc65eeac54c2a0610a894a14ec"
  },
  {
    "url": "VueJCBlog/Development/article/test/test-lazy-load2.html",
    "revision": "3540a517962354ad00a1b5f198d22277"
  },
  {
    "url": "VueJCBlog/Feature/about-page.html",
    "revision": "05023cb6a1cae4caf1515e585d2bd82d"
  },
  {
    "url": "VueJCBlog/Feature/archive-page.html",
    "revision": "86481dfab5c37c86c08a6c908feb73d1"
  },
  {
    "url": "VueJCBlog/Feature/category-page.html",
    "revision": "458d6fdb63b08a570d8dd19262a88354"
  },
  {
    "url": "VueJCBlog/Feature/common-feature.html",
    "revision": "305115c50097828e864fc6118e69427b"
  },
  {
    "url": "VueJCBlog/Feature/index-page.html",
    "revision": "6f41bfe98445224b25d266e7858e2437"
  },
  {
    "url": "VueJCBlog/Feature/index.html",
    "revision": "e6f794b8223e1ef228624a18fbe3f7c6"
  },
  {
    "url": "VueJCBlog/Feature/post-page.html",
    "revision": "a4a38f795a32000b7fd12074160f2566"
  },
  {
    "url": "VueJCBlog/Feature/search-page.html",
    "revision": "904fb20fa55250928e5b33b9e117de8f"
  },
  {
    "url": "VueJCBlog/Feature/sidebar-feature.html",
    "revision": "932388ed68e38ccefa9ce6f41c242417"
  },
  {
    "url": "VueJCBlog/Feature/tag-page.html",
    "revision": "77308cc79d773369269106e3ec9b0f02"
  },
  {
    "url": "VueJCBlog/index.html",
    "revision": "d9ba954a84c863929ffddd4c51b22dcb"
  },
  {
    "url": "VueJCBlog/Installation.html",
    "revision": "33427a5125a870ad33d99a7a1b9c2a1f"
  },
  {
    "url": "VueJCBlog/Quick-Start.html",
    "revision": "2ae7cabc4d8d8205fc7bebb50650cd32"
  },
  {
    "url": "VueJCBlog/Usage/Container/index.html",
    "revision": "a36d6c5c062f23586ae0e53cf087f074"
  },
  {
    "url": "VueJCBlog/Usage/front-matter.html",
    "revision": "ef117c40636284592ceadf3eef3b5682"
  },
  {
    "url": "VueJCBlog/Usage/index.html",
    "revision": "a4c7ff647163c42a64780feb00d15ccb"
  },
  {
    "url": "VueJCBlog/Usage/Markdown/advanced.html",
    "revision": "47df31df52979b729bafa9adecd9955a"
  },
  {
    "url": "VueJCBlog/Usage/Markdown/basic.html",
    "revision": "4d19bcefc4960d3d1794f6b8daadf2b3"
  },
  {
    "url": "VueJCBlog/Usage/Markdown/flow-chart.html",
    "revision": "244055067f10b3717d13bf92a2160282"
  },
  {
    "url": "VueJCBlog/Usage/Markdown/index.html",
    "revision": "78a60193c5f436ad4941b11c6b147de3"
  },
  {
    "url": "VueJCBlog/Usage/Markdown/link.html",
    "revision": "3cbbf2080ac6c3f517d049495b846cac"
  },
  {
    "url": "VueJCBlog/Usage/Slide.html",
    "revision": "45a69d6e8956c674fbfde944d6392e56"
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
