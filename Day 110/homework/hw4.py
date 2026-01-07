# 4) დაწერეთ ფუნქცია, რომელსაც გადაეცემა სტრინგი. პასუხად დააბრუნეთ არის თუ არა იგი პალინდრომი. (მოიძიეთ თუ რას ნიშნავს Palindrome)



is_palidrome = lambda word: word == word[::-1]
print(is_palidrome("level"))
