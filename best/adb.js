async function detectAdBlock() {
        let adBlockEnabled = false;
        const googleAdUrl = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js';

        try {
            const controller = new AbortController();
            const timeoutId = setTimeout(() => controller.abort(), 3000); // 3s timeout

            await fetch(new Request(googleAdUrl), { signal: controller.signal })
                .then(() => clearTimeout(timeoutId))
                .catch(error => {
                    if (error.name === 'AbortError') return; // Ignore timeout errors
                    adBlockEnabled = true;
                });

        } catch (e) {
            adBlockEnabled = true;
        }

        if (adBlockEnabled) {
            document.getElementById("adb").style.display = "block";
        }
    }

    detectAdBlock();
