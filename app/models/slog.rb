class Slog < ActiveRecord::Base
  belongs_to :user
  default_scope -> { order(created_at: :desc) }
  
  # method for slog post types
  def slog_types
    [['ride', 'R'], ['drive', 'D']]
  end
  
  validates :user_id, presence: true
  validates :poster, presence: true
  validates :departure_date, presence: true
  validates :description, presence: true, length: { maximum: 256 }
  validates :slog_type, presence: true
  
end