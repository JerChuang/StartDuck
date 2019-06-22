class User < ApplicationRecord
  has_many :user_agendas
  has_many :user_activities through: :user_agendas
  validates :first_name, :last_name, :email, :password, presence: true
end
