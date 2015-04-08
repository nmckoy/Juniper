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
    
    def show
      @slog = Slog.find(params[:id])
    end
    
    # PATCH/PUT /users/1
    # PATCH/PUT /users/1.json
    def update
      set_slog
      respond_to do |format|
        if @slog.update(slog_params)
          format.json { render :show, status: :ok, success: 'You\'re profile was updated.' }
        else
          format.json { render json: @user.errors.full_messages, status: :unprocessable_entity }
        end
      end
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
    
    private
      def set_slog
        @slog = Slog.find(params[:id])
      end
    
      def slog_params
        params.require(:slog).permit(:description, :departure_date, :slog_type)
      end
end
