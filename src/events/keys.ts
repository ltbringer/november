import { Controller } from "../state";

export const configureKeyPress = (controller: Controller) => {
    window.addEventListener("keydown", (e: KeyboardEvent): void => {
        controller.press(e.key);
    })

    window.addEventListener("keyup", (e: KeyboardEvent): void => {
        controller.release(e.key);
    })
}
