export function truncateString(str: string, end: number) {
    return str.length < end ? str : str.substring(0, end) + "..."
}

export function formatTime(time: number | string | undefined): string {

    const second = 1000,
        minute = 60 * second,
        hour = 60 * minute


    const formatedTime = Number(time);
    const isInMinutes = () => (formatedTime >= minute && formatedTime < hour)
    const isInHours = () => (formatedTime >= hour)


    return isInHours()
        ? formatedTime / hour + " hr" + (formatedTime / hour > 1 ? "s" : "")
        : isInMinutes() ? formatedTime / minute + " min" + (formatedTime / minute > 1 ? "s" : "")
            : formatedTime / second + "s"
}