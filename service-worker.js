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
    "revision": "269710aebbb41f085129c35bf92b7e56"
  },
  {
    "url": "About/index.html",
    "revision": "31efec851b00535beee7c187b45adb68"
  },
  {
    "url": "archive/index.html",
    "revision": "58835dfecc697c4dcf7a28811e0cdc67"
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
    "url": "assets/img/1.b582708c.jpg",
    "revision": "b582708ca3b3cda9d42bace00daa2f78"
  },
  {
    "url": "assets/img/1.e21543dc.jpg",
    "revision": "e21543dcedd65da2bb46151d501f6ac3"
  },
  {
    "url": "assets/img/2.02d26cc1.jpg",
    "revision": "02d26cc163bed4428ddc2d900dc2797b"
  },
  {
    "url": "assets/img/2.16d67fa8.jpg",
    "revision": "16d67fa819eb9ed1bc9964733ff3229a"
  },
  {
    "url": "assets/img/3.33f073cb.jpg",
    "revision": "33f073cbc11b65b40be87bcd392a8792"
  },
  {
    "url": "assets/img/3.677e9382.jpg",
    "revision": "677e9382e71e6f4a10a362ab4d6a024e"
  },
  {
    "url": "assets/img/4.65320b0d.jpg",
    "revision": "65320b0d59c9b53fe87e0c4b5b966815"
  },
  {
    "url": "assets/img/4.d40d7534.jpg",
    "revision": "d40d75344cb707ae4717d57493fb8bf2"
  },
  {
    "url": "assets/img/5.a09a79ff.jpg",
    "revision": "a09a79ffc9e262124b3e4546de7c0a46"
  },
  {
    "url": "assets/img/6.d1e49b88.jpg",
    "revision": "d1e49b8860fa3f1552bb1b6a63c8cb4c"
  },
  {
    "url": "assets/img/6.fb14f833.jpg",
    "revision": "fb14f83357255da1a9103ba7cde0b5fb"
  },
  {
    "url": "assets/img/7.922e30cd.jpg",
    "revision": "922e30cd5cf9f5a20539b346c75c66ed"
  },
  {
    "url": "assets/img/8.c3eacf32.jpg",
    "revision": "c3eacf32abc5fdd4f444141c3fb65a3d"
  },
  {
    "url": "assets/img/9.f5fc7afc.jpg",
    "revision": "f5fc7afc04ba38fb4f5838fdcd696a96"
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
    "url": "assets/js/100.42686d99.js",
    "revision": "a89b79ba1fe69af62de172509fc9d7d6"
  },
  {
    "url": "assets/js/101.bbc4e875.js",
    "revision": "1f63886bc4ec49037799f16ceb1a18d6"
  },
  {
    "url": "assets/js/102.e0c92941.js",
    "revision": "9c6fa5c18828476af603df7767524466"
  },
  {
    "url": "assets/js/103.9ca8d1d5.js",
    "revision": "8ca979f1f7f7615f6e2baec16b31e2b0"
  },
  {
    "url": "assets/js/104.5ff468ec.js",
    "revision": "57f474350f7b828de619a86565ce2cda"
  },
  {
    "url": "assets/js/105.a1fd975c.js",
    "revision": "0e3ba3497167837ea22f5ab7174dcb93"
  },
  {
    "url": "assets/js/106.ac551e6d.js",
    "revision": "81b88c464441f7cf1f807ccdf1c706c0"
  },
  {
    "url": "assets/js/107.4f924f68.js",
    "revision": "c040c7444c76bdc3852af05790a21f57"
  },
  {
    "url": "assets/js/108.a7915cba.js",
    "revision": "39026fc8945105a6bad33b78ea105329"
  },
  {
    "url": "assets/js/109.ddeb775e.js",
    "revision": "31346248b9c99a9413bf5701ce3acbca"
  },
  {
    "url": "assets/js/110.62f9567f.js",
    "revision": "55742f028c0ba6b39ce50dbd8b5a6af3"
  },
  {
    "url": "assets/js/111.b8a535a0.js",
    "revision": "7fbe8bd8d117185fe9794944b5988172"
  },
  {
    "url": "assets/js/112.5342a375.js",
    "revision": "95f6dcb8d25a3047d12f1dc74d9c231d"
  },
  {
    "url": "assets/js/113.4d908dd6.js",
    "revision": "8a75d56ac88bc27b65b6a7a1ff8c075f"
  },
  {
    "url": "assets/js/114.e97fb82f.js",
    "revision": "ae1584f4f1c5b0650eec0df43d96c4f5"
  },
  {
    "url": "assets/js/115.55f93c71.js",
    "revision": "6469ea635facb11b4545ef892dfb1dad"
  },
  {
    "url": "assets/js/116.1e62ddd0.js",
    "revision": "1bfa70d333aa06f0eed5d247d21f6556"
  },
  {
    "url": "assets/js/117.b6ccc7fe.js",
    "revision": "1169f55967dacb82a3ea09983c15a1d7"
  },
  {
    "url": "assets/js/118.ba53a274.js",
    "revision": "8a205622ac4ba0c8ed529ad2b04a7106"
  },
  {
    "url": "assets/js/119.122d3d25.js",
    "revision": "bd189bcc9eaf9325d4f89e114157e938"
  },
  {
    "url": "assets/js/120.70a1e8a6.js",
    "revision": "05940a9bc5c4beeaf92c17c677775c4a"
  },
  {
    "url": "assets/js/121.6a9b3840.js",
    "revision": "7c963c63263d03a61e8cd52df727bce2"
  },
  {
    "url": "assets/js/2.fe5781d0.js",
    "revision": "a08313653b77b200359c7ff1f810f78b"
  },
  {
    "url": "assets/js/3.00466cfa.js",
    "revision": "7546530de6f4deced56eaceefebc6366"
  },
  {
    "url": "assets/js/4.ba3508a2.js",
    "revision": "e9288e16a8cf2bafb446239b709d1a0f"
  },
  {
    "url": "assets/js/5.60baeb67.js",
    "revision": "5b8d9ee461f38070ea68f2e5265fbdd5"
  },
  {
    "url": "assets/js/6.441fbabc.js",
    "revision": "42702391e3fc666a7f1b14d33b34c276"
  },
  {
    "url": "assets/js/97.6e2cf321.js",
    "revision": "7757f80f9c7a95d5a1230fe40e9a4f2c"
  },
  {
    "url": "assets/js/98.aade59a6.js",
    "revision": "9b1dc783c25de84ad969d8cc3a0b036c"
  },
  {
    "url": "assets/js/99.03d576d7.js",
    "revision": "f471f02c83368880b70514ef2651daca"
  },
  {
    "url": "assets/js/app.cf14f044.js",
    "revision": "96b903331ef47bfcf231156d2a47bd9a"
  },
  {
    "url": "assets/js/layout-BaseLayout.0989b0c2.js",
    "revision": "b02bae10ea90094fc3432d1f3da5c15a"
  },
  {
    "url": "assets/js/layout-Layout.8695dd98.js",
    "revision": "08d5d3c62f7c790232414ab30f3a044b"
  },
  {
    "url": "assets/js/layout-NotFound.34841e1a.js",
    "revision": "4b9368dfed8046a06bd711c949c56fb2"
  },
  {
    "url": "assets/js/page-0193e625.a5f6af93.js",
    "revision": "5aaf1f14e6d0e684432beaff91afb818"
  },
  {
    "url": "assets/js/page-021b3aa4.33cba326.js",
    "revision": "9f92b6105798ec2a99e7bf03fdef9715"
  },
  {
    "url": "assets/js/page-0a921c99.8f318e1f.js",
    "revision": "5d90ba6bfe6d2023eb1ec86476ba2ad4"
  },
  {
    "url": "assets/js/page-0c6c4d65.1bef0731.js",
    "revision": "82b3ba1ff68ed188fe68d6e14e571773"
  },
  {
    "url": "assets/js/page-0c7f77bc.b3a61720.js",
    "revision": "88f1fb4aa146cc83d574e82686d2f530"
  },
  {
    "url": "assets/js/page-0d32e5ee.0a6a1a63.js",
    "revision": "04e80217067d8828d996625662feb3b3"
  },
  {
    "url": "assets/js/page-1080dbe2.3a2c6627.js",
    "revision": "966ff9a472deda3576624343d1e5875c"
  },
  {
    "url": "assets/js/page-1a34eb5d.72d24b3f.js",
    "revision": "4422cd81ce2be1cf59877f6d4b68a698"
  },
  {
    "url": "assets/js/page-1c4a4e12.ac6f0625.js",
    "revision": "3de762c826c105eb8f140bf6ae8cecc3"
  },
  {
    "url": "assets/js/page-1ccc22d8.8ee182f3.js",
    "revision": "0b6886acf28d18004b96ee6222656ace"
  },
  {
    "url": "assets/js/page-1db42de8.df10de34.js",
    "revision": "a6bc8408a30680e1c7dea1e4a30d3793"
  },
  {
    "url": "assets/js/page-1e536af9.bf840376.js",
    "revision": "7604dffa7f482e0e69556a9676fac0e2"
  },
  {
    "url": "assets/js/page-21fcb945.b3bbb824.js",
    "revision": "0c873c8e44b35a832b14015265f89bb0"
  },
  {
    "url": "assets/js/page-25bc4f18.1e0cdb9e.js",
    "revision": "e632672d731d21ab7bf1cd5cfa246d59"
  },
  {
    "url": "assets/js/page-27f6ecec.247b9dd9.js",
    "revision": "60b708df12ac803e0d65272e3da26800"
  },
  {
    "url": "assets/js/page-29c918e5.aa14a962.js",
    "revision": "106a10ebd806b984e598220a59eb06ad"
  },
  {
    "url": "assets/js/page-2c6bc4ab.851540cf.js",
    "revision": "d6688a533ce02f8ce7ee3688b9afdbc0"
  },
  {
    "url": "assets/js/page-2e8c0cd0.cadc9cd8.js",
    "revision": "05b6303f8685a98efe435705b75295c1"
  },
  {
    "url": "assets/js/page-320aac86.6acb3cc7.js",
    "revision": "e0edd83624127f357747f1628c7b8fa2"
  },
  {
    "url": "assets/js/page-339369e0.5ea1edd8.js",
    "revision": "59d0cba6a14b697f60871921f670a928"
  },
  {
    "url": "assets/js/page-36d5d2b3.70695a3d.js",
    "revision": "cc18ab250f80a0382402590fc036cc18"
  },
  {
    "url": "assets/js/page-39e05f8b.6331a4f5.js",
    "revision": "0c7dcfe79fa437463f90265ec1595943"
  },
  {
    "url": "assets/js/page-3c8dbd4b.946762e7.js",
    "revision": "ac32c92e2fe7eb0b268b0f87359888a9"
  },
  {
    "url": "assets/js/page-3cdc4745.574d97c5.js",
    "revision": "2ecf38f59a62033ceb6d4cf509c2178b"
  },
  {
    "url": "assets/js/page-3ff73aa5.a9e95e6b.js",
    "revision": "11d3589568a8221cdf97a0c4f84247af"
  },
  {
    "url": "assets/js/page-4144513c.8502e35e.js",
    "revision": "98712d3845ec1ca01147235a7c6ebd8c"
  },
  {
    "url": "assets/js/page-422a7e52.8fde80f5.js",
    "revision": "2288d4a1bd319e808e959d7fe31c4323"
  },
  {
    "url": "assets/js/page-445c88ce.cbea5bb6.js",
    "revision": "17aefdf5904314d77b82e28ff3f229f8"
  },
  {
    "url": "assets/js/page-4478a866.d59f85af.js",
    "revision": "44be662e59ee6192a6a94cd30f92e4fd"
  },
  {
    "url": "assets/js/page-455360d1.3f4a350c.js",
    "revision": "cb25fcca4c4d571983132e300518f52e"
  },
  {
    "url": "assets/js/page-47f71914.7e15db23.js",
    "revision": "0bf0e09a4f84b89205ab8a6b0da49846"
  },
  {
    "url": "assets/js/page-4829d184.f3f7cbfe.js",
    "revision": "d5399c43923f71e29afad4467b0ff89f"
  },
  {
    "url": "assets/js/page-486aacae.42bb6812.js",
    "revision": "e78e39fe25487495546f9d57bb9e4f1d"
  },
  {
    "url": "assets/js/page-4d521b14.2ecd6ff2.js",
    "revision": "f1e19394c77deaf76f28d4a9bfa7bc18"
  },
  {
    "url": "assets/js/page-4d7e2aa5.0c1003db.js",
    "revision": "255e4d9ded0fd1fb93428bced8cb0d72"
  },
  {
    "url": "assets/js/page-4d9fba32.808df9d8.js",
    "revision": "56666904544be5498ef3a1810528a64b"
  },
  {
    "url": "assets/js/page-4dc00f25.17b5bc63.js",
    "revision": "776d5ed586b272d1660b88a43922e3cd"
  },
  {
    "url": "assets/js/page-4dc54ba5.f8e00255.js",
    "revision": "2afd9024f193f83e16876fde8ab8f114"
  },
  {
    "url": "assets/js/page-4df429d2.38886d30.js",
    "revision": "fd285d9d768b820f6598c0b5493a29be"
  },
  {
    "url": "assets/js/page-518ca8d8.508f8b58.js",
    "revision": "963c5a0762ccea13158d9dd815b6ceb8"
  },
  {
    "url": "assets/js/page-55a376be.a2320e53.js",
    "revision": "724e6f899a4f6395e0aa8db7c3d72555"
  },
  {
    "url": "assets/js/page-59cd63bf.c9b4ae9e.js",
    "revision": "4ca8a2e429c85fc2a5086de08fbf88af"
  },
  {
    "url": "assets/js/page-5cdb680e.4d4aa188.js",
    "revision": "c46bf8bfb3a48f589d466e93718e2282"
  },
  {
    "url": "assets/js/page-5de41bb6.44d4c506.js",
    "revision": "59d97573ddf340ba520817663c96c939"
  },
  {
    "url": "assets/js/page-5edad598.1d274f64.js",
    "revision": "cf294c92427003e2510bca7b7d654faf"
  },
  {
    "url": "assets/js/page-64a9a694.5156049f.js",
    "revision": "d7b35e106700ce5c2d804a1ce71819c7"
  },
  {
    "url": "assets/js/page-66061c06.0ad2b2d8.js",
    "revision": "3dd91068af7477be3687ecb8120285d8"
  },
  {
    "url": "assets/js/page-6890df9a.35eb3c99.js",
    "revision": "d8a78ccaf3566619999231f422e32d97"
  },
  {
    "url": "assets/js/page-68b44e7f.8d774750.js",
    "revision": "d0c74c4904fedecde6a5c508df95f13e"
  },
  {
    "url": "assets/js/page-6dbff0ea.17530a3e.js",
    "revision": "0cc89ce3a1cd69bd46cad0eb75f24532"
  },
  {
    "url": "assets/js/page-6f7fa8b4.8db64b3c.js",
    "revision": "5f19fa188ee4fde63c36241e555ee1e6"
  },
  {
    "url": "assets/js/page-70612fe6.7b65562e.js",
    "revision": "93af40e8283b00cf5b2a21d949174c67"
  },
  {
    "url": "assets/js/page-720c8312.e2e7be32.js",
    "revision": "50f4de41127d19646823bc21d3fd1ec7"
  },
  {
    "url": "assets/js/page-74a44f51.3dc13cb9.js",
    "revision": "e67566108341e7af4e3932f13005dbb7"
  },
  {
    "url": "assets/js/page-7507c3f6.0434cafc.js",
    "revision": "353eeab4d25a09f784c3512f88ec59cc"
  },
  {
    "url": "assets/js/page-7690c622.9a4d3bc3.js",
    "revision": "e1958a54fb1bb148941f337814ac763f"
  },
  {
    "url": "assets/js/page-7bfb30a6.edf8e036.js",
    "revision": "fe1177ec939a95987e8e434e0975ac10"
  },
  {
    "url": "assets/js/page-7d3a6963.855b2900.js",
    "revision": "60db8e98879ff23b3126e290f621925d"
  },
  {
    "url": "assets/js/page-7e6b5e12.1bbe797b.js",
    "revision": "3042db501f5fab5cb4cf1f48d4ea59e3"
  },
  {
    "url": "assets/js/page-82c2c642.1833962b.js",
    "revision": "245c94fd3a6a16af7090d1e638eeae0b"
  },
  {
    "url": "assets/js/page-85f4c948.870b9041.js",
    "revision": "c507b214f743c06a0fd19be2c66e11ec"
  },
  {
    "url": "assets/js/page-8892394c.52950366.js",
    "revision": "a8849835b2c47270ab84bbd6dcfe5ab1"
  },
  {
    "url": "assets/js/page-89b130dc.f31dc193.js",
    "revision": "c44dc687a37ca8ed5030ca1b52141768"
  },
  {
    "url": "assets/js/page-8da9df6c.03e82ed2.js",
    "revision": "097175437d6805716a89cca3d9c02967"
  },
  {
    "url": "assets/js/page-916af89c.5d858e3e.js",
    "revision": "6ddcc54012166a04471608cb5d56d49d"
  },
  {
    "url": "assets/js/page-9a2a43a4.6ad8f225.js",
    "revision": "3b121191b8f50e815c3a892ff3947b5b"
  },
  {
    "url": "assets/js/page-9ec1a766.5522c6fa.js",
    "revision": "790ffd54f81d9c7b4283c58af3a67f85"
  },
  {
    "url": "assets/js/page-9f0190e0.e3d0e6a2.js",
    "revision": "93448f1cc726997bd061209abc7eabce"
  },
  {
    "url": "assets/js/page-a6174872.937797c7.js",
    "revision": "0a54e4c704a61440d58a6b109f916b79"
  },
  {
    "url": "assets/js/page-aab392fc.9bb5e026.js",
    "revision": "f8fb331680cfc076db3c8f6341b0039f"
  },
  {
    "url": "assets/js/page-ace574d0.7482eed3.js",
    "revision": "db583fb7c6495470d142011a3aa191b7"
  },
  {
    "url": "assets/js/page-ad24ce34.f5578786.js",
    "revision": "332833c79db907ba93cfd4af3c423af8"
  },
  {
    "url": "assets/js/page-b0521034.cbb69221.js",
    "revision": "de94a29becec561034ae90aacd7ac89b"
  },
  {
    "url": "assets/js/page-b0d90ce6.9d897d62.js",
    "revision": "4ef33b03b249f5d8bab34f08aa73b6df"
  },
  {
    "url": "assets/js/page-b40de7ce.1a191af7.js",
    "revision": "7f3617e4e9df17d2056da1522ed79076"
  },
  {
    "url": "assets/js/page-c26b0310.09e70fbe.js",
    "revision": "3bc5bd7d0aec688e55b9c1aea410dec5"
  },
  {
    "url": "assets/js/page-c4bdd70e.7d303895.js",
    "revision": "57d356595c07a97795b3414f1b3a9162"
  },
  {
    "url": "assets/js/page-c5f1a60e.8696e6af.js",
    "revision": "3fdbb17415128de558e2db3d5844623e"
  },
  {
    "url": "assets/js/page-c60be50a.d7bf924c.js",
    "revision": "5eba74d0c0394d2f89c0ef61e9c8dbf7"
  },
  {
    "url": "assets/js/page-d6c4343e.f3d24f1d.js",
    "revision": "5a511617bbdb106b2e9fc31907c2c94f"
  },
  {
    "url": "assets/js/page-e468b710.85ff796d.js",
    "revision": "2c7ae616e2efa60df0d0bab69e59269f"
  },
  {
    "url": "assets/js/page-e72e49e8.09c9ff85.js",
    "revision": "dc7bfa835e252a7aa115f1257a2d1984"
  },
  {
    "url": "assets/js/page-ed303fba.019db576.js",
    "revision": "8689bd80cc99aa1daf3282a8f14d52f6"
  },
  {
    "url": "assets/js/page-f313c186.b7c9c8e2.js",
    "revision": "2af34ce57ebf1c5ecc597eac8cc7b3e4"
  },
  {
    "url": "assets/js/vendors~flowchart.3b184799.js",
    "revision": "e3a525acd9c81f6cd66613c778ec8785"
  },
  {
    "url": "assets/js/vendors~layout-Layout.128401f6.js",
    "revision": "aedf998521258d157e4a9deca85df180"
  },
  {
    "url": "category/index.html",
    "revision": "1a02af1b0330d90ddfdb1b45cd4e2c0a"
  },
  {
    "url": "Coding/CodeReview/code-review-memo.html",
    "revision": "729eed49ec3cdbb7bd057d91186165fb"
  },
  {
    "url": "Coding/coding-tips.html",
    "revision": "bb917ea4fb23217f909ad92a724236f5"
  },
  {
    "url": "Coding/CSharp/AutoMapper-class繼承後之對應.html",
    "revision": "cc889454fec932e1596ccc95fe856d43"
  },
  {
    "url": "Coding/CSharp/csharp-tips.html",
    "revision": "5e48d8e081136d8ee052b5925a91d714"
  },
  {
    "url": "Coding/CSharp/String-Concatenate.html",
    "revision": "20c40582907bcf02db387fbc2864dfbf"
  },
  {
    "url": "Coding/CSharp/例外處理.html",
    "revision": "4771694afb36c4a1fb58c7ae76d4da60"
  },
  {
    "url": "Coding/CSharp/變數命名.html",
    "revision": "1eef33ac06f7fcfab7852f67f6180fd7"
  },
  {
    "url": "Coding/CSharp/責任鏈.html",
    "revision": "81cd2f036011ac629fb8e47eeff7822e"
  },
  {
    "url": "Coding/CSharp/責任鏈2.html",
    "revision": "4fcddc9eabcf73bf57e832b3aba3c623"
  },
  {
    "url": "Coding/CSharp/責任鏈3.html",
    "revision": "abf3a26842200ca19229209d1b23766f"
  },
  {
    "url": "Coding/Front-End/awesome-graphic-resources.html",
    "revision": "b326d2ca62afc710938c83fef14cf45b"
  },
  {
    "url": "Coding/Front-End/awesome-pwa.html",
    "revision": "1fe2ea771cba526d47d649e35f9af9e9"
  },
  {
    "url": "Coding/Front-End/CSS/awesome-css.html",
    "revision": "61ad4c78eb2e3df28cda12ea173cd54a"
  },
  {
    "url": "Coding/Front-End/CSS/css-parameters.html",
    "revision": "70f6edcaa7514ed8ae30be236ecf79a3"
  },
  {
    "url": "Coding/Front-End/CSS/css-tips.html",
    "revision": "9f160df4befcd5211e22732329933b66"
  },
  {
    "url": "Coding/Front-End/Security/開新分頁.html",
    "revision": "7d04f484382554bd2736cdb12b8e109c"
  },
  {
    "url": "Coding/JS/awesome-js.html",
    "revision": "5c119579ad3de12a0e66c26c39c463dc"
  },
  {
    "url": "Coding/JS/js-tips.html",
    "revision": "ea3ded0e007986e6d3608a91bde49dbe"
  },
  {
    "url": "Coding/JS/Module Bundler/Webpack/awesome-webpack.html",
    "revision": "689638e87142ef6be5461895c22ec81b"
  },
  {
    "url": "Coding/JS/Vue/awesome-vue.html",
    "revision": "e8f0f793734e532a6fa9f5940459e6cd"
  },
  {
    "url": "Coding/JS/Vue/vue-basic-tutorial/index.html",
    "revision": "dbac2454dd76ee38de3de79c66b03e28"
  },
  {
    "url": "Coding/progessive-design.html",
    "revision": "e6102886b5cc3a12274735d01d93c752"
  },
  {
    "url": "Coding/Server/IIS/iis-memo.html",
    "revision": "ebe742b812db03f8357aee0383fb8f01"
  },
  {
    "url": "Coding/SQL/sql-memo.html",
    "revision": "edf332ba52fd79b56cae46c852f1b698"
  },
  {
    "url": "Coding/SQL/StoredProcedure/cursor-syntax-memo.html",
    "revision": "a358c4c20ccc01a047b06b2e32a93ab8"
  },
  {
    "url": "Coding/Website/vue-csarhp-todolist-tutorial/back-end.html",
    "revision": "ef76b3fd0ea7bafe7605ecc13332dd9a"
  },
  {
    "url": "Coding/Website/vue-csarhp-todolist-tutorial/front-end.html",
    "revision": "97f2d9b83bbf3c71f3093f6afd1e1c0f"
  },
  {
    "url": "Coding/Website/vue-csarhp-todolist-tutorial/index.html",
    "revision": "1d271ba3452608c9546e7762e4d6bd9a"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/1. 心/index.html",
    "revision": "6fa0b20d0b5baa40e6cb3b74739c65ea"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/1. 心/TMP.html",
    "revision": "fd4f3a10ef7c11f5e4208410d2ca9b9a"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/1. 心/心理戰.html",
    "revision": "fef123fa47ccbb90d0b8484b47fa987a"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/2. 技/index.html",
    "revision": "c0db51907ece3c0f92063ee5194924cd"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/2. 技/神小跳.html",
    "revision": "93a34921598b40fcd4f1b226a6c58b95"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/2. 技/視野變換.html",
    "revision": "d1135a7ca1acb7f88146b2b1ce6b5ea7"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/2. 技/走位.html",
    "revision": "cd3a342eb84faf97241421f42b2aa34f"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/2. 技/跳點.html",
    "revision": "5fd549d2d8350cc40875e80c861d0fdb"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/2. 技/預出手.html",
    "revision": "bfbac3dbd01bd28143648e483c0f9b12"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/3. 體/index.html",
    "revision": "b19bd8665ca7cdc72628034ddbbf559a"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/4. 群/index.html",
    "revision": "5afcea43667c3f08d8f62d2087c3cfe6"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/4. 群/卡位.html",
    "revision": "d48ec1a17fc88b1750c1d4b9691581c3"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/4. 群/組隊.html",
    "revision": "bb7958a85a410e5b40b49f8827eda994"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/5. 略/index.html",
    "revision": "5db3765dc3854c8d9d5077229d5a0c4a"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/5. 略/局勢.html",
    "revision": "ad429d8445753d222cdea9e249c0e6ec"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/6. 決/index.html",
    "revision": "48b8349d85a19494cedcbbbf8dd7c7f7"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/index.html",
    "revision": "f0e3e0a66b625519d26176fae6ab0eef"
  },
  {
    "url": "Game/FEZ/2. 國戰步兵戰策略/index.html",
    "revision": "dbaa9416fd5dc96dfbfe6caf82a68eb4"
  },
  {
    "url": "Game/FEZ/2. 國戰步兵戰策略/僻地戰.html",
    "revision": "86ebcdd7b5ea813de9ac0f07ff2ca84a"
  },
  {
    "url": "Game/FEZ/3. 各職玩法/刀.html",
    "revision": "9447e99d923392fdb814a91ce80db4f6"
  },
  {
    "url": "Game/FEZ/3. 各職玩法/雙修.html",
    "revision": "9db67c447a34674ca55085810ee4cef2"
  },
  {
    "url": "Game/FEZ/4. 2on/index.html",
    "revision": "2cd2c5808948dfdddd1c990361e08ecf"
  },
  {
    "url": "Game/FEZ/4. 2on/玩法介紹.html",
    "revision": "374bd4fcf083f9027209a1547a0e19c5"
  },
  {
    "url": "Game/FEZ/5. 3on/3on共通玩法介紹.html",
    "revision": "f0ff1cae914c41e22d5c574817921cd5"
  },
  {
    "url": "Game/FEZ/5. 3on/3on刀玩法介紹.html",
    "revision": "28ab73acb0a7c28898c74de1f80c79db"
  },
  {
    "url": "Game/FEZ/5. 3on/3on大劍玩法介紹.html",
    "revision": "13eec46b3c37b1355aa62038078f3b36"
  },
  {
    "url": "Game/FEZ/5. 3on/3on雙修玩法介紹.html",
    "revision": "eddc767edd56d2c52cc9f858c2c284f9"
  },
  {
    "url": "Game/FEZ/5. 3on/index.html",
    "revision": "7a1717db0a51165b42f766940e2b6169"
  },
  {
    "url": "Game/FEZ/X. Theorem/HMM.html",
    "revision": "60f349e35f5065880135d2b38afb18d7"
  },
  {
    "url": "hello-vuejcblog.html",
    "revision": "9a4c83db0e2f11085e2658c85e70c53c"
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
    "url": "img/fez/3on/map_setting_GL.png",
    "revision": "c6fbc725be934ce444c4ac781d63cbe4"
  },
  {
    "url": "img/fez/3on/map_setting.png",
    "revision": "9dc22414004f69ca2aaf5bf56ff39a10"
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
    "revision": "3131f077f4fdb5bb7a735807d6d74c37"
  },
  {
    "url": "search/index.html",
    "revision": "83480536b0f03c87875e20a5c2fd2954"
  },
  {
    "url": "tag/index.html",
    "revision": "6a4c3d3f89e1b9a21094cfe47ff61df0"
  },
  {
    "url": "VueJCBlog/Development/article/hello-vuejcblog.html",
    "revision": "49f6b52e8a08e6ab88e7e38a4d319680"
  },
  {
    "url": "VueJCBlog/Development/article/test/test-comment.html",
    "revision": "c6cd4b872e93f8e8cc001eab956e9442"
  },
  {
    "url": "VueJCBlog/Development/article/test/test-lazy-load.html",
    "revision": "d2e1c7e958661e28eb8aa67d48eacd15"
  },
  {
    "url": "VueJCBlog/Development/article/test/test-lazy-load2.html",
    "revision": "a7a5d3a4a7904b72b0258841cc91b6fd"
  },
  {
    "url": "VueJCBlog/Feature/about-page.html",
    "revision": "5700700ffcf2b44a855d1d3b043f950a"
  },
  {
    "url": "VueJCBlog/Feature/archive-page.html",
    "revision": "53ce7e8df221c6fd84ea202bed40e544"
  },
  {
    "url": "VueJCBlog/Feature/category-page.html",
    "revision": "c489da6607921d0daa9c72705202b8fc"
  },
  {
    "url": "VueJCBlog/Feature/common-feature.html",
    "revision": "b2ecf4144bf242f712b03d569cd19592"
  },
  {
    "url": "VueJCBlog/Feature/index-page.html",
    "revision": "058cf874804e4452a85965a123176011"
  },
  {
    "url": "VueJCBlog/Feature/index.html",
    "revision": "9874d40ee42b46f0dfb9af99652da3cc"
  },
  {
    "url": "VueJCBlog/Feature/post-page.html",
    "revision": "d54c04b3dce02aaae69c67c4d9065c18"
  },
  {
    "url": "VueJCBlog/Feature/search-page.html",
    "revision": "277c1e2d4cfb9f023fb9389dae4f6c83"
  },
  {
    "url": "VueJCBlog/Feature/sidebar-feature.html",
    "revision": "779f74c1cd70407e48345eb5dbb09813"
  },
  {
    "url": "VueJCBlog/Feature/tag-page.html",
    "revision": "ecef2556909d759bd69f4246218fe306"
  },
  {
    "url": "VueJCBlog/Installation.html",
    "revision": "ed34b2d23d279df35f26eafa95193a33"
  },
  {
    "url": "VueJCBlog/Quick-Start.html",
    "revision": "64d46f7a93f8c93e13bc53325b273f59"
  },
  {
    "url": "VueJCBlog/Usage/Container/index.html",
    "revision": "567956c817d72b72aa0e90839fd4e9ec"
  },
  {
    "url": "VueJCBlog/Usage/front-matter.html",
    "revision": "3c663e5c717080f5f637c50843994e8d"
  },
  {
    "url": "VueJCBlog/Usage/index.html",
    "revision": "8b8a4b3a1b87c06c1b7aa3392012290e"
  },
  {
    "url": "VueJCBlog/Usage/Markdown/advanced.html",
    "revision": "b608cc79e4394eeaf0b91c7700735ff6"
  },
  {
    "url": "VueJCBlog/Usage/Markdown/basic.html",
    "revision": "eb0d56bf74313b28ad6a1a06d4c7a6bd"
  },
  {
    "url": "VueJCBlog/Usage/Markdown/flow-chart.html",
    "revision": "fef102d56380dcd863cfb4bb4849afa2"
  },
  {
    "url": "VueJCBlog/Usage/Markdown/index.html",
    "revision": "92189456ee9ba20baace319dc1da499e"
  },
  {
    "url": "VueJCBlog/Usage/Markdown/link.html",
    "revision": "fb63795156dfc6185bc24913f9b87efa"
  },
  {
    "url": "VueJCBlog/Usage/Slide.html",
    "revision": "673965990b81367f66a640135acc41c0"
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
