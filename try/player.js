document.addEventListener("DOMContentLoaded", () => {
    const playerContainer = document.getElementById("player-container");

    // 🔒 Securely store Base64-encoded M3U8 links
    const streamMap = {
        "1": "aHR0cHM6Ly9hbWcwMTI2OS1hbWcwMTI2OWMxLXdpbGxvd3R2LXVzLTU0NzkucGxheW91dHMubm93LmFtYWdpLnR2L3BsYXlsaXN0L2FtZzAxMjY5LXdpbGxvd3R2ZmFzdC13aWxsb3dwbHVzLXdpbGxvd3R2dXMvY2I1NDNkMWI3YjZjNjc4YTk4ZDQzZTYyZDllZjQ1YTlmOTU5MWZkZTFkNjk4ODY5M2ViNTUxODk3NWQxMDczZWRjZTJhNTljYWEwOGZmMTYzODhmMWVkZTdmMGE2NjQxM2EzZTk1MWZkYTc3MTE4ZmQ4N2ViMTQxNDUzYzU3MjhjZmZmZTcyOWEyYzA1NjE2YjdkYjA4MzQyOWI1NmEwNjJhODY2YTY4YWMzOTQzN2VkMGUyMWY0OGEyMzhiNjcyMGE1YWE4MmE2NjQ0M2Q4MGI4NDZhYzc1NTBkYjgwMTQ4YjYxMjk5YmNlOGMzNzY4M2YwMzQwOWE1ZTVhZmJhMzU4YjFlYmUzMGYxNzhkMzlmMGIwMWE1NWMwN2M0MmU1OWY0M2M4ODE0YWE2ODlkNDBmY2Q1ZWQyNzBmMjExYzk5MWY0ODJkYjEyODBkM2YzMjU5MzY4OGFhMmQ2NzU1ODFmYjBhZTNiZjZlMDUzYjJkMzliMWI1NmY2MTMwOTc1NmU5ZTYyM2VmMTg0MmExZDk1NGU0MjI2OTU5NzZiNjY0ODhkNzRlNDgwMjQ4NjYxMzliMTQyZWQyNzc1ZWNhNjE5YzgzZTg1OWIyNTk3YThhOGNiMDI2MzNjYWFjMzVhNmQ2ZGM4OGZjNmRkYWY2NzYyZWYzNWE5ZTA4MWQ5MDJkMTM1NWFiOGQ0MWI5MTRkYTE4NDI2NmM3MDJhYmIyMmE0ODk3OWI3YTUyYTg0ZmI0MjEyMzRjYjkwNTE5YWE3N2ZlMjg1YmZhMDQ1ODYyY2M2Y2JmNWQ3NjgwYzFlMjM0YzM1OGY1M2E2OTU3YWM4NjlmMzRjZTg5ZjQzNmYwYzE2MDQ5YTkzNWI5MmQyODIxZTI4MzQxYmNmYzA3ZmM0MDMxN2JjZWM4ZTgxZjQwNzJmODUzNTQ4MGRhNjMzOGYxYjRkNDdlNDAwNDE1MGE5NmRmNTkzMzc2OWM5MDEwZjg2M2UzMmIyMTgxNjg4NTBmM2I1MjliYWY2ODhiNzQ4NmJmYjhlODkxMmJmNWNlZWIzMGJjMGZmNGRmYzNlNmIxNzUxZTU4MDU5MzUyZjdiNzRkZWVhNjkxYTIzMzk5MjE1OTZiNGU0ZDUzNzU4NTBhMmE3YjdiZGFhMzUxZjA4MzYxMDVlMDlmMTkyYzQ3ODg5ODFjZDJjNWQ1YjgxNjQyZjZlNzAxZjAwODU0NmIxNGRkYTEzNDIxNDIxZDkxNGIxZjQ1YzZjZTRlNjQwOTQ2ZDAwZTIzYjhjMjhhNGYwNTRjMTU4YTVmNTg4NTg5ZjI3OWE3NDZjLzg1LzE5MjB4MTA4MF81ODU5NDgwL2luZGV4Lm0zdTg=",  // Encoded Stream 1
        "2": "aHR0cHM6Ly9leGFtcGxlLmNvbS9zdHJlYW0yLm0zdTg=",  // Encoded Stream 2
        "3": "aHR0cHM6Ly9leGFtcGxlLmNvbS9zdHJlYW0zLm0zdTg="   // Encoded Stream 3
    };

    // 🔍 Get stream ID from URL (e.g., player.html?stream=2)
    const urlParams = new URLSearchParams(window.location.search);
    const streamId = urlParams.get("stream");

    // 🎥 Decode and load the corresponding stream
    if (streamId && streamMap[streamId]) {
        const decodedURL = atob(streamMap[streamId]); // Decode Base64

        jwplayer("player-container").setup({
            file: decodedURL,  // Use decoded URL
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
