if (params[:currentuser])
    json.extract! current_user, :id, :name, :email, :sign_in_count, :provider
    json.url user_url(current_user, format: :json)
else
  json.users @users do |user|
    json.extract! user, :id, :name, :email, :sign_in_count, :provider
    if (current_user == user)
      json.currentuser true
    end
    json.gravatar gravatar_url(user, {size:100})
    json.url user_url(user, format: :json)
  end
end