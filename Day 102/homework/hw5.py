# 5) შექმენით ნებისმიერი Dict (Min. 5 მნიშვნელობით). გამოიყენეთ List Comprehension, რომ სიაში შეინახოთ  ამ Dict-ის ყველა key.

tech_brands = {
    'Brand-1': "Apple", 
    'Brand-2': "Microsoft", 
    'Brand-3': "Google", 
    'Brand-4': "Meta",
    'Brand-5': "Samsung"
}

tech_list = [brands for brands in tech_brands.keys()]
print(tech_list)