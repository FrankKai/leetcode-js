/**
 * @param {string[][]} orders
 * @return {string[][]}
 */
var displayTable = function (orders) {
    // 1.统计出哪桌点了什么菜
    const map = orders.reduce((acc, cur) => {
        const [_, tableNumberi, foodItemi] = cur;
        acc.set('foodItems', acc.get('foodItems') ? [...new Set([...acc.get('foodItems'), foodItemi])] : [foodItemi])
        const table = acc.get(tableNumberi);
        if (table) {
            acc.set(tableNumberi, Object.assign(table, {
                [foodItemi]:
                    table[foodItemi] ?
                        ++table[foodItemi] : 1
            }));
        }
        else {
            acc.set(tableNumberi, {
                [foodItemi]: 1
            });
        }

        return acc;
    }, new Map())
    // 2.补全本桌没有点其他桌点了的菜
    const keys = [...map.keys()].filter((key) => key !== 'foodItems');
    const foodItems = [...map.get('foodItems')]
    keys.forEach((key) => {
        foodItems.forEach((food) => {
            if (!(food in map.get(key))) {
                map.set(key, Object.assign(map.get(key), {
                    [food]: 0
                }));
            }
        })

    })
    // 3.按照指定格式输出
    const result = [];
    foodItems.sort()
    result[0] = ["Table", ...foodItems]
    keys.sort((a, b) => parseInt(a) - parseInt(b))
    while (keys.length > 0) {
        const key = keys.shift();
        const item = [key];
        const foodItemSorted = foodItems.reduce((acc, cur) => {
            acc.push(`${map.get(key)[cur]}`)
            return acc
        }, item)
        result.push(foodItemSorted);
    }
    return result
};