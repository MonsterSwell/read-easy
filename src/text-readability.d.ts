declare module 'text-readability' {
    class Readability {
        textStandard(text: string, floatOutput?: boolean): string | number;
        fleschKincaidGrade(text: string): number;
        daleChallReadabilityScore(text: string): number;
    }

    const readability: Readability;

    export = readability;
}