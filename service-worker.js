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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "cc3be11e7e2759110ecdbf2c9aff20e5"
  },
  {
    "url": "About/index.html",
    "revision": "ecc26b742ad49c03f01d44236091bcfd"
  },
  {
    "url": "archive/index.html",
    "revision": "1b1f654ecb54fc1607d15aa000751ce3"
  },
  {
    "url": "assets/css/0.styles.a215b59f.css",
    "revision": "bde799a9ea0a4ad2e188f207a4e9501b"
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
    "url": "assets/img/1.b582708c.jpg",
    "revision": "b582708ca3b3cda9d42bace00daa2f78"
  },
  {
    "url": "assets/img/1.e21543dc.jpg",
    "revision": "e21543dcedd65da2bb46151d501f6ac3"
  },
  {
    "url": "assets/img/2.02d26cc1.jpg",
    "revision": "02d26cc163bed4428ddc2d900dc2797b"
  },
  {
    "url": "assets/img/2.16d67fa8.jpg",
    "revision": "16d67fa819eb9ed1bc9964733ff3229a"
  },
  {
    "url": "assets/img/3.33f073cb.jpg",
    "revision": "33f073cbc11b65b40be87bcd392a8792"
  },
  {
    "url": "assets/img/3.677e9382.jpg",
    "revision": "677e9382e71e6f4a10a362ab4d6a024e"
  },
  {
    "url": "assets/img/4.65320b0d.jpg",
    "revision": "65320b0d59c9b53fe87e0c4b5b966815"
  },
  {
    "url": "assets/img/4.d40d7534.jpg",
    "revision": "d40d75344cb707ae4717d57493fb8bf2"
  },
  {
    "url": "assets/img/5.a09a79ff.jpg",
    "revision": "a09a79ffc9e262124b3e4546de7c0a46"
  },
  {
    "url": "assets/img/6.d1e49b88.jpg",
    "revision": "d1e49b8860fa3f1552bb1b6a63c8cb4c"
  },
  {
    "url": "assets/img/6.fb14f833.jpg",
    "revision": "fb14f83357255da1a9103ba7cde0b5fb"
  },
  {
    "url": "assets/img/7.922e30cd.jpg",
    "revision": "922e30cd5cf9f5a20539b346c75c66ed"
  },
  {
    "url": "assets/img/8.c3eacf32.jpg",
    "revision": "c3eacf32abc5fdd4f444141c3fb65a3d"
  },
  {
    "url": "assets/img/9.f5fc7afc.jpg",
    "revision": "f5fc7afc04ba38fb4f5838fdcd696a96"
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
    "url": "assets/js/1.e9c4f42b.js",
    "revision": "ecdb59a880aebf46c07e2a643764ac05"
  },
  {
    "url": "assets/js/100.f48ca158.js",
    "revision": "b7663e0f478c48c4e9b01382601041fc"
  },
  {
    "url": "assets/js/101.7fa07f6c.js",
    "revision": "8e58a5222d33ea546f22e4cb63b344e3"
  },
  {
    "url": "assets/js/102.a500ab48.js",
    "revision": "ede76777118241924b246f3c8b391085"
  },
  {
    "url": "assets/js/103.9ca8d1d5.js",
    "revision": "8ca979f1f7f7615f6e2baec16b31e2b0"
  },
  {
    "url": "assets/js/104.950731d0.js",
    "revision": "914fe8bfc14f70daf68de4e6a431fdcf"
  },
  {
    "url": "assets/js/105.a1fd975c.js",
    "revision": "0e3ba3497167837ea22f5ab7174dcb93"
  },
  {
    "url": "assets/js/106.6a282699.js",
    "revision": "35c3a3adceb8f7a3ddc345a5e3cbcd47"
  },
  {
    "url": "assets/js/107.2db4e039.js",
    "revision": "fcc1855011875863c70e9b696cfaae0d"
  },
  {
    "url": "assets/js/108.a7915cba.js",
    "revision": "39026fc8945105a6bad33b78ea105329"
  },
  {
    "url": "assets/js/109.ddeb775e.js",
    "revision": "31346248b9c99a9413bf5701ce3acbca"
  },
  {
    "url": "assets/js/110.ddce2343.js",
    "revision": "5fa7033a9c09952361e6807d82e56fd0"
  },
  {
    "url": "assets/js/111.b8a535a0.js",
    "revision": "7fbe8bd8d117185fe9794944b5988172"
  },
  {
    "url": "assets/js/112.5342a375.js",
    "revision": "95f6dcb8d25a3047d12f1dc74d9c231d"
  },
  {
    "url": "assets/js/113.556c8b34.js",
    "revision": "7710efff01e670bc802c1499c7ddaf4f"
  },
  {
    "url": "assets/js/114.f2490a21.js",
    "revision": "55a1c2993a8c0027ffc87b7d5f460e4c"
  },
  {
    "url": "assets/js/115.b4b2ccef.js",
    "revision": "06ca12c7b8fdd98f1c6715f8cca4eff6"
  },
  {
    "url": "assets/js/116.d55f8374.js",
    "revision": "d3636670cbc8071be0a53520e7738f00"
  },
  {
    "url": "assets/js/117.b6ccc7fe.js",
    "revision": "b3c6420b7586b8b43e7bfd864629f638"
  },
  {
    "url": "assets/js/118.ba53a274.js",
    "revision": "5aed97fb80266b27b962a1fd670507a3"
  },
  {
    "url": "assets/js/119.122d3d25.js",
    "revision": "bd189bcc9eaf9325d4f89e114157e938"
  },
  {
    "url": "assets/js/120.70a1e8a6.js",
    "revision": "05940a9bc5c4beeaf92c17c677775c4a"
  },
  {
    "url": "assets/js/121.6a9b3840.js",
    "revision": "7c963c63263d03a61e8cd52df727bce2"
  },
  {
    "url": "assets/js/2.fe5781d0.js",
    "revision": "a08313653b77b200359c7ff1f810f78b"
  },
  {
    "url": "assets/js/3.00466cfa.js",
    "revision": "34ea31a961fe5b9ba89908a228bcd9e1"
  },
  {
    "url": "assets/js/4.ba3508a2.js",
    "revision": "e9288e16a8cf2bafb446239b709d1a0f"
  },
  {
    "url": "assets/js/5.52e9afd0.js",
    "revision": "c01e558f7f236461808cc651708bb6e1"
  },
  {
    "url": "assets/js/6.441fbabc.js",
    "revision": "42702391e3fc666a7f1b14d33b34c276"
  },
  {
    "url": "assets/js/97.6e2cf321.js",
    "revision": "7757f80f9c7a95d5a1230fe40e9a4f2c"
  },
  {
    "url": "assets/js/98.c2977451.js",
    "revision": "e6e6ff2433daeb10d0eb026f9eef13b7"
  },
  {
    "url": "assets/js/99.03d576d7.js",
    "revision": "f471f02c83368880b70514ef2651daca"
  },
  {
    "url": "assets/js/app.d37e2645.js",
    "revision": "49fb59d779f0269881fed51aeabd64a5"
  },
  {
    "url": "assets/js/layout-BaseLayout.0989b0c2.js",
    "revision": "b02bae10ea90094fc3432d1f3da5c15a"
  },
  {
    "url": "assets/js/layout-Layout.3a128615.js",
    "revision": "118e834e07e842442fa96ce1c395b43b"
  },
  {
    "url": "assets/js/layout-NotFound.f2bad2bb.js",
    "revision": "c264b94365a8493cabe725ee3d100f84"
  },
  {
    "url": "assets/js/page-0193e625.08c2b100.js",
    "revision": "5d54c2fcc4763d32305804a6f2add255"
  },
  {
    "url": "assets/js/page-021b3aa4.8cf75284.js",
    "revision": "6cb940b804d85d72170af84a963f2cb3"
  },
  {
    "url": "assets/js/page-0a921c99.c0f656c6.js",
    "revision": "319a4931b491f9682e8cee090ebc34bd"
  },
  {
    "url": "assets/js/page-0c6c4d65.7f495b0b.js",
    "revision": "ed627d26e10569d12beb199a0bb7bac7"
  },
  {
    "url": "assets/js/page-0c7f77bc.b73443d8.js",
    "revision": "ea155a58eb11b4fec2e8e5a8005dcbfd"
  },
  {
    "url": "assets/js/page-0d32e5ee.5e68cf77.js",
    "revision": "24f27bbd672d5de6af3c0ae941a368b0"
  },
  {
    "url": "assets/js/page-1080dbe2.54895e39.js",
    "revision": "ea646f09dc2850e9198c8e59d79611c7"
  },
  {
    "url": "assets/js/page-1a34eb5d.ab1e9be9.js",
    "revision": "ae17a8a24d96b923b767080f7666ed84"
  },
  {
    "url": "assets/js/page-1c4a4e12.277f0fad.js",
    "revision": "f99c5ae4e6df6835451cdccc17538aae"
  },
  {
    "url": "assets/js/page-1ccc22d8.377777d7.js",
    "revision": "7afb993253c8131b2c0f95d676c6e542"
  },
  {
    "url": "assets/js/page-1db42de8.f93e00d4.js",
    "revision": "bf99031f198907746fe1c29b530eb852"
  },
  {
    "url": "assets/js/page-1e536af9.e92e9e1c.js",
    "revision": "8e055fa51821a74c7dae66d30d111265"
  },
  {
    "url": "assets/js/page-21fcb945.b3bbb824.js",
    "revision": "0c873c8e44b35a832b14015265f89bb0"
  },
  {
    "url": "assets/js/page-25bc4f18.13f20418.js",
    "revision": "9e2debeb79d364d6f7ee949a188e0282"
  },
  {
    "url": "assets/js/page-27f6ecec.f2afb1a9.js",
    "revision": "aa53ab36d3cf10b4a3a2099c9d1802b0"
  },
  {
    "url": "assets/js/page-29c918e5.aab63c13.js",
    "revision": "c5b225d796439aa627deab09a1eca752"
  },
  {
    "url": "assets/js/page-2c6bc4ab.bd99c534.js",
    "revision": "63040130a99aaae637a2d098316afaba"
  },
  {
    "url": "assets/js/page-2e8c0cd0.9e9419a4.js",
    "revision": "cf20cf10a75e9e79c30fd107d7cc47a7"
  },
  {
    "url": "assets/js/page-320aac86.4c6145d8.js",
    "revision": "4856f8560ba7663187d783be31aaf8f8"
  },
  {
    "url": "assets/js/page-339369e0.aa069fe5.js",
    "revision": "8a8688fad7f8609078ce93c3c3e5328d"
  },
  {
    "url": "assets/js/page-36d5d2b3.750c20ad.js",
    "revision": "8ca75e35f194d9577fadee94c70545d5"
  },
  {
    "url": "assets/js/page-39e05f8b.bb77e682.js",
    "revision": "b7f49964a2d912f715a67ee1db85e6a8"
  },
  {
    "url": "assets/js/page-3c8dbd4b.13b026d4.js",
    "revision": "12b3d8d3df4850f297c884323432cdc6"
  },
  {
    "url": "assets/js/page-3cdc4745.d288f17c.js",
    "revision": "75bcd7106f02d4ba7bcba28301502899"
  },
  {
    "url": "assets/js/page-3ff73aa5.488c2133.js",
    "revision": "8a4d0752057b61a80b292a224bf2998e"
  },
  {
    "url": "assets/js/page-4144513c.f8f374c7.js",
    "revision": "c9492cd69502b58ca72fa1882386c10e"
  },
  {
    "url": "assets/js/page-422a7e52.88fae4f4.js",
    "revision": "06026d6a3d4f568542138de44c0f84d9"
  },
  {
    "url": "assets/js/page-445c88ce.4033a8e1.js",
    "revision": "ffa6ca4342e3750b5c600c67803efb94"
  },
  {
    "url": "assets/js/page-4478a866.e00aad75.js",
    "revision": "a2496a0f05f302f238982aedb4b14760"
  },
  {
    "url": "assets/js/page-455360d1.ab1b3f7d.js",
    "revision": "b4649039686ea11a5b7e2ac62f033a7c"
  },
  {
    "url": "assets/js/page-47f71914.a0edd19f.js",
    "revision": "f6a3f50f1827ff6bc35d1ec9b9b4b3d1"
  },
  {
    "url": "assets/js/page-4829d184.c29a7d25.js",
    "revision": "8d6f89cc13176cdf99787199a3e730cf"
  },
  {
    "url": "assets/js/page-486aacae.698edd65.js",
    "revision": "cf6ff66119320a5c07e5f980f172bfe9"
  },
  {
    "url": "assets/js/page-4d521b14.16a8cb3f.js",
    "revision": "4aa40fe9ba16b9994fc8e2b85a8f7d03"
  },
  {
    "url": "assets/js/page-4d7e2aa5.d3b80aec.js",
    "revision": "8a01005212f0e413b2ac7432a6c708db"
  },
  {
    "url": "assets/js/page-4d9fba32.16877978.js",
    "revision": "2c6cbf83fdf01d476539a6e5d1851518"
  },
  {
    "url": "assets/js/page-4dc00f25.91d3acc5.js",
    "revision": "e619d95a88640da9c57ecf3c768ad6f1"
  },
  {
    "url": "assets/js/page-4dc54ba5.74425613.js",
    "revision": "33fff1955d13cbeee36a552bce8cd3e7"
  },
  {
    "url": "assets/js/page-4df429d2.3a3516d7.js",
    "revision": "eb711ef1ee49bb43a0aac0aca934cac7"
  },
  {
    "url": "assets/js/page-518ca8d8.6a7027bd.js",
    "revision": "021a90154c6f970c651b0bdd2e982bf5"
  },
  {
    "url": "assets/js/page-55a376be.a2320e53.js",
    "revision": "724e6f899a4f6395e0aa8db7c3d72555"
  },
  {
    "url": "assets/js/page-59cd63bf.3a1ab589.js",
    "revision": "c4ff39b0ee5e10b479d8ceae36f0566f"
  },
  {
    "url": "assets/js/page-5cdb680e.55703ecf.js",
    "revision": "6101e2c74ef9bc24ed739539d1c00c3b"
  },
  {
    "url": "assets/js/page-5de41bb6.b78d9ae9.js",
    "revision": "3e317b13191061dfb1a3263c937b4e85"
  },
  {
    "url": "assets/js/page-5edad598.a51b22dc.js",
    "revision": "7238943b8f12827600c37e195e820c7f"
  },
  {
    "url": "assets/js/page-64a9a694.9f8751a1.js",
    "revision": "d5c4769ae9cd25e0abf4fd98e32a9632"
  },
  {
    "url": "assets/js/page-66061c06.ae0422f8.js",
    "revision": "9b098cdbcf2118378ac010ae52d8985a"
  },
  {
    "url": "assets/js/page-6890df9a.0e2dd4b3.js",
    "revision": "e800fa269db1849f46fc02be377edb99"
  },
  {
    "url": "assets/js/page-68b44e7f.c15032e9.js",
    "revision": "26d421a1c8a231a39ab237200afe6d22"
  },
  {
    "url": "assets/js/page-6dbff0ea.bdf9c730.js",
    "revision": "8128316b757119e6e9b9ebc48b0d2e2b"
  },
  {
    "url": "assets/js/page-6f7fa8b4.2be40742.js",
    "revision": "922febe63eb63b38ac46864f7578b517"
  },
  {
    "url": "assets/js/page-70612fe6.60249a8d.js",
    "revision": "8e2b49a25de35b13a7e2bbc4ffd18017"
  },
  {
    "url": "assets/js/page-720c8312.43d2c8ae.js",
    "revision": "c2459c2557635c4bbabbab40507a46b8"
  },
  {
    "url": "assets/js/page-74a44f51.f744dd2d.js",
    "revision": "f878e70b8def13d3c33ef9dedd6e684d"
  },
  {
    "url": "assets/js/page-7507c3f6.0eec6504.js",
    "revision": "983c1c254cff18c38268f84a7d3adf3c"
  },
  {
    "url": "assets/js/page-7690c622.0d1c2b23.js",
    "revision": "b1f20a41b28ae502cfa69a0c049a9c93"
  },
  {
    "url": "assets/js/page-7bfb30a6.83eee092.js",
    "revision": "6743bbbb2d6384bc200bc90f1b35940e"
  },
  {
    "url": "assets/js/page-7d3a6963.1fdd5e48.js",
    "revision": "fb76c86ed86c312739e4bd0dd364e448"
  },
  {
    "url": "assets/js/page-7e6b5e12.e05824b3.js",
    "revision": "5a55a9f0d303dd9fd66e249603ca69ec"
  },
  {
    "url": "assets/js/page-82c2c642.5ef5bb95.js",
    "revision": "3d81d508bd7c2e0f6139857308911a8a"
  },
  {
    "url": "assets/js/page-85f4c948.c71ccec1.js",
    "revision": "1b5b11310fa67a30b628920d61c69a8d"
  },
  {
    "url": "assets/js/page-8892394c.98137cb9.js",
    "revision": "20f48052595b72e65d336af211ad15f9"
  },
  {
    "url": "assets/js/page-89b130dc.0527d7ab.js",
    "revision": "d6da2fce604263711723815514411975"
  },
  {
    "url": "assets/js/page-8da9df6c.b7b7cde6.js",
    "revision": "c867cfba5c84dc4a7963d145c5072acf"
  },
  {
    "url": "assets/js/page-916af89c.26b38967.js",
    "revision": "8636fe57fbb294f951d60d5ad5c69d67"
  },
  {
    "url": "assets/js/page-9a2a43a4.a84c2da2.js",
    "revision": "55ae9797549c8d68959b1db9296eaa53"
  },
  {
    "url": "assets/js/page-9ec1a766.aca28cdd.js",
    "revision": "b58e9763e70ae95168aa0e60b905e801"
  },
  {
    "url": "assets/js/page-9f0190e0.53a9dba0.js",
    "revision": "27de777fcdaa3e8f4a7f92366bf82425"
  },
  {
    "url": "assets/js/page-a6174872.359fe8ca.js",
    "revision": "ed1f951fc8ad4fbb10d2b4726e79c699"
  },
  {
    "url": "assets/js/page-aab392fc.7cc66f4f.js",
    "revision": "ae3ea9e9ed669997ad6495d16ecb1b01"
  },
  {
    "url": "assets/js/page-ace574d0.7502416e.js",
    "revision": "01978a9a3c314c76b93b204dc91833d5"
  },
  {
    "url": "assets/js/page-ad24ce34.da94c393.js",
    "revision": "9504e24a429874a75d5cf6899fcb883b"
  },
  {
    "url": "assets/js/page-b0521034.8bc4e3a6.js",
    "revision": "24c7e450abd317926d0a7eeeefc367da"
  },
  {
    "url": "assets/js/page-b0d90ce6.9f9fa320.js",
    "revision": "8c1ef92c5ddbf8ea2502ceb836581ae4"
  },
  {
    "url": "assets/js/page-b40de7ce.045ef51b.js",
    "revision": "79c1707fa0af00b6d5eac1587d5717f1"
  },
  {
    "url": "assets/js/page-c26b0310.ece453af.js",
    "revision": "196d87fcdaa5b0cab1ea1ffd2556e59c"
  },
  {
    "url": "assets/js/page-c4bdd70e.5d9fdde4.js",
    "revision": "31c0df976a04218396b9a2846a7997f9"
  },
  {
    "url": "assets/js/page-c5f1a60e.875969da.js",
    "revision": "cea166f13e9403b553ec896cff7e4198"
  },
  {
    "url": "assets/js/page-c60be50a.0626ffc5.js",
    "revision": "073b5320553327f1e2e885d41efac490"
  },
  {
    "url": "assets/js/page-d6c4343e.2237ec1a.js",
    "revision": "e0df4cf893e02ca32ee4ead13abd7d80"
  },
  {
    "url": "assets/js/page-e468b710.d20c753f.js",
    "revision": "73ae29ea9c0e1f1092604120601aad2e"
  },
  {
    "url": "assets/js/page-e72e49e8.02101e51.js",
    "revision": "e7a883d09f525828e2eb9862e672f848"
  },
  {
    "url": "assets/js/page-ed303fba.32555eba.js",
    "revision": "c0ca593cc59243aecd6cabd9c0c2db01"
  },
  {
    "url": "assets/js/page-f313c186.55962262.js",
    "revision": "c1d55d9c4a49396d35e7b9f455954099"
  },
  {
    "url": "assets/js/vendors~flowchart.3b184799.js",
    "revision": "e3a525acd9c81f6cd66613c778ec8785"
  },
  {
    "url": "assets/js/vendors~layout-Layout.128401f6.js",
    "revision": "aedf998521258d157e4a9deca85df180"
  },
  {
    "url": "category/index.html",
    "revision": "816a8239fad049bd52a1503f5b98c2ce"
  },
  {
    "url": "Coding/CodeReview/code-review-memo.html",
    "revision": "ba4ecde1e7201ac17bcf3273fd11312d"
  },
  {
    "url": "Coding/coding-tips.html",
    "revision": "063e7ab9f60812df1bf57f52fa44538f"
  },
  {
    "url": "Coding/CSharp/AutoMapper-class繼承後之對應.html",
    "revision": "09cc8f8e31bd1a7403a28f5d4de38bc9"
  },
  {
    "url": "Coding/CSharp/csharp-tips.html",
    "revision": "21769279ff472ac63fe134945930442f"
  },
  {
    "url": "Coding/CSharp/String-Concatenate.html",
    "revision": "3629e912769dad07767ff259608fcd0e"
  },
  {
    "url": "Coding/CSharp/例外處理.html",
    "revision": "9aa96897586fdb7cc7e9a6a25cb324a0"
  },
  {
    "url": "Coding/CSharp/變數命名.html",
    "revision": "068d0cd0c20016cfb953c7f75bf16226"
  },
  {
    "url": "Coding/CSharp/責任鏈.html",
    "revision": "6e1bf0fd3b3903467948c6a4c2e26d28"
  },
  {
    "url": "Coding/CSharp/責任鏈2.html",
    "revision": "1f05de027eae6ab6de9c296e055cbf65"
  },
  {
    "url": "Coding/CSharp/責任鏈3.html",
    "revision": "b3310eb5b87904363bc2026c3d4fe3a7"
  },
  {
    "url": "Coding/Front-End/awesome-graphic-resources.html",
    "revision": "80332061b40227de104a1acfc856949d"
  },
  {
    "url": "Coding/Front-End/awesome-pwa.html",
    "revision": "f3ac774144473d16d8c416023fe44b88"
  },
  {
    "url": "Coding/Front-End/CSS/awesome-css.html",
    "revision": "e5be9603d4538eefe2e458b43fa51257"
  },
  {
    "url": "Coding/Front-End/CSS/css-parameters.html",
    "revision": "68db0b2798ceb5d4c92e9de2614bae35"
  },
  {
    "url": "Coding/Front-End/CSS/css-tips.html",
    "revision": "e94f91050ff667515c80eaec25f14212"
  },
  {
    "url": "Coding/Front-End/Security/開新分頁.html",
    "revision": "1b0c9e2188fcdc9434f0dad43ff06bf5"
  },
  {
    "url": "Coding/JS/awesome-js.html",
    "revision": "28138e4125a84e3ec32baa955ca15b53"
  },
  {
    "url": "Coding/JS/js-tips.html",
    "revision": "5ece04151a24637cbb669dce5ebc5eb2"
  },
  {
    "url": "Coding/JS/Module Bundler/Webpack/awesome-webpack.html",
    "revision": "727d45897f4de21abc3d27884542c84b"
  },
  {
    "url": "Coding/JS/Vue/awesome-vue.html",
    "revision": "657361fdf500a22b7bc2d6a8d61d29f3"
  },
  {
    "url": "Coding/JS/Vue/vue-basic-tutorial/index.html",
    "revision": "4a4c29c9c43693bb7c7230680055ebd1"
  },
  {
    "url": "Coding/progessive-design.html",
    "revision": "0b06237e573cbed04dd16ab14f0cd1ee"
  },
  {
    "url": "Coding/Server/IIS/iis-memo.html",
    "revision": "2525adafc506951ba906d4615f79f6f0"
  },
  {
    "url": "Coding/SQL/sql-memo.html",
    "revision": "a83c4d9e868e433070d5de8716d52ee9"
  },
  {
    "url": "Coding/SQL/StoredProcedure/cursor-syntax-memo.html",
    "revision": "1321e58f9eb0abff2eb811292b8944d6"
  },
  {
    "url": "Coding/Website/vue-csarhp-todolist-tutorial/back-end.html",
    "revision": "c559919026f4a61830759f27eb0e1be7"
  },
  {
    "url": "Coding/Website/vue-csarhp-todolist-tutorial/front-end.html",
    "revision": "a9a2386d629bbe69db1e2ce221d101e0"
  },
  {
    "url": "Coding/Website/vue-csarhp-todolist-tutorial/index.html",
    "revision": "d7340057bfa0aba0377cee484171bcfc"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/1. 心/index.html",
    "revision": "4282a1190f3e562288ff190a5e35a91d"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/1. 心/TMP.html",
    "revision": "5600bab266f4584ae8193def9c49c307"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/1. 心/心理戰.html",
    "revision": "3942c8150681160031d5e5f21d73c4e0"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/2. 技/index.html",
    "revision": "3986cc211b66c892a40a71c2d8f3ffa2"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/2. 技/神小跳.html",
    "revision": "fa2b2a857f3b0794cf661461c3823ca9"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/2. 技/視野變換.html",
    "revision": "c33ae3b287724f510fc847172379b6bb"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/2. 技/走位.html",
    "revision": "109f9802c597244d90cefd60e439b3e9"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/2. 技/跳點.html",
    "revision": "e72289dbd05edba8b8aca2e35f825e66"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/2. 技/預出手.html",
    "revision": "9e8e7910a032f5d010b944cd38a20297"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/3. 體/index.html",
    "revision": "1a7aa61f3bcc8752bcd89fb7dd14d882"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/4. 群/index.html",
    "revision": "eccdc921a672343173b4b3e6b96dcbaa"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/4. 群/卡位.html",
    "revision": "1b28c918f257e7c7d27edc8ca0e7d0ce"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/4. 群/組隊.html",
    "revision": "17bb401a3e16d7cd2d8407a01e0dabd3"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/5. 略/index.html",
    "revision": "103286f7fd0e9be9a81bdcf66d02a42a"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/5. 略/局勢.html",
    "revision": "3d97b4db0b219f51db29d74b787812ab"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/6. 決/index.html",
    "revision": "56ccc4f137ea409cef0ab1619c137c81"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/index.html",
    "revision": "f975bbd60b0751e2c59a727a34bb2e12"
  },
  {
    "url": "Game/FEZ/2. 國戰步兵戰策略/index.html",
    "revision": "3947a9fa7ae4c048873d79bdd0e29637"
  },
  {
    "url": "Game/FEZ/2. 國戰步兵戰策略/僻地戰.html",
    "revision": "5162411411cc8b0ed5e1ec6b5e4711ba"
  },
  {
    "url": "Game/FEZ/3. 各職玩法/刀.html",
    "revision": "9fe9f390e55f8280f098172549a358a5"
  },
  {
    "url": "Game/FEZ/3. 各職玩法/雙修.html",
    "revision": "ed3b03164f724e77ab0a28086964553b"
  },
  {
    "url": "Game/FEZ/4. 2on/index.html",
    "revision": "c3cd65a2ff631fda2fc4afc58d9cb6b6"
  },
  {
    "url": "Game/FEZ/4. 2on/玩法介紹.html",
    "revision": "565c212e685ada58e5574490d6cd4fee"
  },
  {
    "url": "Game/FEZ/5. 3on/3on共通玩法介紹.html",
    "revision": "eeed3cb09adde0d4b55e072d0f65f92d"
  },
  {
    "url": "Game/FEZ/5. 3on/3on刀玩法介紹.html",
    "revision": "586e8a0c145cb87fae94222a23a326a8"
  },
  {
    "url": "Game/FEZ/5. 3on/3on大劍玩法介紹.html",
    "revision": "416606ad469ba6ff6960ba6d167869a7"
  },
  {
    "url": "Game/FEZ/5. 3on/3on雙修玩法介紹.html",
    "revision": "6d1c2366fb0c7d4a0427ccdb78f34a57"
  },
  {
    "url": "Game/FEZ/5. 3on/index.html",
    "revision": "2823b5a0abf52a4516978c9cb2e38269"
  },
  {
    "url": "Game/FEZ/X. Theorem/HMM.html",
    "revision": "52fbffafc86def4b4dde05abc357f871"
  },
  {
    "url": "hello-vuejcblog.html",
    "revision": "49ca7ed54814266ea4bd4afb2ed48f4a"
  },
  {
    "url": "icon.png",
    "revision": "f1276345da23f2967fa54b08709e0d9b"
  },
  {
    "url": "icon/test0.png",
    "revision": "bc278be9745f5fec074429e789a0b788"
  },
  {
    "url": "icon/test1.png",
    "revision": "1e193111d6caa4795546c38b0bc62e9b"
  },
  {
    "url": "icon/test2.png",
    "revision": "f701ddafc6117ec3d2d39fb25ced312b"
  },
  {
    "url": "icon/test3.png",
    "revision": "3176400944c39ff3572109715063e8d7"
  },
  {
    "url": "icon/test4.png",
    "revision": "939002491ea9c37d3704f8a1d1dec73d"
  },
  {
    "url": "icon/test5.png",
    "revision": "c1d465a8f1bd2bb8837b34b5745a319f"
  },
  {
    "url": "icon/test6.png",
    "revision": "791ab16a38b3bca4726d9f9a4fe6615c"
  },
  {
    "url": "icon/test7.png",
    "revision": "f380be64259870ecfd7237c7d9af037e"
  },
  {
    "url": "icon/test8.png",
    "revision": "f380be64259870ecfd7237c7d9af037e"
  },
  {
    "url": "icon/test9.png",
    "revision": "f1276345da23f2967fa54b08709e0d9b"
  },
  {
    "url": "img/fez/2on/fight_area.png",
    "revision": "8ad40421297c21af2519188e79e10f79"
  },
  {
    "url": "img/fez/2on/map_setting.png",
    "revision": "f42ac980c3e648af05ce10a1639ceb85"
  },
  {
    "url": "img/fez/2on/卡位1.png",
    "revision": "0dc25c30d04a1c7585b5de389916f012"
  },
  {
    "url": "img/fez/2on/卡位2.png",
    "revision": "1a0fe04cb16431d9332f32f1c416a7a4"
  },
  {
    "url": "img/fez/2on/站位.png",
    "revision": "c01bf90c3a6c14c270a05c8dd07fa68e"
  },
  {
    "url": "img/fez/3on/map_setting_GL.png",
    "revision": "c6fbc725be934ce444c4ac781d63cbe4"
  },
  {
    "url": "img/fez/3on/map_setting.png",
    "revision": "9dc22414004f69ca2aaf5bf56ff39a10"
  },
  {
    "url": "img/firebase/1.png",
    "revision": "d00d9e42c9fe6dbb66a96fca6d576a4b"
  },
  {
    "url": "img/firebase/2.png",
    "revision": "58100b6accea1cf2ae329108aa1cd24d"
  },
  {
    "url": "img/firebase/3.png",
    "revision": "5ff0dbb7891ca608e94a45c93adc2301"
  },
  {
    "url": "img/firebase/4.png",
    "revision": "ea9bbb03f7281540e7ffe0f57de84c1f"
  },
  {
    "url": "img/firebase/5.png",
    "revision": "baac21751249cb11f399a1cbdb68c444"
  },
  {
    "url": "img/firebase/6.png",
    "revision": "3c0ff0ffdb8502c5b3648bbd6c944aa5"
  },
  {
    "url": "img/firebase/7.png",
    "revision": "6dcd151419be9665e29a023f356a135a"
  },
  {
    "url": "index.html",
    "revision": "56e895c3134a1dd9452529a3a3a54231"
  },
  {
    "url": "search/index.html",
    "revision": "e269d4c6c3edcbc3cafe27568a3fa314"
  },
  {
    "url": "tag/index.html",
    "revision": "2b510c5db2fa096ba4265a9b4edb7314"
  },
  {
    "url": "VueJCBlog/Development/article/hello-vuejcblog.html",
    "revision": "4227d2f10f8f5e751538ba3d16baf578"
  },
  {
    "url": "VueJCBlog/Development/article/test/test-comment.html",
    "revision": "dd9bd1a53b028c4218c22b3f1e00bf5a"
  },
  {
    "url": "VueJCBlog/Development/article/test/test-lazy-load.html",
    "revision": "1b1d87a9199f39c8e842da61bde07332"
  },
  {
    "url": "VueJCBlog/Development/article/test/test-lazy-load2.html",
    "revision": "cbb4c6a388deca18f9b2413b7611414f"
  },
  {
    "url": "VueJCBlog/Feature/about-page.html",
    "revision": "1fab95c1f62c914addd1319399b21e78"
  },
  {
    "url": "VueJCBlog/Feature/archive-page.html",
    "revision": "f5c48bec894bd8818a46d6e774fba774"
  },
  {
    "url": "VueJCBlog/Feature/category-page.html",
    "revision": "be100ca77e30f5082d674ea3d0951eaf"
  },
  {
    "url": "VueJCBlog/Feature/common-feature.html",
    "revision": "58d8a7b847a2adf1a81621c8d74de75d"
  },
  {
    "url": "VueJCBlog/Feature/index-page.html",
    "revision": "8427d398f8c2e3ffdf168c3c2b703fad"
  },
  {
    "url": "VueJCBlog/Feature/index.html",
    "revision": "bd6804f0af7fe40a70adf3ced2ad4791"
  },
  {
    "url": "VueJCBlog/Feature/post-page.html",
    "revision": "e574be5e1099a33a656c0442a2d176dc"
  },
  {
    "url": "VueJCBlog/Feature/search-page.html",
    "revision": "cb851f7f0608d5d45d30bd8f8ff13e70"
  },
  {
    "url": "VueJCBlog/Feature/sidebar-feature.html",
    "revision": "d3447bdda3e894359dc136298b3d3429"
  },
  {
    "url": "VueJCBlog/Feature/tag-page.html",
    "revision": "e90fa57e2acd9aab2e75c7d04a492538"
  },
  {
    "url": "VueJCBlog/Installation.html",
    "revision": "51324f06b3806f885db3df88be306b0f"
  },
  {
    "url": "VueJCBlog/Quick-Start.html",
    "revision": "09396f4bc1ee2563759a6e45e4a5e2f8"
  },
  {
    "url": "VueJCBlog/Usage/Container/index.html",
    "revision": "8c393cb8b8668d2a1d42b265c82a6f41"
  },
  {
    "url": "VueJCBlog/Usage/front-matter.html",
    "revision": "352fbc22f2da1f63d106ec9741c5fd8b"
  },
  {
    "url": "VueJCBlog/Usage/index.html",
    "revision": "cfd6a57c37173c5eb4bcd74f63163749"
  },
  {
    "url": "VueJCBlog/Usage/Markdown/advanced.html",
    "revision": "112800ff5e13c2e72cf81a04f67756a8"
  },
  {
    "url": "VueJCBlog/Usage/Markdown/basic.html",
    "revision": "43d87035922dfb00795b8cb681e0ffbc"
  },
  {
    "url": "VueJCBlog/Usage/Markdown/flow-chart.html",
    "revision": "a749922d267de68c867d128d34e52a1b"
  },
  {
    "url": "VueJCBlog/Usage/Markdown/index.html",
    "revision": "4f5803db9affd673d1ed89d836ac42d9"
  },
  {
    "url": "VueJCBlog/Usage/Markdown/link.html",
    "revision": "a926e0f9d82c8fb80c8a703b1b786910"
  },
  {
    "url": "VueJCBlog/Usage/Slide.html",
    "revision": "70c6fed3f06a445479862f9bdabcff8a"
  }
].concat(self.__precacheManifest || []);
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
