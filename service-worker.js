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
    "revision": "4f20bfffe79491b556819f239b46bd24"
  },
  {
    "url": "About/index.html",
    "revision": "214dcea8c31bc0227d1248c61edba5b6"
  },
  {
    "url": "archive/index.html",
    "revision": "c89136eaa7cc1e153dd54e79d7ad5ecc"
  },
  {
    "url": "assets/css/0.styles.40ed98cd.css",
    "revision": "5c8b8f58ca11430db4c250ed73631902"
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
    "url": "assets/js/76.c0af4921.js",
    "revision": "4e28e367fb1a422c367f9381fbd22bff"
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
    "url": "assets/js/app.f7000c74.js",
    "revision": "b8f08c09c8a41a308d7a87f262c2157d"
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
    "url": "assets/js/layout-Layout.af82669f.js",
    "revision": "1d4d183267668f0aa63d8df488e2459f"
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
    "url": "assets/js/page-03ff99e4.99c54868.js",
    "revision": "f0623f57bddd26ec6c36c9dbd304ebc9"
  },
  {
    "url": "assets/js/page-0762cb2c.cedee720.js",
    "revision": "4f2258517579f4f72628c40e653281d2"
  },
  {
    "url": "assets/js/page-0815fe43.01b67d3e.js",
    "revision": "541284ce83d9a3a638fbf7d2a573b762"
  },
  {
    "url": "assets/js/page-0994254e.905dd45c.js",
    "revision": "d854f4718c43cc21ddc7c5db7194d43c"
  },
  {
    "url": "assets/js/page-09cfa20f.0f58918b.js",
    "revision": "4ce82f15ce39f54483d648edfa5c5089"
  },
  {
    "url": "assets/js/page-0bd5cd98.676ca013.js",
    "revision": "97e549d77efd93db6ca90f223ed53dc1"
  },
  {
    "url": "assets/js/page-0ca8b05c.8036b528.js",
    "revision": "bca7bd4a9d1cc3e209aa1c344016d93d"
  },
  {
    "url": "assets/js/page-130de14f.ee6236e7.js",
    "revision": "4ded2750794b5a59306177b50f75fa44"
  },
  {
    "url": "assets/js/page-17916170.58448ede.js",
    "revision": "a1b04b8017246906e31d931048abc0bf"
  },
  {
    "url": "assets/js/page-1efb5c62.af6ff2ea.js",
    "revision": "f3410c6b19ef51c119504d4e6357f0a5"
  },
  {
    "url": "assets/js/page-2282a6e0.e34d5bcd.js",
    "revision": "305ba76d2a5bae7304e5373929ecd52c"
  },
  {
    "url": "assets/js/page-2ba07fce.dbcf8756.js",
    "revision": "591717c9a1c51fea265107e69962025d"
  },
  {
    "url": "assets/js/page-2da25f49.2828c148.js",
    "revision": "9ffddf2611b2dc49a5aeff82342ecfe4"
  },
  {
    "url": "assets/js/page-2f77601c.2a38f60c.js",
    "revision": "88265ea63611cb2db7e01d32e3bbcde2"
  },
  {
    "url": "assets/js/page-36058925.86e3f274.js",
    "revision": "4e2710b7fede3fb59cf34baebde59869"
  },
  {
    "url": "assets/js/page-3721e5cf.0cab4f84.js",
    "revision": "a4fc6fe9a1b01d07823a43fdb405590d"
  },
  {
    "url": "assets/js/page-38e94d3e.5720b201.js",
    "revision": "a7494617739c1d9c3e099006a7287a19"
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
    "url": "assets/js/page-4048f79b.dd2d2011.js",
    "revision": "787a5d427eca6d6084511b9c664881c5"
  },
  {
    "url": "assets/js/page-409d673b.8b770a3b.js",
    "revision": "485e15fb2b1d8cd7635dfd5d4fa1db05"
  },
  {
    "url": "assets/js/page-42a0ea7c.1d007813.js",
    "revision": "b4c4e4e6c38f750a8ffa7d7733ff5407"
  },
  {
    "url": "assets/js/page-437f73dc.f669ca92.js",
    "revision": "cc0b40c4c8f2103b8309f9b27f3d195d"
  },
  {
    "url": "assets/js/page-4773a0fc.cfb3e9c6.js",
    "revision": "2d19f9ef53f5ef871630c20330e081f8"
  },
  {
    "url": "assets/js/page-47ec31ef.eb329a14.js",
    "revision": "43c484a9932fc6570db03fd37228287b"
  },
  {
    "url": "assets/js/page-494b7749.75d2d59a.js",
    "revision": "9780f2d864bf10445bc13b8c3bf7972f"
  },
  {
    "url": "assets/js/page-4e40ef0e.48a98083.js",
    "revision": "8c74a2aaf07390f61af2e1c8549d7ed7"
  },
  {
    "url": "assets/js/page-4f5eb00c.bf3a2398.js",
    "revision": "cd61434044a371de9793e84f5219df5a"
  },
  {
    "url": "assets/js/page-52453899.392e554c.js",
    "revision": "20e92913e3631b21d4e7622ca19ad93c"
  },
  {
    "url": "assets/js/page-53a21bc2.ed076336.js",
    "revision": "af97b7ffb1560689cb1667b2966fb365"
  },
  {
    "url": "assets/js/page-548dbfdd.598b7ba8.js",
    "revision": "79226a023d7d87e62551028fa3794bd8"
  },
  {
    "url": "assets/js/page-54cde949.3aedae91.js",
    "revision": "3ede1cad5fbae2d526655a1f109ac0e7"
  },
  {
    "url": "assets/js/page-56c5add8.295a5883.js",
    "revision": "35b92e4f90037a44936c60f79ea9eed2"
  },
  {
    "url": "assets/js/page-5971d062.218eec7c.js",
    "revision": "67e1801995669446bfdc9f0b820de650"
  },
  {
    "url": "assets/js/page-5ae76184.abd13950.js",
    "revision": "508f8b637b1291133ad996c883f488e2"
  },
  {
    "url": "assets/js/page-5c24028f.0dfcfcc6.js",
    "revision": "e6e75dda5b8482c56571962749004278"
  },
  {
    "url": "assets/js/page-5dade32f.38e494f7.js",
    "revision": "332bf31d948004f4c128bad44ff14644"
  },
  {
    "url": "assets/js/page-62c3f84a.aeb3c219.js",
    "revision": "8a11318d999f175aa42e69bae0e0cb2c"
  },
  {
    "url": "assets/js/page-631831dc.005e4d26.js",
    "revision": "114a30f60257ad175a09d3c056b74d7b"
  },
  {
    "url": "assets/js/page-64c6c3f9.87d03231.js",
    "revision": "df36b0eca22eaeb0ae2bf900b8a84fb2"
  },
  {
    "url": "assets/js/page-68a3e126.f7b978b8.js",
    "revision": "18d071bca762dab6154077b4c156f51f"
  },
  {
    "url": "assets/js/page-718e3f13.c0cd8335.js",
    "revision": "3fb3c099bd671568976dbf4246edf5c7"
  },
  {
    "url": "assets/js/page-7961fc62.edc8c30c.js",
    "revision": "8637c3ade3f2f1d6f8a2b088d5b79381"
  },
  {
    "url": "assets/js/page-7e22c02f.e1fcc2d0.js",
    "revision": "15ef8c9ae280eab52d1e4c633016790f"
  },
  {
    "url": "assets/js/page-7f4c69e4.e6589f5c.js",
    "revision": "a5bbdefabc2f4a70e36c05bef4029d06"
  },
  {
    "url": "assets/js/page-9a13860a.72b04c8a.js",
    "revision": "2616fa9505d8e1b9b9960d056138adc5"
  },
  {
    "url": "assets/js/page-9d704b70.7178cdc0.js",
    "revision": "3cf7b4ffd1a67403866c71c3aca2783e"
  },
  {
    "url": "assets/js/page-a1c83fc6.02c96ba4.js",
    "revision": "5af1a459de75548530dd51c3f8139dae"
  },
  {
    "url": "assets/js/page-a649c29e.53c2bb3c.js",
    "revision": "86ef450ea900a8ea6e6a88bba1914d1c"
  },
  {
    "url": "assets/js/page-b6123e24.ab483254.js",
    "revision": "149eb1caf329f109673501268513c95e"
  },
  {
    "url": "assets/js/page-c1e7a5fc.7835d93f.js",
    "revision": "f611dc517e82466fac45aa1eb4a27623"
  },
  {
    "url": "assets/js/page-c41b383a.2880c3c2.js",
    "revision": "349801b7d71bfa6cdb6af98ca601dad8"
  },
  {
    "url": "assets/js/page-c799e3a4.a6ce87e7.js",
    "revision": "97c18b1dc3f355d29c8a0c206a518b82"
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
    "url": "assets/js/page-e63bef64.28b4c37a.js",
    "revision": "bd20f6b3a95ed51b083559b18b46c79c"
  },
  {
    "url": "assets/js/page-e869018c.e46b9087.js",
    "revision": "422bce8fe33583121937052bd3d4775f"
  },
  {
    "url": "assets/js/page-e87fecf8.3a2f0b75.js",
    "revision": "c5bff28c175c06e083095574bc348f6d"
  },
  {
    "url": "assets/js/page-fa2e9ecc.0c23b24d.js",
    "revision": "fa105e89886b293e09a69fd59b0440b2"
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
    "revision": "4e8a6d80d66b13aeecbd80c8cfef482e"
  },
  {
    "url": "Coding/Front-End/CSS/awesome-css.html",
    "revision": "70487c5f24e4cc9894065b9698b4d595"
  },
  {
    "url": "Coding/Front-End/CSS/awesome-icons.html",
    "revision": "74bedee4b4b7b7e78bacb80cf2b2fbc2"
  },
  {
    "url": "Coding/Front-End/JS/Module Bundler/Webpack/awesome-webpack.html",
    "revision": "b8c0dada3fc9e7995868e9f85683d53a"
  },
  {
    "url": "Coding/Front-End/JS/Vue/awesome-vue.html",
    "revision": "ce9f2ed53c9737853368e6b86313a631"
  },
  {
    "url": "Coding/日常筆記/CodeReview/code-review-memo.html",
    "revision": "975fb69e98fcb6d41d5f89be792e21c3"
  },
  {
    "url": "Coding/日常筆記/CSharp/AutoMapper-class繼承後之對應.html",
    "revision": "5e1469af01fbe6c25e0000d192453ee4"
  },
  {
    "url": "Coding/日常筆記/CSharp/String-Concatenate.html",
    "revision": "3c70d7d2e76bbf16e4a24aa2cbd04daa"
  },
  {
    "url": "Coding/日常筆記/CSharp/tmp.html",
    "revision": "e80fff66d15c06e3c10b2aeac6915077"
  },
  {
    "url": "Coding/日常筆記/CSharp/變數命名.html",
    "revision": "fb720ffba9f8b1dd5eb3f1eec92fb4b9"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/1. 心/index.html",
    "revision": "cc435e43f613c0b78deae3a818430f19"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/1. 心/TMP.html",
    "revision": "ebed07f40fb28a3ae00370f5556862cb"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/1. 心/心理戰.html",
    "revision": "6ea974b34476fc1ac01650a6f1439750"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/2. 技/index.html",
    "revision": "cc76b8fd09045eacf7c50f302cf62ea7"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/2. 技/神小跳.html",
    "revision": "f611ee19ba7f6e79a6fc40648dadce52"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/2. 技/視野變換.html",
    "revision": "7a3a1951e394a6ab5c036c3b51d0f83e"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/2. 技/走位.html",
    "revision": "c91013ef1b209962b4bd82c58e2af650"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/2. 技/跳點.html",
    "revision": "f43bfe1f480202a2286e60128cb93eb3"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/2. 技/預出手.html",
    "revision": "aa5c99021fe02a41340583633fa96f53"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/3. 體/index.html",
    "revision": "c7ce86615620a7340d6c799820271e9a"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/4. 群/index.html",
    "revision": "8571ce165ade6815ca7c830b9d8bb166"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/4. 群/卡位.html",
    "revision": "a0f043fe4a0780b026499dd80f29b076"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/4. 群/組隊.html",
    "revision": "0e4ab0007ba2728a9c75a9e82a27a024"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/5. 略/index.html",
    "revision": "90895bed73fb0203a25bc0078d23dc37"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/5. 略/局勢.html",
    "revision": "58509f48599525e36e9428299a5a2e55"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/6. 決/index.html",
    "revision": "f7140f8d700cef54ea16c24163fe7b9b"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/index.html",
    "revision": "85a8414068ed23a9b9bf7dee1830e720"
  },
  {
    "url": "Game/FEZ/2. 國戰步兵戰策略/index.html",
    "revision": "f7ddaac118280b93dd4a6b419ecd6d12"
  },
  {
    "url": "Game/FEZ/3. 各職玩法/刀.html",
    "revision": "42e11a1d0753f6f3184ba1a17f40ef88"
  },
  {
    "url": "Game/FEZ/3. 各職玩法/雙修.html",
    "revision": "367d2db1f1e696aed800065b13db7e9b"
  },
  {
    "url": "Game/FEZ/4. 2on/index.html",
    "revision": "d830e753e21e787eb68f75efdb143a6c"
  },
  {
    "url": "Game/FEZ/5. 3on/index.html",
    "revision": "e14e1dbfd15cfafe6acbccb5b59dcc2f"
  },
  {
    "url": "Game/FEZ/X. Theorem/HMM.html",
    "revision": "941a3b42770243d2ad5dacd9fb1c4595"
  },
  {
    "url": "hello-vuejcblog.html",
    "revision": "6e1df53c9ccc2f6953b76c78e056f0f8"
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
    "revision": "97e0ff269907ebcafb65ad2030f2128a"
  },
  {
    "url": "search/index.html",
    "revision": "6d0e944232cbc054f4ff3dced82912fc"
  },
  {
    "url": "tag/index.html",
    "revision": "5d221b4dcbd63620914aae74fa42d650"
  },
  {
    "url": "VueJCBlog/Development/article/hello-vuejcblog.html",
    "revision": "69e30cb502af4a1e682a6070a3cf37cd"
  },
  {
    "url": "VueJCBlog/Development/article/test/test-comment.html",
    "revision": "3901aaa50115b2d257551f35250875df"
  },
  {
    "url": "VueJCBlog/Development/article/test/test-lazy-load.html",
    "revision": "e6b23e28fe8fd10f3826139e1499b5d4"
  },
  {
    "url": "VueJCBlog/Development/article/test/test-lazy-load2.html",
    "revision": "8e807f189199b8cfc70e6996c37b5863"
  },
  {
    "url": "VueJCBlog/Feature/about-page.html",
    "revision": "d1e67f53d32f98470edd8c05492bb9da"
  },
  {
    "url": "VueJCBlog/Feature/archive-page.html",
    "revision": "0a63217bcd0dbcc094199cf23ff8cb76"
  },
  {
    "url": "VueJCBlog/Feature/category-page.html",
    "revision": "7ab5832b7823bd4f66b1e303b08c08e2"
  },
  {
    "url": "VueJCBlog/Feature/common-feature.html",
    "revision": "5e714720bed2eca446c2d321e4f9d6fa"
  },
  {
    "url": "VueJCBlog/Feature/index-page.html",
    "revision": "984fb5a12824638517e99d48457ac594"
  },
  {
    "url": "VueJCBlog/Feature/index.html",
    "revision": "82e1840c426dd8be7c007362f52c8b91"
  },
  {
    "url": "VueJCBlog/Feature/post-page.html",
    "revision": "293466f167fcb6590bec9bab9f97a42b"
  },
  {
    "url": "VueJCBlog/Feature/search-page.html",
    "revision": "34ea156f7b8bdbea79457a7dd70da234"
  },
  {
    "url": "VueJCBlog/Feature/sidebar-feature.html",
    "revision": "8f93d0410a488bfc955201debfa577ef"
  },
  {
    "url": "VueJCBlog/Feature/tag-page.html",
    "revision": "062b511d7854fd260fcdcf024de0b65e"
  },
  {
    "url": "VueJCBlog/index.html",
    "revision": "f3936b97839bc7f290703867c1b44152"
  },
  {
    "url": "VueJCBlog/Installation.html",
    "revision": "b1dacdc21e35b5e1ad24974b9ccfd478"
  },
  {
    "url": "VueJCBlog/Quick-Start.html",
    "revision": "f03bc238c838960e7e0d0bca64f935c2"
  },
  {
    "url": "VueJCBlog/Usage/Container/index.html",
    "revision": "bab6fe7b3f67209961a8aa492f7beb6e"
  },
  {
    "url": "VueJCBlog/Usage/front-matter.html",
    "revision": "a16067d625631f7ea3691e2cd4678a8c"
  },
  {
    "url": "VueJCBlog/Usage/index.html",
    "revision": "2b4935f68d635e1d49f3ab589b7d57a3"
  },
  {
    "url": "VueJCBlog/Usage/Markdown/advanced.html",
    "revision": "81d46f525fe461356c4d321c20d027f8"
  },
  {
    "url": "VueJCBlog/Usage/Markdown/basic.html",
    "revision": "040f6ff6765557f8f11e4d8baf924294"
  },
  {
    "url": "VueJCBlog/Usage/Markdown/flow-chart.html",
    "revision": "6545c71e09bffde4b3c18f0464a2eb20"
  },
  {
    "url": "VueJCBlog/Usage/Markdown/index.html",
    "revision": "d06b944869ec08befa73a5a8bd5f2457"
  },
  {
    "url": "VueJCBlog/Usage/Markdown/link.html",
    "revision": "46f87f3ba8418ec85e11bd68a310dcba"
  },
  {
    "url": "VueJCBlog/Usage/Slide.html",
    "revision": "22470413c2d3b7616747374f614a3151"
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
