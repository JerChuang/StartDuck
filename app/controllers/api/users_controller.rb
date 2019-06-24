class Api::UsersController < ApplicationController
  def index
    render :json => {
      message: "hello! from user"
    }
  end
end
