# 1) შექმენით ფუნქცია და გადაეცით რიცხვების სია არგუმენტად. ფუნქციის მიზანი იქნება, რომ სიიდან დააბრუნოს მხოლოდ უარყოფითი რიცხვები.


def return_negative (list):
    negatives = []
    for i in list:
        if i < 0:
            negatives.append(i)
    return negatives

# one way 
print(return_negative[1,2 -4, -2813, -1781, 23])

#second way
nums = [394, -49, -4085, 24]
print(return_negative(nums))
