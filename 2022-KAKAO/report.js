function solution(id_list, report, k) {
    const reportCount = {};
    const reportUser = {};
    
    id_list.forEach(user => {
        reportCount[user] = 0;
        reportUser[user] = new Set();
    });
    
    report.forEach(rep => {
        const [reporter, target] = rep.split(" ");
        reportUser[reporter].add(target); 
    });
    
    for (const reporter in reportUser) {
        reportUser[reporter].forEach(target => {
            reportCount[target] += 1;
        });
    }
    
    const bannedUsers = [];
    for (const user in reportCount) {
        if (reportCount[user] >= k) {
            bannedUsers.push(user);
        }
    }
    
    const mailCount = id_list.map(user => {
        let count = 0;
        reportUser[user].forEach(target => {
            if (bannedUsers.includes(target)) {
                count += 1;
            }
        });
        return count;
    });
    
    return mailCount;
    
}
