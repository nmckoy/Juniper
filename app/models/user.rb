class User < ActiveRecord::Base
  has_one :login

  # make all email address lowercase before saving
  before_save do
    self.email = email.downcase
  end

  # yay validation!
  validates :name,
            presence: true

  VALID_EMAIL_REGEX = /\A[\w\d\-.]+[@][\w\d\-.]+\.[a-z]{2,3}\z/i
  validates :email,
            presence: true,
            uniqueness: {case_sensitive: false},
            length: {maximum: 50},
            format: {with: VALID_EMAIL_REGEX}

  # validates :password,
  #           presence: true,
  #           length: {minimum: 7}
  # validates :password_confirmation,
  #           presence: true,
  #           length: {minimum: 7}

  # method implies virtual attributes for
  # password and password_confirmation
  has_secure_password

  # password is already 'cant be blank' with has_secure_password
  validates :password,
            length: {minimum: 6}
  # in Rails 4, persisting attributes is done in the controller
  # no need for attr_accessor for persisting attributes

end
