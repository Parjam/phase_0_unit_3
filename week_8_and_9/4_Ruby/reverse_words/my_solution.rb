# U3.W8-9: Reverse Words


# I worked on this challenge [by myself].

# 2. Pseudocode



# 3. Initial Solution

=begin
def reverse_words (words)
	word_array = words.split(" ")
	word_array.map! { |e| e.reverse }
	word_array.join(" ")
end
=end

# 4. Refactored Solution

def reverse_words(words)
	words.split.map!{ |e| e.reverse}.join(" ")
end


# 1. DRIVER TESTS/ASSERT STATEMENTS GO BELOW THIS LINE

p reverse_words("hello") == "olleh"
p reverse_words("how you doing") == "woh uoy gniod"

# 5. Reflection 