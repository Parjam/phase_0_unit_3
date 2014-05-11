# U3.W8-9: 


# I worked on this challenge [by myself, with: Kevin Kong ].

# 2. Pseudocode

# defining a starting array
# adding a while loop to add numbers until it reaches the num
# adding two last numbers to continue with fibonacci sequence.


# 3. Initial Solution

# def is_fibonacci?(num)
#   fibs = [0,1]
#    while num > fibs.last 
#     fibs << fibs[-1] + fibs[-2]  
#    end
#   return fibs.include?(num)
# end 



# 4. Refactored Solution

 def is_fibonacci?(num)
   fibs = [0,1]
    while num > fibs.last 
     fibs << fibs[-1] + fibs[-2]  
    end
   return fibs.include?(num)
 end 


# 1. DRIVER TESTS GO BELOW THIS LINE




# 5. Reflection 

# it wasn't really complicated in ruby.