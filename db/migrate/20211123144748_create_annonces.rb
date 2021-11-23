class CreateAnnonces < ActiveRecord::Migration[6.0]
  def change
    create_table :annonces do |t|
      t.string :title, null: false
      t.integer :price, null: false
      t.text :description, null: false

      t.timestamps
    end
  end
end
