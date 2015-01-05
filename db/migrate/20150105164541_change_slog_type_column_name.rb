class ChangeSlogTypeColumnName < ActiveRecord::Migration
  # lol. type is a reserved keyword in ruby
  def change
    rename_column :slogs, :type, :slog_type
  end
  
end
