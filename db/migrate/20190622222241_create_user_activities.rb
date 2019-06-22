class CreateUserActivities < ActiveRecord::Migration[5.2]
  def change
    create_table :user_activities do |t|
      t.integer :activity_id
      t.integer :user_agenda_id
      t.date :date
      t.boolean :completeness

      t.timestamps
    end
  end
end
