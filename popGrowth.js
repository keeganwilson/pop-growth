const popGrowth = (p0, percent, aug, p) => {
    let count = 0
    while (p0 < p) {
        p0 = p0 + (p0 * (percent / 100)) + aug
        count++
    }
    return count
}

console.log(popGrowth(1500, 5, 100, 5000))
console.log(popGrowth(1500000, 2.5, 10000, 2000000))