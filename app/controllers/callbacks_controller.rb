# omniauth callbacks controller
class CallbacksController < Devise::OmniauthCallbacksController
    def all

      hash = request.env['omniauth.auth']

      # p "this is hash from omniauth"
      # p "******* everything **********"
      # p hash

      @user = User.from_omniauth(hash)

      # p 'errors: '
      # p @user.errors.messages

      if @user.persisted?
        sign_in_and_redirect @user
      else
        # flash[:alert] = @user.errors.full_messages
        session[:omniauth] = hash.except('extra')
        # put error message in session so user knows what
        # to input on moreinfo page
        session[:errors] = @user.errors.messages
        session[:errors_full_messages] = @user.errors.full_messages
        # there might be errors logging in with
        # social tool; its usually an email problem
        # my user object wont save with no email
        redirect_to(controller: 'registrations', action: 'moreinfo')
      end
    end

    alias_method :facebook, :all
    alias_method :twitter, :all
    alias_method :google_oauth2, :all
end
