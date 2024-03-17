export function truncateString(str: string, end: number) {
    return str.length < end ? str : str.substring(0, end) + "..."
}