class Solution:
    def maximumWealth(self, accounts: List[List[int]]) -> int:
        customer_length = len(accounts)
        bank_length = len(accounts[0])
        max_wealth = 0
    
        for i in range(customer_length):
            cur_wealth = 0
            for j in range(bank_length):
                cur_wealth += accounts[i][j]
            if cur_wealth > max_wealth:
                max_wealth = cur_wealth
        return max_wealth
        