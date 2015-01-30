class MessagesController < ApplicationController
  
  def new
    # just to display the form
    
    @user = User.find(params[:user])
    
    # @message = current_user.messages.new
  end

  def create
    @recipient = @user #User.find(params[:user])
    current_user.send_message(@recipient, params[:body], params[:subject])
    flash[:notice] = "Message has been sent!"
    
    redirect_to conversations_path(:id => current_user.id)
  end
end
