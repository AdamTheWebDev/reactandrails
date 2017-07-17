class CreateMoods < ActiveRecord::Migration[5.0]
  def change
    create_table :moods do |t|
      t.text :input
      t.string :status
      t.text :output

      t.timestamps
    end
  end
end
