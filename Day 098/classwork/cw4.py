# 4) შექმენით Tuple, სადაც შეინახავთ 7 ელემენტს. გამოიყენეთ Tuple Unpacking იმისთვის, რომ 4 სხვადასხვა ცვლადში გადაანაწილოთ Tuple-ის ელემენტები. ოთხივე ცვლადი დაბეჭდეთ ტერმინალში.


Subjects = ("Math", 'History', 'Chemestry', 'Biology', "French", "Georgian", 'Physics')
sub1, sub2, sub3, sub4, *sub5 = Subjects

print(sub1)
print(sub2)
print(sub3)
print(sub4)
print(sub5)
