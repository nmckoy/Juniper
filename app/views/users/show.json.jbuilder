json.extract! @user, :id, :name, :email, :sign_in_count, :provider
if (current_user == @user)
    json.currentuser true
  end
json.gravatar gravatar_url(@user, {size:100})