declare module 'text-readability' {
    class Readability {
        textStandard(text: string, floatOutput?: boolean): string | number;
    }

    const readability: Readability;

    export = readability;
}