class CreateTweets < ActiveRecord::Migration[6.0]
  def change
    create_table :tweets do |t|
      t.string :name
      t.string :title
      t.text :content

      t.timestamps
    end
  end
end
