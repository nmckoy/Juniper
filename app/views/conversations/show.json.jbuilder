json.extract! @conversation, :id, :subject
json.messages do
  json.array!(@receipts) do |receipt|
    json.sentTime receipt.updated_at.to_datetime.strftime('%Q')
    json.body receipt.message.body
    json.user do
      user = receipt.message.sender
      json.extract! user, :id, :name, :email, :sign_in_count, :provider
      if (current_user == user)
        json.currentuser true
      end
      json.gravatar gravatar_url(user, {size:100})
      json.url user_url(user, format: :json)
    end
  end
end