# omniauth callbacks controller
class CallbacksController < Devise::OmniauthCallbacksController
    def all

      hash = request.env['omniauth.auth']

      # p "this is hash from omniauth"
      # p "\n******* everything **********"
      # p hash

      @user = User.from_omniauth(hash)

      p 'errors: '
      p @user.errors.messages

      if @user.persisted?
        sign_in_and_redirect @user

      else
        flash[:alert] = @user.errors.messages.to_s
        # session[:omniauth] = hash
        redirect_to new_user_registration_url
      end
    end

    alias_method :facebook, :all
    alias_method :twitter, :all
    alias_method :google_oauth2, :all
end
