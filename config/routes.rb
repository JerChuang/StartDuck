Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api do
    get '/data', to: 'tests#index'

    resources :activities
    resources :categories
    resources :user_agendas
    resources :user_activities
    resources :users, only: [:create]

    namespace :admin do
      resources :activities
      resources :categories
    end
  
  end


  get '*path', to: "static_pages#fallback_index_html", constraints: ->(request) do
    !request.xhr? && request.format.html?
  end
end

