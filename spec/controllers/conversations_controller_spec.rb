require 'rails_helper'

RSpec.describe ConversationsController, :type => :controller do

  describe "GET create" do
    it "returns http success" do
      get :create
      expect(response).to have_http_status(:success)
    end
  end

  describe "GET reply" do
    it "returns http success" do
      get :reply
      expect(response).to have_http_status(:success)
    end
  end

  describe "GET trash" do
    it "returns http success" do
      get :trash
      expect(response).to have_http_status(:success)
    end
  end

  describe "GET recover" do
    it "returns http success" do
      get :recover
      expect(response).to have_http_status(:success)
    end
  end

end
