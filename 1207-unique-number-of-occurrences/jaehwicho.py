class Solution:
    def uniqueOccurrences(self, arr: List[int]) -> bool:
        count_list = list(map(lambda num: arr.count(num), list(set(arr))))
        return len(count_list) == len(set(count_list))
