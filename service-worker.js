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
    "revision": "fb7ae315172c56408fbad94d4007b866"
  },
  {
    "url": "About/index.html",
    "revision": "4170fa587bba295d4ec6415960dff0e8"
  },
  {
    "url": "archive/index.html",
    "revision": "9818d6b9e0a8f3aa8d178c93675fbe85"
  },
  {
    "url": "assets/css/0.styles.2d844194.css",
    "revision": "560b44748e7a7efc483a661ffab9e469"
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
    "url": "assets/js/40.8b934d4f.js",
    "revision": "5f8b91f28af0994862af6f5b512545b9"
  },
  {
    "url": "assets/js/41.d28b77d1.js",
    "revision": "e95e62ab7b4065609477d0da6f29743a"
  },
  {
    "url": "assets/js/42.ed149414.js",
    "revision": "b86655472aff19d7a1b20762052157d8"
  },
  {
    "url": "assets/js/43.1e4017b5.js",
    "revision": "1648aad59aa975db81b0f852814e0d0d"
  },
  {
    "url": "assets/js/44.ce3fe8a7.js",
    "revision": "82796ef3933e519ca3d1c0fe30fbf0a4"
  },
  {
    "url": "assets/js/45.a6d2664e.js",
    "revision": "a3f3de6c8ee6a8ebbff42f8a9813eefb"
  },
  {
    "url": "assets/js/46.c796c4a4.js",
    "revision": "d0a47bb27cf11aef2d6ddfe413a45187"
  },
  {
    "url": "assets/js/47.0c540486.js",
    "revision": "b23cea480ac23ea2a5da60a0cd081318"
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
    "url": "assets/js/5.f46a5a63.js",
    "revision": "55157a5239f706f49cb1637ff2b1291c"
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
    "url": "assets/js/app.a2c964ce.js",
    "revision": "4e1003c6bb6ab59a922285383c95d6d1"
  },
  {
    "url": "assets/js/layout-BaseLayout.188f93f3.js",
    "revision": "0ced742ae6f29a463e8c5caecad8e169"
  },
  {
    "url": "assets/js/layout-BaseLayout~layout-Layout.dc36740e.js",
    "revision": "ccb6a35cc813c6be16f501838f452f01"
  },
  {
    "url": "assets/js/layout-Layout.4f45011f.js",
    "revision": "8806ad70471703e9c5b3ca0f3be01865"
  },
  {
    "url": "assets/js/layout-NotFound.67c21a46.js",
    "revision": "6172bddd8724202320c41ceac900e708"
  },
  {
    "url": "assets/js/page-0815fe43.a7b31508.js",
    "revision": "ea9da1f61eafb870eac5fbeb90af7954"
  },
  {
    "url": "assets/js/page-1bb4b3ad.fca9a6a8.js",
    "revision": "2e26bc7d869caadfeffdb34f0f46d906"
  },
  {
    "url": "assets/js/page-22a9043f.8f2af6df.js",
    "revision": "24c90f8ee17f661812ca634454cd4d53"
  },
  {
    "url": "assets/js/page-23e99a6f.937721ad.js",
    "revision": "7f39643d3263a19f995feeb7f9f0c126"
  },
  {
    "url": "assets/js/page-293f1fdc.7bca4fb6.js",
    "revision": "b06ca52df7208563ca50aff58c6de6db"
  },
  {
    "url": "assets/js/page-32e15e7c.b0aa482b.js",
    "revision": "0b65f08227b57eee6c910a8fdeec767d"
  },
  {
    "url": "assets/js/page-3841e8ef.f9db5439.js",
    "revision": "65836c6b02619302ccdec3f6e5a8872f"
  },
  {
    "url": "assets/js/page-3c4a43ae.01e99e33.js",
    "revision": "d2b8822d8c9515876e74f2bf8c9f29de"
  },
  {
    "url": "assets/js/page-49376acf.43d9c6d7.js",
    "revision": "905843a5b8e990324210fe3e9dc3c183"
  },
  {
    "url": "assets/js/page-4abc2b47.6c3b8223.js",
    "revision": "6eb5dff01515f53a2bf8bb20794409e1"
  },
  {
    "url": "assets/js/page-50e0a6f6.5f965e12.js",
    "revision": "8ae4dbc6fbd96ac1d854b0b04f983a1b"
  },
  {
    "url": "assets/js/page-5607f94f.2ba8e4ad.js",
    "revision": "d8db2b927eedcd00af0f484e30a6407a"
  },
  {
    "url": "assets/js/page-5c008213.66f6dd55.js",
    "revision": "a33fab4d859a79857b73f51d649c6268"
  },
  {
    "url": "assets/js/page-5fc63572.2e4617e9.js",
    "revision": "c75384444dc596e0ce9aec598ddae876"
  },
  {
    "url": "assets/js/page-6365d1e8.9ed2ebc9.js",
    "revision": "70c0ce2d784a19819f5abe531b475490"
  },
  {
    "url": "assets/js/page-6f8a8732.917cf8f9.js",
    "revision": "b861e836196496afd70bbb061d4a989c"
  },
  {
    "url": "assets/js/page-70a930f7.2e3bdc0c.js",
    "revision": "ee21b1bfcbc31e26e48378f229a4456d"
  },
  {
    "url": "assets/js/page-782df662.2e154745.js",
    "revision": "9a934298de9e446ccc1e8ded3164d6e0"
  },
  {
    "url": "assets/js/page-921a5862.434f2714.js",
    "revision": "1a6fb159cd58c890f2430b9e6e66e310"
  },
  {
    "url": "assets/js/page-9a911df4.8cf2f753.js",
    "revision": "2fdb9bcd774b88083d1bcea51ad647fc"
  },
  {
    "url": "assets/js/page-bfd44046.f1a5d7ea.js",
    "revision": "8c6acfa28bf3953196d2b9482181ef46"
  },
  {
    "url": "assets/js/page-bffdee08.b68aba7d.js",
    "revision": "683ac3b6acffa6873f90798cd6431dbb"
  },
  {
    "url": "assets/js/page-cd7053a2.8244d339.js",
    "revision": "9e91d98b7e090bae0d8396d8cb6b8828"
  },
  {
    "url": "assets/js/page-dad8d1c2.cb164744.js",
    "revision": "92b238b5e4356de4fe92442a9f45ff07"
  },
  {
    "url": "assets/js/page-eaea12a2.77d24a6d.js",
    "revision": "e4c54a30f321377a05a333d824f91bcd"
  },
  {
    "url": "assets/js/page-fa1749c8.19893de9.js",
    "revision": "fd804219d5533ecd7afaacfa7f379da5"
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
    "revision": "48cba9f9420d0994796fb617b79a443f"
  },
  {
    "url": "hello-vblog.html",
    "revision": "2501c35564e32ffbd3e5b95f8c087395"
  },
  {
    "url": "icon.png",
    "revision": "a0b370e0cdc4fb660546c5ecc4c7da20"
  },
  {
    "url": "index.html",
    "revision": "80b43df8cf1575e94a8b60f761de8cb0"
  },
  {
    "url": "search/index.html",
    "revision": "98bd9dc894879ad53fce293a3af6bfa7"
  },
  {
    "url": "tag/index.html",
    "revision": "51c1d153d444b2a48c0bf32446aa9959"
  },
  {
    "url": "VBlog/Development/article/common/test-lazy-load.html",
    "revision": "5275e61eb05c38ed4c3c603fa1e049ab"
  },
  {
    "url": "VBlog/Development/article/common/test-lazy-load2.html",
    "revision": "fc40906180cf467a6497708422e5026a"
  },
  {
    "url": "VBlog/Feature/about-page.html",
    "revision": "6ab6f744f18c7ba88ff87f670158492d"
  },
  {
    "url": "VBlog/Feature/archive-page.html",
    "revision": "d24ce5c845c6c1dd1f617bb38ec5aa13"
  },
  {
    "url": "VBlog/Feature/category-page.html",
    "revision": "6f2fced9f82f686c2598772ea7c7031f"
  },
  {
    "url": "VBlog/Feature/common-feature.html",
    "revision": "1b9b0f65e0c87a1aad81bb2625420d81"
  },
  {
    "url": "VBlog/Feature/index-page.html",
    "revision": "62ab94c26fe53f436415bf5ab430a176"
  },
  {
    "url": "VBlog/Feature/index.html",
    "revision": "acf6aca7654b7a84d9ada099fa885b3f"
  },
  {
    "url": "VBlog/Feature/post-page.html",
    "revision": "63459cb511b02c75f9d621ef4acc089b"
  },
  {
    "url": "VBlog/Feature/search-page.html",
    "revision": "a98696019315e9378690777fc9ad3b82"
  },
  {
    "url": "VBlog/Feature/sidebar-feature.html",
    "revision": "bfe069d584bf05ced758bb303194421d"
  },
  {
    "url": "VBlog/Feature/tag-page.html",
    "revision": "b3fdf1e2f70886eab7fcce09e53cf5a4"
  },
  {
    "url": "VBlog/index.html",
    "revision": "3f42410cc31201a2c5f7ad2d03ccbb6c"
  },
  {
    "url": "VBlog/Installation.html",
    "revision": "116f4796017ed20c5b3e056373e8dcc8"
  },
  {
    "url": "VBlog/Quick-Start.html",
    "revision": "0b472e9420b9e179b5b5f23c68938e1f"
  },
  {
    "url": "VBlog/Usage/Container/index.html",
    "revision": "762a6becfad4a2116d2d92577a2fedfa"
  },
  {
    "url": "VBlog/Usage/front-matter.html",
    "revision": "3bd768c18ce7771fe4fa4c80200f96e2"
  },
  {
    "url": "VBlog/Usage/index.html",
    "revision": "6326756174e4debf0352816b31003fa7"
  },
  {
    "url": "VBlog/Usage/Markdown/advanced.html",
    "revision": "b69a2ff3aa5a6487cd166655b570c695"
  },
  {
    "url": "VBlog/Usage/Markdown/basic.html",
    "revision": "af55d34d68ff1343ea5957842451ea33"
  },
  {
    "url": "VBlog/Usage/Markdown/flow-chart.html",
    "revision": "fe1c84b59d655d06967b37d683d74d45"
  },
  {
    "url": "VBlog/Usage/Markdown/index.html",
    "revision": "b6c49e9ce4a91f87006eeb70a088d3e9"
  },
  {
    "url": "VBlog/Usage/Markdown/link.html",
    "revision": "1f3ca80fec3e50ec8332ef24a1791b69"
  },
  {
    "url": "VBlog/Usage/Slide.html",
    "revision": "a971b614e01a0c50ba8b30220517bdeb"
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
