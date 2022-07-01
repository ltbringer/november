export const mapSetup = (map_width: number, map_height: number): HTMLCanvasElement => {
    const canvas = <HTMLCanvasElement> document.getElementById("canvas");
    canvas.width = map_width;
    canvas.height = map_height;
    return canvas;
}

export const getCtx = (canvas: HTMLCanvasElement): CanvasRenderingContext2D => {
    const ctx = <CanvasRenderingContext2D> canvas.getContext("2d");
    ctx.imageSmoothingEnabled = false;
    return ctx;
}
