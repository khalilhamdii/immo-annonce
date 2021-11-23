Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :annonces
    end
  end
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root 'homepage#index'
  get '*all', to: 'homepage#index', constraints: lambda { |req|
    req.path.exclude? 'rails/active_storage'
  }
end
