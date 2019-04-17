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
    "revision": "b960b226376c3c3b9964aeae2090b7c5"
  },
  {
    "url": "About/index.html",
    "revision": "b75643b78163902456fb893dec3abdcc"
  },
  {
    "url": "archive/index.html",
    "revision": "6efcfa418de66d4c99a25f621c8ae92f"
  },
  {
    "url": "assets/css/0.styles.07d6d432.css",
    "revision": "556a2aba6d59f2c0a3d02df16e233cf4"
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
    "url": "assets/js/2.df89e962.js",
    "revision": "a76bae9c9f2b68d7882cdb5dd1e65136"
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
    "url": "assets/js/40.4ad580ed.js",
    "revision": "5681e9a6e3ecb02cbc2fc53bd16d6002"
  },
  {
    "url": "assets/js/41.584ac471.js",
    "revision": "57ff83ef1e3cba7be0999e76efa3f485"
  },
  {
    "url": "assets/js/42.7c20c083.js",
    "revision": "806de7abbecfe80c369064fb84e87be2"
  },
  {
    "url": "assets/js/43.458894dd.js",
    "revision": "8e3c71bc9a1a67d4f7e855838c420ec9"
  },
  {
    "url": "assets/js/44.e57098a9.js",
    "revision": "41891762a3a9c57a959c1f11b91bcf9c"
  },
  {
    "url": "assets/js/45.a1bfb993.js",
    "revision": "4a2d1b6e4964b49b1e435ed9a528c06f"
  },
  {
    "url": "assets/js/46.c7493ef3.js",
    "revision": "bc5d6ec9f546a7d530148bb1a4702bdb"
  },
  {
    "url": "assets/js/47.d6dc65b3.js",
    "revision": "6ca9da545f2bc91452df31751888967a"
  },
  {
    "url": "assets/js/48.a87d00f8.js",
    "revision": "e1192d4292f9f62dd5abfd77046151f2"
  },
  {
    "url": "assets/js/49.85ea11b1.js",
    "revision": "cc343fcefd469724c9fe1b20703e3339"
  },
  {
    "url": "assets/js/5.38d34714.js",
    "revision": "e51e83674ee2e4ba67ff3be9f0e272f8"
  },
  {
    "url": "assets/js/50.e9c1be3e.js",
    "revision": "da8cb7b22cd1795b0b925086590b81e0"
  },
  {
    "url": "assets/js/51.c93b6cee.js",
    "revision": "0f30144ef34fb110001552a9f54b7225"
  },
  {
    "url": "assets/js/52.9b8d1695.js",
    "revision": "c676047c80b2552bf1d09de2f1b5081d"
  },
  {
    "url": "assets/js/53.6c933078.js",
    "revision": "85e6003af2d31d454877c2a8bfbc141b"
  },
  {
    "url": "assets/js/54.50f58c1c.js",
    "revision": "c530dbf9a6e8201bfb672492bee5d96c"
  },
  {
    "url": "assets/js/55.9e242e2e.js",
    "revision": "0aa1e782120c692fe472d8f74972583c"
  },
  {
    "url": "assets/js/56.976aa882.js",
    "revision": "5b078388d91851b6d03eaef3eb123e8d"
  },
  {
    "url": "assets/js/57.bcb1ddbb.js",
    "revision": "28f65e1a8290a128d74093ae18f27261"
  },
  {
    "url": "assets/js/58.e9f840cc.js",
    "revision": "6e7ec0de1cdb1f1ea0a5de8ce7f198b1"
  },
  {
    "url": "assets/js/59.c7a4382b.js",
    "revision": "249563c69fd37b6dde099a0f4c780ee0"
  },
  {
    "url": "assets/js/6.e1cf27f4.js",
    "revision": "fb6aae2f55d5149aa8b6df13727f30b8"
  },
  {
    "url": "assets/js/app.af13fd40.js",
    "revision": "73193a04f6c453e722da481b4d90d034"
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
    "url": "assets/js/layout-Layout.1e05c38c.js",
    "revision": "3210b5c669e3a31ed48e087f840891a2"
  },
  {
    "url": "assets/js/layout-NotFound.3cbf81d1.js",
    "revision": "371e4665b0256c94aac3b8088a6de9fc"
  },
  {
    "url": "assets/js/page-01b1365c.f14d37fb.js",
    "revision": "ee53ba1458c2470598885cf2583e2978"
  },
  {
    "url": "assets/js/page-02064622.a4923e0d.js",
    "revision": "b15fadf9f6e8875275860fcd642f4074"
  },
  {
    "url": "assets/js/page-03ff99e4.d2bd50bd.js",
    "revision": "ed341a156567256fe68be4e3c960a541"
  },
  {
    "url": "assets/js/page-0815fe43.a881bf7e.js",
    "revision": "667fddb9b3c8a77f21548d2187cdd79a"
  },
  {
    "url": "assets/js/page-09cfa20f.b0d28734.js",
    "revision": "300733d74cbfeb5700926e38079f7e1a"
  },
  {
    "url": "assets/js/page-0bd5cd98.6d34a2a8.js",
    "revision": "c4d5169a841d995619750eefacb8aa25"
  },
  {
    "url": "assets/js/page-0ca8b05c.5e1b853b.js",
    "revision": "aa68b9ee0d90e9e1f8eb3216612fba33"
  },
  {
    "url": "assets/js/page-130de14f.f456d8f7.js",
    "revision": "61ce5c5b60d9596eb19b18d47a5f4f33"
  },
  {
    "url": "assets/js/page-18c137b1.43e8c56f.js",
    "revision": "e66c3500a745c11b1a1eb6a6f9086da0"
  },
  {
    "url": "assets/js/page-1efb5c62.f943847c.js",
    "revision": "4525d60c1bc1ee886ef271163d92a377"
  },
  {
    "url": "assets/js/page-2ba07fce.b0d07e87.js",
    "revision": "bcbc6ccca65d809e724716a52f95e8da"
  },
  {
    "url": "assets/js/page-2da25f49.0b3892ab.js",
    "revision": "d89375f495652dfb19b5c8bf9f5e5f61"
  },
  {
    "url": "assets/js/page-36058925.591f06c9.js",
    "revision": "7d42565fde2468bdebf3783a1a610329"
  },
  {
    "url": "assets/js/page-42a0ea7c.9207aab8.js",
    "revision": "782c61862276dd90470966c69d627b18"
  },
  {
    "url": "assets/js/page-4773a0fc.f97fb8a3.js",
    "revision": "b274794b0d4a79f91f46063fd252b438"
  },
  {
    "url": "assets/js/page-47ec31ef.9780d6f7.js",
    "revision": "1a3bd4c2500fad8051d1907270238724"
  },
  {
    "url": "assets/js/page-494b7749.af641015.js",
    "revision": "1a450297692b4b4babb3c404631c9598"
  },
  {
    "url": "assets/js/page-56c5add8.fd23a13c.js",
    "revision": "5bad6f25032ad56f270e8e6e24ba17c2"
  },
  {
    "url": "assets/js/page-5c24028f.41a5d4d6.js",
    "revision": "01b53ac7177c2ebfca43a7d12cc451ad"
  },
  {
    "url": "assets/js/page-5dade32f.7b6801a7.js",
    "revision": "df63bea69621a7bae1ef935dd672a299"
  },
  {
    "url": "assets/js/page-62c3f84a.c6af8e1b.js",
    "revision": "26f90fa9dcd2c947e3f335a5daa79172"
  },
  {
    "url": "assets/js/page-64c6c3f9.f9f7e97b.js",
    "revision": "8531ee30c980654d475f28b98796d825"
  },
  {
    "url": "assets/js/page-68a3e126.8b2879b9.js",
    "revision": "8be332bcfe06e430b2678d0628f735ee"
  },
  {
    "url": "assets/js/page-7e22c02f.bfc155aa.js",
    "revision": "75a61aa181ddc1d4da2c956ef979ae03"
  },
  {
    "url": "assets/js/page-cd03364e.1f05757f.js",
    "revision": "888e74c8c5c135b643c3b822cda4ad83"
  },
  {
    "url": "assets/js/page-e869018c.455668ca.js",
    "revision": "ba2af66d4f409409362f687f5acf2fcf"
  },
  {
    "url": "assets/js/vendors~flowchart.c421f2e9.js",
    "revision": "10eca3418d75f8db4a66b6ad0e258a8d"
  },
  {
    "url": "assets/js/vendors~layout-Layout.88f27a80.js",
    "revision": "fb1133ff52ae01eee688d28fc651e677"
  },
  {
    "url": "category/index.html",
    "revision": "b4c02f0ff6729bfc83662ca3c40f5ab6"
  },
  {
    "url": "hello-vuejcblog.html",
    "revision": "2fede99d54ce5d5bbc885a47589be1c9"
  },
  {
    "url": "icon.png",
    "revision": "a0b370e0cdc4fb660546c5ecc4c7da20"
  },
  {
    "url": "index.html",
    "revision": "2c3833c0ad9597f650ee15d8fcf181ca"
  },
  {
    "url": "search/index.html",
    "revision": "6b24cf40f671fc590380456bc1875230"
  },
  {
    "url": "tag/index.html",
    "revision": "59467982bb8215ce185abe73506de4c0"
  },
  {
    "url": "VueJCBlog/Development/article/common/test-lazy-load.html",
    "revision": "542610ee1027591c324d783e398a0931"
  },
  {
    "url": "VueJCBlog/Development/article/common/test-lazy-load2.html",
    "revision": "5b8417c1b25294e80f7c055e65f19a01"
  },
  {
    "url": "VueJCBlog/Feature/about-page.html",
    "revision": "0f67c4d8068ba148b710cda1055b4c03"
  },
  {
    "url": "VueJCBlog/Feature/archive-page.html",
    "revision": "b490e1cea9a08595c42a133bc32fe482"
  },
  {
    "url": "VueJCBlog/Feature/category-page.html",
    "revision": "f217deb06a741c50c2df572e0a76925d"
  },
  {
    "url": "VueJCBlog/Feature/common-feature.html",
    "revision": "17ed1604724e5ea596d484e7f364cacc"
  },
  {
    "url": "VueJCBlog/Feature/index-page.html",
    "revision": "f2654ad4cd515c1d5781f00bdb127bda"
  },
  {
    "url": "VueJCBlog/Feature/index.html",
    "revision": "117faaaf754db5871ae80b05691b87a1"
  },
  {
    "url": "VueJCBlog/Feature/post-page.html",
    "revision": "d872f2e68b90d0e69db952abd11b31b3"
  },
  {
    "url": "VueJCBlog/Feature/search-page.html",
    "revision": "cc502a39833e15ac4ae70068fe446413"
  },
  {
    "url": "VueJCBlog/Feature/sidebar-feature.html",
    "revision": "d524c122b94b6874ae90fc994e4275c5"
  },
  {
    "url": "VueJCBlog/Feature/tag-page.html",
    "revision": "435b51ebdcf08abab60841b0b03b4ec7"
  },
  {
    "url": "VueJCBlog/index.html",
    "revision": "86745280c23c0139da4e1522cae93f7a"
  },
  {
    "url": "VueJCBlog/Installation.html",
    "revision": "e7fab92da796b087649bbba2db09172c"
  },
  {
    "url": "VueJCBlog/Quick-Start.html",
    "revision": "4dcfb53c404b95bfba4b14ba58771d3e"
  },
  {
    "url": "VueJCBlog/Usage/Container/index.html",
    "revision": "e377df10d350784bda47368831ff57e5"
  },
  {
    "url": "VueJCBlog/Usage/front-matter.html",
    "revision": "7545442e097099c65b78f21812035867"
  },
  {
    "url": "VueJCBlog/Usage/index.html",
    "revision": "04d8e252ebea3d015fd71da273b3cc5e"
  },
  {
    "url": "VueJCBlog/Usage/Markdown/advanced.html",
    "revision": "2ac84aaa256b538a3ee7145db129962b"
  },
  {
    "url": "VueJCBlog/Usage/Markdown/basic.html",
    "revision": "a8038de3ee0358a4ea9c48bd8bef692f"
  },
  {
    "url": "VueJCBlog/Usage/Markdown/flow-chart.html",
    "revision": "942676a305b433a259d22034cdc80123"
  },
  {
    "url": "VueJCBlog/Usage/Markdown/index.html",
    "revision": "25330138861aae82711ffbd5d3677606"
  },
  {
    "url": "VueJCBlog/Usage/Markdown/link.html",
    "revision": "2be5406b4474b76a7a65b1a599870ed2"
  },
  {
    "url": "VueJCBlog/Usage/Slide.html",
    "revision": "c2b1c7867b572e12a8e91600abf905db"
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
