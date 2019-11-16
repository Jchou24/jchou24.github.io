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
    "revision": "3ebb41549e3dc9cb4649c9800b3e6af3"
  },
  {
    "url": "About/index.html",
    "revision": "769c6108e26766eccea7eee1dc37e4dd"
  },
  {
    "url": "archive/index.html",
    "revision": "a24aad66fe77719489ea1a6c7bc0356a"
  },
  {
    "url": "assets/css/0.styles.3965cd15.css",
    "revision": "cf169be84a3cfef0ba30d4c065e818a5"
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
    "url": "assets/js/1.8d12ea62.js",
    "revision": "34120563ef410461ef9217b835d40ed0"
  },
  {
    "url": "assets/js/2.8705e601.js",
    "revision": "1c52bf88ece9fd5ca3d1c6465e2439ef"
  },
  {
    "url": "assets/js/3.1b0c38a5.js",
    "revision": "2cb67ba36ca27535029ce5115a9c96d5"
  },
  {
    "url": "assets/js/5.9e613648.js",
    "revision": "49434bcdecd83ce9341138168b97d43b"
  },
  {
    "url": "assets/js/6.12fe005b.js",
    "revision": "61b9dd2204c072cc275f5338e1a73f68"
  },
  {
    "url": "assets/js/73.624e284b.js",
    "revision": "fcd230b5ab834a284fd22c535e0fe434"
  },
  {
    "url": "assets/js/74.7c89321d.js",
    "revision": "bb798d9a574a696af4b09b427faa75d6"
  },
  {
    "url": "assets/js/75.90fcdcfd.js",
    "revision": "69cfdc29c74473396782414d10e7ff4e"
  },
  {
    "url": "assets/js/76.df126bee.js",
    "revision": "f29442af6aaa7ba44448ec2fff828f73"
  },
  {
    "url": "assets/js/77.6e4bce7f.js",
    "revision": "1b8bc84122794780eecbcba36166fb42"
  },
  {
    "url": "assets/js/78.3ef81c9e.js",
    "revision": "cd2ce2dfd3d09ca1bfc3e68ff57013fb"
  },
  {
    "url": "assets/js/79.3030e225.js",
    "revision": "41b7e2dbe8cb93a2bbd13f32dca26347"
  },
  {
    "url": "assets/js/80.d5a2e818.js",
    "revision": "f5d866d0c31ac2497eff8f7995dcacc1"
  },
  {
    "url": "assets/js/81.9947e9e9.js",
    "revision": "0a00556b76a9942116a9f7bef96b589a"
  },
  {
    "url": "assets/js/82.77f41a63.js",
    "revision": "899eff93601ff04b0a2ab32e6700b86e"
  },
  {
    "url": "assets/js/83.cca90db0.js",
    "revision": "7394af1feff54c945850e95e094fb68b"
  },
  {
    "url": "assets/js/84.bc3672c2.js",
    "revision": "e0cdfd5dadb36379d1e39b3bfd1249ac"
  },
  {
    "url": "assets/js/85.b9e71695.js",
    "revision": "7e5216eceb204ccd659d4fa8d71399bf"
  },
  {
    "url": "assets/js/86.ea3c0549.js",
    "revision": "6253c3174e3e9c7242fd0b193aff4dbe"
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
    "url": "assets/js/89.f8d2fd33.js",
    "revision": "192eb8af056dd39cda50912a39bf61b5"
  },
  {
    "url": "assets/js/90.1e5eeeb0.js",
    "revision": "d4a937b906aec8bfbcb15eb9a9a334c3"
  },
  {
    "url": "assets/js/91.3781fff8.js",
    "revision": "7eb5cb54b7679d8e65c3ab2c26ee620a"
  },
  {
    "url": "assets/js/92.2f8fbc10.js",
    "revision": "8dd3d934a709663e5f0d2ecf23aaa441"
  },
  {
    "url": "assets/js/93.e6278af1.js",
    "revision": "392d333c6b125bc17b68bc95e32886b4"
  },
  {
    "url": "assets/js/94.b99b41c3.js",
    "revision": "39c4b5dc5e541eb38036942b7e33afd1"
  },
  {
    "url": "assets/js/app.8297d5c9.js",
    "revision": "cfc8b334f1d787175ff46a9805e6870d"
  },
  {
    "url": "assets/js/layout-BaseLayout.0d9f7e4e.js",
    "revision": "31e4f752c566b6cd2de2c967664a03dd"
  },
  {
    "url": "assets/js/layout-BaseLayout~layout-Layout.49b8f2d3.js",
    "revision": "7ee7ff7bfc8d34372752d25976f88e44"
  },
  {
    "url": "assets/js/layout-Layout.65140452.js",
    "revision": "9d54fb619ac172fd48d4b720933bdabf"
  },
  {
    "url": "assets/js/layout-NotFound.af2b048a.js",
    "revision": "9ef6870b93888af0f5c0e64272706a9e"
  },
  {
    "url": "assets/js/page-01b1365c.4859769b.js",
    "revision": "77b07698c5cc213a05f234bf9deacbeb"
  },
  {
    "url": "assets/js/page-03ff99e4.5ae567ab.js",
    "revision": "d362edec5fccf6a350f1d663245744f6"
  },
  {
    "url": "assets/js/page-0762cb2c.0f6a8305.js",
    "revision": "b2d27d597b36e4427630e0d26bff25f3"
  },
  {
    "url": "assets/js/page-0815fe43.57489437.js",
    "revision": "3a08a63b79aca454b154c41cafd7ac90"
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
    "url": "assets/js/page-0bd5cd98.8317de47.js",
    "revision": "633fed40f3c586598b2d66da5e082c61"
  },
  {
    "url": "assets/js/page-0ca8b05c.24022b11.js",
    "revision": "639bb1c17c90732321277860b331ca32"
  },
  {
    "url": "assets/js/page-130de14f.2e05c4de.js",
    "revision": "f7da33c3f9a3cb896c30fcf950041aee"
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
    "url": "assets/js/page-2da25f49.808fafa8.js",
    "revision": "78612cca2c60a18f1b71c38c4072f73d"
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
    "url": "assets/js/page-3721e5cf.42c4ad1e.js",
    "revision": "c2cffd0cbe34a83e3bf0a056be81dbf9"
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
    "url": "assets/js/page-3b1778e4.240f186d.js",
    "revision": "45e82f1f664b32f448d7b2dfca4c57a6"
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
    "url": "assets/js/page-42a0ea7c.764a551f.js",
    "revision": "ce289f520649607d5bf905c78d4afefd"
  },
  {
    "url": "assets/js/page-437f73dc.4a88d461.js",
    "revision": "42da7fed09cf1efd37981ebc3eaaa5d4"
  },
  {
    "url": "assets/js/page-4773a0fc.92ba3840.js",
    "revision": "0fb9ffa66b64c1432452f450dcf80427"
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
    "url": "assets/js/page-53a21bc2.4f16e589.js",
    "revision": "1ed11030d6ba88f22ca355fe4f2e8eb0"
  },
  {
    "url": "assets/js/page-548dbfdd.1da161cc.js",
    "revision": "6f8698d2af21573fbf4b88f91c2e6e07"
  },
  {
    "url": "assets/js/page-54cde949.3aedae91.js",
    "revision": "3ede1cad5fbae2d526655a1f109ac0e7"
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
    "url": "assets/js/page-631831dc.881fbbb4.js",
    "revision": "4fcbf0110ceb923edcab9a1e03bb0603"
  },
  {
    "url": "assets/js/page-64c6c3f9.87d03231.js",
    "revision": "df36b0eca22eaeb0ae2bf900b8a84fb2"
  },
  {
    "url": "assets/js/page-68a3e126.5a1594f5.js",
    "revision": "8493ea9733da0c2825e18f1d1922edf7"
  },
  {
    "url": "assets/js/page-718e3f13.fceb2a7a.js",
    "revision": "1b01cd49072701a91054a827f516a435"
  },
  {
    "url": "assets/js/page-7961fc62.edc8c30c.js",
    "revision": "8637c3ade3f2f1d6f8a2b088d5b79381"
  },
  {
    "url": "assets/js/page-7e22c02f.0907920a.js",
    "revision": "5491aa8984173c9388ac98c13c029d85"
  },
  {
    "url": "assets/js/page-7f4c69e4.48670d7b.js",
    "revision": "76871ad17230fc779f5bbebdfe8965a4"
  },
  {
    "url": "assets/js/page-9a13860a.637fd594.js",
    "revision": "85dfb35649ff6f26810bc800d8777998"
  },
  {
    "url": "assets/js/page-9d704b70.ac904e86.js",
    "revision": "719e365c2f5b6d90fd496e5ecd404a55"
  },
  {
    "url": "assets/js/page-a1c83fc6.7b1b2046.js",
    "revision": "0cd757d4deab5f763c656a753ac54d19"
  },
  {
    "url": "assets/js/page-a649c29e.46db7cc6.js",
    "revision": "a5a63dc7380e0e53352477bbe49aff69"
  },
  {
    "url": "assets/js/page-b6123e24.8b58098b.js",
    "revision": "4694dd4fc7d68eeb0e2f71a41e206fa2"
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
    "url": "assets/js/page-c799e3a4.d0fcfa8f.js",
    "revision": "2067c57cfc16ef8514aed73ef6712d14"
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
    "url": "assets/js/page-e87fecf8.26a9b3f9.js",
    "revision": "5fd40b15cc900043130f6a1f03cbf174"
  },
  {
    "url": "assets/js/page-fa2e9ecc.6f669e4f.js",
    "revision": "2658f7336b5ff734c535b920e5bfe428"
  },
  {
    "url": "assets/js/vendors~flowchart.afdc8dc0.js",
    "revision": "30779761dda7d1d5651d7db5d0da00cd"
  },
  {
    "url": "assets/js/vendors~layout-Layout.98eea2e1.js",
    "revision": "1f304e882ac21fba905ee65b4ddd2e81"
  },
  {
    "url": "category/index.html",
    "revision": "e881d4c4105aa49e1eaff95f355536a9"
  },
  {
    "url": "Coding/Front-End/CSS/awesome-css.html",
    "revision": "58d9d1e589ee48c60a4eb0bf18c1c024"
  },
  {
    "url": "Coding/Front-End/CSS/awesome-icons.html",
    "revision": "a6bcd59303ef77a994f49740a11fddbe"
  },
  {
    "url": "Coding/Front-End/JS/Module Bundler/Webpack/awesome-webpack.html",
    "revision": "e1be298cbdff54d65c6e1c384cf102e3"
  },
  {
    "url": "Coding/Front-End/JS/Vue/awesome-vue.html",
    "revision": "12dffc322091aed3282efaba3064cc1d"
  },
  {
    "url": "Coding/日常筆記/CodeReview/code-review-memo.html",
    "revision": "8e30cf7c576d16a1d420f4cb19d3b9d7"
  },
  {
    "url": "Coding/日常筆記/CSharp/AutoMapper-class繼承後之對應.html",
    "revision": "0ea9709d7d050ff3386e2b5c13bfeb9c"
  },
  {
    "url": "Coding/日常筆記/CSharp/String-Concatenate.html",
    "revision": "cf10ed101d542939bc26a8330744af59"
  },
  {
    "url": "Coding/日常筆記/CSharp/tmp.html",
    "revision": "c716d9d6dd84a0059d979e9f965a9148"
  },
  {
    "url": "Coding/日常筆記/CSharp/變數命名.html",
    "revision": "022d83e75cb3696cd652b71c5e375ceb"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/1. 心/index.html",
    "revision": "d06c9c66148f9df3605135f144e1982e"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/1. 心/TMP.html",
    "revision": "efe1a533531fb29bacd94f5761b6d417"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/1. 心/心理戰.html",
    "revision": "ba3df24181f9e3dc778e5776b1854ae9"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/2. 技/index.html",
    "revision": "f73c333674b7c18dfd38a7eef0897155"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/2. 技/神小跳.html",
    "revision": "6a0bcd6708de34bf82491c02dda3c4c5"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/2. 技/視野變換.html",
    "revision": "3ddad48d31560e337836009ce1278be2"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/2. 技/走位.html",
    "revision": "f644130576d6fea4b0c8e89f079d0ac5"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/2. 技/跳點.html",
    "revision": "f11ec34e3f653c9e4d484d14d109efb5"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/2. 技/預出手.html",
    "revision": "c6c8a5241434697d1cd7c7fdc8a48a03"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/3. 體/index.html",
    "revision": "34352594067c58d37c28515c52f23e33"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/4. 群/index.html",
    "revision": "78b8011ac6834c59d6f1ef8ea43723db"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/4. 群/卡位.html",
    "revision": "bcc00d2e2dc4796fbbb4a346e0c11af3"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/4. 群/組隊.html",
    "revision": "22ccbc0e40e27b111080cb9a66c4875f"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/5. 略/index.html",
    "revision": "39a510c05d2522d7da3d2060aead1f92"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/5. 略/局勢.html",
    "revision": "7bce05fddb719252bac0d6177a84e512"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/6. 決/index.html",
    "revision": "9ddca0e15f45f0c628e85d1166e27f4a"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/index.html",
    "revision": "34f7de25ad4a389bbf273136f89508d7"
  },
  {
    "url": "Game/FEZ/2. 國戰步兵戰策略/index.html",
    "revision": "bb0152a512793768d5836c07793869ed"
  },
  {
    "url": "Game/FEZ/3. 各職玩法/刀.html",
    "revision": "b2136ce9909a4819cc9e49579e090b15"
  },
  {
    "url": "Game/FEZ/3. 各職玩法/雙修.html",
    "revision": "f441a28cb2ac23b871c5077e62e68fc3"
  },
  {
    "url": "Game/FEZ/4. 2on/index.html",
    "revision": "563e39b081902a2453c138c3ad1ee742"
  },
  {
    "url": "Game/FEZ/5. 3on/index.html",
    "revision": "ea952969b4aafc53115c31d3f9c465df"
  },
  {
    "url": "Game/FEZ/X. Theorem/HMM.html",
    "revision": "70b2db00fd8688f0d3b91fd7bbcd7216"
  },
  {
    "url": "hello-vuejcblog.html",
    "revision": "b2284a4a20196094aa2fc26588dfd954"
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
    "revision": "4feb702c93294d006cefda3d656eefd5"
  },
  {
    "url": "search/index.html",
    "revision": "b22554e7c9c69294ac9adea0128a8fe3"
  },
  {
    "url": "tag/index.html",
    "revision": "2e61c016fa6022f66bcb91ae78a0e437"
  },
  {
    "url": "VueJCBlog/Development/article/hello-vuejcblog.html",
    "revision": "cf3063f6d8d96ae95f4ba4eeb35ef3b1"
  },
  {
    "url": "VueJCBlog/Development/article/test/test-comment.html",
    "revision": "19ddee74dcac7379cf8aa93e8e7f0c05"
  },
  {
    "url": "VueJCBlog/Development/article/test/test-lazy-load.html",
    "revision": "52069f5c0f85d7e1137008651638f4e2"
  },
  {
    "url": "VueJCBlog/Development/article/test/test-lazy-load2.html",
    "revision": "9b94fae905ae833a9f4359b2495dbb2c"
  },
  {
    "url": "VueJCBlog/Feature/about-page.html",
    "revision": "1781e9185df02b7842c30055eb5dbb2b"
  },
  {
    "url": "VueJCBlog/Feature/archive-page.html",
    "revision": "5efc18e2f48e6ad433f270d0e67e04f0"
  },
  {
    "url": "VueJCBlog/Feature/category-page.html",
    "revision": "5eccfca049fe9fb1682a34793eb6b89c"
  },
  {
    "url": "VueJCBlog/Feature/common-feature.html",
    "revision": "31ea17346837b100721ba39dac5f60fc"
  },
  {
    "url": "VueJCBlog/Feature/index-page.html",
    "revision": "c1f3b5fd138a5a8bb58a79f96376ae07"
  },
  {
    "url": "VueJCBlog/Feature/index.html",
    "revision": "40652e0891317948f4f650aee68bd3fd"
  },
  {
    "url": "VueJCBlog/Feature/post-page.html",
    "revision": "b9a00006032be18bced4dfd7efb9cab6"
  },
  {
    "url": "VueJCBlog/Feature/search-page.html",
    "revision": "93420a15e9d8bbedf0c57bbdd822f60e"
  },
  {
    "url": "VueJCBlog/Feature/sidebar-feature.html",
    "revision": "c054a0a82ef97e7757e597d4e8a9e753"
  },
  {
    "url": "VueJCBlog/Feature/tag-page.html",
    "revision": "1ae236017cd66cf1abb24c67d7377487"
  },
  {
    "url": "VueJCBlog/index.html",
    "revision": "7e4ebf85d4e485ec0ee12bc7792de650"
  },
  {
    "url": "VueJCBlog/Installation.html",
    "revision": "77a0f8dfb5e35bf8d5f80801cc03e787"
  },
  {
    "url": "VueJCBlog/Quick-Start.html",
    "revision": "dab1bcb2d3269d3c6b1bc199097a2409"
  },
  {
    "url": "VueJCBlog/Usage/Container/index.html",
    "revision": "3fa87717f63bb4afa9abdce14330daeb"
  },
  {
    "url": "VueJCBlog/Usage/front-matter.html",
    "revision": "16de1540f5debffb70ed6f992c90633e"
  },
  {
    "url": "VueJCBlog/Usage/index.html",
    "revision": "f06f0757c7090f2cc18e9b9ebaa410d4"
  },
  {
    "url": "VueJCBlog/Usage/Markdown/advanced.html",
    "revision": "8ee1e27cf2b1fb93ce6c36d389b12b73"
  },
  {
    "url": "VueJCBlog/Usage/Markdown/basic.html",
    "revision": "f72608d8d630a850feb71418358c2bc7"
  },
  {
    "url": "VueJCBlog/Usage/Markdown/flow-chart.html",
    "revision": "2e6fe0e2dde364aebdf2f38f83d81390"
  },
  {
    "url": "VueJCBlog/Usage/Markdown/index.html",
    "revision": "830ac54b696dc173affb4cd4b61524df"
  },
  {
    "url": "VueJCBlog/Usage/Markdown/link.html",
    "revision": "b143d7ea45933f20c7cdc0a81c1289f1"
  },
  {
    "url": "VueJCBlog/Usage/Slide.html",
    "revision": "3bde6e3140c52e90e537ebc569c9dbe8"
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
