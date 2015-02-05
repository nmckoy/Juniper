Rails.application.routes.draw do
  get 'messages/new'

  get 'messages/create'

  get 'callbacks/all'
  # match 'registrations' => 'registrations#moreinfo', via: :get

  devise_for :users,
             controllers: {
                            :registrations => 'registrations' ,
                            :omniauth_callbacks => 'callbacks'
                          },
             path_names: {
                            sign_in: 'signin' , 
                            sign_up: 'signup'
                          }
  devise_scope :user do
    get '/registrations/moreinfo' => 'registrations#moreinfo'
  end

 # get 'conversations/new', to: 'conversations#new'
#  get '/conversations/:id', to: 'conversations#index', as: 'conversations'

  get 'home/show'
  get 'home/search'
  get 'home' => 'home#show'
  get 'profile' => 'users#show'
  

  resources :slogs
  resources :users
  resources :homes
  
  resources :conversations do
    member do
      get :sho
      post :reply
      post :trash
      post :recover
    end
    collection do
      get :trashbin
      post :empty_trash
    end
  end
  resources :messages do
    member do
      post :create
    end  
  end  

  root 'home#show'

  # The priority is based upon order of creation: first created -> highest priority.
  # See how all your routes lay out with "rake routes".

  # You can have the root of your site routed with "root"
  # root 'welcome#index'

  # Example of regular route:
  #   get 'products/:id' => 'catalog#view'

  # Example of named route that can be invoked with purchase_url(id: product.id)
  #   get 'products/:id/purchase' => 'catalog#purchase', as: :purchase

  # Example resource route (home HTTP verbs to controller actions automatically):
  #   resources :products

  # Example resource route with options:
  #   resources :products do
  #     member do
  #       get 'short'
  #       post 'toggle'
  #     end
  #
  #     collection do
  #       get 'sold'
  #     end
  #   end

  # Example resource route with sub-resources:
  #   resources :products do
  #     resources :comments, :sales
  #     resource :seller
  #   end

  # Example resource route with more complex sub-resources:
  #   resources :products do
  #     resources :comments
  #     resources :sales do
  #       get 'recent', on: :collection
  #     end
  #   end

  # Example resource route with concerns:
  #   concern :toggleable do
  #     post 'toggle'
  #   end
  #   resources :posts, concerns: :toggleable
  #   resources :photos, concerns: :toggleable

  # Example resource route within a namespace:
  #   namespace :admin do
  #     # Directs /admin/products/* to Admin::ProductsController
  #     # (app/controllers/admin/products_controller.rb)
  #     resources :products
  #   end
end
