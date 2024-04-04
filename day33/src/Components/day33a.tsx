function getCurrentDateFormatted(): string{
    const now: Date = new Date();
    const day: string = String(now.getDate()).padStart(2, '0'); // day in 2 digit
    const month: string = String(now.getMonth() + 1).padStart(2, '0');  // Add 1 because months are 0-index
    const year: number = now.getFullYear();
    return `${day}/${month}/${year}`;
}


console.log(getCurrentDateFormatted())

