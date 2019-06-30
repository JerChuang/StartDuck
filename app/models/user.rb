class User < ApplicationRecord
  has_many :user_agendas
  has_many :user_activities, through: :user_agendas
  validates :email, presence: true
  validates :email, uniqueness: true
end
