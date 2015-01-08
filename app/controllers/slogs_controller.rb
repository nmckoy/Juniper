class SlogsController < ApplicationController
    
    def index
      @slogs = Slog.all
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
        else
          format.html { render :new }
        end
      end
      
    end
    
    private
      def slog_params
        params.require(:slog).permit(:description, :departure_date, :slog_type)
      end
end
