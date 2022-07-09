// declare module "*.png" {
//     const value: any;
//     export = value;
// }
declare module "*.png"
type DirectionKeyArgs = { up: string, down: string, left: string, right: string };
type DirectionFaceArgs = { up: number, down: number, left: number, right: number };


interface Box {
    position: coordinates;
    width: number;
    height: number;
}
