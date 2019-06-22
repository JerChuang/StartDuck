class CreateUserAgendas < ActiveRecord::Migration[5.2]
  def change
    create_table :user_agendas do |t|
      t.integer :user_id
      t.date :start_date
      t.date :end_date
      t.integer :hours_per_day

      t.timestamps
    end
  end
end
