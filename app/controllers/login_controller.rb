class LoginController < ApplicationController

  # used for login authentication
  def auth
    @login = Login.new
  end

end
