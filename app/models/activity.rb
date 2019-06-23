class Activity < ApplicationRecord
  has_many :user_activities
  belongs_to :category
end
