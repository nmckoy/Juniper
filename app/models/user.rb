class User < ActiveRecord::Base
  # relationship to slog posts. if user is destroyed then post is destroyed
  # well. cascading relationship (deletions)
  has_many :slogs, dependent: :destroy
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable, :timeoutable,
         :omniauthable, :omniauth_providers => [:facebook, :twitter, :google_oauth2]
  # user to user message cababilities - mailboxer
  acts_as_messageable

  # yay validation!
  validates :name,
            presence: true
  # VALID_EMAIL_REGEX = /\A([\w\d\-.][^@])+@{1}([\w\d\-.][^@])+\.[a-z]{2,3}z/i
  # validates :email,
  #           presence: true,
  #           uniqueness: {case_sensitive: false},
  #           length: {maximum: 50},
  #           format: {with: VALID_EMAIL_REGEX}
  # validates :password,
  #           presence: true,
  #           length: {minimum: 7}
  # validates :password_confirmation,
  #           presence: true,
  #           length: {minimum: 7}
  
  # user indentities for mailboxer
  # mailboxer needs to know what to show for
  # messages and conversions for each user
  #
  # configed in /initializers/mailboxer.rb
  def display_name
    email
  end
  
  def notifications_email(object)
    email
  end

  # omniauth save
  def self.from_omniauth(auth)
    # p 'NICK PROVIDER'
    # p auth.provider
    where(provider: auth.provider, uid: auth.uid).first_or_create do |user|
      user.provider = auth.provider
      user.uid = auth.uid
      user.name = auth.info.name

      # if 'facebook'.eql? user.provider
      #   p 'provider is facebook'
      #   user.email = auth.username << '@facebook.com'
      #   p 'this is email for facebook: ' << user.email
      # else
      user.email = auth.info.email
      # end

      user.password = Devise.friendly_token[0,20]
    end
  end

end
