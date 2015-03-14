# needed some help switching back
# and forth from full blown rails app
# and angular app. these actions are intercepted
# by rails and force redirct to angular app
class AngularController < ApplicationController
  # before_action :authenticate_user!
  
  
  def index
    # kick to angular app
  end
  
  def invalid
    # any path rails doesnt recognize
    # kick to angular app
    redirect_to "/"
  end
  
end
