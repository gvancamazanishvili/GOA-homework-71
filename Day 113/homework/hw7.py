# 7) შექმენით Dict, მასში შეინახეთ key და value წყვილებად მანქანის დასახელება და მისი გამოშვების წელი. გამოიყენეთ filter, რომ old_years ცვლადში შეინახოთ მხოლოდ 2000-წლამდე გამოშვებული მანქანები (სიის სახით).

cars = {
    "Toyota Corolla": 1995,
    "Honda Accord": 1998, 
    "BMW 5 Series": 2000, 
    "Porsche Cayenne": 2023,
}


old_years = list(filter(lambda x: x[1] < 2000, cars.items()))
print(old_years)