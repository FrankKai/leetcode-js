/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function (emails) {
    // 本地域名：移除删除+号后面的字符串，替换.为空字符串
    // Set记录
    const set = new Set();
    for (const email of emails) {
        const [local, remote] = email.split("@")
        let validLocal = '';
        for (const char of local) {
            if (char === '+') {
                break;
            }
            if (char !== '.') {
                validLocal += char
            }
        }
        set.add(`${validLocal}@${remote}`)
    }
    return set.size
};