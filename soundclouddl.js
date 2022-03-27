const btns = document.querySelectorAll('.sc-button-more[title="More"]')

const dl = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const dl = document.querySelector('.sc-button-download')
      if (dl) dl.click()
      resolve()
    }, 2000)
  })
}

const main = async () => {
  for (const btn of btns) {
    btn.click()
    await dl()
  }
}

main()
