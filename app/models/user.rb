class User < ActiveRecord::Base
  has_one :login

  # yay validation!
  validates :name, presence: true, length: {maximum: 50}

  VALID_EMAIL_REGEX = /\A[\w\d\-.]+[@][\w\d\-.]+\.[a-z]{1,3}\z/i
  validates :email, presence: true, format: {with: VALID_EMAIL_REGEX}

  validates :password, presence: true
  validates :password_confirmation, presence: true

  # apparently i cant use getters/setters when using active record
  # or life gets screwed up
  # attr_accessor :name, :email, :password, :password_confirmation
end
