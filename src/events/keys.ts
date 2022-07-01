import { Keys } from "../state";

export const configureKeyPress = (keys: Keys) => {
    window.addEventListener("keydown", (e) => {
        keys.press(e.key);
    })

    window.addEventListener("keyup", (e) => {
        keys.release(e.key);
    })
}
