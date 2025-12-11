# 2) ასევე ჩამოწერეთ ყველა set-ის ფუნქცია რაც განვიხილეთ და თითოეულზე მოიყვანეთ მინ. 1 მაგალითი.

# 1. .add() - ფუნქციით ჩვენ შეგვიძლია დავამატოთ ელემენტები 
set1 = {'apple', 'banana', 'cherry'}
set1.add("Melon")
print(set1)

# 2. .remove() - ფუნქციით ჩვენ შეგვიძლია მოვაშოროთ ნებისმიერი ელემენტი
set1 = {'apple', 'banana', 'cherry'}
set1.remove("apple")
print(set1)

# 3. .clear() - შეგვიძლია გავასუფთავოთ მთლიანი სეთი
set1 = {'apple', 'banana', 'cherry'}
set1.clear()
print(set1)

# 4. .union() - შეგვიძლია ორი სეთი გავაერთიანოდ
set1 = {'apple', 'banana', 'cherry'}
set2 = {'banana', 'orange'}
combo = set1.union(set2)
print(combo)

# 5. .difference() - აბრუნებს რა განსხვავებაა წერტილის იქით გადაცემულ სეთში რომელიც არ არის მეორე (ფრჩხილებში გადაცემული სეთში)

set1 = {'apple', 'banana', 'cherry'}
set2 = {'banana', 'orange'}
dif = set1.difference(set2)
print(dif)
