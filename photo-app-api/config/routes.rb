Rails.application.routes.draw do
  namespace :api do
    resources :users, only: [:new, :create, :update, :delete]
    resources :posts, except: [:new, :edit]
  end
end
