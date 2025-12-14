# 6) შექმენით სია, რომელშიც დაამატებთ მინიმუმ 8 პროგრამირების ენას. გამოიყენეთ List Comprehension, რომ ახალ სიაში შეინახოთ ისეთი პროგრამირების ენები, რომლებიც არ შეიცავენ 'a' ასოს. (პროგრამა დაწერეთ Case-სენსიტიურობის გათვალისწინებით).


programming = ["Python", "JavaScript", "Java", "C#", "C++", "React","Html", "Css" ]

no_a = [a for a in programming if "a" not in a]
print(no_a)