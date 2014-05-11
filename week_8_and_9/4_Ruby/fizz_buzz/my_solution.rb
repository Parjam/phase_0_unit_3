# U3.W8-9: 


# I worked on this challenge [by myself, with: ].

# 2. Pseudocode



# 3. Initial Solution

=begin

def super_fizzbuzz(array)
	fizzbuzzed = []
	array.each do |i|
		if i % 15 == 0
			fizzbuzzed << "FizzBuzz"
		elsif i % 5 == 0
			fizzbuzzed << "Buzz"
		elsif i % 3 == 0
			fizzbuzzed << "Fizz"
		else
			fizzbuzzed << i
		end
	end
	return fizzbuzzed
end

=end


# 4. Refactored Solution


def super_fizzbuzz(array)
	fizzbuzzed = []
	array.each do |i|
		if i % 15 == 0
			fizzbuzzed << "FizzBuzz"
		elsif i % 5 == 0
			fizzbuzzed << "Buzz"
		elsif i % 3 == 0
			fizzbuzzed << "Fizz"
		else
			fizzbuzzed << i
		end
	end
	return fizzbuzzed
end



# 1. DRIVER TESTS/ASSERT STATEMENTS GO BELOW THIS LINE

p super_fizzbuzz([2,3]) == [2,"Fizz"]
p super_fizzbuzz([5,15]) == ["Buzz","FizzBuzz"]


# 5. Reflection 