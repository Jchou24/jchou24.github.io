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
    "revision": "54847253a3269c4a84a74625bc80fa24"
  },
  {
    "url": "About/index.html",
    "revision": "f10d85a16edfea97c2d0df2941d0bfcd"
  },
  {
    "url": "archive/index.html",
    "revision": "de0cb75b7ec30dde37463f958c38cc86"
  },
  {
    "url": "assets/css/0.styles.3eebfc79.css",
    "revision": "adce94b74021e237118674acef537035"
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
    "url": "assets/js/1.059d978d.js",
    "revision": "a3e1be52485783774291264f88efe4d4"
  },
  {
    "url": "assets/js/2.4ff7a426.js",
    "revision": "c3d9e7f5ae5242e0b153bee949d23be2"
  },
  {
    "url": "assets/js/3.71bbf884.js",
    "revision": "9c3c4763bc8cd43b4c43e323305283e9"
  },
  {
    "url": "assets/js/4.40307fc9.js",
    "revision": "ab0b4cf18debce56e7cfc2b3c61d4874"
  },
  {
    "url": "assets/js/5.d0e8d5d8.js",
    "revision": "a591a84a61c181ade2882667131eb794"
  },
  {
    "url": "assets/js/58.0266d091.js",
    "revision": "01f233b0e6a4b311d8c172cc7c796b24"
  },
  {
    "url": "assets/js/59.9e5727de.js",
    "revision": "f046c894f5e1b5d05867696b1b48feec"
  },
  {
    "url": "assets/js/6.7f197f16.js",
    "revision": "9b0a80cef1a8434059b0907d72c04f13"
  },
  {
    "url": "assets/js/60.5af7ad80.js",
    "revision": "5abf5e8f9ea576d7a9f7eae77cfcf2d0"
  },
  {
    "url": "assets/js/61.fba8009a.js",
    "revision": "94a0571c6daff90981b9c5361bb14129"
  },
  {
    "url": "assets/js/62.538cf14f.js",
    "revision": "3347b9093e19420c5e1fa469edfe7f18"
  },
  {
    "url": "assets/js/63.eef2cac1.js",
    "revision": "670aa6ffa1ec5438c4f53f2dd9dd6bc7"
  },
  {
    "url": "assets/js/64.52184962.js",
    "revision": "6ea9f9863439760c80a682be083eb16f"
  },
  {
    "url": "assets/js/65.227ec0e9.js",
    "revision": "f7dd99fd0f716757f5a5d22fee1e7faa"
  },
  {
    "url": "assets/js/66.6847ad3e.js",
    "revision": "81165494d72827a8da0d352ad90f52d1"
  },
  {
    "url": "assets/js/67.f677cd2d.js",
    "revision": "71c3a3feedabf3f3bc57820ee377c7d4"
  },
  {
    "url": "assets/js/68.93010c3b.js",
    "revision": "df94629b2d5d7bdbccae9bb1c2812188"
  },
  {
    "url": "assets/js/69.fbefc048.js",
    "revision": "8f556b898936db49dbef35a132589f5a"
  },
  {
    "url": "assets/js/70.c73a1e67.js",
    "revision": "922bfc57c3cdf97a31454a4e4964b2ef"
  },
  {
    "url": "assets/js/71.c476b754.js",
    "revision": "f4eb45433d2e98148afdb1541bade900"
  },
  {
    "url": "assets/js/72.41ea326e.js",
    "revision": "e1bea7a3c01b74f0285faa434448305e"
  },
  {
    "url": "assets/js/73.ce300677.js",
    "revision": "a18dbf0051c67267db149e9f2fbebb83"
  },
  {
    "url": "assets/js/74.013009d2.js",
    "revision": "a4071e7b950756aea6b56747e28bf3ec"
  },
  {
    "url": "assets/js/75.fe04acdd.js",
    "revision": "895e4672d6107de510a30800e03b4853"
  },
  {
    "url": "assets/js/76.4f26416b.js",
    "revision": "ccabd48407ac35c0c40358fa246924ea"
  },
  {
    "url": "assets/js/77.2eb69d41.js",
    "revision": "1e5eb116aa82e83e5ab8092a3465ac05"
  },
  {
    "url": "assets/js/78.ab0e52af.js",
    "revision": "3d2b3be311442e3d5f411ef283b5fca1"
  },
  {
    "url": "assets/js/79.3ba155ef.js",
    "revision": "18c5cf4878c17bce2f688946f5204954"
  },
  {
    "url": "assets/js/80.9f6bc3da.js",
    "revision": "1ed7ce797ef42394bba01ab55d49cd23"
  },
  {
    "url": "assets/js/app.fb016921.js",
    "revision": "53fe24fc965465d7664eccee1d390e2b"
  },
  {
    "url": "assets/js/layout-BaseLayout.4eb3a9cd.js",
    "revision": "9e0794656db33584d18536c35c70884a"
  },
  {
    "url": "assets/js/layout-Layout.f6db9b38.js",
    "revision": "1d8927e619a13b2d3930b51213ffe791"
  },
  {
    "url": "assets/js/layout-NotFound.9acc6f7f.js",
    "revision": "9208dc227e552196aaa112b488da9446"
  },
  {
    "url": "assets/js/page-01b1365c.7d99d1a6.js",
    "revision": "65fb00dc1244d03c309468f0c91c5ac2"
  },
  {
    "url": "assets/js/page-03ff99e4.a99aecf5.js",
    "revision": "1f044cd30e7349e9f5014c1b3d4326d2"
  },
  {
    "url": "assets/js/page-0815fe43.aeaf28be.js",
    "revision": "3a424d9d1b393510c680a7a99e9c6e94"
  },
  {
    "url": "assets/js/page-0994254e.9d4b1ef1.js",
    "revision": "25092761b924894c0a8ed3c367ab5146"
  },
  {
    "url": "assets/js/page-09cfa20f.7a825dd2.js",
    "revision": "ae107ed7809fe19cb1ff82b42f5c3f3c"
  },
  {
    "url": "assets/js/page-0bd5cd98.1b033b1f.js",
    "revision": "222883703121e56764be797fd63b7cb8"
  },
  {
    "url": "assets/js/page-0ca8b05c.4dc9ec56.js",
    "revision": "40613b626cc52a511406978d193aa08e"
  },
  {
    "url": "assets/js/page-130de14f.a6928581.js",
    "revision": "e44bc7ed080366f46afb11f6caec14f5"
  },
  {
    "url": "assets/js/page-17119ea4.cf290718.js",
    "revision": "b434b59efaa7e5fb56bda3d9fe176c2c"
  },
  {
    "url": "assets/js/page-1efb5c62.56dcc98e.js",
    "revision": "268abc3c088a2daa092c00618d271be6"
  },
  {
    "url": "assets/js/page-2ba07fce.655bb3ed.js",
    "revision": "0227f56808d36d2371101dc8c283f068"
  },
  {
    "url": "assets/js/page-2da25f49.46574988.js",
    "revision": "cb18f2a7a3d6723a17c6c02b6daf1136"
  },
  {
    "url": "assets/js/page-2f77601c.fd5ed01a.js",
    "revision": "07030f5d544b31f2252169852934e52d"
  },
  {
    "url": "assets/js/page-36058925.7ffb094b.js",
    "revision": "227e0a7910435950e1a25d57fe511e6a"
  },
  {
    "url": "assets/js/page-3721e5cf.35bd223f.js",
    "revision": "949921000e75a0d9bf10339f42a4ba78"
  },
  {
    "url": "assets/js/page-38e94d3e.3dc18b61.js",
    "revision": "d95d08204004dc9bf66c94fc059f7099"
  },
  {
    "url": "assets/js/page-39d006b5.ddd21aa6.js",
    "revision": "ac50460f6e56663103e4ef80cd55e476"
  },
  {
    "url": "assets/js/page-4048f79b.cd3edf66.js",
    "revision": "d7cb5f059982023966feb0bed4fa2382"
  },
  {
    "url": "assets/js/page-409d673b.867a8cec.js",
    "revision": "830224d42d7294c1ec10a6743c6d4122"
  },
  {
    "url": "assets/js/page-42a0ea7c.8d850e29.js",
    "revision": "53fa3d4372d7b4b397ba5ef2f26956c5"
  },
  {
    "url": "assets/js/page-4773a0fc.4f0556d4.js",
    "revision": "1f7edb6566dc057e8e0dabc043b41f08"
  },
  {
    "url": "assets/js/page-47ec31ef.00dc7fcf.js",
    "revision": "a973e641625380bc2b4c21d486c0172d"
  },
  {
    "url": "assets/js/page-494b7749.3fa7c52c.js",
    "revision": "1b7b6db8bd294ed1b7fc91d0070f8944"
  },
  {
    "url": "assets/js/page-4e40ef0e.b625ec86.js",
    "revision": "9b30f097b9a06b4eb9660552cdb98f60"
  },
  {
    "url": "assets/js/page-52453899.0a447408.js",
    "revision": "390672796fdb557a5cc617376360f792"
  },
  {
    "url": "assets/js/page-56c5add8.ecedf110.js",
    "revision": "3a9155104ea5e0cbb9a7c588d44bc3d9"
  },
  {
    "url": "assets/js/page-5971d062.747c4661.js",
    "revision": "38310a88868e85bcea13ec7e7697dde5"
  },
  {
    "url": "assets/js/page-5c24028f.c8027fb1.js",
    "revision": "10e5dc978cb256bf7a60b9e0fe6b0be5"
  },
  {
    "url": "assets/js/page-5dade32f.585d63fd.js",
    "revision": "adb3e457ed2cec288beb8a652e73574a"
  },
  {
    "url": "assets/js/page-62c3f84a.a2c3f4d5.js",
    "revision": "89803d1d74aefba01b46543ec0929fd7"
  },
  {
    "url": "assets/js/page-631831dc.0e775077.js",
    "revision": "04f401467bac2d1d66f3533409c15bdf"
  },
  {
    "url": "assets/js/page-64c6c3f9.abeb40bc.js",
    "revision": "24c48fcd1edcb7f04e7da16c9c68635b"
  },
  {
    "url": "assets/js/page-68a3e126.689c0891.js",
    "revision": "060d808c25f67c7ae3871b56d9d0b4b8"
  },
  {
    "url": "assets/js/page-718e3f13.aba7488c.js",
    "revision": "f4b979fdbab29a1b17d2c348bc744223"
  },
  {
    "url": "assets/js/page-7961fc62.f2173413.js",
    "revision": "aaead7d750aaa9725dc603c1a9500429"
  },
  {
    "url": "assets/js/page-7e22c02f.fdb64b3d.js",
    "revision": "365ce275e49ca6233be5205b0e43a587"
  },
  {
    "url": "assets/js/page-9d704b70.05f99e6b.js",
    "revision": "4ce63e51eff5573b3678d26c485b6268"
  },
  {
    "url": "assets/js/page-a1c83fc6.fc821298.js",
    "revision": "117949935e4c2643ef6ea59c56717219"
  },
  {
    "url": "assets/js/page-b6123e24.6f9b32ce.js",
    "revision": "f881c52b625a478f9d5106b85e859fbf"
  },
  {
    "url": "assets/js/page-c1e7a5fc.bea4ee8d.js",
    "revision": "cea646c72796ea0c098c0cad9ba30d4c"
  },
  {
    "url": "assets/js/page-c41b383a.c2f14e44.js",
    "revision": "b6e47ebe6d2904db6b1717c03b770b6b"
  },
  {
    "url": "assets/js/page-cd03364e.843b8286.js",
    "revision": "7b4b3e18eaae9e40abb1af673d1a0c61"
  },
  {
    "url": "assets/js/page-deb70f94.4ddedc93.js",
    "revision": "cad55856800531440cdeed71f5fd15eb"
  },
  {
    "url": "assets/js/page-e869018c.ab1c6711.js",
    "revision": "83c124ff147dded0003f32369a2eb9d6"
  },
  {
    "url": "assets/js/page-fa2e9ecc.980e87de.js",
    "revision": "cd27270ed8a674e6c66e8e1fe1793a47"
  },
  {
    "url": "assets/js/vendors~flowchart.200baa04.js",
    "revision": "d33147cbe957cfa452b73a03d291b6b0"
  },
  {
    "url": "assets/js/vendors~layout-Layout.a3f0383e.js",
    "revision": "e3418205158f07a5d3a4cfee677ccab9"
  },
  {
    "url": "category/index.html",
    "revision": "6a2ab40f2753f4ffe675cfbf601d0920"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/1. 心/index.html",
    "revision": "e1df2acb64cb7a3aa3ade50b4018d76b"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/1. 心/心理戰.html",
    "revision": "00110e8fb443c0f40dfa5665943b99b6"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/2. 技/index.html",
    "revision": "11c64a0522e5e56a32d8baf6d334e408"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/2. 技/神小跳.html",
    "revision": "d92e603b34213cbb9dc4297ca51efeb9"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/2. 技/預出手.html",
    "revision": "761c4e1c11e59e7dd4e5d898079e4230"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/3. 體/index.html",
    "revision": "aa3a86aaa7143073d239fc48f5cc6c17"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/3. 體/走位.html",
    "revision": "417114ef43a365eb6c58e56c4a5a81b6"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/4. 群/index.html",
    "revision": "b85a7f91678d9eb2140c7e2abff6b9c0"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/4. 群/組隊.html",
    "revision": "d5615fd7206b041359ea1e6662cee968"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/5. 略/index.html",
    "revision": "0912c0717605d3cc1d6933419d6a274c"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/5. 略/局勢.html",
    "revision": "8aa2188b6c75cfef5e97c68679b6ebf0"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/6. 決/index.html",
    "revision": "b08692a39b64d7ebe4d33ec90b37c86a"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/index.html",
    "revision": "3abc0d95c4cad1f60078cb935a1aaa61"
  },
  {
    "url": "Game/FEZ/2. 國戰步兵戰策略/index.html",
    "revision": "2dbf41ef71475ea1c3e4a436ca6ede83"
  },
  {
    "url": "Game/FEZ/3. 各職玩法/雙修.html",
    "revision": "dbe8db0532df3e493e0ae3614ce36325"
  },
  {
    "url": "Game/FEZ/4. 2on/index.html",
    "revision": "3925902a0025850217485e232ec9a1e9"
  },
  {
    "url": "Game/FEZ/X. Theorem/HMM.html",
    "revision": "6f54b97401e7f0c478f25981a717606b"
  },
  {
    "url": "hello-vuejcblog.html",
    "revision": "baef6485da33c95598ab5b97e3fce5df"
  },
  {
    "url": "icon.png",
    "revision": "a0b370e0cdc4fb660546c5ecc4c7da20"
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
    "revision": "6510acbdb17f655562af4fe47929b4c3"
  },
  {
    "url": "search/index.html",
    "revision": "9bc989d1dad5c73a790c66995811c4fd"
  },
  {
    "url": "tag/index.html",
    "revision": "99a74e9bcb3bc4da2661060256d76243"
  },
  {
    "url": "VueJCBlog/Development/article/hello-vuejcblog.html",
    "revision": "189630ce42324196d30efee2fd745cae"
  },
  {
    "url": "VueJCBlog/Development/article/test/test-comment.html",
    "revision": "78e800fb1d8ded01e816c5c5fcd7b138"
  },
  {
    "url": "VueJCBlog/Development/article/test/test-lazy-load.html",
    "revision": "4da9dae0d40c4654b1bef743c5c459a0"
  },
  {
    "url": "VueJCBlog/Development/article/test/test-lazy-load2.html",
    "revision": "26fd24525ddd4bc98abf5efe084096a0"
  },
  {
    "url": "VueJCBlog/Feature/about-page.html",
    "revision": "7c6414c04935d258212e274fa32f4fbe"
  },
  {
    "url": "VueJCBlog/Feature/archive-page.html",
    "revision": "04ea09db1fbc8e9a84d84f9ecc6d0883"
  },
  {
    "url": "VueJCBlog/Feature/category-page.html",
    "revision": "5bd4c744122dc2ae709e19f511bf95a0"
  },
  {
    "url": "VueJCBlog/Feature/common-feature.html",
    "revision": "49066772689f4688aa271cb995ed8fb5"
  },
  {
    "url": "VueJCBlog/Feature/index-page.html",
    "revision": "e3c83fe48a9baaeab8914db95ffc7cff"
  },
  {
    "url": "VueJCBlog/Feature/index.html",
    "revision": "a75a2a9325ec0f418701a241e78ddad8"
  },
  {
    "url": "VueJCBlog/Feature/post-page.html",
    "revision": "9e3ba472d13a58ca58d537d066cd7254"
  },
  {
    "url": "VueJCBlog/Feature/search-page.html",
    "revision": "bcdb8ff83ce2bbfc0234d68e6e215cda"
  },
  {
    "url": "VueJCBlog/Feature/sidebar-feature.html",
    "revision": "a1fa0e904a3ffc2f6602e9a599fe30c5"
  },
  {
    "url": "VueJCBlog/Feature/tag-page.html",
    "revision": "c966f52b8da612230c742f2ff10d1d08"
  },
  {
    "url": "VueJCBlog/index.html",
    "revision": "1126bf5570095452587c98b3fe69c202"
  },
  {
    "url": "VueJCBlog/Installation.html",
    "revision": "42a3386fd4002883194282bdbd1464bb"
  },
  {
    "url": "VueJCBlog/Quick-Start.html",
    "revision": "6471fb5828e1150ac7de4916f09e7574"
  },
  {
    "url": "VueJCBlog/Usage/Container/index.html",
    "revision": "acf34cb4c93db958f5344b8a32cf9d1d"
  },
  {
    "url": "VueJCBlog/Usage/front-matter.html",
    "revision": "6724f63add0ec9f680ce3ceb95639b5a"
  },
  {
    "url": "VueJCBlog/Usage/index.html",
    "revision": "c16993700dc5f70d2f651be5516d97d7"
  },
  {
    "url": "VueJCBlog/Usage/Markdown/advanced.html",
    "revision": "138076019d57ce488233d98cdebec41d"
  },
  {
    "url": "VueJCBlog/Usage/Markdown/basic.html",
    "revision": "3f6bb46b421b6ab6933d20f43f02c56d"
  },
  {
    "url": "VueJCBlog/Usage/Markdown/flow-chart.html",
    "revision": "585fead357d5f95e45e3d3233f92a119"
  },
  {
    "url": "VueJCBlog/Usage/Markdown/index.html",
    "revision": "e933b03aecb4991761b38a018a377d70"
  },
  {
    "url": "VueJCBlog/Usage/Markdown/link.html",
    "revision": "326dcbb728f45118b8945e68feb2990e"
  },
  {
    "url": "VueJCBlog/Usage/Slide.html",
    "revision": "9ecccee55ae37342e8b0aa051146076b"
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
