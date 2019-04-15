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
    "revision": "a05aa30c4d7a2228b959fbbb476022e6"
  },
  {
    "url": "About/index.html",
    "revision": "c12f29dbb7a65b63baed68ffeac6c258"
  },
  {
    "url": "archive/index.html",
    "revision": "52efa3969ac6f3f2e65a4024f9cabc70"
  },
  {
    "url": "assets/css/0.styles.0ccdee0f.css",
    "revision": "fcc94d11aa2a1677db00798282aab62c"
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
    "url": "assets/js/1.d819af06.js",
    "revision": "e90be68e5d5be3777ef73f20ad63e8de"
  },
  {
    "url": "assets/js/2.44bda0ec.js",
    "revision": "d57a2f8d49d3a3409bbf9710a395a83e"
  },
  {
    "url": "assets/js/39.c16cb0d1.js",
    "revision": "2e99f084eeb70ed9eef885b9ed565ff3"
  },
  {
    "url": "assets/js/4.5368da55.js",
    "revision": "ab27b58cf28040775a7affde02c24ea2"
  },
  {
    "url": "assets/js/40.e5b068b4.js",
    "revision": "aa1a5a4392878873b2c673198fdfd778"
  },
  {
    "url": "assets/js/41.07ba3d73.js",
    "revision": "749278f2d9b499422680e5d407c215b3"
  },
  {
    "url": "assets/js/42.dca9d99c.js",
    "revision": "4e727ed74cc8c6c68e1bc0b4f921ae28"
  },
  {
    "url": "assets/js/43.940e0e12.js",
    "revision": "1c3ff0a2be3baef07ba35453a7a8d5be"
  },
  {
    "url": "assets/js/44.e93280e4.js",
    "revision": "69415f1f83ab09dffab3a93d000b3636"
  },
  {
    "url": "assets/js/45.f1484f83.js",
    "revision": "d2ed400cb0fa5e2af1877b30dfb1e32a"
  },
  {
    "url": "assets/js/46.be35df64.js",
    "revision": "1a37db39c9dbb4ee30044210d16e710b"
  },
  {
    "url": "assets/js/47.3c451df9.js",
    "revision": "688f6545423f1e5ba05219b580da6c5d"
  },
  {
    "url": "assets/js/48.ab76ce8f.js",
    "revision": "570c38af9de68c68af30cc81630d1efa"
  },
  {
    "url": "assets/js/49.05731120.js",
    "revision": "69318776a7a22b475a78dc381d92c446"
  },
  {
    "url": "assets/js/5.6fec8d10.js",
    "revision": "b4834625252e83bbc080ff5e3fe25f34"
  },
  {
    "url": "assets/js/50.fa4943b0.js",
    "revision": "72c414dc08d3a9e222dd40f821284fdf"
  },
  {
    "url": "assets/js/51.a6089489.js",
    "revision": "232c1faa0528bb0b077c1299774121f3"
  },
  {
    "url": "assets/js/52.2914f207.js",
    "revision": "48fa7b2b2e480fa937171b0bd62335fc"
  },
  {
    "url": "assets/js/53.f5900b98.js",
    "revision": "c5eb2779446fc19f7ec351050981868b"
  },
  {
    "url": "assets/js/6.364c00c1.js",
    "revision": "61e69cf1c650a6e70ca34398173cf955"
  },
  {
    "url": "assets/js/app.117f6ba5.js",
    "revision": "456256a62873f3c3ebb27598b55ee432"
  },
  {
    "url": "assets/js/layout-BaseLayout.eab5aa61.js",
    "revision": "e99758e852b7031813f3a7442faf0136"
  },
  {
    "url": "assets/js/layout-BaseLayout~layout-Layout.e1add94d.js",
    "revision": "7bf70cd94c180a2993314057e57bcb02"
  },
  {
    "url": "assets/js/layout-Layout.7dca4704.js",
    "revision": "04f3a476773348c4d1b7ce1eb76e43bf"
  },
  {
    "url": "assets/js/layout-NotFound.283e8ad6.js",
    "revision": "5d7153b75bf33d4d0758fc292d25fe8e"
  },
  {
    "url": "assets/js/page-0815fe43.4d683dc5.js",
    "revision": "dc8b5377120596ed06778d31f254d8fd"
  },
  {
    "url": "assets/js/page-1bb4b3ad.46e627b1.js",
    "revision": "d9d524e109e189bcff4b34f794313105"
  },
  {
    "url": "assets/js/page-22a9043f.9179f09c.js",
    "revision": "fa53177b8b6e1b5c6940572bc5481f35"
  },
  {
    "url": "assets/js/page-23e99a6f.69c20af0.js",
    "revision": "e8a4e729912a22eee682c1dbed3736c5"
  },
  {
    "url": "assets/js/page-293f1fdc.0c5277f7.js",
    "revision": "496837a16b2250ee48bb4d8e8d8606dd"
  },
  {
    "url": "assets/js/page-32e15e7c.f5cad967.js",
    "revision": "b9860f2092572c6de7d745cba8601324"
  },
  {
    "url": "assets/js/page-3841e8ef.df835f26.js",
    "revision": "675a064a81d2cce976020474825f1f73"
  },
  {
    "url": "assets/js/page-3c4a43ae.6b17f290.js",
    "revision": "5d8a3be9d6767ab44ce0bd752e28b2ee"
  },
  {
    "url": "assets/js/page-49376acf.7970fe70.js",
    "revision": "ab5fe3c5a5bce6dd5fc540a55a6a906c"
  },
  {
    "url": "assets/js/page-4abc2b47.54ba7925.js",
    "revision": "b9eaff3afabdcccbbc218224971bdfd9"
  },
  {
    "url": "assets/js/page-50e0a6f6.f41ce14c.js",
    "revision": "25aea8fd4d40ff1298d63cdcc11db107"
  },
  {
    "url": "assets/js/page-5607f94f.493c9864.js",
    "revision": "578f257df17b011c5d328a3d856a3e47"
  },
  {
    "url": "assets/js/page-5c008213.b4372762.js",
    "revision": "720cbd66dba194f0549f16fe5362c003"
  },
  {
    "url": "assets/js/page-5fc63572.d7bd9c6a.js",
    "revision": "373a3cc5970e3a63e2fd2f3bc30b845d"
  },
  {
    "url": "assets/js/page-6365d1e8.9ed2ebc9.js",
    "revision": "70c0ce2d784a19819f5abe531b475490"
  },
  {
    "url": "assets/js/page-6f8a8732.4f8f4e84.js",
    "revision": "faf08b340e4eff940ac2929fb9c69224"
  },
  {
    "url": "assets/js/page-70a930f7.9660fb56.js",
    "revision": "272ced997e53958d223e20c4e9f8149a"
  },
  {
    "url": "assets/js/page-782df662.2e154745.js",
    "revision": "9a934298de9e446ccc1e8ded3164d6e0"
  },
  {
    "url": "assets/js/page-921a5862.a656ee63.js",
    "revision": "94ee6ce1a943b3ea6a25ce2c1df62bd2"
  },
  {
    "url": "assets/js/page-9a911df4.929a679f.js",
    "revision": "cb1e472d467c35648074223ec65c58f6"
  },
  {
    "url": "assets/js/page-bfd44046.e63d1931.js",
    "revision": "4b932084ee8e9baef3a420f9293978c5"
  },
  {
    "url": "assets/js/page-bffdee08.9389f9b1.js",
    "revision": "fa3d292570ad820938961b239ee1a4cf"
  },
  {
    "url": "assets/js/page-cd7053a2.5f13c968.js",
    "revision": "b9e8bb074538586dfb97fe8422c41a9d"
  },
  {
    "url": "assets/js/page-dad8d1c2.6b81eb57.js",
    "revision": "ea9add362b550c40bac12316c7fdee61"
  },
  {
    "url": "assets/js/page-eaea12a2.f24e9ae7.js",
    "revision": "9282ae12074f21e336684bdf76339c18"
  },
  {
    "url": "assets/js/page-fa1749c8.436fca08.js",
    "revision": "1b243a73de2af26769e47a6f21c10426"
  },
  {
    "url": "assets/js/vendors~flowchart.70701252.js",
    "revision": "65cce7e3dd25f525e153ff9660aace84"
  },
  {
    "url": "assets/js/vendors~layout-Layout.283475a2.js",
    "revision": "488712b5fbe7b4b0b127b4c13a55b06e"
  },
  {
    "url": "category/index.html",
    "revision": "4c80fbd966b17eae7836c6805a7e7135"
  },
  {
    "url": "hello-vblog.html",
    "revision": "a297bc101a3cfbd9abaa82988c61cb8c"
  },
  {
    "url": "icon.png",
    "revision": "a0b370e0cdc4fb660546c5ecc4c7da20"
  },
  {
    "url": "index.html",
    "revision": "29c0b63f353f8096b087db45f5a3d22c"
  },
  {
    "url": "search/index.html",
    "revision": "11a1b70dd0c4fbdff2c0c14b0a2df7af"
  },
  {
    "url": "tag/index.html",
    "revision": "6b1d3462a5879dfb18714af444e860a2"
  },
  {
    "url": "VBlog/Development/article/common/test-lazy-load.html",
    "revision": "84e65fb95ea136e03d6d9d49e117f495"
  },
  {
    "url": "VBlog/Development/article/common/test-lazy-load2.html",
    "revision": "09b51d8f3391f9e65fd9ccd432c52954"
  },
  {
    "url": "VBlog/Feature/about-page.html",
    "revision": "e411178c212b3f3a1ecdbb7c81ec4e60"
  },
  {
    "url": "VBlog/Feature/archive-page.html",
    "revision": "74cc44e7e177b85617704aea2d20bb31"
  },
  {
    "url": "VBlog/Feature/category-page.html",
    "revision": "835da1358db9f785798dbc6e011b78dc"
  },
  {
    "url": "VBlog/Feature/common-feature.html",
    "revision": "99aa80144bfd06ef834ed35a14be5e2e"
  },
  {
    "url": "VBlog/Feature/index-page.html",
    "revision": "cc6bc24584a24d047750e0fff420ef7b"
  },
  {
    "url": "VBlog/Feature/index.html",
    "revision": "0d5fa00babb3ad3de601e5a5003f6a8b"
  },
  {
    "url": "VBlog/Feature/post-page.html",
    "revision": "f3be7621d3a47557cc29411308e0d5c1"
  },
  {
    "url": "VBlog/Feature/search-page.html",
    "revision": "4e249571cb9c511b6907793231c947d0"
  },
  {
    "url": "VBlog/Feature/sidebar-feature.html",
    "revision": "d1d797918e34807bc14fd414f2a02413"
  },
  {
    "url": "VBlog/Feature/tag-page.html",
    "revision": "3e640ad909ae866793ac2e79b99ebf3a"
  },
  {
    "url": "VBlog/index.html",
    "revision": "235328fa5a0d788260266f826117af29"
  },
  {
    "url": "VBlog/Installation.html",
    "revision": "6563bd98fdf1c7e4d60375783d3a5d28"
  },
  {
    "url": "VBlog/Quick-Start.html",
    "revision": "a8d64146fb56779b1c035856e5caa37c"
  },
  {
    "url": "VBlog/Usage/Container/index.html",
    "revision": "d0c8dfd3574bf648935a159a601bd0ad"
  },
  {
    "url": "VBlog/Usage/front-matter.html",
    "revision": "06f52f106f1dc85520589baf4f589580"
  },
  {
    "url": "VBlog/Usage/index.html",
    "revision": "0a5462b5082802ee93d20bbdb08fbe6c"
  },
  {
    "url": "VBlog/Usage/Markdown/advanced.html",
    "revision": "57d048f69bd2479698aaf8ae0c4163da"
  },
  {
    "url": "VBlog/Usage/Markdown/basic.html",
    "revision": "683c6d2e7c6cc956b64f9ec17ca5663a"
  },
  {
    "url": "VBlog/Usage/Markdown/flow-chart.html",
    "revision": "ceba3e4467116f0976a223e99b43505e"
  },
  {
    "url": "VBlog/Usage/Markdown/index.html",
    "revision": "801ed10f925a4f6f4783a470a7490343"
  },
  {
    "url": "VBlog/Usage/Markdown/link.html",
    "revision": "6ea52f559e39ec400aff4a04b647ba83"
  },
  {
    "url": "VBlog/Usage/Slide.html",
    "revision": "d752311c45ba793067cc49a6809b70a5"
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
