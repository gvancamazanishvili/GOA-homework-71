# 5) შექმენით ფუნქცია და არგუმენტად გადაეცით String-ი. ფუნქციამ ეგრედწოდებულად უნდა "გაფილტროს" ეს სტრინგი თანხმოვანი ასოებისგან და მხოლოდ დააბრუნოს ის ხმოვანი ასოები, რომლებსაც ეს სტრინგი შეიცავს.



def word(string):
    vowel = "aeiou"
    result = ""

    for i in string:
        if i in vowel:
            result += i 
            
    return result

print(word("gvanca"))