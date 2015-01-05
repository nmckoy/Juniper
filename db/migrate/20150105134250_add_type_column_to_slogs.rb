class AddTypeColumnToSlogs < ActiveRecord::Migration
  def change
    add_column :slogs, :type, :string
  end
end
