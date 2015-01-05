class CreateSlogs < ActiveRecord::Migration
  def change
    create_table :slogs do |t|
      t.string :description
      t.string :poster
      t.date :departure_date
      t.references :user, index: true

      t.timestamps
    end
    add_index :slogs, [:user_id, :created_at]
  end
end
