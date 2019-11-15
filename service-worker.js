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
    "revision": "3986a4f5b69dceb750c2407361bfec1b"
  },
  {
    "url": "About/index.html",
    "revision": "0b348d6c11c95f2d2389a39165b2ef6e"
  },
  {
    "url": "archive/index.html",
    "revision": "9bc46aeb2b6c6fac2fc8b86f9e1b60e1"
  },
  {
    "url": "assets/css/0.styles.eb79e386.css",
    "revision": "cfe7f11eee9fdb7714d544d7cdfabfd2"
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
    "url": "assets/js/76.e745e44b.js",
    "revision": "91f4d901ff529bcb708a04898cf230f4"
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
    "url": "assets/js/79.8b0496b9.js",
    "revision": "321e1cd3aa3b231cc616c914622fc0f6"
  },
  {
    "url": "assets/js/80.900a0858.js",
    "revision": "1abd34e5f70a291b4f1858ccbe493b1b"
  },
  {
    "url": "assets/js/81.d944ccb6.js",
    "revision": "5b833f7f82a06afad5129a7d82050085"
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
    "url": "assets/js/84.948e4b45.js",
    "revision": "668b48b9c1274557d53f0d0e2e85cbe1"
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
    "url": "assets/js/app.8635f205.js",
    "revision": "a9b1054aff45c012e37a2107af721bfd"
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
    "url": "assets/js/page-0762cb2c.0f6a8305.js",
    "revision": "b2d27d597b36e4427630e0d26bff25f3"
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
    "url": "assets/js/page-09cfa20f.495ec0af.js",
    "revision": "955d8820a666e7f615c5612e4c7e3c1b"
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
    "url": "assets/js/page-130de14f.361b8975.js",
    "revision": "212d629a0b134aa3884f700695f311ca"
  },
  {
    "url": "assets/js/page-17916170.dcbc07c9.js",
    "revision": "766af0153fcb0eee0eb08f75e6f1493a"
  },
  {
    "url": "assets/js/page-1efb5c62.88d3b7d4.js",
    "revision": "23e741ed13e7c66da6942e932e049045"
  },
  {
    "url": "assets/js/page-2282a6e0.2c8f21b0.js",
    "revision": "f98448d6fd32ad417c0fea077294695e"
  },
  {
    "url": "assets/js/page-2ba07fce.7e9e7e9f.js",
    "revision": "737fe4a04777813150139b465ac6b98f"
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
    "url": "assets/js/page-36058925.07250ec1.js",
    "revision": "ed9a3fe301359332f9221843e2cf639f"
  },
  {
    "url": "assets/js/page-3721e5cf.7c6a9ab4.js",
    "revision": "5c9d2d48d0262983a8e914613c471637"
  },
  {
    "url": "assets/js/page-38e94d3e.f730a681.js",
    "revision": "47811966e197e012924608a7fb15f2fb"
  },
  {
    "url": "assets/js/page-39d006b5.43deb79c.js",
    "revision": "ab57ef159a5ba12ec0bbff4c08fe3189"
  },
  {
    "url": "assets/js/page-3b1778e4.0176e0dc.js",
    "revision": "be675e501037865ae1d84c70aa705326"
  },
  {
    "url": "assets/js/page-4048f79b.15e74ff6.js",
    "revision": "9ade87d2e45755da8f12383fd39eeb24"
  },
  {
    "url": "assets/js/page-409d673b.f6b37287.js",
    "revision": "63d93772302a9ed01a78c59eb766b1df"
  },
  {
    "url": "assets/js/page-42a0ea7c.1d007813.js",
    "revision": "b4c4e4e6c38f750a8ffa7d7733ff5407"
  },
  {
    "url": "assets/js/page-437f73dc.6abc0e1b.js",
    "revision": "31268e60e3c1f3f7d03b3e1d34ea0661"
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
    "url": "assets/js/page-4f5eb00c.b57b6d4f.js",
    "revision": "fc6d5923e5c57fee1217180f640f60eb"
  },
  {
    "url": "assets/js/page-52453899.5f3518f8.js",
    "revision": "e112c1ddbcc1ca63948a4c25f5aab3ed"
  },
  {
    "url": "assets/js/page-53a21bc2.2950dabc.js",
    "revision": "1caa2fd8b4fc0044549f55ca77028112"
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
    "url": "assets/js/page-5971d062.038187b6.js",
    "revision": "2f5af363356a0a75eb95aa01523d2cf0"
  },
  {
    "url": "assets/js/page-5ae76184.deef24c0.js",
    "revision": "d7f88335a2a1f9a882419a6cb8bd9428"
  },
  {
    "url": "assets/js/page-5c24028f.6c95e4c1.js",
    "revision": "30a1423663cd1ae329f69a9e1ded8503"
  },
  {
    "url": "assets/js/page-5dade32f.252eb149.js",
    "revision": "9e1312a57b6f06c2cfbe75a90e2b5edf"
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
    "url": "assets/js/page-64c6c3f9.a0ac123c.js",
    "revision": "fa5dbad10f427ce26321c730218714ce"
  },
  {
    "url": "assets/js/page-68a3e126.a0c69d7f.js",
    "revision": "ec4e88d04e86b9365e8d9ee482677dc7"
  },
  {
    "url": "assets/js/page-718e3f13.fceb2a7a.js",
    "revision": "1b01cd49072701a91054a827f516a435"
  },
  {
    "url": "assets/js/page-7961fc62.41090e9c.js",
    "revision": "3c5913fc130763125c6fe4502d308fd8"
  },
  {
    "url": "assets/js/page-7e22c02f.36b5b080.js",
    "revision": "d2c79f06a8542ac9664b243f645bdbca"
  },
  {
    "url": "assets/js/page-7f4c69e4.30138080.js",
    "revision": "49d180c6712f09b23ea59e79bb56b41a"
  },
  {
    "url": "assets/js/page-9a13860a.0f8cab91.js",
    "revision": "8286dfb4a00fd9753287a0f558f65de5"
  },
  {
    "url": "assets/js/page-9d704b70.ac904e86.js",
    "revision": "719e365c2f5b6d90fd496e5ecd404a55"
  },
  {
    "url": "assets/js/page-a1c83fc6.a92ba77b.js",
    "revision": "d22c40da5171f027a7a7773e856e5d56"
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
    "url": "assets/js/page-c799e3a4.6c78c1b2.js",
    "revision": "060822fc7a9405f0a28ba74788f71b98"
  },
  {
    "url": "assets/js/page-cd03364e.f3324221.js",
    "revision": "8974db61953e73b247a5336d60b95bfa"
  },
  {
    "url": "assets/js/page-deb70f94.988a18d9.js",
    "revision": "1d4b616eaa45ba4f3711182c7b7b8363"
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
    "url": "assets/js/page-e87fecf8.c3a0a9af.js",
    "revision": "eaec8c7f1ac505355413da84cf821623"
  },
  {
    "url": "assets/js/page-fa2e9ecc.6f669e4f.js",
    "revision": "2658f7336b5ff734c535b920e5bfe428"
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
    "revision": "7da4ebbf8d5f8e22f63207a29513163c"
  },
  {
    "url": "Coding/Front-End/CSS/awesome-css.html",
    "revision": "d41d57d288ef23fd0e12d2aff2ccdf63"
  },
  {
    "url": "Coding/Front-End/CSS/awesome-icons.html",
    "revision": "b74677533d9ac6341819da82d9da95c7"
  },
  {
    "url": "Coding/Front-End/JS/Module Bundler/Webpack/awesome-webpack.html",
    "revision": "6c790f867629e0234cb7004bf7fd70c3"
  },
  {
    "url": "Coding/Front-End/JS/Vue/awesome-vue.html",
    "revision": "1ed89e7e31531fb4f1b130e48a372fcd"
  },
  {
    "url": "Coding/日常筆記/CodeReview/code-review-memo.html",
    "revision": "5dca6b5b0ef31bd4ffc1a93a6d82a2c9"
  },
  {
    "url": "Coding/日常筆記/CSharp/AutoMapper-class繼承後之對應.html",
    "revision": "5709c0001ebbd63bb97a47573a8df806"
  },
  {
    "url": "Coding/日常筆記/CSharp/String-Concatenate.html",
    "revision": "58a7312e2cde80c7fb127e608036f9b9"
  },
  {
    "url": "Coding/日常筆記/CSharp/tmp.html",
    "revision": "9d8e2bbfa2aa02cfa3f51e0f8fe4d415"
  },
  {
    "url": "Coding/日常筆記/CSharp/變數命名.html",
    "revision": "7f071cd56645872593f1c3d91d1f56da"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/1. 心/index.html",
    "revision": "95ac8456b8c772ad1af209cc20c039ba"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/1. 心/TMP.html",
    "revision": "ea60e4dc9cd16c8d9a9a5fa9b6b60770"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/1. 心/心理戰.html",
    "revision": "9603cbbbc40d5c844240bd5c515367f3"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/2. 技/index.html",
    "revision": "57f151349c352d1c92ab4338f465ff60"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/2. 技/神小跳.html",
    "revision": "9a5f90b9abece2440a5f4f6219996404"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/2. 技/視野變換.html",
    "revision": "def3a9d6eab931e467c262896d842fc7"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/2. 技/走位.html",
    "revision": "b0a04128dc44a69287e2f11edd701293"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/2. 技/跳點.html",
    "revision": "a57c812d6d501e5c284f4202c47ca5b7"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/2. 技/預出手.html",
    "revision": "42ee95acb7f3059351e848704c30a6d8"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/3. 體/index.html",
    "revision": "48f175aff35b7b645b746b6ffc6be119"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/4. 群/index.html",
    "revision": "7b6f16e70d1bb11ad7b953a2f6348486"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/4. 群/卡位.html",
    "revision": "fde19354edfb4c357b98107b6853c634"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/4. 群/組隊.html",
    "revision": "16e66adaa466bda3a5b26cc78f526d49"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/5. 略/index.html",
    "revision": "8646c6ca004ba782b6ad3200dd6dc402"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/5. 略/局勢.html",
    "revision": "f4ba6379fd7503f6532048312fa0b0cf"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/6. 決/index.html",
    "revision": "e6a98b6d801cddf78dcc6bce0348bf36"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/index.html",
    "revision": "05a6a4b20536bf50d9131f054de6152b"
  },
  {
    "url": "Game/FEZ/2. 國戰步兵戰策略/index.html",
    "revision": "9e04b01c5e677c0e107d065ee7bf400c"
  },
  {
    "url": "Game/FEZ/3. 各職玩法/刀.html",
    "revision": "9780cd3c90292b67549e761f415318c5"
  },
  {
    "url": "Game/FEZ/3. 各職玩法/雙修.html",
    "revision": "bc4fc7687e18a49a7a6e2ed926664159"
  },
  {
    "url": "Game/FEZ/4. 2on/index.html",
    "revision": "c698a43ae980ab65fc69aa9e41f74a0a"
  },
  {
    "url": "Game/FEZ/5. 3on/index.html",
    "revision": "444cf69e7bd4882fdd1adc11f917cd03"
  },
  {
    "url": "Game/FEZ/X. Theorem/HMM.html",
    "revision": "f75a21f2a2bf319a5bf644a0a60b9b37"
  },
  {
    "url": "hello-vuejcblog.html",
    "revision": "d10b28b312d60d59d6f5e58afbe66d99"
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
    "revision": "f74cd49101970ccc30f06e5945af921f"
  },
  {
    "url": "search/index.html",
    "revision": "0a427fb3dde53a323499324a0f41a5e8"
  },
  {
    "url": "tag/index.html",
    "revision": "c9396932e92e45e2db686041460a9763"
  },
  {
    "url": "VueJCBlog/Development/article/hello-vuejcblog.html",
    "revision": "f9dddaccac7d485301b62b2895babe6a"
  },
  {
    "url": "VueJCBlog/Development/article/test/test-comment.html",
    "revision": "a52d1f7c48b47feca11224e22aa7aaed"
  },
  {
    "url": "VueJCBlog/Development/article/test/test-lazy-load.html",
    "revision": "9f6fca5493bd819eb1b2724ae450ca52"
  },
  {
    "url": "VueJCBlog/Development/article/test/test-lazy-load2.html",
    "revision": "f6c26f4827d1122b0440ca8df2cb047e"
  },
  {
    "url": "VueJCBlog/Feature/about-page.html",
    "revision": "f3ebdf7bc50a5b6e144bc4e0b78937e9"
  },
  {
    "url": "VueJCBlog/Feature/archive-page.html",
    "revision": "ba3f6d7c7fa49ff1fa909e05e8f4f29f"
  },
  {
    "url": "VueJCBlog/Feature/category-page.html",
    "revision": "0634563da99072a72d6660373b772e81"
  },
  {
    "url": "VueJCBlog/Feature/common-feature.html",
    "revision": "619a685161fbbd09c94908ab7a3db758"
  },
  {
    "url": "VueJCBlog/Feature/index-page.html",
    "revision": "0d07fb5c71327ed5f06065f04678c6c0"
  },
  {
    "url": "VueJCBlog/Feature/index.html",
    "revision": "6a2871d86fd28fb9e58f0d538956ab60"
  },
  {
    "url": "VueJCBlog/Feature/post-page.html",
    "revision": "28889ec1d104b61a5fbe35a0e9ebf634"
  },
  {
    "url": "VueJCBlog/Feature/search-page.html",
    "revision": "67480103192a4f48001731916876d16a"
  },
  {
    "url": "VueJCBlog/Feature/sidebar-feature.html",
    "revision": "a8a05750099362e05f6a7ceae3b714b1"
  },
  {
    "url": "VueJCBlog/Feature/tag-page.html",
    "revision": "a76b3d74d6788d94cc508bcbe0584ee5"
  },
  {
    "url": "VueJCBlog/index.html",
    "revision": "f35e35b93476f5e7e66126bb7b5987dd"
  },
  {
    "url": "VueJCBlog/Installation.html",
    "revision": "244b04def8a55186a7ec14171702e9be"
  },
  {
    "url": "VueJCBlog/Quick-Start.html",
    "revision": "6fe7c4a9902b56f22ba2cd63bee9de58"
  },
  {
    "url": "VueJCBlog/Usage/Container/index.html",
    "revision": "f943fabefecd828dd900fc16dc34204e"
  },
  {
    "url": "VueJCBlog/Usage/front-matter.html",
    "revision": "04604714fa3e3239a54e219843945e53"
  },
  {
    "url": "VueJCBlog/Usage/index.html",
    "revision": "ce14cae0fedce0dc591cac651faa42b8"
  },
  {
    "url": "VueJCBlog/Usage/Markdown/advanced.html",
    "revision": "febf3a98992a860724762216ffff4a62"
  },
  {
    "url": "VueJCBlog/Usage/Markdown/basic.html",
    "revision": "4c5eca938e65b71a4870e4b1fde4b909"
  },
  {
    "url": "VueJCBlog/Usage/Markdown/flow-chart.html",
    "revision": "828d53da210109924bb436afa36f0b51"
  },
  {
    "url": "VueJCBlog/Usage/Markdown/index.html",
    "revision": "5dc1984b41e35a97d45e8bb5d0809307"
  },
  {
    "url": "VueJCBlog/Usage/Markdown/link.html",
    "revision": "75aeadedfd0a913c22b4dfcb1356e7a2"
  },
  {
    "url": "VueJCBlog/Usage/Slide.html",
    "revision": "a597fd4ff55c761eaef3f1e4a5a52015"
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
