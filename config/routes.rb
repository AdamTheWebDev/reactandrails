Rails.application.routes.draw do
  root 'dashboard#index'
  namespace :api do
    resources :moods, only: [:index, :create] do
      get :search, on: :collection
    end
  end
end
