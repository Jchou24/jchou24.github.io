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
    "revision": "77ad52f99554bbef2e8030e98daa7f01"
  },
  {
    "url": "About/index.html",
    "revision": "e83d303672e90ebb8c1e91900398ffa0"
  },
  {
    "url": "archive/index.html",
    "revision": "c2a827a838c606e997ec3772eb6b484b"
  },
  {
    "url": "assets/css/0.styles.a9e48b48.css",
    "revision": "6d24a0bbf9479d989dff5786599bdfc0"
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
    "url": "assets/js/1.13390b51.js",
    "revision": "f2f967ec9aaed191ee8cec902df454d6"
  },
  {
    "url": "assets/js/2.00ec72e9.js",
    "revision": "b759d4763aae5bad2a62e7a77ba9c30a"
  },
  {
    "url": "assets/js/3.3c1e0f5b.js",
    "revision": "4d00c27945ebbfdbd467fdf5c02d9f70"
  },
  {
    "url": "assets/js/39.644396d5.js",
    "revision": "3d9b32faaebd497c239635590ebf96ba"
  },
  {
    "url": "assets/js/40.41176822.js",
    "revision": "dbcc8c75ec17b86761e3b9c17734cba0"
  },
  {
    "url": "assets/js/41.584ac471.js",
    "revision": "57ff83ef1e3cba7be0999e76efa3f485"
  },
  {
    "url": "assets/js/42.1a330c16.js",
    "revision": "7e1219a6090121e41fc8578ffad52833"
  },
  {
    "url": "assets/js/43.e688f275.js",
    "revision": "9e953f2e845311e18a7e9414b49bfd92"
  },
  {
    "url": "assets/js/44.a47503f6.js",
    "revision": "8bc7ee9588a9342e849dcd3f2292a1f5"
  },
  {
    "url": "assets/js/45.9f6f90ac.js",
    "revision": "3266533bf834740c15efe200344eb097"
  },
  {
    "url": "assets/js/46.f0b95dc8.js",
    "revision": "d6e0c8b202b461956833c2651498f11f"
  },
  {
    "url": "assets/js/47.a581e983.js",
    "revision": "6ca13647d9e2b12076ac08426af8840e"
  },
  {
    "url": "assets/js/48.b9f8b813.js",
    "revision": "05377109abe44562c0f2ef0416115914"
  },
  {
    "url": "assets/js/49.7808558b.js",
    "revision": "23f34da11d18add4ad591abc5b9a4c2c"
  },
  {
    "url": "assets/js/5.318abc8b.js",
    "revision": "9424ceb421be0c206abbb9006f287fdf"
  },
  {
    "url": "assets/js/50.108f8bf7.js",
    "revision": "18d5a2ab7e226cf47d351cd78d9abfd8"
  },
  {
    "url": "assets/js/51.5b31f4c3.js",
    "revision": "2564733557536f78b6dc8bf442a09da4"
  },
  {
    "url": "assets/js/52.ebaddfda.js",
    "revision": "1151b047b9d1910edc6397d2b6f91027"
  },
  {
    "url": "assets/js/53.ecf286f2.js",
    "revision": "8160b40cd5b39e946577ee352cd58a1e"
  },
  {
    "url": "assets/js/54.9bded49c.js",
    "revision": "ab231f01570ceceaee8b359ecc087a84"
  },
  {
    "url": "assets/js/55.32fb1bce.js",
    "revision": "934f6fa59db21fd79c39cf0ecdadb279"
  },
  {
    "url": "assets/js/56.c3ad170b.js",
    "revision": "233d8c980654586cf85231843dbd3b30"
  },
  {
    "url": "assets/js/57.5d593ae1.js",
    "revision": "a2a77bab07f98922e49d7477de0bf19e"
  },
  {
    "url": "assets/js/58.9fb910fb.js",
    "revision": "e523255fc2d03421a859b4b375e57e9f"
  },
  {
    "url": "assets/js/6.d4b23e2f.js",
    "revision": "6eb2b778b6babd385636fd31d6f155e5"
  },
  {
    "url": "assets/js/app.16f6066a.js",
    "revision": "d0db007a1b0a05d841bc5966bb648237"
  },
  {
    "url": "assets/js/layout-BaseLayout.6d076277.js",
    "revision": "0efd5bf14b5e03b4b6145d91a2e3eb72"
  },
  {
    "url": "assets/js/layout-BaseLayout~layout-Layout.f5c6742e.js",
    "revision": "f4b1ccaf595d5b862a6bd41330224aa3"
  },
  {
    "url": "assets/js/layout-Layout.a7fe580e.js",
    "revision": "fb283988e8dbd5f6ef5b6ddde7585ff8"
  },
  {
    "url": "assets/js/layout-NotFound.b21f7ea6.js",
    "revision": "0e1ad4dd851c753fb81fc7e8d9146904"
  },
  {
    "url": "assets/js/page-0815fe43.2c37e367.js",
    "revision": "a0e0c12216420acef6e1dcaa036d06f2"
  },
  {
    "url": "assets/js/page-1bb4b3ad.840def5c.js",
    "revision": "d16a7b6532cd40daee71d86d289de28f"
  },
  {
    "url": "assets/js/page-22a9043f.f7cf4d93.js",
    "revision": "965b729745d7d7470d75d5ee9cf4f721"
  },
  {
    "url": "assets/js/page-23e99a6f.42d9f5a8.js",
    "revision": "67a6bf4792462a25211e9dea4e706fca"
  },
  {
    "url": "assets/js/page-293f1fdc.fa6582c0.js",
    "revision": "78e76d1f79cdd69ffe121113043bb10e"
  },
  {
    "url": "assets/js/page-32e15e7c.d6146037.js",
    "revision": "795cae91be68562d1a1dce16426529d1"
  },
  {
    "url": "assets/js/page-3841e8ef.5e8c6602.js",
    "revision": "39093ce0b779d78a7920490fd16aca7f"
  },
  {
    "url": "assets/js/page-3c4a43ae.472931c3.js",
    "revision": "9a7ebfdfb58838f4fbbbee8fc1198732"
  },
  {
    "url": "assets/js/page-49376acf.82f2a9f8.js",
    "revision": "593f912467666a33ae5c1c8686629b9e"
  },
  {
    "url": "assets/js/page-4abc2b47.c48532c7.js",
    "revision": "6e9ee50b7b6bbfd19af58ac681014057"
  },
  {
    "url": "assets/js/page-50e0a6f6.7b99462d.js",
    "revision": "0a614612e6e990c5d0e3b70d6774a0fd"
  },
  {
    "url": "assets/js/page-5607f94f.9814a897.js",
    "revision": "43a0d4f557f5e3d4929bbb09f82e15ff"
  },
  {
    "url": "assets/js/page-5c008213.c9f675c3.js",
    "revision": "9bab13d7de1cd293ec89f0a7d0f5bf4d"
  },
  {
    "url": "assets/js/page-5fc63572.dc005eb7.js",
    "revision": "9f1046dcf7a9fab16a8de67972b088e4"
  },
  {
    "url": "assets/js/page-6365d1e8.88447884.js",
    "revision": "2fa800947e8fa1d6e84e2af73580225a"
  },
  {
    "url": "assets/js/page-6f8a8732.d4f24347.js",
    "revision": "459a3adad55fb848e4b79f3e54353a7e"
  },
  {
    "url": "assets/js/page-70a930f7.9df02d97.js",
    "revision": "c85a080369cb37bc6a615f0a236e7251"
  },
  {
    "url": "assets/js/page-782df662.e494283b.js",
    "revision": "57e6e12f048a6942414533479f58b6d1"
  },
  {
    "url": "assets/js/page-921a5862.75c5e9a2.js",
    "revision": "0f1b8b98ae991cadab0ed0a32d20941b"
  },
  {
    "url": "assets/js/page-9a911df4.e5802c95.js",
    "revision": "87530abc51e1edccf1e95113b4d11c56"
  },
  {
    "url": "assets/js/page-bfd44046.09b9a53f.js",
    "revision": "64bdfa9ead82c976ee5d70ccc6166e0b"
  },
  {
    "url": "assets/js/page-bffdee08.54e059a5.js",
    "revision": "b8e165ebbceca282cd0371718e89b8a1"
  },
  {
    "url": "assets/js/page-cd7053a2.15f23cab.js",
    "revision": "4636b200acb76ae2631e3302219fd670"
  },
  {
    "url": "assets/js/page-dad8d1c2.fdb77c7a.js",
    "revision": "f56f4ed8599247805b0b866758e7356b"
  },
  {
    "url": "assets/js/page-eaea12a2.c47cdd26.js",
    "revision": "d665dcf5d0e0dd2fda3484bc4787871d"
  },
  {
    "url": "assets/js/page-fa1749c8.c16d8b28.js",
    "revision": "3e85360141774464231fa152105fa753"
  },
  {
    "url": "assets/js/vendors~flowchart.6844444e.js",
    "revision": "ac30cd8d0bfede454d900e50cfda682b"
  },
  {
    "url": "assets/js/vendors~layout-Layout.7f8bca29.js",
    "revision": "e18ea2ab6e39dc3eae0a995954a88fd6"
  },
  {
    "url": "category/index.html",
    "revision": "76879d1d63425ae820429312d6cb821d"
  },
  {
    "url": "hello-vblog.html",
    "revision": "7a462c24c34b124bcfc2c2191710b8cb"
  },
  {
    "url": "icon.png",
    "revision": "a0b370e0cdc4fb660546c5ecc4c7da20"
  },
  {
    "url": "index.html",
    "revision": "b246b679fc987415f1f2b49542b0d375"
  },
  {
    "url": "search/index.html",
    "revision": "95e6be3019bf703644941c885970a409"
  },
  {
    "url": "tag/index.html",
    "revision": "806bbec86a73daa0d7fedb2ef745e8cc"
  },
  {
    "url": "VBlog/Development/article/common/test-lazy-load.html",
    "revision": "5ef40a26fd4ca95efe53a363d3388803"
  },
  {
    "url": "VBlog/Development/article/common/test-lazy-load2.html",
    "revision": "b718a27bbc182522c62f1a242b950abb"
  },
  {
    "url": "VBlog/Feature/about-page.html",
    "revision": "46b88f7d147929499d5139e81a33a84a"
  },
  {
    "url": "VBlog/Feature/archive-page.html",
    "revision": "725178aef28acf0f37c428cbf35f61d9"
  },
  {
    "url": "VBlog/Feature/category-page.html",
    "revision": "c2a3d79dad0d5a454f5be9bef2ab9041"
  },
  {
    "url": "VBlog/Feature/common-feature.html",
    "revision": "d2e9c56bc546ee7bf2817b2500c73eaa"
  },
  {
    "url": "VBlog/Feature/index-page.html",
    "revision": "c2fb695aeba9ecc11c02300895323f56"
  },
  {
    "url": "VBlog/Feature/index.html",
    "revision": "98b59a4725b3aa1d21303beafb19539f"
  },
  {
    "url": "VBlog/Feature/post-page.html",
    "revision": "5af70185b8d36a6cba078cf67fb84c9d"
  },
  {
    "url": "VBlog/Feature/search-page.html",
    "revision": "5f5938393baf49c65dddcb4b73c5c6d5"
  },
  {
    "url": "VBlog/Feature/sidebar-feature.html",
    "revision": "7958480a1a47a7a4e776fe8df61e88f1"
  },
  {
    "url": "VBlog/Feature/tag-page.html",
    "revision": "3d636f9c531927bd5793f773ebd170e8"
  },
  {
    "url": "VBlog/index.html",
    "revision": "a22614bcafc317b7c3ef581941a09c84"
  },
  {
    "url": "VBlog/Installation.html",
    "revision": "8f42df5f0a679ccec0bc0533de85b1b9"
  },
  {
    "url": "VBlog/Quick-Start.html",
    "revision": "4c03de7d67f66028b7f32abfc128cbbe"
  },
  {
    "url": "VBlog/Usage/Container/index.html",
    "revision": "78b7b1a4481a8401a679b79fc2eca184"
  },
  {
    "url": "VBlog/Usage/front-matter.html",
    "revision": "5118a50c4ead0a1194b49e9309c04759"
  },
  {
    "url": "VBlog/Usage/index.html",
    "revision": "1d5bb1179d704c050cfc7f50e26a7bad"
  },
  {
    "url": "VBlog/Usage/Markdown/advanced.html",
    "revision": "b062ea4f9d5766d3bc85a38bfc8079b2"
  },
  {
    "url": "VBlog/Usage/Markdown/basic.html",
    "revision": "3e9d788c9938f5b1386927152972a9fd"
  },
  {
    "url": "VBlog/Usage/Markdown/flow-chart.html",
    "revision": "b2abe705c97cea264190b8143070d8cd"
  },
  {
    "url": "VBlog/Usage/Markdown/index.html",
    "revision": "8ac7420b758e5bbfe5552f3619f2b892"
  },
  {
    "url": "VBlog/Usage/Markdown/link.html",
    "revision": "31bc27ededbe10a99a26244ecfb47779"
  },
  {
    "url": "VBlog/Usage/Slide.html",
    "revision": "6e50a7a6554c81ada1b5b518c123e537"
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
