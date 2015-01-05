class ChangeTypeOfDepartureDateForSlogs < ActiveRecord::Migration
  def up
    change_column :slogs, :departure_date, :string
  end
  
  def down
    change_column :slogs, :departure_date, :date
  end
end
