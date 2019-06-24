class Api::UserAgendasController < ApplicationController
  def index
    @user_agenda = User.find_by(email:'bob@Dee.com').user_agendas.last
    @user_activities = @user_agenda.user_activities.where(date: "2019-6-22")
    byebug
    render json: @user_agenda
  end
end
