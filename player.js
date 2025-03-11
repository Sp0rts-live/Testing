// Securely fetch M3U8 URL
async function getStreamUrl() {
    return "https://example.com/secure.m3u8";  // Replace with actual secure backend URL
}

// Load Video Player
document.addEventListener("DOMContentLoaded", async () => {
    const url = await getStreamUrl();
    var player = jwplayer("player-container");
    player.setup({
        file: url,
        width: "100%",
        stretching: "exactfit",
        type: "hls",
        autostart: "true",
        mute: "false",
        primary: "html5",
        logo: {
            file: "",
            hide: "false",
            position: "top-right",
        }
    });
});
