class AddBirthDate < ActiveRecord::Migration[6.1]
  def change
    add_column :students, :birth_date, :string
  end
end
