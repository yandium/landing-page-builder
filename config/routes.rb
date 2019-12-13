# frozen_string_literal: true

Rails.application.routes.draw do
  resources :landing_pages do
    collection do
      post 'upload_template'
      post 'set_asset'
    end
  end
  devise_for :users, path: ''

  root to: 'home#index'

  get '/user' => 'landing_pages#index', :as => :user_root
end
