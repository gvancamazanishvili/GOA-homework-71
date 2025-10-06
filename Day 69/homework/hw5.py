
# 5) დაწერეთ ფუნქცია, რომელიც შეამოწმებს არგუმენტად გადაცემული რიცხვი მარტივია თუ არა. (მარტივია რიცხვი, თუ მას მხოლოდ ორი გამყოფი აქვს). მინიშნება: გამოიყენეთ For loop და % გამყოფი ოპერატორი.

def simple(num):
    for num in range(1, num + 1):
        if num %2 == 0:
            return "This number is simple"
        else:
            return "This number is not simple"
    
print(simple(10))