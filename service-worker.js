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
    "revision": "2cc9cb5aaf45cd9ffbbe6e22f32455f6"
  },
  {
    "url": "About/index.html",
    "revision": "599a2dbcc519a3510245cf3fed8dde1c"
  },
  {
    "url": "archive/index.html",
    "revision": "fdd61a35a0cc951c074e25155943e6f6"
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
    "url": "assets/js/40.8b934d4f.js",
    "revision": "5f8b91f28af0994862af6f5b512545b9"
  },
  {
    "url": "assets/js/41.d28b77d1.js",
    "revision": "e95e62ab7b4065609477d0da6f29743a"
  },
  {
    "url": "assets/js/42.6c95a7b0.js",
    "revision": "3033b17849a0ccf53811e48520480a3c"
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
    "url": "assets/js/47.ac5c2ae8.js",
    "revision": "067b8346156f6a6308c4b6a9b9b0f2b6"
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
    "url": "assets/js/app.53fee7df.js",
    "revision": "afdc6835fdfe826d18d7fa1f39c91046"
  },
  {
    "url": "assets/js/layout-BaseLayout.188f93f3.js",
    "revision": "0ced742ae6f29a463e8c5caecad8e169"
  },
  {
    "url": "assets/js/layout-BaseLayout~layout-Layout.2f73f235.js",
    "revision": "6d8b13073bba10e3843429790c5a7bb6"
  },
  {
    "url": "assets/js/layout-Layout.4770bfeb.js",
    "revision": "963f2849a7eadd0533bea789e519a000"
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
    "url": "assets/js/page-1bb4b3ad.43794ecb.js",
    "revision": "add740f65e1d844464bbdad2ea73edfa"
  },
  {
    "url": "assets/js/page-22a9043f.05a62b41.js",
    "revision": "5cef03c5f0db4c3a438a2635fc70716c"
  },
  {
    "url": "assets/js/page-23e99a6f.d3699786.js",
    "revision": "39b85713bee62caa31400b3f3f04f84c"
  },
  {
    "url": "assets/js/page-293f1fdc.7bca4fb6.js",
    "revision": "b06ca52df7208563ca50aff58c6de6db"
  },
  {
    "url": "assets/js/page-32e15e7c.5fd80af7.js",
    "revision": "c7b6f6f8cb21329282ebb035b5368b44"
  },
  {
    "url": "assets/js/page-3841e8ef.4801b26c.js",
    "revision": "0986b9f8346f8d28c5a4e1db166ef471"
  },
  {
    "url": "assets/js/page-3c4a43ae.aa583afc.js",
    "revision": "344e38d1e326ea3991f64ba1b4cbd03a"
  },
  {
    "url": "assets/js/page-49376acf.cd61708d.js",
    "revision": "1c932ce6e1128ad0f1b124647a85eace"
  },
  {
    "url": "assets/js/page-4abc2b47.b94350b9.js",
    "revision": "e896c1d120bc21aa4781ca2fd162e35e"
  },
  {
    "url": "assets/js/page-50e0a6f6.f41ce14c.js",
    "revision": "25aea8fd4d40ff1298d63cdcc11db107"
  },
  {
    "url": "assets/js/page-5607f94f.6d57b7ac.js",
    "revision": "92e8c87223e39e69d3ca7982fb3b834d"
  },
  {
    "url": "assets/js/page-5c008213.c9d06455.js",
    "revision": "63fb74dd4c201dbfbb2bc5350362f82e"
  },
  {
    "url": "assets/js/page-5fc63572.8844f4ff.js",
    "revision": "9e49f025f478b91a78441e19cbd38ed9"
  },
  {
    "url": "assets/js/page-6365d1e8.9ed2ebc9.js",
    "revision": "70c0ce2d784a19819f5abe531b475490"
  },
  {
    "url": "assets/js/page-6f8a8732.ca062245.js",
    "revision": "dd66d485eeb37c1f5eab7c3c7fbde3e9"
  },
  {
    "url": "assets/js/page-70a930f7.5885df62.js",
    "revision": "b4598dcb43c034162a3a02a44a9daaf7"
  },
  {
    "url": "assets/js/page-782df662.29503491.js",
    "revision": "e785809c92336b809697ae1f9255d249"
  },
  {
    "url": "assets/js/page-921a5862.79bee5ff.js",
    "revision": "d3be2920049e7a249f84246bd91ef769"
  },
  {
    "url": "assets/js/page-9a911df4.2fcf35eb.js",
    "revision": "e0629e3d9433f5da6e26f900e05a9f42"
  },
  {
    "url": "assets/js/page-bfd44046.e63d1931.js",
    "revision": "4b932084ee8e9baef3a420f9293978c5"
  },
  {
    "url": "assets/js/page-bffdee08.8365b7ef.js",
    "revision": "8583b0c71a379998ed9b3888a231a5a2"
  },
  {
    "url": "assets/js/page-cd7053a2.91c15722.js",
    "revision": "c78b79862295a9c3f6a3d87de111842b"
  },
  {
    "url": "assets/js/page-dad8d1c2.bc2e38cf.js",
    "revision": "639166cf34763ac74662a357899d41a2"
  },
  {
    "url": "assets/js/page-eaea12a2.e50a0edc.js",
    "revision": "f3ce2b1c96fa0aba85d2e6e13ceefce8"
  },
  {
    "url": "assets/js/page-fa1749c8.ffd5b129.js",
    "revision": "28fcfd5ded6afdc507b31e4693cdf16f"
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
    "revision": "7daf107ef284a5c715fc5096bea735b4"
  },
  {
    "url": "hello-vblog.html",
    "revision": "b9f50e801049ba0bdfe0075b14c8412b"
  },
  {
    "url": "icon.png",
    "revision": "a0b370e0cdc4fb660546c5ecc4c7da20"
  },
  {
    "url": "index.html",
    "revision": "4abd89e9ecaa113b473c2428c504d9d7"
  },
  {
    "url": "search/index.html",
    "revision": "bcb68cdb3dac4100cf508ce3aaa01f68"
  },
  {
    "url": "tag/index.html",
    "revision": "659ff8719aacd520d0c0fa940945c92f"
  },
  {
    "url": "VBlog/Development/article/common/test-lazy-load.html",
    "revision": "99dfcaf75abd4b361f69c98e8e410871"
  },
  {
    "url": "VBlog/Development/article/common/test-lazy-load2.html",
    "revision": "bd3ae31305bf58e996f76951efafc06a"
  },
  {
    "url": "VBlog/Feature/about-page.html",
    "revision": "58146b09919adee6b7412fbb40d3815a"
  },
  {
    "url": "VBlog/Feature/archive-page.html",
    "revision": "af8b4bab2744dc89259f8c8e1f9d6c63"
  },
  {
    "url": "VBlog/Feature/category-page.html",
    "revision": "0cef651e3b128cb7ce44a2f44a49e45e"
  },
  {
    "url": "VBlog/Feature/common-feature.html",
    "revision": "85d6639b1dbfb7e972767c4f83e844f6"
  },
  {
    "url": "VBlog/Feature/index-page.html",
    "revision": "45380fc97040ebc5672d7aa2f4a7c60d"
  },
  {
    "url": "VBlog/Feature/index.html",
    "revision": "7ea5a699f74d38049ba8e55fddd25d5b"
  },
  {
    "url": "VBlog/Feature/post-page.html",
    "revision": "30f1ce8b1387aedef7441694e2becbb4"
  },
  {
    "url": "VBlog/Feature/search-page.html",
    "revision": "9d19072733250d36b8e694463261189e"
  },
  {
    "url": "VBlog/Feature/sidebar-feature.html",
    "revision": "b41d5a54dd9e481c7b2d7aa7cbee21ca"
  },
  {
    "url": "VBlog/Feature/tag-page.html",
    "revision": "76f384c426bf1f277357d56ed0355424"
  },
  {
    "url": "VBlog/index.html",
    "revision": "d5224702c991b170584e818ab5e76da8"
  },
  {
    "url": "VBlog/Installation.html",
    "revision": "78cb581451fdadd83ed158436a4c9784"
  },
  {
    "url": "VBlog/Quick-Start.html",
    "revision": "4015f1104288fbf4749739d0d89873b2"
  },
  {
    "url": "VBlog/Usage/Container/index.html",
    "revision": "c8e8d4a4614dd39691f0d48e078e3481"
  },
  {
    "url": "VBlog/Usage/front-matter.html",
    "revision": "35d96389fc95c99b88239f1e2c6c8a7b"
  },
  {
    "url": "VBlog/Usage/index.html",
    "revision": "766c3eddfac0b707a1cbe8d7a08ea979"
  },
  {
    "url": "VBlog/Usage/Markdown/advanced.html",
    "revision": "f1a22f6b6afe901abf73587f2ed3ddac"
  },
  {
    "url": "VBlog/Usage/Markdown/basic.html",
    "revision": "ab95ac2293843e586b2b8cf45c89b2a4"
  },
  {
    "url": "VBlog/Usage/Markdown/flow-chart.html",
    "revision": "78c03bcbaeb1947bc3f083c0055b148f"
  },
  {
    "url": "VBlog/Usage/Markdown/index.html",
    "revision": "3756b338260bb4444dfa843f14ee5df9"
  },
  {
    "url": "VBlog/Usage/Markdown/link.html",
    "revision": "b89d9fb4757cfab75d85470a2b91c20e"
  },
  {
    "url": "VBlog/Usage/Slide.html",
    "revision": "c42b585bb6553e92925fa623ade596dc"
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
