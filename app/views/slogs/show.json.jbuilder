if (params[:with_user])
  json.extract! @slog, :id, :user_id, :description, :departure_date, 
                       :slog_type, :created_at, :updated_at
  json.user do |json|
      user = User.find(@slog.user_id)
      json.extract! user, :id, :name, :email, :sign_in_count, :provider
      if (current_user == user)
        json.currentuser true
      end
      json.gravatar gravatar_url(user, {size:100})
      json.url user_url(user, format: :json)
    end
else
  json.extract! @slog, :id, :user_id, :description, :departure_date, 
                       :slog_type, :created_at, :updated_at
end