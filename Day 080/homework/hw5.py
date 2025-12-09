# 5) https://www.codewars.com/kata/5c8bfa44b9d1192e1ebd3d15/train/python

def warn_the_sheep(queue):
    wolf_position = queue.index("wolf")
    
    if wolf_position == len(queue) - 1:
        return "Pls go away and stop eating my sheep"
    else:
        sheep_number = len(queue) - wolf_position - 1
        return f"Oi! Sheep number {sheep_number}! You are about to be eaten by a wolf!"