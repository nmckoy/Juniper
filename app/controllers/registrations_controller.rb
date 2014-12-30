class RegistrationsController < Devise::RegistrationsController

  def new
    super
    # raise "hello"
  end

  def create
    # remove provious social login errors
    # before doing save validation
    session.delete(:errors)
    session.delete(:errors_full_messages)
    
    hash = session[:omniauth]
    if hash
      @user = User.new(name: hash['info']['name'],
                       uid: hash['uid'],
                       provider: hash['provider'],
                       email: params[:user][:email],
                       password: Devise.friendly_token[0,20])
      # raise @user.email.to_s
      respond_to do |format|
        if @user.save
          format.html { sign_in_and_redirect @user, notice: 'Signed up!'}
        else
          # raise 'user was not saved'
          # nilling out email so condition will pass on moreinfo page
          # im pretty sure email is the only key i need to create
          # that may be empty in hash
          # @user.email = nil
          # flash[:alert] = @user.errors.full_messages
          format.html {render :moreinfo}

        end
      end
    else
      super
    end
  end

  def update
    super
  end

  def moreinfo
    # omniauth hash i put in session
    hash = session[:omniauth]
    if hash
      @user = User.new
      # p 'this is the omniauth session'
      # i need name and valid email to persist
      # checking these on moreinfo page to help save
      # @user.name = hash['info']['name']
      # @user.name = params['email']
      # @user.email = hash['info']['email']
    else
      raise 'there was a social media API issue'
    end
  end
  
  private
    
  
end