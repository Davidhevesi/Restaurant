Rails.application.routes.draw do

  get 'pages/index'
  root 'pages#index'
  
  namespace :api do
      resources :restaurants, param: :slug
      resources :reviews, only: [:create, :destroy]
  end

  get '*path', to: 'pages#index', via: :all
end