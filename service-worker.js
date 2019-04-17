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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "420a175a5ed5ba639bc70189477c05a4"
  },
  {
    "url": "About/index.html",
    "revision": "0fbb310540be2d326b1edd90c52de7bb"
  },
  {
    "url": "archive/index.html",
    "revision": "918673606f708015a128f5b46c80ff37"
  },
  {
    "url": "assets/css/0.styles.166dac0f.css",
    "revision": "9db90b43a7ce735fe8d9aba5fd1bb3c9"
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
    "url": "assets/js/1.705dcf83.js",
    "revision": "097c43ba144d24fe9d759e9f45c32469"
  },
  {
    "url": "assets/js/2.5d1888e8.js",
    "revision": "6536765426e9cb2ec0c66d080ac09140"
  },
  {
    "url": "assets/js/3.ef83ab7f.js",
    "revision": "9caee10c17a9751c0946f9ac576b80b9"
  },
  {
    "url": "assets/js/39.fdfc40bc.js",
    "revision": "50cee5b8161a6644606c1d2578e253a0"
  },
  {
    "url": "assets/js/40.1ffb7d57.js",
    "revision": "2cd4e8bde94ac00fa9918a3b08211257"
  },
  {
    "url": "assets/js/41.cd34ff50.js",
    "revision": "7df1753a4a14bd3716a20032dc86ab08"
  },
  {
    "url": "assets/js/42.ca460967.js",
    "revision": "9e4474a1d7a6b086aa2fe4982e10a76d"
  },
  {
    "url": "assets/js/43.17c1f5f6.js",
    "revision": "40711234f5ce50ba1b221ea0f7e7c2f5"
  },
  {
    "url": "assets/js/44.4b94a10a.js",
    "revision": "57f4b016c139abad5b5d8ac2c3945c6b"
  },
  {
    "url": "assets/js/45.e5a653e9.js",
    "revision": "eb1a190d328186fa2dcdbac470306487"
  },
  {
    "url": "assets/js/46.673e04d8.js",
    "revision": "a43972fb1ab196da9b7f3e4b11ff259c"
  },
  {
    "url": "assets/js/47.d19501d9.js",
    "revision": "9e1c30050a58498f4518b0afc5600350"
  },
  {
    "url": "assets/js/48.db508f20.js",
    "revision": "15d29312ca6067fb6dce64a583047d86"
  },
  {
    "url": "assets/js/49.baf17d65.js",
    "revision": "bc8eb28b59d3ec5abedb6233c9fe3546"
  },
  {
    "url": "assets/js/5.5a72fdf8.js",
    "revision": "e51023ee21c60385f3d877502ad1ac56"
  },
  {
    "url": "assets/js/50.b13da2e8.js",
    "revision": "c70f0105e47b04ccc9dfb213efb5604d"
  },
  {
    "url": "assets/js/51.2a7b0f3a.js",
    "revision": "fc74aee2955ac6d3d4005c07735d0110"
  },
  {
    "url": "assets/js/52.8c73e497.js",
    "revision": "7b9e39ecfbec9fdeeace8c502265de6d"
  },
  {
    "url": "assets/js/53.04a7d231.js",
    "revision": "b91e9f5451dc359c0fa893948a8aef76"
  },
  {
    "url": "assets/js/54.955fadf4.js",
    "revision": "c49bc04d74d52f773b7ac2230cfbf595"
  },
  {
    "url": "assets/js/55.755d8e8b.js",
    "revision": "4a53d754663ac1997b70eb226a839eec"
  },
  {
    "url": "assets/js/56.11142175.js",
    "revision": "e8eff1e22e114a8b17a8c4c80b2c115d"
  },
  {
    "url": "assets/js/57.671fa2e5.js",
    "revision": "af827522bf1f626f52809482c93ab45f"
  },
  {
    "url": "assets/js/6.4577fca0.js",
    "revision": "20e07ebc12bd5aacb2e030a6023394a7"
  },
  {
    "url": "assets/js/app.8b050ec0.js",
    "revision": "d3ba9a65c449c0f9dda3ca18e86237c6"
  },
  {
    "url": "assets/js/layout-BaseLayout.e9aaa82f.js",
    "revision": "d4f16fc61a05df823f52442f8cd39df6"
  },
  {
    "url": "assets/js/layout-BaseLayout~layout-Layout.e350e48e.js",
    "revision": "abbb58ebed7bd96063fcb1e00ab9cac0"
  },
  {
    "url": "assets/js/layout-Layout.2fe6d15a.js",
    "revision": "155d8bef3d8349798d2e2341a15685cb"
  },
  {
    "url": "assets/js/layout-NotFound.c7dba8c7.js",
    "revision": "ea9e791e5c9ee8e70303ba3339ec224b"
  },
  {
    "url": "assets/js/page-0815fe43.79776a59.js",
    "revision": "26fcbc9a195e5ee30b665a08b6e6851d"
  },
  {
    "url": "assets/js/page-1bb4b3ad.840def5c.js",
    "revision": "d16a7b6532cd40daee71d86d289de28f"
  },
  {
    "url": "assets/js/page-22a9043f.0b40cced.js",
    "revision": "4dd4c7034b85211d89b93269afda12f7"
  },
  {
    "url": "assets/js/page-23e99a6f.9eb62def.js",
    "revision": "6abaecfef70bf985e1c341650d817964"
  },
  {
    "url": "assets/js/page-293f1fdc.46d3701b.js",
    "revision": "3cecee727ead70d84f4244f2af11a513"
  },
  {
    "url": "assets/js/page-32e15e7c.546ddb31.js",
    "revision": "f78cc8ee107dac93b540eab06b93210b"
  },
  {
    "url": "assets/js/page-3841e8ef.b9fcb529.js",
    "revision": "ece2e67874178ce6d8f6f931090d4fe7"
  },
  {
    "url": "assets/js/page-3c4a43ae.8b54cf72.js",
    "revision": "e332dcf1c97e8f8437e1392c07ceb84f"
  },
  {
    "url": "assets/js/page-49376acf.79dca53a.js",
    "revision": "50d4abbbc1b7085f3db1658478432504"
  },
  {
    "url": "assets/js/page-4abc2b47.c712f366.js",
    "revision": "9cc7295719312fb7bfa3181e3dc23b6b"
  },
  {
    "url": "assets/js/page-50e0a6f6.648f27c8.js",
    "revision": "e5dbb29ab527291f0840c79f3f27dc55"
  },
  {
    "url": "assets/js/page-5607f94f.e4036ed9.js",
    "revision": "f106aedfa6f080f1ab5fa657f3474657"
  },
  {
    "url": "assets/js/page-5c008213.ccab84e9.js",
    "revision": "402dab89faebadb7558068c429c76eeb"
  },
  {
    "url": "assets/js/page-5fc63572.97c643a0.js",
    "revision": "43d223f0ab9010d2a2e8c9421624b412"
  },
  {
    "url": "assets/js/page-6365d1e8.d0a0e646.js",
    "revision": "e1f118cd94833a88e4a90416ef943a03"
  },
  {
    "url": "assets/js/page-6f8a8732.873b9175.js",
    "revision": "05a30a5ac3cac97256913a2b4d8ec291"
  },
  {
    "url": "assets/js/page-70a930f7.1117f84a.js",
    "revision": "43d854f0de8f1de9dfdc655dbcab489e"
  },
  {
    "url": "assets/js/page-782df662.0d16d816.js",
    "revision": "3339c8d77c45fee651ca726576a3bc7e"
  },
  {
    "url": "assets/js/page-921a5862.b601c94e.js",
    "revision": "3ed7aa6d7ccf466263399a1389edfa61"
  },
  {
    "url": "assets/js/page-9a911df4.f0c06139.js",
    "revision": "527e394d610b0ea86771583c9a567bc4"
  },
  {
    "url": "assets/js/page-bfd44046.46c8267c.js",
    "revision": "1662251f19a34fd18e3d45079f71b43d"
  },
  {
    "url": "assets/js/page-bffdee08.432e1cad.js",
    "revision": "2bceefc30b411e3af61eb362520e7002"
  },
  {
    "url": "assets/js/page-cd7053a2.b4adb158.js",
    "revision": "1274c514abc0a914d3169126911dbb40"
  },
  {
    "url": "assets/js/page-dad8d1c2.61f00a26.js",
    "revision": "53a46bb00efed7d72ac7a9003d1134f6"
  },
  {
    "url": "assets/js/page-eaea12a2.c167757d.js",
    "revision": "8a8bf52a852a0154ac38f149f298482a"
  },
  {
    "url": "assets/js/page-fa1749c8.d3934670.js",
    "revision": "ef8aa1d3bcb840340924e8a4518e8b5c"
  },
  {
    "url": "assets/js/vendors~flowchart.156d7a42.js",
    "revision": "72a2ac19bc5620531cd78b6cbfd5cb21"
  },
  {
    "url": "assets/js/vendors~layout-Layout.21ef411c.js",
    "revision": "b17c832c478a4ec817c0b6ba382ff50b"
  },
  {
    "url": "category/index.html",
    "revision": "3a23b6c2a26373a9671a4ecbeafff1fe"
  },
  {
    "url": "hello-vblog.html",
    "revision": "862bc733bba3edf538f60a1794c71a77"
  },
  {
    "url": "icon.png",
    "revision": "a0b370e0cdc4fb660546c5ecc4c7da20"
  },
  {
    "url": "index.html",
    "revision": "8881aa92760f55d0604803e856b721b6"
  },
  {
    "url": "search/index.html",
    "revision": "56871a32c443a5222c424ed64eb1f2d9"
  },
  {
    "url": "tag/index.html",
    "revision": "8411fe9394f7c23c20bded402e41da5f"
  },
  {
    "url": "VBlog/Development/article/common/test-lazy-load.html",
    "revision": "49d27e041ee3206968f343f8c4e0f3bc"
  },
  {
    "url": "VBlog/Development/article/common/test-lazy-load2.html",
    "revision": "74df9ea6d86c1e7067504629c055cbc1"
  },
  {
    "url": "VBlog/Feature/about-page.html",
    "revision": "c1d47de546ece68eae60eceb9f162f59"
  },
  {
    "url": "VBlog/Feature/archive-page.html",
    "revision": "091ee69d9826ac06ffd4feca588f467b"
  },
  {
    "url": "VBlog/Feature/category-page.html",
    "revision": "f47af04ae38cc84b3c6e020354efe642"
  },
  {
    "url": "VBlog/Feature/common-feature.html",
    "revision": "e1231f9aa09867106c69fcd1fefc50a5"
  },
  {
    "url": "VBlog/Feature/index-page.html",
    "revision": "924aab17892a17a8091f3a2141277ce7"
  },
  {
    "url": "VBlog/Feature/index.html",
    "revision": "f2b5e928696656beca4f9b7b87fcbce2"
  },
  {
    "url": "VBlog/Feature/post-page.html",
    "revision": "39a6fc89b456699ac9862a0f42af324c"
  },
  {
    "url": "VBlog/Feature/search-page.html",
    "revision": "2e183ba85dcfd5adb90c5283788db384"
  },
  {
    "url": "VBlog/Feature/sidebar-feature.html",
    "revision": "8c94134a2a669460693e23b9d25e1357"
  },
  {
    "url": "VBlog/Feature/tag-page.html",
    "revision": "3e26248c58a9bbe358225d3fad7958b9"
  },
  {
    "url": "VBlog/index.html",
    "revision": "319981b367025a2f6beb927e755ecc86"
  },
  {
    "url": "VBlog/Installation.html",
    "revision": "cfc8dd93951a31d968f9a3db3053d4b4"
  },
  {
    "url": "VBlog/Quick-Start.html",
    "revision": "190cf4baedda31793b115410a389d30a"
  },
  {
    "url": "VBlog/Usage/Container/index.html",
    "revision": "7d25adc55e51e3955ba41c8b5038c233"
  },
  {
    "url": "VBlog/Usage/front-matter.html",
    "revision": "71f0c0647c5fd6fefc8487dd7c71a65a"
  },
  {
    "url": "VBlog/Usage/index.html",
    "revision": "06e821504d508147cd523d5247738dc6"
  },
  {
    "url": "VBlog/Usage/Markdown/advanced.html",
    "revision": "7c2c9fe27c24007c3a4ea67dbdcd5e3c"
  },
  {
    "url": "VBlog/Usage/Markdown/basic.html",
    "revision": "813939ce1505afda437dd0dfb8340d7e"
  },
  {
    "url": "VBlog/Usage/Markdown/flow-chart.html",
    "revision": "e196bc0011b3ec342d8f2743084bee2e"
  },
  {
    "url": "VBlog/Usage/Markdown/index.html",
    "revision": "fe480bad9985bc41f6b4d2b5ed074fc0"
  },
  {
    "url": "VBlog/Usage/Markdown/link.html",
    "revision": "6ff6681e33bdaaccb0f6c3958d3d8e25"
  },
  {
    "url": "VBlog/Usage/Slide.html",
    "revision": "715f310f4106bb2edb4239dc86b3ac42"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
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
