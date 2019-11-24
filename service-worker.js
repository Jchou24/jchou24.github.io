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
    "revision": "fd12aac77f8de6ff14d6cb1da0527d0d"
  },
  {
    "url": "About/index.html",
    "revision": "50d26312f9a2a1e2383c723f3bf2760e"
  },
  {
    "url": "archive/index.html",
    "revision": "d5d6e2cc81b84af25ac8def8f041d813"
  },
  {
    "url": "assets/css/0.styles.5e45c36b.css",
    "revision": "cc85ba734f53636d882d1425f2312520"
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
    "url": "assets/js/74.38c48d2a.js",
    "revision": "c6e7bddaf8a877702b279931bf14d317"
  },
  {
    "url": "assets/js/75.7b894506.js",
    "revision": "4e6e878205251a298caa8374800773f1"
  },
  {
    "url": "assets/js/76.1f3570cb.js",
    "revision": "5b7ae5754d88a336a3c0fbb422b0e8f4"
  },
  {
    "url": "assets/js/77.5f5e6c42.js",
    "revision": "1bd2035466071394c633546c60189b19"
  },
  {
    "url": "assets/js/78.c5fd3f8c.js",
    "revision": "a5a282a16715972f96422dadae2d107f"
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
    "url": "assets/js/81.7fcc11a0.js",
    "revision": "56e99ede6bf075ea136fea97654328c7"
  },
  {
    "url": "assets/js/82.8b1a5ee2.js",
    "revision": "fd55160fa5eeb37a5440f63b7ff9c40b"
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
    "url": "assets/js/85.42677d91.js",
    "revision": "51d131098004389ed7ecce5dbd9be0c6"
  },
  {
    "url": "assets/js/86.fd74cd04.js",
    "revision": "7499e938213a3b3488b1c70e43f43c4d"
  },
  {
    "url": "assets/js/87.36108813.js",
    "revision": "d0a42421f058c997e1a4557f0ab22830"
  },
  {
    "url": "assets/js/88.54d1f220.js",
    "revision": "b8e9d4c9a597f92ecb003f7c4cb5340d"
  },
  {
    "url": "assets/js/89.824bb63a.js",
    "revision": "a1a9945e6bbe062f50c807e295a24e44"
  },
  {
    "url": "assets/js/90.4197c84c.js",
    "revision": "9b4d4d1eb8c479a5cc79149e39c179a9"
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
    "url": "assets/js/app.44d3f80d.js",
    "revision": "3f5b40590d631ac29eeaf24fe2cda91e"
  },
  {
    "url": "assets/js/layout-BaseLayout.bf73557e.js",
    "revision": "b9f6b2c3fef5a8af9bfb653415a9b959"
  },
  {
    "url": "assets/js/layout-Layout.4c12b370.js",
    "revision": "9034aa3a7f27ff599bb8ad3a96cd488b"
  },
  {
    "url": "assets/js/layout-NotFound.ca23e2f7.js",
    "revision": "0b7d2ed0f7c1b9cd1e179862789aa988"
  },
  {
    "url": "assets/js/page-01b1365c.c1c2975c.js",
    "revision": "8df9053a31eaddd3471406f0b9f3004d"
  },
  {
    "url": "assets/js/page-03ff99e4.a11df5dc.js",
    "revision": "070365de63da4e1836f6f84101989ecd"
  },
  {
    "url": "assets/js/page-0762cb2c.da9c1274.js",
    "revision": "56bcc2cf6c5ba5bc9bbece3aefba2c26"
  },
  {
    "url": "assets/js/page-0815fe43.6c658623.js",
    "revision": "f5efacba9bd6e634545035d7801631a8"
  },
  {
    "url": "assets/js/page-0994254e.c9dd8230.js",
    "revision": "9c85e5452ca6747235904ed05fd504c1"
  },
  {
    "url": "assets/js/page-09cfa20f.a76042d7.js",
    "revision": "98de787d9fa7fb851178a55feec7ce8c"
  },
  {
    "url": "assets/js/page-0bd5cd98.15ec0ae3.js",
    "revision": "95065b31f1631336f2c854eab8c0f19e"
  },
  {
    "url": "assets/js/page-0ca8b05c.7b77d609.js",
    "revision": "f311c29f4c013055915abd1c1ff144f4"
  },
  {
    "url": "assets/js/page-130de14f.31e3618d.js",
    "revision": "d33b5f6634c2d79966f9ad5607f7b8f9"
  },
  {
    "url": "assets/js/page-17916170.9590a2a5.js",
    "revision": "afdbe20caaeba7ecc0468f0d43008992"
  },
  {
    "url": "assets/js/page-1efb5c62.040beae0.js",
    "revision": "b9ae7360436d47389dc3370b14c1a7bf"
  },
  {
    "url": "assets/js/page-2282a6e0.e3fff1ae.js",
    "revision": "33911faa4ea9ab39ffea2f079e3a4d1c"
  },
  {
    "url": "assets/js/page-2ba07fce.f83d1553.js",
    "revision": "94cb6cb86f44f767541521b4b2846144"
  },
  {
    "url": "assets/js/page-2da25f49.6b4517a5.js",
    "revision": "8437c4ce1dc66f1b0ab4468efec57949"
  },
  {
    "url": "assets/js/page-2f77601c.0bef18ba.js",
    "revision": "2d14b58f805cc7aa147a00326d9171a5"
  },
  {
    "url": "assets/js/page-36058925.3e352df0.js",
    "revision": "57ef41f131742e6753e0499047d773c6"
  },
  {
    "url": "assets/js/page-3721e5cf.842334a8.js",
    "revision": "1c3aa743426f79a4c0f6bd0b739fff84"
  },
  {
    "url": "assets/js/page-38e94d3e.fbfdfaf9.js",
    "revision": "b75e889d6caddd5f4fb493c105a8ead1"
  },
  {
    "url": "assets/js/page-39d006b5.1f3f2c16.js",
    "revision": "5a9e95c78cf5d8dc596e276c68c55498"
  },
  {
    "url": "assets/js/page-3b1778e4.b59e3812.js",
    "revision": "45eb8fe47a15ff9d96145dca1670d196"
  },
  {
    "url": "assets/js/page-4048f79b.b24e5194.js",
    "revision": "548a5b0aafac9cb4943b69ad4dd8b608"
  },
  {
    "url": "assets/js/page-409d673b.451788cd.js",
    "revision": "019dfe17b14ca0fea38b322f85999828"
  },
  {
    "url": "assets/js/page-42a0ea7c.b11a347c.js",
    "revision": "09c2dddf5cf77d4382a77e0f1a7b36e3"
  },
  {
    "url": "assets/js/page-437f73dc.745187a0.js",
    "revision": "59ffce398ae14771d7c15bed71c7670d"
  },
  {
    "url": "assets/js/page-4773a0fc.0a179dc0.js",
    "revision": "d3346c397955ece47c8863fddcda9894"
  },
  {
    "url": "assets/js/page-47ec31ef.d08f5382.js",
    "revision": "469c9a3c74cc28247596c9bdf6da3e2f"
  },
  {
    "url": "assets/js/page-494b7749.9e6e8589.js",
    "revision": "c4399a96e639288ca4ab89fea8e6dc6b"
  },
  {
    "url": "assets/js/page-4e40ef0e.b1e4e5d4.js",
    "revision": "4b353c6a25ac87a5e596e03d7a23246d"
  },
  {
    "url": "assets/js/page-4f5eb00c.7d4cfd9c.js",
    "revision": "30f62975a2798d830e9bef636e8e7394"
  },
  {
    "url": "assets/js/page-52453899.7ff1db06.js",
    "revision": "d85b8c158653de8516fc8071af00766a"
  },
  {
    "url": "assets/js/page-53a21bc2.d11dc516.js",
    "revision": "f323e28ad04928b57a4aacbd82ca7324"
  },
  {
    "url": "assets/js/page-548dbfdd.1b1ee058.js",
    "revision": "ed504d0a1248d5472a5bcccbd6b81e55"
  },
  {
    "url": "assets/js/page-54cde949.ee0e4ad2.js",
    "revision": "8e03d01859c2ec23fa57be519e143f27"
  },
  {
    "url": "assets/js/page-56c5add8.6bc9d786.js",
    "revision": "1aaae00b7b6c6557a39d4ad32bef5291"
  },
  {
    "url": "assets/js/page-5971d062.9bab3b8e.js",
    "revision": "8f692e755e6805b676320aea85a16def"
  },
  {
    "url": "assets/js/page-5ae76184.b443b38b.js",
    "revision": "6e3699f4ce9c4af4eec041254a951470"
  },
  {
    "url": "assets/js/page-5c24028f.a798c5bc.js",
    "revision": "fe9f8f99d9a968f6752c631b93f7bffa"
  },
  {
    "url": "assets/js/page-5dade32f.d4eb1f0f.js",
    "revision": "d310caeb76b556881bf29be730797b73"
  },
  {
    "url": "assets/js/page-62c3f84a.3dda70e9.js",
    "revision": "4d147f3c87cfe2655c6a8c2f739b5612"
  },
  {
    "url": "assets/js/page-631831dc.229849f8.js",
    "revision": "2ffe82038ddef09e3c1fa58cd53843f2"
  },
  {
    "url": "assets/js/page-64c6c3f9.aeaaf75f.js",
    "revision": "9c6ff119403a68250889e02299aba804"
  },
  {
    "url": "assets/js/page-68a3e126.c92275c0.js",
    "revision": "418f70518a283f27c55679417315582e"
  },
  {
    "url": "assets/js/page-718e3f13.389eebf8.js",
    "revision": "99abb7a5d89fa242effb92e68cdfee28"
  },
  {
    "url": "assets/js/page-7961fc62.22face2f.js",
    "revision": "3ed8af338edac9609749ba5cd17128c5"
  },
  {
    "url": "assets/js/page-7e22c02f.31b4777c.js",
    "revision": "e1ebb0cc16e6a17e35f911e416a681c2"
  },
  {
    "url": "assets/js/page-7f4c69e4.3f96a1ad.js",
    "revision": "bc9bb9f78e78108c19b1d76850f9750f"
  },
  {
    "url": "assets/js/page-9a13860a.af73ca33.js",
    "revision": "e69d7888ffee391288f22f615091f7db"
  },
  {
    "url": "assets/js/page-9d704b70.b832a867.js",
    "revision": "b18ceaa85b9477efd78166c1fc4534b9"
  },
  {
    "url": "assets/js/page-a1c83fc6.1a81bc63.js",
    "revision": "995d1cbde8b5dcf5216693545876da7e"
  },
  {
    "url": "assets/js/page-a649c29e.e8e329ae.js",
    "revision": "15b790955e3990aa285fdc1e922057c3"
  },
  {
    "url": "assets/js/page-b6123e24.dbf983b3.js",
    "revision": "38e6213f32d1f03a7af241d06a82ddaf"
  },
  {
    "url": "assets/js/page-c1e7a5fc.8de71654.js",
    "revision": "63be142e4b35a27af1ad2c8082179b01"
  },
  {
    "url": "assets/js/page-c41b383a.f1701a33.js",
    "revision": "f6d51ce2635388e3efd3ab4349902160"
  },
  {
    "url": "assets/js/page-c799e3a4.5b6f8a59.js",
    "revision": "c36e5f9f913b868c8636291447e79fd5"
  },
  {
    "url": "assets/js/page-cd03364e.2249de68.js",
    "revision": "a3f9ab53516de3c5b1e2d74610eee43c"
  },
  {
    "url": "assets/js/page-deb70f94.2b957c36.js",
    "revision": "f2482b62ac214366976a1a2a934d8a32"
  },
  {
    "url": "assets/js/page-e63bef64.26df45a9.js",
    "revision": "0bf28d3522e8fd8a02489d3c0d9965b7"
  },
  {
    "url": "assets/js/page-e869018c.7ccde82b.js",
    "revision": "a1725000e092e73d3704ae353393721d"
  },
  {
    "url": "assets/js/page-e87fecf8.6a5f3212.js",
    "revision": "d8d70b23e7923bd79d53316005f87ac6"
  },
  {
    "url": "assets/js/page-fa2e9ecc.39bb84c6.js",
    "revision": "86d171e3382b2f899d00599d53e664f1"
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
    "revision": "9471c30df6242ac146b9b929728d75e9"
  },
  {
    "url": "Coding/Front-End/CSS/awesome-css.html",
    "revision": "3e495a934c4bc2e952c765e1e9a6711c"
  },
  {
    "url": "Coding/Front-End/CSS/awesome-icons.html",
    "revision": "335b731434f5eb0f4073aa64ea0323bd"
  },
  {
    "url": "Coding/Front-End/JS/Module Bundler/Webpack/awesome-webpack.html",
    "revision": "f599b63db0b7a74ef5b93e2d47e5b061"
  },
  {
    "url": "Coding/Front-End/JS/Vue/awesome-vue.html",
    "revision": "6f2d5aeff7e9126ffcd2f9e6d018a2c5"
  },
  {
    "url": "Coding/日常筆記/CodeReview/code-review-memo.html",
    "revision": "36ea73e2dbf6b6565c1ea9e01a377aa2"
  },
  {
    "url": "Coding/日常筆記/CSharp/AutoMapper-class繼承後之對應.html",
    "revision": "aeccad1776ebbb0c3bb0167f6e77754c"
  },
  {
    "url": "Coding/日常筆記/CSharp/String-Concatenate.html",
    "revision": "750c9dba50831cc423dfcfbd0ac7f2d2"
  },
  {
    "url": "Coding/日常筆記/CSharp/tmp.html",
    "revision": "5ec02c961f6a230682dad823d913bb6e"
  },
  {
    "url": "Coding/日常筆記/CSharp/變數命名.html",
    "revision": "389727d6a3cb75b593be930188f4843a"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/1. 心/index.html",
    "revision": "7fe0a81e54efd8bcca7bf7e9b45fdfc2"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/1. 心/TMP.html",
    "revision": "b52063d788031ec8f79b6ed26a9b8e62"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/1. 心/心理戰.html",
    "revision": "978eb38aa912c876e0ee3f2ef602521f"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/2. 技/index.html",
    "revision": "9bf8eff465d37524e83c8ebcf8c1e304"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/2. 技/神小跳.html",
    "revision": "e2becc4b3272eb10d0e04652a01db6cb"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/2. 技/視野變換.html",
    "revision": "8ea5e201331b487db9e4be3ba06c950e"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/2. 技/走位.html",
    "revision": "c7a80c7b26ddb7ba00af7b836867d9d7"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/2. 技/跳點.html",
    "revision": "269f1747e1abe9efeb51b04f65a3eec5"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/2. 技/預出手.html",
    "revision": "f23bd665a76c6b6f1fc073928213e67f"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/3. 體/index.html",
    "revision": "6acfcb3f81a548454f0b2feaa693661f"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/4. 群/index.html",
    "revision": "1175d1c1c2e68fd83ef81c56edaa7973"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/4. 群/卡位.html",
    "revision": "7061aafe23021595537a30af6b3ba832"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/4. 群/組隊.html",
    "revision": "f38fe41f630f5edd52cb523fb4aab78c"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/5. 略/index.html",
    "revision": "843d45109f848955344e267007ed4b35"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/5. 略/局勢.html",
    "revision": "443088e4850de381a3d0069ffcd670a0"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/6. 決/index.html",
    "revision": "a284fef7333b140e691b4d8b5fb2e3a7"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/index.html",
    "revision": "a2b7eb35c349f31a624e23415d8310b8"
  },
  {
    "url": "Game/FEZ/2. 國戰步兵戰策略/index.html",
    "revision": "cff310d1f7d11539a63baa7ebbce98f4"
  },
  {
    "url": "Game/FEZ/3. 各職玩法/刀.html",
    "revision": "002fb311d15790f452f92dbf1c6fe46e"
  },
  {
    "url": "Game/FEZ/3. 各職玩法/雙修.html",
    "revision": "9597da2236b0e368d42e74c748db133e"
  },
  {
    "url": "Game/FEZ/4. 2on/index.html",
    "revision": "8e92173dabbbd7b13f3fb89e99dbc1c6"
  },
  {
    "url": "Game/FEZ/5. 3on/index.html",
    "revision": "2b355e7efd5ef56108956eaffbfb04c3"
  },
  {
    "url": "Game/FEZ/X. Theorem/HMM.html",
    "revision": "d94c28f89618c42c76fc12084a07a996"
  },
  {
    "url": "hello-vuejcblog.html",
    "revision": "70274584e290e6ebb8689d21c0d2c6b0"
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
    "revision": "977496e2bd77b25fa0328f9dba668cd1"
  },
  {
    "url": "search/index.html",
    "revision": "983f01e53d4db9f4f378feb73b00dc2b"
  },
  {
    "url": "tag/index.html",
    "revision": "f84b05d43ef83bc30ce47985292c2d0b"
  },
  {
    "url": "VueJCBlog/Development/article/hello-vuejcblog.html",
    "revision": "de397bbe89740ad5ee35bc216e344152"
  },
  {
    "url": "VueJCBlog/Development/article/test/test-comment.html",
    "revision": "603b897eb1a7d30d7b05d284a2c7bd45"
  },
  {
    "url": "VueJCBlog/Development/article/test/test-lazy-load.html",
    "revision": "d77a2f528a3b4e44e940384dce632399"
  },
  {
    "url": "VueJCBlog/Development/article/test/test-lazy-load2.html",
    "revision": "65f7eb9e42a256a0c7cfbf24fd0b1342"
  },
  {
    "url": "VueJCBlog/Feature/about-page.html",
    "revision": "f20ebeef55bdf2a00242cdfc9fff155d"
  },
  {
    "url": "VueJCBlog/Feature/archive-page.html",
    "revision": "0ba05e01bd210c918c670e1b2f875ed2"
  },
  {
    "url": "VueJCBlog/Feature/category-page.html",
    "revision": "d0bd82341d4cd97bd002e0684ae78415"
  },
  {
    "url": "VueJCBlog/Feature/common-feature.html",
    "revision": "9554c132d630aacadca63c80cf7262f1"
  },
  {
    "url": "VueJCBlog/Feature/index-page.html",
    "revision": "451b6212a50df227ae8e7c8618514590"
  },
  {
    "url": "VueJCBlog/Feature/index.html",
    "revision": "853b389fc045a64031259e6479c7a8e1"
  },
  {
    "url": "VueJCBlog/Feature/post-page.html",
    "revision": "f81d4abc62fc5509f77eede590fe590e"
  },
  {
    "url": "VueJCBlog/Feature/search-page.html",
    "revision": "25de1d2784d48c49dff7148e1b809c95"
  },
  {
    "url": "VueJCBlog/Feature/sidebar-feature.html",
    "revision": "9d0e8e687228fe4b3dc2c1329fbe8750"
  },
  {
    "url": "VueJCBlog/Feature/tag-page.html",
    "revision": "6dda770d5ea05a088fd2a0994ba48fe2"
  },
  {
    "url": "VueJCBlog/index.html",
    "revision": "8072479a1b151277e0cdfb60c2eef5e6"
  },
  {
    "url": "VueJCBlog/Installation.html",
    "revision": "6372064a7d4590ad3bf2fc722a91575e"
  },
  {
    "url": "VueJCBlog/Quick-Start.html",
    "revision": "dbd9467af5fa43dbfd4aaf1400573c32"
  },
  {
    "url": "VueJCBlog/Usage/Container/index.html",
    "revision": "5f1d7f19278c7070f19116dbe040175c"
  },
  {
    "url": "VueJCBlog/Usage/front-matter.html",
    "revision": "f995d8e9b7d4869434f36e005ee21f30"
  },
  {
    "url": "VueJCBlog/Usage/index.html",
    "revision": "c69b1a078cfc8b122f145ab8ee48c6a0"
  },
  {
    "url": "VueJCBlog/Usage/Markdown/advanced.html",
    "revision": "61c6b4d874024df3c16c0ce107f58d9e"
  },
  {
    "url": "VueJCBlog/Usage/Markdown/basic.html",
    "revision": "03ded1d282f162bf642bf8ae0d706373"
  },
  {
    "url": "VueJCBlog/Usage/Markdown/flow-chart.html",
    "revision": "afc36f821ec45f20447ca2a5066fd8b0"
  },
  {
    "url": "VueJCBlog/Usage/Markdown/index.html",
    "revision": "d878eb7f9f6ed93254543f789c6850c2"
  },
  {
    "url": "VueJCBlog/Usage/Markdown/link.html",
    "revision": "2a100ca5de902e2319132bbcedb4e907"
  },
  {
    "url": "VueJCBlog/Usage/Slide.html",
    "revision": "bd5904ae7a3fdbc0a34d1ccac2ea898c"
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
