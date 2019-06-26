class Api::UserAgendasController < ApplicationController
  def create
    @agenda = UserAgenda.new(agenda_params)
    @user = User.find_by(email:params['email'])
    @user_id = @user.id
    @agenda.user_id = @user_id
    @agenda.save

  end

private
  def agenda_params
    params.require(:user_agenda).permit(
        :start_date,
        :end_date,
        :hours_per_day
    )
  end

end
