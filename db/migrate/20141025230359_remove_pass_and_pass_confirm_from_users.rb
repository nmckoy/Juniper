class RemovePassAndPassConfirmFromUsers < ActiveRecord::Migration
  def change
    remove_columns :users, :password_confirmation, :password
  end
end
