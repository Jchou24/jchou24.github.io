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
    "revision": "c12a7552a9755b2457d6ea432014a3c7"
  },
  {
    "url": "About/index.html",
    "revision": "5ccfceb1635ccbb1247dc3fcad994a33"
  },
  {
    "url": "archive/index.html",
    "revision": "0789dbb9f697e22218815f73511e1c41"
  },
  {
    "url": "assets/css/0.styles.16565272.css",
    "revision": "d17049b1abe564c55206858d65fc737d"
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
    "url": "assets/js/47.d7fc1452.js",
    "revision": "1f157c7e3d64c3e80f91b012a4467fb0"
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
    "url": "assets/js/app.16475a1a.js",
    "revision": "cda460f2e8affac6c76299f66b28e22f"
  },
  {
    "url": "assets/js/layout-BaseLayout.6d076277.js",
    "revision": "0efd5bf14b5e03b4b6145d91a2e3eb72"
  },
  {
    "url": "assets/js/layout-BaseLayout~layout-Layout.12ee5617.js",
    "revision": "b34ca784b30c0aaf4f593d73cf6101ca"
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
    "url": "assets/js/page-01b1365c.df665827.js",
    "revision": "e71927afcfd17d3e157d0f4bc50eb12a"
  },
  {
    "url": "assets/js/page-02064622.0d4ac870.js",
    "revision": "a34bc91560a4cdacdfe46e68dd285238"
  },
  {
    "url": "assets/js/page-03ff99e4.1d65cf2c.js",
    "revision": "6669302ff3805d190b89c18f6c7d580f"
  },
  {
    "url": "assets/js/page-0815fe43.a881bf7e.js",
    "revision": "667fddb9b3c8a77f21548d2187cdd79a"
  },
  {
    "url": "assets/js/page-09cfa20f.601f73e1.js",
    "revision": "8d5774399f6abb35e81b447e5f67f8d4"
  },
  {
    "url": "assets/js/page-0bd5cd98.6d34a2a8.js",
    "revision": "c4d5169a841d995619750eefacb8aa25"
  },
  {
    "url": "assets/js/page-0ca8b05c.1eafe2f5.js",
    "revision": "d498caf6e02f6d0ecaa0cfad82d6ecaf"
  },
  {
    "url": "assets/js/page-130de14f.f456d8f7.js",
    "revision": "61ce5c5b60d9596eb19b18d47a5f4f33"
  },
  {
    "url": "assets/js/page-18c137b1.c6097279.js",
    "revision": "f2298c2a65c19d4f1d3adcf4f72687dd"
  },
  {
    "url": "assets/js/page-1efb5c62.a81839c8.js",
    "revision": "620416c3b0b2e31176e111df8668044b"
  },
  {
    "url": "assets/js/page-2ba07fce.71e7a383.js",
    "revision": "49f7af6b611b73ffd41ca0202350ba69"
  },
  {
    "url": "assets/js/page-2da25f49.83cb02ea.js",
    "revision": "4a10f2016a97f7c8052aa25c45ce7a1f"
  },
  {
    "url": "assets/js/page-36058925.7069ee70.js",
    "revision": "defada51fa50bd1d81e5214da125f4a8"
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
    "url": "assets/js/page-47ec31ef.b4d9c21f.js",
    "revision": "3c7e1c3bf1b53bf09b5d9299d401a0c4"
  },
  {
    "url": "assets/js/page-494b7749.0845e803.js",
    "revision": "59d9b0fd528785717917e887a698938b"
  },
  {
    "url": "assets/js/page-56c5add8.00abb4f8.js",
    "revision": "6a475cf6395ae2fe227c731f728899ce"
  },
  {
    "url": "assets/js/page-5c24028f.95724fcc.js",
    "revision": "867479eb14c8dc6650787028e2146f16"
  },
  {
    "url": "assets/js/page-5dade32f.7b6801a7.js",
    "revision": "df63bea69621a7bae1ef935dd672a299"
  },
  {
    "url": "assets/js/page-62c3f84a.07e0199b.js",
    "revision": "3ea82c82bbec73e5bcaf7a479a50711c"
  },
  {
    "url": "assets/js/page-64c6c3f9.8dda9ea2.js",
    "revision": "6fb4fe4ba72e20b56959c98638b5d51a"
  },
  {
    "url": "assets/js/page-68a3e126.00162163.js",
    "revision": "5d952dfe0c27a218ee2e959b935aa10b"
  },
  {
    "url": "assets/js/page-7e22c02f.43587808.js",
    "revision": "e7431ff0f993ad1d610098dbabde4a8e"
  },
  {
    "url": "assets/js/page-cd03364e.b0b00b8d.js",
    "revision": "a6942a791a14c15ef6d82e1dbe5f7f90"
  },
  {
    "url": "assets/js/page-e869018c.35cf4362.js",
    "revision": "1cc74b19fa5ac15204147ac5d8f5ddc4"
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
    "revision": "1de40fdc0b30f86968ca7bc3950d69cd"
  },
  {
    "url": "hello-vuejcblog.html",
    "revision": "5cfe823000ed6a71c0a03dfe4ecd5e26"
  },
  {
    "url": "icon.png",
    "revision": "a0b370e0cdc4fb660546c5ecc4c7da20"
  },
  {
    "url": "index.html",
    "revision": "e71be3808a095f8eec9c63a6eb51905a"
  },
  {
    "url": "search/index.html",
    "revision": "47b9519acaecd6ddeac0ac6bc392313d"
  },
  {
    "url": "tag/index.html",
    "revision": "549f9ed13ae4c25a25ee06d774942343"
  },
  {
    "url": "VueJCBlog/Development/article/common/test-lazy-load.html",
    "revision": "9e529b836cb2a894cc76ecff454fd11a"
  },
  {
    "url": "VueJCBlog/Development/article/common/test-lazy-load2.html",
    "revision": "38c8612292dea407e2abf7f43f6d63f8"
  },
  {
    "url": "VueJCBlog/Feature/about-page.html",
    "revision": "6c1ec3dc25b07c243b2436dd67607d98"
  },
  {
    "url": "VueJCBlog/Feature/archive-page.html",
    "revision": "d67135d517e7c98bc8950afd9feb0415"
  },
  {
    "url": "VueJCBlog/Feature/category-page.html",
    "revision": "f88056a7483b9e79da45974fb9cc6bed"
  },
  {
    "url": "VueJCBlog/Feature/common-feature.html",
    "revision": "23b4812d7b94c6438721df806c855216"
  },
  {
    "url": "VueJCBlog/Feature/index-page.html",
    "revision": "db294ba2a664de4bc3b72c636f24e734"
  },
  {
    "url": "VueJCBlog/Feature/index.html",
    "revision": "0b2ced21ff74e2af7ee56af8d3e1e1bc"
  },
  {
    "url": "VueJCBlog/Feature/post-page.html",
    "revision": "99cd50af076bc3ef62121fd8290b8fcc"
  },
  {
    "url": "VueJCBlog/Feature/search-page.html",
    "revision": "68f9c4b332cd96cd890df335d1e0565e"
  },
  {
    "url": "VueJCBlog/Feature/sidebar-feature.html",
    "revision": "10b83057f2bad1c12dcc29c1d8817041"
  },
  {
    "url": "VueJCBlog/Feature/tag-page.html",
    "revision": "6ff055c907004691610d7ba3389b7933"
  },
  {
    "url": "VueJCBlog/index.html",
    "revision": "951cabda212817a834c87215676705b3"
  },
  {
    "url": "VueJCBlog/Installation.html",
    "revision": "5e3585f905a3b650672b39ea651d8627"
  },
  {
    "url": "VueJCBlog/Quick-Start.html",
    "revision": "1fe9c00d6cee3d518cd022ddf511ca61"
  },
  {
    "url": "VueJCBlog/Usage/Container/index.html",
    "revision": "fb769864b0114f9c0683424b04c4c601"
  },
  {
    "url": "VueJCBlog/Usage/front-matter.html",
    "revision": "65a1f0ee0a42c013dc4ca651314528d2"
  },
  {
    "url": "VueJCBlog/Usage/index.html",
    "revision": "27173e3ce68794b776fd9ca97826da27"
  },
  {
    "url": "VueJCBlog/Usage/Markdown/advanced.html",
    "revision": "c61a2c6c54bca81dc04090888cb1b830"
  },
  {
    "url": "VueJCBlog/Usage/Markdown/basic.html",
    "revision": "d7cc03bd85ebc322a1d9a1dcccf1b4af"
  },
  {
    "url": "VueJCBlog/Usage/Markdown/flow-chart.html",
    "revision": "40ca722d0acfbe517458053e6af5c901"
  },
  {
    "url": "VueJCBlog/Usage/Markdown/index.html",
    "revision": "1883defa3e0d66001300cf560d5e4838"
  },
  {
    "url": "VueJCBlog/Usage/Markdown/link.html",
    "revision": "df590390ae6f372480e3ef536266466d"
  },
  {
    "url": "VueJCBlog/Usage/Slide.html",
    "revision": "d1587725bdb446451f403dd82732f7f3"
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
