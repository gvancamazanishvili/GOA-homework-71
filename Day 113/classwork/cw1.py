# 1) languages = ["Python", "Java", "JavaScript", "C", "C++", "PHP", "Go", "Rust", "Ruby", "Kotlin"] დატოვე მხოლოდ ის ენები რომლების სიგრძეც მეტია 5ზე.

languages = ["Python", "Java", "JavaScript", "C", "C++", "PHP", "Go", "Rust", "Ruby", "Kotlin"]


filtered = list(filter(lambda x: len(x) > 5, languages))

print(filtered)