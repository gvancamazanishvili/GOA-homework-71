# 5) დაწერე ფუნქცია divisors, რომელიც მიიღებს რიცხვს და დააბრუნებს მის ყველა გამყოფს.
#    მაგ. მოცემულია რიცხვი 4. 4-ის გამყოფებია: 1, 2, 4. შესაბამისად ამ რიცხვის გამყოფებს აბრუნებთ სიის სახით --> [1, 2, 4]
#    12 -> [1, 2, 3, 4, 6, 12]
#    45 -> [1, 3, 5, 9, 15, 45]


def divisors(int):
    divisors_list = []
    for i in range(1, int+1):
        if  int % i == 0:
            divisors_list.append(i)
    return divisors_list

print(divisors(4))