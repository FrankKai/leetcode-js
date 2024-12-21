function maximumWealth(accounts: number[][]): number {
    return Math.max(...accounts.map((account) => account.reduce((acc, cur) => acc + cur)))
};