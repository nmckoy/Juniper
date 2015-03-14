# conversations are retrieved based on current logged in user
# since we're still in a full blown rails app
json.array!(@conversations) do |convo|
  json.extract! convo, :id, :subject
end