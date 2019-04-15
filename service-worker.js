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
    "revision": "0ea3210759e4ecb37aa18a7cfb163853"
  },
  {
    "url": "About/index.html",
    "revision": "3d0eabcb52b1e3132d57306976bc9d42"
  },
  {
    "url": "archive/index.html",
    "revision": "5024dea96011d88572a36b71fc5bf5e9"
  },
  {
    "url": "assets/css/0.styles.48cf4292.css",
    "revision": "dbffe4067232b1aa06388a41bfb31efd"
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
    "url": "assets/js/42.832f908e.js",
    "revision": "d6336fc770fe9dca568e2a0a287e56fe"
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
    "url": "assets/js/app.5c3f611e.js",
    "revision": "6fa3caa063af18cb7b7b1fa73baa0861"
  },
  {
    "url": "assets/js/layout-BaseLayout.73708630.js",
    "revision": "cb7ad793a773ea870b268c39f0628c5d"
  },
  {
    "url": "assets/js/layout-BaseLayout~layout-Layout.fcd7dc3f.js",
    "revision": "fb8762942da5e0e253038254620f0750"
  },
  {
    "url": "assets/js/layout-Layout.1fbcce0b.js",
    "revision": "824cd352220c474a1ed0d8ac039f4ccc"
  },
  {
    "url": "assets/js/layout-NotFound.314da349.js",
    "revision": "94593dc1c3281b6c3ca4837ac6d60353"
  },
  {
    "url": "assets/js/page-0815fe43.1b3d49bc.js",
    "revision": "8ebb101888c22866da8835b9fb030074"
  },
  {
    "url": "assets/js/page-1bb4b3ad.ca6230c2.js",
    "revision": "f44f4ae7e00d089e54e9855ce222d76d"
  },
  {
    "url": "assets/js/page-22a9043f.c7fadb4b.js",
    "revision": "dac9da2a9723cd93e3a95c909e8f749d"
  },
  {
    "url": "assets/js/page-23e99a6f.d12cc8d1.js",
    "revision": "e407550a5c154fe34402950e1009e0ee"
  },
  {
    "url": "assets/js/page-293f1fdc.d477e45e.js",
    "revision": "4a34ddd74c6e4ccec8c69df11b46e832"
  },
  {
    "url": "assets/js/page-32e15e7c.5e617b82.js",
    "revision": "ca9e63ba487876aa94c56ba2243769af"
  },
  {
    "url": "assets/js/page-3841e8ef.fb5a4864.js",
    "revision": "fddc6c79207b23e82869f27fb65ee5a5"
  },
  {
    "url": "assets/js/page-3c4a43ae.aa583afc.js",
    "revision": "344e38d1e326ea3991f64ba1b4cbd03a"
  },
  {
    "url": "assets/js/page-49376acf.2d8a9b73.js",
    "revision": "b0457bd61f1ee481731f8a1d4368d0c3"
  },
  {
    "url": "assets/js/page-4abc2b47.0e49a940.js",
    "revision": "cbd757e07e882a9b214c72f63b24841a"
  },
  {
    "url": "assets/js/page-50e0a6f6.d8e631ab.js",
    "revision": "083d47543e7bbd0c8bfa7c0254094835"
  },
  {
    "url": "assets/js/page-5607f94f.2ba8e4ad.js",
    "revision": "d8db2b927eedcd00af0f484e30a6407a"
  },
  {
    "url": "assets/js/page-5c008213.67fbf401.js",
    "revision": "7f457716563845bf74524eb408db239b"
  },
  {
    "url": "assets/js/page-5fc63572.cecc5d66.js",
    "revision": "f168252f00e7ec3c3065964ac1b9e247"
  },
  {
    "url": "assets/js/page-6365d1e8.78428d27.js",
    "revision": "38960be6c7f0a981af1e8adf31aa8ef2"
  },
  {
    "url": "assets/js/page-6f8a8732.d4f24347.js",
    "revision": "459a3adad55fb848e4b79f3e54353a7e"
  },
  {
    "url": "assets/js/page-70a930f7.131fc4b8.js",
    "revision": "738c64ac792fd25a4857b5ce65101b85"
  },
  {
    "url": "assets/js/page-782df662.fba4a7fe.js",
    "revision": "7ebd831115435b470b51e31bae13c8cd"
  },
  {
    "url": "assets/js/page-921a5862.45a28aa7.js",
    "revision": "7a0df8e44190e0aeaea747609fa7f1c6"
  },
  {
    "url": "assets/js/page-9a911df4.a9c0365e.js",
    "revision": "19cd4316aeefcca27f73ff3230390977"
  },
  {
    "url": "assets/js/page-bfd44046.3f20bfb8.js",
    "revision": "bce78cddf6f5ca4ffe62baab1c57ba83"
  },
  {
    "url": "assets/js/page-bffdee08.b68aba7d.js",
    "revision": "683ac3b6acffa6873f90798cd6431dbb"
  },
  {
    "url": "assets/js/page-cd7053a2.9d54461e.js",
    "revision": "5c7f23384dc22b45ff731801bec06bbf"
  },
  {
    "url": "assets/js/page-dad8d1c2.e79d07f5.js",
    "revision": "1a7ba27524fbb0b053d4adda5d4b128f"
  },
  {
    "url": "assets/js/page-eaea12a2.9f33170e.js",
    "revision": "13ce694b05cc712862d89a2ec0be0211"
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
    "revision": "6c3f0bfb64cce5adba592cb4c31f6473"
  },
  {
    "url": "hello-vblog.html",
    "revision": "6747b575a9fca0fcc337a9680a5a37bd"
  },
  {
    "url": "icon.png",
    "revision": "a0b370e0cdc4fb660546c5ecc4c7da20"
  },
  {
    "url": "index.html",
    "revision": "0fe2b810482621aa7328e1502ee3e6f7"
  },
  {
    "url": "search/index.html",
    "revision": "41f223855c01265ed5b2369d37c651d8"
  },
  {
    "url": "tag/index.html",
    "revision": "4a37718d693d411d590bf9c1fe72d489"
  },
  {
    "url": "VBlog/Development/article/common/test-lazy-load.html",
    "revision": "7e0b417fd632745a56383e9850f09d02"
  },
  {
    "url": "VBlog/Development/article/common/test-lazy-load2.html",
    "revision": "1b0ab5220f793b7c39763b26e0ba9f67"
  },
  {
    "url": "VBlog/Feature/about-page.html",
    "revision": "2f94b6b971044d79413ffff60ce64eb3"
  },
  {
    "url": "VBlog/Feature/archive-page.html",
    "revision": "f8a57739a1fd02a4c20a4eb08598f273"
  },
  {
    "url": "VBlog/Feature/category-page.html",
    "revision": "85f85da50ff18f81528fcc317b1a6b0f"
  },
  {
    "url": "VBlog/Feature/common-feature.html",
    "revision": "4d21af33750fccc2310e783b0dbf658b"
  },
  {
    "url": "VBlog/Feature/index-page.html",
    "revision": "03d16245fd9d2699114a9913545ee64a"
  },
  {
    "url": "VBlog/Feature/index.html",
    "revision": "892d7bca8a1b6b8cb34fcb8308ceabb1"
  },
  {
    "url": "VBlog/Feature/post-page.html",
    "revision": "b8a96d8e499e8607c055a1687cc4c3df"
  },
  {
    "url": "VBlog/Feature/search-page.html",
    "revision": "da38b101b0a11cb63899e955f357c739"
  },
  {
    "url": "VBlog/Feature/sidebar-feature.html",
    "revision": "6ef8362f1e950524dd39b27b9b0b9801"
  },
  {
    "url": "VBlog/Feature/tag-page.html",
    "revision": "ba68b36baad3187d9604aedd8797805d"
  },
  {
    "url": "VBlog/index.html",
    "revision": "4b6ab65094d5254e0e66f190c991b2b8"
  },
  {
    "url": "VBlog/Installation.html",
    "revision": "78d2040c0d8a7464593add05beebff3b"
  },
  {
    "url": "VBlog/Quick-Start.html",
    "revision": "0294e2729cd83d5c62033563db72f6af"
  },
  {
    "url": "VBlog/Usage/Container/index.html",
    "revision": "94e2aba730f6b44544c71fafbb685c18"
  },
  {
    "url": "VBlog/Usage/front-matter.html",
    "revision": "297bdf7994abd667a0ec198b5ee5883a"
  },
  {
    "url": "VBlog/Usage/index.html",
    "revision": "6208efbb31bc1fc0568e33943dd30880"
  },
  {
    "url": "VBlog/Usage/Markdown/advanced.html",
    "revision": "6cfdebd8e453ede166cd3221604250af"
  },
  {
    "url": "VBlog/Usage/Markdown/basic.html",
    "revision": "47bd8730693fdb7750e65b84cd6d7d7c"
  },
  {
    "url": "VBlog/Usage/Markdown/flow-chart.html",
    "revision": "e40643d8a9707653c1ff7389d356c786"
  },
  {
    "url": "VBlog/Usage/Markdown/index.html",
    "revision": "d83d4bee8fe0db16023c36624f6a565c"
  },
  {
    "url": "VBlog/Usage/Markdown/link.html",
    "revision": "072d7cba20bec4f88b93e6623dcbb449"
  },
  {
    "url": "VBlog/Usage/Slide.html",
    "revision": "fd54268056dffad7376aa947e617b100"
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
