# frozen_string_literal: true

Rails.application.routes.draw do
  devise_for :users, path: ''

  root to: 'home#index'

  resources :landing_pages do
    collection do
      post 'upload_template'
      post 'set_asset'
    end
  end

  get '/user' => 'landing_pages#index', :as => :user_root
end
