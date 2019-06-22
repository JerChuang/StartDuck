class CreateActivities < ActiveRecord::Migration[5.2]
  def change
    create_table :activities do |t|
      t.string :name
      t.text :content
      t.integer :category_id
      t.integer :duration
      t.integer :before_activity_id
      t.integer :after_activity_id

      t.timestamps
    end
  end
end
