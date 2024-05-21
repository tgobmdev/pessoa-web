export class SetUtil {
    static excludeKeys = (
        originalSet: Set<string>,
        keysToExclude: Set<string>
    ): string[] => {
        return Array.from(originalSet).filter((key) => !keysToExclude.has(key))
    }
}
