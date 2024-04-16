available = [1, 2, 5, 10]

solutions = set()

def coins(n, path=[]):
    for c in available:
        if c < n:
            coins(n - c, path + [c])
        elif c == n:    
            path = path + [c]
            path.sort()
            
            solutions.add(str(path))
            return
coins(12)
print(list(solutions))
print(len(list(solutions)))