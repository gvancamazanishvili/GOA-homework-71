# დაწერე ფუნქცია რომელიც მიიღებს ლისტ და დააბრუნებს მისი ლუწი რიცხვების ჯამს

def even_sum(list):
    total = 0
    for num in list:
        if num  % 2 == 0:
            total += num
    return total        
print(even_sum([2, 6, 7, 8, 5, 8]))