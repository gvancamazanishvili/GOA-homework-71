# 5) შექმენით Tuple სახელწოდებით info, სადაც შეინახავთ თქვენს მონაცემებს (სახელი, ასაკი, მისამართი ა.შ). მასში შეინახეთ 5 მონაცემი და მოახდინეთ თაფლის unpacking: თითოეულ მონაცემს შესაბამისი ცვლადის სახელი შეისაბამეთ (name, age, etc..)


info = ("gvanca", 'mazanishvili', '15 years old', '10 grader', 'leader')
name, lastname, age, grade, role = info

print(name)
print(lastname)
print(age)
print(grade)
print(role)
