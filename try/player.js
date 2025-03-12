document.addEventListener("DOMContentLoaded", () => {
    const playerContainer = document.getElementById("player-container");

    // 🔒 Securely store M3U8 links (users won't see these in URL)
    const streamMap = {
        "Lx847MNNLop": "https://amg01269-amg01269c1-willowtv-us-5479.playouts.now.amagi.tv/playlist/amg01269-willowtvfast-willowplus-willowtvus/cb543d1b7b6c678a98d43e62d9ef45a9f9591fde1d6988693eb5518975d1073edce2a59caa08ff16388f1ede7f0a66413a3e951fda77118fd87eb141453c5728cfffe729a2c05616b7db083429b56a062a866a68ac39437ed0e21f48a238b6720a5aa82a66443d80b846ac7550db80148b61299bce8c37683f03409a5e5afba358b1ebe30f178d39f0b01a55c07c42e59f43c8814aa689d40fcd5ed270f211c991f482db1280d3f32593688aa2d675581fb0ae3bf6e053b2d39b1b56f61309756e9e623ef1842a1d954e422695976b66488d74e48024866139b142ed2775eca619c83e859b2597a8a8cb02633caac35a6d6dc88fc6ddaf6762ef35a9e081d902d1355ab8d41b914da184266c702abb22a48979b7a52a84fb421234cb90519aa77fe285bfa045862cc6cbf5d7680c1e234c358f53a6957ac869f34ce89f436f0c16049a935b92d2821e28341bcfc07fc40317bcec8e81f4072f8535480da6338f1b4d47e4004150a96df5933769c9010f863e32b218168850f3b529baf688b7486bfb8e8912bf5ceeb30bc0ff4dfc3e6b1751e58059352f7b74deea691a2339921596b4e4d5375850a2a7b7bdaa351f0836105e09f192c4788981cd2c5d5b81642f6e701f008546b14dda13421421d914b1f45c6ce4e640946d00e23b8c28a4f054c158a5f588589f279a746c/85/1920x1080_5859480/index.m3u8",
        "2": "https://example.com/stream2.m3u8",
        "3": "https://example.com/stream3.m3u8",
    };

    // 🔍 Get stream ID from URL (e.g., player.html?stream=2)
    const urlParams = new URLSearchParams(window.location.search);
    const streamId = urlParams.get("stream");

    // 🎥 Load the corresponding stream
    if (streamId && streamMap[streamId]) {
        jwplayer("player-container").setup({
            file: streamMap[streamId],  // M3U8 URL is mapped securely
            width: "100%",
            height: "500px",
            stretching: "exactfit",
            type: "hls",
            autostart: true,
            mute: false,
        });
    } else {
        playerContainer.innerHTML = "<h3>Invalid Stream ID!</h3>";
    }
});
