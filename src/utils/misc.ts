export const hasKey = <O>(obj: O, key: PropertyKey): key is keyof O => {
    return key in obj
};


export const manhattanDistance = (a: coordinates, b: coordinates): number => {
    return Math.abs(a.x - b.x) + Math.abs(a.y - b.y)
}

export const randomInt = (min: number, max: number): number => {
    return Math.floor(Math.random() * (max - min + 1)) + min
}
