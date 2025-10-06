# 1) დაწერეთ ფუნქცია და გადაეცით მას ორი რიცხვი. პასუხად დააბრუნეთ ის რიცხვი, რომელიც ამ ორი ინტეჯერიდან ყველაზე დიდი იქნება

def numbers(num1, num2):
    if num1 > num2:
        return num1 
    else:
        return num2
    
print(numbers(1, 5))
