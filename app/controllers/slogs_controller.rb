class SlogsController < ApplicationController
    
    def index
      @slogs = Slog.all
      
      # respond_to do |format|
      #   format.html { render :index }
      #   format.json { render json: @slogs, status: :ok }
      # end
    end
    
    def new
      @slog = Slog.new
        
    end
    
    def create
      @slog = current_user.slogs.build(slog_params)
      @slog.poster = current_user.name
      
      respond_to do |format|
        if @slog.save
          format.html { redirect_to current_user, notice: 'Slogged!' }
          format.json { render json: @slog, status: :ok, success: 'Slogged!'}
        else
          format.html { render :new }
          format.json { render json: @slog.errors.full_messages, status: :unprocessable_entity }
        end
      end
      
    end
    
    def user_slogs
      @user = User.find(params[:id])
      @slogs = @user.slogs
    end
    
    private
      def slog_params
        params.require(:slog).permit(:description, :departure_date, :slog_type)
      end
end
