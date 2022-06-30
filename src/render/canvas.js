export const mapSetup = (map_width, map_height) => {
    const canvas = document.getElementById("canvas");
    canvas.width = map_width;
    canvas.height = map_height;
}


export const getCtx = () => {
    const ctx = canvas.getContext("2d");
    ctx.imageSmoothingEnabled = false;
    return ctx;
}