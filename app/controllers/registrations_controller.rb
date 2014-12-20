class RegistrationsController < Devise::RegistrationsController

  def new
    super
    # raise "hello"
  end

  def create
    super
  end

  def update
    super
  end

  def needemail
    if session[:omniauth]
      raise 'got to nedemail method'
    end
  end

end