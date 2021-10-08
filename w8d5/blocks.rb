
def super_star_comment_yeah
  puts "**********************"
  yield
  puts "**********************"
end

def weird_star_stuff max
  rand(max).times { puts "**********************" }
  yield 1
  yield 2
  rand(max).times { puts "**********************" }
end

def random_number max
  puts rand(max)
end

weird_star_stuff 5 do 
  random_number 10
  random_number 1100
end