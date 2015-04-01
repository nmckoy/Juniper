# getting slogs for one user
if (params[:user_id])
  user = User.find(params[:user_id])
  json.slogs user.slogs do |slog|
    json.extract! slog, :id, :user_id, :poster, :description, :departure_date, 
                      :slog_type
    json.created_at slog.created_at.to_datetime.strftime('%Q')
    json.updated_at slog.updated_at.to_datetime.strftime('%Q')
    json.url slog_url(slog, format: :json)
  end
# getting slogs along with user data
elsif (params[:with_user])
  json.array!(@slogs) do |slog|
    json.extract! slog, :id, :user_id, :poster, :description, :departure_date, 
                        :slog_type
    #convert dates to milliseconds
    json.created_at slog.created_at.to_datetime.strftime('%Q')
    json.updated_at slog.updated_at.to_datetime.strftime('%Q')
    json.url slog_url(slog, format: :json)
    json.user do |json|
      user = User.find(slog.user_id)
      json.extract! user, :id, :name, :email, :sign_in_count, :provider
      if (current_user == user)
        json.currentuser true
      end
      json.gravatar gravatar_url(user, {size:100})
      json.url user_url(user, format: :json)
    end
  end
# getting all slogs
else
  json.array!(@slogs) do |slog|
    json.extract! slog, :id, :user_id, :poster, :description, :departure_date, 
                        :slog_type
    #convert dates to milliseconds
    json.created_at slog.created_at.to_datetime.strftime('%Q')
    json.updated_at slog.updated_at.to_datetime.strftime('%Q')
    json.url slog_url(slog, format: :json)
  end
end