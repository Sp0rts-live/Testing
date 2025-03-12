document.addEventListener("DOMContentLoaded", () => {
    const playerContainer = document.getElementById("player-container");
    const streamUrl = playerContainer.getAttribute("data-stream");

    if (streamUrl) {
        jwplayer("player-container").setup({
            file: streamUrl,
            width: "100%",
            height: "500px",
            stretching: "exactfit",
            type: "hls",
            autostart: true,
            mute: false,
        });
    } else {
        console.error("Stream URL not found!");
    }
});
