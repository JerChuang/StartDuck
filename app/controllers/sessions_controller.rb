class SessionsController < ApplicationController
  def new
  end

  def create
    user = User.find_by_email(params[:email])
      session[:user_id] = user.id
      redirect_to '/'
  end

  def destroy
    session[:user_id] = nil
  end
end