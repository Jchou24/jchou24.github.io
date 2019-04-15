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
    "revision": "2770290480afaf60d98f9f1ea6d1b07c"
  },
  {
    "url": "About/index.html",
    "revision": "ee966410593928b5677cc27e53efd15a"
  },
  {
    "url": "archive/index.html",
    "revision": "4672cc95df230db1312fb42cc3f180bd"
  },
  {
    "url": "assets/css/0.styles.462df654.css",
    "revision": "eab9893a078acd7cf1cbe4db3e4ef88f"
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
    "url": "assets/js/42.8963515a.js",
    "revision": "eda137f35e184297799e32a0edbbff01"
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
    "url": "assets/js/app.2c8dac6f.js",
    "revision": "843aac1a8b8bc3468c76a9382b37ceb8"
  },
  {
    "url": "assets/js/layout-BaseLayout.eab5aa61.js",
    "revision": "e99758e852b7031813f3a7442faf0136"
  },
  {
    "url": "assets/js/layout-BaseLayout~layout-Layout.2970bf98.js",
    "revision": "c5276ddeaa315227b8cfb222156f8ab5"
  },
  {
    "url": "assets/js/layout-Layout.4e4e4808.js",
    "revision": "5ee79771219fbb01deac62d5df05463f"
  },
  {
    "url": "assets/js/layout-NotFound.283e8ad6.js",
    "revision": "5d7153b75bf33d4d0758fc292d25fe8e"
  },
  {
    "url": "assets/js/page-0815fe43.0409f0e4.js",
    "revision": "bfb41aa0c355d86de89ef3bb204bfa1c"
  },
  {
    "url": "assets/js/page-1bb4b3ad.8d932f3b.js",
    "revision": "bb6a09997f8c808dc608884f0be5b466"
  },
  {
    "url": "assets/js/page-22a9043f.efbe7447.js",
    "revision": "cede3126b64ed85a75f8d8dc72ce85bf"
  },
  {
    "url": "assets/js/page-23e99a6f.69c20af0.js",
    "revision": "e8a4e729912a22eee682c1dbed3736c5"
  },
  {
    "url": "assets/js/page-293f1fdc.a2c123a7.js",
    "revision": "a57f333a27343c40c6376da55bb4e2da"
  },
  {
    "url": "assets/js/page-32e15e7c.85ea8317.js",
    "revision": "33267a9389ef13ec1f6923e21917bfed"
  },
  {
    "url": "assets/js/page-3841e8ef.3ccef647.js",
    "revision": "9a8d8b70dd87dc86de240155c0013547"
  },
  {
    "url": "assets/js/page-3c4a43ae.cdc6a2a9.js",
    "revision": "6fa1a4b30b9de546f859028c8cf35bd6"
  },
  {
    "url": "assets/js/page-49376acf.dd43aa76.js",
    "revision": "d3fdc7b0f0db1c4ed28c404d2d749ad0"
  },
  {
    "url": "assets/js/page-4abc2b47.3a20daf5.js",
    "revision": "37b21e5c20644d05c93fbcb5dcd714b7"
  },
  {
    "url": "assets/js/page-50e0a6f6.efa2dac7.js",
    "revision": "bf6100f392b2b67f1b37b01f124dc16e"
  },
  {
    "url": "assets/js/page-5607f94f.493c9864.js",
    "revision": "578f257df17b011c5d328a3d856a3e47"
  },
  {
    "url": "assets/js/page-5c008213.2c533dcd.js",
    "revision": "bf29f7df4e9dd0c2d67f7c0b15d90164"
  },
  {
    "url": "assets/js/page-5fc63572.8844f4ff.js",
    "revision": "9e49f025f478b91a78441e19cbd38ed9"
  },
  {
    "url": "assets/js/page-6365d1e8.7ec832d1.js",
    "revision": "a95c8c002660714df4bc320904085cff"
  },
  {
    "url": "assets/js/page-6f8a8732.1219e4cd.js",
    "revision": "c5da0217ba3c0082f4cd8ed733745a15"
  },
  {
    "url": "assets/js/page-70a930f7.2e3bdc0c.js",
    "revision": "ee21b1bfcbc31e26e48378f229a4456d"
  },
  {
    "url": "assets/js/page-782df662.fba4a7fe.js",
    "revision": "7ebd831115435b470b51e31bae13c8cd"
  },
  {
    "url": "assets/js/page-921a5862.8bef7a43.js",
    "revision": "9a1f395fd44e74b961de83c5d4f40228"
  },
  {
    "url": "assets/js/page-9a911df4.a9c0365e.js",
    "revision": "19cd4316aeefcca27f73ff3230390977"
  },
  {
    "url": "assets/js/page-bfd44046.4c47442c.js",
    "revision": "512bbb8297dc73d155b6bfe5fbaafaa9"
  },
  {
    "url": "assets/js/page-bffdee08.a00f1d1c.js",
    "revision": "31901e2da335543bcb19313c0e071cb5"
  },
  {
    "url": "assets/js/page-cd7053a2.5f13c968.js",
    "revision": "b9e8bb074538586dfb97fe8422c41a9d"
  },
  {
    "url": "assets/js/page-dad8d1c2.7d9f11a2.js",
    "revision": "911605bacfaf0fa297d3189f3946fae1"
  },
  {
    "url": "assets/js/page-eaea12a2.9f33170e.js",
    "revision": "13ce694b05cc712862d89a2ec0be0211"
  },
  {
    "url": "assets/js/page-fa1749c8.ffd5b129.js",
    "revision": "28fcfd5ded6afdc507b31e4693cdf16f"
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
    "revision": "da3a89b5ddfa0a27bae940dcb446b47b"
  },
  {
    "url": "hello-vblog.html",
    "revision": "3d7da1b738b0a12fb0c75d885a7d8f59"
  },
  {
    "url": "icon.png",
    "revision": "a0b370e0cdc4fb660546c5ecc4c7da20"
  },
  {
    "url": "index.html",
    "revision": "2a515ac16057c045353a809d15a5e4ed"
  },
  {
    "url": "search/index.html",
    "revision": "d139a052f225dfeb2031b065ab56b549"
  },
  {
    "url": "tag/index.html",
    "revision": "15a35a20cdf69e9593d87585750d1c8f"
  },
  {
    "url": "VBlog/Development/article/common/test-lazy-load.html",
    "revision": "ba3f6e737d9acee4220c5afdb76c3267"
  },
  {
    "url": "VBlog/Development/article/common/test-lazy-load2.html",
    "revision": "1008c6e6b6210060913ebae653e56471"
  },
  {
    "url": "VBlog/Feature/about-page.html",
    "revision": "cbc42c671c50b1f8abd6ca1a5e26636e"
  },
  {
    "url": "VBlog/Feature/archive-page.html",
    "revision": "3a2432c1c22a512d293d32893f2b19ce"
  },
  {
    "url": "VBlog/Feature/category-page.html",
    "revision": "16077bf2b0d90c6930408e424c122ef2"
  },
  {
    "url": "VBlog/Feature/common-feature.html",
    "revision": "b24959aea0e664a6da806715ef25f234"
  },
  {
    "url": "VBlog/Feature/index-page.html",
    "revision": "c91185c5cf54d62c122d3edd67ecd053"
  },
  {
    "url": "VBlog/Feature/index.html",
    "revision": "12abfe9013e057514c1d841a19ea9c54"
  },
  {
    "url": "VBlog/Feature/post-page.html",
    "revision": "2d6f0afdad8bcc6f0e5b0297fddd465c"
  },
  {
    "url": "VBlog/Feature/search-page.html",
    "revision": "3ddf2c6fb473b885874c087e3ce13a03"
  },
  {
    "url": "VBlog/Feature/sidebar-feature.html",
    "revision": "f3af672cadf5bc6880ee76a9bd454115"
  },
  {
    "url": "VBlog/Feature/tag-page.html",
    "revision": "09cb63c6e105fd94604a589dfc1b6fab"
  },
  {
    "url": "VBlog/index.html",
    "revision": "c074822848307b9fbda4141a0e58ba5c"
  },
  {
    "url": "VBlog/Installation.html",
    "revision": "c98185c811bdc0c79155f52cf03b7c19"
  },
  {
    "url": "VBlog/Quick-Start.html",
    "revision": "40002b3f984440b4fea2e2dd1122ce64"
  },
  {
    "url": "VBlog/Usage/Container/index.html",
    "revision": "b8941485f11cebc5c311f025cd0db634"
  },
  {
    "url": "VBlog/Usage/front-matter.html",
    "revision": "355ddccd99c26e6a11d647cd1a8ef11c"
  },
  {
    "url": "VBlog/Usage/index.html",
    "revision": "ba5a9383ec53236aa900368db05d2859"
  },
  {
    "url": "VBlog/Usage/Markdown/advanced.html",
    "revision": "2947029e8a611284e9e22f67575fb608"
  },
  {
    "url": "VBlog/Usage/Markdown/basic.html",
    "revision": "8fe23fe9010fd1bb0101605744f1de09"
  },
  {
    "url": "VBlog/Usage/Markdown/flow-chart.html",
    "revision": "e222d5ad6076ccde699b4d0c7e2c713e"
  },
  {
    "url": "VBlog/Usage/Markdown/index.html",
    "revision": "3d599cc287b8c223bec4a2d74b9f47d3"
  },
  {
    "url": "VBlog/Usage/Markdown/link.html",
    "revision": "e3dd1a34d1276182c382462b9af4ff19"
  },
  {
    "url": "VBlog/Usage/Slide.html",
    "revision": "479f5814be045cb49213be16ef0458c3"
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
