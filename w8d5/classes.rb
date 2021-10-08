
class Student
  def initialize name, webcam_on
    @name = name
    @cool = webcam_on
    @webcam_on = webcam_on
  end

  attr_reader :cool
  # attr_writer :name
  attr_accessor :name, :webcam_on

  # def name
  #   puts @name
  # end

  def greetings
    puts "Hi, I'm #{@name}, and I'm #{@cool ? "cool" : "not cool"}"
  end
end


nobody = Student.new "Mr. Nobody", true

# puts nobody

# p nobody.name
# nobody.name = "Potato Man"
# p nobody.name


nobody.greetings