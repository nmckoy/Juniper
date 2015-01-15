class ConversationsController < ApplicationController
  before_action :set_user, only: [:index]
  
  def index
    @conversations ||= @user.mailbox.inbox.paginate(page: params[:page])
  end
  
  def create
  end

  def reply
  end

  def trash
  end

  def recover
  end
  
  private
    def set_user
      @user = User.find(params[:id])
    end
    
end
