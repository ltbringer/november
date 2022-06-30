export const configureKeyPress = (keys) => {
    window.addEventListener("keydown", (e) => {
        keys.press(e.key);
    })

    window.addEventListener("keyup", (e) => {
        keys.release(e.key);
    })
}
