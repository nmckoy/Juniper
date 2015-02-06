class MessagesController < ApplicationController
  before_action :get_user, only: [:new, :create]
  
  def new
    # just to display the form
    # user to send message to
    #@user = User.find(params[:user])
    
    # @message = current_user.messages.new
  end

  def create
    @recipient = @user #User.find(params[:user_object])
    
    #need to validate if user actually exists
    #shouldnt happen but it doesnt hurt
    #debugging
    # if @recipient
    #   raise 'not null'
    # else
    #   raise 'null recipient'
    # end
    
    current_user.send_message(@recipient, params[:body], params[:subject])
    flash[:notice] = "Message has been sent!"
    
    redirect_to conversations_path(:id => current_user.id)
  end
  
  private
    def get_user
      #raise params[:user].to_s
      @user = User.find(params[:user])
    end
end
