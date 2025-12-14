# 3) შექმენით ნებისმიერი Dict (Min. 4 მნიშვნელობით). გამოიყენეთ List Comprehension, რომ სიაში შეინახოთ  ამ Dict-ის ყველა value.


my_info ={
    'name': 'Gvanca',
    'surname': 'Mazaninshvili',
    'height': 165.5,
    'age': 15,
}

my_Info = [i for i in my_info.values()]
print(my_Info)