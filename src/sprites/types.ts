type SpriteArgs = {
    position: coordinates,
    image: HTMLImageElement,
    width: number,
    height: number,
    zoom?: number,
    frames?: number,
    directions: DirectionFaceArgs
}

type PlayableArgs = {
    hp: number,
    mana: number,
    muscle: number,
    magik: number,
    armour: number,
    immunity: number
}
