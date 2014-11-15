class CreateHomes < ActiveRecord::Migration
  def change
    create_table :homes do |t|
      t.string :from_destination
      t.string :to_destination

      t.timestamps
    end
  end
end
