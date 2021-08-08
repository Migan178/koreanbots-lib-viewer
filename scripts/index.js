const SELECTOR = "#__next > div > div.iu-is-the-best.min-h-screen.text-black.dark\\:text-gray-100.dark\\:bg-discord-dark.bg-white > div > div > div > div.lg\\:flex.lg\\:flex-row-reverse > div.mb-1.w-full.lg\\:w-1\\/4 > div.grid.gap-4.grid-cols-2.px-4.py-4.text-black.dark\\:text-gray-400.dark\\:bg-discord-black.bg-little-white.rounded-sm"

const checkExist = setInterval(function() {
    if (document.querySelectorAll(SELECTOR).length) {
        const infoDiv = document.querySelector(SELECTOR)
        libChild = document.createElement("div")
        libChild.innerText = "라이브러리"
        libChild2 = document.createElement("div")
        const id = document.URL.split("/")[4]
        fetch(`https://koreanbots.dev/api/v2/bots/${id}`)
            .then(res => res.json())
                .then(data => {
                    libChild2.innerText = data.data.lib
                    infoDiv.appendChild(libChild)
                    infoDiv.appendChild(libChild2)
            }
        )
       clearInterval(checkExist);
    }
 }, 100);