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
    "revision": "61c05324338bf83f365e0ab8bcf1af7b"
  },
  {
    "url": "About/index.html",
    "revision": "e0f0de76951d0d266b27114d921a1039"
  },
  {
    "url": "archive/index.html",
    "revision": "d470f2afc541cc47b9ea0b50bef3b0ef"
  },
  {
    "url": "assets/css/0.styles.f78d105b.css",
    "revision": "504f540ad0dcd1812c1f40eae20f71d6"
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
    "url": "assets/js/1.e9c4f42b.js",
    "revision": "ecdb59a880aebf46c07e2a643764ac05"
  },
  {
    "url": "assets/js/100.a5f61703.js",
    "revision": "4e142a29ce4199a3e5fb8407d5c8a4e8"
  },
  {
    "url": "assets/js/101.59d904fd.js",
    "revision": "e9bf0fabcaa333a0df38fc4988b69896"
  },
  {
    "url": "assets/js/102.1c15acc3.js",
    "revision": "ad66d20aa5b3edfa2fa6e26243bde389"
  },
  {
    "url": "assets/js/103.8924d9cf.js",
    "revision": "b60cb82b6a24bfa7306948250f180d05"
  },
  {
    "url": "assets/js/104.e44f859c.js",
    "revision": "b54e596429cce39f4b28229c4be212b2"
  },
  {
    "url": "assets/js/105.1327725a.js",
    "revision": "2492b8636d146e4f6b3d6f8287265cc2"
  },
  {
    "url": "assets/js/106.b9913d15.js",
    "revision": "3417937272d459e9c0f93fdea98dbaf7"
  },
  {
    "url": "assets/js/107.0972cb02.js",
    "revision": "1fa7ad339a73d05c6dcae60c501f272c"
  },
  {
    "url": "assets/js/108.5c098fdb.js",
    "revision": "293cf7cc50019e687ef66b32d1260af1"
  },
  {
    "url": "assets/js/109.445e41bf.js",
    "revision": "b76c7d7014136a1fb7f17672e77e2b9b"
  },
  {
    "url": "assets/js/110.4c26a7a8.js",
    "revision": "8ee2e2b43a3f4867b10f7bdfba5ee127"
  },
  {
    "url": "assets/js/111.95e0c136.js",
    "revision": "a5cb69110a2ed89c97ef74e7154d93f8"
  },
  {
    "url": "assets/js/112.087abb1a.js",
    "revision": "43da3994f0d4f9444888c3d09e625b0c"
  },
  {
    "url": "assets/js/113.05930c2b.js",
    "revision": "62ffcf83b2446c58c10c47293dcdab7f"
  },
  {
    "url": "assets/js/2.cc475928.js",
    "revision": "02601f4e541a5a67be2623f03f15b670"
  },
  {
    "url": "assets/js/3.bc79db90.js",
    "revision": "3d6cf8cd82cd99d67df1362ffed4ba45"
  },
  {
    "url": "assets/js/4.ba3508a2.js",
    "revision": "e9288e16a8cf2bafb446239b709d1a0f"
  },
  {
    "url": "assets/js/5.4b8ff248.js",
    "revision": "73fbb3793b9d55ac9c4ff42233dc4f52"
  },
  {
    "url": "assets/js/6.441fbabc.js",
    "revision": "42702391e3fc666a7f1b14d33b34c276"
  },
  {
    "url": "assets/js/89.26a996b6.js",
    "revision": "e4a5fcdf81b404f840b4559f007a51b2"
  },
  {
    "url": "assets/js/90.9d5bb0f5.js",
    "revision": "e232d909f74281044c5ea9638290d2b4"
  },
  {
    "url": "assets/js/91.895d89d4.js",
    "revision": "3ad1323cba0c875db96121dca090640d"
  },
  {
    "url": "assets/js/92.fc5c67ad.js",
    "revision": "c19a37f5da26d99e02b29fb183cde62f"
  },
  {
    "url": "assets/js/93.e2bb1b22.js",
    "revision": "5ab79d04876ee3b1d2d09b620a2cecf6"
  },
  {
    "url": "assets/js/94.6d85b6ef.js",
    "revision": "8279657766b1e1cb9f29467b13954712"
  },
  {
    "url": "assets/js/95.cb784478.js",
    "revision": "6427fdf63c99a655ea6cb4b238765bae"
  },
  {
    "url": "assets/js/96.4d06c037.js",
    "revision": "4538ddfd0c9255987f6bfb3b47e092cb"
  },
  {
    "url": "assets/js/97.7b157fa9.js",
    "revision": "ae127958d19c931438bda4b44078b016"
  },
  {
    "url": "assets/js/98.f3506279.js",
    "revision": "afdb443f7300c4cd968f06a39d80fbd0"
  },
  {
    "url": "assets/js/99.1b993c9b.js",
    "revision": "9931052caa4a7c55f21a6f9c93479a94"
  },
  {
    "url": "assets/js/app.0f177e43.js",
    "revision": "e9008356eda06ddc7d5c3f427edec873"
  },
  {
    "url": "assets/js/layout-BaseLayout.c5429969.js",
    "revision": "7b58efb1ac92aa0f30014e4c0fd51fc2"
  },
  {
    "url": "assets/js/layout-Layout.68a9340e.js",
    "revision": "206c64ec6f2bdad14ea79d062cbbe6fe"
  },
  {
    "url": "assets/js/layout-NotFound.a0139939.js",
    "revision": "1df67549d5ce676f562e90064c2e1213"
  },
  {
    "url": "assets/js/page-0193e625.9716c745.js",
    "revision": "2514c7fa1aef6c3bd2a6c35f8113cecb"
  },
  {
    "url": "assets/js/page-021b3aa4.8586d9b4.js",
    "revision": "923f7f63952fca077e192f9e661dc039"
  },
  {
    "url": "assets/js/page-0a921c99.6a5eeffa.js",
    "revision": "80c126eeff2e3be9817bccf8ea6c161e"
  },
  {
    "url": "assets/js/page-0c6c4d65.67df25b3.js",
    "revision": "d6369db78a4dab860de75b605fecb54f"
  },
  {
    "url": "assets/js/page-0c7f77bc.bb0b64df.js",
    "revision": "11da059d4f6c43091e9961ca9330a1b6"
  },
  {
    "url": "assets/js/page-1a34eb5d.4f851963.js",
    "revision": "e7ec04a3f1049caab378d16e89e82a2e"
  },
  {
    "url": "assets/js/page-1c4a4e12.7652ed65.js",
    "revision": "818bb233ef60fc5da74450f5f97e8b44"
  },
  {
    "url": "assets/js/page-1ccc22d8.6ff38017.js",
    "revision": "1ac60384cb97cba0beac55fab606ab0a"
  },
  {
    "url": "assets/js/page-1db42de8.c3c3036a.js",
    "revision": "c0210aa0c3ddce9b668c07d4525d3366"
  },
  {
    "url": "assets/js/page-1e536af9.51345183.js",
    "revision": "e7a04eeecf3f8e1b21eb40d6eec954f0"
  },
  {
    "url": "assets/js/page-21fcb945.847e1d9d.js",
    "revision": "f265b5c1255e82e0969a044909070f59"
  },
  {
    "url": "assets/js/page-25bc4f18.c042e692.js",
    "revision": "e62ec67daae625ff19a219a9e7700a9f"
  },
  {
    "url": "assets/js/page-27f6ecec.0cc60d44.js",
    "revision": "d135df04b6909a1b9d76022765b7d8ca"
  },
  {
    "url": "assets/js/page-29c918e5.1a25a175.js",
    "revision": "1dd8d8032f804002e2f40ed7483e8a7f"
  },
  {
    "url": "assets/js/page-2c6bc4ab.5e2eba4f.js",
    "revision": "6578ce6f02b9ea7c428e12afdff9772b"
  },
  {
    "url": "assets/js/page-2e8c0cd0.94b4d122.js",
    "revision": "cd8c05cbbbb25219cacfc2b385060f6c"
  },
  {
    "url": "assets/js/page-320aac86.fcedb6f9.js",
    "revision": "fdab29429b683b83be4ebd17ead63c1c"
  },
  {
    "url": "assets/js/page-339369e0.c6d5f98a.js",
    "revision": "eda5529d06aa7f77359a699e73eda8ec"
  },
  {
    "url": "assets/js/page-36d5d2b3.b698ff9b.js",
    "revision": "38595b3e442d9995c1ca455d050324ad"
  },
  {
    "url": "assets/js/page-39e05f8b.e4b3d3b6.js",
    "revision": "bfe6ef1f12414e1135ad3e2c363f16c8"
  },
  {
    "url": "assets/js/page-3c8dbd4b.e968fe89.js",
    "revision": "a82348c343e780c4b8c4741900798bb0"
  },
  {
    "url": "assets/js/page-3cdc4745.09444064.js",
    "revision": "e793a9ba82daa35e41c4b6443ab5aaed"
  },
  {
    "url": "assets/js/page-4144513c.7a3cfe8d.js",
    "revision": "263c318b5a8a0d58db45ec31611d9582"
  },
  {
    "url": "assets/js/page-422a7e52.b0003fe4.js",
    "revision": "0a39f2c20b2501f67b24b79da0b51294"
  },
  {
    "url": "assets/js/page-445c88ce.46e355d0.js",
    "revision": "13d3a6a2784736d0d2f3881ec3285089"
  },
  {
    "url": "assets/js/page-4478a866.e2c12433.js",
    "revision": "6539e49873654989d85c07e4abaf7e82"
  },
  {
    "url": "assets/js/page-455360d1.18e569ba.js",
    "revision": "d7a2ac1463645c42eb08e9b4cf9ebd88"
  },
  {
    "url": "assets/js/page-47f71914.6d045a4b.js",
    "revision": "c519deea7a61eedc8097cf4064f2b232"
  },
  {
    "url": "assets/js/page-4829d184.50b5b9a4.js",
    "revision": "ad07b24c8e694a26d3b44aec8f181bc4"
  },
  {
    "url": "assets/js/page-486aacae.35e52914.js",
    "revision": "2118b9cdcd2ca3f72b19fd6458d08f24"
  },
  {
    "url": "assets/js/page-4d521b14.f5f7903a.js",
    "revision": "b550d05ed658db7bc968fb0c214bf0f1"
  },
  {
    "url": "assets/js/page-4d7e2aa5.25bbc5c3.js",
    "revision": "b8a67c0cf5b56760a81702e0ad93330b"
  },
  {
    "url": "assets/js/page-4d9fba32.3775b4ed.js",
    "revision": "543d6573a3a0f07a8a4901ad68dccd25"
  },
  {
    "url": "assets/js/page-4dc00f25.8a3a344b.js",
    "revision": "62837f10961122fcee9c59ce3da68c73"
  },
  {
    "url": "assets/js/page-4dc54ba5.bfda6f8f.js",
    "revision": "a9ca4ed62280573dd99fa60d9325b7e2"
  },
  {
    "url": "assets/js/page-4df429d2.ddf0b366.js",
    "revision": "64188cc0651ad9670921df5de39ddf5b"
  },
  {
    "url": "assets/js/page-518ca8d8.4052e7d3.js",
    "revision": "4d9110d62cf9bff4948038a0cd713596"
  },
  {
    "url": "assets/js/page-55a376be.69cadd00.js",
    "revision": "b0894f7c35d000bd8e941859b18a3dc2"
  },
  {
    "url": "assets/js/page-59cd63bf.79e1b51e.js",
    "revision": "24de78d3f3021694b028f873f0af80ef"
  },
  {
    "url": "assets/js/page-5cdb680e.d96686d0.js",
    "revision": "683910b8e89c33f3fab1cbb965378264"
  },
  {
    "url": "assets/js/page-5edad598.b2087b49.js",
    "revision": "b5f1c0e5307d9ea9a1cf9a778aa08abb"
  },
  {
    "url": "assets/js/page-66061c06.d71fc6bd.js",
    "revision": "e44b77dc5fe9fd98c863a215a8a20989"
  },
  {
    "url": "assets/js/page-6890df9a.a10862b5.js",
    "revision": "30571a00e09a3d10e21bd7b83cc7fe02"
  },
  {
    "url": "assets/js/page-6dbff0ea.720f27d4.js",
    "revision": "0ea24327ecf1538127114bcaff58f916"
  },
  {
    "url": "assets/js/page-70612fe6.7a3ff2b3.js",
    "revision": "61da7514bf88ed8abf2d72a1805c3b31"
  },
  {
    "url": "assets/js/page-720c8312.ff26da61.js",
    "revision": "32f2f8bfa36f30135b277a19e0dd0b42"
  },
  {
    "url": "assets/js/page-74a44f51.9450d5e2.js",
    "revision": "1fcace2c8c946fb248b5bca75e5e0997"
  },
  {
    "url": "assets/js/page-7507c3f6.f23ff127.js",
    "revision": "d1cf0afdf2e6769dd76460b07f7c8c52"
  },
  {
    "url": "assets/js/page-7690c622.19462db7.js",
    "revision": "396ad143ddfb3281258cc941e3040e38"
  },
  {
    "url": "assets/js/page-7bfb30a6.4c568ee6.js",
    "revision": "2de25c2b361a17ff983705df9a444f61"
  },
  {
    "url": "assets/js/page-7d3a6963.902e9f6f.js",
    "revision": "d2702c6c49559674a0b2294d727412bf"
  },
  {
    "url": "assets/js/page-7e6b5e12.04753808.js",
    "revision": "9e124ad6622f6ed01ae8ef1ecd91a6e9"
  },
  {
    "url": "assets/js/page-82c2c642.b7d852d1.js",
    "revision": "673e7ea008e49b8bb07c30b239ac1a1f"
  },
  {
    "url": "assets/js/page-85f4c948.5ae4876b.js",
    "revision": "d3b5355c8de534f65c7d2799aba050a7"
  },
  {
    "url": "assets/js/page-8892394c.dc48616d.js",
    "revision": "f9a18e68a50357cfb7a7415f9ee546b2"
  },
  {
    "url": "assets/js/page-89b130dc.24505c4a.js",
    "revision": "1f41b6ba0dc7d6e2a979b1100db7e8ec"
  },
  {
    "url": "assets/js/page-8da9df6c.e0dc4ef6.js",
    "revision": "ba91d381c8d702277bb844d3f9fd6265"
  },
  {
    "url": "assets/js/page-916af89c.b8772ecd.js",
    "revision": "c583966635a4104868ca86a9d04adb7b"
  },
  {
    "url": "assets/js/page-9a2a43a4.20e13c27.js",
    "revision": "3fd0bf6fa0d29047840651d51dbb40c4"
  },
  {
    "url": "assets/js/page-9ec1a766.0be80321.js",
    "revision": "acdb71edae141001556782fa5ba9302e"
  },
  {
    "url": "assets/js/page-a6174872.3fd957b6.js",
    "revision": "83f8bb7e89d3bb1ba76d4e99a23970ed"
  },
  {
    "url": "assets/js/page-aab392fc.5f3eb4aa.js",
    "revision": "0722c4075c2cd015872fa275f47706a2"
  },
  {
    "url": "assets/js/page-ace574d0.c5d69f6d.js",
    "revision": "18c5f378f308d379ce846d52c58d46f5"
  },
  {
    "url": "assets/js/page-ad24ce34.66340714.js",
    "revision": "e66c65e4f64cc7cb720ada33ec8e3411"
  },
  {
    "url": "assets/js/page-b0521034.7d24da04.js",
    "revision": "1391bb6727aae2be632d3239b320c704"
  },
  {
    "url": "assets/js/page-b0d90ce6.06ccb842.js",
    "revision": "d406c9662845ca136b561bb3d00372a6"
  },
  {
    "url": "assets/js/page-b40de7ce.be6fa7de.js",
    "revision": "71e03f074d408cc358c4391ea5d64b3e"
  },
  {
    "url": "assets/js/page-c26b0310.43f05655.js",
    "revision": "4cbadb3a082487f2f1b8a76f0b8396ac"
  },
  {
    "url": "assets/js/page-c4bdd70e.2b008e2e.js",
    "revision": "221bef5c44ab663f829644352f6ebb56"
  },
  {
    "url": "assets/js/page-c5f1a60e.fd55cd9a.js",
    "revision": "34fff64614c6790ddea9b3ce7e9439fc"
  },
  {
    "url": "assets/js/page-c60be50a.0447a053.js",
    "revision": "e5f3e0e64a867e7fc2bbade3d349fe3e"
  },
  {
    "url": "assets/js/page-d6c4343e.7bae654f.js",
    "revision": "9833ac1240b9d176148e05aff8d9423b"
  },
  {
    "url": "assets/js/page-e468b710.20a2303b.js",
    "revision": "d46c7cc8fd36a25aa962101404299a8f"
  },
  {
    "url": "assets/js/page-e72e49e8.a5719abb.js",
    "revision": "c5c28bb09a96b1b35dbbeabacc1a8023"
  },
  {
    "url": "assets/js/page-ed303fba.0c1d237d.js",
    "revision": "79d9db37e8cd763121a9df602f0953fe"
  },
  {
    "url": "assets/js/page-f313c186.a37797d0.js",
    "revision": "4b2c55686b792edd7638e50b5f9bb302"
  },
  {
    "url": "assets/js/vendors~flowchart.8c3130c5.js",
    "revision": "f574187a20c8f7843d2b6573b6482b7a"
  },
  {
    "url": "assets/js/vendors~layout-Layout.c3d364c2.js",
    "revision": "cebd2eb6a0b62de94792e3f1ef64e3bd"
  },
  {
    "url": "category/index.html",
    "revision": "dbcb2244fdff824093c4e4f47a18dd09"
  },
  {
    "url": "Coding/CodeReview/code-review-memo.html",
    "revision": "31d19c648acea5b5f42f82db59528254"
  },
  {
    "url": "Coding/coding-tips.html",
    "revision": "52624fd7d3be4e27f0170997c19f4bce"
  },
  {
    "url": "Coding/CSharp/AutoMapper-class繼承後之對應.html",
    "revision": "b9e8e7d6a2106b745c84bb4869356cd6"
  },
  {
    "url": "Coding/CSharp/csharp-tips.html",
    "revision": "37dac98ccff08acdcd39dc61d01a4411"
  },
  {
    "url": "Coding/CSharp/String-Concatenate.html",
    "revision": "cb658400fdf03a056b3c0b473f2b56a0"
  },
  {
    "url": "Coding/CSharp/例外處理.html",
    "revision": "c2c87af41338ea8402c2e91249820fe8"
  },
  {
    "url": "Coding/CSharp/變數命名.html",
    "revision": "16c3594d9548d5ed0c03b6919cda2f05"
  },
  {
    "url": "Coding/CSharp/責任鏈.html",
    "revision": "ecea1113362a8774c3768cc745c10a6c"
  },
  {
    "url": "Coding/CSharp/責任鏈2.html",
    "revision": "37dd69b26b2eed4ffbeaa47dd6c9ced3"
  },
  {
    "url": "Coding/CSharp/責任鏈3.html",
    "revision": "450924ce103efa3aeeb7af2fe5a4e890"
  },
  {
    "url": "Coding/Front-End/awesome-graphic-resources.html",
    "revision": "a72cdcdd1f132b0a169bab3730f90197"
  },
  {
    "url": "Coding/Front-End/awesome-pwa.html",
    "revision": "edc01a56303766cf2922fd282f7fa031"
  },
  {
    "url": "Coding/Front-End/CSS/awesome-css.html",
    "revision": "6e90306e6398b08665ad1a86c13d41d0"
  },
  {
    "url": "Coding/Front-End/CSS/css-parameters.html",
    "revision": "4b6e719288203256f6aa3487d713a952"
  },
  {
    "url": "Coding/Front-End/CSS/css-tips.html",
    "revision": "7c23f53b6df40a9b08a6aa67a17ba099"
  },
  {
    "url": "Coding/Front-End/Security/開新分頁.html",
    "revision": "197907786f8906b27e2c341cd63d76e7"
  },
  {
    "url": "Coding/JS/awesome-js.html",
    "revision": "1c62b25937e8587194aef7b883597397"
  },
  {
    "url": "Coding/JS/js-tips.html",
    "revision": "48cb5027488e0f2952d8a5d6ad577ddd"
  },
  {
    "url": "Coding/JS/Module Bundler/Webpack/awesome-webpack.html",
    "revision": "be6c553ff1ea875d766e478ab33b1dd3"
  },
  {
    "url": "Coding/JS/Vue/awesome-vue.html",
    "revision": "344041fcfd4dc0a0f720817eb0a139e0"
  },
  {
    "url": "Coding/JS/Vue/vue-basic-tutorial/index.html",
    "revision": "865394e4412d27e6fb7d95d76b0c0cae"
  },
  {
    "url": "Coding/progessive-design.html",
    "revision": "edbdaeeb8c69682a919a12909d36242c"
  },
  {
    "url": "Coding/Server/IIS/iis-memo.html",
    "revision": "1d6ad128be760e688d5ba65739db7738"
  },
  {
    "url": "Coding/SQL/sql-memo.html",
    "revision": "e541d35f6c98c3b14dcfc6a52a0902ce"
  },
  {
    "url": "Coding/SQL/StoredProcedure/cursor-syntax-memo.html",
    "revision": "350b1ecc9605dd3da11355780ce521dd"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/1. 心/index.html",
    "revision": "65cdb6a2a7fa86e0ee0379bf8729a6b4"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/1. 心/TMP.html",
    "revision": "2986fb54e2c0ab086e1b28c5d42c43f5"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/1. 心/心理戰.html",
    "revision": "9f023bd07ce389ff092ab208c4694478"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/2. 技/index.html",
    "revision": "ec122e56b2ce0f27de2959506725faa1"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/2. 技/神小跳.html",
    "revision": "ba6b2f70662ca3d9a7c69cc5d791dc43"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/2. 技/視野變換.html",
    "revision": "e834496d111843108d26e4c111a09d00"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/2. 技/走位.html",
    "revision": "1401c9c4109ba502250c2c45e0be2040"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/2. 技/跳點.html",
    "revision": "d2ba37f8a11af5c73826103c4617b63b"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/2. 技/預出手.html",
    "revision": "60f9781cba36f8b82dc72026ae1568ff"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/3. 體/index.html",
    "revision": "33ab75fccfb8e56e1070cef5388a7cd5"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/4. 群/index.html",
    "revision": "7712a0103416b320f9dc2116cb579550"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/4. 群/卡位.html",
    "revision": "2034505424006a4020fe00bd13b84246"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/4. 群/組隊.html",
    "revision": "5ea90eb58d17b3cfa82c34e32c9c955e"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/5. 略/index.html",
    "revision": "791867a032a8023d280b8d6419b8ab85"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/5. 略/局勢.html",
    "revision": "0afbb8433b64c68afcecdbba2210107c"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/6. 決/index.html",
    "revision": "3e6cd712e0764271bb70f94ea7c085cd"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/index.html",
    "revision": "8321658c21ba2b92c94f9440a6862bfd"
  },
  {
    "url": "Game/FEZ/2. 國戰步兵戰策略/index.html",
    "revision": "d80591d0847cf1d3e800f3ded7a129a6"
  },
  {
    "url": "Game/FEZ/2. 國戰步兵戰策略/僻地戰.html",
    "revision": "f5bad3b6965c567265b9255708a9d120"
  },
  {
    "url": "Game/FEZ/3. 各職玩法/刀.html",
    "revision": "2ed95cb86e3dcfa9abb24d7644f2fba8"
  },
  {
    "url": "Game/FEZ/3. 各職玩法/雙修.html",
    "revision": "65c914579dc43ab09062c178f3945a6a"
  },
  {
    "url": "Game/FEZ/4. 2on/index.html",
    "revision": "7dd140eb1969700bab94c5d02e1f2750"
  },
  {
    "url": "Game/FEZ/4. 2on/玩法介紹.html",
    "revision": "fc06b3fc03c9b2d93fa22bb88570cffe"
  },
  {
    "url": "Game/FEZ/X. Theorem/HMM.html",
    "revision": "99975f83197c736e6c603c9f786012e3"
  },
  {
    "url": "hello-vuejcblog.html",
    "revision": "62018aab09a0fe12bfa87f26d8e76fa7"
  },
  {
    "url": "icon.png",
    "revision": "f1276345da23f2967fa54b08709e0d9b"
  },
  {
    "url": "icon/test0.png",
    "revision": "bc278be9745f5fec074429e789a0b788"
  },
  {
    "url": "icon/test1.png",
    "revision": "1e193111d6caa4795546c38b0bc62e9b"
  },
  {
    "url": "icon/test2.png",
    "revision": "f701ddafc6117ec3d2d39fb25ced312b"
  },
  {
    "url": "icon/test3.png",
    "revision": "3176400944c39ff3572109715063e8d7"
  },
  {
    "url": "icon/test4.png",
    "revision": "939002491ea9c37d3704f8a1d1dec73d"
  },
  {
    "url": "icon/test5.png",
    "revision": "c1d465a8f1bd2bb8837b34b5745a319f"
  },
  {
    "url": "icon/test6.png",
    "revision": "791ab16a38b3bca4726d9f9a4fe6615c"
  },
  {
    "url": "icon/test7.png",
    "revision": "f380be64259870ecfd7237c7d9af037e"
  },
  {
    "url": "icon/test8.png",
    "revision": "f380be64259870ecfd7237c7d9af037e"
  },
  {
    "url": "icon/test9.png",
    "revision": "f1276345da23f2967fa54b08709e0d9b"
  },
  {
    "url": "img/fez/2on/fight_area.png",
    "revision": "8ad40421297c21af2519188e79e10f79"
  },
  {
    "url": "img/fez/2on/map_setting.png",
    "revision": "f42ac980c3e648af05ce10a1639ceb85"
  },
  {
    "url": "img/fez/2on/卡位1.png",
    "revision": "0dc25c30d04a1c7585b5de389916f012"
  },
  {
    "url": "img/fez/2on/卡位2.png",
    "revision": "1a0fe04cb16431d9332f32f1c416a7a4"
  },
  {
    "url": "img/fez/2on/站位.png",
    "revision": "c01bf90c3a6c14c270a05c8dd07fa68e"
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
    "revision": "20b0aefc6885747ea923d6f00aa3f097"
  },
  {
    "url": "search/index.html",
    "revision": "4b6d053c403cd37531b4acc97548ce4d"
  },
  {
    "url": "tag/index.html",
    "revision": "3deb04a50f9054ac22ce90e918c14be8"
  },
  {
    "url": "VueJCBlog/Development/article/hello-vuejcblog.html",
    "revision": "ebd1b3fa10a6ed4bee6f6a8071882ba8"
  },
  {
    "url": "VueJCBlog/Development/article/test/test-comment.html",
    "revision": "230b96e43741f26033dc9c37f6ba7ae2"
  },
  {
    "url": "VueJCBlog/Development/article/test/test-lazy-load.html",
    "revision": "6a31aa8b37d5eb093f8502b995356001"
  },
  {
    "url": "VueJCBlog/Development/article/test/test-lazy-load2.html",
    "revision": "d03da8cf1102a82f7ce8654f4ae47927"
  },
  {
    "url": "VueJCBlog/Feature/about-page.html",
    "revision": "326aeebb7584610084e69591b4f1d6b7"
  },
  {
    "url": "VueJCBlog/Feature/archive-page.html",
    "revision": "dcbf78b95fb149ef921dc659dd84d29b"
  },
  {
    "url": "VueJCBlog/Feature/category-page.html",
    "revision": "599834fd1297e3d88ae705edc03d486e"
  },
  {
    "url": "VueJCBlog/Feature/common-feature.html",
    "revision": "6fe1908370609dd5e943df116c832203"
  },
  {
    "url": "VueJCBlog/Feature/index-page.html",
    "revision": "c22297ca07de611060a27b46fa556d7f"
  },
  {
    "url": "VueJCBlog/Feature/index.html",
    "revision": "e1247db8d7003828b003f52a8ce21902"
  },
  {
    "url": "VueJCBlog/Feature/post-page.html",
    "revision": "4cd0ce1f97386863244d1816f15dcff2"
  },
  {
    "url": "VueJCBlog/Feature/search-page.html",
    "revision": "e3d60b1699ffe3edcf6e2502abd46da3"
  },
  {
    "url": "VueJCBlog/Feature/sidebar-feature.html",
    "revision": "2c50dbc5c542c81885527795fff9b81d"
  },
  {
    "url": "VueJCBlog/Feature/tag-page.html",
    "revision": "86f554c6e8100d9118b2cf9c4200c4da"
  },
  {
    "url": "VueJCBlog/Installation.html",
    "revision": "ee9935e0f8cbb055cbff5d53305bcdfc"
  },
  {
    "url": "VueJCBlog/Quick-Start.html",
    "revision": "97aa93facc1c11b81b412d2d0e0e58a1"
  },
  {
    "url": "VueJCBlog/Usage/Container/index.html",
    "revision": "ad4350e4ed3479056fe78695a42b9141"
  },
  {
    "url": "VueJCBlog/Usage/front-matter.html",
    "revision": "6c609b7f3877359c2a7070a64fa1c1db"
  },
  {
    "url": "VueJCBlog/Usage/index.html",
    "revision": "2cc369407ff3c10f89ce5b3b232b935d"
  },
  {
    "url": "VueJCBlog/Usage/Markdown/advanced.html",
    "revision": "01188984846ba5f3f8b424f6115ad6d2"
  },
  {
    "url": "VueJCBlog/Usage/Markdown/basic.html",
    "revision": "efc19f5a4278152ca763179e70441a1c"
  },
  {
    "url": "VueJCBlog/Usage/Markdown/flow-chart.html",
    "revision": "3c5c4fc76c5ee9948aac29ef2e22094f"
  },
  {
    "url": "VueJCBlog/Usage/Markdown/index.html",
    "revision": "87ff47e7bfa5bfd7e1a9fb65f2760e3a"
  },
  {
    "url": "VueJCBlog/Usage/Markdown/link.html",
    "revision": "e7562b6c2247548a76dabe2c2ab6edcc"
  },
  {
    "url": "VueJCBlog/Usage/Slide.html",
    "revision": "12a5a9ec29f5691986d3b6a7dc1754c5"
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
