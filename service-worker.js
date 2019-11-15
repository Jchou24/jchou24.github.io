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
    "revision": "06a3f1f3265d36c52bac834856f6c68d"
  },
  {
    "url": "About/index.html",
    "revision": "dbbd85a766bb37351ed5b7fa58587f87"
  },
  {
    "url": "archive/index.html",
    "revision": "dde2a3bdff4d664e2e371e08cb266aec"
  },
  {
    "url": "assets/css/0.styles.80173621.css",
    "revision": "620cb3b4798e7ece685a212b848c4900"
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
    "url": "assets/js/1.ce681c44.js",
    "revision": "3d81a3760a383e2c6a81673073449851"
  },
  {
    "url": "assets/js/2.3deaf0cf.js",
    "revision": "e7aa672b8b93acde53d9eeca0fb6fd87"
  },
  {
    "url": "assets/js/3.afc45633.js",
    "revision": "d10c7f35ca0b6b997b85b2c758e6b188"
  },
  {
    "url": "assets/js/5.5643127b.js",
    "revision": "a45f673569a642aa6c54b1e9f940e80a"
  },
  {
    "url": "assets/js/6.9ec8bbf1.js",
    "revision": "5ec59a4967f431076597a05292a4f892"
  },
  {
    "url": "assets/js/73.04c66de0.js",
    "revision": "ab4f3cdfec0aab7e269c18178feae5ae"
  },
  {
    "url": "assets/js/74.38d2b446.js",
    "revision": "0ed6491672714b8736a5512da88efeb3"
  },
  {
    "url": "assets/js/75.44687274.js",
    "revision": "8ef112aa705b24ae3b87803e35d0fec0"
  },
  {
    "url": "assets/js/76.3f372149.js",
    "revision": "0c403daa2cc31f95958eed19088aa80b"
  },
  {
    "url": "assets/js/77.94e8ee3a.js",
    "revision": "7c2098b02b526d874080ccd53cf0184a"
  },
  {
    "url": "assets/js/78.a307b1e6.js",
    "revision": "8df3d43a0d66881d7b73587383343958"
  },
  {
    "url": "assets/js/79.c166788f.js",
    "revision": "fc6d0e4d5a288e3fa11f1faeec7eccd3"
  },
  {
    "url": "assets/js/80.900a0858.js",
    "revision": "1abd34e5f70a291b4f1858ccbe493b1b"
  },
  {
    "url": "assets/js/81.c4715bf4.js",
    "revision": "34252d494b73acf264f20b4b682cfd05"
  },
  {
    "url": "assets/js/82.fde11470.js",
    "revision": "1938f6d7480d1f2b9a312e26e1aabc6c"
  },
  {
    "url": "assets/js/83.50444977.js",
    "revision": "e61392ad4dfb1ef3b9c102b15a1f5fa2"
  },
  {
    "url": "assets/js/84.57aeb4a0.js",
    "revision": "72298596322fe8699f3b6f002fb4b6d0"
  },
  {
    "url": "assets/js/85.ca14174f.js",
    "revision": "c7c5f42f01291a9394cac545674d3dd1"
  },
  {
    "url": "assets/js/86.fea1e6ee.js",
    "revision": "362608b9596cef5cf26dec3e3ed498eb"
  },
  {
    "url": "assets/js/87.b076d0f9.js",
    "revision": "84cf6cd43669cdf7d242816f83595f26"
  },
  {
    "url": "assets/js/88.a3f60a22.js",
    "revision": "db1265d153a0ef847688ec4047490e0b"
  },
  {
    "url": "assets/js/89.c6261d62.js",
    "revision": "95627c28b8dcbbe5be88dc0d50137f03"
  },
  {
    "url": "assets/js/90.2767dea0.js",
    "revision": "6dc58868940702da0e5a0047a154f601"
  },
  {
    "url": "assets/js/91.3781fff8.js",
    "revision": "7eb5cb54b7679d8e65c3ab2c26ee620a"
  },
  {
    "url": "assets/js/92.e361f450.js",
    "revision": "0f1dc1eeefd320ca5a1f2d6cf286db3a"
  },
  {
    "url": "assets/js/93.54cb3f26.js",
    "revision": "99033fe926996ee48c19404475355340"
  },
  {
    "url": "assets/js/94.5459a42e.js",
    "revision": "191d77811cda40382f092429b1d47f7d"
  },
  {
    "url": "assets/js/app.2187a221.js",
    "revision": "f298b274da142f20363f23a42d73f527"
  },
  {
    "url": "assets/js/layout-BaseLayout.0d9f7e4e.js",
    "revision": "31e4f752c566b6cd2de2c967664a03dd"
  },
  {
    "url": "assets/js/layout-BaseLayout~layout-Layout.43788849.js",
    "revision": "ab54310021bfe9c4d300a56e61f9cd47"
  },
  {
    "url": "assets/js/layout-Layout.630f3ef5.js",
    "revision": "39bd0c2a9542c50f5ef0666dc3a103cf"
  },
  {
    "url": "assets/js/layout-NotFound.94ba372c.js",
    "revision": "f21d9fdc2aed013872203ee946c3cf40"
  },
  {
    "url": "assets/js/page-01b1365c.bdb72ae4.js",
    "revision": "fad54abbb3629f0d026d007522b9fcb6"
  },
  {
    "url": "assets/js/page-03ff99e4.a3919a19.js",
    "revision": "45fc48900ae750293a9f264c53c3eee1"
  },
  {
    "url": "assets/js/page-0762cb2c.6396e809.js",
    "revision": "be84189bdca6535ce61fcf265e4dedb1"
  },
  {
    "url": "assets/js/page-0815fe43.de03ce0b.js",
    "revision": "ed5dd6e3e2ad67c481eb0b32aa8890d5"
  },
  {
    "url": "assets/js/page-0994254e.905dd45c.js",
    "revision": "d854f4718c43cc21ddc7c5db7194d43c"
  },
  {
    "url": "assets/js/page-09cfa20f.82027472.js",
    "revision": "aa04296d5fe5747621ce3b68a3c24e31"
  },
  {
    "url": "assets/js/page-0bd5cd98.8e1ec620.js",
    "revision": "47d3fec206e416116a0f799cd7ffbf85"
  },
  {
    "url": "assets/js/page-0ca8b05c.8036b528.js",
    "revision": "bca7bd4a9d1cc3e209aa1c344016d93d"
  },
  {
    "url": "assets/js/page-130de14f.8a6a62a9.js",
    "revision": "ff3b8073b50162a38cfe44068fac13e6"
  },
  {
    "url": "assets/js/page-17916170.af261c9b.js",
    "revision": "0c4fd7fc06f82b1e8e5d12ba423f1e2e"
  },
  {
    "url": "assets/js/page-1efb5c62.7c9ae0a8.js",
    "revision": "9a2d8166da139653bf0d951bc150a8ff"
  },
  {
    "url": "assets/js/page-2282a6e0.2c8f21b0.js",
    "revision": "f98448d6fd32ad417c0fea077294695e"
  },
  {
    "url": "assets/js/page-2ba07fce.95da3da3.js",
    "revision": "7154aceee7b5a718ca717fffba682bd6"
  },
  {
    "url": "assets/js/page-2da25f49.d5a93748.js",
    "revision": "06334573889f1d2356429fd62d23fe34"
  },
  {
    "url": "assets/js/page-2f77601c.de0f4214.js",
    "revision": "ea7cf183ae9ac37ad404bf0113e6ddab"
  },
  {
    "url": "assets/js/page-36058925.62f38786.js",
    "revision": "4f4eea8975f4de597b3182e58b19d27a"
  },
  {
    "url": "assets/js/page-3721e5cf.7c6a9ab4.js",
    "revision": "5c9d2d48d0262983a8e914613c471637"
  },
  {
    "url": "assets/js/page-38e94d3e.553343f2.js",
    "revision": "22c4db8c16e6fd67e0208a16873dd198"
  },
  {
    "url": "assets/js/page-39d006b5.43deb79c.js",
    "revision": "ab57ef159a5ba12ec0bbff4c08fe3189"
  },
  {
    "url": "assets/js/page-3b1778e4.240f186d.js",
    "revision": "45e82f1f664b32f448d7b2dfca4c57a6"
  },
  {
    "url": "assets/js/page-4048f79b.15e74ff6.js",
    "revision": "9ade87d2e45755da8f12383fd39eeb24"
  },
  {
    "url": "assets/js/page-409d673b.ef2cd811.js",
    "revision": "f89551d088b80cecf03ce3f1987d397c"
  },
  {
    "url": "assets/js/page-42a0ea7c.1d007813.js",
    "revision": "b4c4e4e6c38f750a8ffa7d7733ff5407"
  },
  {
    "url": "assets/js/page-437f73dc.fc54413c.js",
    "revision": "6d8b8a10c9cf1144842ff8415afbac6b"
  },
  {
    "url": "assets/js/page-4773a0fc.af1b4319.js",
    "revision": "bc08683d15b447715e8d899781664eff"
  },
  {
    "url": "assets/js/page-47ec31ef.b0a171ad.js",
    "revision": "d2d4d3e751f20d2e4f9f6227ed75115f"
  },
  {
    "url": "assets/js/page-494b7749.448837ee.js",
    "revision": "8ed8053c157c7070ba4cf9541c8ec632"
  },
  {
    "url": "assets/js/page-4e40ef0e.f5fd8c9a.js",
    "revision": "867dbdc61304520e0392c1edfae805dd"
  },
  {
    "url": "assets/js/page-4f5eb00c.fcf0d43a.js",
    "revision": "fffa98acfad700a37795158c1b4f3204"
  },
  {
    "url": "assets/js/page-52453899.5f3518f8.js",
    "revision": "e112c1ddbcc1ca63948a4c25f5aab3ed"
  },
  {
    "url": "assets/js/page-53a21bc2.205948f2.js",
    "revision": "ca2368bc4644e05654285926b20c82b7"
  },
  {
    "url": "assets/js/page-548dbfdd.1da161cc.js",
    "revision": "6f8698d2af21573fbf4b88f91c2e6e07"
  },
  {
    "url": "assets/js/page-54cde949.4dff9825.js",
    "revision": "c6fdb6915e0b58749f94c425afd52298"
  },
  {
    "url": "assets/js/page-56c5add8.98376d10.js",
    "revision": "9531cf6d97b178d069db4f52965bb55a"
  },
  {
    "url": "assets/js/page-5971d062.f0c52c25.js",
    "revision": "9f74f1c39862ac88388f495405d99144"
  },
  {
    "url": "assets/js/page-5ae76184.125c9d01.js",
    "revision": "1ee4c8e25809ebf0bb21d0ab7ddf8352"
  },
  {
    "url": "assets/js/page-5c24028f.6c95e4c1.js",
    "revision": "30a1423663cd1ae329f69a9e1ded8503"
  },
  {
    "url": "assets/js/page-5dade32f.38e494f7.js",
    "revision": "332bf31d948004f4c128bad44ff14644"
  },
  {
    "url": "assets/js/page-62c3f84a.c9acc03e.js",
    "revision": "e5323322f32b0e6407d1ae1fe8532a0d"
  },
  {
    "url": "assets/js/page-631831dc.5ff1d646.js",
    "revision": "e8ab8c8324efe7e368c5b413a81e4abc"
  },
  {
    "url": "assets/js/page-64c6c3f9.87d03231.js",
    "revision": "df36b0eca22eaeb0ae2bf900b8a84fb2"
  },
  {
    "url": "assets/js/page-68a3e126.a0c69d7f.js",
    "revision": "ec4e88d04e86b9365e8d9ee482677dc7"
  },
  {
    "url": "assets/js/page-718e3f13.d527cac4.js",
    "revision": "398730718bb59aea26936b946ca7c9b2"
  },
  {
    "url": "assets/js/page-7961fc62.edc8c30c.js",
    "revision": "8637c3ade3f2f1d6f8a2b088d5b79381"
  },
  {
    "url": "assets/js/page-7e22c02f.36b5b080.js",
    "revision": "d2c79f06a8542ac9664b243f645bdbca"
  },
  {
    "url": "assets/js/page-7f4c69e4.48670d7b.js",
    "revision": "76871ad17230fc779f5bbebdfe8965a4"
  },
  {
    "url": "assets/js/page-9a13860a.72b04c8a.js",
    "revision": "2616fa9505d8e1b9b9960d056138adc5"
  },
  {
    "url": "assets/js/page-9d704b70.123ada36.js",
    "revision": "79a44095c77bd4fe06607b9364263dd3"
  },
  {
    "url": "assets/js/page-a1c83fc6.7b1b2046.js",
    "revision": "0cd757d4deab5f763c656a753ac54d19"
  },
  {
    "url": "assets/js/page-a649c29e.0c36555d.js",
    "revision": "11100c46ea9c463fa1e1b417b2d9c668"
  },
  {
    "url": "assets/js/page-b6123e24.c00fb84d.js",
    "revision": "f4dbe527e5a7cf5911b0a54bd6bb852f"
  },
  {
    "url": "assets/js/page-c1e7a5fc.aec0a176.js",
    "revision": "e49facfa1fe5eada073f671ee51b8c3e"
  },
  {
    "url": "assets/js/page-c41b383a.aeeb0dc4.js",
    "revision": "55e757ba630a27e08c1bbce751b27d33"
  },
  {
    "url": "assets/js/page-c799e3a4.41987749.js",
    "revision": "e73a20c154bf5ff6166ef76b9a7cf6ff"
  },
  {
    "url": "assets/js/page-cd03364e.f3324221.js",
    "revision": "8974db61953e73b247a5336d60b95bfa"
  },
  {
    "url": "assets/js/page-deb70f94.20a9adb4.js",
    "revision": "90c08ead4788c2a200ef86953c935541"
  },
  {
    "url": "assets/js/page-e63bef64.1df49564.js",
    "revision": "956c9e698478d323493b6eef5cf28a5f"
  },
  {
    "url": "assets/js/page-e869018c.5ed50782.js",
    "revision": "1ea7bbf99ea58e29be6f616f8398faa5"
  },
  {
    "url": "assets/js/page-e87fecf8.26a9b3f9.js",
    "revision": "5fd40b15cc900043130f6a1f03cbf174"
  },
  {
    "url": "assets/js/page-fa2e9ecc.19ce9960.js",
    "revision": "ccbab45efb43f5e7f0a451da08b7fe25"
  },
  {
    "url": "assets/js/vendors~flowchart.6827768a.js",
    "revision": "628c7250629bafeec66acb4d4f4c918a"
  },
  {
    "url": "assets/js/vendors~layout-Layout.d71d504f.js",
    "revision": "c8428ab650950a6173fa266dcb419a08"
  },
  {
    "url": "category/index.html",
    "revision": "7783c3d6c7cede58e5b258f2b6194eb3"
  },
  {
    "url": "Coding/Front-End/CSS/awesome-css.html",
    "revision": "53b6fc8fc8b48be7e5ea14d54dd7909b"
  },
  {
    "url": "Coding/Front-End/CSS/awesome-icons.html",
    "revision": "b7dc01e16a2dd5638f8df4635400fb15"
  },
  {
    "url": "Coding/Front-End/JS/Module Bundler/Webpack/awesome-webpack.html",
    "revision": "754b99db0755a488e0c830d74c9d6b2b"
  },
  {
    "url": "Coding/Front-End/JS/Vue/awesome-vue.html",
    "revision": "1deccecdcc9865bbff96daa8015992ed"
  },
  {
    "url": "Coding/日常筆記/CodeReview/code-review-memo.html",
    "revision": "f6aea43c6b5958344550a6e7f5b1a7d9"
  },
  {
    "url": "Coding/日常筆記/CSharp/AutoMapper-class繼承後之對應.html",
    "revision": "107c1fa617e25d092274d9964a344101"
  },
  {
    "url": "Coding/日常筆記/CSharp/String-Concatenate.html",
    "revision": "1d39535e32efca02935bf73aca5c657f"
  },
  {
    "url": "Coding/日常筆記/CSharp/tmp.html",
    "revision": "f2915299e84fb551e31e2e91a99c4c2c"
  },
  {
    "url": "Coding/日常筆記/CSharp/變數命名.html",
    "revision": "eb99eb81c45e49527580cf1be6e56884"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/1. 心/index.html",
    "revision": "4f2368d3939fd6b2bd50a0885eff3a5d"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/1. 心/TMP.html",
    "revision": "002d848d65b77873a1565b0bdafc3e49"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/1. 心/心理戰.html",
    "revision": "a69851947673be5a588bbbb2ccb13a55"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/2. 技/index.html",
    "revision": "306a9afa8392f55fc3267e411e960ba9"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/2. 技/神小跳.html",
    "revision": "ed086bf28385a8bf3c78b1cead0d582c"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/2. 技/視野變換.html",
    "revision": "639782e3a16601bded3855b9e78692a9"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/2. 技/走位.html",
    "revision": "f3c5c96f5240b52c601194cef91c5bfe"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/2. 技/跳點.html",
    "revision": "b91fa61e714480b1489555f1fe41e90e"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/2. 技/預出手.html",
    "revision": "16cbd85110f7ee2706e7dd237e74851c"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/3. 體/index.html",
    "revision": "9e38c054b27806c8f5608b4b4e98bf0c"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/4. 群/index.html",
    "revision": "23d91acf5a2c3185431a17141f2934eb"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/4. 群/卡位.html",
    "revision": "3bd0795f6b974ad432a7cacfac680b54"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/4. 群/組隊.html",
    "revision": "358e6dfb2d89955f7a792700bb1e24d3"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/5. 略/index.html",
    "revision": "2481eaeb34ac59bdc0182b28fdba66e4"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/5. 略/局勢.html",
    "revision": "09de3a01319ddfd9bae30b9068eb2e00"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/6. 決/index.html",
    "revision": "dc717733c034f319d441c9a2594d6a4b"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/index.html",
    "revision": "5293e7bb09d11c65426d51583a140e21"
  },
  {
    "url": "Game/FEZ/2. 國戰步兵戰策略/index.html",
    "revision": "c484803db4efd031b38957b85d053c9a"
  },
  {
    "url": "Game/FEZ/3. 各職玩法/刀.html",
    "revision": "77afed7d96c18b4f1bd76a97784046b4"
  },
  {
    "url": "Game/FEZ/3. 各職玩法/雙修.html",
    "revision": "ff89acc59d27f5f5c6d26c9ce15b913d"
  },
  {
    "url": "Game/FEZ/4. 2on/index.html",
    "revision": "6e0d72cb5a9b5ff245b0025be73db4aa"
  },
  {
    "url": "Game/FEZ/5. 3on/index.html",
    "revision": "b6fec4d571e65d8dc60b051f4661ec8c"
  },
  {
    "url": "Game/FEZ/X. Theorem/HMM.html",
    "revision": "bdc485f3b919178e2005e100ce3395af"
  },
  {
    "url": "hello-vuejcblog.html",
    "revision": "857fc436087b9e30818120f74398c2c7"
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
    "revision": "7bfd9f00e3402c6a83400f00e8ed5018"
  },
  {
    "url": "search/index.html",
    "revision": "71651c3d1f43bf597938d3fbf6f17b83"
  },
  {
    "url": "tag/index.html",
    "revision": "35b1e257c3aaf1ba45cbc5183382de20"
  },
  {
    "url": "VueJCBlog/Development/article/hello-vuejcblog.html",
    "revision": "e8652725d757e28fb55468f7f5ff601d"
  },
  {
    "url": "VueJCBlog/Development/article/test/test-comment.html",
    "revision": "7dae84571cff4d5876ae3484f36b1d39"
  },
  {
    "url": "VueJCBlog/Development/article/test/test-lazy-load.html",
    "revision": "e8da8259b1686db9fa65b0a7f99f0e5e"
  },
  {
    "url": "VueJCBlog/Development/article/test/test-lazy-load2.html",
    "revision": "f933cdb390f951ce09a9e3c3cedf24bf"
  },
  {
    "url": "VueJCBlog/Feature/about-page.html",
    "revision": "1373dd7eb6933e7bb3e0839e97e1d439"
  },
  {
    "url": "VueJCBlog/Feature/archive-page.html",
    "revision": "528b76c01bb4238e9356293bad251031"
  },
  {
    "url": "VueJCBlog/Feature/category-page.html",
    "revision": "f2909bbef3d78147e81706d16b0bb615"
  },
  {
    "url": "VueJCBlog/Feature/common-feature.html",
    "revision": "ae328bf3d71242a54ce94f7f8d7bcc1d"
  },
  {
    "url": "VueJCBlog/Feature/index-page.html",
    "revision": "b43c8ee639a1532f03fb3b77b1be1188"
  },
  {
    "url": "VueJCBlog/Feature/index.html",
    "revision": "4b3db0e16fea4ff9cf289edebefe12d8"
  },
  {
    "url": "VueJCBlog/Feature/post-page.html",
    "revision": "155c842b04bc45b203e0be9b732584b4"
  },
  {
    "url": "VueJCBlog/Feature/search-page.html",
    "revision": "5ff73e6cf9913bf1f9d53d5d30452c57"
  },
  {
    "url": "VueJCBlog/Feature/sidebar-feature.html",
    "revision": "e1bd65a0ff07b1473ecc6879c4eb7a9e"
  },
  {
    "url": "VueJCBlog/Feature/tag-page.html",
    "revision": "6f59477829f9b0ef2b680a80d0c4dc52"
  },
  {
    "url": "VueJCBlog/index.html",
    "revision": "c994001b18ce5461f97d91c51ff8f5b4"
  },
  {
    "url": "VueJCBlog/Installation.html",
    "revision": "628cfe70979bcf5640d5950f97237ce5"
  },
  {
    "url": "VueJCBlog/Quick-Start.html",
    "revision": "680e4ce6b789b8eb540245abef6e8885"
  },
  {
    "url": "VueJCBlog/Usage/Container/index.html",
    "revision": "abe1894da360a1ff50aacfd50ce4557e"
  },
  {
    "url": "VueJCBlog/Usage/front-matter.html",
    "revision": "20cc02c8286dc0bfa1547b4c3be504f3"
  },
  {
    "url": "VueJCBlog/Usage/index.html",
    "revision": "1e8a99551aa6f44aaae56bddd0363fdd"
  },
  {
    "url": "VueJCBlog/Usage/Markdown/advanced.html",
    "revision": "dd120480ba9a61c97408ca3909f413eb"
  },
  {
    "url": "VueJCBlog/Usage/Markdown/basic.html",
    "revision": "c03e950b6c7bc23766407d8fc16e6f5d"
  },
  {
    "url": "VueJCBlog/Usage/Markdown/flow-chart.html",
    "revision": "1cb1aaf810cf7cbe75877303f6c1ef51"
  },
  {
    "url": "VueJCBlog/Usage/Markdown/index.html",
    "revision": "fffa733baf17714446c71e82d2876ebe"
  },
  {
    "url": "VueJCBlog/Usage/Markdown/link.html",
    "revision": "1edfcf8df9fe8696b14fd6840aca012f"
  },
  {
    "url": "VueJCBlog/Usage/Slide.html",
    "revision": "d4348d7dc7c1f1e40316724672308337"
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
