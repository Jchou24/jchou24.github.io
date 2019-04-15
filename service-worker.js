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
    "revision": "8b4152c928497578cabdbdbd92e35540"
  },
  {
    "url": "About/index.html",
    "revision": "9d63428b0ef8e68596f32148dcb09efd"
  },
  {
    "url": "archive/index.html",
    "revision": "3e31fc671dd142d13cff80958d1df5fe"
  },
  {
    "url": "assets/css/0.styles.c2aa1e45.css",
    "revision": "fa4bfc441ea63016cbcb01e747adf5dc"
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
    "url": "assets/js/1.6d816035.js",
    "revision": "9435b16f5fad0b355b9531533728bea6"
  },
  {
    "url": "assets/js/2.309640ab.js",
    "revision": "d63e967036649416f06e02b919866d54"
  },
  {
    "url": "assets/js/39.0bf0539f.js",
    "revision": "1e9a6948c3090e38611d63d07c421b0f"
  },
  {
    "url": "assets/js/4.f8e0dc90.js",
    "revision": "212780f1b9f77e26b4f28e973ef4d855"
  },
  {
    "url": "assets/js/40.7cd55fc0.js",
    "revision": "49eb82d990bbed31d031368a40305608"
  },
  {
    "url": "assets/js/41.e637e5d8.js",
    "revision": "8b0d7b65b0cf374dad185498cb9b7174"
  },
  {
    "url": "assets/js/42.e53611f5.js",
    "revision": "d34088465dd5375fa8be7c95d3ba0753"
  },
  {
    "url": "assets/js/43.974f3a17.js",
    "revision": "0dfac496ad2bc7526ed017d8da71654c"
  },
  {
    "url": "assets/js/44.3a19e61c.js",
    "revision": "0b3b213c2a93d04a67620106b7ffb42e"
  },
  {
    "url": "assets/js/45.7cf870e8.js",
    "revision": "52b93861646ef7613d5ac4acadba870e"
  },
  {
    "url": "assets/js/46.4bd0c16d.js",
    "revision": "aa898b812120e70f5468008b1f10f1e9"
  },
  {
    "url": "assets/js/47.fd83cafe.js",
    "revision": "fa29372079c4a413c05ad54e5a9a8a82"
  },
  {
    "url": "assets/js/48.d69bd533.js",
    "revision": "5ff976a9dac6450e3a215bfbe946c7ba"
  },
  {
    "url": "assets/js/49.037fee9f.js",
    "revision": "f2aa8c2cf1c994138d04d0195e46c81d"
  },
  {
    "url": "assets/js/5.dd64acd6.js",
    "revision": "c6e070e45002456a77851e522f9fe39a"
  },
  {
    "url": "assets/js/50.fa4943b0.js",
    "revision": "72c414dc08d3a9e222dd40f821284fdf"
  },
  {
    "url": "assets/js/51.132d38bc.js",
    "revision": "d46501e9d061e9fe2cf7554600249f9a"
  },
  {
    "url": "assets/js/52.2c693bf8.js",
    "revision": "3c240688d8e8a6bc040201212caecabe"
  },
  {
    "url": "assets/js/53.db6bec98.js",
    "revision": "aef0d7f6f3b3dc9c0b61971ce3a06a57"
  },
  {
    "url": "assets/js/6.b845f405.js",
    "revision": "9577ecf5c8b5ddd92983756fdc440f3b"
  },
  {
    "url": "assets/js/app.43be391f.js",
    "revision": "b19c416da50d8ea68169041395393418"
  },
  {
    "url": "assets/js/layout-BaseLayout.73708630.js",
    "revision": "cb7ad793a773ea870b268c39f0628c5d"
  },
  {
    "url": "assets/js/layout-BaseLayout~layout-Layout.f0604898.js",
    "revision": "d12413f812b3a090e4b194686af3d50a"
  },
  {
    "url": "assets/js/layout-Layout.82b77088.js",
    "revision": "7cae99693eff964b3c3c93f5473d7d77"
  },
  {
    "url": "assets/js/layout-NotFound.314da349.js",
    "revision": "94593dc1c3281b6c3ca4837ac6d60353"
  },
  {
    "url": "assets/js/page-0815fe43.bc00711a.js",
    "revision": "ba2f8e0e99dfcc494f2bae9fba8e52e0"
  },
  {
    "url": "assets/js/page-1bb4b3ad.fca9a6a8.js",
    "revision": "2e26bc7d869caadfeffdb34f0f46d906"
  },
  {
    "url": "assets/js/page-22a9043f.1e309598.js",
    "revision": "1949a76bc73da63f83162cebe9d876b3"
  },
  {
    "url": "assets/js/page-23e99a6f.3c611efb.js",
    "revision": "6982e1ad001c4e8a1168ff02a23c3431"
  },
  {
    "url": "assets/js/page-293f1fdc.7bca4fb6.js",
    "revision": "b06ca52df7208563ca50aff58c6de6db"
  },
  {
    "url": "assets/js/page-32e15e7c.3eeb8bd5.js",
    "revision": "7656c7549e4f3725b724ea05f9dd3d7d"
  },
  {
    "url": "assets/js/page-3841e8ef.6bfce826.js",
    "revision": "5f580f1c9bc66e8da17e994677aadff7"
  },
  {
    "url": "assets/js/page-3c4a43ae.6b17f290.js",
    "revision": "5d8a3be9d6767ab44ce0bd752e28b2ee"
  },
  {
    "url": "assets/js/page-49376acf.4b422360.js",
    "revision": "3447ec8e2124f61490d846f5c664895b"
  },
  {
    "url": "assets/js/page-4abc2b47.0738eea6.js",
    "revision": "396effb9c7980a6e7d54ca9eabbad3da"
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
    "url": "assets/js/page-5c008213.04103525.js",
    "revision": "e868252e7ec03dd7559af11f86e86140"
  },
  {
    "url": "assets/js/page-5fc63572.bc7b7ee2.js",
    "revision": "4d63f346983417d23fe20b2e9bcf1e32"
  },
  {
    "url": "assets/js/page-6365d1e8.9e1b32a6.js",
    "revision": "6b39b18c852057549d644105bd76c64f"
  },
  {
    "url": "assets/js/page-6f8a8732.ca062245.js",
    "revision": "dd66d485eeb37c1f5eab7c3c7fbde3e9"
  },
  {
    "url": "assets/js/page-70a930f7.b6743c2e.js",
    "revision": "b5b4fa8ae2721b576d366e6ddbf486b5"
  },
  {
    "url": "assets/js/page-782df662.5d435171.js",
    "revision": "1185552712257c330543bbe34ea44024"
  },
  {
    "url": "assets/js/page-921a5862.eff90557.js",
    "revision": "c6f69d25e964994c54cca93918c7a40f"
  },
  {
    "url": "assets/js/page-9a911df4.10912b3e.js",
    "revision": "ceba39cff2c140bc1206efcead4d060f"
  },
  {
    "url": "assets/js/page-bfd44046.084715c0.js",
    "revision": "fcce421ece787bef0c82e8374bf132e9"
  },
  {
    "url": "assets/js/page-bffdee08.b68aba7d.js",
    "revision": "683ac3b6acffa6873f90798cd6431dbb"
  },
  {
    "url": "assets/js/page-cd7053a2.7727fb91.js",
    "revision": "90b73fdacc41c614846c00deb7a13c2d"
  },
  {
    "url": "assets/js/page-dad8d1c2.ba935ccb.js",
    "revision": "fc327f460b35a433e3322d7dbea4e787"
  },
  {
    "url": "assets/js/page-eaea12a2.b9482098.js",
    "revision": "1b6ea6224c1ebf891fea6ac01babc066"
  },
  {
    "url": "assets/js/page-fa1749c8.368be79a.js",
    "revision": "57c8ac1396fe255e1dabd931a6f6dfce"
  },
  {
    "url": "assets/js/vendors~flowchart.4dfbbe88.js",
    "revision": "6fb5962df3346f585adf467b67ffde75"
  },
  {
    "url": "assets/js/vendors~layout-Layout.5a9d30b6.js",
    "revision": "da5246ceb2a66a6ad844e925d2c6abb6"
  },
  {
    "url": "category/index.html",
    "revision": "c1bf51f921b75478517fedbc7cc08231"
  },
  {
    "url": "hello-vblog.html",
    "revision": "9d6264e5ccecdbdfa1f7de300d36eb22"
  },
  {
    "url": "icon.png",
    "revision": "a0b370e0cdc4fb660546c5ecc4c7da20"
  },
  {
    "url": "index.html",
    "revision": "773c92d26ee7511a7cb550077ae9ca49"
  },
  {
    "url": "search/index.html",
    "revision": "ba6aebd01912437d04c5e2c435d5c1d4"
  },
  {
    "url": "tag/index.html",
    "revision": "93ec20bea3f665822ff1d7c59e7399a3"
  },
  {
    "url": "VBlog/Development/article/common/test-lazy-load.html",
    "revision": "d4e97d7fa97ae172068fde50d0980905"
  },
  {
    "url": "VBlog/Development/article/common/test-lazy-load2.html",
    "revision": "40348518d48cf1448bf71e8215111b73"
  },
  {
    "url": "VBlog/Feature/about-page.html",
    "revision": "430cbd7644007951247ad544bb3d69cd"
  },
  {
    "url": "VBlog/Feature/archive-page.html",
    "revision": "a34a69545ac3a28bd704b908e57fd0f3"
  },
  {
    "url": "VBlog/Feature/category-page.html",
    "revision": "74c1e2216f669e896fe1dc91d11151b4"
  },
  {
    "url": "VBlog/Feature/common-feature.html",
    "revision": "ce226b200b0e5383ecee6e3a0c21247a"
  },
  {
    "url": "VBlog/Feature/index-page.html",
    "revision": "23f5f0d8cabdc8d46879e4e450dd83b3"
  },
  {
    "url": "VBlog/Feature/index.html",
    "revision": "15dd013539ad627ef2344d024cb1d074"
  },
  {
    "url": "VBlog/Feature/post-page.html",
    "revision": "00ffd84bfde70ac56b492ca7aa455f86"
  },
  {
    "url": "VBlog/Feature/search-page.html",
    "revision": "524c06aa044d485f73d4b7061f455bca"
  },
  {
    "url": "VBlog/Feature/sidebar-feature.html",
    "revision": "7d7f39246c1ae886222c3bcb7f6356b5"
  },
  {
    "url": "VBlog/Feature/tag-page.html",
    "revision": "68853680db9640405121bf814eb0fe50"
  },
  {
    "url": "VBlog/index.html",
    "revision": "366db8bbe855a2d616029703f6ff1624"
  },
  {
    "url": "VBlog/Installation.html",
    "revision": "430f3e4eb1aa9386c4b509970b3afac1"
  },
  {
    "url": "VBlog/Quick-Start.html",
    "revision": "b69f456700942e43e65585f0223452b8"
  },
  {
    "url": "VBlog/Usage/Container/index.html",
    "revision": "916214e444b6de2471b90b1da29821dc"
  },
  {
    "url": "VBlog/Usage/front-matter.html",
    "revision": "1a0c72c24d72887f3508cca514e52a48"
  },
  {
    "url": "VBlog/Usage/index.html",
    "revision": "b46565c3c0c759b08e911209447d833c"
  },
  {
    "url": "VBlog/Usage/Markdown/advanced.html",
    "revision": "6de9fbda6a0b1a7fa6d7efd4c87bf3ad"
  },
  {
    "url": "VBlog/Usage/Markdown/basic.html",
    "revision": "97ae6ee006e856a1e279764350a76289"
  },
  {
    "url": "VBlog/Usage/Markdown/flow-chart.html",
    "revision": "973ffe4369d0b70567048fd0df0f56f8"
  },
  {
    "url": "VBlog/Usage/Markdown/index.html",
    "revision": "56b62e8332f8731de78926f16d85e3ed"
  },
  {
    "url": "VBlog/Usage/Markdown/link.html",
    "revision": "e8d8071c5fbe9ef40e88ecbcbc14d002"
  },
  {
    "url": "VBlog/Usage/Slide.html",
    "revision": "3cb612c13cbce649cace85985734ead4"
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
