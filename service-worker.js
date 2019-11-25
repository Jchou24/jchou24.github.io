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
    "revision": "c6223a4cfd1323c449940fbe671d2a7a"
  },
  {
    "url": "About/index.html",
    "revision": "c972d6f616ddc2b36aac90210cbe605d"
  },
  {
    "url": "archive/index.html",
    "revision": "830d51236d85fabb69e92788ace4b74c"
  },
  {
    "url": "assets/css/0.styles.2863948b.css",
    "revision": "dfd62f3772c745f8dd3bf848fec7f24f"
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
    "url": "assets/js/6.78e0d6b5.js",
    "revision": "dc56d4a6d98b8ef087b3580924b30305"
  },
  {
    "url": "assets/js/74.47973081.js",
    "revision": "615d17f1874f358f88ebabd203407c3c"
  },
  {
    "url": "assets/js/75.77dd1d6b.js",
    "revision": "eb6fed93041d93478c3c6879de821d5a"
  },
  {
    "url": "assets/js/76.a6edb09f.js",
    "revision": "593adeecbd42bb9b51e6e1a79a8f653a"
  },
  {
    "url": "assets/js/77.19b18625.js",
    "revision": "ffba46ba595228684c31fa08a66eefea"
  },
  {
    "url": "assets/js/78.520a32f5.js",
    "revision": "48b4b218b30838b9a5d6ff72e5619178"
  },
  {
    "url": "assets/js/79.842b0274.js",
    "revision": "a0c1838c8610b5b19bae84e41c33a739"
  },
  {
    "url": "assets/js/80.0716654f.js",
    "revision": "516813041d4bed329f03c0409941dec1"
  },
  {
    "url": "assets/js/81.ffd20a69.js",
    "revision": "49d3ad2684efee48f9bd74f5411fa572"
  },
  {
    "url": "assets/js/82.31df2b0f.js",
    "revision": "138f93bec2f12cbc9ed54c9a90f7e6c0"
  },
  {
    "url": "assets/js/83.bfbfe191.js",
    "revision": "73b25299381415e2b282cff090e4e732"
  },
  {
    "url": "assets/js/84.c0c841ca.js",
    "revision": "3b85cdbf7d74bc0744de48d2ebdd6abb"
  },
  {
    "url": "assets/js/85.826f9ac5.js",
    "revision": "312d0c5472d2f8a6be950829aa7aff16"
  },
  {
    "url": "assets/js/86.0849dde9.js",
    "revision": "17ecbe3900ad3a4bb92796bee5571cc1"
  },
  {
    "url": "assets/js/87.a26344bc.js",
    "revision": "ad080a502cb835cec199d0c5cb63650d"
  },
  {
    "url": "assets/js/88.1d5d24af.js",
    "revision": "27a0a7e4bc2ac089875e4676bb1ae05f"
  },
  {
    "url": "assets/js/89.223640ae.js",
    "revision": "100a749dc62990fd0c86557171c6a0d3"
  },
  {
    "url": "assets/js/90.2568b3cc.js",
    "revision": "c8786245ceb29494807bd93d746ddf76"
  },
  {
    "url": "assets/js/91.dfc88cf1.js",
    "revision": "9ffd719b24de996484a1f214bf116056"
  },
  {
    "url": "assets/js/92.400228e9.js",
    "revision": "cb9aea5d644d2cf0c758921aa84fdde8"
  },
  {
    "url": "assets/js/93.54b23e9b.js",
    "revision": "26c25d8dd222e6b74835039438aaa8fc"
  },
  {
    "url": "assets/js/94.47ccb616.js",
    "revision": "ae30d28c91162af97d1500d4e8938344"
  },
  {
    "url": "assets/js/95.485237ea.js",
    "revision": "09046bdaa5df25f56fd4d0271b9f11a0"
  },
  {
    "url": "assets/js/app.ffd861cd.js",
    "revision": "0ccc392e20d4d7e53a5e37ca74e15efc"
  },
  {
    "url": "assets/js/layout-BaseLayout.001d0683.js",
    "revision": "52a85e4d05dba5fd1c00f607cbe55000"
  },
  {
    "url": "assets/js/layout-Layout.5dc87928.js",
    "revision": "35e34f1f6bf7d2735cf21e009f5ca6bd"
  },
  {
    "url": "assets/js/layout-NotFound.ca23e2f7.js",
    "revision": "0b7d2ed0f7c1b9cd1e179862789aa988"
  },
  {
    "url": "assets/js/page-01b1365c.fc6b8b79.js",
    "revision": "3659433690b615bb1ccee7d95be527aa"
  },
  {
    "url": "assets/js/page-03ff99e4.434c7e25.js",
    "revision": "0ec117e614ebbb959f156e3448c6624c"
  },
  {
    "url": "assets/js/page-0762cb2c.cc83b4b3.js",
    "revision": "166b5dafa28388e0e4020f7f6b1e61eb"
  },
  {
    "url": "assets/js/page-0815fe43.eb10771c.js",
    "revision": "95d9976b78a7b6479d95a1c9cb53e76e"
  },
  {
    "url": "assets/js/page-0994254e.c9dd8230.js",
    "revision": "9c85e5452ca6747235904ed05fd504c1"
  },
  {
    "url": "assets/js/page-09cfa20f.f258267e.js",
    "revision": "cd547b8508386a8cfb83fac703ae3119"
  },
  {
    "url": "assets/js/page-0bd5cd98.cf7c7b27.js",
    "revision": "780cff6c7c1a91c22e3bf56ee4b41182"
  },
  {
    "url": "assets/js/page-0ca8b05c.3cba4841.js",
    "revision": "c7c500a3e69c42e3832eb4b122e32bce"
  },
  {
    "url": "assets/js/page-130de14f.e54f2d12.js",
    "revision": "994b95125ad65b95f358e2d7e568d542"
  },
  {
    "url": "assets/js/page-17916170.5a8bb522.js",
    "revision": "facb2c0a14aca6b2dd173adba38e2e42"
  },
  {
    "url": "assets/js/page-1efb5c62.32315b7a.js",
    "revision": "212f565519332a356c9748e227c4e795"
  },
  {
    "url": "assets/js/page-2282a6e0.a24caaf2.js",
    "revision": "0452dd597cb6f9f5a25602b5cb0be2aa"
  },
  {
    "url": "assets/js/page-2ba07fce.0cf1b6fd.js",
    "revision": "498144f21ee2b5310302b1b61115bbb6"
  },
  {
    "url": "assets/js/page-2da25f49.a6823c11.js",
    "revision": "5b72164fa5eb44ef32167543478293ed"
  },
  {
    "url": "assets/js/page-2f77601c.dc0f8918.js",
    "revision": "8e73d07f4f2d46691ee5621f4579b5fe"
  },
  {
    "url": "assets/js/page-36058925.b42a6f5a.js",
    "revision": "d7e2c948d1f1caa42511376eaae1225e"
  },
  {
    "url": "assets/js/page-3721e5cf.d36ace4a.js",
    "revision": "7328678693fde0f9c2dee720eb9c1141"
  },
  {
    "url": "assets/js/page-38e94d3e.440714d0.js",
    "revision": "926b8f3dd0488c07090cb8b64236f67d"
  },
  {
    "url": "assets/js/page-39d006b5.1f3f2c16.js",
    "revision": "5a9e95c78cf5d8dc596e276c68c55498"
  },
  {
    "url": "assets/js/page-3b1778e4.78b395cb.js",
    "revision": "477716cda91868df70a6573cb452ca58"
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
    "url": "assets/js/page-42a0ea7c.cf74a9d0.js",
    "revision": "77416fc2ae4610d7d94a0ddc0e91d5ec"
  },
  {
    "url": "assets/js/page-437f73dc.745187a0.js",
    "revision": "59ffce398ae14771d7c15bed71c7670d"
  },
  {
    "url": "assets/js/page-4773a0fc.3b8cc9af.js",
    "revision": "02e23af4d13cf71307dcf010c7996071"
  },
  {
    "url": "assets/js/page-47ec31ef.d9c031a0.js",
    "revision": "24bda8a1113cc925f3f4346c4cb735b4"
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
    "url": "assets/js/page-52453899.14dd0ad3.js",
    "revision": "d30cd5738e137a2dd41fbed1e2d90a8f"
  },
  {
    "url": "assets/js/page-53a21bc2.b87f59bc.js",
    "revision": "08993b549c6404dc610c9495f167df82"
  },
  {
    "url": "assets/js/page-548dbfdd.39e59482.js",
    "revision": "83a14127cc314c485c05e9748f676376"
  },
  {
    "url": "assets/js/page-54cde949.61c00fe9.js",
    "revision": "6a94b9eee74526a7b8c89b490875e8ed"
  },
  {
    "url": "assets/js/page-56c5add8.7505d053.js",
    "revision": "20079a7f9ffc4ab72df333607cf800d1"
  },
  {
    "url": "assets/js/page-5971d062.485fff5c.js",
    "revision": "13097f21032d8c27b141f3d9db48ea68"
  },
  {
    "url": "assets/js/page-5ae76184.beee2f7f.js",
    "revision": "2442cdda2a3f211bf406e08f7aa5a79f"
  },
  {
    "url": "assets/js/page-5c24028f.0d50b2a7.js",
    "revision": "92cd64271c0b2567b0dca877e13786e9"
  },
  {
    "url": "assets/js/page-5dade32f.066ae4bb.js",
    "revision": "57de850892071baa3a10de0baac7d00f"
  },
  {
    "url": "assets/js/page-62c3f84a.a72702d9.js",
    "revision": "64125b0b7718368d97883cabadc8332a"
  },
  {
    "url": "assets/js/page-631831dc.d1760993.js",
    "revision": "92a510242a6502941b7ff84609976c63"
  },
  {
    "url": "assets/js/page-64c6c3f9.f866f331.js",
    "revision": "a4c75902261f8678dc25de7b29f4d564"
  },
  {
    "url": "assets/js/page-68a3e126.cae39eaf.js",
    "revision": "76ca7ec2afa3aa605ff40b3254c171d2"
  },
  {
    "url": "assets/js/page-718e3f13.206d6064.js",
    "revision": "79b90f281aa13348cb13fdda429e2b4e"
  },
  {
    "url": "assets/js/page-7961fc62.14c8ea88.js",
    "revision": "8ce98ab9cd321d21c0b665d73cd594a8"
  },
  {
    "url": "assets/js/page-7a9d1252.de321bb1.js",
    "revision": "e65a7734e0670dda4f711d58a662ada0"
  },
  {
    "url": "assets/js/page-7e22c02f.d293a726.js",
    "revision": "6c5323e1e68b0dbfeccb59e6ee997946"
  },
  {
    "url": "assets/js/page-7f4c69e4.a29e08d3.js",
    "revision": "472246839837a1e946239d8e6009c110"
  },
  {
    "url": "assets/js/page-9a13860a.af73ca33.js",
    "revision": "e69d7888ffee391288f22f615091f7db"
  },
  {
    "url": "assets/js/page-9d704b70.6b65c9f7.js",
    "revision": "efd5e4a979a79830ae557fcad2529e57"
  },
  {
    "url": "assets/js/page-a1c83fc6.9f64303d.js",
    "revision": "9d98cd4d5d4464477de8c529d49928bb"
  },
  {
    "url": "assets/js/page-a649c29e.ddf5602c.js",
    "revision": "e2a06fc50ca803528d88a8dd42cf48a5"
  },
  {
    "url": "assets/js/page-b496432e.9b65a32c.js",
    "revision": "f65c95d909dddf5a76906a6a1668bf93"
  },
  {
    "url": "assets/js/page-b6123e24.b60f7ef8.js",
    "revision": "e26c4bbd53fee3ea60a26fde9be07868"
  },
  {
    "url": "assets/js/page-c1e7a5fc.5469b97b.js",
    "revision": "0d8e2683984b2d57b1cb00ab95860b5c"
  },
  {
    "url": "assets/js/page-c41b383a.96973db5.js",
    "revision": "3bad5f1593368b3aa49db34a56ec517c"
  },
  {
    "url": "assets/js/page-c799e3a4.c3eab918.js",
    "revision": "8fb2b6d253269e03470a4e99ac66e753"
  },
  {
    "url": "assets/js/page-cd03364e.911fd9e8.js",
    "revision": "92a5460fd3f49b87c857b8561f2e975c"
  },
  {
    "url": "assets/js/page-deb70f94.fb581214.js",
    "revision": "bf1d570ccc7fb3c46ef7fef0f0aef466"
  },
  {
    "url": "assets/js/page-e63bef64.bd3347e7.js",
    "revision": "91fd511761793eb0d22a74b7b721f656"
  },
  {
    "url": "assets/js/page-e869018c.69c6ee00.js",
    "revision": "42cb27fdfeb3e70719bdb9b292de443e"
  },
  {
    "url": "assets/js/page-e87fecf8.6e65fa2d.js",
    "revision": "a745321740ab792823663eed219b31de"
  },
  {
    "url": "assets/js/page-fa2e9ecc.f08d76cb.js",
    "revision": "d4e58921160f1e3c13848132e4801315"
  },
  {
    "url": "assets/js/vendors~flowchart.9cc30435.js",
    "revision": "7e328fb7cb23bfe51c3aa743a035d1fc"
  },
  {
    "url": "assets/js/vendors~layout-Layout.524778a0.js",
    "revision": "878c2d6895349120c7c7175ee83ccd71"
  },
  {
    "url": "category/index.html",
    "revision": "bd8b3c8822fc6163c0c063c1f1524488"
  },
  {
    "url": "Coding/Front-End/CSS/awesome-css.html",
    "revision": "ca18868497f1f8b8f6b80563b80fa084"
  },
  {
    "url": "Coding/Front-End/CSS/awesome-icons.html",
    "revision": "3b87f1f8baf7506045b1ee16569342c0"
  },
  {
    "url": "Coding/Front-End/JS/Module Bundler/Webpack/awesome-webpack.html",
    "revision": "ee9b5bef9d8945c44bd9c934083149d1"
  },
  {
    "url": "Coding/Front-End/JS/Vue/awesome-vue.html",
    "revision": "4be6900f824219c2a65ce876d5bfd43a"
  },
  {
    "url": "Coding/日常筆記/CodeReview/code-review-memo.html",
    "revision": "99b58ac34625cad93790f3195dcbca29"
  },
  {
    "url": "Coding/日常筆記/CSharp/AutoMapper-class繼承後之對應.html",
    "revision": "55a6dd04e0a0b7c64c3c29fac3cb3605"
  },
  {
    "url": "Coding/日常筆記/CSharp/String-Concatenate.html",
    "revision": "57588f6a7678f2500ef1dd3e0409d1f3"
  },
  {
    "url": "Coding/日常筆記/CSharp/例外處理.html",
    "revision": "206042c540822bc8d42c084ebe7fa6e0"
  },
  {
    "url": "Coding/日常筆記/CSharp/變數命名.html",
    "revision": "1cb9e81dbcec319b5849a27af1b0e2d6"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/1. 心/index.html",
    "revision": "9f8624ebbb97b3bc42f5749fc44c8f71"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/1. 心/TMP.html",
    "revision": "96fe7f3f1a475a6e9509239fa251379a"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/1. 心/心理戰.html",
    "revision": "8d9568354d2e356ba301d0e87d98c985"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/2. 技/index.html",
    "revision": "0bca3522ca51ca6b2637f81a10578699"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/2. 技/神小跳.html",
    "revision": "303a4c9dce98cf5c7d7175170e4098f0"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/2. 技/視野變換.html",
    "revision": "ed398c7a350714e4e6dd751b8dba8354"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/2. 技/走位.html",
    "revision": "c5c952d03d26e90b2e3464d4f74900aa"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/2. 技/跳點.html",
    "revision": "1998610de4944d2d2089ff0b7c0e3a38"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/2. 技/預出手.html",
    "revision": "99a8f3d1d524a8136877bb5b39fda0e5"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/3. 體/index.html",
    "revision": "44dcbb4b0d821eab2b70b54d084ea61d"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/4. 群/index.html",
    "revision": "96ef90a8ad9ebee4e089bffe03bce10c"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/4. 群/卡位.html",
    "revision": "74dae6b73905a25a2281167811ab242b"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/4. 群/組隊.html",
    "revision": "815a4c6f00d2c0cde07ffdb4547cec33"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/5. 略/index.html",
    "revision": "9b140cfd658dc84ea9de0d3591b46443"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/5. 略/局勢.html",
    "revision": "d39c0674247d4f935450fceff923cb54"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/6. 決/index.html",
    "revision": "2b5d224ea72c54f3c494a2df29f1f757"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/index.html",
    "revision": "1347d48009503dc23c53b4a6a6a2c056"
  },
  {
    "url": "Game/FEZ/2. 國戰步兵戰策略/index.html",
    "revision": "b1e461b1b5105d7196604655cd3d64f0"
  },
  {
    "url": "Game/FEZ/3. 各職玩法/刀.html",
    "revision": "9449bd386e58c38afe1a71e36395534b"
  },
  {
    "url": "Game/FEZ/3. 各職玩法/雙修.html",
    "revision": "ab6846851b2f119552c0178785fe8926"
  },
  {
    "url": "Game/FEZ/4. 2on/index.html",
    "revision": "77861f0b2d236a92ace24127f4f9d78d"
  },
  {
    "url": "Game/FEZ/5. 3on/index.html",
    "revision": "1821338c5e4b8a96d11fdd1cda50c134"
  },
  {
    "url": "Game/FEZ/X. Theorem/HMM.html",
    "revision": "a51ac8198d397b6528b0fbd90ef77ae6"
  },
  {
    "url": "hello-vuejcblog.html",
    "revision": "01ea8cf2be31d605bafe51e43e2d6026"
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
    "revision": "9007d7930baa76aa9430308144d338d8"
  },
  {
    "url": "search/index.html",
    "revision": "acd306257ac9d6160f48d3ec93ae6afb"
  },
  {
    "url": "tag/index.html",
    "revision": "2fb7a7d703ae1aa43b7299460b114b1a"
  },
  {
    "url": "tmp.html",
    "revision": "105204ae8226d818cc9dae51d40622d0"
  },
  {
    "url": "VueJCBlog/Development/article/hello-vuejcblog.html",
    "revision": "9bff69c2e12b35a5b3b0027e2f029769"
  },
  {
    "url": "VueJCBlog/Development/article/test/test-comment.html",
    "revision": "4b92c9ed5c618cd0b36e3bd7f32589b5"
  },
  {
    "url": "VueJCBlog/Development/article/test/test-lazy-load.html",
    "revision": "7f36046cedd0bfb099735a1f70781ed6"
  },
  {
    "url": "VueJCBlog/Development/article/test/test-lazy-load2.html",
    "revision": "b8fc1ba62e7bfe26589dcadd0049091f"
  },
  {
    "url": "VueJCBlog/Feature/about-page.html",
    "revision": "bbceb47b44008bec403e4f5904c34147"
  },
  {
    "url": "VueJCBlog/Feature/archive-page.html",
    "revision": "6312319b2d5d654b81cd9007241787c1"
  },
  {
    "url": "VueJCBlog/Feature/category-page.html",
    "revision": "12700fa0e6fae93c0643670233ddaff2"
  },
  {
    "url": "VueJCBlog/Feature/common-feature.html",
    "revision": "41a6659f1bd2f629b55a122f6d347061"
  },
  {
    "url": "VueJCBlog/Feature/index-page.html",
    "revision": "e3f4c6890409c6c8fc566e80aadf792c"
  },
  {
    "url": "VueJCBlog/Feature/index.html",
    "revision": "14d5050b278cb91af78efdc31291ff61"
  },
  {
    "url": "VueJCBlog/Feature/post-page.html",
    "revision": "661a98f1a03152f73a97dc094de3e3c0"
  },
  {
    "url": "VueJCBlog/Feature/search-page.html",
    "revision": "2db7997aa27c7c1e329a8c4b59437cb7"
  },
  {
    "url": "VueJCBlog/Feature/sidebar-feature.html",
    "revision": "da997a16cea77d9e11836ed0d99868af"
  },
  {
    "url": "VueJCBlog/Feature/tag-page.html",
    "revision": "e622a2b40628a1efcdefe0e13255905c"
  },
  {
    "url": "VueJCBlog/index.html",
    "revision": "6bf26d1fb8a8b803d1ed148bcc584e2f"
  },
  {
    "url": "VueJCBlog/Installation.html",
    "revision": "99129a622dc559fa72c67f5dba737fa4"
  },
  {
    "url": "VueJCBlog/Quick-Start.html",
    "revision": "21b56346accc5f1acd4ad706182820d7"
  },
  {
    "url": "VueJCBlog/Usage/Container/index.html",
    "revision": "88f714510f1ab416febdfc889f5fef78"
  },
  {
    "url": "VueJCBlog/Usage/front-matter.html",
    "revision": "2be2e6784793b15ca91989d4bdd0316c"
  },
  {
    "url": "VueJCBlog/Usage/index.html",
    "revision": "3ee20aac9d839cd1cbc27437326588e8"
  },
  {
    "url": "VueJCBlog/Usage/Markdown/advanced.html",
    "revision": "5415afecee083685f8be1c7c358c9b3a"
  },
  {
    "url": "VueJCBlog/Usage/Markdown/basic.html",
    "revision": "4b9b354395e2a8d141f14817dfe21650"
  },
  {
    "url": "VueJCBlog/Usage/Markdown/flow-chart.html",
    "revision": "901cc1c5da1c65cfdc3c6db247042af1"
  },
  {
    "url": "VueJCBlog/Usage/Markdown/index.html",
    "revision": "f6748d5e1acc23539ff8662124515017"
  },
  {
    "url": "VueJCBlog/Usage/Markdown/link.html",
    "revision": "79b2c228a43662b639e161a2d5390c64"
  },
  {
    "url": "VueJCBlog/Usage/Slide.html",
    "revision": "cb0e407b4cf01a4f711b8e234b7ae433"
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
