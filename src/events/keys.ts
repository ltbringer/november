import { Keys } from "../state";

export const configureKeyPress = (keys: Keys) => {
    window.addEventListener("keydown", (e: KeyboardEvent): void => {
        keys.press(e.key);
    })

    window.addEventListener("keyup", (e: KeyboardEvent): void => {
        keys.release(e.key);
    })
}
