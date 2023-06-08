"use strict"

const box = document.querySelector(".box")
const copy = document.querySelector(".copy")
const popup = document.querySelector(".popup")
const overlay = document.querySelector(".overlay")
const link = document.querySelector(".link")
const content = document.querySelectorAll(".content")

box.addEventListener("click", function (e) {
  const clicked = e.target.closest(".content")
  content.forEach((c) =>
    c.classList.remove(
      "bg-[#ec4c86]",
      "shadow-[#ec4c86]/30",
      "shadow-transparent"
    )
  )

  if (!clicked) return

  link.textContent = `${clicked.dataset.tab}`
  clicked.classList.add("bg-[#ec4c86]")
  clicked.classList.add("shadow-[#ec4c86]/30")
})

copy.addEventListener("click", function (e) {
  navigator.clipboard.writeText(`${link.textContent}`)
  popup.classList.remove("opacity-0", "-z-10", "top-12")
  popup.classList.add("top-1/2")
  overlay.classList.remove("opacity-0", "-z-10", "-translate-y-1/2")

  let count = 0
  let innit = setInterval(timeout, 500)

  function timeout() {
    count++

    if (count > 3) {
      clearInterval(innit)
      popup.classList.add("opacity-0", "-z-10", "top-12")
      popup.classList.remove("top-1/2")
      overlay.classList.add("opacity-0", "-z-10", "-translate-y-1/2")
    }
  }
})
