# overidden Conversations Controller from mailboxer
class ConversationsController < ApplicationController
  before_filter :get_user, only: [:index]
  helper_method :mailbox, :conversation
  
  def index
    # raise 'index action call'
    @conversations ||= current_user.mailbox.inbox.paginate(page: params[:page])
  end
  
  def create
    
  end

  def reply
    current_user.reply_to_conversation(conversation, *message_params(:body, :subject))
    redirect_to conversation
  end

  # trashh stuff
  def trashbin
    @trash ||= current_user.mailbox.trash.all
  end

  def empty_trash
    current_user.mailbox.trash.each do |conversation|
      conversation.receipts_for(current_user).update_all(:deleted => true)
    end
    redirect_to :conversations
  end

  def trash
    conversation.move_to_trash(current_user)
    redirect_to :conversations
  end

  def recover
    conversation.untrash(current_user)
    redirect_to :conversations
  end
  
# private methods #
  private
    def get_user
      @user = User.find(params[:id])
    end
    
    def mailbox
      @mailbox ||= current_user.mailbox
    end

    def conversation
      @conversation ||= mailbox.conversations.find(params[:id])
    end

    def conversation_params(*keys)
      fetch_params(:conversation, *keys)
    end

    def message_params(*keys)
      fetch_params(:message, *keys)
    end

    def fetch_params(key, *subkeys)
      params[key].instance_eval do
        case subkeys.size
        when 0 then self
        when 1 then self[subkeys.first]
        else subkeys.map{|k| self[k] }
        end
      end
    end
    
end
