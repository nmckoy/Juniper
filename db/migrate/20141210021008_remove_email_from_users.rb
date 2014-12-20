class RemoveEmailFromUsers < ActiveRecord::Migration
  def change
    remove_columns :users, :email
  end
end
