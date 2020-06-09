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
    "revision": "ec7cbc0cf4ded03c25d3f1810d92f691"
  },
  {
    "url": "About/index.html",
    "revision": "c2682dd7bd7ac0cda09d82a668744ea6"
  },
  {
    "url": "archive/index.html",
    "revision": "1c75988358e95b1cb0dbaab2604cf12d"
  },
  {
    "url": "assets/css/0.styles.f0e7cea7.css",
    "revision": "dd0de86f6d1bfcca0b7272a489756032"
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
    "url": "assets/js/100.3e48495e.js",
    "revision": "7cc6a364d12be0731d26e829ddd267bc"
  },
  {
    "url": "assets/js/101.3358c96d.js",
    "revision": "d9bf9254df58c95b5a0511f67ca351a4"
  },
  {
    "url": "assets/js/102.b68d0335.js",
    "revision": "af06ffff8ad8f5baf90e9523e5bb8ac0"
  },
  {
    "url": "assets/js/103.0d6c406c.js",
    "revision": "dfc2f0cc54a8c1efd95b2f04b6a44801"
  },
  {
    "url": "assets/js/104.8c2f13ed.js",
    "revision": "bdf5f087e31d55ec525d0ce7a314d90a"
  },
  {
    "url": "assets/js/105.989ce1de.js",
    "revision": "9a1d4dccfa4e139013c76bcec9557fc5"
  },
  {
    "url": "assets/js/106.d069212e.js",
    "revision": "98e4316a4bccc3b9b3537d2345733f64"
  },
  {
    "url": "assets/js/107.1730c468.js",
    "revision": "68939f7d0310644096b363f2e06fd027"
  },
  {
    "url": "assets/js/108.c46fe7ee.js",
    "revision": "7acba6ca8ebcadb03fa46d09e30fd388"
  },
  {
    "url": "assets/js/109.b7263601.js",
    "revision": "68cea8051342754b1d19517a1745217d"
  },
  {
    "url": "assets/js/110.ba6f105a.js",
    "revision": "18d032941b07eee934dcba8fea04963f"
  },
  {
    "url": "assets/js/111.4d77229d.js",
    "revision": "4c2995c34ca36fc3d4c784510ce26086"
  },
  {
    "url": "assets/js/112.a89b4523.js",
    "revision": "e48810579330f7977c8c5fe4e90651fa"
  },
  {
    "url": "assets/js/113.e1b485a3.js",
    "revision": "0c8d58607fe0941d6c6bea425e8f414c"
  },
  {
    "url": "assets/js/114.bed2d597.js",
    "revision": "4f82ac8c9fc12c9f317ab3e1eef12c43"
  },
  {
    "url": "assets/js/115.2506578d.js",
    "revision": "ecf1e877286d4f8dc495ecd09025f8fc"
  },
  {
    "url": "assets/js/116.a31c0980.js",
    "revision": "54b4f2d072fe708a4e8064282646121b"
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
    "url": "assets/js/5.e84f7274.js",
    "revision": "513761f92ad5c9f5ca74c83f37be21a2"
  },
  {
    "url": "assets/js/6.441fbabc.js",
    "revision": "42702391e3fc666a7f1b14d33b34c276"
  },
  {
    "url": "assets/js/92.2538b809.js",
    "revision": "122f3bdc35981cf5e8915c3a42ee4fa7"
  },
  {
    "url": "assets/js/93.562a305f.js",
    "revision": "5b368969b4af4d97992d140b4619e678"
  },
  {
    "url": "assets/js/94.8de513b6.js",
    "revision": "e4bda790648c32a25a6a5737bece02aa"
  },
  {
    "url": "assets/js/95.63352f56.js",
    "revision": "3f79db381061425c83149780d8e95dd9"
  },
  {
    "url": "assets/js/96.4bb3ceba.js",
    "revision": "ae1482a24b6270d7d02efe63f8c14ab4"
  },
  {
    "url": "assets/js/97.92bda403.js",
    "revision": "e2424b25c677c8722be8827540f68fcd"
  },
  {
    "url": "assets/js/98.d4700997.js",
    "revision": "1d6170f7766c660d8fa94e39a7841d2f"
  },
  {
    "url": "assets/js/99.1e73db13.js",
    "revision": "90c1bee10de7ec95e94c948f4b8d370c"
  },
  {
    "url": "assets/js/app.382b6428.js",
    "revision": "9223a803a293c149035a2176895179dc"
  },
  {
    "url": "assets/js/layout-BaseLayout.01c0a979.js",
    "revision": "b0bc214db409c07ab336f11004d142d2"
  },
  {
    "url": "assets/js/layout-Layout.000e1246.js",
    "revision": "075380c9dc34f51667f420b5aed629af"
  },
  {
    "url": "assets/js/layout-NotFound.485e815b.js",
    "revision": "67d6cda878f41a3c7d0eac048984b575"
  },
  {
    "url": "assets/js/page-0193e625.e62b4ed5.js",
    "revision": "d3f639d12bb1cc5d61b270d22eb8e89a"
  },
  {
    "url": "assets/js/page-021b3aa4.2560004b.js",
    "revision": "fa8db960d19eb9486366e4ca688a9f66"
  },
  {
    "url": "assets/js/page-0a921c99.3d02d682.js",
    "revision": "575608afd7a8aa099f204379b29c9023"
  },
  {
    "url": "assets/js/page-0c6c4d65.25ed66f9.js",
    "revision": "532d4226a9f753eb079664d332868287"
  },
  {
    "url": "assets/js/page-0c7f77bc.0716dbee.js",
    "revision": "65a3d6489f5dc43291095a201fcfba23"
  },
  {
    "url": "assets/js/page-0d32e5ee.58bf9abf.js",
    "revision": "92f651d0fd09974b9ba87d697a877fea"
  },
  {
    "url": "assets/js/page-1a34eb5d.e7075757.js",
    "revision": "f663ea14b278677dd5de44c0b75dfd66"
  },
  {
    "url": "assets/js/page-1c4a4e12.f71c84cb.js",
    "revision": "4da84d6d3dc6619292c3a024b23afe8a"
  },
  {
    "url": "assets/js/page-1ccc22d8.aca73fc9.js",
    "revision": "26b7fab4c51c9c8f967fb085434dde66"
  },
  {
    "url": "assets/js/page-1db42de8.66ff178f.js",
    "revision": "76006a65fa6729dfa2806afa94aa35af"
  },
  {
    "url": "assets/js/page-1e536af9.801d1445.js",
    "revision": "5b7404b45d0550ae2465ea3132c29e74"
  },
  {
    "url": "assets/js/page-21fcb945.95b1df5e.js",
    "revision": "a739d86bb72d27bb356b0c9e187f870e"
  },
  {
    "url": "assets/js/page-25bc4f18.bb0e6f93.js",
    "revision": "2e5e2f1c741cede063a42953f7539a68"
  },
  {
    "url": "assets/js/page-27f6ecec.c57d8c89.js",
    "revision": "d4891ac9e0456e2493236cb476475747"
  },
  {
    "url": "assets/js/page-29c918e5.d9f4a7ef.js",
    "revision": "bd36ff3e2a4ece2d2fcb007d482357e2"
  },
  {
    "url": "assets/js/page-2c6bc4ab.0b129507.js",
    "revision": "9d38934c411e1d13f75cc4ae2fb271fe"
  },
  {
    "url": "assets/js/page-2e8c0cd0.1dfe99f5.js",
    "revision": "6e6d0cefd031ce22696d92863c16eff8"
  },
  {
    "url": "assets/js/page-320aac86.4f6add63.js",
    "revision": "3d031bfc75fbb16f20f60acfc402f2f6"
  },
  {
    "url": "assets/js/page-339369e0.e1bba620.js",
    "revision": "02a172da084ec55c60024b8c8676323c"
  },
  {
    "url": "assets/js/page-36d5d2b3.680f916d.js",
    "revision": "118bef65fff4d5917cf94b7bb977c0bc"
  },
  {
    "url": "assets/js/page-39e05f8b.5cfcf540.js",
    "revision": "67af2e413166303f91aba3e73b4da8a9"
  },
  {
    "url": "assets/js/page-3c8dbd4b.3e7e2f1e.js",
    "revision": "27833d3c521323d44bba2a4e0c862972"
  },
  {
    "url": "assets/js/page-3cdc4745.09c9cc80.js",
    "revision": "b2a821017b8f1c0e17ea50b3bdf2fb36"
  },
  {
    "url": "assets/js/page-4144513c.59400e7e.js",
    "revision": "46183db31103a66ca8b8e69511fbcba3"
  },
  {
    "url": "assets/js/page-422a7e52.80a36e6c.js",
    "revision": "032cbdad5a5879b86d021ece6287a3cf"
  },
  {
    "url": "assets/js/page-445c88ce.bdb7dd65.js",
    "revision": "286dd9c0a42f785f0efe3198a08a7aef"
  },
  {
    "url": "assets/js/page-4478a866.8e9d1336.js",
    "revision": "c0e42806ad31580475e231b4a8faea29"
  },
  {
    "url": "assets/js/page-455360d1.ea1a7895.js",
    "revision": "df3507a89c1fed965c57493ce987059b"
  },
  {
    "url": "assets/js/page-47f71914.c9b8e49b.js",
    "revision": "74a5dafc6cdd14fdc347114e45b59f1d"
  },
  {
    "url": "assets/js/page-4829d184.34acecf9.js",
    "revision": "f2dbe54e6f25beaf3b8c504a0ff4fe9a"
  },
  {
    "url": "assets/js/page-486aacae.2a0d79c1.js",
    "revision": "2042ea2d5b97318548905698348dd8a7"
  },
  {
    "url": "assets/js/page-4d521b14.6d877119.js",
    "revision": "6764c23f318aa4b0cf510b299f2c02f1"
  },
  {
    "url": "assets/js/page-4d7e2aa5.a12c7d09.js",
    "revision": "1ca225038b0563a8d01bee84aa672263"
  },
  {
    "url": "assets/js/page-4d9fba32.d3365ae0.js",
    "revision": "0a6887dcb46500e4555a6dc915921b3b"
  },
  {
    "url": "assets/js/page-4dc00f25.40b20fd6.js",
    "revision": "541af78ec13362f0b55de9b21d4f8452"
  },
  {
    "url": "assets/js/page-4dc54ba5.d985f9d7.js",
    "revision": "25230f578efbd3fe50248ef5061abfa3"
  },
  {
    "url": "assets/js/page-4df429d2.8905d653.js",
    "revision": "34881c75e0906b9684ff997fe223bd9e"
  },
  {
    "url": "assets/js/page-518ca8d8.c700e072.js",
    "revision": "c6e0f45b74ea35177edeaa365a36eb18"
  },
  {
    "url": "assets/js/page-55a376be.da765b38.js",
    "revision": "1a1b94ee110bafebf603ffe0bd8e3c9d"
  },
  {
    "url": "assets/js/page-59cd63bf.bbf6a235.js",
    "revision": "c0a4a3e197e063acd2d451da7644f656"
  },
  {
    "url": "assets/js/page-5cdb680e.fcec6228.js",
    "revision": "8c52c7d0ed731120471608d626df0215"
  },
  {
    "url": "assets/js/page-5edad598.922f3748.js",
    "revision": "d3e0f21fb8547989d77e37b54e7683f8"
  },
  {
    "url": "assets/js/page-64a9a694.941a15dd.js",
    "revision": "10152baa7b8d8463cce0e5033ab39581"
  },
  {
    "url": "assets/js/page-66061c06.2ac2beaf.js",
    "revision": "e7a83f8a0e47bf7dcc1ebc7c59b32b9d"
  },
  {
    "url": "assets/js/page-6890df9a.5f66ad94.js",
    "revision": "0d0402caff086b0f546d1ce6e3359a68"
  },
  {
    "url": "assets/js/page-68b44e7f.40902861.js",
    "revision": "3b86325857da5fc7f7fcb0badf8cbf41"
  },
  {
    "url": "assets/js/page-6dbff0ea.ab265859.js",
    "revision": "68a3846527200ca0e90453bdf39d0ab7"
  },
  {
    "url": "assets/js/page-70612fe6.87bd3b25.js",
    "revision": "6519aaeb1fac331389012e9ce59eeaed"
  },
  {
    "url": "assets/js/page-720c8312.42553bf3.js",
    "revision": "e887e3359c2f6aa6d07d472a9021186c"
  },
  {
    "url": "assets/js/page-74a44f51.1766dd8b.js",
    "revision": "7ceb5aedb5720520b59ba8e1a8b38d6c"
  },
  {
    "url": "assets/js/page-7507c3f6.59f97bb1.js",
    "revision": "3ca8fb3fbda181c8c5da675ee778fc7c"
  },
  {
    "url": "assets/js/page-7690c622.d7d18762.js",
    "revision": "8bd17f344aa8652d8aeb832a034f8bb9"
  },
  {
    "url": "assets/js/page-7bfb30a6.0954d2b7.js",
    "revision": "c5303271d44dabe9a58d874ea2c80000"
  },
  {
    "url": "assets/js/page-7d3a6963.49708b78.js",
    "revision": "9ba567782ca3eb6563bb39771f0f474c"
  },
  {
    "url": "assets/js/page-7e6b5e12.62612646.js",
    "revision": "953157f2b1b38421e1a4e94ac49c29b9"
  },
  {
    "url": "assets/js/page-82c2c642.f387d1ad.js",
    "revision": "917664f83b4cb2f3dd49f14d8dfee015"
  },
  {
    "url": "assets/js/page-85f4c948.5594668e.js",
    "revision": "f883db720fa1557231b6e964aa711d88"
  },
  {
    "url": "assets/js/page-8892394c.964f23f2.js",
    "revision": "603d6f5aff5fdb487954b3dbca9a28b9"
  },
  {
    "url": "assets/js/page-89b130dc.37983452.js",
    "revision": "ecb86b33c601e69a2bcb6ccaaf56610b"
  },
  {
    "url": "assets/js/page-8da9df6c.297fd113.js",
    "revision": "d3b2dfd85e4f77e6733d5a98b8f45e12"
  },
  {
    "url": "assets/js/page-916af89c.6f28c2ff.js",
    "revision": "b49a60b4b617b7cd73814609f467eb50"
  },
  {
    "url": "assets/js/page-9a2a43a4.8652a696.js",
    "revision": "c0c35a987eed2ac3151703890e1f7ccc"
  },
  {
    "url": "assets/js/page-9ec1a766.635ecd58.js",
    "revision": "2328f4efb98eb7b71f2a3800f2a7a6ae"
  },
  {
    "url": "assets/js/page-a6174872.b62ec896.js",
    "revision": "2814536e52eeecd04d38d77af2545147"
  },
  {
    "url": "assets/js/page-aab392fc.1e4ec10e.js",
    "revision": "8ca5b754ddc091460ddf77c848aebc70"
  },
  {
    "url": "assets/js/page-ace574d0.a3d0c59f.js",
    "revision": "7b07d5257e9c1c4b4f7667b2140f3c70"
  },
  {
    "url": "assets/js/page-ad24ce34.fe8db21e.js",
    "revision": "3c531d2aaf232ab542dc42f8b70883e5"
  },
  {
    "url": "assets/js/page-b0521034.28f270a7.js",
    "revision": "5394eba8807db04506097c75b6d12bd0"
  },
  {
    "url": "assets/js/page-b0d90ce6.39932751.js",
    "revision": "1c2e943116604784f0f9b0df1d426761"
  },
  {
    "url": "assets/js/page-b40de7ce.cc0f0ee9.js",
    "revision": "b5a6bc02deda885ca4878319b04ad707"
  },
  {
    "url": "assets/js/page-c26b0310.abf936c9.js",
    "revision": "fa35b7a338a9fcb8e29b1e33a546bc2c"
  },
  {
    "url": "assets/js/page-c4bdd70e.4e1f96bc.js",
    "revision": "3a5ab3215858e17767a03bfb6268d023"
  },
  {
    "url": "assets/js/page-c5f1a60e.8b61ec97.js",
    "revision": "563667af4ca0d661e5f917a2e084ac30"
  },
  {
    "url": "assets/js/page-c60be50a.c8a75eb6.js",
    "revision": "bbc2670fb3f58d71e20d041a65486400"
  },
  {
    "url": "assets/js/page-d6c4343e.fa75d7b3.js",
    "revision": "9c779e1e46b3427a6e6854db5a887581"
  },
  {
    "url": "assets/js/page-e468b710.a1e173a6.js",
    "revision": "51bd4c8e28d111d20776f6ff93d1d26b"
  },
  {
    "url": "assets/js/page-e72e49e8.6627379b.js",
    "revision": "de43ffd39774e3dbfa35b0cc0cfe7152"
  },
  {
    "url": "assets/js/page-ed303fba.e3001deb.js",
    "revision": "fad31e5c0faa537d8fd4ebdcf2316ed1"
  },
  {
    "url": "assets/js/page-f313c186.51fc1016.js",
    "revision": "6f6ddb7984994238d7407c0c14fe5e4f"
  },
  {
    "url": "assets/js/vendors~flowchart.2e60d873.js",
    "revision": "753297ac20353f40c531504275f2b947"
  },
  {
    "url": "assets/js/vendors~layout-Layout.ea4dcd7e.js",
    "revision": "31d8563bef69f989b017ccbaf14099e6"
  },
  {
    "url": "category/index.html",
    "revision": "296489635fc387dcea96be6d7e253937"
  },
  {
    "url": "Coding/CodeReview/code-review-memo.html",
    "revision": "e9ce8fde849f3a13f72378338b36aeda"
  },
  {
    "url": "Coding/coding-tips.html",
    "revision": "e192f388842b60531e071707b1f72442"
  },
  {
    "url": "Coding/CSharp/AutoMapper-class繼承後之對應.html",
    "revision": "843506150ce06e01d82b21819bb6aec6"
  },
  {
    "url": "Coding/CSharp/csharp-tips.html",
    "revision": "a027ce933d15d2708f1d84818c6c2317"
  },
  {
    "url": "Coding/CSharp/String-Concatenate.html",
    "revision": "d686cbe4742ac83f944de7af8d839efa"
  },
  {
    "url": "Coding/CSharp/例外處理.html",
    "revision": "ddcfb45d262ba813ab67b0993fbba596"
  },
  {
    "url": "Coding/CSharp/變數命名.html",
    "revision": "e45d1acbcb160b2b0d200460169d5495"
  },
  {
    "url": "Coding/CSharp/責任鏈.html",
    "revision": "c91059aca4ab51d54ebd342904aeecc2"
  },
  {
    "url": "Coding/CSharp/責任鏈2.html",
    "revision": "7767d895bb26f734ed3eb8fbc40d1968"
  },
  {
    "url": "Coding/CSharp/責任鏈3.html",
    "revision": "63df83f02c93d9ffa80ca855dc58ef4e"
  },
  {
    "url": "Coding/Front-End/awesome-graphic-resources.html",
    "revision": "7b94935c2b070440998720ab9044d16f"
  },
  {
    "url": "Coding/Front-End/awesome-pwa.html",
    "revision": "c2cb92d3799d9563e20933eba101e29e"
  },
  {
    "url": "Coding/Front-End/CSS/awesome-css.html",
    "revision": "54e4f9dcb6c14ef5cf26a02078399f29"
  },
  {
    "url": "Coding/Front-End/CSS/css-parameters.html",
    "revision": "a24a05a2fb5e6a6909d04b142ef9ed15"
  },
  {
    "url": "Coding/Front-End/CSS/css-tips.html",
    "revision": "83317e13cdccc744c8dca58d061e6117"
  },
  {
    "url": "Coding/Front-End/Security/開新分頁.html",
    "revision": "6ab75fa65fd00ad282be586612c8c3a4"
  },
  {
    "url": "Coding/JS/awesome-js.html",
    "revision": "b68554390d911a7a8b431a894c902155"
  },
  {
    "url": "Coding/JS/js-tips.html",
    "revision": "e73473f1b7eb1e31fc4361d9ddfca127"
  },
  {
    "url": "Coding/JS/Module Bundler/Webpack/awesome-webpack.html",
    "revision": "44e357e6a2bef79470e406f7c347f59a"
  },
  {
    "url": "Coding/JS/Vue/awesome-vue.html",
    "revision": "3a445b37870075225577e58362c7f21b"
  },
  {
    "url": "Coding/JS/Vue/vue-basic-tutorial/index.html",
    "revision": "05069b58f8d0c22b75fdbaaa349ee6c8"
  },
  {
    "url": "Coding/progessive-design.html",
    "revision": "b2339ab4e2bbdc94bec8ff60c1ecb574"
  },
  {
    "url": "Coding/Server/IIS/iis-memo.html",
    "revision": "e6ac862936fc058cb22f11d84f47cf2e"
  },
  {
    "url": "Coding/SQL/sql-memo.html",
    "revision": "630858d2eff312ac7a5b07b250fa218b"
  },
  {
    "url": "Coding/SQL/StoredProcedure/cursor-syntax-memo.html",
    "revision": "f75eb324ae814b94fe5017ade628827a"
  },
  {
    "url": "Coding/Website/vue-csarhp-todolist-tutorial/back-end.html",
    "revision": "0ed0dab58f76bd873a8126e17f46178a"
  },
  {
    "url": "Coding/Website/vue-csarhp-todolist-tutorial/front-end.html",
    "revision": "0096eb8b7d0a4002a91e4b64a347bbf6"
  },
  {
    "url": "Coding/Website/vue-csarhp-todolist-tutorial/index.html",
    "revision": "f08fd17ee4068a2f6e5c25e5654d15bd"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/1. 心/index.html",
    "revision": "62ad41d7cf54f38a6ebaaf3072574d48"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/1. 心/TMP.html",
    "revision": "0a2af231025539d74125f95f687014cd"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/1. 心/心理戰.html",
    "revision": "cd4c9fe1b76d222deb46034e210e4e55"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/2. 技/index.html",
    "revision": "e9aed625df691fb6361e0cf83a104099"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/2. 技/神小跳.html",
    "revision": "f6ad150501434045b62745c49ab5840a"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/2. 技/視野變換.html",
    "revision": "52b983edd2d286776384aa884e7029fe"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/2. 技/走位.html",
    "revision": "b0afe4c2531c1aaaeaf2b8f2bd9d9bfc"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/2. 技/跳點.html",
    "revision": "03db968718db041740a180c005f8cdf0"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/2. 技/預出手.html",
    "revision": "649ec5bcd2618f18ff14eaff203c2774"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/3. 體/index.html",
    "revision": "6ac392aa954e04919fac0b296fd72887"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/4. 群/index.html",
    "revision": "f929cd8ae6c9673c18179d63b4496666"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/4. 群/卡位.html",
    "revision": "1345f840756ffe5c8ba4dd83c7401d37"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/4. 群/組隊.html",
    "revision": "8431b4c8993a30cea197bee8c8eb9171"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/5. 略/index.html",
    "revision": "f492c270175d813c26178ca13c7594ad"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/5. 略/局勢.html",
    "revision": "0a2229b57b42156ec846090036671ba3"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/6. 決/index.html",
    "revision": "89ac7f55c764961ed259168d51601357"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/index.html",
    "revision": "f783014845363b1ef8487fbe0ea56034"
  },
  {
    "url": "Game/FEZ/2. 國戰步兵戰策略/index.html",
    "revision": "a763d766b783dd258241f79f0a0774c3"
  },
  {
    "url": "Game/FEZ/2. 國戰步兵戰策略/僻地戰.html",
    "revision": "8e9c62a61d44184472a27d9de527229d"
  },
  {
    "url": "Game/FEZ/3. 各職玩法/刀.html",
    "revision": "4e6cf8addc315284d53c50503ca78d47"
  },
  {
    "url": "Game/FEZ/3. 各職玩法/雙修.html",
    "revision": "5b375d554492e67ed36b3a43de27abf7"
  },
  {
    "url": "Game/FEZ/4. 2on/index.html",
    "revision": "134b68bc70caf23c4cb567c391877fc4"
  },
  {
    "url": "Game/FEZ/4. 2on/玩法介紹.html",
    "revision": "2998ad2b852a81679403bee6d58db73c"
  },
  {
    "url": "Game/FEZ/X. Theorem/HMM.html",
    "revision": "10b47b7244cb41b589af201168985700"
  },
  {
    "url": "hello-vuejcblog.html",
    "revision": "5a1b0d0ad2f863a160f4185489eb015b"
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
    "revision": "c7b9317be7d86714d65a46a515cad93c"
  },
  {
    "url": "search/index.html",
    "revision": "a38fc91d255efc450cb81bad1af5e781"
  },
  {
    "url": "tag/index.html",
    "revision": "6b75f453fb32feab70bb5ef991a04759"
  },
  {
    "url": "VueJCBlog/Development/article/hello-vuejcblog.html",
    "revision": "d798c81ecbf0e40087691b7a67e4d924"
  },
  {
    "url": "VueJCBlog/Development/article/test/test-comment.html",
    "revision": "aa51a8016c4dfd666ebfb4ec4c4c1be4"
  },
  {
    "url": "VueJCBlog/Development/article/test/test-lazy-load.html",
    "revision": "a92877464b2607c82e147fe6574317b0"
  },
  {
    "url": "VueJCBlog/Development/article/test/test-lazy-load2.html",
    "revision": "2156e031e0098b737223c5b3bf55c58d"
  },
  {
    "url": "VueJCBlog/Feature/about-page.html",
    "revision": "8733390b6bdcd710c486fc452642b2e0"
  },
  {
    "url": "VueJCBlog/Feature/archive-page.html",
    "revision": "1e6bf2e7b17bebfc6b1c64d4b44fd125"
  },
  {
    "url": "VueJCBlog/Feature/category-page.html",
    "revision": "fdfef305a68be36d13a3cf03d5f7d9be"
  },
  {
    "url": "VueJCBlog/Feature/common-feature.html",
    "revision": "52f6d4878b56d9b67ab3267ed56736e6"
  },
  {
    "url": "VueJCBlog/Feature/index-page.html",
    "revision": "828b340bfa575637787535cc8b05ed97"
  },
  {
    "url": "VueJCBlog/Feature/index.html",
    "revision": "84546a2ebd85d02807e150832aea8ff3"
  },
  {
    "url": "VueJCBlog/Feature/post-page.html",
    "revision": "bf0a4c3002a8a45f73c6abc9f0d86d73"
  },
  {
    "url": "VueJCBlog/Feature/search-page.html",
    "revision": "4e6ba6749ff2e16bb138b1e690038b10"
  },
  {
    "url": "VueJCBlog/Feature/sidebar-feature.html",
    "revision": "ba3a314737ec0f82ac3a26515ab557b4"
  },
  {
    "url": "VueJCBlog/Feature/tag-page.html",
    "revision": "9f1ccdcaeef01b717cb53234381c65c7"
  },
  {
    "url": "VueJCBlog/Installation.html",
    "revision": "ca76a95c5e9a1c83605f88abd7a1ca29"
  },
  {
    "url": "VueJCBlog/Quick-Start.html",
    "revision": "2b44f516125aef13bc89ba92048c3e16"
  },
  {
    "url": "VueJCBlog/Usage/Container/index.html",
    "revision": "703b586ca086effe7ed2c3cb382dd39e"
  },
  {
    "url": "VueJCBlog/Usage/front-matter.html",
    "revision": "0c59b2a2ab111ea8c3ac6fe5dee1819d"
  },
  {
    "url": "VueJCBlog/Usage/index.html",
    "revision": "562ddb807d876ca4b512d1fa53da44e5"
  },
  {
    "url": "VueJCBlog/Usage/Markdown/advanced.html",
    "revision": "334dd033cd1ba042a890c188ee59e292"
  },
  {
    "url": "VueJCBlog/Usage/Markdown/basic.html",
    "revision": "5a6bfa95bca3c748114139c03e53a5bc"
  },
  {
    "url": "VueJCBlog/Usage/Markdown/flow-chart.html",
    "revision": "a2827684c0bb641dd5a4358c0733ebb6"
  },
  {
    "url": "VueJCBlog/Usage/Markdown/index.html",
    "revision": "254439cac9a766080c94c46a1385a4be"
  },
  {
    "url": "VueJCBlog/Usage/Markdown/link.html",
    "revision": "68b5ff325fb7927b2642e02ccc94f031"
  },
  {
    "url": "VueJCBlog/Usage/Slide.html",
    "revision": "9edee95b8220471aaef12d19d59c731b"
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
