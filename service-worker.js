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
    "revision": "01b5d76a86dbf5fae4f517004b27ad15"
  },
  {
    "url": "About/index.html",
    "revision": "7e54d69d7abca425f807c0272434b65c"
  },
  {
    "url": "archive/index.html",
    "revision": "fbce34249b0bc7d2e3a5e616cbc0229e"
  },
  {
    "url": "assets/css/0.styles.ab0e1402.css",
    "revision": "641955707bff857eeecb3354b290e17f"
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
    "url": "assets/js/1.e9c4f42b.js",
    "revision": "ecdb59a880aebf46c07e2a643764ac05"
  },
  {
    "url": "assets/js/2.ac4b64e6.js",
    "revision": "41c06a1cb829edd0ab9c22efa3d89c75"
  },
  {
    "url": "assets/js/3.279175ff.js",
    "revision": "d8eb694bad20e16fdac716058200b8f0"
  },
  {
    "url": "assets/js/4.22686d1d.js",
    "revision": "80f70bec970b6fd1a62ba6951e3ba6ff"
  },
  {
    "url": "assets/js/5.a85c1c03.js",
    "revision": "8c20c3969c17dc21082d7b25828de211"
  },
  {
    "url": "assets/js/6.3c12b721.js",
    "revision": "48d4f49b8e7e15a47c3883f7314cefa9"
  },
  {
    "url": "assets/js/73.10b88a68.js",
    "revision": "89dfe5883e81578cebe311662f50775a"
  },
  {
    "url": "assets/js/74.af417104.js",
    "revision": "5d1fcb9d6426006439b2b5c1042bf379"
  },
  {
    "url": "assets/js/75.0b2aebfa.js",
    "revision": "35b75a26226f65220a875987341e2a59"
  },
  {
    "url": "assets/js/76.985f2b92.js",
    "revision": "9537842067f9010378d97481a9ad2eaf"
  },
  {
    "url": "assets/js/77.b025095f.js",
    "revision": "2588080caf2e9bd59dad752b3a586cd2"
  },
  {
    "url": "assets/js/78.1fd0a60e.js",
    "revision": "547e8631cc130d823bb336055c12d0fd"
  },
  {
    "url": "assets/js/79.91b0dc31.js",
    "revision": "9c2d46b43f787bb40f7fb45e5819f1de"
  },
  {
    "url": "assets/js/80.baac0e5e.js",
    "revision": "f13d2fa8653c71477acee593c17220af"
  },
  {
    "url": "assets/js/81.9d873280.js",
    "revision": "fcc17667fc778b65990deff73769cb2a"
  },
  {
    "url": "assets/js/82.d6054dda.js",
    "revision": "1998a99f1602d3a4ec17712a5bf84886"
  },
  {
    "url": "assets/js/83.40381210.js",
    "revision": "f82f877a81b812bb49bdd6b70cfa4593"
  },
  {
    "url": "assets/js/84.153c5e6f.js",
    "revision": "60c78adff98e54d28c6577ad852a4b10"
  },
  {
    "url": "assets/js/85.1a62ac83.js",
    "revision": "974e50853f207689798e560c0eb86637"
  },
  {
    "url": "assets/js/86.fd74cd04.js",
    "revision": "7499e938213a3b3488b1c70e43f43c4d"
  },
  {
    "url": "assets/js/87.29202d3b.js",
    "revision": "6cdcadbf1d556d5edfdc9fa61bcfc420"
  },
  {
    "url": "assets/js/88.03536060.js",
    "revision": "b61e3910d420a6396ae2dca938eb034f"
  },
  {
    "url": "assets/js/89.824bb63a.js",
    "revision": "a1a9945e6bbe062f50c807e295a24e44"
  },
  {
    "url": "assets/js/90.f909199d.js",
    "revision": "1dcda2278c2e149edab5475895e92b22"
  },
  {
    "url": "assets/js/91.599fe978.js",
    "revision": "d26b88c2e856b9331dde7bd33dedd854"
  },
  {
    "url": "assets/js/92.69647191.js",
    "revision": "1c7d393309e46e1446f099574fffa973"
  },
  {
    "url": "assets/js/93.88db6eaa.js",
    "revision": "abf1c878e766502051128023c492d5b9"
  },
  {
    "url": "assets/js/94.9c025166.js",
    "revision": "c52019193157321fe373901d0a0508a5"
  },
  {
    "url": "assets/js/app.c0e5fd8e.js",
    "revision": "9450d0e30d544ca2e4123d98f46c36a7"
  },
  {
    "url": "assets/js/layout-BaseLayout.ff810058.js",
    "revision": "bfbb643556239669f3f280128fbe0055"
  },
  {
    "url": "assets/js/layout-Layout.b4428d81.js",
    "revision": "5acbc2b8a7fe189668fcc86fd5ed1f90"
  },
  {
    "url": "assets/js/layout-NotFound.ca23e2f7.js",
    "revision": "0b7d2ed0f7c1b9cd1e179862789aa988"
  },
  {
    "url": "assets/js/page-01b1365c.bd92fcbf.js",
    "revision": "c04f4dc523b546ef070fc5cd3af597cb"
  },
  {
    "url": "assets/js/page-03ff99e4.1d28dbff.js",
    "revision": "204626b5f987a17899384298562f776d"
  },
  {
    "url": "assets/js/page-0762cb2c.cc83b4b3.js",
    "revision": "166b5dafa28388e0e4020f7f6b1e61eb"
  },
  {
    "url": "assets/js/page-0815fe43.845d3504.js",
    "revision": "8abb6cf6b7706aea24aed10bece88fb7"
  },
  {
    "url": "assets/js/page-0994254e.5eabcda0.js",
    "revision": "775088edb5f3957b9d2036ae9dd472f7"
  },
  {
    "url": "assets/js/page-09cfa20f.46e0112f.js",
    "revision": "b48b21147518f291ba8d745e82021cb3"
  },
  {
    "url": "assets/js/page-0bd5cd98.22001c42.js",
    "revision": "008480a99c36522a61be1c94f78f679f"
  },
  {
    "url": "assets/js/page-0ca8b05c.b6945577.js",
    "revision": "7472c9a5d757125d96d0b4aa035f3476"
  },
  {
    "url": "assets/js/page-130de14f.c92dae27.js",
    "revision": "4a4c3197bbdc2cda081deae18569d1b3"
  },
  {
    "url": "assets/js/page-17916170.5a8bb522.js",
    "revision": "facb2c0a14aca6b2dd173adba38e2e42"
  },
  {
    "url": "assets/js/page-1efb5c62.281f20f0.js",
    "revision": "f4dcc2b4307e15e77e6ad4a878062d17"
  },
  {
    "url": "assets/js/page-2282a6e0.a24caaf2.js",
    "revision": "0452dd597cb6f9f5a25602b5cb0be2aa"
  },
  {
    "url": "assets/js/page-2ba07fce.159328cf.js",
    "revision": "cb5be1ce202db1051bb4d47a6251ea29"
  },
  {
    "url": "assets/js/page-2da25f49.a91ebd44.js",
    "revision": "9e25ed68cc7bc8044e6144d36911b9d7"
  },
  {
    "url": "assets/js/page-2f77601c.8235087b.js",
    "revision": "0d9ab2c2ccc3c80b7323e16f765d67e6"
  },
  {
    "url": "assets/js/page-36058925.64480fae.js",
    "revision": "5f02c2725e7fe19702dce3e2743c46dd"
  },
  {
    "url": "assets/js/page-3721e5cf.ee6131e5.js",
    "revision": "0f5edd18913a261ad0f5ab62cb4407be"
  },
  {
    "url": "assets/js/page-38e94d3e.a52c9f20.js",
    "revision": "905809e23855856fb70703afe5f211eb"
  },
  {
    "url": "assets/js/page-39d006b5.1f3f2c16.js",
    "revision": "5a9e95c78cf5d8dc596e276c68c55498"
  },
  {
    "url": "assets/js/page-3b1778e4.d3dedec9.js",
    "revision": "502ef9310d4f41baf968017707ba8511"
  },
  {
    "url": "assets/js/page-4048f79b.494eae0d.js",
    "revision": "b469d2cb5f9dd659a2a082d93e8051db"
  },
  {
    "url": "assets/js/page-409d673b.7bdb55f3.js",
    "revision": "5230381e948eaf06ed887f3138edaf13"
  },
  {
    "url": "assets/js/page-42a0ea7c.b11a347c.js",
    "revision": "09c2dddf5cf77d4382a77e0f1a7b36e3"
  },
  {
    "url": "assets/js/page-437f73dc.42eaba2c.js",
    "revision": "733ab1a35f80e89ae40520671edd90b4"
  },
  {
    "url": "assets/js/page-4773a0fc.0a179dc0.js",
    "revision": "d3346c397955ece47c8863fddcda9894"
  },
  {
    "url": "assets/js/page-47ec31ef.c274bbc8.js",
    "revision": "3a5e11164d863622ce59ea62611e5b1c"
  },
  {
    "url": "assets/js/page-494b7749.316394f1.js",
    "revision": "b3663d4ebe37b27b9ab50b339d9f1ec5"
  },
  {
    "url": "assets/js/page-4e40ef0e.35bb94bc.js",
    "revision": "5d00ee278f83d00fd1d955b2070f3de6"
  },
  {
    "url": "assets/js/page-4f5eb00c.138c6148.js",
    "revision": "c64de96b92ecca14b2a8ed883b8bdfaf"
  },
  {
    "url": "assets/js/page-52453899.7ff1db06.js",
    "revision": "d85b8c158653de8516fc8071af00766a"
  },
  {
    "url": "assets/js/page-53a21bc2.32761020.js",
    "revision": "597b4f10978c1e18560ca35ba22fa9e7"
  },
  {
    "url": "assets/js/page-548dbfdd.9cc93e64.js",
    "revision": "437d9b656fbe2eba53a654e17382657c"
  },
  {
    "url": "assets/js/page-54cde949.0552be48.js",
    "revision": "c5fd47241e03150445d1d239f23bd65e"
  },
  {
    "url": "assets/js/page-56c5add8.6bc9d786.js",
    "revision": "1aaae00b7b6c6557a39d4ad32bef5291"
  },
  {
    "url": "assets/js/page-5971d062.b1dbc024.js",
    "revision": "51c2f65437ad3373da88e0791a73e792"
  },
  {
    "url": "assets/js/page-5ae76184.caad921c.js",
    "revision": "f28eaf07b677f9b5de270a3ac6b82fed"
  },
  {
    "url": "assets/js/page-5c24028f.5ac5eaed.js",
    "revision": "02a460605a04510fbfbf76623204eec1"
  },
  {
    "url": "assets/js/page-5dade32f.f7389a1d.js",
    "revision": "b1b0319c223f212a7833d656211f2775"
  },
  {
    "url": "assets/js/page-62c3f84a.8975210e.js",
    "revision": "8aecbac840c5123165dfbe66c4b6291a"
  },
  {
    "url": "assets/js/page-631831dc.c4b75e60.js",
    "revision": "a2a55d8248b784d15dd54f3ff6639ca6"
  },
  {
    "url": "assets/js/page-64c6c3f9.aeaaf75f.js",
    "revision": "9c6ff119403a68250889e02299aba804"
  },
  {
    "url": "assets/js/page-68a3e126.c7e3657b.js",
    "revision": "10becb47a9d5f97e60ae2391eec04b18"
  },
  {
    "url": "assets/js/page-718e3f13.389eebf8.js",
    "revision": "99abb7a5d89fa242effb92e68cdfee28"
  },
  {
    "url": "assets/js/page-7961fc62.9fe146de.js",
    "revision": "d453d5f5d93837211f86d87d97c59e65"
  },
  {
    "url": "assets/js/page-7e22c02f.07f9a5f7.js",
    "revision": "9ec5d9a545259817f87ad7dafb55f834"
  },
  {
    "url": "assets/js/page-7f4c69e4.3f96a1ad.js",
    "revision": "bc9bb9f78e78108c19b1d76850f9750f"
  },
  {
    "url": "assets/js/page-9a13860a.d0e7f14c.js",
    "revision": "4bf2c678e9f9a5c243f1c72a191d5e7d"
  },
  {
    "url": "assets/js/page-9d704b70.920480f9.js",
    "revision": "4f6d8e6e90faa8125178add6015e22af"
  },
  {
    "url": "assets/js/page-a1c83fc6.67ed5c08.js",
    "revision": "ef17b2e6f3c61e87be42055ece41df63"
  },
  {
    "url": "assets/js/page-a649c29e.0aa0f750.js",
    "revision": "e24011d4f105442ab2e831beb257a15b"
  },
  {
    "url": "assets/js/page-b6123e24.16e81a49.js",
    "revision": "e89e4135c302ad66245ad773112ba526"
  },
  {
    "url": "assets/js/page-c1e7a5fc.8de71654.js",
    "revision": "63be142e4b35a27af1ad2c8082179b01"
  },
  {
    "url": "assets/js/page-c41b383a.d248e0ed.js",
    "revision": "e70a644da7ca24e8a8f8f05f9b23ab2c"
  },
  {
    "url": "assets/js/page-c799e3a4.3baf23be.js",
    "revision": "3008795972d17c73de07422f4f6f51db"
  },
  {
    "url": "assets/js/page-cd03364e.2249de68.js",
    "revision": "a3f9ab53516de3c5b1e2d74610eee43c"
  },
  {
    "url": "assets/js/page-deb70f94.a17c1689.js",
    "revision": "f18e6ad6638eb9694627d2252f5be287"
  },
  {
    "url": "assets/js/page-e63bef64.84e20c55.js",
    "revision": "7c61e4f399040e9aa16df4eb1c7edf05"
  },
  {
    "url": "assets/js/page-e869018c.2196fec6.js",
    "revision": "640fb65eceef43690fd99a9956b7f412"
  },
  {
    "url": "assets/js/page-e87fecf8.abdf8387.js",
    "revision": "7137620f445bd48fb57ce5ce9b608b81"
  },
  {
    "url": "assets/js/page-fa2e9ecc.2aac9bd8.js",
    "revision": "776fbef12fd916dd257878d8b3e09373"
  },
  {
    "url": "assets/js/vendors~flowchart.afc46d6c.js",
    "revision": "2f7f093c264012db9635f8fbedd1a9b7"
  },
  {
    "url": "assets/js/vendors~layout-Layout.b5899a37.js",
    "revision": "71cff01975277784a40b6fe19ddf1345"
  },
  {
    "url": "category/index.html",
    "revision": "57c7d358149c95ab8e5390f9d8a94a94"
  },
  {
    "url": "Coding/Front-End/CSS/awesome-css.html",
    "revision": "cbca29c50af3ad91eb3c99f46ffada18"
  },
  {
    "url": "Coding/Front-End/CSS/awesome-icons.html",
    "revision": "0ac269b54ccd93467faef492a0b820c6"
  },
  {
    "url": "Coding/Front-End/JS/Module Bundler/Webpack/awesome-webpack.html",
    "revision": "638e2fd97a2d5a4eb03a5707e851d0c6"
  },
  {
    "url": "Coding/Front-End/JS/Vue/awesome-vue.html",
    "revision": "e812f3563171ff47fd74a3e1fa0832c9"
  },
  {
    "url": "Coding/日常筆記/CodeReview/code-review-memo.html",
    "revision": "cdd2c8808e07a8fa6737c04dc941c5bb"
  },
  {
    "url": "Coding/日常筆記/CSharp/AutoMapper-class繼承後之對應.html",
    "revision": "0b36dd5f25bd4be95dd59844d2394ff7"
  },
  {
    "url": "Coding/日常筆記/CSharp/String-Concatenate.html",
    "revision": "21aff4a07409f0ea242024d0cb7b5ea6"
  },
  {
    "url": "Coding/日常筆記/CSharp/tmp.html",
    "revision": "02e08e870ea006e4e1453da943bfbd1d"
  },
  {
    "url": "Coding/日常筆記/CSharp/變數命名.html",
    "revision": "3859417bd8ed4d35bcb833ebf29b59ef"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/1. 心/index.html",
    "revision": "26f39bc733385a70543fbec0b0e0c9e5"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/1. 心/TMP.html",
    "revision": "963114bafa937cd8476596236cda560a"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/1. 心/心理戰.html",
    "revision": "954728db2f38bddca788416744ee8b55"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/2. 技/index.html",
    "revision": "2c85f1a2a5885075d2ef78a3ed0db4ce"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/2. 技/神小跳.html",
    "revision": "0d5960db3b8c60200fdc8555ef64555c"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/2. 技/視野變換.html",
    "revision": "cd6ede73590da7ae7bacddff02c6eaf8"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/2. 技/走位.html",
    "revision": "6291a36c1361b251e400144ea0824abb"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/2. 技/跳點.html",
    "revision": "1eaef06ab5d0275ad33e75e0561abfa0"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/2. 技/預出手.html",
    "revision": "56cc661dd82a40bde9e3337ac861d441"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/3. 體/index.html",
    "revision": "44e9c3421130c5a9fb6acb72ac4a082d"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/4. 群/index.html",
    "revision": "3c73f8ed311528e85fbd3e5eb4318ae3"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/4. 群/卡位.html",
    "revision": "022a124131fad7bb91ef38414a3a35f4"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/4. 群/組隊.html",
    "revision": "85c9af3ed6aaa38880acb79e2d7a9f78"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/5. 略/index.html",
    "revision": "f2c0db1987fbb2405cc0e20e9eb7606f"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/5. 略/局勢.html",
    "revision": "5a2fa06039527b74a73413c0c77a7479"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/6. 決/index.html",
    "revision": "51f5776e2f62564190c1cbe1b45aba9c"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/index.html",
    "revision": "9b960a5f790fffe1cda6a0de1722cbbd"
  },
  {
    "url": "Game/FEZ/2. 國戰步兵戰策略/index.html",
    "revision": "031aeaefb1de18282e60f0f5f5a270f8"
  },
  {
    "url": "Game/FEZ/3. 各職玩法/刀.html",
    "revision": "65cf97d5a5b001ca8e1d0f72543f16d4"
  },
  {
    "url": "Game/FEZ/3. 各職玩法/雙修.html",
    "revision": "888b0fd21c1103aca5f8a31d35880395"
  },
  {
    "url": "Game/FEZ/4. 2on/index.html",
    "revision": "3faab79ab284d7b9071615ec1ced0855"
  },
  {
    "url": "Game/FEZ/5. 3on/index.html",
    "revision": "95ce8c6b7fdfafc7765fae23dea6ba67"
  },
  {
    "url": "Game/FEZ/X. Theorem/HMM.html",
    "revision": "6d4febf8818eb204cfda98f2fd830403"
  },
  {
    "url": "hello-vuejcblog.html",
    "revision": "d2a3432855e6035474cba437cc96b86d"
  },
  {
    "url": "icon.png",
    "revision": "bc278be9745f5fec074429e789a0b788"
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
    "revision": "b8593754b4363dfbafbd858b9b835303"
  },
  {
    "url": "search/index.html",
    "revision": "18a3a0c4d2bc6c839c456d49a2b18448"
  },
  {
    "url": "tag/index.html",
    "revision": "1e25acb5cfbb21fe2a3638de6250749d"
  },
  {
    "url": "VueJCBlog/Development/article/hello-vuejcblog.html",
    "revision": "2fb292229e59f177dacccb7eac6c875f"
  },
  {
    "url": "VueJCBlog/Development/article/test/test-comment.html",
    "revision": "a29a421435e46f130a813905028ea96c"
  },
  {
    "url": "VueJCBlog/Development/article/test/test-lazy-load.html",
    "revision": "33cd5ee4f824c97b94aff80b4fc31386"
  },
  {
    "url": "VueJCBlog/Development/article/test/test-lazy-load2.html",
    "revision": "c849a37f77920bc01bee42643a71a4d5"
  },
  {
    "url": "VueJCBlog/Feature/about-page.html",
    "revision": "f2d0add4a35937060ec52c348fe18f28"
  },
  {
    "url": "VueJCBlog/Feature/archive-page.html",
    "revision": "4c9b88ac73c05a728cf4c415a72ad5a2"
  },
  {
    "url": "VueJCBlog/Feature/category-page.html",
    "revision": "438587048670fab3dc96155c6931dd3e"
  },
  {
    "url": "VueJCBlog/Feature/common-feature.html",
    "revision": "15ca789bd30043a51896e444d383d6fc"
  },
  {
    "url": "VueJCBlog/Feature/index-page.html",
    "revision": "fe9f7c3dd0635d1080e4740fb4f531a6"
  },
  {
    "url": "VueJCBlog/Feature/index.html",
    "revision": "542220578b11984f50f18e9b213c79a6"
  },
  {
    "url": "VueJCBlog/Feature/post-page.html",
    "revision": "1c055be62bc9f09c4946de720242b09a"
  },
  {
    "url": "VueJCBlog/Feature/search-page.html",
    "revision": "5decffb7a40ecc9feb1fd4ba73a6a305"
  },
  {
    "url": "VueJCBlog/Feature/sidebar-feature.html",
    "revision": "caf529b52bb7ff73dc8342e0f51b8428"
  },
  {
    "url": "VueJCBlog/Feature/tag-page.html",
    "revision": "c965765fa94d0473975912d72afc68af"
  },
  {
    "url": "VueJCBlog/index.html",
    "revision": "965072c9693d9dcae54d853ee1c47e78"
  },
  {
    "url": "VueJCBlog/Installation.html",
    "revision": "c3f25cee5ed1cfbd3a17114f167aed3e"
  },
  {
    "url": "VueJCBlog/Quick-Start.html",
    "revision": "66db609b0eaec1abb3a031d8aa32a6ce"
  },
  {
    "url": "VueJCBlog/Usage/Container/index.html",
    "revision": "b31e8d50cc1982baf6ee5afed1fc150d"
  },
  {
    "url": "VueJCBlog/Usage/front-matter.html",
    "revision": "f2274243b6974e3a1c2f8738eb772bea"
  },
  {
    "url": "VueJCBlog/Usage/index.html",
    "revision": "1542e8f912c7661a86f4d5578fad6979"
  },
  {
    "url": "VueJCBlog/Usage/Markdown/advanced.html",
    "revision": "9ef31d99ffd55643d0c4b21b0150efd8"
  },
  {
    "url": "VueJCBlog/Usage/Markdown/basic.html",
    "revision": "02d77e1b0653a89efcde8643dc3ac594"
  },
  {
    "url": "VueJCBlog/Usage/Markdown/flow-chart.html",
    "revision": "dded5fa02c2f03aab60cd17bdb98cc1c"
  },
  {
    "url": "VueJCBlog/Usage/Markdown/index.html",
    "revision": "af171853d91b913baeadd7e60cefaadf"
  },
  {
    "url": "VueJCBlog/Usage/Markdown/link.html",
    "revision": "1ee9bd8837c9693ad08044fc6404c002"
  },
  {
    "url": "VueJCBlog/Usage/Slide.html",
    "revision": "9235f11b8516c2e2afe8829745346026"
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
