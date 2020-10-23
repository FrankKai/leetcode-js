/**
 * @param {string[]} cpdomains
 * @return {string[]}
 */
var subdomainVisits = function (cpdomains) {
  /**
   * 根据.拆出多级域名
   * hashmap统计出现次数
   * 聚合
   */
  function getDomainDetail(domainInfo) {
    const [count, domain] = domainInfo.split(" ");
    const domainArr = domain.split(".");
    let head = domainArr.length - 1;
    const res = new Map();
    while (head >= 0) {
      res.set(domainArr.slice(head, domainArr.length).join("."), count);
      head--;
    }
    return res;
  }
  const map = new Map();
  for (const info of cpdomains) {
    for (const [domain, count] of getDomainDetail(info)) {
      map.set(
        domain,
        map.get(domain)
          ? parseInt(map.get(domain)) + parseInt(count)
          : parseInt(count)
      );
    }
  }
  const result = [];
  for (const [domain, count] of map) {
    result.push(`${count} ${domain}`);
  }
  return result;
};
