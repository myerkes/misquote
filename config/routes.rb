Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root 'messages#index'

  get '/messages' => 'messages#index', as: :messages
  get '/pages' => 'pages#index', as: :pages
end
