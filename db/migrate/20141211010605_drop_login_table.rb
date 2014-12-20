class DropLoginTable < ActiveRecord::Migration
  def change
    drop_table :logins
  end
end
