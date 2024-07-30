
var RecentCounter = function() {
    this.pings = [];
};

/** 
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function(t) {
    this.pings.push(t);

    const min = t - 3000;
    const max = t;

    this.pings = this.pings.filter(ping => min <= ping && ping <= max);

    return this.pings.length;
};

/** 
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */