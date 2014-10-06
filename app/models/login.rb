class Login < ActiveRecord::Base
  has_one :user

  attr_accessor :username, :password
end
