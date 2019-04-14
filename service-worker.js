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
    "revision": "eb50e9fe55745086941dff134581b0c1"
  },
  {
    "url": "About/index.html",
    "revision": "90ae817567497b45f300190128778a4d"
  },
  {
    "url": "archive/index.html",
    "revision": "d521d5805bb827c462fd868b727a2bb9"
  },
  {
    "url": "assets/css/0.styles.366aa9d5.css",
    "revision": "397660d5fff29e13deda8cad1f54c659"
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
    "url": "assets/js/4.5368da55.js",
    "revision": "ab27b58cf28040775a7affde02c24ea2"
  },
  {
    "url": "assets/js/43.ed204b45.js",
    "revision": "b95a8d19be2ae8ce07582d1c4524164e"
  },
  {
    "url": "assets/js/44.eaa59b79.js",
    "revision": "dc9e75362182644d3dd4d028407b35fc"
  },
  {
    "url": "assets/js/45.1d0ecc60.js",
    "revision": "b29bb326ec5618322e18a4e15e90046b"
  },
  {
    "url": "assets/js/46.9bed98f4.js",
    "revision": "d3f26a3f1903adc3bcfafec7a0d96a26"
  },
  {
    "url": "assets/js/47.729e8d42.js",
    "revision": "f1d80da004c3beed043090884b1b6445"
  },
  {
    "url": "assets/js/48.41fc1c80.js",
    "revision": "4c22642ee9ea8ac89b55b08ea0114cae"
  },
  {
    "url": "assets/js/49.d87b8d05.js",
    "revision": "213163f8fc868d1e2cf1c38ee5090f94"
  },
  {
    "url": "assets/js/5.7b47d37c.js",
    "revision": "f8009740a240e59ccedcbf70b46b22fb"
  },
  {
    "url": "assets/js/50.cf10b6d0.js",
    "revision": "669b5e42a404b4ee2d8b6d2cbcbd9ff1"
  },
  {
    "url": "assets/js/51.f6a772be.js",
    "revision": "75cc0cd06257c3d0963327d4464de12d"
  },
  {
    "url": "assets/js/52.7a0aa4d4.js",
    "revision": "62f0e4cc37c7be2277013b30d5db36c9"
  },
  {
    "url": "assets/js/53.e6582df4.js",
    "revision": "4bc04a43e1c3a03a77e40674b95a881c"
  },
  {
    "url": "assets/js/54.955fadf4.js",
    "revision": "c49bc04d74d52f773b7ac2230cfbf595"
  },
  {
    "url": "assets/js/55.86eaef53.js",
    "revision": "da965bae758723c6e376998220d1f6a5"
  },
  {
    "url": "assets/js/56.12eef6ed.js",
    "revision": "86dd101a2809269f72ca04a4eadfc96a"
  },
  {
    "url": "assets/js/57.9b9b7861.js",
    "revision": "ae30eb6e9ac981f2523e9722e9567813"
  },
  {
    "url": "assets/js/6.364c00c1.js",
    "revision": "61e69cf1c650a6e70ca34398173cf955"
  },
  {
    "url": "assets/js/app.ff73d3ea.js",
    "revision": "848cc148f81bd6e7c5613b0092d2ba30"
  },
  {
    "url": "assets/js/layout-BaseLayout.eab5aa61.js",
    "revision": "e99758e852b7031813f3a7442faf0136"
  },
  {
    "url": "assets/js/layout-BaseLayout~layout-Layout.0802453f.js",
    "revision": "fa96ce7fe6076ae1d1af311918437ddd"
  },
  {
    "url": "assets/js/layout-Layout.389ce314.js",
    "revision": "20c1a4e27450de69ee5acae45fd7ee79"
  },
  {
    "url": "assets/js/layout-NotFound.002f9727.js",
    "revision": "b582beaa0f09973f6cc6ca8b9cd0a879"
  },
  {
    "url": "assets/js/page-0815fe43.a60367a9.js",
    "revision": "212637d7ca0c91ec397e3dcff69f9d24"
  },
  {
    "url": "assets/js/page-1bb4b3ad.d4c3dac8.js",
    "revision": "0763074093b152e501ba2de39d0b1b35"
  },
  {
    "url": "assets/js/page-22a9043f.8d54b566.js",
    "revision": "d3ba374687afaa31a5655ca9093a7de3"
  },
  {
    "url": "assets/js/page-23e99a6f.d915555d.js",
    "revision": "5e2338c7f1650e63f613fdb57be4b57b"
  },
  {
    "url": "assets/js/page-293f1fdc.a2c123a7.js",
    "revision": "a57f333a27343c40c6376da55bb4e2da"
  },
  {
    "url": "assets/js/page-32e15e7c.4be29a91.js",
    "revision": "a70cdb82879ef4c2538cad8083cf066d"
  },
  {
    "url": "assets/js/page-3841e8ef.697fd72f.js",
    "revision": "60ef700af3f8798b8185904c415d36f0"
  },
  {
    "url": "assets/js/page-3c4a43ae.95ae4ed9.js",
    "revision": "d8f03f8b2dfba160a8367779cf234696"
  },
  {
    "url": "assets/js/page-3f9e4a2c.8662405e.js",
    "revision": "e92d8bc42cfcba501427b854d04bd2ca"
  },
  {
    "url": "assets/js/page-49376acf.cce47f6d.js",
    "revision": "b4c3040314d50b37ba48a3726377a141"
  },
  {
    "url": "assets/js/page-4abc2b47.bdf86892.js",
    "revision": "6e8979dfe32efec6dfb0ba44f9968731"
  },
  {
    "url": "assets/js/page-50e0a6f6.516e629d.js",
    "revision": "f0b125a36aef2b2517b18fbbb063e8d2"
  },
  {
    "url": "assets/js/page-5607f94f.4499fcb4.js",
    "revision": "3747de45ed81d6fa43cf92c40bb924df"
  },
  {
    "url": "assets/js/page-5c008213.8c8f4f41.js",
    "revision": "664c1b944e8289505340bf7c092fd790"
  },
  {
    "url": "assets/js/page-5f76ecc2.296bfb1a.js",
    "revision": "c58de686111e989239c9fff6f3db19df"
  },
  {
    "url": "assets/js/page-5fc63572.8fd13b7b.js",
    "revision": "02962e6b707445c336abc4e282f9facd"
  },
  {
    "url": "assets/js/page-6365d1e8.97983dde.js",
    "revision": "e82e8000b12205a8d7b685874d8911bc"
  },
  {
    "url": "assets/js/page-6f2f0dff.a2760f32.js",
    "revision": "8467d47c2b6e2ad64f2b3e3c695365cc"
  },
  {
    "url": "assets/js/page-6f8a8732.645d36cb.js",
    "revision": "19db4002946ec531b47b522bee5755eb"
  },
  {
    "url": "assets/js/page-70a930f7.03ed063f.js",
    "revision": "ea5904b37acff0bc57ce00eda9fe37f8"
  },
  {
    "url": "assets/js/page-782df662.e4f94480.js",
    "revision": "05dd89f783f8b0a5c0f74beeca6548fb"
  },
  {
    "url": "assets/js/page-921a5862.28b27558.js",
    "revision": "5ef4d2881e1848af7630f645f9e9f62c"
  },
  {
    "url": "assets/js/page-9a911df4.8df9dd3d.js",
    "revision": "ada4d26b8fee6b9d12c8a260dbbeebfe"
  },
  {
    "url": "assets/js/page-bfc63ac2.7e27e008.js",
    "revision": "85349f87c4397239cf8cf70ce4149786"
  },
  {
    "url": "assets/js/page-bfd44046.ac09cbd7.js",
    "revision": "33c23bdbe8f301a92d5e1004de5b903f"
  },
  {
    "url": "assets/js/page-bffdee08.193c6579.js",
    "revision": "c4b0f7bccc5d970f5bbec4d3dc860e4f"
  },
  {
    "url": "assets/js/page-cd7053a2.24dfb0b6.js",
    "revision": "5f35e323517b4ed5c2bd60a2bef2fbc1"
  },
  {
    "url": "assets/js/page-dad8d1c2.23f76764.js",
    "revision": "ac36744a734ba90eb3a72f35710ebdd7"
  },
  {
    "url": "assets/js/page-eaea12a2.817ab2b8.js",
    "revision": "1c6217c29ec3ae2cc9449cb47a461321"
  },
  {
    "url": "assets/js/page-fa1749c8.ee9e6cee.js",
    "revision": "e49e5b6234da4d2dfb646a19d7a9df60"
  },
  {
    "url": "assets/js/vendors~flowchart.7be3c7ea.js",
    "revision": "27acce88c9048c680b06d853dfe2696a"
  },
  {
    "url": "assets/js/vendors~layout-Layout.0f08f99d.js",
    "revision": "1bea57be961b08c482e2be31263db2ef"
  },
  {
    "url": "category/index.html",
    "revision": "3bbcdc4780e93d08a1aa0f3b1291472d"
  },
  {
    "url": "hello-vblog.html",
    "revision": "37c00e80c35f550ceda3fb35b4790756"
  },
  {
    "url": "icon.png",
    "revision": "a0b370e0cdc4fb660546c5ecc4c7da20"
  },
  {
    "url": "index.html",
    "revision": "6c9f0996964c15276e70ab0d303ef5c1"
  },
  {
    "url": "search/index.html",
    "revision": "c18c152a2c4348d1fa8e29fbbf0759e5"
  },
  {
    "url": "tag/index.html",
    "revision": "845a8ed800e0ebb556bd4071b19d493f"
  },
  {
    "url": "VBlog/Development/Architecture Markdown.html",
    "revision": "02653009e289c82cc59110d8a9887fa0"
  },
  {
    "url": "VBlog/Development/Architecture.html",
    "revision": "6b2996c465b1ddb84aef76445b5ab07b"
  },
  {
    "url": "VBlog/Development/article/common/test-lazy-load.html",
    "revision": "5c5cd84f0a1c320147e080140ac091d5"
  },
  {
    "url": "VBlog/Development/article/common/test-lazy-load2.html",
    "revision": "7b547fb4bc872f6da4bac24a0e40e365"
  },
  {
    "url": "VBlog/Development/Default Theme Layout.html",
    "revision": "548fb7d04006af0c64b818682b6a4ef8"
  },
  {
    "url": "VBlog/Development/index.html",
    "revision": "b75514f656bdb44aca4adbb8362a68a0"
  },
  {
    "url": "VBlog/Feature/about-page.html",
    "revision": "5404eb6f62c740b8b7626a92fb1ed072"
  },
  {
    "url": "VBlog/Feature/archive-page.html",
    "revision": "178bba975a0fe8ee2db9855539d09e1e"
  },
  {
    "url": "VBlog/Feature/category-page.html",
    "revision": "b915c495995d5ae48a8a0375a1dbb1a7"
  },
  {
    "url": "VBlog/Feature/common-feature.html",
    "revision": "3b33769e7bb4a9ed345dca664415e09a"
  },
  {
    "url": "VBlog/Feature/index-page.html",
    "revision": "d7c085c6998229c81c4fea2983583b80"
  },
  {
    "url": "VBlog/Feature/index.html",
    "revision": "c972763ab7e479bd1d61ed24c798bebf"
  },
  {
    "url": "VBlog/Feature/post-page.html",
    "revision": "05845a1184cab7092c3cb57669529eb5"
  },
  {
    "url": "VBlog/Feature/search-page.html",
    "revision": "fae02d2ecfd9253fa24d21e5983d7fe4"
  },
  {
    "url": "VBlog/Feature/sidebar-feature.html",
    "revision": "7a14386fbe412f0558ab79866d3489ca"
  },
  {
    "url": "VBlog/Feature/tag-page.html",
    "revision": "22bc2a57a2185df7ad9f4710c3e497b9"
  },
  {
    "url": "VBlog/index.html",
    "revision": "0281a92c002e0bf0289aea4005e93cfc"
  },
  {
    "url": "VBlog/Installation.html",
    "revision": "a7580d66e0992bcd37fd5f9f7b67e069"
  },
  {
    "url": "VBlog/Quick-Start.html",
    "revision": "49e8bae96d6864e041dcc23481fab64a"
  },
  {
    "url": "VBlog/Usage/Container/index.html",
    "revision": "580b7420c26473007a1bc391d5779b72"
  },
  {
    "url": "VBlog/Usage/front-matter.html",
    "revision": "00f215d2684de3f43057c8f999f3fda2"
  },
  {
    "url": "VBlog/Usage/index.html",
    "revision": "2d5d452b232def7a729607499f9a02d4"
  },
  {
    "url": "VBlog/Usage/Markdown/advanced.html",
    "revision": "e28edebcab0d514333ab92d4688db6db"
  },
  {
    "url": "VBlog/Usage/Markdown/basic.html",
    "revision": "9c47080424f6a7adefdd825ef43f0066"
  },
  {
    "url": "VBlog/Usage/Markdown/flow-chart.html",
    "revision": "8dc5d9bd172f9ba200deef56634d36be"
  },
  {
    "url": "VBlog/Usage/Markdown/index.html",
    "revision": "d55f9299704fca598c4ef384726eeb4c"
  },
  {
    "url": "VBlog/Usage/Markdown/link.html",
    "revision": "cb932e1fa2334807361d6ad748d47dd0"
  },
  {
    "url": "VBlog/Usage/Slide.html",
    "revision": "cb752d789617215868678e7317bbe81f"
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
