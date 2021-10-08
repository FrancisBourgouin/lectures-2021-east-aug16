# if, elsif, unless, tern

if true == true
  # 
end

if false
  puts "yo"
elsif false
  puts "ya"
else
  puts "pouet"
end

lie = true
puts "I like chicken" unless lie

hungry = true
puts hungry ? "Poutine?" : "Cookies"