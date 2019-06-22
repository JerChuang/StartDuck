class UserAgenda < ApplicationRecord
  belongs_to :user
  has_many :user_activities
end
