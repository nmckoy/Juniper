class User < ActiveRecord::Base
  has_one :login

  attr_accessor :name, :email, :password, :password_confirmation
end
