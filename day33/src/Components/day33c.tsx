function datsUnitNewYear(): number {
    const today: Date = new Date();
    const newYear: Date = new Date(today.getFullYear() + 1, 0, 1)
    const diff: number = newYear.getTime() - today.getTime();
    const days: number = Math.floor(diff / (1000 * 60 * 60 * 24));
    return days
}


console.log(datsUnitNewYear() + " days until next year")