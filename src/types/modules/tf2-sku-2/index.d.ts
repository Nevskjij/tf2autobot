declare module 'tf2-sku-2' {
    export function fromObject(item: {
        defindex: number;
        quality: number;
        craftable?: boolean;
        tradable?: boolean;
        killstreak?: number;
        australium?: boolean;
        effect?: number;
        festive?: boolean;
        paintkit?: number;
        wear?: number;
        quality2?: number;
        craftnumber?: number;
        crateseries?: number;
        target?: number;
        output?: number;
        outputQuality?: number;
        paint?: number;
    }): string;

    export function fromString(
        sku: string
    ): {
        defindex: number;
        quality: number;
        craftable: boolean;
        tradable?: boolean;
        killstreak: number;
        australium: boolean;
        effect: number;
        festive: boolean;
        paintkit: number;
        wear: number;
        quality2: number;
        craftnumber: number;
        crateseries: number;
        target: number;
        output: number;
        outputQuality: number;
        paint: number;
    };
}
