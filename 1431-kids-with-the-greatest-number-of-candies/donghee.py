class Solution(object):
    def kidsWithCandies(self, candies, extraCandies):
        biggest_candy = max(candies)
        answer= []
        for candy in candies :
            if candy + extraCandies >= biggest_candy :
                answer.append(True)
            else :
                answer.append(False)
        return answer