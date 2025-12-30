# 5) დაწერეთ ფუნქცია validate_password(password), რომლის შიგნით ჩაშენებული იქნება ფუნქციები.

# validate_password(password) უნდა იყენებდეს სამ შიდა ფუნქციას:

# • has_min_length()
# ამოწმებს, შეიცავს თუ არა პაროლი მინიმუმ 8 სიმბოლოს
# აბრუნებს True ან False

# • has_digit()
# ამოწმებს, შეიცავს თუ არა პაროლი ციფრს
# აბრუნებს True ან False

# • has_uppercase()
# ამოწმებს, შეიცავს თუ არა პაროლი Uppercase ასოს
# აბრუნებს True ან False


def validate_password(password):
    def has_min_length():
        return len(password) >= 8

    def has_digit():
        return any(char.isdigit() for char in password)

    def has_uppercase():
        return any(char.isupper() for char in password)

    return has_min_length() or has_digit() or  has_uppercase()

print(validate_password("gvancaaaaaa"))
