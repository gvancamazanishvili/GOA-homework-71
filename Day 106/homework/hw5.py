# 5) დაწერეთ ფუნქცია check_password, რომელსაც გადაეცემა პარამეტრი pass.
# გამოიყენეთ Exception Handling, რომ გამოიწვიოთ შემდეგი Error-ები:
# თუ პაროლი < 8 სიმბოლოა -> "Password too short"
# თუ შეიცავს space-ს -> "Password cannot contain spaces"
# თუ ყველაფერი სწორია აბრუნებს "Password accepted"


def check_password(password):
    try:
        if len(password) < 8:
            raise Exception("Password too short")
        elif " " in password:
            raise Exception("Password cannot contain spaces")
            
    except ValueError:
        return "Your value is not the one you need"
    else: 
        return  "Password accepted"
    
print(check_password("GVancamazaaa"))