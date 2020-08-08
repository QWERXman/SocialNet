export const toFullDate = (date: Date) => {
    const day = date.getDay();
    const month = date.getMonth();
    const year = date.getFullYear();

    return `
        ${day < 10 ? '0' + day : day}.${month < 10 ? '0' + month : month}.${year}
    `;
}
