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
    "revision": "2c6d5cc58564587dce37b1b2aeb81731"
  },
  {
    "url": "About/index.html",
    "revision": "bc130258a1f47762c69054a83c4ab0ef"
  },
  {
    "url": "archive/index.html",
    "revision": "dff869a5a7c7178b5d5964135a3abda0"
  },
  {
    "url": "assets/css/0.styles.b7e1c6f7.css",
    "revision": "db0c0c9ef908b0c58485740db8dd0cfc"
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
    "url": "assets/js/74.e48fb9dc.js",
    "revision": "6d42dc81bcb42fa0960da9fc343f7942"
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
    "url": "assets/js/79.fcaec288.js",
    "revision": "aebe7efcc6f574babbc0c02e7bda83be"
  },
  {
    "url": "assets/js/80.5eb792de.js",
    "revision": "d7525cc3b366854302c3145154a1c0d2"
  },
  {
    "url": "assets/js/81.9d873280.js",
    "revision": "fcc17667fc778b65990deff73769cb2a"
  },
  {
    "url": "assets/js/82.0a6de42d.js",
    "revision": "0724f2ad1a06db0941fc04fcb6d48967"
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
    "url": "assets/js/app.3508879a.js",
    "revision": "715f130cff41de16cb2507d315b42681"
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
    "url": "assets/js/page-01b1365c.fc6b8b79.js",
    "revision": "3659433690b615bb1ccee7d95be527aa"
  },
  {
    "url": "assets/js/page-03ff99e4.434c7e25.js",
    "revision": "0ec117e614ebbb959f156e3448c6624c"
  },
  {
    "url": "assets/js/page-0762cb2c.9ed41aa9.js",
    "revision": "5582acfa9abe1e3019945bd77b26f142"
  },
  {
    "url": "assets/js/page-0815fe43.787c4ce0.js",
    "revision": "ff59bc67f63d63d1ff3c217258f2f8cd"
  },
  {
    "url": "assets/js/page-0994254e.c9dd8230.js",
    "revision": "9c85e5452ca6747235904ed05fd504c1"
  },
  {
    "url": "assets/js/page-09cfa20f.c0e17a27.js",
    "revision": "e0a1a87da994e434dcf4d7f0975111e3"
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
    "url": "assets/js/page-130de14f.31e3618d.js",
    "revision": "d33b5f6634c2d79966f9ad5607f7b8f9"
  },
  {
    "url": "assets/js/page-17916170.e5914cf4.js",
    "revision": "74111dd94b1c9aa70bb104067b113b05"
  },
  {
    "url": "assets/js/page-1efb5c62.e990fdd5.js",
    "revision": "03fa145e78cdf85570f296ed968ba7d3"
  },
  {
    "url": "assets/js/page-2282a6e0.c0b29169.js",
    "revision": "e4b15e3d7e32fe463e103df4d7aa460d"
  },
  {
    "url": "assets/js/page-2ba07fce.b53ade65.js",
    "revision": "689b2f08e02b38cfad1984217e581299"
  },
  {
    "url": "assets/js/page-2da25f49.a91ebd44.js",
    "revision": "9e25ed68cc7bc8044e6144d36911b9d7"
  },
  {
    "url": "assets/js/page-2f77601c.60d2985d.js",
    "revision": "ac96672217bb0237fcc29b5ef0c2d8b8"
  },
  {
    "url": "assets/js/page-36058925.3e352df0.js",
    "revision": "57ef41f131742e6753e0499047d773c6"
  },
  {
    "url": "assets/js/page-3721e5cf.c3eeab35.js",
    "revision": "d1aa46e5de54246bdc546e2652b606b9"
  },
  {
    "url": "assets/js/page-38e94d3e.ce238d3a.js",
    "revision": "2928a4ac404ac65783cf5fd018e9d3c7"
  },
  {
    "url": "assets/js/page-39d006b5.7889c9f8.js",
    "revision": "785cecb853b3c786ac14a0528c9075c6"
  },
  {
    "url": "assets/js/page-3b1778e4.ad6fe858.js",
    "revision": "2b8ce35945478c0f0f225eb073ba80b9"
  },
  {
    "url": "assets/js/page-4048f79b.d209fc46.js",
    "revision": "4a516a9ba922dfda6daf7e77a47fbfd4"
  },
  {
    "url": "assets/js/page-409d673b.5d36de4a.js",
    "revision": "440f20155a804b11bcb2f2cead05846e"
  },
  {
    "url": "assets/js/page-42a0ea7c.b11a347c.js",
    "revision": "09c2dddf5cf77d4382a77e0f1a7b36e3"
  },
  {
    "url": "assets/js/page-437f73dc.b2f801c7.js",
    "revision": "2b943a54d8442577d02a23c8dfcb7102"
  },
  {
    "url": "assets/js/page-4773a0fc.daf0b217.js",
    "revision": "12948f97d7971fd0df68b741313c5cff"
  },
  {
    "url": "assets/js/page-47ec31ef.239a8238.js",
    "revision": "4cf84e291dbb670eca9cca906c996fd4"
  },
  {
    "url": "assets/js/page-494b7749.316394f1.js",
    "revision": "b3663d4ebe37b27b9ab50b339d9f1ec5"
  },
  {
    "url": "assets/js/page-4e40ef0e.b35732ca.js",
    "revision": "4027374da20dd1337da84d04d1eda9bd"
  },
  {
    "url": "assets/js/page-4f5eb00c.00fe0ec3.js",
    "revision": "e7098f045e23d5ddab036e02972ad506"
  },
  {
    "url": "assets/js/page-52453899.7ff1db06.js",
    "revision": "d85b8c158653de8516fc8071af00766a"
  },
  {
    "url": "assets/js/page-53a21bc2.f78dbec5.js",
    "revision": "29156743eb70d773b6703bd1b614446d"
  },
  {
    "url": "assets/js/page-548dbfdd.a7b7b960.js",
    "revision": "87ee26f18363e102788286b94233715e"
  },
  {
    "url": "assets/js/page-54cde949.d7d06d73.js",
    "revision": "0dae57c6515dca7409da1f56faecd1ba"
  },
  {
    "url": "assets/js/page-56c5add8.ed5343ff.js",
    "revision": "714554f041ea78596aec2a9ee565cef3"
  },
  {
    "url": "assets/js/page-5971d062.9bab3b8e.js",
    "revision": "8f692e755e6805b676320aea85a16def"
  },
  {
    "url": "assets/js/page-5ae76184.f837b323.js",
    "revision": "86e8d4d2f9c20d1599f6d3386e070c90"
  },
  {
    "url": "assets/js/page-5c24028f.7061b74e.js",
    "revision": "5b2bc52407340c4aa3282f4f582490bd"
  },
  {
    "url": "assets/js/page-5dade32f.d4eb1f0f.js",
    "revision": "d310caeb76b556881bf29be730797b73"
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
    "url": "assets/js/page-64c6c3f9.46fe34d7.js",
    "revision": "76b5cbf21bf8a157b2d28548e6111870"
  },
  {
    "url": "assets/js/page-68a3e126.07cb4c99.js",
    "revision": "07a8b79368c0a25afe1c59a20979cd88"
  },
  {
    "url": "assets/js/page-718e3f13.2e480734.js",
    "revision": "75e2de9f3db827c91cfb75f97d80d5ba"
  },
  {
    "url": "assets/js/page-7961fc62.22face2f.js",
    "revision": "3ed8af338edac9609749ba5cd17128c5"
  },
  {
    "url": "assets/js/page-7e22c02f.908b50ac.js",
    "revision": "8ffc5de83d91cca77ddb372efa3841f6"
  },
  {
    "url": "assets/js/page-7f4c69e4.45f22914.js",
    "revision": "829aaf35a68681f3d37f82283ecca0a2"
  },
  {
    "url": "assets/js/page-9a13860a.c4159533.js",
    "revision": "31c014cfcee9021991e449b04f5602f2"
  },
  {
    "url": "assets/js/page-9d704b70.920480f9.js",
    "revision": "4f6d8e6e90faa8125178add6015e22af"
  },
  {
    "url": "assets/js/page-a1c83fc6.277bb4d6.js",
    "revision": "34ed86dc066853d9f244e264805c21e3"
  },
  {
    "url": "assets/js/page-a649c29e.7deaf704.js",
    "revision": "4c1a80d4cb74e2c1146bbb92ef554c39"
  },
  {
    "url": "assets/js/page-b6123e24.fb6f8629.js",
    "revision": "d30388d84bb28b0a0acbcdbff2a0ded0"
  },
  {
    "url": "assets/js/page-c1e7a5fc.8de71654.js",
    "revision": "63be142e4b35a27af1ad2c8082179b01"
  },
  {
    "url": "assets/js/page-c41b383a.a8055cd2.js",
    "revision": "a908ebd91c105250110ce5733d02e688"
  },
  {
    "url": "assets/js/page-c799e3a4.9e6d3c64.js",
    "revision": "524c0849920752e9a862d5256469bb35"
  },
  {
    "url": "assets/js/page-cd03364e.42354804.js",
    "revision": "dc030cf9e662010881ee2a7cb603bd26"
  },
  {
    "url": "assets/js/page-deb70f94.2b957c36.js",
    "revision": "f2482b62ac214366976a1a2a934d8a32"
  },
  {
    "url": "assets/js/page-e63bef64.92353603.js",
    "revision": "9bfef02df4565ed396b910494f7f4555"
  },
  {
    "url": "assets/js/page-e869018c.99b6a975.js",
    "revision": "883e599deec9fd51ba441fdf5b8fb4bb"
  },
  {
    "url": "assets/js/page-e87fecf8.fdcd6398.js",
    "revision": "c1a0d27371ca2c74b910e09498d636d8"
  },
  {
    "url": "assets/js/page-fa2e9ecc.95ce5811.js",
    "revision": "9ecadfbdf336a841c5d480db74301a5b"
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
    "revision": "fe16d5189075eaacdc367bef65ddbeb0"
  },
  {
    "url": "Coding/Front-End/CSS/awesome-css.html",
    "revision": "28fb8c9bf5f874712ad40846d7a6f56d"
  },
  {
    "url": "Coding/Front-End/CSS/awesome-icons.html",
    "revision": "35e015f399ea2f6d2b633863877ff23c"
  },
  {
    "url": "Coding/Front-End/JS/Module Bundler/Webpack/awesome-webpack.html",
    "revision": "730aa8c6ef90bf65bac57bca9735bbdb"
  },
  {
    "url": "Coding/Front-End/JS/Vue/awesome-vue.html",
    "revision": "0eda895c0bfa5ffbacbaffd785a99178"
  },
  {
    "url": "Coding/日常筆記/CodeReview/code-review-memo.html",
    "revision": "409328028186a4766e0d06171d86d2cc"
  },
  {
    "url": "Coding/日常筆記/CSharp/AutoMapper-class繼承後之對應.html",
    "revision": "8ee03a0c5556aca81b362a2da639885a"
  },
  {
    "url": "Coding/日常筆記/CSharp/String-Concatenate.html",
    "revision": "5a968ec56c29cab8db817bdecd4bd36f"
  },
  {
    "url": "Coding/日常筆記/CSharp/tmp.html",
    "revision": "b706d89e93bf25561fd3c22b3ee73b0c"
  },
  {
    "url": "Coding/日常筆記/CSharp/變數命名.html",
    "revision": "ec6aa71c717012bef9b19dc5bee9ff32"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/1. 心/index.html",
    "revision": "04694bd7713ed2e3b82ad4bf412bb692"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/1. 心/TMP.html",
    "revision": "74f3067731872459ba421cdb27601f00"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/1. 心/心理戰.html",
    "revision": "da7b3071cd1126af438c276069d96ecd"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/2. 技/index.html",
    "revision": "769ecbed875a85734a3bc848b956bb1c"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/2. 技/神小跳.html",
    "revision": "27aeeb7a80f723bd3c590309ea36213c"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/2. 技/視野變換.html",
    "revision": "329ab5902083479e99c6866a5523adec"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/2. 技/走位.html",
    "revision": "863ce3b50b65d377bdfa898ef3e0db6d"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/2. 技/跳點.html",
    "revision": "631999439ff037db27c010480b1a1743"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/2. 技/預出手.html",
    "revision": "e66f645ff8911fa64c0afed28181c01b"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/3. 體/index.html",
    "revision": "2d540f33f0cef584ef9877a9347d4d0e"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/4. 群/index.html",
    "revision": "f8bb49d94160ac74972a91b42110a301"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/4. 群/卡位.html",
    "revision": "2bef604d8c3449355811c1cc29a63b2b"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/4. 群/組隊.html",
    "revision": "fbac88f807a9f4d21721d28507c48ea4"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/5. 略/index.html",
    "revision": "2496194b9a1eba070cb8633d523a9477"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/5. 略/局勢.html",
    "revision": "b437bf26cdb3f630768a6dd2a1c17c9a"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/6. 決/index.html",
    "revision": "a06efbba9edb747741a1668cc8a45321"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/index.html",
    "revision": "e737c7ae56c3f524043f916ec56521a8"
  },
  {
    "url": "Game/FEZ/2. 國戰步兵戰策略/index.html",
    "revision": "fc2860841c6d93f4e73993d11edf6aaa"
  },
  {
    "url": "Game/FEZ/3. 各職玩法/刀.html",
    "revision": "b76370d2818475e6dbb6970b781de749"
  },
  {
    "url": "Game/FEZ/3. 各職玩法/雙修.html",
    "revision": "4ee81c0b2cf8f4b8b0cbea7d55bc827b"
  },
  {
    "url": "Game/FEZ/4. 2on/index.html",
    "revision": "c122b6066a9a16b34eb24a7e17a838e7"
  },
  {
    "url": "Game/FEZ/5. 3on/index.html",
    "revision": "b7ecd1dedb5ea1dc2a3d3a6d7ebb4395"
  },
  {
    "url": "Game/FEZ/X. Theorem/HMM.html",
    "revision": "eb2b2ed19c9f7748f78b5fa0ddb2b93c"
  },
  {
    "url": "hello-vuejcblog.html",
    "revision": "b55549dc52fe3c01c711b24c00835524"
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
    "revision": "1c06f8db50423ed947267c4ddab61c0c"
  },
  {
    "url": "search/index.html",
    "revision": "b9cbf557b34e07eb8922e3d37299d21b"
  },
  {
    "url": "tag/index.html",
    "revision": "137353107d9d832633204028384222f6"
  },
  {
    "url": "VueJCBlog/Development/article/hello-vuejcblog.html",
    "revision": "2d91fff4ec50cbb07017f4702dd18be5"
  },
  {
    "url": "VueJCBlog/Development/article/test/test-comment.html",
    "revision": "034312c39f83750e8973cae8f323ed8a"
  },
  {
    "url": "VueJCBlog/Development/article/test/test-lazy-load.html",
    "revision": "9813febea6bfaa90f971ea55ebf32c18"
  },
  {
    "url": "VueJCBlog/Development/article/test/test-lazy-load2.html",
    "revision": "f2b544a9dae6768727fdcc92c5800e2a"
  },
  {
    "url": "VueJCBlog/Feature/about-page.html",
    "revision": "c01b9a93ed82d399817b8f22f31d8e85"
  },
  {
    "url": "VueJCBlog/Feature/archive-page.html",
    "revision": "422b296856dbcd9c0cd17fc5253db1c9"
  },
  {
    "url": "VueJCBlog/Feature/category-page.html",
    "revision": "0dd9f4372b4da8c7a8fce3e36cef67a6"
  },
  {
    "url": "VueJCBlog/Feature/common-feature.html",
    "revision": "b16f0ca64778c5bd78433dac5c5f1db7"
  },
  {
    "url": "VueJCBlog/Feature/index-page.html",
    "revision": "19e553ed1d422a474fdc643867ac5654"
  },
  {
    "url": "VueJCBlog/Feature/index.html",
    "revision": "16fdb2a185de8625f60fa5f3053188fa"
  },
  {
    "url": "VueJCBlog/Feature/post-page.html",
    "revision": "30668ca22803502967c72a3b6ae7673d"
  },
  {
    "url": "VueJCBlog/Feature/search-page.html",
    "revision": "492e6b2d27e7308c2e0e8c3a4390d56a"
  },
  {
    "url": "VueJCBlog/Feature/sidebar-feature.html",
    "revision": "1762fe23981ceaea224b5bdb94b77cfe"
  },
  {
    "url": "VueJCBlog/Feature/tag-page.html",
    "revision": "beb350567c0783ef28e9321e9893854e"
  },
  {
    "url": "VueJCBlog/index.html",
    "revision": "e3263cf84c4f946217df5bd05ffa278f"
  },
  {
    "url": "VueJCBlog/Installation.html",
    "revision": "688933c63c9b9dcd50eede423e679443"
  },
  {
    "url": "VueJCBlog/Quick-Start.html",
    "revision": "c2e0f3436e9455fdf6c215867e00b74f"
  },
  {
    "url": "VueJCBlog/Usage/Container/index.html",
    "revision": "71628980af63cffdc40e68dc0e77c34b"
  },
  {
    "url": "VueJCBlog/Usage/front-matter.html",
    "revision": "e2e31e6ae48ea3267a1f744680527214"
  },
  {
    "url": "VueJCBlog/Usage/index.html",
    "revision": "c1aa86e92f4df4518aa5b2530a9484cd"
  },
  {
    "url": "VueJCBlog/Usage/Markdown/advanced.html",
    "revision": "3ed6c277e39dfda2d0e578cb2f55c61f"
  },
  {
    "url": "VueJCBlog/Usage/Markdown/basic.html",
    "revision": "df642281dcabde14a3d978f44cfc5a13"
  },
  {
    "url": "VueJCBlog/Usage/Markdown/flow-chart.html",
    "revision": "1bf391c4fcc33fa878c4b5f8fa1c4af3"
  },
  {
    "url": "VueJCBlog/Usage/Markdown/index.html",
    "revision": "148c7778f112e1b07c601487b8f85ebf"
  },
  {
    "url": "VueJCBlog/Usage/Markdown/link.html",
    "revision": "853f36e89542331292931ff0d445014e"
  },
  {
    "url": "VueJCBlog/Usage/Slide.html",
    "revision": "da91a8e0ca1b9cb0e0fb39619817f58f"
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
