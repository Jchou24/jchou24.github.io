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
    "revision": "db6945b200283803564bd39ee39909f7"
  },
  {
    "url": "About/index.html",
    "revision": "e6fd997a947e8393ef16cffdef497621"
  },
  {
    "url": "archive/index.html",
    "revision": "9644f7c26c0c7e6a9a8bd7dbc497b640"
  },
  {
    "url": "assets/css/0.styles.8d9d998e.css",
    "revision": "d910adf873a6541f193deb2b49d0097d"
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
    "url": "assets/js/1.8585cb6e.js",
    "revision": "818f8ebb59c3322f1de7d6667081afbe"
  },
  {
    "url": "assets/js/2.7ab3f804.js",
    "revision": "bb3758d6aaef868e0549794da8b72bc8"
  },
  {
    "url": "assets/js/39.0cc5484c.js",
    "revision": "7c1339a73dcda56099b5a554ccf88ad5"
  },
  {
    "url": "assets/js/4.69619788.js",
    "revision": "0ca52efaf9895d809e25b04c280c9e85"
  },
  {
    "url": "assets/js/40.eb18e534.js",
    "revision": "fe4a5ba895bae1e38f2d421963c975c0"
  },
  {
    "url": "assets/js/41.d28b77d1.js",
    "revision": "e95e62ab7b4065609477d0da6f29743a"
  },
  {
    "url": "assets/js/42.d9c3b73f.js",
    "revision": "832254a52a6b132bdd2035f75b718f3e"
  },
  {
    "url": "assets/js/43.6fe05b30.js",
    "revision": "3284dbcc33ce17a8f63b786f8b49425d"
  },
  {
    "url": "assets/js/44.13d22233.js",
    "revision": "a7a3ef17a717a8202d63e2aaad6fbe2d"
  },
  {
    "url": "assets/js/45.2e32304e.js",
    "revision": "ca6ca99715fa9ef2ea14357dcf5c60f9"
  },
  {
    "url": "assets/js/46.c796c4a4.js",
    "revision": "d0a47bb27cf11aef2d6ddfe413a45187"
  },
  {
    "url": "assets/js/47.aa60ea56.js",
    "revision": "de4d5b273108ca633e40be7f84b16b26"
  },
  {
    "url": "assets/js/48.def7618c.js",
    "revision": "76c7299ee02bd04b2026f6ab1a44d74c"
  },
  {
    "url": "assets/js/49.caa2cc3d.js",
    "revision": "e869dc540f7cf1eae71ccf3aa55bd0a0"
  },
  {
    "url": "assets/js/5.2a70d00b.js",
    "revision": "d4675145cabff7f589dbc549abeae584"
  },
  {
    "url": "assets/js/50.fa4943b0.js",
    "revision": "72c414dc08d3a9e222dd40f821284fdf"
  },
  {
    "url": "assets/js/51.6c646141.js",
    "revision": "6d09475d31277476a8ba158950533afe"
  },
  {
    "url": "assets/js/52.49f2c541.js",
    "revision": "bfa9564a01e352fc3c0b86b7bb07648e"
  },
  {
    "url": "assets/js/53.254258fb.js",
    "revision": "3ddb8770bcfe4107af4ce7064d68cb8e"
  },
  {
    "url": "assets/js/6.7597b8c3.js",
    "revision": "885c0508eedc59f5d32323d92e6b1083"
  },
  {
    "url": "assets/js/app.d47be0bf.js",
    "revision": "26554c73707432aaf8b0c77eb8e17568"
  },
  {
    "url": "assets/js/layout-BaseLayout.188f93f3.js",
    "revision": "0ced742ae6f29a463e8c5caecad8e169"
  },
  {
    "url": "assets/js/layout-BaseLayout~layout-Layout.66b73765.js",
    "revision": "252560548aebfc332fa7fd3b97130d26"
  },
  {
    "url": "assets/js/layout-Layout.b631c453.js",
    "revision": "ae1bff973dbee18906be873aaa753b46"
  },
  {
    "url": "assets/js/layout-NotFound.2ecf6754.js",
    "revision": "6b00244b2ac7383068fba538b086a48e"
  },
  {
    "url": "assets/js/page-0815fe43.0636f16a.js",
    "revision": "ab91adc06add57852631353c95fc73bf"
  },
  {
    "url": "assets/js/page-1bb4b3ad.be5634f8.js",
    "revision": "d3b3ac6c9884824d29b0f6aed33ef30a"
  },
  {
    "url": "assets/js/page-22a9043f.1e309598.js",
    "revision": "1949a76bc73da63f83162cebe9d876b3"
  },
  {
    "url": "assets/js/page-23e99a6f.96dfb522.js",
    "revision": "c2bca2564f64e0deca25345ec123e958"
  },
  {
    "url": "assets/js/page-293f1fdc.a2c123a7.js",
    "revision": "a57f333a27343c40c6376da55bb4e2da"
  },
  {
    "url": "assets/js/page-32e15e7c.5ac5b355.js",
    "revision": "fc9b6484fde3d362e44b2af716a45e69"
  },
  {
    "url": "assets/js/page-3841e8ef.7927a6c3.js",
    "revision": "3626b079e584744ba5a12fb7429cb0fc"
  },
  {
    "url": "assets/js/page-3c4a43ae.c9eee3a2.js",
    "revision": "d359f083fff224ba9a075d82ab3ed8e9"
  },
  {
    "url": "assets/js/page-49376acf.63ea3c93.js",
    "revision": "3d194bc2bd933393765bb6ce69dbda21"
  },
  {
    "url": "assets/js/page-4abc2b47.47399cea.js",
    "revision": "79f27f514381b026a3580ac577381967"
  },
  {
    "url": "assets/js/page-50e0a6f6.5f965e12.js",
    "revision": "8ae4dbc6fbd96ac1d854b0b04f983a1b"
  },
  {
    "url": "assets/js/page-5607f94f.6d57b7ac.js",
    "revision": "92e8c87223e39e69d3ca7982fb3b834d"
  },
  {
    "url": "assets/js/page-5c008213.15345b4c.js",
    "revision": "fe57d9cf296ded0a915b36e2d15c1cae"
  },
  {
    "url": "assets/js/page-5fc63572.0175191c.js",
    "revision": "959e690f02773bdefeb3b9208d51dffb"
  },
  {
    "url": "assets/js/page-6365d1e8.ca093c0b.js",
    "revision": "611b365b05a7e0d6ce5e90b8441cbba0"
  },
  {
    "url": "assets/js/page-6f8a8732.daad0d4e.js",
    "revision": "e1a6c581d4559c154b5d84fb6e254b47"
  },
  {
    "url": "assets/js/page-70a930f7.ab043cc0.js",
    "revision": "bb9734d3cdc79c3ceb186b650804ad7f"
  },
  {
    "url": "assets/js/page-782df662.f106cb76.js",
    "revision": "dff2e536cd4fbaddc145df9866337bf6"
  },
  {
    "url": "assets/js/page-921a5862.358374c2.js",
    "revision": "58d31bb477c51549d309943a165ef33d"
  },
  {
    "url": "assets/js/page-9a911df4.2da026db.js",
    "revision": "2108aedde51669dddce22430293ae7ef"
  },
  {
    "url": "assets/js/page-bfd44046.58eba8d6.js",
    "revision": "701820f353a63a586983381edf798b9b"
  },
  {
    "url": "assets/js/page-bffdee08.573565fc.js",
    "revision": "713d544cae3ea41802f9508837b662a5"
  },
  {
    "url": "assets/js/page-cd7053a2.722941c9.js",
    "revision": "e433da985183bfbf801a76dbead8713c"
  },
  {
    "url": "assets/js/page-dad8d1c2.61f00a26.js",
    "revision": "53a46bb00efed7d72ac7a9003d1134f6"
  },
  {
    "url": "assets/js/page-eaea12a2.5fa8f5ec.js",
    "revision": "5a9911f27d1d265db5a6f38f20c53d72"
  },
  {
    "url": "assets/js/page-fa1749c8.c16d8b28.js",
    "revision": "3e85360141774464231fa152105fa753"
  },
  {
    "url": "assets/js/vendors~flowchart.4c79c0d6.js",
    "revision": "ac5b509841faacc653ab832780e41eeb"
  },
  {
    "url": "assets/js/vendors~layout-Layout.18e90a6e.js",
    "revision": "bc3e7d596471222760b42b54310bc2a0"
  },
  {
    "url": "category/index.html",
    "revision": "b63ff67d0c79e5dc7c4afebb3dbae741"
  },
  {
    "url": "hello-vblog.html",
    "revision": "20bde96f2a833bcb03d8b1c263b08f03"
  },
  {
    "url": "icon.png",
    "revision": "a0b370e0cdc4fb660546c5ecc4c7da20"
  },
  {
    "url": "index.html",
    "revision": "1d32c9bc80a62b05125e97857aef17cc"
  },
  {
    "url": "search/index.html",
    "revision": "d60795894198654e02a32818d51c4a72"
  },
  {
    "url": "tag/index.html",
    "revision": "a3471fabe99630310c3b4513a841ed3f"
  },
  {
    "url": "VBlog/Development/article/common/test-lazy-load.html",
    "revision": "f4bc8c5fd7ef5e8c86cc2e29816c92b0"
  },
  {
    "url": "VBlog/Development/article/common/test-lazy-load2.html",
    "revision": "37557b9465847ceef417d00cbb9dafd4"
  },
  {
    "url": "VBlog/Feature/about-page.html",
    "revision": "6708cca00a82849688df425073f46c19"
  },
  {
    "url": "VBlog/Feature/archive-page.html",
    "revision": "b28e7c6a21e9d1f2f9750c037414271b"
  },
  {
    "url": "VBlog/Feature/category-page.html",
    "revision": "6db0d0d5b5209fbb207f933b1219b5e5"
  },
  {
    "url": "VBlog/Feature/common-feature.html",
    "revision": "b10543e7ea50a034886b3519ad3ce9e8"
  },
  {
    "url": "VBlog/Feature/index-page.html",
    "revision": "daff71b0c0f65619bb250f004ce95992"
  },
  {
    "url": "VBlog/Feature/index.html",
    "revision": "88c2dec56d94230eb769562af613c521"
  },
  {
    "url": "VBlog/Feature/post-page.html",
    "revision": "ec68bdd65cdedc75777973992f75b63f"
  },
  {
    "url": "VBlog/Feature/search-page.html",
    "revision": "de4f5278515d344aa5215d67362707de"
  },
  {
    "url": "VBlog/Feature/sidebar-feature.html",
    "revision": "0622b9fc768c40c2458589ea2371182f"
  },
  {
    "url": "VBlog/Feature/tag-page.html",
    "revision": "27a542dcfe913c938dd59fb79b0aaf48"
  },
  {
    "url": "VBlog/index.html",
    "revision": "c79f78da7991a64d228ef52c10159a09"
  },
  {
    "url": "VBlog/Installation.html",
    "revision": "67a070cb195c275d7b10fc04f1113df5"
  },
  {
    "url": "VBlog/Quick-Start.html",
    "revision": "6760729a38163bf8fe9c779ff0b08e53"
  },
  {
    "url": "VBlog/Usage/Container/index.html",
    "revision": "fe0338a7149cea2e58e32546b5c4e7b8"
  },
  {
    "url": "VBlog/Usage/front-matter.html",
    "revision": "e47efe58b9647954e73bd751eeb2855f"
  },
  {
    "url": "VBlog/Usage/index.html",
    "revision": "ff1c9eeede1fea8897fc71566d94c229"
  },
  {
    "url": "VBlog/Usage/Markdown/advanced.html",
    "revision": "13550725353e08777f8cd8a6fb39fa78"
  },
  {
    "url": "VBlog/Usage/Markdown/basic.html",
    "revision": "e39f55931101375c7752b0f60585a087"
  },
  {
    "url": "VBlog/Usage/Markdown/flow-chart.html",
    "revision": "2a6e511b9d46e250ddf455f14a33d5ac"
  },
  {
    "url": "VBlog/Usage/Markdown/index.html",
    "revision": "e60f59527f889feafe7b26663ff6abcc"
  },
  {
    "url": "VBlog/Usage/Markdown/link.html",
    "revision": "90af35ceedb8868b53966f0b30cb2acd"
  },
  {
    "url": "VBlog/Usage/Slide.html",
    "revision": "acff4fd6e8d47a7fcfe893b26d9aa1f5"
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
