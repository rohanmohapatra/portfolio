export const openUrl = (url: string) => window.open(url, '_blank')?.focus();
export const openUrlInSameTab = (url: string) => window.open(url, '_self');
