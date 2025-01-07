class Solution:
    def asteroidCollision(self, asteroids: List[int]) -> List[int]:
        result = [asteroids[0]]
        for a in asteroids[1:]:
            flag = True
            while result and result[-1] > 0 and a < 0:
                if abs(result[-1]) < abs(a):
                    result.pop()
                elif abs(result[-1]) == abs(a):
                    result.pop()
                    flag = False
                    break
                else:
                    flag = False
                    break

            if flag :
                result.append(a)
            
        return result

                