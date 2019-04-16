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
    "revision": "767a5c7e5d3d4bc23cd1685915c057c1"
  },
  {
    "url": "About/index.html",
    "revision": "8ba20d753e3a35e80b6f02bd4ddc3af8"
  },
  {
    "url": "archive/index.html",
    "revision": "a1d084265cdf4b84acdcad3c176907f0"
  },
  {
    "url": "assets/css/0.styles.41d88d48.css",
    "revision": "e2f16b7265bebe02b50060aa6bbd234e"
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
    "url": "assets/js/39.ebb90cb1.js",
    "revision": "38421aa37ad68a1a542a52ac5a5e9aed"
  },
  {
    "url": "assets/js/4.2c6e6410.js",
    "revision": "e897da3d3ba3967e512ebb0ecf4968eb"
  },
  {
    "url": "assets/js/40.867a6560.js",
    "revision": "2b6fe07335b647d49861c6d8868671f1"
  },
  {
    "url": "assets/js/41.e637e5d8.js",
    "revision": "8b0d7b65b0cf374dad185498cb9b7174"
  },
  {
    "url": "assets/js/42.839f202c.js",
    "revision": "37d6cb9b687abcf6855a5cb697ccc9ec"
  },
  {
    "url": "assets/js/43.27d05883.js",
    "revision": "e02a4f5bb2db20fc09696613a6f69570"
  },
  {
    "url": "assets/js/44.1b6794d3.js",
    "revision": "f6c0ffe4ff9228654bb25c863c9d2cb7"
  },
  {
    "url": "assets/js/45.6202eb5c.js",
    "revision": "f4be6f46770949ad6b161ccb27b67157"
  },
  {
    "url": "assets/js/46.c882a0ce.js",
    "revision": "d00664aec2f6160966da507e89f955ea"
  },
  {
    "url": "assets/js/47.54385644.js",
    "revision": "f764dbc537348227565f822c2f0b891a"
  },
  {
    "url": "assets/js/48.78fa4988.js",
    "revision": "abdf03209332301aa8df46c1485327aa"
  },
  {
    "url": "assets/js/49.037fee9f.js",
    "revision": "f2aa8c2cf1c994138d04d0195e46c81d"
  },
  {
    "url": "assets/js/5.f39d0e2f.js",
    "revision": "5dc99ece1f506ea3ef834bf92830217a"
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
    "url": "assets/js/app.76e31ea8.js",
    "revision": "395f1f6d3ae8c3ecb093e19f657bb30c"
  },
  {
    "url": "assets/js/layout-BaseLayout.f6c87aca.js",
    "revision": "b15f99ab2ec8d0766327bb03aeadb53e"
  },
  {
    "url": "assets/js/layout-BaseLayout~layout-Layout.59cda3f5.js",
    "revision": "a506c097e4d74ff43e126d720fc138ab"
  },
  {
    "url": "assets/js/layout-Layout.9cc18417.js",
    "revision": "5ab2d85f041bb18201f8bac7c495c4bf"
  },
  {
    "url": "assets/js/layout-NotFound.7fb0ac28.js",
    "revision": "93e540243dfafbf580a4da014ccc61ae"
  },
  {
    "url": "assets/js/page-0815fe43.3134ba52.js",
    "revision": "a6dac5d728dde5327c60b33cf2a81e0d"
  },
  {
    "url": "assets/js/page-1bb4b3ad.be5634f8.js",
    "revision": "d3b3ac6c9884824d29b0f6aed33ef30a"
  },
  {
    "url": "assets/js/page-22a9043f.eee7d9cb.js",
    "revision": "5250bd3bd7f5f4e203f7f99e8b394ca4"
  },
  {
    "url": "assets/js/page-23e99a6f.206dfa57.js",
    "revision": "e63b9530d4a2f431da7df07e16e2fcc2"
  },
  {
    "url": "assets/js/page-293f1fdc.a2c123a7.js",
    "revision": "a57f333a27343c40c6376da55bb4e2da"
  },
  {
    "url": "assets/js/page-32e15e7c.759e5a08.js",
    "revision": "54936f9ebc570f56182b7e1e7c9fd399"
  },
  {
    "url": "assets/js/page-3841e8ef.57710f42.js",
    "revision": "dbff8e75c1e92a0e588b559fbb05927c"
  },
  {
    "url": "assets/js/page-3c4a43ae.81f8543f.js",
    "revision": "5590053a942b67c3c028c6ec21f9dd16"
  },
  {
    "url": "assets/js/page-49376acf.b6ba17f2.js",
    "revision": "d1271123b681c51088f989222749e44f"
  },
  {
    "url": "assets/js/page-4abc2b47.654d32fb.js",
    "revision": "cfe9ad60c45d85680de89e7f414004bf"
  },
  {
    "url": "assets/js/page-50e0a6f6.35c371ec.js",
    "revision": "e9678660197bf85d94560da61772ba6b"
  },
  {
    "url": "assets/js/page-5607f94f.e4036ed9.js",
    "revision": "f106aedfa6f080f1ab5fa657f3474657"
  },
  {
    "url": "assets/js/page-5c008213.0ae85420.js",
    "revision": "82cae8bc54d8e372aa4483bc87fcbdd0"
  },
  {
    "url": "assets/js/page-5fc63572.dc005eb7.js",
    "revision": "9f1046dcf7a9fab16a8de67972b088e4"
  },
  {
    "url": "assets/js/page-6365d1e8.48aab4d4.js",
    "revision": "f0508d9e34a2168230a904d5f93a318d"
  },
  {
    "url": "assets/js/page-6f8a8732.dab504f3.js",
    "revision": "03bea314da006971779c98f97e14f9ce"
  },
  {
    "url": "assets/js/page-70a930f7.8dab2c70.js",
    "revision": "2a5f86f2d5cc8f4223f05d7a107706d1"
  },
  {
    "url": "assets/js/page-782df662.fc75f352.js",
    "revision": "01452e968345b6bbaa21917a889ee528"
  },
  {
    "url": "assets/js/page-921a5862.38e551c9.js",
    "revision": "b97d8bd44d0f32f7b17c23b03b144144"
  },
  {
    "url": "assets/js/page-9a911df4.3bc4735d.js",
    "revision": "05ba47dc4124f4d1aefc44e1dc36e4d8"
  },
  {
    "url": "assets/js/page-bfd44046.2beb9384.js",
    "revision": "397459652691b155b9d46e21770a3573"
  },
  {
    "url": "assets/js/page-bffdee08.573565fc.js",
    "revision": "713d544cae3ea41802f9508837b662a5"
  },
  {
    "url": "assets/js/page-cd7053a2.c55e4aec.js",
    "revision": "b3360568d4bc8d12a73fb15d91f24d2e"
  },
  {
    "url": "assets/js/page-dad8d1c2.cb164744.js",
    "revision": "92b238b5e4356de4fe92442a9f45ff07"
  },
  {
    "url": "assets/js/page-eaea12a2.3c5a3671.js",
    "revision": "e6895619ef85a3b9c650a352c348338e"
  },
  {
    "url": "assets/js/page-fa1749c8.264ede39.js",
    "revision": "9bdcda6e4bc226b292e58d2a73379a73"
  },
  {
    "url": "assets/js/vendors~flowchart.2f108bf4.js",
    "revision": "9bd9c0db29c3238b536e5a68ea6d2837"
  },
  {
    "url": "assets/js/vendors~layout-Layout.23a856de.js",
    "revision": "4d1ee9dca205a516600b10c90433e6ba"
  },
  {
    "url": "category/index.html",
    "revision": "1220f28323abb64e84ea3a788a7e6851"
  },
  {
    "url": "hello-vblog.html",
    "revision": "16fb163b7b2336141f7bad06535ed360"
  },
  {
    "url": "icon.png",
    "revision": "a0b370e0cdc4fb660546c5ecc4c7da20"
  },
  {
    "url": "index.html",
    "revision": "aac844c8cb40e9f3c222e021bd8e6862"
  },
  {
    "url": "search/index.html",
    "revision": "495209481ba537347bc1dd11ec39c231"
  },
  {
    "url": "tag/index.html",
    "revision": "52d16840b29c386c9deafa36425c6701"
  },
  {
    "url": "VBlog/Development/article/common/test-lazy-load.html",
    "revision": "eb5e1d767f0b477dcf9008739bcb0433"
  },
  {
    "url": "VBlog/Development/article/common/test-lazy-load2.html",
    "revision": "83d456c29e17e4a24f511398836f0f96"
  },
  {
    "url": "VBlog/Feature/about-page.html",
    "revision": "18a6d6b284ab6517c53741c02afed4ac"
  },
  {
    "url": "VBlog/Feature/archive-page.html",
    "revision": "3e5cfd51f32495218845694f0eb80ef0"
  },
  {
    "url": "VBlog/Feature/category-page.html",
    "revision": "aa4de29dd427cbd6a6c5096c2107b12e"
  },
  {
    "url": "VBlog/Feature/common-feature.html",
    "revision": "19b2c2d1dc7753981db5c5f2cabd8070"
  },
  {
    "url": "VBlog/Feature/index-page.html",
    "revision": "1f6eadacb81d48e841aac0566960185d"
  },
  {
    "url": "VBlog/Feature/index.html",
    "revision": "eb5253bcdf6eb1a323e1d15b508806c7"
  },
  {
    "url": "VBlog/Feature/post-page.html",
    "revision": "01a377444d506c95d2cd18d9e345e09c"
  },
  {
    "url": "VBlog/Feature/search-page.html",
    "revision": "769d73f0d280b862248804f56433d4b6"
  },
  {
    "url": "VBlog/Feature/sidebar-feature.html",
    "revision": "233c248e8e5e3f25d8be3d25ff2eab57"
  },
  {
    "url": "VBlog/Feature/tag-page.html",
    "revision": "ccdfcab28517c0dcca152cc0f0770708"
  },
  {
    "url": "VBlog/index.html",
    "revision": "be6ec6c6fa27900dc73ce3d22559f6c7"
  },
  {
    "url": "VBlog/Installation.html",
    "revision": "9025750630aec071b011e726bdd11e79"
  },
  {
    "url": "VBlog/Quick-Start.html",
    "revision": "cd769a18d76f00a50e29f496c679563c"
  },
  {
    "url": "VBlog/Usage/Container/index.html",
    "revision": "976a483a55f29d351e05e21d2d46f325"
  },
  {
    "url": "VBlog/Usage/front-matter.html",
    "revision": "d95c3046c49e89fe288014b62c40946c"
  },
  {
    "url": "VBlog/Usage/index.html",
    "revision": "1d276cd43ecbab3f2abbb898ba27e1a7"
  },
  {
    "url": "VBlog/Usage/Markdown/advanced.html",
    "revision": "8352872fabf974839dfb8cf84921f8a4"
  },
  {
    "url": "VBlog/Usage/Markdown/basic.html",
    "revision": "fd4bcbc150b8a93beafea2fb7c5f9b6b"
  },
  {
    "url": "VBlog/Usage/Markdown/flow-chart.html",
    "revision": "02f2c919fddbaa0d2820c24cc1653f96"
  },
  {
    "url": "VBlog/Usage/Markdown/index.html",
    "revision": "d75f5e6bd2f6de58e5d0c5c5be0184c0"
  },
  {
    "url": "VBlog/Usage/Markdown/link.html",
    "revision": "8705ed6a9851adb1165032acf9bee976"
  },
  {
    "url": "VBlog/Usage/Slide.html",
    "revision": "6ea5202c00734714015480ff5d242e16"
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
