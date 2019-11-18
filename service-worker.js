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
    "revision": "276aee979f8fabc8a9fff299bc7a6cbc"
  },
  {
    "url": "About/index.html",
    "revision": "3c53bc3dcc73204ec0b7f61b76aa4c93"
  },
  {
    "url": "archive/index.html",
    "revision": "a5dc89f56d7da70a66807f782958ae03"
  },
  {
    "url": "assets/css/0.styles.644c503b.css",
    "revision": "f49a97d30c53602678ec97ee955034ba"
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
    "url": "assets/js/76.0dcd80a0.js",
    "revision": "a280d9c6ff367e7e9975be512cc2917a"
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
    "url": "assets/js/app.9525555c.js",
    "revision": "56b7319b7c63a3e0ae9617be0d6bb588"
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
    "url": "assets/js/page-01b1365c.25ac8e58.js",
    "revision": "be8fc0a5b8cc75f4cfccb10273ac6414"
  },
  {
    "url": "assets/js/page-03ff99e4.f1b20243.js",
    "revision": "fbaf86a82269e51f332fe293c62b8b0b"
  },
  {
    "url": "assets/js/page-0762cb2c.90e53b0a.js",
    "revision": "3fcc734031be486e6d0c6633eb23512f"
  },
  {
    "url": "assets/js/page-0815fe43.01b67d3e.js",
    "revision": "541284ce83d9a3a638fbf7d2a573b762"
  },
  {
    "url": "assets/js/page-0994254e.a63a5ddf.js",
    "revision": "6e758d785c15e5097e45f7a15141dd76"
  },
  {
    "url": "assets/js/page-09cfa20f.1017c01a.js",
    "revision": "f223afdd5eb22f54df16d2cca1b5f037"
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
    "url": "assets/js/page-1efb5c62.d31cb581.js",
    "revision": "c0d799a4c3293f17be5275c908e9f915"
  },
  {
    "url": "assets/js/page-2282a6e0.eff0ef5f.js",
    "revision": "fb92ac9dc6273248b3e6ca6ff53ee747"
  },
  {
    "url": "assets/js/page-2ba07fce.ef96e127.js",
    "revision": "10cb809c86ce284ddf0bd79d5a45c0e1"
  },
  {
    "url": "assets/js/page-2da25f49.f8c166a6.js",
    "revision": "b983656ac7aea8f6ec18fc16cc6705ef"
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
    "url": "assets/js/page-3721e5cf.9cf9dd71.js",
    "revision": "e6f50865db1a92864306a5394e202c9d"
  },
  {
    "url": "assets/js/page-38e94d3e.7f099c90.js",
    "revision": "49083c5b3b396f2c4c4403ad93466d6b"
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
    "url": "assets/js/page-409d673b.51b9c233.js",
    "revision": "6e448b6ba087cea2b8fec405f442e608"
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
    "url": "assets/js/page-4773a0fc.c86fdee4.js",
    "revision": "7d9edad1f4d94ea56136b9d14945b3f5"
  },
  {
    "url": "assets/js/page-47ec31ef.ab578f2f.js",
    "revision": "d22d68dd69aa3b0f5cf94f048087edbd"
  },
  {
    "url": "assets/js/page-494b7749.75970a96.js",
    "revision": "efea5c5ba7922401e88ad6b27bc8a6cf"
  },
  {
    "url": "assets/js/page-4e40ef0e.383ff70b.js",
    "revision": "4b29c0536f4aa70df13d4905eedf02ba"
  },
  {
    "url": "assets/js/page-4f5eb00c.19507062.js",
    "revision": "51cb98f240f59a9ec80e24ed83b9639c"
  },
  {
    "url": "assets/js/page-52453899.0c8ea7e5.js",
    "revision": "51e7ed37753cb6ba76590014dd8993aa"
  },
  {
    "url": "assets/js/page-53a21bc2.3b5ece4f.js",
    "revision": "742fcd3642ade0db812f9a3d655f9bcb"
  },
  {
    "url": "assets/js/page-548dbfdd.bcbfad8c.js",
    "revision": "99465ed5c6ffec395383b53d816138ac"
  },
  {
    "url": "assets/js/page-54cde949.cffab0bd.js",
    "revision": "04a8daeb5918ee735a34d0e1a7ac2717"
  },
  {
    "url": "assets/js/page-56c5add8.d6ff08a5.js",
    "revision": "37d3c83a95baa70737b8363052493af9"
  },
  {
    "url": "assets/js/page-5971d062.ddb7b1cd.js",
    "revision": "57a4370b44a315e2be72f345ccf4b882"
  },
  {
    "url": "assets/js/page-5ae76184.6422f7bb.js",
    "revision": "c47dd4df6acbae78cfd634310abd4abf"
  },
  {
    "url": "assets/js/page-5c24028f.bd43d25a.js",
    "revision": "9a71459bfbbcefc1115d468a2cf2760e"
  },
  {
    "url": "assets/js/page-5dade32f.0c2aaac5.js",
    "revision": "7e76f2bd249b586127bb78a7a963d31b"
  },
  {
    "url": "assets/js/page-62c3f84a.67db774c.js",
    "revision": "5b585e4b6cb87c07a7242a5dc3b4a637"
  },
  {
    "url": "assets/js/page-631831dc.112011cb.js",
    "revision": "518e30c37d6bcd46e1f957153414b94c"
  },
  {
    "url": "assets/js/page-64c6c3f9.b15320f9.js",
    "revision": "cd6cf28f508f83d8048518ad4419e938"
  },
  {
    "url": "assets/js/page-68a3e126.1a99a84e.js",
    "revision": "194fa0f735da65708433469fa4a26bcf"
  },
  {
    "url": "assets/js/page-718e3f13.980e3acc.js",
    "revision": "c29b105f44ed537637d7a28d8d1070fe"
  },
  {
    "url": "assets/js/page-7961fc62.6d1d99f4.js",
    "revision": "1f9de18c624b21199c48bde0714c957f"
  },
  {
    "url": "assets/js/page-7e22c02f.cfc06a6b.js",
    "revision": "dc76641a6d869007077090265d93ddef"
  },
  {
    "url": "assets/js/page-7f4c69e4.54cb2e12.js",
    "revision": "5fbc0bfefcabea0d00b5bffcd3769780"
  },
  {
    "url": "assets/js/page-9a13860a.bb6cd7e7.js",
    "revision": "446a0b83239b2b2900741db2c3a6be00"
  },
  {
    "url": "assets/js/page-9d704b70.3799d767.js",
    "revision": "1956c8d48ae7d59b3138a06f85858950"
  },
  {
    "url": "assets/js/page-a1c83fc6.b1369012.js",
    "revision": "9015c9b1b1ece5c25a204e7b25d0080f"
  },
  {
    "url": "assets/js/page-a649c29e.0aefa110.js",
    "revision": "0c047a31b904606db0387b600a24649e"
  },
  {
    "url": "assets/js/page-b6123e24.b9ce8c69.js",
    "revision": "11484b49a8aaef2fea10ba80142a54b9"
  },
  {
    "url": "assets/js/page-c1e7a5fc.b8f7068b.js",
    "revision": "77802f797c93c0e134ac830275f27d7d"
  },
  {
    "url": "assets/js/page-c41b383a.2c193d5d.js",
    "revision": "1c4046855712115e0264ccab39d867eb"
  },
  {
    "url": "assets/js/page-c799e3a4.083f94f3.js",
    "revision": "c6da5de8ec6f3891c44b191f90ae7318"
  },
  {
    "url": "assets/js/page-cd03364e.f5707a5d.js",
    "revision": "ba067664179d2a1c1e47677046bbc782"
  },
  {
    "url": "assets/js/page-deb70f94.1ed01b33.js",
    "revision": "089ff574701c9e337ac79a12991fd012"
  },
  {
    "url": "assets/js/page-e63bef64.7f536e55.js",
    "revision": "1583742213da63e6ccac3c120ff62070"
  },
  {
    "url": "assets/js/page-e869018c.e03564b5.js",
    "revision": "dc40ff81e1b6e7e95cd266448a437633"
  },
  {
    "url": "assets/js/page-e87fecf8.36587980.js",
    "revision": "e78d540c09cef7c8dc4aa0052754b236"
  },
  {
    "url": "assets/js/page-fa2e9ecc.269f2a3c.js",
    "revision": "238a98bbb81e4a5780d7d525edba9664"
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
    "revision": "0ddfc9ad23a425a0b6b6e46d29e15d14"
  },
  {
    "url": "Coding/Front-End/CSS/awesome-css.html",
    "revision": "2aea76f4f099be4befe5c17e22909170"
  },
  {
    "url": "Coding/Front-End/CSS/awesome-icons.html",
    "revision": "f0973a4c6e643b2e4450dba7f6233338"
  },
  {
    "url": "Coding/Front-End/JS/Module Bundler/Webpack/awesome-webpack.html",
    "revision": "e7124e9a1f21dcfbf71fbeafdaefb1b4"
  },
  {
    "url": "Coding/Front-End/JS/Vue/awesome-vue.html",
    "revision": "c23f838456e89c446e3b5cd8e8ddc0c3"
  },
  {
    "url": "Coding/日常筆記/CodeReview/code-review-memo.html",
    "revision": "c21026815ce81ad3722642b52db3c3c9"
  },
  {
    "url": "Coding/日常筆記/CSharp/AutoMapper-class繼承後之對應.html",
    "revision": "f62da72ef0c8c19070e0ebd09d6a9129"
  },
  {
    "url": "Coding/日常筆記/CSharp/String-Concatenate.html",
    "revision": "d3c52727cf4f14166ad65866aa977c5d"
  },
  {
    "url": "Coding/日常筆記/CSharp/tmp.html",
    "revision": "daeb905ffc440072fbffa47d68a71a17"
  },
  {
    "url": "Coding/日常筆記/CSharp/變數命名.html",
    "revision": "c52e3a0668f71cd402b6474f6644d508"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/1. 心/index.html",
    "revision": "87bea4629c0caf6af9f78c14ba855739"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/1. 心/TMP.html",
    "revision": "1a0ee4bd88077f5194513a6cfaee51ca"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/1. 心/心理戰.html",
    "revision": "738716af7b5a2621134e46d30d82e9e0"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/2. 技/index.html",
    "revision": "124ffe08dde36c6b56b142d15876eca9"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/2. 技/神小跳.html",
    "revision": "2575ca90ea68aa023722f5aab8aeb746"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/2. 技/視野變換.html",
    "revision": "2ea3738bf5189a44f3979fa6a1259a8f"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/2. 技/走位.html",
    "revision": "a017934d85a160f5daaf10cded1d49cb"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/2. 技/跳點.html",
    "revision": "1673b8c52768bc12d8d1c1c762a5c4a0"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/2. 技/預出手.html",
    "revision": "88f8ebf432d738356874cfe1e5539051"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/3. 體/index.html",
    "revision": "ed110d2b72069cb8f60a6b39dce1e311"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/4. 群/index.html",
    "revision": "8579a515f2102231c510098cdd55e805"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/4. 群/卡位.html",
    "revision": "9704a90726af82d114b916242873f25b"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/4. 群/組隊.html",
    "revision": "8830afcccb9bb715f483e1924a11788e"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/5. 略/index.html",
    "revision": "56aca8f4fccd361a248248083fc57805"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/5. 略/局勢.html",
    "revision": "88af0adf8b9fd7092529a1dbdd626410"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/6. 決/index.html",
    "revision": "9a503b0a0da7a6237cdd65c9b3506c82"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/index.html",
    "revision": "66c1fd2e95c4d06ddb2b8a4afbc9efee"
  },
  {
    "url": "Game/FEZ/2. 國戰步兵戰策略/index.html",
    "revision": "f9111a26ba1b9e5b9bb9d1c4008aedf1"
  },
  {
    "url": "Game/FEZ/3. 各職玩法/刀.html",
    "revision": "d1bbaa3fbf71acb1b644d320ef59fc6a"
  },
  {
    "url": "Game/FEZ/3. 各職玩法/雙修.html",
    "revision": "98da81aeef7a6e35879989d00240b577"
  },
  {
    "url": "Game/FEZ/4. 2on/index.html",
    "revision": "a7398787b52455e9caaabfa33b2bf2d9"
  },
  {
    "url": "Game/FEZ/5. 3on/index.html",
    "revision": "edece33eb6f1056510ecc5ed873358cc"
  },
  {
    "url": "Game/FEZ/X. Theorem/HMM.html",
    "revision": "8b7bddabe9e91f5aee292a3f35a78457"
  },
  {
    "url": "hello-vuejcblog.html",
    "revision": "6b32cabfd21dc429f5b491da586b0e49"
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
    "revision": "5d3cc17555fce90897676723ad97b758"
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
    "revision": "ac92bd00671255d65721a81c92eb9a60"
  },
  {
    "url": "tag/index.html",
    "revision": "9704545633df5d78455e592c6de9831c"
  },
  {
    "url": "VueJCBlog/Development/article/hello-vuejcblog.html",
    "revision": "3d4a67e8cae9270771e528e66a737a80"
  },
  {
    "url": "VueJCBlog/Development/article/test/test-comment.html",
    "revision": "e44955afcbbf1775bd33ea5f21a1b0e8"
  },
  {
    "url": "VueJCBlog/Development/article/test/test-lazy-load.html",
    "revision": "6b91d9b7ca630189353ed82762606dbe"
  },
  {
    "url": "VueJCBlog/Development/article/test/test-lazy-load2.html",
    "revision": "c246551d9dd3d52c1f4176189a0ca756"
  },
  {
    "url": "VueJCBlog/Feature/about-page.html",
    "revision": "33a4e4f2074a0adc222a627cf147bb08"
  },
  {
    "url": "VueJCBlog/Feature/archive-page.html",
    "revision": "158fc4d41e0a22ba5fc41d9e53289345"
  },
  {
    "url": "VueJCBlog/Feature/category-page.html",
    "revision": "46c2c8d5fe5b12cd095414d9ec37ca14"
  },
  {
    "url": "VueJCBlog/Feature/common-feature.html",
    "revision": "fa3dd5ab1cc0b411a1836d64ba3a3843"
  },
  {
    "url": "VueJCBlog/Feature/index-page.html",
    "revision": "5c9bce28602daa4a82d73eb83dc8cc66"
  },
  {
    "url": "VueJCBlog/Feature/index.html",
    "revision": "5c3a2bacb87a1dafb65e4908b48cfffd"
  },
  {
    "url": "VueJCBlog/Feature/post-page.html",
    "revision": "8d0f3d18c7116a83312a55c69ef73655"
  },
  {
    "url": "VueJCBlog/Feature/search-page.html",
    "revision": "5b8b33badd30452037d0217a730faeb8"
  },
  {
    "url": "VueJCBlog/Feature/sidebar-feature.html",
    "revision": "213ee569541a207722fc4150ce62dda8"
  },
  {
    "url": "VueJCBlog/Feature/tag-page.html",
    "revision": "56a601133ae355298a506d14d4adf7ec"
  },
  {
    "url": "VueJCBlog/index.html",
    "revision": "dc6b2f9b77b4f0728302be462011637e"
  },
  {
    "url": "VueJCBlog/Installation.html",
    "revision": "9c6ad407a00477f6c7006ffaf80160d4"
  },
  {
    "url": "VueJCBlog/Quick-Start.html",
    "revision": "0c08bd78ef7ffb9977b90b433bc3940e"
  },
  {
    "url": "VueJCBlog/Usage/Container/index.html",
    "revision": "76a8278ea9f0ca7d33529d9415f1c0ee"
  },
  {
    "url": "VueJCBlog/Usage/front-matter.html",
    "revision": "8133e810381812e4a8cb9f70c8d85677"
  },
  {
    "url": "VueJCBlog/Usage/index.html",
    "revision": "c787d0ddb60e0819a1740f987f9b75dd"
  },
  {
    "url": "VueJCBlog/Usage/Markdown/advanced.html",
    "revision": "46b28e72e90c198cf3dc9b9a8ab041c0"
  },
  {
    "url": "VueJCBlog/Usage/Markdown/basic.html",
    "revision": "8a9e186dd6a13c6e9add2e88b461a34f"
  },
  {
    "url": "VueJCBlog/Usage/Markdown/flow-chart.html",
    "revision": "24a2710be7e451bb41de86836132335f"
  },
  {
    "url": "VueJCBlog/Usage/Markdown/index.html",
    "revision": "84c69f5755ddf3d2dd058d6eb6e44ed0"
  },
  {
    "url": "VueJCBlog/Usage/Markdown/link.html",
    "revision": "e598a233a06b4e962cb1cd13f4c64922"
  },
  {
    "url": "VueJCBlog/Usage/Slide.html",
    "revision": "d3fc9ad92d7ac9d1cca371d6ae1072f5"
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
