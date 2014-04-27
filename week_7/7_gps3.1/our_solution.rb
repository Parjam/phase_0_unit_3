# U3.W7: Build an Electronic Grocery List!
 
# Your full names:
# 1. Parjam Davoody
# 2. Ahmed Al-Bahar
 
# User Stories (As many as you want. Delete the statements you don't need)
# As a user, I want to be able to add items to my cart
# As a user, I want to be able to remove items from my cart
# As a user, I want to display items in the card
# As a user, I want to empty the cart
# As a user, I want to find out the number of items in the cart
 
# Pseudocode
# 1. Create an object class called "cart"
# 2. Create methods, "add", "add_bulk", "remove", "display", "empty" and "total_number" which will perform
# their respective descriptions. 
 
# Your fabulous code goes here....

class Cart
  
   def initialize
     @cart = []
   end
  
  def add(item)
    @cart << item
  end
  
  def add_bulk(*item)
    item.each do |food|
        @cart << food
    end
  end
  
  def remove(item)
    @cart.delete(item)
  end

  def display
    @cart.each do |item| 
      puts item
    end
  end
  
  def total_number
    @cart.length 
  end
  
  def empty
    @cart.clear
  end
  
end



# DRIVER CODE GOES HERE. 
 
cart1 = Cart.new
cart1.add(strawberry)
cart1.add('banana')
cart1.add('strawberry')
cart1.add('ice cream')
cart1.add_bulk('cookies', 'chicken', 'soda')
cart1.display
cart1.remove('banana')
cart1.display
cart1.total_number
cart1.empty
cart1.display
 